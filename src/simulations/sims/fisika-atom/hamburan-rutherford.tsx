/* ============================================================
   SIMULASI: Hamburan Partikel Alfa Rutherford (Bab 5-1)
   ============================================================
   Susunan file mengikuti gerak-parabola.tsx:
   1. Tetapan dan fungsi fisika murni (tanpa React).
   2. Komponen: state pengatur → hasil tembakan → animasi (useRef) → gambar → <SimShell>.

   Hubungan yang harus bisa ditemukan siswa:
   - parameter tumbukan b turun (makin dekat ke inti) → sudut hambur naik
   - energi alfa naik → sudut hambur turun
   - Z naik → sudut hambur naik
   - model Thomson: tidak pernah ada pantulan balik; model Rutherford: sebagian kecil terpantul balik
   ============================================================ */

import { IconChartBar, IconEraser, IconTarget } from '@tabler/icons-react';
import { useRef, useState } from 'react';
import {
    angka, angkaIlmiah, angkaTetap, buatSkala, bulat, Ctx, derajat, gambarSumbu, garis, gerakDikurangi,
    jepit, kotak, label, langkahBagus, lintasan as gambarLintasan, useSimLoop, warnaSim,
} from '../../engine';
import {
    Bacaan, BarisBacaan, BarisRumus, Besaran, mfrac, mi, mn, mo, msub, msup, mtext,
    Panel, Panggung, Percobaan, Pilihan, RumusHidup, SelidikiHubungan, SimShell,
    Slider, Tantangan, Tombol, useTantangan,
} from '../../ui';

/* ---------- 1. Fisika ---------- */

const K_COULOMB = 1.44; // MeV·fm, e²/(4πε₀)
const X_AWAL = 30000; // fm, tempat integrasi dimulai (jauh dari inti)
const R_ATOM = 1e5; // fm, jari-jari atom (sekitar 1 Å) untuk model Thomson
const B_MAKS = 200; // fm, batas parameter tumbukan acak
const LEBAR_PANDANG = 600; // fm
const TINGGI_PANDANG = 375; // fm
const BATAS_SIMPAN = 60; // jumlah lintasan yang digambar

export type Model = 'rutherford' | 'thomson';

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

/** Jarak terdekat pada tumbukan pusat (fm): d = 2·Z·1,44 / Eₖ, dengan Eₖ dalam MeV. */
export function jarakTumbukanPusat(z: number, energi: number): number {
    return (2 * z * K_COULOMB) / energi;
}

/** Sudut hambur Rutherford (derajat): θ = 2·arctan(d / 2b). Untuk b = 0, θ = 180°. */
export function sudutRutherford(b: number, d: number): number {
    if (b <= 0) return 180;
    return derajat(2 * Math.atan(d / (2 * b)));
}

/** Jarak terdekat ke inti (fm) untuk parameter tumbukan b. */
export function jarakTerdekat(b: number, d: number): number {
    return (d / 2) * (1 + Math.sqrt(1 + ((2 * b) / d) ** 2));
}

/**
 * Sudut hambur model Thomson (derajat), perkiraan impuls.
 * Di dalam bola bermuatan merata gaya tegak lurus ≈ 2Z·1,44·b / R³ selama lintasan sepanjang 2√(R²−b²),
 * sehingga θ ≈ d·b·√(R²−b²) / R³. Nilai terbesarnya d / 2R, jauh di bawah 0,05°.
 */
export function sudutThomson(b: number, d: number): number {
    const bb = Math.min(b, R_ATOM);
    return derajat((d * bb * Math.sqrt(R_ATOM * R_ATOM - bb * bb)) / (R_ATOM ** 3));
}

export interface TitikLintasan {
    x: number;
    y: number;
    /** Panjang lintasan dari titik pertama (fm), untuk animasi */
    s: number;
}

export interface HasilIntegrasi {
    titik: TitikLintasan[];
    theta: number;
    rMin: number;
}

/**
 * Integrasi numerik gaya Coulomb (satuan fm dan MeV).
 * Dengan laju awal 1 fm per satuan waktu, massa m = 2Eₖ dan percepatannya a = (d/2)/r² ke arah menjauhi inti.
 * Energi kekal: v² = 1 − d/r. Langkah waktu dt = 0,01·r (menyesuaikan jarak), metode Verlet kecepatan.
 * Titik yang disimpan hanya yang berada di sekitar jendela gambar.
 */
export function integrasiLintasan(b: number, d: number): HasilIntegrasi {
    const ETA = 0.01;
    let x = -X_AWAL;
    let y = b;
    const r0 = Math.hypot(x, y);
    let vx = Math.sqrt(Math.max(0, 1 - d / r0));
    let vy = 0;
    const percepatan = (px: number, py: number) => {
        const r2 = px * px + py * py;
        const r = Math.sqrt(r2);
        const k = d / 2 / (r2 * r);
        return { ax: k * px, ay: k * py };
    };
    let a = percepatan(x, y);
    let rMin = r0;
    const titik: TitikLintasan[] = [];
    let s = 0;
    let terakhir: { x: number; y: number } | null = null;
    let sudahDekat = false;
    for (let i = 0; i < 20000; i++) {
        const r = Math.hypot(x, y);
        rMin = Math.min(rMin, r);
        if (r < 3000) sudahDekat = true;
        if (sudahDekat && r > X_AWAL) break;
        if (Math.abs(x) <= 380 && Math.abs(y) <= 300) {
            if (!terakhir || Math.hypot(x - terakhir.x, y - terakhir.y) >= 1.5) {
                if (terakhir) s += Math.hypot(x - terakhir.x, y - terakhir.y);
                titik.push({ x, y, s });
                terakhir = { x, y };
            }
        }
        const dt = ETA * Math.max(r, 1);
        const xb = x + vx * dt + 0.5 * a.ax * dt * dt;
        const yb = y + vy * dt + 0.5 * a.ay * dt * dt;
        const ab = percepatan(xb, yb);
        vx += 0.5 * (a.ax + ab.ax) * dt;
        vy += 0.5 * (a.ay + ab.ay) * dt;
        x = xb;
        y = yb;
        a = ab;
    }
    return { titik, theta: Math.abs(derajat(Math.atan2(vy, vx))), rMin };
}

/** Lintasan model Thomson: hampir lurus, hanya melengkung sangat tipis di tengah atom. */
export function lintasanThomson(b: number, d: number): HasilIntegrasi {
    const theta = sudutThomson(b, d);
    const tan = Math.tan((theta * Math.PI) / 180);
    const titik: TitikLintasan[] = [];
    for (let x = -380; x <= 380; x += 4) {
        const y = b + tan * Math.max(0, x + 380) * 0.5;
        titik.push({ x, y, s: x + 380 });
    }
    return { titik, theta, rMin: b };
}

/** Nomor kotak histogram untuk sudut hambur: 0-10, 10-30, 30-60, 60-90, 90-180 derajat. */
export function kotakSudut(theta: number): number {
    if (theta < 10) return 0;
    if (theta < 30) return 1;
    if (theta < 60) return 2;
    if (theta < 90) return 3;
    return 4;
}

const NAMA_KOTAK = ['0-10°', '10-30°', '30-60°', '60-90°', '90-180°'];

/** Parameter tumbukan acak seragam terhadap luas: b = b_maks·√u. */
export function parameterAcak(u: number, bMaks: number): number {
    return bMaks * Math.sqrt(u);
}

/* ---------- 2. Komponen ---------- */

interface Tembakan {
    model: Model;
    b: number;
    energi: number;
    z: number;
    theta: number;
    rMin: number;
    titik: TitikLintasan[];
}

const BEBAS: Besaran[] = [
    { id: 'b', label: 'parameter tumbukan', simbol: 'b', satuan: 'fm', desimal: 0 },
    { id: 'energi', label: 'energi kinetik alfa', simbol: 'Eₖ', satuan: 'MeV', desimal: 1 },
    { id: 'z', label: 'nomor atom inti', simbol: 'Z', satuan: 'proton', desimal: 0 },
];

const TERIKAT: Besaran[] = [
    { id: 'theta', label: 'sudut hambur', simbol: 'θ', satuan: '°', desimal: 1 },
    { id: 'rmin', label: 'jarak terdekat ke inti', simbol: 'r min', satuan: 'fm', desimal: 1 },
];

const TANTANGAN = [
    { id: 'balik', teks: 'Pada model Rutherford, buat satu partikel alfa terpantul balik, yaitu sudut hambur lebih dari 90°. Atur b sampai sangat dekat ke inti.' },
    { id: 'tepat90', teks: 'Pada model Rutherford, tembakkan satu alfa sampai sudut hamburnya tepat 90°. Boleh meleset paling banyak 3°. Pakai rumus tan(θ/2) = d/(2b) untuk menebak b.' },
    { id: 'bandingkan', teks: 'Tembakkan 50 acak pada model Thomson, lalu 50 acak pada model Rutherford. Bandingkan kedua histogramnya.' },
];

const PILIHAN_Z = [
    { nilai: 13, label: 'Aluminium (13)' },
    { nilai: 47, label: 'Perak (47)' },
    { nilai: 79, label: 'Emas (79)' },
];

const teksSudut = (theta: number) => (theta < 0.1 ? angkaIlmiah(theta, 2) : angka(theta, 1));

export default function HamburanRutherford() {
    // Pengatur
    const [energi, setEnergi] = useState(5);
    const [b, setB] = useState(50);
    const [z, setZ] = useState(79);
    const [model, setModel] = useState<Model>('rutherford');

    const d = jarakTumbukanPusat(z, energi);

    // Hasil tembakan
    const [simpan, setSimpan] = useState<Tembakan[]>([]);
    const [catat, setCatat] = useState<{ model: Model; theta: number }[]>([]);
    const [terakhir, setTerakhir] = useState<Tembakan | null>(null);
    const [percobaan, setPercobaan] = useState<Percobaan[]>([]);
    const [selesai, tandai] = useTantangan();
    const rngRef = useRef(mulberry32(20240611));
    const batchRef = useRef(new Set<Model>());

    // Animasi satu tembakan
    const sedangRef = useRef<Tembakan | null>(null);
    const sRef = useRef(0);
    const [sedang, setSedang] = useState(false);

    const loop = useSimLoop((dt) => {
        const t = sedangRef.current;
        if (!t) return;
        sRef.current += 520 * dt;
        const total = t.titik.length ? t.titik[t.titik.length - 1].s : 0;
        if (sRef.current >= total) {
            sedangRef.current = null;
            setSedang(false);
            loop.jeda();
            simpanTembakan([t], true);
        }
    });

    const buatTembakan = (bTembak: number): Tembakan => {
        const hasil = model === 'rutherford' ? integrasiLintasan(bTembak, d) : lintasanThomson(bTembak, d);
        return { model, b: bTembak, energi, z, theta: hasil.theta, rMin: hasil.rMin, titik: hasil.titik };
    };

    function simpanTembakan(daftar: Tembakan[], satu: boolean) {
        setSimpan((p) => [...p, ...daftar].slice(-BATAS_SIMPAN));
        setCatat((p) => [...p, ...daftar.map((t) => ({ model: t.model, theta: t.theta }))].slice(-5000));
        setTerakhir(daftar[daftar.length - 1]);
        if (satu) {
            const t = daftar[0];
            if (t.model === 'rutherford') {
                setPercobaan((p) => [...p, {
                    nilai: { b: t.b, energi: t.energi, z: t.z, theta: t.theta, rmin: t.rMin },
                }]);
            }
        }
        for (const t of daftar) {
            if (t.model === 'rutherford' && t.theta > 90) tandai('balik');
            if (t.model === 'rutherford' && Math.abs(t.theta - 90) <= 3) tandai('tepat90');
        }
        if (!satu) {
            batchRef.current.add(daftar[0].model);
            if (batchRef.current.has('rutherford') && batchRef.current.has('thomson')) tandai('bandingkan');
        }
    }

    const tembakSatu = () => {
        if (sedangRef.current) return;
        const t = buatTembakan(b);
        if (gerakDikurangi()) {
            simpanTembakan([t], true);
            return;
        }
        sedangRef.current = t;
        sRef.current = 0;
        setSedang(true);
        loop.mainkan();
    };

    const tembakLimaPuluh = () => {
        if (sedangRef.current) return;
        const daftar: Tembakan[] = [];
        for (let i = 0; i < 50; i++) daftar.push(buatTembakan(parameterAcak(rngRef.current(), B_MAKS)));
        simpanTembakan(daftar, false);
    };

    const hapusLintasan = () => {
        sedangRef.current = null;
        setSedang(false);
        loop.jeda();
        setSimpan([]);
        setCatat([]);
        setTerakhir(null);
    };

    // Hitungan untuk model yang sedang dipakai
    const dalamModel = catat.filter((k) => k.model === model);
    const hist = [0, 0, 0, 0, 0];
    for (const k of dalamModel) hist[kotakSudut(k.theta)]++;
    const jumlah = dalamModel.length;
    const balik = dalamModel.filter((k) => k.theta > 90).length;

    /* ----- Gambar panggung ----- */

    const gambar = (ctx: Ctx, w: number, h: number) => {
        const c = warnaSim();
        const pad = { kiri: 40, kanan: 10, atas: 10, bawah: 28 };
        const lebarPlot = w - pad.kiri - pad.kanan;
        const tinggiPlot = h - pad.atas - pad.bawah;
        const k = Math.min(lebarPlot / LEBAR_PANDANG, tinggiPlot / TINGGI_PANDANG);
        const sx = lebarPlot / (2 * k);
        const sy = tinggiPlot / (2 * k);
        const s = buatSkala({ w, h, pad, xMin: -sx, xMaks: sx, yMin: -sy, yMaks: sy });
        const thomson = model === 'thomson';

        if (thomson) {
            ctx.fillStyle = c.krem;
            ctx.fillRect(s.kiri, s.atas, s.kanan - s.kiri, s.bawah - s.atas);
        }
        gambarSumbu(ctx, s, { labelX: 'x (fm)', labelY: 'y (fm)' });

        if (thomson) {
            // Elektron kecil tersebar di dalam muatan positif yang merata
            const acak = mulberry32(77);
            for (let i = 0; i < 28; i++) {
                const ex = s.x(-sx + acak() * 2 * sx);
                const ey = s.y(-sy + acak() * 2 * sy);
                bulat(ctx, ex, ey, 3, { isi: c.biru, tebal: 1.5 });
            }
        }

        // Garis tembak dan parameter tumbukan b
        const yb = s.y(b);
        garis(ctx, s.kiri, yb, s.x(0), yb, { warna: c.gelap, tebal: 1.5, putus: [6, 5] });
        if (b > 0) garis(ctx, s.x(0), s.y(0), s.x(0), yb, { warna: c.gelap, tebal: 1.5, putus: [3, 3] });
        label(ctx, `b = ${angka(b, 0)} fm`, s.kiri + 6, jepit(yb - 12, s.atas + 10, s.bawah - 10), { ukuran: 11, latar: c.lime });

        // Lintasan lama redup, lintasan terbaru tebal
        const animasi = sedangRef.current;
        const tetap = simpan;
        const terbaru = animasi ? null : tetap[tetap.length - 1];
        for (const t of tetap) {
            if (t === terbaru) continue;
            gambarLintasan(ctx, t.titik.map((p) => ({ x: s.x(p.x), y: s.y(p.y) })), { warna: c.redup, tebal: 1 });
        }
        const gambarTerbaru = (t: Tembakan, sampai: number) => {
            const pts: { x: number; y: number }[] = [];
            for (const p of t.titik) {
                if (p.s > sampai) break;
                pts.push({ x: s.x(p.x), y: s.y(p.y) });
            }
            gambarLintasan(ctx, pts, { warna: c.gelap, tebal: 2.5 });
            return pts[pts.length - 1];
        };
        if (animasi) {
            const ujung = gambarTerbaru(animasi, sRef.current);
            if (ujung) bulat(ctx, ujung.x, ujung.y, 5, { isi: c.lime });
        } else if (terbaru) {
            const ujung = gambarTerbaru(terbaru, Infinity);
            if (ujung) {
                const teks = `θ = ${teksSudut(terbaru.theta)}°`;
                const lw = teks.length * 7.5 + 12;
                const lh = 20;
                const lxMin = s.kiri + 8 + lw / 2;
                const lxMaks = s.kanan - 8 - lw / 2;
                const lyMin = s.atas + 8 + lh / 2;
                const lyMaks = s.bawah - 8 - lh / 2;
                let lx = jepit(ujung.x - 30, lxMin, lxMaks);
                let ly = jepit(ujung.y + (ujung.y < s.y(0) ? 16 : -16), lyMin, lyMaks);
                // Jangan menimpa label b: kotaknya kira-kira dari kiri panggung sampai 100 px, setinggi 22 px di sekitar garis tembak
                const bKanan = s.kiri + 100;
                const bAtas = jepit(yb - 12, s.atas + 10, s.bawah - 10) - 12;
                const bBawah = bAtas + 24;
                if (lx - lw / 2 < bKanan + 4 && lx + lw / 2 > s.kiri && ly + lh / 2 > bAtas && ly - lh / 2 < bBawah) {
                    lx = jepit(bKanan + 8 + lw / 2, lxMin, lxMaks);
                    if (lx - lw / 2 < bKanan + 4) ly = jepit(bBawah + 6 + lh / 2, lyMin, lyMaks);
                }
                label(ctx, teks, lx, ly, { rata: 'center', ukuran: 12, latar: c.lime });
            }
        }

        // Inti
        if (thomson) {
            label(ctx, 'Tidak ada inti: muatan positif merata', s.kiri + 8, s.bawah - 9, { ukuran: 10, tebal: 500, warna: c.redup });
        } else {
            bulat(ctx, s.x(0), s.y(0), 8, { isi: c.oranye });
            label(ctx, 'Inti digambar lebih besar dari aslinya', s.kiri + 8, s.bawah - 9, { ukuran: 10, tebal: 500, warna: c.redup });
        }
    };

    /* ----- Histogram sudut hambur ----- */

    const gambarHistogram = (ctx: Ctx, w: number, h: number) => {
        const c = warnaSim();
        const kiri = 38;
        const kanan = w - 12;
        const atas = 28;
        const bawah = h - 36;
        const maks = Math.max(5, ...hist);
        const langkah = langkahBagus(maks, 4);
        const puncak = Math.ceil((maks * 1.12) / langkah) * langkah;
        const yy = (v: number) => bawah - (v / puncak) * (bawah - atas);

        ctx.save();
        ctx.lineWidth = 1;
        ctx.strokeStyle = c.kisi;
        ctx.fillStyle = c.redup;
        ctx.font = '500 11px "Space Grotesk", Arial, sans-serif';
        ctx.textAlign = 'right';
        ctx.textBaseline = 'middle';
        for (let v = 0; v <= puncak + 1e-9; v += langkah) {
            const py = Math.round(yy(v)) + 0.5;
            ctx.beginPath();
            ctx.moveTo(kiri, py);
            ctx.lineTo(kanan, py);
            ctx.stroke();
            ctx.fillText(angka(v, 0), kiri - 6, py);
        }
        ctx.restore();

        const lebarSlot = (kanan - kiri) / 5;
        hist.forEach((n, i) => {
            const x = kiri + i * lebarSlot + lebarSlot * 0.14;
            const lebar = lebarSlot * 0.72;
            if (n > 0) kotak(ctx, x, yy(n), lebar, bawah - yy(n), { isi: i === 4 ? c.oranye : c.lime });
            label(ctx, String(n), x + lebar / 2, yy(n) - 3, { rata: 'center', dasar: 'bottom', ukuran: 11 });
            label(ctx, NAMA_KOTAK[i], x + lebar / 2, bawah + 14, { rata: 'center', ukuran: 10, tebal: 600 });
        });
        garis(ctx, kiri, atas, kiri, bawah, { tebal: 2 });
        garis(ctx, kiri, bawah, kanan, bawah, { tebal: 2 });
        label(ctx, 'jumlah partikel', kiri + 6, 12, { ukuran: 12 });
        label(ctx, 'sudut hambur', kanan, h - 6, { rata: 'right', ukuran: 11, tebal: 600, warna: c.redup });
    };

    /* ----- Rumus dengan angka saat ini ----- */

    const tanTeta = `${mi('tan')}${mo('&#x2061;')}${mo('(')}${mfrac(mi('θ'), mn(2))}${mo(')')}`;
    const teta = sudutRutherford(b, d);
    const barisRumus: BarisRumus[] = model === 'rutherford'
        ? [
            {
                mathml: `${tanTeta}${mo('=')}${mfrac(mi('d'), `${mn(2)}${mi('b')}`)}`,
                baca: 'tangen setengah teta sama dengan d per dua b',
            },
            {
                mathml: `${mi('d')}${mo('=')}${mfrac(`${mn(2)}${mi('Z')}${mo('×')}${mn('1,44')}`, msub(mi('E'), mi('k')))}`,
                baca: 'd sama dengan dua Z kali satu koma empat empat per energi kinetik',
            },
            {
                mathml: `${mo('=')}${mfrac(`${mn(2)}${mo('×')}${mn(z)}${mo('×')}${mn('1,44')}`, mn(angka(energi, 1)))}${mo('=')}${mn(angka(d, 1))}${mtext('fm')}`,
                baca: `sama dengan ${angka(d, 1)} femtometer`,
            },
            b > 0
                ? {
                    mathml: `${tanTeta}${mo('=')}${mfrac(mn(angka(d, 1)), `${mn(2)}${mo('×')}${mn(b)}`)}${mo('=')}${mn(angka(d / (2 * b), 3))}`,
                    baca: `tangen setengah teta sama dengan ${angka(d / (2 * b), 3)}`,
                }
                : {
                    mathml: `${mi('b')}${mo('=')}${mn(0)}${mo('⇒')}${mi('θ')}${mo('=')}${mn(180)}${mo('°')}`,
                    baca: 'b sama dengan nol, jadi teta 180 derajat',
                },
            {
                mathml: `${mi('θ')}${mo('=')}${mn(angka(teta, 1))}${mo('°')}`,
                baca: `teta sama dengan ${angka(teta, 1)} derajat`,
            },
        ]
        : [
            {
                mathml: `${mi('θ')}${mo('≈')}${mfrac(`${mi('d')}${mi('b')}`, msup(mi('R'), mn(2)))}`,
                baca: 'teta kira-kira d kali b per R kuadrat',
            },
            {
                mathml: `${mo('≈')}${mn(angkaIlmiah(sudutThomson(b, d), 2))}${mo('°')}`,
                baca: `kira-kira ${angkaIlmiah(sudutThomson(b, d), 2)} derajat, hampir nol`,
            },
        ];
    const catatanRumus = model === 'rutherford'
        ? 'Dipakai e²/4πε₀ = 1,44 MeV·fm dan muatan alfa 2e. d adalah jarak terdekat pada tumbukan pusat (b = 0).'
        : 'Model Thomson hanya perkiraan: atom jari-jari 1 Å dengan muatan positif merata. Belokannya sangat kecil dan tidak pernah memantul balik.';

    /* ----- Pembaca layar ----- */

    const deskripsi = sedang
        ? `Partikel alfa sedang bergerak dari kiri dengan parameter tumbukan ${b} femtometer, model ${model === 'rutherford' ? 'Rutherford' : 'Thomson'}.`
        : terakhir
            ? `Tembakan terakhir pada model ${terakhir.model === 'rutherford' ? 'Rutherford' : 'Thomson'}: parameter tumbukan ${angka(terakhir.b, 0)} femtometer, sudut hambur ${teksSudut(terakhir.theta)} derajat. Ada ${simpan.length} lintasan di panggung.`
            : `Panggung siap. Garis tembak berjarak ${b} femtometer dari ${model === 'rutherford' ? `inti nomor atom ${z}` : 'pusat atom Thomson'}. Belum ada partikel yang ditembakkan.`;

    const deskripsiHistogram = `Histogram sudut hambur ${jumlah} partikel pada model ${model === 'rutherford' ? 'Rutherford' : 'Thomson'}: ${NAMA_KOTAK.map((n, i) => `${n} ada ${hist[i]}`).join(', ')}.`;

    return (
        <SimShell
            panggung={<Panggung gambar={gambar} deskripsi={deskripsi} />}
            kendaliPutar={
                <div className="flex flex-wrap items-center gap-2">
                    <Tombol jenis="utama" onClick={tembakSatu} nonaktif={sedang}>
                        <IconTarget size={16} stroke={2.5} aria-hidden="true" />
                        Tembak satu
                    </Tombol>
                    <Tombol jenis="kedua" onClick={tembakLimaPuluh} nonaktif={sedang}>
                        Tembak 50 acak
                    </Tombol>
                    <Tombol onClick={hapusLintasan}>
                        <IconEraser size={16} stroke={2.5} aria-hidden="true" />
                        Hapus lintasan
                    </Tombol>
                </div>
            }
            bacaan={
                <BarisBacaan>
                    <Bacaan label="Sudut hambur terakhir (θ)" nilai={terakhir ? (terakhir.theta < 0.1 ? angkaIlmiah(terakhir.theta, 2) : angkaTetap(terakhir.theta, 1)) : '–'} satuan="°" sorot={terakhir ? 'lime' : undefined} />
                    <Bacaan label={model === 'rutherford' ? 'Jarak terdekat ke inti' : 'Jarak ke pusat atom'} nilai={terakhir ? angkaTetap(terakhir.rMin, 1) : '–'} satuan="fm" />
                    <Bacaan label="Partikel ditembakkan" nilai={String(jumlah)} />
                    <Bacaan label="Terpantul balik (>90°)" nilai={String(balik)} sorot={balik > 0 ? 'oranye' : undefined} />
                    <Bacaan label="Jarak tumbukan pusat (d)" nilai={model === 'rutherford' ? angkaTetap(d, 1) : '–'} satuan="fm" />
                    <Bacaan label="Model atom" nilai={model === 'rutherford' ? 'Rutherford' : 'Thomson'} />
                </BarisBacaan>
            }
            pengatur={
                <>
                    <Slider label="Energi kinetik alfa" simbol="Eₖ" nilai={energi} min={2} maks={10} langkah={0.5} satuan="MeV" onUbah={setEnergi} />
                    <Slider label="Parameter tumbukan" simbol="b" nilai={b} min={0} maks={200} langkah={5} satuan="fm" onUbah={setB} catatan="Jarak garis tembak dari inti. b = 0 berarti tepat mengarah ke inti." />
                    <Pilihan label="Inti sasaran (nomor atom Z)" nilai={z} pilihan={PILIHAN_Z} onUbah={setZ} />
                    <Pilihan
                        label="Model atom"
                        nilai={model}
                        pilihan={[{ nilai: 'rutherford', label: 'Rutherford' }, { nilai: 'thomson', label: 'Thomson' }]}
                        onUbah={setModel}
                    />
                    <p className="text-xs text-muted">
                        {model === 'rutherford'
                            ? 'Rutherford: muatan positif terkumpul di inti yang sangat kecil.'
                            : 'Thomson: muatan positif tersebar merata di seluruh atom. Sudut belokannya dihitung dengan perkiraan sederhana (model pendekatan).'}
                    </p>
                </>
            }
            rumus={<RumusHidup baris={barisRumus} catatan={catatanRumus} />}
            grafik={
                <Panel judul="Histogram sudut hambur" ikon={<IconChartBar size={18} stroke={2.5} aria-hidden="true" />}>
                    <Panggung gambar={gambarHistogram} deskripsi={deskripsiHistogram} rasio={1.9} tinggiMin={190} />
                    <p className="text-xs text-muted mt-2">
                        Hanya menghitung model yang sedang dipilih. Kotak oranye berisi partikel yang terpantul balik.
                    </p>
                </Panel>
            }
            selidiki={
                <SelidikiHubungan
                    bebas={BEBAS}
                    terikat={TERIKAT}
                    percobaan={percobaan}
                    onHapus={() => setPercobaan([])}
                    ajakan="Pakai model Rutherford. Tembak satu kali, lalu ubah satu besaran saja (misalnya b) dan tembak lagi. Tembak 50 acak tidak dicatat di sini."
                />
            }
            tantangan={<Tantangan daftar={TANTANGAN} selesai={selesai} />}
        />
    );
}

