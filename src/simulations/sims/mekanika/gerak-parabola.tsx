/* ============================================================
   SIMULASI: Gerak Parabola (Bab 1-3)  ← CONTOH ACUAN
   ============================================================
   Susunan file simulasi (ikuti urutan ini di simulasi lain):
   1. Tetapan dan fungsi fisika murni (tanpa React), supaya mudah diperiksa.
   2. Komponen: state pengatur → hasil hitung (useMemo) → keadaan gerak (useRef)
      → loop → fungsi gambar panggung → susunan <SimShell>.

   Hubungan yang harus bisa ditemukan siswa:
   - v₀ naik → jarak dan tinggi naik (sebanding v₀²)
   - sudut: jarak terjauh di 45°, dua sudut berpenyiku (mis. 30° dan 60°) sama jauh
   - tanpa hambatan udara, massa tidak berpengaruh
   - dengan hambatan udara: jarak berkurang, lintasan tidak simetris,
     dan bola yang lebih berat terbang lebih jauh
   ============================================================ */

import { IconChartDots, IconEraser } from '@tabler/icons-react';
import { useEffect, useMemo, useRef, useState } from 'react';
import {
    angka, angkaTetap, buatSkala, bulat, Ctx, gambarSumbu, garis, jepit, kotak, label,
    lintasan as gambarLintasan, OpsiGrafik, panah, rad, useSimLoop, warnaSim,
} from '../../engine';
import {
    Bacaan, BarisBacaan, BarisRumus, Besaran, GrafikHidup, mfrac, mi, mn, mo, msqrt, msub, msup, mtext,
    Panel, Panggung, Percobaan, Pilihan, PlayBar, RumusHidup, Sakelar, SelidikiHubungan, SimShell,
    Slider, Tantangan, Tombol, useTantangan,
} from '../../ui';

/* ---------- 1. Fisika ---------- */

const G = 10; // m/s², dibulatkan seperti di buku SMA
// Hambatan udara F = k·v². k = ½·ρ·C·A untuk bola berjari-jari 10 cm (ρ = 1,2 kg/m³, C = 0,47).
// Ukuran bola selalu sama; yang diubah siswa hanya massanya.
const K_UDARA = 0.0089;
const DT_LINTASAN = 1 / 120;

interface Keadaan {
    t: number;
    x: number;
    y: number;
    vx: number;
    vy: number;
}

interface Lintasan {
    titik: Keadaan[];
    jarak: number;
    tinggiMaks: number;
    waktu: number;
    udara: boolean;
}

export function hitungLintasan(v0: number, sudutDerajat: number, massa: number, udara: boolean, h0: number): Lintasan {
    const v0x = v0 * Math.cos(rad(sudutDerajat));
    const v0y = v0 * Math.sin(rad(sudutDerajat));
    const titik: Keadaan[] = [];

    if (!udara) {
        // Tanpa hambatan udara: pakai rumus langsung supaya hasilnya tepat
        const waktu = (v0y + Math.sqrt(v0y * v0y + 2 * G * h0)) / G;
        for (let t = 0; t < waktu - 1e-9; t += DT_LINTASAN) {
            titik.push({ t, x: v0x * t, y: h0 + v0y * t - 0.5 * G * t * t, vx: v0x, vy: v0y - G * t });
        }
        titik.push({ t: waktu, x: v0x * waktu, y: 0, vx: v0x, vy: v0y - G * waktu });
        return { titik, jarak: v0x * waktu, tinggiMaks: h0 + (v0y * v0y) / (2 * G), waktu, udara };
    }

    // Dengan hambatan udara: hitung langkah demi langkah (metode titik tengah)
    const c = K_UDARA / massa;
    const percepatan = (vx: number, vy: number) => {
        const v = Math.hypot(vx, vy);
        return { ax: -c * v * vx, ay: -G - c * v * vy };
    };
    let k: Keadaan = { t: 0, x: 0, y: h0, vx: v0x, vy: v0y };
    let tinggiMaks = h0;
    titik.push(k);
    for (let i = 0; i < 20000; i++) {
        const dt = DT_LINTASAN;
        const a1 = percepatan(k.vx, k.vy);
        const vxT = k.vx + a1.ax * dt * 0.5;
        const vyT = k.vy + a1.ay * dt * 0.5;
        const a2 = percepatan(vxT, vyT);
        const baru: Keadaan = {
            t: k.t + dt,
            x: k.x + vxT * dt,
            y: k.y + vyT * dt,
            vx: k.vx + a2.ax * dt,
            vy: k.vy + a2.ay * dt,
        };
        if (baru.y <= 0) {
            // Cari saat tepat menyentuh tanah di antara dua langkah
            const f = k.y / (k.y - baru.y);
            const akhir: Keadaan = {
                t: k.t + f * dt,
                x: k.x + f * (baru.x - k.x),
                y: 0,
                vx: k.vx + f * (baru.vx - k.vx),
                vy: k.vy + f * (baru.vy - k.vy),
            };
            titik.push(akhir);
            return { titik, jarak: akhir.x, tinggiMaks, waktu: akhir.t, udara };
        }
        tinggiMaks = Math.max(tinggiMaks, baru.y);
        titik.push(baru);
        k = baru;
    }
    return { titik, jarak: k.x, tinggiMaks, waktu: k.t, udara };
}

/** Keadaan bola pada waktu t, disisipkan di antara dua titik lintasan terdekat. */
function keadaanPada(l: Lintasan, t: number): Keadaan {
    const tt = jepit(t, 0, l.waktu);
    const i = Math.min(l.titik.length - 2, Math.floor(tt / DT_LINTASAN));
    const a = l.titik[i];
    const b = l.titik[i + 1];
    const f = b.t - a.t > 1e-12 ? (tt - a.t) / (b.t - a.t) : 0;
    return {
        t: tt,
        x: a.x + f * (b.x - a.x),
        y: a.y + f * (b.y - a.y),
        vx: a.vx + f * (b.vx - a.vx),
        vy: a.vy + f * (b.vy - a.vy),
    };
}

/* ---------- 2. Komponen ---------- */

type Status = 'siap' | 'terbang' | 'mendarat';

const BEBAS: Besaran[] = [
    { id: 'v0', label: 'kecepatan awal', simbol: 'v₀', satuan: 'm/s', desimal: 0 },
    { id: 'sudut', label: 'sudut tembak', simbol: 'θ', satuan: '°', desimal: 0 },
    { id: 'massa', label: 'massa bola', simbol: 'm', satuan: 'kg', desimal: 1 },
    { id: 'h0', label: 'tinggi awal', simbol: 'h₀', satuan: 'm', desimal: 0 },
];

const TERIKAT: Besaran[] = [
    { id: 'jarak', label: 'jarak mendatar', simbol: 'x maks', satuan: 'm', desimal: 1 },
    { id: 'tinggi', label: 'tinggi maksimum', simbol: 'y maks', satuan: 'm', desimal: 1 },
    { id: 'waktu', label: 'waktu di udara', simbol: 't', satuan: 's', desimal: 2 },
];

const TANTANGAN = [
    { id: 'tepat40', teks: 'Tanpa hambatan udara, daratkan bola di bendera 40 m. Boleh meleset paling banyak 1 m.' },
    { id: 'duaSudut', teks: 'Tanpa hambatan udara dan dari tanah (tinggi awal 0), temukan dua sudut berbeda yang mendaratkan bola di jarak yang sama. Kecepatan awalnya jangan diubah.' },
    { id: 'beratLebihJauh', teks: 'Nyalakan hambatan udara. Tembakkan dua bola yang massanya berbeda dengan kecepatan dan sudut yang sama, lalu lihat mana yang lebih jauh.' },
];

const PILIHAN_PANDANG = [25, 50, 100, 150]; // lebar panggung dalam meter
const PX_PER_MS = 2.4; // panjang panah kecepatan: piksel per (m/s)

export default function GerakParabola() {
    // Pengatur
    const [v0, setV0] = useState(18);
    const [sudut, setSudut] = useState(35);
    const [massa, setMassa] = useState(2);
    const [udara, setUdara] = useState(false);
    const [h0, setH0] = useState(0);
    const [tampilVektor, setTampilVektor] = useState(true);
    const [grafik, setGrafik] = useState<'y' | 'v'>('y');

    const lintasan = useMemo(() => hitungLintasan(v0, sudut, massa, udara, h0), [v0, sudut, massa, udara, h0]);

    // Keadaan gerak
    const tRef = useRef(0);
    const statusRef = useRef<Status>('siap');
    const [status, setStatus] = useState<Status>('siap');
    const aturStatus = (s: Status) => {
        statusRef.current = s;
        setStatus(s);
    };

    // Jejak tembakan sebelumnya (paling banyak 5) dan data percobaan
    const [jejak, setJejak] = useState<Lintasan[]>([]);
    const mendaratRef = useRef<Lintasan | null>(null);
    const [percobaan, setPercobaan] = useState<Percobaan[]>([]);
    const [selesai, tandai] = useTantangan();

    const loop = useSimLoop((dt) => {
        if (statusRef.current === 'mendarat') return;
        if (statusRef.current === 'siap') aturStatus('terbang');
        tRef.current += dt;
        if (tRef.current >= lintasan.waktu) {
            tRef.current = lintasan.waktu;
            saatMendarat();
        }
    });

    function saatMendarat() {
        aturStatus('mendarat');
        loop.jeda();
        mendaratRef.current = lintasan;
        const baru: Percobaan = {
            nilai: {
                v0, sudut, massa, h0, udara: udara ? 1 : 0,
                jarak: lintasan.jarak, tinggi: lintasan.tinggiMaks, waktu: lintasan.waktu,
            },
        };
        const semua = [...percobaan, baru];
        setPercobaan(semua);

        // Periksa tantangan
        const n = baru.nilai;
        if (!udara && Math.abs(n.jarak - 40) <= 1) tandai('tepat40');
        for (const p of percobaan) {
            const q = p.nilai;
            const samaV0 = q.v0 === n.v0;
            if (!udara && q.udara === 0 && samaV0 && q.h0 === 0 && n.h0 === 0
                && Math.abs(q.sudut - n.sudut) >= 5 && Math.abs(q.jarak - n.jarak) <= 0.5) {
                tandai('duaSudut');
            }
            if (udara && q.udara === 1 && samaV0 && q.sudut === n.sudut && q.h0 === n.h0 && q.massa !== n.massa) {
                const berat = q.massa > n.massa ? q : n;
                const ringan = q.massa > n.massa ? n : q;
                if (berat.jarak > ringan.jarak) tandai('beratLebihJauh');
            }
        }
    }

    // Pengatur diubah: tembakan yang sudah mendarat jadi jejak, bola kembali ke meriam
    useEffect(() => {
        const lama = mendaratRef.current;
        if (lama && lama !== lintasan) setJejak((j) => [...j, lama].slice(-5));
        mendaratRef.current = null;
        tRef.current = 0;
        aturStatus('siap');
        loop.jeda();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [lintasan]);

    const tembak = () => {
        if (statusRef.current === 'mendarat') tRef.current = 0;
        aturStatus('terbang');
        loop.mainkan();
    };

    const ulang = () => {
        tRef.current = 0;
        aturStatus('siap');
        loop.jeda();
    };

    const kini = keadaanPada(lintasan, tRef.current);
    const laju = Math.hypot(kini.vx, kini.vy);

    /* ----- Gambar panggung ----- */

    const gambar = (ctx: Ctx, w: number, h: number) => {
        const c = warnaSim();
        // Baca waktu dari ref supaya bola bergerak mulus tiap bingkai, tidak menunggu render React
        const kini = keadaanPada(lintasan, tRef.current);
        const pad = { kiri: 40, kanan: 14, atas: 14, bawah: 32 };
        const rasioPlot = (h - pad.atas - pad.bawah) / (w - pad.kiri - pad.kanan);

        // Pilih lebar pandang terkecil yang memuat tembakan ini dan semua jejak
        let perlu = 0;
        for (const l of [lintasan, ...jejak]) {
            perlu = Math.max(perlu, l.jarak / 0.9, l.tinggiMaks / (0.82 * rasioPlot));
        }
        const lebar = PILIHAN_PANDANG.find((p) => p >= perlu) ?? Math.ceil(perlu / 50) * 50;
        const s = buatSkala({
            w, h, pad,
            xMin: -0.07 * lebar, xMaks: 0.93 * lebar,
            yMin: 0, yMaks: lebar * rasioPlot,
            samaSkala: true,
        });
        gambarSumbu(ctx, s, { labelX: 'x (m)', labelY: 'y (m)' });

        // Bendera sasaran tantangan pertama
        if (!selesai.has('tepat40') && s.xMaks > 42) {
            const fx = s.x(40);
            garis(ctx, fx, s.bawah, fx, s.bawah - 30, { tebal: 2 });
            ctx.fillStyle = c.lime;
            ctx.strokeStyle = c.gelap;
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(fx, s.bawah - 30);
            ctx.lineTo(fx + 16, s.bawah - 24);
            ctx.lineTo(fx, s.bawah - 18);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
        }

        // Jejak tembakan sebelumnya
        const labelTerpakai: number[] = [];
        for (const l of jejak) {
            gambarLintasan(ctx, l.titik.map((t) => ({ x: s.x(t.x), y: s.y(t.y) })), {
                warna: c.redup, tebal: 1.5, putus: [5, 5],
            });
            const jx = s.x(l.jarak);
            bulat(ctx, jx, s.bawah, 4, { isi: c.latar, garis: c.redup, tebal: 1.5 });
            // Angka jarak hanya ditulis kalau tidak menimpa angka jejak lain
            if (labelTerpakai.every((x) => Math.abs(x - jx) > 30)) {
                labelTerpakai.push(jx);
                label(ctx, angka(l.jarak, 1), jx, s.bawah - 9, {
                    rata: 'center', dasar: 'bottom', ukuran: 11, tebal: 500, warna: c.redup,
                });
            }
        }

        // Menara dan meriam
        const mx = s.x(0);
        const my = s.y(h0);
        if (h0 > 0) kotak(ctx, mx - 16, my, 26, s.bawah - my, { isi: c.krem });
        ctx.save();
        ctx.translate(mx, my);
        ctx.rotate(-rad(sudut));
        kotak(ctx, -6, -7, 36, 14, { isi: c.lime });
        ctx.restore();
        bulat(ctx, mx, my, 8, { isi: c.krem });

        // Lintasan tembakan ini sampai waktu sekarang, dengan cap posisi tiap 0,5 s
        if (status !== 'siap') {
            const sudahLewat = lintasan.titik.filter((t) => t.t <= kini.t).map((t) => ({ x: s.x(t.x), y: s.y(t.y) }));
            sudahLewat.push({ x: s.x(kini.x), y: s.y(kini.y) });
            gambarLintasan(ctx, sudahLewat, { tebal: 2.5 });
            for (let t = 0.5; t <= kini.t + 1e-9; t += 0.5) {
                const k = keadaanPada(lintasan, t);
                bulat(ctx, s.x(k.x), s.y(k.y), 3.5, { isi: c.latar, tebal: 1.5 });
            }
        }

        // Bola dan vektor kecepatannya
        const bx = s.x(kini.x);
        const by = s.y(kini.y);
        if (tampilVektor && status !== 'mendarat') {
            const ux = kini.vx * PX_PER_MS;
            const uy = -kini.vy * PX_PER_MS;
            panah(ctx, bx, by, bx + ux, by, { warna: c.oranye, tebal: 3 });
            panah(ctx, bx, by, bx, by + uy, { warna: c.oranye, tebal: 3 });
            panah(ctx, bx, by, bx + ux, by + uy, { warna: c.gelap, tebal: 3 });
            if (Math.abs(ux) > 22) label(ctx, 'vₓ', bx + ux + 6, by + (uy < 0 ? 12 : -12), { ukuran: 12 });
            if (Math.abs(uy) > 22) label(ctx, 'vᵧ', bx - 8, by + uy, { ukuran: 12, rata: 'right' });
        }
        if (status !== 'siap') bulat(ctx, bx, by, 8, { isi: c.oranye });

        // Hasil setelah mendarat
        if (status === 'mendarat') {
            const puncak = lintasan.titik.reduce((a, b) => (b.y > a.y ? b : a));
            if (puncak.y > h0 + 0.2) {
                garis(ctx, s.x(puncak.x), s.y(puncak.y), s.x(puncak.x), s.bawah, { tebal: 1.5, putus: [4, 4] });
                label(ctx, `y maks = ${angka(lintasan.tinggiMaks, 1)} m`, s.x(puncak.x), s.y(puncak.y) - 10, {
                    rata: 'center', dasar: 'bottom', ukuran: 12,
                });
            }
            label(ctx, `x = ${angka(lintasan.jarak, 1)} m`, Math.min(s.x(lintasan.jarak), s.kanan - 44), s.bawah - 30, {
                rata: 'center', latar: c.lime, ukuran: 13,
            });
        }
    };

    /* ----- Grafik terhadap waktu ----- */

    const ambilGrafik = (): OpsiGrafik => {
        const c = warnaSim();
        const kini = keadaanPada(lintasan, tRef.current);
        const lewat = lintasan.titik.filter((t) => t.t <= kini.t);
        lewat.push(kini);
        if (grafik === 'y') {
            return {
                seri: [{ nama: 'y', titik: lewat.map((k) => ({ x: k.t, y: k.y })) }],
                penanda: [{ x: kini.t, y: kini.y }],
                labelX: 't (s)', labelY: 'y (m)',
                xMin: 0, xMaks: lintasan.waktu, yMin: 0, yMaks: lintasan.tinggiMaks * 1.12 + 0.5,
            };
        }
        const awal = lintasan.titik[0];
        const akhir = lintasan.titik[lintasan.titik.length - 1];
        return {
            seri: [
                { nama: 'vₓ', titik: lewat.map((k) => ({ x: k.t, y: k.vx })), warna: c.oranye },
                { nama: 'vᵧ', titik: lewat.map((k) => ({ x: k.t, y: k.vy })) },
            ],
            labelX: 't (s)', labelY: 'v (m/s)',
            xMin: 0, xMaks: lintasan.waktu,
            yMin: Math.min(akhir.vy, 0) * 1.1 - 1, yMaks: Math.max(awal.vx, awal.vy) * 1.1 + 1,
        };
    };

    /* ----- Rumus dengan angka saat ini ----- */

    const v0x = v0 * Math.cos(rad(sudut));
    const v0y = v0 * Math.sin(rad(sudut));
    const tTeori = (v0y + Math.sqrt(v0y * v0y + 2 * G * h0)) / G;
    const sin = (isi: string) => `${mi('sin')}${mo('&#x2061;')}${isi}`;
    const cos = (isi: string) => `${mi('cos')}${mo('&#x2061;')}${isi}`;
    const V0 = msub(mi('v'), mn(0));
    const barisRumus: BarisRumus[] = h0 === 0
        ? [
            {
                mathml: `${indeks('x', 'maks')}${mo('=')}${mfrac(`${msup(V0, mn(2))}${sin(`${mn(2)}${mi('θ')}`)}`, mi('g'))}`,
                baca: 'x maks sama dengan v nol kuadrat kali sinus dua teta per g',
            },
            {
                // Bentuk berangka ditulis di baris sendiri supaya muat di panel sempit
                mathml: `${mo('=')}${mfrac(`${msup(mn(v0), mn(2))}${mo('×')}${sin(`${mn(2 * sudut)}${mo('°')}`)}`, mn(G))}`
                    + `${mo('=')}${mn(angka(v0x * tTeori, 1))}${mtext('m')}`,
                baca: `sama dengan ${v0} kuadrat kali sinus ${2 * sudut} derajat per ${G}, yaitu ${angka(v0x * tTeori, 1)} meter`,
            },
            {
                mathml: `${indeks('y', 'maks')}${mo('=')}${mfrac(`${msup(V0, mn(2))}${msup(mi('sin'), mn(2))}${mo('&#x2061;')}${mi('θ')}`, `${mn(2)}${mi('g')}`)}`
                    + `${mo('=')}${mn(angka((v0y * v0y) / (2 * G), 1))}${mtext('m')}`,
                baca: `y maks sama dengan v nol kuadrat kali sinus kuadrat teta per dua g, yaitu ${angka((v0y * v0y) / (2 * G), 1)} meter`,
            },
        ]
        : [
            {
                mathml: `${mi('t')}${mo('=')}${mfrac(`${msub(mi('v'), mrowTeks('0y'))}${mo('+')}${msqrt(`${msup(msub(mi('v'), mrowTeks('0y')), mn(2))}${mo('+')}${mn(2)}${mi('g')}${msub(mi('h'), mn(0))}`)}`, mi('g'))}`
                    + `${mo('=')}${mn(angka(tTeori, 2))}${mtext('s')}`,
                baca: `waktu di udara ${angka(tTeori, 2)} sekon`,
            },
            {
                mathml: `${indeks('x', 'maks')}${mo('=')}${V0}${cos(mi('θ'))}${mo('·')}${mi('t')}`,
                baca: 'x maks sama dengan v nol kosinus teta kali t',
            },
            {
                mathml: `${mo('=')}${mn(angka(v0x, 1))}${mo('×')}${mn(angka(tTeori, 2))}${mo('=')}${mn(angka(v0x * tTeori, 1))}${mtext('m')}`,
                baca: `x maks sama dengan v nol kosinus teta kali t, yaitu ${angka(v0x * tTeori, 1)} meter`,
            },
        ];

    const catatanRumus = udara
        ? 'Rumus ini mengabaikan hambatan udara, jadi hasilnya lebih jauh daripada tembakan di simulasi sekarang. Bandingkan angkanya setelah bola mendarat.'
        : `Massa tidak muncul di rumus ini. Dipakai g = ${G} m/s².`;

    /* ----- Ringkasan untuk pembaca layar ----- */

    const deskripsi = status === 'mendarat'
        ? `Bola ditembakkan ${v0} meter per sekon pada sudut ${sudut} derajat ${udara ? 'dengan' : 'tanpa'} hambatan udara. Mendarat di ${angka(lintasan.jarak, 1)} meter setelah ${angka(lintasan.waktu, 2)} sekon, tinggi maksimum ${angka(lintasan.tinggiMaks, 1)} meter.`
        : status === 'terbang'
            ? `Bola sedang terbang. Posisi mendatar ${angka(kini.x, 1)} meter, tinggi ${angka(kini.y, 1)} meter.`
            : `Meriam siap menembak ${v0} meter per sekon pada sudut ${sudut} derajat dari ketinggian ${h0} meter.`;

    return (
        <SimShell
            panggung={<Panggung gambar={gambar} deskripsi={deskripsi} />}
            kendaliPutar={
                <PlayBar
                    loop={loop}
                    onMulai={tembak}
                    onUlang={ulang}
                    labelMulai={status === 'terbang' ? 'Lanjut' : 'Tembak'}
                    tambahan={jejak.length > 0 && (
                        <Tombol onClick={() => setJejak([])}>
                            <IconEraser size={16} stroke={2.5} aria-hidden="true" />
                            Hapus jejak
                        </Tombol>
                    )}
                />
            }
            bacaan={
                <BarisBacaan>
                    <Bacaan label="Waktu (t)" nilai={angkaTetap(kini.t, 2)} satuan="s" />
                    <Bacaan label="Jarak (x)" nilai={angkaTetap(kini.x, 1)} satuan="m" sorot={status === 'mendarat' ? 'lime' : undefined} />
                    <Bacaan label="Tinggi (y)" nilai={angkaTetap(kini.y, 1)} satuan="m" />
                    <Bacaan label="vₓ" nilai={angkaTetap(kini.vx, 1)} satuan="m/s" />
                    <Bacaan label="vᵧ" nilai={angkaTetap(kini.vy, 1)} satuan="m/s" />
                    <Bacaan label="Kelajuan (v)" nilai={angkaTetap(laju, 1)} satuan="m/s" />
                </BarisBacaan>
            }
            pengatur={
                <>
                    <Slider label="Kecepatan awal" simbol="v₀" nilai={v0} min={5} maks={30} satuan="m/s" onUbah={setV0} />
                    <Slider label="Sudut tembak" simbol="θ" nilai={sudut} min={5} maks={85} satuan="°" onUbah={setSudut} />
                    <Slider label="Massa bola" simbol="m" nilai={massa} min={0.5} maks={10} langkah={0.5} satuan="kg" onUbah={setMassa} />
                    <Slider label="Tinggi awal" simbol="h₀" nilai={h0} min={0} maks={20} satuan="m" onUbah={setH0} />
                    <Sakelar
                        label="Hambatan udara"
                        aktif={udara}
                        onUbah={setUdara}
                        teksAktif="Ada"
                        catatan="Ukuran bola selalu sama (jari-jari 10 cm). Hanya massanya yang kamu ubah."
                    />
                    <Sakelar label="Tampilkan vektor kecepatan" aktif={tampilVektor} onUbah={setTampilVektor} />
                </>
            }
            rumus={<RumusHidup baris={barisRumus} catatan={catatanRumus} />}
            grafik={
                <Panel
                    judul="Grafik terhadap waktu"
                    ikon={<IconChartDots size={18} stroke={2.5} aria-hidden="true" />}
                >
                    <div className="mb-3">
                        <Pilihan
                            label="Besaran yang digambar"
                            labelTersembunyi
                            nilai={grafik}
                            pilihan={[{ nilai: 'y', label: 'Tinggi (y)' }, { nilai: 'v', label: 'Kecepatan (vₓ, vᵧ)' }]}
                            onUbah={setGrafik}
                        />
                    </div>
                    <GrafikHidup
                        ambil={ambilGrafik}
                        rasio={1.9}
                        deskripsi={grafik === 'y'
                            ? `Grafik tinggi terhadap waktu. Saat ini t ${angka(kini.t, 2)} sekon, tinggi ${angka(kini.y, 1)} meter.`
                            : `Grafik komponen kecepatan terhadap waktu. Saat ini v x ${angka(kini.vx, 1)} dan v y ${angka(kini.vy, 1)} meter per sekon.`}
                        keterangan={grafik === 'v'
                            ? [{ nama: 'vₓ (mendatar)', warna: warnaSim().oranye }, { nama: 'vᵧ (tegak)' }]
                            : undefined}
                    />
                    <p className="text-xs text-muted mt-2">
                        {grafik === 'v'
                            ? (udara
                                ? 'Dengan hambatan udara, vₓ ikut berkurang selama bola terbang.'
                                : 'Tanpa hambatan udara, vₓ tidak berubah. Hanya vᵧ yang berkurang 10 m/s tiap sekon.')
                            : 'Titik putih di lintasan menandai posisi bola tiap 0,5 sekon.'}
                    </p>
                </Panel>
            }
            selidiki={
                <SelidikiHubungan
                    bebas={BEBAS}
                    terikat={TERIKAT}
                    tetap={['udara']}
                    percobaan={percobaan}
                    onHapus={() => setPercobaan([])}
                    ajakan="Tembakkan bola sekali, lalu ubah satu besaran saja (misalnya sudut) dan tembak lagi. Tiap tembakan yang mendarat jadi satu titik di grafik ini."
                />
            }
            tantangan={<Tantangan daftar={TANTANGAN} selesai={selesai} />}
        />
    );
}

/** Besaran dengan indeks kata, misalnya x dengan indeks "maks" */
function indeks(simbol: string, kata: string): string {
    return `<msub><mi>${simbol}</mi><mtext>${kata}</mtext></msub>`;
}

/** Indeks bawah berisi teks biasa, misalnya v dengan indeks "0y" */
function mrowTeks(s: string): string {
    return `<mrow><mn>${s.charAt(0)}</mn><mi>${s.slice(1)}</mi></mrow>`;
}
