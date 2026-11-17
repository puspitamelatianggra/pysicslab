/* ============================================================
   SIMULASI: Asas Black (Bab 3-2)
   ============================================================
   Zat panas dicelupkan ke air dingin di dalam kalorimeter. Kalor mengalir dari zat panas
   ke air sampai suhu keduanya sama (suhu setimbang). Tidak ada perubahan wujud.

   Hubungan yang harus bisa ditemukan siswa:
   - massa zat panas naik → suhu akhir naik
   - kalor jenis zat panas lebih besar → suhu akhir lebih dekat ke suhu zat panas
   - kalor yang dilepas selalu sama dengan kalor yang diterima
   - suhu akhir bukan rata-rata biasa, kecuali massa dan kalor jenis kedua zat sama

   Animasi: kedua suhu mendekati suhu akhir secara eksponensial. Satu variabel kemajuan s
   (0 sampai 1) mengatur semuanya, jadi kalor lepas dan kalor terima selalu sama besar.
   ============================================================ */

import { IconChartDots } from '@tabler/icons-react';
import { useEffect, useRef, useState } from 'react';
import {
    angka, angkaTetap, bulat, Ctx, garis, jepit, kotak, label, OpsiGrafik, panah, Seri, useSimLoop, warnaSim,
} from '../../engine';
import {
    Bacaan, BarisBacaan, BarisRumus, Besaran, GrafikHidup, mfrac, mi, mn, mo, msub, mtext, Panel, Panggung,
    Percobaan, Pilihan, PlayBar, RumusHidup, SelidikiHubungan, SimShell, Slider, Tantangan, useTantangan,
} from '../../ui';

/* ---------- 1. Fisika ---------- */

export const BAHAN = [
    { nilai: 4200, label: 'Air' },
    { nilai: 900, label: 'Aluminium' },
    { nilai: 450, label: 'Besi' },
    { nilai: 390, label: 'Tembaga' },
]; // kalor jenis dalam J/kg°C
export const C_AIR = 4200;

/** Tetapan waktu animasi (detik layar). Kedua suhu mendekati setimbang sebagai 1 − e^(−t/τ). */
export const TAU = 1.6;
/** Dianggap setimbang saat 99,5% perbedaan suhu sudah hilang. */
export const AMBANG = 0.995;
/** Lama zat panas dipindahkan ke kalorimeter sebelum kalor mulai mengalir (detik layar). */
export const LAMA_PINDAH = 1.2;
export const LAMA_PROSES = TAU * Math.log(1 / (1 - AMBANG));

export function suhuSetimbang(m1: number, c1: number, T1: number, m2: number, c2: number, T2: number): number {
    return (m1 * c1 * T1 + m2 * c2 * T2) / (m1 * c1 + m2 * c2);
}

/** Kalor total yang berpindah dari zat panas ke air sampai setimbang (J). */
export function kalorPindah(m1: number, c1: number, T1: number, m2: number, c2: number, T2: number): number {
    return m1 * c1 * (T1 - suhuSetimbang(m1, c1, T1, m2, c2, T2));
}

/** Kemajuan proses 0 sampai 1 pada waktu proses t (detik layar). */
export function kemajuan(t: number): number {
    return 1 - Math.exp(-Math.max(0, t) / TAU);
}

export interface KeadaanCampur {
    T1: number;
    T2: number;
    /** Kalor yang sudah dilepas zat panas dan diterima air (J) */
    qLepas: number;
    qTerima: number;
}

/** Keadaan pada kemajuan s. Kedua kalor diturunkan dari s yang sama, jadi selalu sama besar. */
export function keadaanCampur(m1: number, c1: number, T1: number, m2: number, c2: number, T2: number, s: number): KeadaanCampur {
    const Tf = suhuSetimbang(m1, c1, T1, m2, c2, T2);
    const T1s = T1 - s * (T1 - Tf);
    const T2s = T2 + s * (Tf - T2);
    return {
        T1: T1s,
        T2: T2s,
        qLepas: m1 * c1 * (T1 - T1s),
        qTerima: m2 * c2 * (T2s - T2),
    };
}

/* ---------- 2. Warna dan gambar ---------- */

function heks(h: string): [number, number, number] {
    const s = h.replace('#', '');
    const v = s.length === 3 ? s.split('').map((x) => x + x).join('') : s;
    return [parseInt(v.slice(0, 2), 16), parseInt(v.slice(2, 4), 16), parseInt(v.slice(4, 6), 16)];
}

/** Campuran linear dua warna jadi satu warna isi datar. f = 0 → a, f = 1 → b. */
function campur(a: string, b: string, f: number): string {
    const x = heks(a);
    const y = heks(b);
    if (x.some(Number.isNaN) || y.some(Number.isNaN)) return a;
    const t = jepit(f, 0, 1);
    return `rgb(${x.map((v, i) => Math.round(v + (y[i] - v) * t)).join(',')})`;
}

/** Warna isi menurut suhu: biru muda (dingin), krem (sedang), oranye (panas). */
function warnaSuhu(T: number): string {
    const c = warnaSim();
    const dingin = campur(c.biru, c.krem, 0.7);
    if (T <= 50) return campur(dingin, c.krem, T / 50);
    return campur(c.krem, c.oranye, (T - 50) / 50);
}

const mulus = (u: number) => {
    const x = jepit(u, 0, 1);
    return x * x * (3 - 2 * x);
};

const T_MIN = 0;
const T_MAKS = 105;

function gambarTermometer(ctx: Ctx, x: number, yAtas: number, yBawah: number, T: number, wLabel: number, w: number) {
    const c = warnaSim();
    const yDari = (v: number) => yBawah - ((v - T_MIN) / (T_MAKS - T_MIN)) * (yBawah - yAtas);
    kotak(ctx, x - 7, yAtas, 14, yBawah - yAtas + 6, { isi: c.latar });
    const warna = T < 30 ? c.biru : c.oranye;
    bulat(ctx, x, yBawah + 10, 9, { isi: warna });
    const yk = yDari(T);
    ctx.fillStyle = warna;
    ctx.fillRect(x - 3, yk, 6, yBawah + 6 - yk);
    for (const v of [0, 50, 100]) garis(ctx, x + 7, yDari(v), x + 12, yDari(v), { tebal: 2 });
    label(ctx, `${angka(T, 1)} °C`, Math.min(x, w - wLabel / 2 - 2), yAtas - 13, { rata: 'center', latar: c.lime, ukuran: 12 });
}

/* ---------- 3. Komponen ---------- */

type Status = 'siap' | 'jalan' | 'selesai';

const BEBAS: Besaran[] = [
    { id: 'm1', label: 'massa zat panas', simbol: 'm₁', satuan: 'kg', desimal: 2 },
    { id: 'T1', label: 'suhu zat panas', simbol: 'T₁', satuan: '°C', desimal: 0 },
    { id: 'm2', label: 'massa air dingin', simbol: 'm₂', satuan: 'kg', desimal: 2 },
    { id: 'T2', label: 'suhu air dingin', simbol: 'T₂', satuan: '°C', desimal: 0 },
];

const TERIKAT: Besaran[] = [
    { id: 'Tf', label: 'suhu akhir', simbol: 'T akhir', satuan: '°C', desimal: 1 },
    { id: 'Q', label: 'kalor yang berpindah', simbol: 'Q', satuan: 'kJ', desimal: 1 },
    { id: 'beda', label: 'suhu akhir dikurangi rata-rata suhu awal', simbol: 'T akhir − rata-rata', satuan: '°C', desimal: 1 },
];

const TANTANGAN = [
    { id: 'tepat40', teks: 'Atur campuran supaya suhu akhirnya 40 °C (boleh meleset 1 °C). Hitung dulu dengan rumus, baru jalankan sampai setimbang.' },
    { id: 'jenisZat', teks: 'Campurkan dua kali dengan massa dan suhu yang sama persis, tetapi jenis zat panas berbeda. Lihat zat mana yang membuat suhu akhir lebih dekat ke suhu zat panas.' },
    { id: 'bukanRata', teks: 'Buat campuran yang suhu akhirnya berbeda lebih dari 5 °C dari rata-rata kedua suhu awal. Jalankan sampai setimbang.' },
];

const namaBahan = (c: number) => BAHAN.find((b) => b.nilai === c)?.label ?? 'Zat';

export default function AsasBlack() {
    const [m1, setM1] = useState(0.1);
    const [T1, setT1] = useState(100);
    const [c1, setC1] = useState(450);
    const [m2, setM2] = useState(0.2);
    const [T2, setT2] = useState(20);

    const Tf = suhuSetimbang(m1, c1, T1, m2, C_AIR, T2);
    const Qtotal = kalorPindah(m1, c1, T1, m2, C_AIR, T2);

    // Keadaan yang berubah tiap langkah
    const tRef = useRef(0); // detik layar sejak tombol Campur
    const statusRef = useRef<Status>('siap');
    const [status, setStatus] = useState<Status>('siap');
    const aturStatus = (s: Status) => {
        statusRef.current = s;
        setStatus(s);
    };

    const [percobaan, setPercobaan] = useState<Percobaan[]>([]);
    const [selesai, tandai] = useTantangan();

    const loop = useSimLoop((dt) => {
        if (statusRef.current === 'selesai') return;
        if (statusRef.current === 'siap') aturStatus('jalan');
        tRef.current += dt;
        if (kemajuan(tRef.current - LAMA_PINDAH) >= AMBANG) {
            tRef.current = LAMA_PINDAH + LAMA_PROSES;
            saatSetimbang();
        }
    });

    function saatSetimbang() {
        aturStatus('selesai');
        loop.jeda();
        const baru: Percobaan = {
            nilai: {
                m1, T1, c1, m2, T2,
                Tf, Q: Qtotal / 1000, beda: Tf - (T1 + T2) / 2,
            },
        };
        setPercobaan([...percobaan, baru]);

        const n = baru.nilai;
        if (Math.abs(n.Tf - 40) <= 1) tandai('tepat40');
        if (Math.abs(n.beda) > 5) tandai('bukanRata');
        for (const p of percobaan) {
            const q = p.nilai;
            if (q.m1 === n.m1 && q.T1 === n.T1 && q.m2 === n.m2 && q.T2 === n.T2 && q.c1 !== n.c1) {
                const besar = q.c1 > n.c1 ? q : n;
                const kecil = q.c1 > n.c1 ? n : q;
                if (besar.Tf > kecil.Tf) tandai('jenisZat');
            }
        }
    }

    // Pengatur diubah: zat panas kembali ke wadahnya
    useEffect(() => {
        tRef.current = 0;
        aturStatus('siap');
        loop.jeda();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [m1, T1, c1, m2, T2]);

    const mulai = () => {
        if (statusRef.current === 'selesai') tRef.current = 0;
        aturStatus('jalan');
        loop.mainkan();
    };

    const ulang = () => {
        tRef.current = 0;
        aturStatus('siap');
        loop.jeda();
    };

    const tProses = Math.max(0, tRef.current - LAMA_PINDAH);
    const s = kemajuan(tProses);
    const kini = keadaanCampur(m1, c1, T1, m2, C_AIR, T2, s);
    const setimbang = status === 'selesai';

    /* ----- Gambar panggung ----- */

    const gambar = (ctx: Ctx, w: number, h: number) => {
        const c = warnaSim();
        const t = tRef.current;
        const sk = kemajuan(Math.max(0, t - LAMA_PINDAH));
        const k = keadaanCampur(m1, c1, T1, m2, C_AIR, T2, sk);

        const yAtas = 0.3 * h;
        const yB = 0.8 * h;
        const Hb = yB - yAtas;

        // Wadah zat panas (kiri)
        const lx0 = 0.06 * w;
        const lx1 = 0.28 * w;
        garis(ctx, lx0, yAtas, lx0, yB, { tebal: 2.5 });
        garis(ctx, lx1, yAtas, lx1, yB, { tebal: 2.5 });
        garis(ctx, lx0 - 1, yB, lx1 + 1, yB, { tebal: 2.5 });
        label(ctx, 'Zat panas', (lx0 + lx1) / 2, yB + 14, { rata: 'center', ukuran: 11, tebal: 500, warna: c.redup });

        // Kalorimeter (kanan): selubung krem sebagai penyekat
        const kx0 = 0.47 * w;
        const kx1 = 0.8 * w;
        kotak(ctx, kx0 - 7, yAtas - 6, kx1 - kx0 + 14, Hb + 13, { isi: c.krem });
        kotak(ctx, kx0, yAtas, kx1 - kx0, Hb, { isi: c.latar });
        const hAir = Hb * (0.3 + 0.55 * m2);
        ctx.fillStyle = warnaSuhu(k.T2);
        ctx.fillRect(kx0 + 1, yB - hAir, kx1 - kx0 - 2, hAir);
        garis(ctx, kx0 + 1, yB - hAir, kx1 - 1, yB - hAir, { tebal: 1.5 });
        label(ctx, 'Kalorimeter', (kx0 + kx1) / 2, yB + 14, { rata: 'center', ukuran: 11, tebal: 500, warna: c.redup });

        // Zat panas: diam di wadahnya, lalu diangkat dan dicelupkan
        const wB = 24 + 24 * Math.sqrt(m1);
        const hB = Math.min(wB * 0.95, Math.max(hAir - 6, 16));
        const cx0 = (lx0 + lx1) / 2;
        const cx1 = (kx0 + kx1) / 2;
        const yDiam = yB - 2 - hB;
        const yAngkat = yAtas - hB - 18;
        const yMasuk = yB - 2 - hB;
        const u = jepit(t / LAMA_PINDAH, 0, 1);
        let bx = cx0;
        let by = yDiam;
        if (u < 0.3) by = yDiam + (yAngkat - yDiam) * mulus(u / 0.3);
        else if (u < 0.7) {
            by = yAngkat;
            bx = cx0 + (cx1 - cx0) * mulus((u - 0.3) / 0.4);
        } else {
            bx = cx1;
            by = yAngkat + (yMasuk - yAngkat) * mulus((u - 0.7) / 0.3);
        }
        if (t > 0) garis(ctx, bx, by, bx, 6, { tebal: 2 });
        kotak(ctx, bx - wB / 2, by, wB, hB, { isi: warnaSuhu(k.T1) });
        if (c1 === C_AIR) garis(ctx, bx - wB / 2 + 3, by + 8, bx + wB / 2 - 3, by + 8, { tebal: 1.5 });
        label(ctx, namaBahan(c1), bx, by + hB / 2 + (c1 === C_AIR ? 4 : 0), { rata: 'center', ukuran: 11 });

        // Panah kalor dari zat panas ke air, mengecil mendekati setimbang
        if (t > LAMA_PINDAH && sk < AMBANG) {
            const maksPanjang = (kx1 - kx0) / 2 - wB / 2 - 6;
            const panjang = Math.min(maksPanjang, 36 * (1 - sk));
            const ym = by + hB / 2;
            panah(ctx, bx + wB / 2 + 3, ym, bx + wB / 2 + 3 + panjang, ym, { warna: c.oranye, tebal: 3 });
            panah(ctx, bx - wB / 2 - 3, ym, bx - wB / 2 - 3 - panjang, ym, { warna: c.oranye, tebal: 3 });
        }

        // Termometer masing-masing
        gambarTermometer(ctx, 0.37 * w, 0.2 * h, yB - 8, k.T1, 64, w);
        gambarTermometer(ctx, 0.91 * w, 0.2 * h, yB - 8, k.T2, 64, w);

        // Keterangan keadaan
        const teks = t <= 0 ? 'Sebelum dicampur'
            : sk >= AMBANG ? `Setimbang di ${angka(Tf, 1)} °C`
                : t < LAMA_PINDAH ? 'Zat panas dicelupkan' : 'Kalor berpindah';
        label(ctx, teks, 8, 14, { latar: c.lime, ukuran: 12 });
    };

    /* ----- Grafik ----- */

    const ambilGrafik = (): OpsiGrafik => {
        const c = warnaSim();
        const tp = Math.max(0, tRef.current - LAMA_PINDAH);
        const titik1 = [];
        const titik2 = [];
        const N = 60;
        for (let i = 0; i <= N; i++) {
            const tt = (tp * i) / N;
            const kk = keadaanCampur(m1, c1, T1, m2, C_AIR, T2, kemajuan(tt));
            titik1.push({ x: tt, y: kk.T1 });
            titik2.push({ x: tt, y: kk.T2 });
        }
        const sekarang = keadaanCampur(m1, c1, T1, m2, C_AIR, T2, kemajuan(tp));
        const seri: Seri[] = [
            { nama: 'zat panas', titik: titik1, warna: c.oranye, tebal: 3 },
            { nama: 'air dingin', titik: titik2, warna: c.biru, tebal: 3 },
        ];
        if (setimbang) {
            seri.push({
                nama: 'suhu akhir', titik: [{ x: 0, y: Tf }, { x: LAMA_PROSES, y: Tf }], warna: c.redup,
                gaya: 'putus', tebal: 1.5,
            });
        }
        return {
            seri,
            penanda: [
                { x: tp, y: sekarang.T1, warna: c.oranye },
                { x: tp, y: sekarang.T2, warna: c.biru },
            ],
            labelX: 't (s)', labelY: 'T (°C)',
            xMin: 0, xMaks: LAMA_PROSES,
            yMin: Math.floor(T2 - 5), yMaks: Math.ceil(T1 + 5),
            muatNol: false,
        };
    };

    /* ----- Rumus ----- */

    const sub = (a: string, n: number) => msub(mi(a), mn(n));
    const mc1 = m1 * c1;
    const mc2 = m2 * C_AIR;
    const barisRumus: BarisRumus[] = [
        {
            mathml: `${sub('m', 1)}${sub('c', 1)}${mo('(')}${sub('T', 1)}${mo('−')}${mi('T')}${mo(')')}`,
            baca: 'm satu c satu dikali T satu dikurangi T',
        },
        {
            mathml: `${mo('=')}${sub('m', 2)}${sub('c', 2)}${mo('(')}${mi('T')}${mo('−')}${sub('T', 2)}${mo(')')}`,
            baca: 'sama dengan m dua c dua dikali T dikurangi T dua',
        },
        {
            mathml: `${mi('T')}${mo('=')}${mfrac(
                `${sub('m', 1)}${sub('c', 1)}${sub('T', 1)}${mo('+')}${sub('m', 2)}${sub('c', 2)}${sub('T', 2)}`,
                `${sub('m', 1)}${sub('c', 1)}${mo('+')}${sub('m', 2)}${sub('c', 2)}`,
            )}`,
            baca: 'T sama dengan m satu c satu T satu ditambah m dua c dua T dua, dibagi m satu c satu ditambah m dua c dua',
        },
        {
            mathml: `${mi('T')}${mo('=')}${mfrac(
                `${mn(angka(mc1 * T1, 0))}${mo('+')}${mn(angka(mc2 * T2, 0))}`,
                `${mn(angka(mc1, 1))}${mo('+')}${mn(angka(mc2, 1))}`,
            )}`,
            baca: `T sama dengan ${angka(mc1 * T1, 0)} ditambah ${angka(mc2 * T2, 0)}, dibagi ${angka(mc1, 1)} ditambah ${angka(mc2, 1)}`,
        },
        {
            mathml: `${mo('=')}${mn(angka(Tf, 1))}${mtext('°C')}`,
            baca: `sama dengan ${angka(Tf, 1)} derajat Celsius`,
        },
    ];
    const catatanRumus = Math.abs(mc1 - mc2) < 1e-9
        ? 'Di sini m dan c kedua zat menghasilkan hasil kali yang sama, jadi suhu akhir tepat di tengah. Ini kasus khusus.'
        : 'Suhu akhir lebih dekat ke suhu zat yang hasil kali m dan c-nya lebih besar. Air yang sama-sama dicampur dapat mencoret c.';

    /* ----- Ringkasan untuk pembaca layar ----- */

    const deskripsi = tRef.current <= 0
        ? `Zat panas ${namaBahan(c1)} ${angka(m1, 2)} kilogram bersuhu ${T1} derajat Celsius di wadah kiri, air dingin ${angka(m2, 2)} kilogram bersuhu ${T2} derajat di kalorimeter kanan.`
        : setimbang
            ? `Suhu keduanya setimbang di ${angka(Tf, 1)} derajat Celsius. Kalor yang berpindah ${angka(Qtotal / 1000, 1)} kilojoule.`
            : `Kalor berpindah dari zat panas ke air. Suhu zat panas ${angka(kini.T1, 1)} derajat, suhu air ${angka(kini.T2, 1)} derajat.`;

    return (
        <SimShell
            panggung={<Panggung gambar={gambar} deskripsi={deskripsi} />}
            kendaliPutar={
                <PlayBar
                    loop={loop}
                    onMulai={mulai}
                    onUlang={ulang}
                    labelMulai={status === 'jalan' ? 'Lanjut' : status === 'selesai' ? 'Campur lagi' : 'Campur'}
                />
            }
            bacaan={
                <BarisBacaan>
                    <Bacaan label="T₁ sekarang" nilai={angkaTetap(kini.T1, 1)} satuan="°C" />
                    <Bacaan label="T₂ sekarang" nilai={angkaTetap(kini.T2, 1)} satuan="°C" />
                    <Bacaan label="Q lepas" nilai={angkaTetap(kini.qLepas / 1000, 2)} satuan="kJ" />
                    <Bacaan label="Q terima" nilai={angkaTetap(kini.qTerima / 1000, 2)} satuan="kJ" />
                    <Bacaan label="T akhir" nilai={setimbang ? angkaTetap(Tf, 1) : '–'} satuan={setimbang ? '°C' : undefined} sorot={setimbang ? 'lime' : undefined} />
                    <Bacaan label="Waktu proses" nilai={angkaTetap(tProses, 1)} satuan="s" />
                </BarisBacaan>
            }
            pengatur={
                <>
                    <Slider label="Massa zat panas" simbol="m₁" nilai={m1} min={0.05} maks={1} langkah={0.05} satuan="kg" onUbah={setM1} />
                    <Slider label="Suhu zat panas" simbol="T₁" nilai={T1} min={40} maks={100} satuan="°C" onUbah={setT1} />
                    <Pilihan label="Jenis zat panas" nilai={c1} pilihan={BAHAN} onUbah={setC1} />
                    <Slider label="Massa air dingin" simbol="m₂" nilai={m2} min={0.05} maks={1} langkah={0.05} satuan="kg" onUbah={setM2} />
                    <Slider label="Suhu air dingin" simbol="T₂" nilai={T2} min={5} maks={35} satuan="°C" onUbah={setT2} />
                    <p className="text-xs text-muted">Kalor jenis {namaBahan(c1).toLowerCase()} {angka(c1, 0)} J/kg°C, air {angka(C_AIR, 0)} J/kg°C.</p>
                </>
            }
            rumus={<RumusHidup baris={barisRumus} catatan={catatanRumus} />}
            grafik={
                <Panel judul="Suhu terhadap waktu" ikon={<IconChartDots size={18} stroke={2.5} aria-hidden="true" />}>
                    <GrafikHidup
                        ambil={ambilGrafik}
                        rasio={1.9}
                        deskripsi={setimbang
                            ? `Grafik suhu terhadap waktu. Suhu zat panas turun dan suhu air naik, keduanya bertemu di ${angka(Tf, 1)} derajat Celsius.`
                            : `Grafik suhu terhadap waktu. Saat ini suhu zat panas ${angka(kini.T1, 1)} dan suhu air ${angka(kini.T2, 1)} derajat Celsius.`}
                        keterangan={[
                            { nama: 'Zat panas', warna: warnaSim().oranye },
                            { nama: 'Air dingin', warna: warnaSim().biru },
                            ...(setimbang ? [{ nama: 'Suhu akhir', warna: warnaSim().redup, putus: true }] : []),
                        ]}
                    />
                    <p className="text-xs text-muted mt-2">
                        Panah oranye di panggung menunjukkan aliran kalor. Panahnya mengecil karena beda suhu mengecil.
                    </p>
                </Panel>
            }
            selidiki={
                <SelidikiHubungan
                    bebas={BEBAS}
                    terikat={TERIKAT}
                    tetap={['c1']}
                    percobaan={percobaan}
                    onHapus={() => setPercobaan([])}
                    ajakan="Campurkan sampai setimbang, lalu ubah satu besaran saja (misalnya massa zat panas) dan campurkan lagi. Jenis zat dijaga tetap supaya hanya satu hal yang berubah."
                />
            }
            tantangan={<Tantangan daftar={TANTANGAN} selesai={selesai} />}
        />
    );
}
