/* ============================================================
   SIMULASI: Gas dalam Piston (Bab 3-4 dan 3-5)
   ============================================================
   Gas ideal monoatomik dalam silinder berpiston menjalani satu proses dari keadaan awal
   (P₁ = 100 kPa, T₁ = 300 K) ke keadaan akhir. Empat proses: isobarik, isokhorik,
   isotermal, adiabatik. γ = 5/3 dan Cv = 3/2 R.

   Hubungan yang harus bisa ditemukan siswa:
   - isotermal: V turun → P naik (berbanding terbalik)
   - isokhorik: T naik → P naik (sebanding)
   - isobarik: T naik → V naik (sebanding)
   - T naik → kelajuan partikel naik
   - untuk perubahan volume yang sama, usaha isotermal dan adiabatik berbeda (usaha bergantung lintasan)

   Satuan di fungsi fisika: Pa, m³, K, J. W positif berarti gas melakukan usaha.
   Tinggi piston pada gambar memakai skala V/(V₁·2,6), jadi mengikuti V₁ yang bergantung pada n.
   ============================================================ */

import { IconChartDots } from '@tabler/icons-react';
import { useEffect, useRef, useState } from 'react';
import {
    angka, angkaTetap, buatSkala, bulat, Ctx, gambarSumbu, garis, jepit, kotak, label, lintasan, panah,
    useSimLoop, warnaSim,
} from '../../engine';
import {
    Bacaan, BarisBacaan, BarisRumus, Besaran, mfrac, mi, mn, mo, mtext, msub, Panel, Panggung, Percobaan, Pilihan,
    PlayBar, RumusHidup, SelidikiHubungan, SimShell, Slider, Tantangan, useTantangan,
} from '../../ui';

/* ---------- 1. Fisika ---------- */

export const R = 8.314; // J/mol K
export const P_AWAL = 100000; // Pa
export const T_AWAL = 300; // K
export const GAMMA = 5 / 3;

/** 0 isobarik, 1 isokhorik, 2 isotermal, 3 adiabatik */
export type Proses = 0 | 1 | 2 | 3;

/** Volume awal (m³) dari PV = nRT. */
export function volumeAwal(n: number): number {
    return (n * R * T_AWAL) / P_AWAL;
}

export interface KeadaanGas {
    P: number; // Pa
    V: number; // m³
    T: number; // K
    /** Usaha oleh gas sejak keadaan awal (J) */
    W: number;
    dU: number;
    Q: number;
}

/**
 * Keadaan gas pada kemajuan proses s (0 sampai 1).
 * T2 (K) dipakai isobarik dan isokhorik. rasio = V₂/V₁ dipakai isotermal dan adiabatik.
 */
export function keadaanProses(jenis: Proses, n: number, T2: number, rasio: number, s: number): KeadaanGas {
    const V1 = volumeAwal(n);
    let V = V1;
    let T = T_AWAL;
    let W = 0;
    if (jenis === 0) {
        T = T_AWAL + s * (T2 - T_AWAL);
        V = (n * R * T) / P_AWAL;
        W = P_AWAL * (V - V1);
    } else if (jenis === 1) {
        T = T_AWAL + s * (T2 - T_AWAL);
    } else if (jenis === 2) {
        V = V1 * Math.pow(rasio, s);
        W = n * R * T_AWAL * Math.log(V / V1);
    } else {
        V = V1 * Math.pow(rasio, s);
        T = T_AWAL * Math.pow(V1 / V, GAMMA - 1);
    }
    const dU = 1.5 * n * R * (T - T_AWAL);
    if (jenis === 3) W = -dU;
    return { P: (n * R * T) / V, V, T, W, dU, Q: dU + W };
}

export interface HasilAkhir extends KeadaanGas {
    /** V₂/V₁ yang sebenarnya */
    rasioV: number;
    /** Kelajuan partikel dibanding awal, √(T₂/T₁) */
    kelajuanRel: number;
}

export function hasilAkhir(jenis: Proses, n: number, T2: number, rasio: number): HasilAkhir {
    const k = keadaanProses(jenis, n, T2, rasio, 1);
    return { ...k, rasioV: k.V / volumeAwal(n), kelajuanRel: Math.sqrt(k.T / T_AWAL) };
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

/** Warna isi gas menurut suhu: biru muda di bawah 300 K, krem di 300 K, oranye muda di atasnya. */
function warnaGas(T: number): string {
    const c = warnaSim();
    if (T <= T_AWAL) return campur(campur(c.biru, c.krem, 0.7), c.krem, (T - 200) / 100);
    return campur(c.krem, c.oranye, ((T - T_AWAL) / 300) * 0.6);
}

const NAMA_PROSES = ['Isobarik', 'Isokhorik', 'Isotermal', 'Adiabatik'];
const KETERANGAN_PROSES = [
    'Isobarik: tekanan tetap',
    'Isokhorik: volume tetap',
    'Isotermal: suhu tetap',
    'Adiabatik: tanpa kalor',
];

const HC = 1.2; // tinggi silinder : lebar silinder
const SKALA_V = 2.6; // piston setinggi HC saat V = 2,6 V₁
const MAKS_PARTIKEL = 40;
const DURASI = 6; // detik layar untuk satu proses

interface Partikel {
    x: number; // 0..1 (lebar silinder = 1)
    y: number; // 0..HC (satuan lebar silinder)
    vx: number;
    vy: number;
}

function buatPartikel(): Partikel[] {
    const pecahan = (u: number) => u - Math.floor(u);
    return Array.from({ length: MAKS_PARTIKEL }, (_, i) => {
        const sudut = i * 2.399963;
        const laju = 0.6 + 0.8 * pecahan(i * 0.754);
        return {
            x: 0.05 + 0.9 * pecahan(i * 0.618 + 0.1),
            y: 0.03 + 0.38 * pecahan(i * 0.382 + 0.2),
            vx: Math.cos(sudut) * laju,
            vy: Math.sin(sudut) * laju,
        };
    });
}

const tinggiUnit = (V: number, V1: number) => (HC * V) / (V1 * SKALA_V);

/* ---------- 3. Komponen ---------- */

type Status = 'siap' | 'jalan' | 'selesai';

const BEBAS: Besaran[] = [
    { id: 'T2', label: 'suhu tujuan (isobarik, isokhorik)', simbol: 'T₂', satuan: 'K', desimal: 0 },
    { id: 'rasio', label: 'volume tujuan (isotermal, adiabatik)', simbol: 'V₂/V₁', satuan: '×', desimal: 1 },
    { id: 'n', label: 'jumlah gas', simbol: 'n', satuan: 'mol', desimal: 1 },
];

const TERIKAT: Besaran[] = [
    { id: 'P2', label: 'tekanan akhir', simbol: 'P₂', satuan: 'kPa', desimal: 1 },
    { id: 'V2', label: 'volume akhir', simbol: 'V₂', satuan: 'L', desimal: 1 },
    { id: 'Takhir', label: 'suhu akhir', simbol: 'T akhir', satuan: 'K', desimal: 0 },
    { id: 'W', label: 'usaha oleh gas', simbol: 'W', satuan: 'J', desimal: 0 },
    { id: 'Q', label: 'kalor yang diterima gas', simbol: 'Q', satuan: 'J', desimal: 0 },
    { id: 'vrel', label: 'kelajuan partikel dibanding awal', simbol: 'v/v₁', satuan: '×', desimal: 2 },
];

const TANTANGAN = [
    { id: 'setengah', teks: 'Mampatkan gas secara isotermal sampai volumenya setengah V₁ (V₂/V₁ = 0,5). Jalankan sampai selesai dan baca tekanan akhirnya.' },
    { id: 'usahaBeda', teks: 'Jalankan proses isotermal dan adiabatik dengan n sama dan volume akhir sama (V₂/V₁ lebih dari 1). Bandingkan usaha keduanya.' },
    { id: 'kalorBeda', teks: 'Jalankan proses isobarik dan isokhorik dengan n sama dan suhu akhir sama (lebih dari 300 K). Bandingkan kalor yang dibutuhkan.' },
];

export default function GasPiston() {
    const [jenis, setJenis] = useState<Proses>(0);
    const [n, setN] = useState(1);
    const [tujuanT, setTujuanT] = useState(450);
    const [tujuanV, setTujuanV] = useState(2);

    const akhir = hasilAkhir(jenis, n, tujuanT, tujuanV);
    const V1 = volumeAwal(n);

    // Keadaan yang berubah tiap langkah
    const sRef = useRef(0);
    const partikelRef = useRef<Partikel[]>(buatPartikel());
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
        sRef.current = Math.min(1, sRef.current + dt / DURASI);

        // Partikel memantul di dinding dan piston. Kelajuan sebanding √T.
        const k = keadaanProses(jenis, n, tujuanT, tujuanV, sRef.current);
        const Hu = tinggiUnit(k.V, V1);
        const kec = 0.5 * Math.sqrt(k.T / T_AWAL);
        for (const p of partikelRef.current) {
            p.x += p.vx * kec * dt;
            p.y += p.vy * kec * dt;
            if (p.x < 0) { p.x = -p.x; p.vx = Math.abs(p.vx); }
            if (p.x > 1) { p.x = 2 - p.x; p.vx = -Math.abs(p.vx); }
            if (p.y < 0) { p.y = -p.y; p.vy = Math.abs(p.vy); }
            if (p.y > Hu) { p.y = Math.max(0, 2 * Hu - p.y); p.vy = -Math.abs(p.vy); }
        }

        if (sRef.current >= 1) saatSelesai();
    });

    function saatSelesai() {
        aturStatus('selesai');
        loop.jeda();
        const baru: Percobaan = {
            nilai: {
                proses: jenis, n, T2: tujuanT, rasio: tujuanV,
                P2: akhir.P / 1000, V2: akhir.V * 1000, Takhir: akhir.T,
                W: akhir.W, Q: akhir.Q, vrel: akhir.kelajuanRel,
            },
        };
        setPercobaan([...percobaan, baru]);

        const b = baru.nilai;
        if (jenis === 2 && Math.abs(tujuanV - 0.5) < 1e-6) tandai('setengah');
        for (const p of percobaan) {
            const q = p.nilai;
            if (q.n !== b.n) continue;
            const pasangan = (a: number, c: number) => (q.proses === a && b.proses === c) || (q.proses === c && b.proses === a);
            if (pasangan(2, 3) && q.rasio === b.rasio && b.rasio > 1) tandai('usahaBeda');
            if (pasangan(0, 1) && q.T2 === b.T2 && b.T2 > T_AWAL) tandai('kalorBeda');
        }
    }

    // Pengatur diubah: proses kembali ke keadaan awal
    useEffect(() => {
        sRef.current = 0;
        aturStatus('siap');
        loop.jeda();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [jenis, n, tujuanT, tujuanV]);

    const mulai = () => {
        if (statusRef.current === 'selesai') sRef.current = 0;
        aturStatus('jalan');
        loop.mainkan();
    };

    const ulang = () => {
        sRef.current = 0;
        aturStatus('siap');
        loop.jeda();
    };

    const kini = keadaanProses(jenis, n, tujuanT, tujuanV, sRef.current);

    /* ----- Gambar panggung ----- */

    const gambar = (ctx: Ctx, w: number, h: number) => {
        const c = warnaSim();
        const s = sRef.current;
        const k = keadaanProses(jenis, n, tujuanT, tujuanV, s);
        const Hu = tinggiUnit(k.V, V1);

        const Wc = Math.min(0.36 * w, (0.58 * h) / HC);
        const cx0 = 0.09 * w;
        const cx1 = cx0 + Wc;
        const yB = 0.76 * h;
        const yAtasMaks = yB - Wc * HC;
        const yP = yB - Wc * Hu;

        label(ctx, KETERANGAN_PROSES[jenis], 8, 14, { latar: c.lime, ukuran: 12 });

        // Gas
        ctx.fillStyle = warnaGas(k.T);
        ctx.fillRect(cx0, yP, Wc, yB - yP);
        const jumlah = Math.round(20 * n);
        for (let i = 0; i < jumlah; i++) {
            const p = partikelRef.current[i];
            bulat(ctx, cx0 + 5 + p.x * (Wc - 10), yB - jepit(p.y * Wc, 5, Math.max(5, Wc * Hu - 5)), 3.5, { isi: c.latar, tebal: 1.5 });
        }

        // Dinding silinder (adiabatik: selubung penyekat dengan garis arsir)
        if (jenis === 3) {
            kotak(ctx, cx0 - 9, yAtasMaks, 9, yB - yAtasMaks, { isi: c.krem });
            kotak(ctx, cx1, yAtasMaks, 9, yB - yAtasMaks, { isi: c.krem });
            for (let y = yAtasMaks + 8; y < yB - 4; y += 10) {
                garis(ctx, cx0 - 9, y + 6, cx0, y, { tebal: 1.2 });
                garis(ctx, cx1, y + 6, cx1 + 9, y, { tebal: 1.2 });
            }
        } else {
            garis(ctx, cx0, yAtasMaks, cx0, yB, { tebal: 2.5 });
            garis(ctx, cx1, yAtasMaks, cx1, yB, { tebal: 2.5 });
        }

        // Piston dan batangnya
        garis(ctx, (cx0 + cx1) / 2, yP - 8, (cx0 + cx1) / 2, yAtasMaks - 10, { tebal: 3 });
        kotak(ctx, (cx0 + cx1) / 2 - 16, yAtasMaks - 16, 32, 6, { isi: c.krem });
        kotak(ctx, cx0 + 1, yP - 8, Wc - 2, 8, { isi: c.lime });

        // Dasar: pemanas, pendingin, atau penyekat
        const yPlat = yB + 4;
        let teksDasar = 'Pemanas';
        let isiDasar = c.oranye;
        if (jenis === 3) {
            teksDasar = 'Terisolasi';
            isiDasar = c.krem;
        } else if (Math.abs(akhir.Q) < 1e-6) {
            teksDasar = 'Tanpa kalor';
            isiDasar = c.krem;
        } else if (akhir.Q < 0) {
            teksDasar = 'Pendingin';
            isiDasar = campur(c.biru, c.latar, 0.55);
        }
        kotak(ctx, cx0 - 9, yPlat, Wc + 18, 16, { isi: isiDasar });
        label(ctx, teksDasar, (cx0 + cx1) / 2, yPlat + 9, { rata: 'center', ukuran: 11 });

        // Panah kalor saat proses berjalan
        const bergerak = (s > 0 && s < 1) || loop.jalan;
        if (bergerak && jenis !== 3 && Math.abs(akhir.Q) > 1e-6) {
            for (const f of [0.3, 0.7]) {
                const ax = cx0 + Wc * f;
                if (akhir.Q > 0) panah(ctx, ax, yB - 4, ax, yB - 28, { warna: c.oranye, tebal: 3 });
                else panah(ctx, ax, yB - 28, ax, yB - 4, { warna: c.biru, tebal: 3 });
            }
        }

        // Pengukur P, V, T
        const gx0 = 0.56 * w;
        const gx1 = w - 12;
        const jarak = Math.max(40, 0.17 * h);
        const y0 = 0.22 * h;
        const awal = keadaanProses(jenis, n, tujuanT, tujuanV, 0);
        const alat = [
            { teks: `P = ${angka(k.P / 1000, 1)} kPa`, f: k.P / 1000 / 500, f0: awal.P / 1000 / 500, warna: c.lime },
            { teks: `V = ${angka(k.V * 1000, 1)} L`, f: k.V / (V1 * SKALA_V), f0: awal.V / (V1 * SKALA_V), warna: c.lime },
            { teks: `T = ${angka(k.T, 0)} K`, f: k.T / 700, f0: awal.T / 700, warna: c.oranye },
        ];
        alat.forEach((a, i) => {
            const y = y0 + i * jarak;
            label(ctx, a.teks, gx0, y, { ukuran: 12 });
            kotak(ctx, gx0, y + 10, gx1 - gx0, 12, { isi: c.latar });
            ctx.fillStyle = a.warna;
            ctx.fillRect(gx0 + 1, y + 11, Math.max(0, jepit(a.f, 0, 1) * (gx1 - gx0) - 2), 10);
            garis(ctx, gx0 + jepit(a.f0, 0, 1) * (gx1 - gx0), y + 8, gx0 + jepit(a.f0, 0, 1) * (gx1 - gx0), y + 26, { tebal: 2 });
        });
        label(ctx, 'garis tegak: nilai awal', gx0, y0 + 3 * jarak - 4, { ukuran: 10, tebal: 500, warna: c.redup });
    };

    /* ----- Grafik P–V ----- */

    const gambarPV = (ctx: Ctx, w: number, h: number) => {
        const c = warnaSim();
        const sNow = sRef.current;
        const N = 60;
        const jalur = Array.from({ length: N + 1 }, (_, i) => {
            const k = keadaanProses(jenis, n, tujuanT, tujuanV, i / N);
            return { x: k.V * 1000, y: k.P / 1000 };
        });
        const xMaks = Math.max(...jalur.map((p) => p.x)) * 1.2;
        const yMaks = Math.max(...jalur.map((p) => p.y)) * 1.2;
        const sk = buatSkala({
            w, h, xMin: 0, xMaks, yMin: 0, yMaks,
            pad: { kiri: 46, kanan: 14, atas: 14, bawah: 30 },
        });
        gambarSumbu(ctx, sk, { labelX: 'V (L)', labelY: 'P (kPa)' });

        ctx.save();
        ctx.beginPath();
        ctx.rect(sk.kiri, sk.atas - 4, sk.kanan - sk.kiri + 4, sk.bawah - sk.atas + 8);
        ctx.clip();

        // Arsiran usaha: daerah di bawah lintasan yang sudah dilewati
        const nLewat = Math.round(sNow * N);
        const lewat = jalur.slice(0, nLewat + 1);
        const sekarang = keadaanProses(jenis, n, tujuanT, tujuanV, sNow);
        lewat.push({ x: sekarang.V * 1000, y: sekarang.P / 1000 });
        if (sNow > 0) {
            ctx.fillStyle = sekarang.W >= 0 ? c.lime : c.oranyeLembut;
            ctx.beginPath();
            ctx.moveTo(sk.x(lewat[0].x), sk.y(0));
            for (const p of lewat) ctx.lineTo(sk.x(p.x), sk.y(p.y));
            ctx.lineTo(sk.x(lewat[lewat.length - 1].x), sk.y(0));
            ctx.closePath();
            ctx.fill();
        }

        // Isoterm awal (pembanding)
        const iso = [];
        for (let i = 0; i <= 80; i++) {
            const v = xMaks * (0.1 + 0.9 * (i / 80));
            iso.push({ x: sk.x(v), y: sk.y((n * R * T_AWAL) / (v / 1000) / 1000) });
        }
        lintasan(ctx, iso, { warna: c.redup, tebal: 1.5, putus: [6, 5] });

        // Jalur penuh (putus) dan bagian yang sudah dilewati (tebal)
        lintasan(ctx, jalur.map((p) => ({ x: sk.x(p.x), y: sk.y(p.y) })), { warna: c.gelap, tebal: 1.5, putus: [3, 4] });
        if (sNow > 0) lintasan(ctx, lewat.map((p) => ({ x: sk.x(p.x), y: sk.y(p.y) })), { tebal: 3 });
        ctx.restore();

        // Titik awal, titik tujuan, dan titik sekarang
        const a = jalur[0];
        const b = jalur[N];
        bulat(ctx, sk.x(b.x), sk.y(b.y), 6, { isi: c.latar, garis: c.redup });
        bulat(ctx, sk.x(a.x), sk.y(a.y), 6, { isi: c.latar });
        label(ctx, '1', sk.x(a.x) - 11, sk.y(a.y) - 9, { rata: 'center', ukuran: 12 });
        label(ctx, '2', sk.x(b.x) + 11, sk.y(b.y) - 9, { rata: 'center', ukuran: 12 });
        if (sNow > 0) bulat(ctx, sk.x(sekarang.V * 1000), sk.y(sekarang.P / 1000), 6, { isi: c.oranye });
        label(ctx, 'isoterm 300 K', sk.kanan - 4, sk.y((n * R * T_AWAL) / (xMaks * 0.85 / 1000) / 1000) - 12, {
            rata: 'right', ukuran: 10, tebal: 500, warna: c.redup,
        });
    };

    /* ----- Rumus ----- */

    const barisUsaha = (): BarisRumus[] => {
        const dua = (x: number) => angka(x, 2);
        if (jenis === 0) {
            return [
                { mathml: `${mi('W')}${mo('=')}${mi('P')}${mo('(')}${msub(mi('V'), mn(2))}${mo('−')}${msub(mi('V'), mn(1))}${mo(')')}`, baca: 'W sama dengan P dikali V dua dikurangi V satu' },
                {
                    mathml: `${mo('=')}${mn(angka(P_AWAL / 1000, 0))}${mo('×')}${mo('(')}${mn(dua(akhir.V * 1000))}${mo('−')}${mn(dua(V1 * 1000))}${mo(')')}${mo('=')}${mn(angka(akhir.W, 0))}${mtext('J')}`,
                    baca: `sama dengan 100 kali ${dua(akhir.V * 1000)} dikurangi ${dua(V1 * 1000)}, yaitu ${angka(akhir.W, 0)} joule`,
                },
            ];
        }
        if (jenis === 1) {
            return [
                { mathml: `${mi('W')}${mo('=')}${mi('P')}${mo('Δ')}${mi('V')}`, baca: 'W sama dengan P dikali delta V' },
                { mathml: `${mo('=')}${mn(angka(P_AWAL / 1000, 0))}${mo('×')}${mn(0)}${mo('=')}${mn(0)}${mtext('J')}`, baca: 'sama dengan 100 kali nol, yaitu nol joule karena volume tidak berubah' },
            ];
        }
        if (jenis === 2) {
            return [
                { mathml: `${mi('W')}${mo('=')}${mi('n')}${mi('R')}${mi('T')}${mi('ln')}${mo('&#x2061;')}${mo('(')}${mfrac(msub(mi('V'), mn(2)), msub(mi('V'), mn(1)))}${mo(')')}`, baca: 'W sama dengan n R T kali logaritma natural V dua per V satu' },
                {
                    mathml: `${mo('=')}${mn(angka(n, 1))}${mo('×')}${mn(R)}${mo('×')}${mn(T_AWAL)}${mo('×')}${mi('ln')}${mn(angka(tujuanV, 1))}${mo('=')}${mn(angka(akhir.W, 0))}${mtext('J')}`,
                    baca: `sama dengan ${angka(n, 1)} kali 8,314 kali 300 kali logaritma natural ${angka(tujuanV, 1)}, yaitu ${angka(akhir.W, 0)} joule`,
                },
            ];
        }
        return [
            { mathml: `${mi('W')}${mo('=')}${mo('−')}${mi('Δ')}${mi('U')}${mo('=')}${mn('3/2')}${mi('n')}${mi('R')}${mo('(')}${msub(mi('T'), mn(1))}${mo('−')}${msub(mi('T'), mn(2))}${mo(')')}`, baca: 'W sama dengan minus delta U, yaitu tiga perdua n R dikali T satu dikurangi T dua' },
            {
                mathml: `${mo('=')}${mn(1.5)}${mo('×')}${mn(angka(n, 1))}${mo('×')}${mn(R)}${mo('×')}${mo('(')}${mn(T_AWAL)}${mo('−')}${mn(angka(akhir.T, 0))}${mo(')')}${mo('=')}${mn(angka(akhir.W, 0))}${mtext('J')}`,
                baca: `sama dengan 1,5 kali ${angka(n, 1)} kali 8,314 kali 300 dikurangi ${angka(akhir.T, 0)}, yaitu ${angka(akhir.W, 0)} joule`,
            },
        ];
    };

    const barisRumus: BarisRumus[] = [
        { mathml: `${mi('Q')}${mo('=')}${mi('Δ')}${mi('U')}${mo('+')}${mi('W')}`, baca: 'Q sama dengan delta U ditambah W' },
        {
            mathml: `${mo('=')}${mn(angka(akhir.dU, 0))}${mo('+')}${mn(angka(akhir.W, 0))}${mo('=')}${mn(angka(akhir.Q, 0))}${mtext('J')}`,
            baca: `sama dengan ${angka(akhir.dU, 0)} ditambah ${angka(akhir.W, 0)}, yaitu ${angka(akhir.Q, 0)} joule`,
        },
        ...barisUsaha(),
    ];
    const catatanRumus = 'ΔU = 3/2 nRΔT untuk gas monoatomik. W positif berarti gas melakukan usaha, W negatif berarti gas menerima usaha. R = 8,314 J/mol K.'
        + (jenis === 3 ? ' Adiabatik: PV^γ tetap dengan γ = 5/3.' : '');

    /* ----- Ringkasan untuk pembaca layar ----- */

    const deskripsi = `Gas ${angka(n, 1)} mol dalam silinder berpiston, proses ${NAMA_PROSES[jenis].toLowerCase()}. `
        + `Saat ini tekanan ${angka(kini.P / 1000, 1)} kilopascal, volume ${angka(kini.V * 1000, 1)} liter, suhu ${angka(kini.T, 0)} kelvin. `
        + `Keadaan akhir: tekanan ${angka(akhir.P / 1000, 1)} kilopascal, volume ${angka(akhir.V * 1000, 1)} liter, suhu ${angka(akhir.T, 0)} kelvin.`;
    const deskripsiGrafik = `Diagram tekanan terhadap volume untuk proses ${NAMA_PROSES[jenis].toLowerCase()}. Dari titik 1 di ${angka(V1 * 1000, 1)} liter dan 100 kilopascal `
        + `ke titik 2 di ${angka(akhir.V * 1000, 1)} liter dan ${angka(akhir.P / 1000, 1)} kilopascal. Daerah berarsir di bawah kurva adalah usaha ${angka(kini.W, 0)} joule sampai saat ini.`;

    const dariSuhu = jenis === 0 || jenis === 1;

    return (
        <SimShell
            panggung={<Panggung gambar={gambar} deskripsi={deskripsi} />}
            kendaliPutar={
                <PlayBar
                    loop={loop}
                    onMulai={mulai}
                    onUlang={ulang}
                    labelMulai={status === 'jalan' ? 'Lanjut' : status === 'selesai' ? 'Ulangi' : 'Jalankan proses'}
                />
            }
            bacaan={
                <BarisBacaan>
                    <Bacaan label="Tekanan (P)" nilai={angkaTetap(kini.P / 1000, 1)} satuan="kPa" />
                    <Bacaan label="Volume (V)" nilai={angkaTetap(kini.V * 1000, 1)} satuan="L" />
                    <Bacaan label="Suhu (T)" nilai={angkaTetap(kini.T, 1)} satuan="K" />
                    <Bacaan label="Usaha (W)" nilai={angkaTetap(kini.W, 0)} satuan="J" sorot="lime" />
                    <Bacaan label="Energi dalam (ΔU)" nilai={angkaTetap(kini.dU, 0)} satuan="J" />
                    <Bacaan label="Kalor (Q)" nilai={angkaTetap(kini.Q, 0)} satuan="J" />
                </BarisBacaan>
            }
            pengatur={
                <>
                    <Pilihan
                        label="Jenis proses"
                        nilai={jenis}
                        pilihan={[
                            { nilai: 0 as Proses, label: 'Isobarik' },
                            { nilai: 1 as Proses, label: 'Isokhorik' },
                            { nilai: 2 as Proses, label: 'Isotermal' },
                            { nilai: 3 as Proses, label: 'Adiabatik' },
                        ]}
                        onUbah={setJenis}
                    />
                    <Slider label="Jumlah gas" simbol="n" nilai={n} min={0.5} maks={2} langkah={0.1} satuan="mol" onUbah={setN} />
                    {dariSuhu ? (
                        <Slider
                            label="Suhu akhir" simbol="T₂" nilai={tujuanT} min={200} maks={600} langkah={10} satuan="K" onUbah={setTujuanT}
                            catatan="Keadaan awal selalu 300 K dan 100 kPa."
                        />
                    ) : (
                        <Slider
                            label="Volume akhir" simbol="V₂/V₁" nilai={tujuanV} min={0.4} maks={2.5} langkah={0.1} satuan="×" onUbah={setTujuanV}
                            catatan="Lebih dari 1: gas mengembang. Kurang dari 1: gas dimampatkan."
                        />
                    )}
                </>
            }
            rumus={<RumusHidup baris={barisRumus} catatan={catatanRumus} />}
            grafik={
                <Panel judul="Diagram P–V" ikon={<IconChartDots size={18} stroke={2.5} aria-hidden="true" />}>
                    <Panggung gambar={gambarPV} deskripsi={deskripsiGrafik} rasio={1.7} tinggiMin={210} />
                    <ul className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-xs font-semibold text-foreground">
                        <li>Titik 1: awal</li>
                        <li>Titik 2: tujuan</li>
                        <li>Garis putus tipis abu-abu: isoterm 300 K</li>
                    </ul>
                    <p className="text-xs text-muted mt-2">
                        Daerah berarsir di bawah lintasan adalah usaha gas. Lintasan yang berbeda menghasilkan luas yang berbeda.
                    </p>
                </Panel>
            }
            selidiki={
                <SelidikiHubungan
                    bebas={BEBAS}
                    terikat={TERIKAT}
                    tetap={['proses']}
                    percobaan={percobaan}
                    onHapus={() => setPercobaan([])}
                    ajakan="Jalankan satu proses sampai selesai, lalu ubah satu besaran saja (misalnya suhu tujuan atau volume tujuan) dan jalankan lagi. Jenis proses dijaga tetap supaya hanya satu hal yang berubah."
                />
            }
            tantangan={<Tantangan daftar={TANTANGAN} selesai={selesai} />}
        />
    );
}
