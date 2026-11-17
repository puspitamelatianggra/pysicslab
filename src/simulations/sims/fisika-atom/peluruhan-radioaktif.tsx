/* ============================================================
   SIMULASI: Peluruhan Radioaktif dan Waktu Paruh (Bab 5-3)
   ============================================================
   Susunan file mengikuti gerak-parabola.tsx:
   1. Tetapan dan fungsi fisika murni (tanpa React).
   2. Komponen: state pengatur → keadaan inti (useRef) → loop → gambar → <SimShell>.

   Hubungan yang harus bisa ditemukan siswa:
   - waktu paruh lebih panjang → peluruhan lebih lambat
   - N₀ tidak mengubah waktu paruh
   - N lebih besar → aktivitas lebih besar (sebanding)
   - N₀ kecil → fluktuasi acak relatif lebih besar (peluruhan bersifat statistik)
   ============================================================ */

import { IconChartDots } from '@tabler/icons-react';
import { useEffect, useRef, useState } from 'react';
import {
    angka, angkaTetap, Ctx, DT, kotak, label, OpsiGrafik, useSimLoop, warnaSim,
} from '../../engine';
import {
    Bacaan, BarisBacaan, BarisRumus, Besaran, GrafikHidup, mfrac, mi, mn, mo, msub, msup, mtext,
    Panel, Panggung, Percobaan, Pilihan, PlayBar, RumusHidup, Sakelar, SelidikiHubungan, SimShell,
    Tantangan, useTantangan,
} from '../../ui';

/* ---------- 1. Fisika ---------- */

const LN2 = Math.LN2;
const TAU_AKHIR = 6; // percobaan berhenti setelah 6 waktu paruh
const LAJU = 0.6; // waktu paruh per detik layar pada kecepatan putar 1×
const DTAU = LAJU * DT; // kemajuan waktu (dalam waktu paruh) tiap langkah simulasi

/** Pembangkit bilangan acak berbenih (mulberry32): urutan sama untuk benih sama. */
export function mulberry32(benih: number): () => number {
    let a = benih >>> 0;
    return () => {
        a = (a + 0x6d2b79f5) >>> 0;
        let t = a;
        t = Math.imul(t ^ (t >>> 15), t | 1);
        t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
}

/** Kurva teori: N = N₀·(½)^(t/T½). Waktu dalam satuan yang sama dengan waktu paruh. */
export function intiTeori(n0: number, t: number, waktuParuh: number): number {
    return n0 * Math.pow(0.5, t / waktuParuh);
}

/** Tetapan peluruhan λ = ln 2 / T½. */
export function tetapanPeluruhan(waktuParuh: number): number {
    return LN2 / waktuParuh;
}

/** Aktivitas A = λN. */
export function aktivitas(n: number, waktuParuh: number): number {
    return tetapanPeluruhan(waktuParuh) * n;
}

/** Peluang satu inti meluruh dalam selang dt: 1 − exp(−λ dt). dt dalam satuan waktu paruh. */
export function peluangLuruh(dtau: number): number {
    return 1 - Math.exp(-LN2 * dtau);
}

/**
 * Satu langkah peluruhan. `hidup[i] = 1` berarti inti ke-i masih induk.
 * Mengembalikan jumlah inti yang meluruh pada langkah ini.
 */
export function langkahPeluruhan(hidup: Uint8Array, p: number, rng: () => number): number {
    let luruh = 0;
    for (let i = 0; i < hidup.length; i++) {
        if (hidup[i] === 1 && rng() < p) {
            hidup[i] = 0;
            luruh++;
        }
    }
    return luruh;
}

/** Jalankan simulasi tanpa tampilan dan kembalikan jumlah inti tersisa pada waktu `tau` (dalam waktu paruh). */
export function jalankanSampai(n0: number, benih: number, tau: number, dtau = DTAU): number {
    const hidup = new Uint8Array(n0).fill(1);
    const rng = mulberry32(benih);
    const p = peluangLuruh(dtau);
    let sisa = n0;
    const langkah = Math.round(tau / dtau);
    for (let i = 0; i < langkah; i++) sisa -= langkahPeluruhan(hidup, p, rng);
    return sisa;
}

/* ---------- 2. Komponen ---------- */

interface Isotop {
    id: string;
    nama: string;
    /** Waktu paruh dalam satuannya sendiri */
    waktuParuh: number;
    satuan: string;
    /** Waktu paruh dalam tahun, supaya semua isotop bisa dibandingkan di satu sumbu */
    tahun: number;
}

const ISOTOP: Isotop[] = [
    { id: 'c14', nama: 'Karbon-14', waktuParuh: 5730, satuan: 'tahun', tahun: 5730 },
    { id: 'i131', nama: 'Iodin-131', waktuParuh: 8, satuan: 'hari', tahun: 8 / 365.25 },
    { id: 'co60', nama: 'Kobalt-60', waktuParuh: 5.3, satuan: 'tahun', tahun: 5.3 },
    { id: 'tc99m', nama: 'Teknesium-99m', waktuParuh: 6, satuan: 'jam', tahun: 6 / (24 * 365.25) },
];

type Status = 'siap' | 'jalan' | 'selesai';

const BEBAS: Besaran[] = [
    { id: 'thalf', label: 'waktu paruh isotop (dalam tahun)', simbol: 'T½', satuan: 'tahun', desimal: 4 },
    { id: 'n0', label: 'jumlah inti awal', simbol: 'N₀', satuan: 'inti', desimal: 0 },
];

const TERIKAT: Besaran[] = [
    { id: 'rasio', label: 'waktu paruh terukur dibagi teori', simbol: 'T½ ukur / T½', satuan: 'kali', desimal: 2 },
    { id: 'sisa3', label: 'sisa inti setelah 3 waktu paruh', simbol: 'N(3T½)', satuan: 'inti', desimal: 0 },
    { id: 'simpangan', label: 'penyimpangan terbesar dari kurva teori', simbol: 'Δ maks', satuan: '% dari N₀', desimal: 1 },
    { id: 'tukur', label: 'waktu paruh terukur', simbol: 'T½ ukur', satuan: 'tahun', desimal: 4 },
    { id: 'a0', label: 'aktivitas awal', simbol: 'A₀', satuan: 'peluruhan/tahun', desimal: 1 },
];

const TANTANGAN = [
    { id: 'seperempat', teks: 'Jeda simulasi saat inti tersisa antara 24% dan 26% dari jumlah awal. Lihat berapa waktu paruh yang sudah lewat. Harusnya sekitar 2.' },
    { id: 'duaIsotop', teks: 'Jalankan dua isotop yang berbeda sampai selesai (6 waktu paruh). Bandingkan lama waktunya di satuan masing-masing.' },
    { id: 'bandingN0', teks: 'Jalankan sampai selesai dengan N₀ = 100, lalu dengan N₀ = 900. Mana yang kurvanya lebih dekat ke kurva teori? Lihat penyimpangan terbesarnya.' },
];

const PILIHAN_N0 = [100, 400, 900].map((n) => ({ nilai: n, label: String(n) }));

export default function PeluruhanRadioaktif() {
    // Pengatur
    const [isotopId, setIsotopId] = useState('i131');
    const [n0, setN0] = useState(400);
    const [tampilTeori, setTampilTeori] = useState(true);
    const isotop = ISOTOP.find((i) => i.id === isotopId) ?? ISOTOP[0];
    const T = isotop.waktuParuh;

    // Keadaan inti
    const hidupRef = useRef<Uint8Array>(new Uint8Array(n0).fill(1));
    const rngRef = useRef(mulberry32(1));
    const langkahRef = useRef(0);
    const sisaRef = useRef(n0);
    const riwayatRef = useRef<number[]>([n0]); // jumlah inti tiap langkah, indeks = nomor langkah
    const tUkurRef = useRef<number | null>(null); // dalam waktu paruh
    const simpanganRef = useRef(0); // % dari N₀
    const sisa3Ref = useRef(n0);
    const statusRef = useRef<Status>('siap');
    const benihRef = useRef(100);
    const [status, setStatus] = useState<Status>('siap');
    const aturStatus = (s: Status) => {
        statusRef.current = s;
        setStatus(s);
    };

    const [percobaan, setPercobaan] = useState<Percobaan[]>([]);
    const [selesai, tandai] = useTantangan();
    const selesaiIsotopRef = useRef(new Set<string>());
    const selesaiN0Ref = useRef(new Set<number>());

    const loop = useSimLoop(() => {
        if (statusRef.current !== 'jalan') return;
        langkahRef.current += 1;
        const nomor = langkahRef.current;
        const tau = nomor * DTAU;
        sisaRef.current -= langkahPeluruhan(hidupRef.current, peluangLuruh(DTAU), rngRef.current);
        riwayatRef.current.push(sisaRef.current);
        if (tUkurRef.current === null && sisaRef.current <= n0 / 2) tUkurRef.current = tau;
        if (nomor === Math.round(3 / DTAU)) sisa3Ref.current = sisaRef.current;
        simpanganRef.current = Math.max(simpanganRef.current, (Math.abs(sisaRef.current - intiTeori(n0, tau, 1)) / n0) * 100);
        if (tau >= TAU_AKHIR - 1e-9) saatSelesai();
    });

    function saatSelesai() {
        aturStatus('selesai');
        loop.jeda();
        const tUkur = tUkurRef.current ?? TAU_AKHIR;
        setPercobaan((p) => [...p, {
            nilai: {
                thalf: isotop.tahun, n0,
                rasio: tUkur, sisa3: sisa3Ref.current, simpangan: simpanganRef.current,
                tukur: tUkur * isotop.tahun, a0: aktivitas(n0, isotop.tahun),
            },
        }]);
        selesaiIsotopRef.current.add(isotop.id);
        selesaiN0Ref.current.add(n0);
        if (selesaiIsotopRef.current.size >= 2) tandai('duaIsotop');
        if (selesaiN0Ref.current.has(100) && selesaiN0Ref.current.has(900)) tandai('bandingN0');
    }

    function siapkan() {
        hidupRef.current = new Uint8Array(n0).fill(1);
        rngRef.current = mulberry32(benihRef.current++);
        langkahRef.current = 0;
        sisaRef.current = n0;
        riwayatRef.current = [n0];
        tUkurRef.current = null;
        simpanganRef.current = 0;
        sisa3Ref.current = n0;
        aturStatus('siap');
        loop.jeda();
    }

    // Isotop atau N₀ diganti: mulai dari awal
    useEffect(() => {
        siapkan();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isotopId, n0]);

    // Tantangan 1: jeda di tengah percobaan saat sisa 24% sampai 26%
    useEffect(() => {
        if (loop.jalan || statusRef.current !== 'jalan') return;
        const bagian = sisaRef.current / n0;
        if (bagian >= 0.24 && bagian <= 0.26) tandai('seperempat');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loop.jalan, loop.denyut]);

    const mulai = () => {
        if (statusRef.current === 'selesai') siapkan();
        aturStatus('jalan');
        loop.mainkan();
    };

    const ulang = () => siapkan();

    // Bacaan saat ini
    const sisa = sisaRef.current;
    const tau = langkahRef.current * DTAU;
    const tNyata = tau * T;

    /* ----- Gambar panggung ----- */

    const gambar = (ctx: Ctx, w: number, h: number) => {
        const c = warnaSim();
        const hidup = hidupRef.current;
        const jumlah = hidup.length;
        const sisiKisi = Math.round(Math.sqrt(jumlah));
        const ukuran = Math.min(h - 16, w * 0.58);
        const x0 = 8;
        const y0 = (h - ukuran) / 2;
        const sel = ukuran / sisiKisi;
        const celah = sel >= 8 ? 1.5 : 1;

        ctx.save();
        ctx.lineWidth = 1;
        for (let i = 0; i < jumlah; i++) {
            const kol = i % sisiKisi;
            const baris = Math.floor(i / sisiKisi);
            const x = x0 + kol * sel + celah / 2;
            const y = y0 + baris * sel + celah / 2;
            const lebar = sel - celah;
            const induk = hidup[i] === 1;
            ctx.fillStyle = induk ? c.oranye : c.krem;
            ctx.fillRect(x, y, lebar, lebar);
            ctx.strokeStyle = induk ? c.gelap : c.redup;
            ctx.strokeRect(x + 0.5, y + 0.5, lebar - 1, lebar - 1);
        }
        ctx.restore();
        kotak(ctx, x0, y0, ukuran, ukuran, { isi: 'none', tebal: 2 });

        // Penghitung waktu dan keterangan di kanan
        const xk = x0 + ukuran + 14;
        const tauKini = langkahRef.current * DTAU;
        label(ctx, isotop.nama, xk, y0 + 10, { ukuran: 14 });
        label(ctx, `t = ${angkaTetap(tauKini * T, 2)} ${isotop.satuan}`, xk, y0 + 38, { ukuran: 12, latar: c.lime });
        label(ctx, `${angkaTetap(tauKini, 2)} waktu paruh`, xk, y0 + 66, { ukuran: 12, tebal: 600 });
        label(ctx, `N = ${sisaRef.current}`, xk, y0 + 90, { ukuran: 13 });

        // Keterangan warna
        const yl = y0 + ukuran - 36;
        kotak(ctx, xk, yl - 6, 12, 12, { isi: c.oranye, tebal: 1.5 });
        label(ctx, 'belum meluruh', xk + 18, yl, { ukuran: 11, tebal: 600 });
        kotak(ctx, xk, yl + 16, 12, 12, { isi: c.krem, garis: c.redup, tebal: 1.5 });
        label(ctx, 'sudah meluruh', xk + 18, yl + 22, { ukuran: 11, tebal: 600 });
    };

    /* ----- Grafik N terhadap t ----- */

    const ambilGrafik = (): OpsiGrafik => {
        const c = warnaSim();
        const rw = riwayatRef.current;
        const data: { x: number; y: number }[] = [];
        for (let i = 0; i < rw.length; i += 4) data.push({ x: i * DTAU * T, y: rw[i] });
        const akhir = rw.length - 1;
        if (akhir % 4 !== 0) data.push({ x: akhir * DTAU * T, y: rw[akhir] });
        const teori: { x: number; y: number }[] = [];
        for (let k = 0; k <= TAU_AKHIR * 10; k++) teori.push({ x: (k / 10) * T, y: intiTeori(n0, (k / 10) * T, T) });
        const bantu = [1, 2, 3].map((k) => ({
            nama: `T½ ${k}`,
            titik: [{ x: k * T, y: 0 }, { x: k * T, y: n0 * 1.05 }],
            warna: c.kisi,
            tebal: 1.5,
        }));
        return {
            seri: [
                ...bantu,
                ...(tampilTeori ? [{ nama: 'teori', titik: teori, gaya: 'putus' as const, warna: c.redup, tebal: 2 }] : []),
                { nama: 'simulasi', titik: data, warna: c.gelap, tebal: 2.5 },
            ],
            penanda: [{ x: tau * T, y: sisa }],
            labelX: `t (${isotop.satuan})`, labelY: 'N (inti)',
            xMin: 0, xMaks: TAU_AKHIR * T, yMin: 0, yMaks: n0 * 1.05,
        };
    };

    /* ----- Rumus dengan angka saat ini ----- */

    const N0 = msub(mi('N'), mn(0));
    const waktuParuh = msub(mi('T'), `<mfrac><mn>1</mn><mn>2</mn></mfrac>`);
    const teoriSekarang = intiTeori(n0, tau, 1);
    const barisRumus: BarisRumus[] = [
        {
            mathml: `${mi('N')}${mo('=')}${N0}${mo('·')}${msup(mo('(') + mfrac(mn(1), mn(2)) + mo(')'), mfrac(mi('t'), waktuParuh))}`,
            baca: 'N sama dengan N nol kali setengah pangkat t per waktu paruh',
        },
        {
            mathml: `${mo('=')}${mn(n0)}${mo('×')}${msup(mo('(') + mfrac(mn(1), mn(2)) + mo(')'), mn(angka(tau, 2)))}${mo('=')}${mn(angka(teoriSekarang, 1))}`,
            baca: `sama dengan ${n0} kali setengah pangkat ${angka(tau, 2)}, yaitu ${angka(teoriSekarang, 1)} inti`,
        },
        {
            mathml: `${mi('A')}${mo('=')}${mi('λ')}${mi('N')}${mo(',')}${mtext('')}${mi('λ')}${mo('=')}${mfrac(`${mi('ln')}${mn(2)}`, waktuParuh)}`,
            baca: 'aktivitas A sama dengan lambda kali N, dengan lambda sama dengan l n dua per waktu paruh',
        },
    ];
    const catatanRumus = `Kurva teori memberi ${angka(teoriSekarang, 1)} inti, simulasi memberi ${sisa}. Selisihnya muncul karena peluruhan bersifat acak.`;

    /* ----- Pembaca layar ----- */

    const deskripsi = status === 'siap'
        ? `Kisi ${n0} inti ${isotop.nama}, semuanya belum meluruh. Waktu paruh ${angka(T, 1)} ${isotop.satuan}.`
        : status === 'jalan'
            ? `Peluruhan berjalan. Waktu ${angka(tNyata, 2)} ${isotop.satuan}, ${angka(tau, 2)} waktu paruh. Tersisa ${sisa} dari ${n0} inti.`
            : `Percobaan selesai setelah 6 waktu paruh. Tersisa ${sisa} dari ${n0} inti. Waktu paruh terukur ${tUkurRef.current === null ? 'belum tercapai' : `${angka(tUkurRef.current, 2)} kali waktu paruh teori`}.`;

    const tUkur = tUkurRef.current;

    return (
        <SimShell
            panggung={<Panggung gambar={gambar} deskripsi={deskripsi} />}
            kendaliPutar={
                <PlayBar
                    loop={loop}
                    onMulai={mulai}
                    onUlang={ulang}
                    labelMulai={status === 'siap' ? 'Mulai' : status === 'selesai' ? 'Ulangi' : 'Lanjut'}
                />
            }
            bacaan={
                <BarisBacaan>
                    <Bacaan label="Inti tersisa (N)" nilai={String(sisa)} sorot="lime" />
                    <Bacaan label="Inti sudah meluruh" nilai={String(n0 - sisa)} />
                    <Bacaan label="Waktu berjalan (t)" nilai={angkaTetap(tNyata, 2)} satuan={isotop.satuan} />
                    <Bacaan label="Aktivitas (% dari awal)" nilai={angkaTetap((sisa / n0) * 100, 1)} satuan="%" />
                    <Bacaan label="Waktu paruh terukur" nilai={tUkur === null ? '–' : angkaTetap(tUkur * T, 2)} satuan={tUkur === null ? undefined : isotop.satuan} />
                    <Bacaan label="Simpangan terbesar" nilai={angkaTetap(simpanganRef.current, 1)} satuan="% N₀" />
                </BarisBacaan>
            }
            pengatur={
                <>
                    <Pilihan
                        label="Isotop"
                        nilai={isotopId}
                        pilihan={ISOTOP.map((i) => ({ nilai: i.id, label: i.nama }))}
                        onUbah={setIsotopId}
                    />
                    <p className="text-xs text-muted">
                        Waktu paruh {isotop.nama}: {angka(isotop.waktuParuh, 1)} {isotop.satuan}. Percobaan berhenti setelah 6 waktu paruh.
                    </p>
                    <Pilihan label="Jumlah inti awal (N₀)" nilai={n0} pilihan={PILIHAN_N0} onUbah={setN0} />
                    <Sakelar label="Tampilkan kurva teori" aktif={tampilTeori} onUbah={setTampilTeori} />
                    <p className="text-xs text-muted">
                        Pada kecepatan 1×, simulasi berjalan {angka(LAJU, 1)} waktu paruh per detik layar. Ubah kecepatan di tombol putar.
                    </p>
                </>
            }
            rumus={<RumusHidup baris={barisRumus} catatan={catatanRumus} />}
            grafik={
                <Panel judul="Grafik inti tersisa terhadap waktu" ikon={<IconChartDots size={18} stroke={2.5} aria-hidden="true" />}>
                    <GrafikHidup
                        ambil={ambilGrafik}
                        rasio={1.9}
                        deskripsi={`Grafik jumlah inti ${isotop.nama} terhadap waktu dalam ${isotop.satuan}. Sekarang tersisa ${sisa} dari ${n0} inti pada ${angka(tNyata, 2)} ${isotop.satuan}. Garis bantu tegak ada di satu, dua, dan tiga waktu paruh.${tampilTeori ? ' Kurva teori putus-putus.' : ''}`}
                        keterangan={[
                            { nama: 'simulasi' },
                            ...(tampilTeori ? [{ nama: 'teori', warna: warnaSim().redup, putus: true }] : []),
                            { nama: 'tiap T½', warna: warnaSim().kisi },
                        ]}
                    />
                    <p className="text-xs text-muted mt-2">
                        Garis tegak abu-abu ada di T½, 2T½, dan 3T½. Tiap garis itu, jumlah inti menjadi setengah dari sebelumnya.
                    </p>
                </Panel>
            }
            selidiki={
                <SelidikiHubungan
                    bebas={BEBAS}
                    terikat={TERIKAT}
                    percobaan={percobaan}
                    onHapus={() => setPercobaan([])}
                    ajakan="Jalankan satu percobaan sampai selesai, lalu ganti N₀ saja (atau isotopnya saja) dan jalankan lagi. Waktu paruh semua isotop ditulis dalam tahun supaya bisa dibandingkan. Tiap percobaan yang selesai jadi satu titik."
                />
            }
            tantangan={<Tantangan daftar={TANTANGAN} selesai={selesai} />}
        />
    );
}
