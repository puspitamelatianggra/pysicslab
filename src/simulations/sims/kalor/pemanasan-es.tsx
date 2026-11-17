/* ============================================================
   SIMULASI: Pemanasan Es sampai Uap (Bab 3-2)
   ============================================================
   Sebongkah es dipanaskan pemanas berdaya tetap, dari suhu awal sampai uap 120 °C.
   Ada lima ruas: es naik suhu, melebur, air naik suhu, mendidih, uap naik suhu.

   Hubungan yang harus bisa ditemukan siswa:
   - massa naik → kalor total naik sebanding
   - daya naik → waktu turun (berbanding terbalik), tetapi kalor total tetap
   - saat melebur dan mendidih, kalor terus bertambah tetapi suhu tetap
   - kalor jenis lebih besar → suhu naik lebih lambat (lereng ruas air lebih landai daripada ruas es)

   Waktu: simulasi berjalan dipercepat. Faktor percepatan dipilih dari lama pemanasan
   sebenarnya supaya satu percobaan selesai sekitar 25 detik layar (batas 30 sampai 1200 kali).
   Hanya air yang dipakai karena nilai tetapan zat lain tidak seragam di buku SMA.
   ============================================================ */

import { IconChartDots } from '@tabler/icons-react';
import { useEffect, useMemo, useRef, useState } from 'react';
import {
    angka, angkaTetap, bulat, Ctx, garis, jepit, kotak, label, lintasan, OpsiGrafik, Seri, useSimLoop, warnaSim,
} from '../../engine';
import {
    Bacaan, BarisBacaan, BarisRumus, Besaran, GrafikHidup, mi, mn, mo, mtext, Panel, Panggung, Percobaan,
    Pilihan, PlayBar, RumusHidup, SelidikiHubungan, SimShell, Slider, Tantangan, useTantangan,
} from '../../ui';

/* ---------- 1. Fisika ---------- */

export const C_ES = 2100; // J/kg°C
export const C_AIR = 4200;
export const C_UAP = 2010;
export const L_LEBUR = 336000; // J/kg
export const L_UAP = 2260000;
export const T_LEBUR = 0; // °C
export const T_DIDIH = 100;
export const T_AKHIR = 120;

export interface Ruas {
    nama: string;
    /** Kalor kumulatif di awal dan akhir ruas (J) */
    q0: number;
    q1: number;
    /** Suhu di awal dan akhir ruas (°C) */
    t0: number;
    t1: number;
    /** true untuk ruas perubahan wujud (suhu tetap) */
    datar: boolean;
}

/** Lima ruas pemanasan es bermassa m (kg) dari suhu awal T0 (°C, paling tinggi 0) sampai uap 120 °C. */
export function ruasPemanasan(m: number, T0: number): Ruas[] {
    const q1 = m * C_ES * (T_LEBUR - T0);
    const q2 = q1 + m * L_LEBUR;
    const q3 = q2 + m * C_AIR * (T_DIDIH - T_LEBUR);
    const q4 = q3 + m * L_UAP;
    const q5 = q4 + m * C_UAP * (T_AKHIR - T_DIDIH);
    return [
        { nama: 'Es naik suhu', q0: 0, q1, t0: T0, t1: T_LEBUR, datar: false },
        { nama: 'Melebur', q0: q1, q1: q2, t0: T_LEBUR, t1: T_LEBUR, datar: true },
        { nama: 'Air naik suhu', q0: q2, q1: q3, t0: T_LEBUR, t1: T_DIDIH, datar: false },
        { nama: 'Mendidih', q0: q3, q1: q4, t0: T_DIDIH, t1: T_DIDIH, datar: true },
        { nama: 'Uap naik suhu', q0: q4, q1: q5, t0: T_DIDIH, t1: T_AKHIR, datar: false },
    ];
}

export interface HasilPemanasan {
    kalorEs: number;
    kalorLebur: number;
    kalorAir: number;
    kalorDidih: number;
    kalorUap: number;
    /** Kalor sampai semua air menjadi uap 100 °C (J) */
    kalorSampaiUap: number;
    /** Kalor sampai 120 °C (J) */
    kalorTotal: number;
    waktuLebur: number;
    /** Detik pemanasan sampai semua menjadi uap 100 °C */
    waktuSampaiUap: number;
    waktuTotal: number;
}

export function hasilPemanasan(m: number, P: number, T0: number): HasilPemanasan {
    const r = ruasPemanasan(m, T0);
    const kalorEs = r[0].q1 - r[0].q0;
    const kalorLebur = r[1].q1 - r[1].q0;
    const kalorAir = r[2].q1 - r[2].q0;
    const kalorDidih = r[3].q1 - r[3].q0;
    const kalorUap = r[4].q1 - r[4].q0;
    const kalorSampaiUap = r[3].q1;
    return {
        kalorEs, kalorLebur, kalorAir, kalorDidih, kalorUap,
        kalorSampaiUap,
        kalorTotal: r[4].q1,
        waktuLebur: kalorLebur / P,
        waktuSampaiUap: kalorSampaiUap / P,
        waktuTotal: r[4].q1 / P,
    };
}

export interface KeadaanEs {
    suhu: number;
    /** 0 es, 1 melebur, 2 air, 3 mendidih, 4 uap */
    tahap: number;
    frakLebur: number;
    frakUap: number;
}

/** Keadaan zat setelah menerima kalor Q (J). */
export function keadaanPada(m: number, T0: number, Q: number): KeadaanEs {
    const r = ruasPemanasan(m, T0);
    const q = jepit(Q, 0, r[4].q1);
    let i = r.findIndex((x) => q < x.q1 - 1e-9);
    if (i < 0) i = 4;
    const s = r[i];
    const f = s.q1 - s.q0 > 1e-12 ? (q - s.q0) / (s.q1 - s.q0) : 0;
    return {
        suhu: s.datar ? s.t0 : s.t0 + f * (s.t1 - s.t0),
        tahap: i,
        frakLebur: jepit((q - r[1].q0) / (r[1].q1 - r[1].q0), 0, 1),
        frakUap: jepit((q - r[3].q0) / (r[3].q1 - r[3].q0), 0, 1),
    };
}

/** Berapa detik pemanasan sebenarnya yang lewat tiap 1 detik layar (1×). */
export function skalaWaktu(waktuTotal: number): number {
    return Math.round(jepit(waktuTotal / 25, 30, 1200) / 10) * 10;
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
    if (T <= 0) return campur(c.biru, c.krem, 0.45 + 0.35 * jepit((T + 40) / 40, 0, 1));
    if (T <= 50) return campur(campur(c.biru, c.krem, 0.8), c.krem, T / 50);
    return campur(c.krem, c.oranye, jepit((T - 50) / 60, 0, 1));
}

const tri = (u: number) => {
    const m = ((u % 2) + 2) % 2;
    return m < 1 ? m : 2 - m;
};
const pecahan = (u: number) => u - Math.floor(u);

const JUMLAH_PARTIKEL = 16;

function gambarPartikel(
    ctx: Ctx, x0: number, y0: number, x1: number, y1: number,
    k: KeadaanEs, anim: number,
) {
    const c = warnaSim();
    kotak(ctx, x0, y0, x1 - x0, y1 - y0, { isi: c.latar });
    const pad = 9;
    const r = 5;
    const lebar = x1 - x0 - 2 * pad;
    const tinggi = y1 - y0 - 2 * pad;
    const warna = warnaSuhu(k.suhu);
    const kecGas = 1.4 * Math.sqrt((k.suhu + 273) / 373);
    for (let i = 0; i < JUMLAH_PARTIKEL; i++) {
        const kol = i % 4;
        const baris = Math.floor(i / 4); // 0 = paling bawah
        const sx = x0 + pad + (kol + 0.5) * (lebar / 4);
        const sy = y1 - pad - (baris + 0.5) * (tinggi * 0.62 / 4);
        let fase: 'padat' | 'cair' | 'gas' = 'padat';
        if (k.tahap === 1) fase = i < k.frakLebur * JUMLAH_PARTIKEL ? 'cair' : 'padat';
        else if (k.tahap === 2) fase = 'cair';
        else if (k.tahap === 3) fase = i >= JUMLAH_PARTIKEL * (1 - k.frakUap) ? 'gas' : 'cair';
        else if (k.tahap === 4) fase = 'gas';
        let x = sx;
        let y = sy;
        if (fase === 'padat') {
            const amp = 1 + 0.8 * jepit((k.suhu + 40) / 40, 0, 1);
            x += amp * Math.sin(anim * 18 + i * 1.7);
            y += amp * Math.cos(anim * 16 + i * 2.1);
        } else if (fase === 'cair') {
            x += 5 * Math.sin(anim * 3.1 + i * 2.3);
            y += 4 * Math.cos(anim * 2.7 + i * 1.3);
        } else {
            const v1 = 0.35 * kecGas * (0.8 + 0.4 * pecahan(i * 0.37));
            const v2 = 0.3 * kecGas * (0.8 + 0.4 * pecahan(i * 0.53));
            x = x0 + pad + tri(anim * v1 + i * 0.31) * lebar;
            y = y0 + pad + tri(anim * v2 + i * 0.47) * tinggi;
        }
        bulat(ctx, x, y, r, { isi: warna, tebal: 1.5 });
    }
}

const NAMA_TAHAP = [
    'Es dipanaskan: suhu naik',
    'Melebur: suhu tetap 0 °C',
    'Air dipanaskan: suhu naik',
    'Mendidih: suhu tetap 100 °C',
    'Uap dipanaskan: suhu naik',
];
const NAMA_SINGKAT = ['Es naik suhu', 'Melebur', 'Air naik suhu', 'Mendidih', 'Uap naik suhu'];

/* ---------- 3. Komponen ---------- */

type Status = 'siap' | 'jalan' | 'selesai';

const BEBAS: Besaran[] = [
    { id: 'massa', label: 'massa es', simbol: 'm', satuan: 'kg', desimal: 1 },
    { id: 'daya', label: 'daya pemanas', simbol: 'P', satuan: 'W', desimal: 0 },
    { id: 'suhu0', label: 'suhu awal es', simbol: 'T₀', satuan: '°C', desimal: 0 },
];

const TERIKAT: Besaran[] = [
    { id: 'kalor', label: 'kalor total sampai jadi uap 100 °C', simbol: 'Q total', satuan: 'kJ', desimal: 0 },
    { id: 'waktu', label: 'waktu total sampai jadi uap 100 °C', simbol: 't total', satuan: 'menit', desimal: 1 },
    { id: 'lebur', label: 'kalor untuk melebur', simbol: 'Q lebur', satuan: 'kJ', desimal: 0 },
];

const TANTANGAN = [
    { id: 'lebur300', teks: 'Prediksi dulu, baru jalankan: atur massa dan daya supaya seluruh es habis melebur dalam 300 detik pemanasan (boleh meleset 10 detik). Jalankan sampai selesai.' },
    { id: 'jedaDatar', teks: 'Jeda simulasi saat es sedang melebur, lalu jeda lagi saat air sedang mendidih. Baca suhunya di kedua saat itu.' },
    { id: 'dayaBeda', teks: 'Jalankan dua percobaan dengan massa dan suhu awal sama tetapi daya berbeda. Bandingkan kalor total dan waktunya.' },
];

export default function PemanasanEs() {
    const [massa, setMassa] = useState(1);
    const [daya, setDaya] = useState(1000);
    const [suhu0, setSuhu0] = useState(-10);
    const [sumbuX, setSumbuX] = useState<'Q' | 't'>('Q');

    const hasil = useMemo(() => hasilPemanasan(massa, daya, suhu0), [massa, daya, suhu0]);
    const ruas = useMemo(() => ruasPemanasan(massa, suhu0), [massa, suhu0]);
    const skala = skalaWaktu(hasil.waktuTotal);

    // Keadaan yang berubah tiap langkah
    const tRef = useRef(0); // detik pemanasan
    const animRef = useRef(0); // jam animasi partikel dan gelembung (ikut berhenti saat jeda)
    const statusRef = useRef<Status>('siap');
    const [status, setStatus] = useState<Status>('siap');
    const aturStatus = (s: Status) => {
        statusRef.current = s;
        setStatus(s);
    };
    const tahapJedaRef = useRef<Set<number>>(new Set());

    const [percobaan, setPercobaan] = useState<Percobaan[]>([]);
    const [selesai, tandai] = useTantangan();

    const loop = useSimLoop((dt) => {
        if (statusRef.current === 'selesai') return;
        if (statusRef.current === 'siap') aturStatus('jalan');
        animRef.current += dt;
        tRef.current += dt * skala;
        if (tRef.current * daya >= hasil.kalorTotal) {
            tRef.current = hasil.kalorTotal / daya;
            saatSelesai();
        }
    });

    function saatSelesai() {
        aturStatus('selesai');
        loop.jeda();
        const baru: Percobaan = {
            nilai: {
                massa, daya, suhu0,
                kalor: hasil.kalorSampaiUap / 1000,
                waktu: hasil.waktuSampaiUap / 60,
                lebur: hasil.kalorLebur / 1000,
            },
        };
        setPercobaan([...percobaan, baru]);

        const n = baru.nilai;
        if (Math.abs(hasil.waktuLebur - 300) <= 10) tandai('lebur300');
        for (const p of percobaan) {
            const q = p.nilai;
            if (q.massa === n.massa && q.suhu0 === n.suhu0 && q.daya !== n.daya
                && Math.abs(q.kalor - n.kalor) < 0.01 && Math.abs(q.waktu - n.waktu) > 0.01) {
                tandai('dayaBeda');
            }
        }
    }

    // Pengatur diubah: pemanasan kembali ke awal
    useEffect(() => {
        tRef.current = 0;
        animRef.current = 0;
        aturStatus('siap');
        loop.jeda();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [massa, daya, suhu0]);

    // Jeda saat ruas mendatar: tantangan kedua
    useEffect(() => {
        if (loop.jalan || statusRef.current !== 'jalan') return;
        const k = keadaanPada(massa, suhu0, daya * tRef.current);
        if (k.tahap === 1 || k.tahap === 3) {
            tahapJedaRef.current.add(k.tahap);
            if (tahapJedaRef.current.has(1) && tahapJedaRef.current.has(3)) tandai('jedaDatar');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loop.jalan]);

    const mulai = () => {
        if (statusRef.current === 'selesai') {
            tRef.current = 0;
            animRef.current = 0;
        }
        aturStatus('jalan');
        loop.mainkan();
    };

    const ulang = () => {
        tRef.current = 0;
        animRef.current = 0;
        aturStatus('siap');
        loop.jeda();
    };

    const Q = Math.min(daya * tRef.current, hasil.kalorTotal);
    const kini = keadaanPada(massa, suhu0, Q);

    /* ----- Gambar panggung ----- */

    const gambar = (ctx: Ctx, w: number, h: number) => {
        const c = warnaSim();
        const q = Math.min(daya * tRef.current, hasil.kalorTotal);
        const k = keadaanPada(massa, suhu0, q);
        const anim = animRef.current;

        const bx0 = 0.05 * w;
        const bx1 = 0.4 * w;
        const yAtas = 0.3 * h;
        const yB = 0.76 * h;
        const lebarB = bx1 - bx0;
        const Hm = (yB - yAtas) * 0.6; // tinggi air penuh

        // Nama tahap
        label(ctx, NAMA_TAHAP[k.tahap], 8, 14, { latar: c.lime, ukuran: 12 });

        // Isi bejana menurut fase
        let hCair = 0;
        let sisaEs = 0;
        if (k.tahap === 0) sisaEs = 1;
        else if (k.tahap === 1) { hCair = Hm * k.frakLebur; sisaEs = 1 - k.frakLebur; }
        else if (k.tahap === 2) hCair = Hm;
        else if (k.tahap === 3) hCair = Hm * (1 - k.frakUap);
        const warnaIsi = warnaSuhu(k.suhu);

        if (k.tahap === 4) {
            ctx.fillStyle = campur(c.krem, c.oranye, 0.3);
            ctx.fillRect(bx0 + 1, yAtas, lebarB - 2, yB - yAtas);
        }
        if (hCair > 0) {
            ctx.fillStyle = warnaIsi;
            ctx.fillRect(bx0 + 1, yB - hCair, lebarB - 2, hCair);
            garis(ctx, bx0 + 1, yB - hCair, bx1 - 1, yB - hCair, { tebal: 1.5 });
        }
        if (sisaEs > 0) {
            const wb = lebarB * 0.62 * Math.sqrt(sisaEs);
            const hb = Hm * 0.85 * Math.sqrt(sisaEs);
            const bawah = hCair > 0 ? yB - hCair + hb * 0.3 : yB;
            kotak(ctx, (bx0 + bx1) / 2 - wb / 2, bawah - hb, wb, hb, { isi: warnaSuhu(Math.min(k.suhu, 0)) });
        }
        // Gelembung saat mendidih
        if (k.tahap === 3 && hCair > 6) {
            for (let i = 0; i < 7; i++) {
                const u = pecahan(anim * 0.7 + i / 7);
                const bxx = bx0 + lebarB * (0.14 + 0.72 * pecahan(i * 0.618)) + 3 * Math.sin(anim * 5 + i);
                bulat(ctx, bxx, yB - 4 - u * (hCair - 8), 2.5 + (i % 3) * 1.2, { isi: c.latar, tebal: 1.5 });
            }
        }
        // Uap di dalam dan di atas bejana
        if (k.tahap >= 3) {
            const jumlah = k.tahap === 4 ? 10 : 6;
            for (let i = 0; i < jumlah; i++) {
                const u = pecahan(anim * 0.25 + i / jumlah);
                const ux = bx0 + lebarB * (0.12 + 0.76 * pecahan(i * 0.382 + 0.1)) + 4 * Math.sin(anim * 2 + i * 1.9);
                const atasUap = yAtas - 28;
                const bawahUap = yB - hCair - 4;
                if (bawahUap > atasUap) bulat(ctx, ux, bawahUap - u * (bawahUap - atasUap), 3, { isi: c.latar, tebal: 1.5 });
            }
            for (let i = 0; i < 3; i++) {
                const pts = [];
                for (let j = 0; j <= 8; j++) {
                    pts.push({
                        x: bx0 + lebarB * (0.25 + 0.25 * i) + 4 * Math.sin(anim * 3 + j * 0.9 + i * 2),
                        y: yAtas - 4 - j * 3,
                    });
                }
                lintasan(ctx, pts, { warna: c.redup, tebal: 2 });
            }
        }
        // Dinding bejana
        garis(ctx, bx0, yAtas, bx0, yB, { tebal: 2.5 });
        garis(ctx, bx1, yAtas, bx1, yB, { tebal: 2.5 });
        garis(ctx, bx0 - 1, yB, bx1 + 1, yB, { tebal: 2.5 });

        // Pemanas
        const yPlat = yB + 4;
        kotak(ctx, bx0 - 8, yPlat, lebarB + 16, 15, { isi: c.lime });
        label(ctx, `${angka(daya, 0)} W`, (bx0 + bx1) / 2, yPlat + 8, { rata: 'center', ukuran: 11 });
        if (loop.jalan) {
            for (let i = 0; i < 3; i++) {
                const fx = bx0 + lebarB * (0.2 + 0.3 * i);
                const tinggiApi = 12 + 5 * Math.sin(anim * 14 + i * 2);
                ctx.save();
                ctx.fillStyle = c.oranye;
                ctx.strokeStyle = c.gelap;
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.moveTo(fx - 9, yPlat + 15);
                ctx.lineTo(fx, yPlat + 15 + tinggiApi);
                ctx.lineTo(fx + 9, yPlat + 15);
                ctx.closePath();
                ctx.fill();
                ctx.stroke();
                ctx.restore();
            }
        }

        // Termometer
        const xTh = 0.52 * w;
        const yTT = 0.22 * h;
        const yTB = yB - 8;
        const yDari = (T: number) => yTB - ((T + 45) / 170) * (yTB - yTT);
        kotak(ctx, xTh - 7, yTT, 14, yTB - yTT + 6, { isi: c.latar });
        bulat(ctx, xTh, yTB + 10, 9, { isi: k.suhu < 20 ? c.biru : c.oranye });
        const yKolom = yDari(k.suhu);
        ctx.fillStyle = k.suhu < 20 ? c.biru : c.oranye;
        ctx.fillRect(xTh - 3, yKolom, 6, yTB + 6 - yKolom);
        for (const T of [0, 100]) {
            garis(ctx, xTh - 12, yDari(T), xTh - 7, yDari(T), { tebal: 2 });
            label(ctx, String(T), xTh - 14, yDari(T), { rata: 'right', ukuran: 10, tebal: 500, warna: c.redup });
        }
        label(ctx, `${angka(k.suhu, 1)} °C`, xTh, yTT - 13, { rata: 'center', latar: c.lime, ukuran: 12 });

        // Partikel
        const px0 = 0.64 * w;
        const px1 = 0.96 * w;
        label(ctx, 'Partikel', (px0 + px1) / 2, yAtas - 9, { rata: 'center', ukuran: 11, tebal: 500, warna: c.redup });
        gambarPartikel(ctx, px0, yAtas, px1, yB, k, anim);
        const teksFase = k.tahap === 0 ? 'padat'
            : k.tahap === 1 ? 'padat + cair'
                : k.tahap === 2 ? 'cair'
                    : k.tahap === 3 ? 'cair + gas' : 'gas';
        label(ctx, teksFase, (px0 + px1) / 2, yB + 14, { rata: 'center', ukuran: 12 });
    };

    /* ----- Grafik ----- */

    const ambilGrafik = (): OpsiGrafik => {
        const c = warnaSim();
        const q = Math.min(daya * tRef.current, hasil.kalorTotal);
        const k = keadaanPada(massa, suhu0, q);
        const ke = (v: number) => (sumbuX === 'Q' ? v / 1000 : v / daya / 60);
        const seri: Seri[] = [];
        for (const r of ruas) {
            if (r.q1 - r.q0 < 1e-9 && !r.datar) continue;
            const warna = r.datar ? c.oranye : c.gelap;
            seri.push({
                nama: `${r.nama} (penuh)`,
                titik: [{ x: ke(r.q0), y: r.t0 }, { x: ke(r.q1), y: r.t1 }],
                warna: r.datar ? c.oranye : c.redup,
                gaya: 'putus',
                tebal: 1.5,
            });
            if (q > r.q0 + 1e-9) {
                const ujung = Math.min(q, r.q1);
                const f = r.q1 - r.q0 > 1e-12 ? (ujung - r.q0) / (r.q1 - r.q0) : 1;
                seri.push({
                    nama: `${r.nama} (dilewati)`,
                    titik: [{ x: ke(r.q0), y: r.t0 }, { x: ke(ujung), y: r.t0 + f * (r.t1 - r.t0) }],
                    warna,
                    tebal: 4,
                });
            }
        }
        return {
            seri,
            penanda: [{ x: ke(q), y: k.suhu }],
            labelX: sumbuX === 'Q' ? 'Q (kJ)' : 't (menit)',
            labelY: 'T (°C)',
            xMin: 0, xMaks: ke(hasil.kalorTotal) * 1.03,
            yMin: Math.min(suhu0, 0) - 10, yMaks: T_AKHIR + 8,
            muatNol: false,
        };
    };

    /* ----- Rumus ----- */

    const ruasKini = ruas[kini.tahap];
    const kJ = (j: number) => angka(j / 1000, 1);
    const barisRumus: BarisRumus[] = ruasKini.datar
        ? [
            {
                mathml: `${mi('Q')}${mo('=')}${mi('m')}${mi('L')}`,
                baca: 'Q sama dengan m kali L',
            },
            {
                mathml: `${mo('=')}${mn(angka(massa, 1))}${mo('×')}${mn(angka(kini.tahap === 1 ? L_LEBUR : L_UAP, 0))}`
                    + `${mo('=')}${mn(kJ(ruasKini.q1 - ruasKini.q0))}${mtext('kJ')}`,
                baca: `sama dengan ${angka(massa, 1)} kali ${kini.tahap === 1 ? L_LEBUR : L_UAP}, yaitu ${kJ(ruasKini.q1 - ruasKini.q0)} kilojoule`,
            },
        ]
        : [
            {
                mathml: `${mi('Q')}${mo('=')}${mi('m')}${mi('c')}${mi('Δ')}${mi('T')}`,
                baca: 'Q sama dengan m kali c kali delta T',
            },
            {
                mathml: `${mo('=')}${mn(angka(massa, 1))}${mo('×')}${mn(angka([C_ES, 0, C_AIR, 0, C_UAP][kini.tahap], 0))}`
                    + `${mo('×')}${mn(angka(ruasKini.t1 - ruasKini.t0, 0))}`
                    + `${mo('=')}${mn(kJ(ruasKini.q1 - ruasKini.q0))}${mtext('kJ')}`,
                baca: `sama dengan ${angka(massa, 1)} kali ${[C_ES, 0, C_AIR, 0, C_UAP][kini.tahap]} kali ${angka(ruasKini.t1 - ruasKini.t0, 0)}, yaitu ${kJ(ruasKini.q1 - ruasKini.q0)} kilojoule`,
            },
        ];
    const catatanRumus = `Tahap sekarang: ${NAMA_SINGKAT[kini.tahap]}. `
        + (ruasKini.datar
            ? 'Kalor dipakai mengubah wujud, bukan menaikkan suhu, jadi suhu tetap.'
            : 'Kalor menaikkan suhu. Makin besar c, makin lambat suhunya naik.');

    /* ----- Ringkasan untuk pembaca layar ----- */

    const deskripsi = `Bejana berisi es ${angka(massa, 1)} kilogram dipanaskan pemanas ${daya} watt. `
        + `Tahap sekarang: ${NAMA_TAHAP[kini.tahap]}. Suhu ${angka(kini.suhu, 1)} derajat Celsius, kalor yang diberikan ${kJ(Q)} kilojoule.`;
    const deskripsiGrafik = `Grafik suhu terhadap ${sumbuX === 'Q' ? 'kalor' : 'waktu'} dengan lima ruas: tiga ruas miring dan dua ruas mendatar di 0 dan 100 derajat Celsius. `
        + `Saat ini suhu ${angka(kini.suhu, 1)} derajat Celsius pada kalor ${kJ(Q)} kilojoule.`;

    return (
        <SimShell
            panggung={<Panggung gambar={gambar} deskripsi={deskripsi} />}
            kendaliPutar={
                <PlayBar
                    loop={loop}
                    onMulai={mulai}
                    onUlang={ulang}
                    labelMulai={status === 'jalan' ? 'Lanjut' : status === 'selesai' ? 'Ulangi' : 'Panaskan'}
                />
            }
            bacaan={
                <>
                    <BarisBacaan>
                        <Bacaan label="Suhu (T)" nilai={angkaTetap(kini.suhu, 1)} satuan="°C" sorot="lime" />
                        <Bacaan label="Kalor diberikan (Q)" nilai={angkaTetap(Q / 1000, 1)} satuan="kJ" />
                        <Bacaan label="Waktu pemanasan" nilai={angkaTetap(tRef.current / 60, 1)} satuan="menit" />
                        <Bacaan label="Tahap" nilai={NAMA_SINGKAT[kini.tahap]} />
                        <Bacaan label="Sudah melebur" nilai={angkaTetap(kini.frakLebur * 100, 0)} satuan="%" />
                        <Bacaan label="Sudah menguap" nilai={angkaTetap(kini.frakUap * 100, 0)} satuan="%" />
                    </BarisBacaan>
                    <p className="text-xs text-muted">
                        Simulasi dipercepat: 1 detik layar sama dengan {angka(skala, 0)} detik pemanasan. Waktu pemanasan di atas adalah waktu yang sebenarnya.
                    </p>
                </>
            }
            pengatur={
                <>
                    <Slider label="Massa es" simbol="m" nilai={massa} min={0.1} maks={2} langkah={0.1} satuan="kg" onUbah={setMassa} />
                    <Slider label="Daya pemanas" simbol="P" nilai={daya} min={200} maks={2000} langkah={100} satuan="W" onUbah={setDaya} />
                    <Slider label="Suhu awal es" simbol="T₀" nilai={suhu0} min={-40} maks={0} langkah={5} satuan="°C" onUbah={setSuhu0} />
                </>
            }
            rumus={<RumusHidup baris={barisRumus} catatan={catatanRumus} />}
            grafik={
                <Panel judul="Grafik pemanasan" ikon={<IconChartDots size={18} stroke={2.5} aria-hidden="true" />}>
                    <div className="mb-3">
                        <Pilihan
                            label="Sumbu mendatar"
                            labelTersembunyi
                            nilai={sumbuX}
                            pilihan={[{ nilai: 'Q', label: 'T terhadap kalor (Q)' }, { nilai: 't', label: 'T terhadap waktu (t)' }]}
                            onUbah={setSumbuX}
                        />
                    </div>
                    <GrafikHidup
                        ambil={ambilGrafik}
                        rasio={1.9}
                        deskripsi={deskripsiGrafik}
                        keterangan={[
                            { nama: 'Suhu naik', warna: warnaSim().gelap },
                            { nama: 'Ruas mendatar: ubah wujud', warna: warnaSim().oranye },
                            { nama: 'Belum dilewati', warna: warnaSim().redup, putus: true },
                        ]}
                    />
                    <p className="text-xs text-muted mt-2">
                        Garis putus adalah jalur penuh. Bagian tebal sudah dilewati. Di ruas mendatar kalor terus bertambah, tetapi suhu tidak naik.
                    </p>
                </Panel>
            }
            selidiki={
                <SelidikiHubungan
                    bebas={BEBAS}
                    terikat={TERIKAT}
                    percobaan={percobaan}
                    onHapus={() => setPercobaan([])}
                    ajakan="Jalankan pemanasan sampai selesai, lalu ubah satu besaran saja (misalnya massa) dan jalankan lagi. Tiap percobaan yang selesai jadi satu titik di grafik ini."
                />
            }
            tantangan={<Tantangan daftar={TANTANGAN} selesai={selesai} />}
        />
    );
}
