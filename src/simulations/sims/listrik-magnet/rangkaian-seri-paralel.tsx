/* ============================================================
   SIMULASI: Rangkaian Seri dan Paralel (Bab 2-2)
   ============================================================
   Susunan file mengikuti gerak-parabola.tsx:
   1. Tetapan dan fungsi fisika murni (tanpa React).
   2. Komponen: state pengatur → hasil hitung → keadaan gerak (useRef) → loop
      → fungsi gambar panggung → <SimShell>.

   Hubungan yang harus bisa ditemukan siswa:
   - ε naik → arus naik sebanding (R tetap)
   - hambatan naik → arus turun
   - menambah hambatan seri menaikkan hambatan total
   - paralel: hambatan total lebih kecil daripada hambatan terkecil
   - seri: arus sama di semua lampu. Paralel: tegangan sama di semua cabang
   - melepas satu cabang paralel menurunkan arus total, tetapi lampu lain tetap menyala
   - hambatan dalam baterai membuat tegangan jepit lebih kecil daripada ε
   ============================================================ */

import { IconChartDots, IconClipboardPlus } from '@tabler/icons-react';
import { useEffect, useRef, useState } from 'react';
import {
    angka, angkaTetap, bulat, garis, gerakDikurangi, jepit, kotak, label, lintasan, OpsiGrafik,
    useSimLoop, warnaSim,
} from '../../engine';
import {
    Bacaan, BarisBacaan, BarisRumus, Besaran, GrafikHidup, mfrac, mi, mn, mo, msub, mtext, Panel,
    Panggung, Percobaan, Pilihan, PlayBar, RumusHidup, Sakelar, SelidikiHubungan, SimShell, Slider,
    Tantangan, Tombol, useTantangan,
} from '../../ui';

/* ---------- 1. Fisika ---------- */

export type Susunan = 'seri' | 'paralel' | 'campuran';

export interface Lampu {
    arus: number; // A
    tegangan: number; // V
    daya: number; // W
    menyala: boolean;
}

export interface Hasil {
    rTotal: number; // Ω, tak hingga kalau rangkaian terputus
    arus: number; // A, arus yang keluar dari baterai
    jepit: number; // V, tegangan antara kutub baterai
    daya: number; // W, jumlah daya semua lampu
    lampu: [Lampu, Lampu, Lampu];
    terbuka: boolean;
}

const MATI: Lampu = { arus: 0, tegangan: 0, daya: 0, menyala: false };

function lampu(arus: number, r: number): Lampu {
    return { arus, tegangan: arus * r, daya: arus * arus * r, menyala: true };
}

/**
 * Menghitung seluruh rangkaian. `lepas3` memutus cabang lampu 3:
 * pada susunan seri seluruh rangkaian padam, pada paralel dan campuran hanya cabang itu.
 */
export function hitungRangkaian(
    susunan: Susunan, ggl: number, r1: number, r2: number, r3: number, rDalam: number, lepas3: boolean,
): Hasil {
    const selesaikan = (rTotal: number, lampuHasil: [Lampu, Lampu, Lampu]): Hasil => {
        const arus = ggl / (rTotal + rDalam);
        return { rTotal, arus, jepit: ggl - arus * rDalam, daya: 0, lampu: lampuHasil, terbuka: false };
    };

    if (susunan === 'seri') {
        if (lepas3) {
            return { rTotal: Infinity, arus: 0, jepit: ggl, daya: 0, lampu: [MATI, MATI, MATI], terbuka: true };
        }
        const rt = r1 + r2 + r3;
        const i = ggl / (rt + rDalam);
        const h = selesaikan(rt, [lampu(i, r1), lampu(i, r2), lampu(i, r3)]);
        h.daya = h.lampu.reduce((a, l) => a + l.daya, 0);
        return h;
    }

    if (susunan === 'paralel') {
        const rt = lepas3 ? 1 / (1 / r1 + 1 / r2) : 1 / (1 / r1 + 1 / r2 + 1 / r3);
        const i = ggl / (rt + rDalam);
        const v = i * rt;
        const h = selesaikan(rt, [lampu(v / r1, r1), lampu(v / r2, r2), lepas3 ? MATI : lampu(v / r3, r3)]);
        h.daya = h.lampu.reduce((a, l) => a + l.daya, 0);
        return h;
    }

    // Campuran: R₁ seri dengan (R₂ paralel R₃)
    const rp = lepas3 ? r2 : (r2 * r3) / (r2 + r3);
    const rt = r1 + rp;
    const i = ggl / (rt + rDalam);
    const v = i * rp;
    const h = selesaikan(rt, [lampu(i, r1), lampu(v / r2, r2), lepas3 ? MATI : lampu(v / r3, r3)]);
    h.daya = h.lampu.reduce((a, l) => a + l.daya, 0);
    return h;
}

/** Arus tiap potongan kawat, urutannya sama dengan `tataLetak` di bawah. */
export function arusSegmen(susunan: Susunan, h: Hasil): number[] {
    const [a, b, c] = h.lampu.map((l) => l.arus);
    if (susunan === 'seri') return [h.arus];
    if (susunan === 'paralel') return [h.arus, h.arus - a, c, a, b, c, c, b + c, h.arus];
    return [h.arus, c, b, c, c, h.arus];
}

/** Terang lampu 0 sampai 1 menurut daya (jenuh di sekitar 20 W). */
export function terang(daya: number): number {
    return jepit(Math.sqrt(daya / 20), 0, 1);
}

/* ---------- 2. Komponen ---------- */

const BEBAS: Besaran[] = [
    { id: 'ggl', label: 'ggl baterai', simbol: 'ε', satuan: 'V', desimal: 1 },
    { id: 'r1', label: 'hambatan lampu 1', simbol: 'R₁', satuan: 'Ω', desimal: 0 },
    { id: 'r2', label: 'hambatan lampu 2', simbol: 'R₂', satuan: 'Ω', desimal: 0 },
    { id: 'r3', label: 'hambatan lampu 3', simbol: 'R₃', satuan: 'Ω', desimal: 0 },
    { id: 'lepas3', label: 'lampu 3 dilepas (0 = terpasang, 1 = dilepas)', simbol: 'lepas', satuan: '', desimal: 0 },
];

const TERIKAT: Besaran[] = [
    { id: 'arus', label: 'arus total', simbol: 'I', satuan: 'A', desimal: 2 },
    { id: 'rTotal', label: 'hambatan total', simbol: 'R total', satuan: 'Ω', desimal: 2 },
    { id: 'daya1', label: 'daya lampu 1', simbol: 'P₁', satuan: 'W', desimal: 2 },
    { id: 'tegangan1', label: 'tegangan lampu 1', simbol: 'V₁', satuan: 'V', desimal: 2 },
    { id: 'arus2', label: 'arus lampu 2', simbol: 'I₂', satuan: 'A', desimal: 2 },
];

const TANTANGAN = [
    { id: 'seri3A', teks: 'Pilih susunan seri dan atur ε serta hambatan lampu sampai arus total tepat 3 A. Boleh meleset paling banyak 5%.' },
    { id: 'lepasCabang', teks: 'Pilih susunan paralel. Catat satu pengukuran dengan lampu 3 terpasang dan satu dengan lampu 3 dilepas (nilai lain sama). Lihat arus totalnya turun.' },
    { id: 'tegangSama', teks: 'Pilih susunan campuran dan atur hambatan sampai tegangan lampu 1 sama dengan tegangan kelompok paralel (selisih paling banyak 3%).' },
];

const SUSUNAN_KODE: Record<Susunan, number> = { seri: 0, paralel: 1, campuran: 2 };
const PX_PER_AMPERE = 40; // laju titik muatan: piksel per sekon untuk tiap ampere
const LAJU_MAKS = 300; // batas atas supaya titik tidak berkedip pada arus besar
const JARAK_TITIK = 16; // jarak antartitik muatan di kawat (piksel), tetap
const R_LAMPU = 15;

type Titik = { x: number; y: number };

interface Tata {
    segmen: Titik[][];
    lampu: { x: number; y: number }[];
    baterai: Titik;
}

/** Letak kawat, lampu, dan baterai di panggung. Urutan segmen harus sama dengan `arusSegmen`. */
function tataLetak(susunan: Susunan, w: number, h: number): Tata {
    const xl = 32;
    const xr = w - 30;
    const atas = 44;
    const bawah = h - 34;
    const tengah = (atas + bawah) / 2;
    const bat: Titik = { x: xl, y: tengah };
    const kutubAtas = { x: xl, y: tengah - 24 };
    const kutubBawah = { x: xl, y: tengah + 24 };

    if (susunan === 'seri') {
        const xa = xl + (xr - xl) * 0.2;
        const xb = xl + (xr - xl) * 0.5;
        const xc = xl + (xr - xl) * 0.8;
        return {
            segmen: [[kutubAtas, { x: xl, y: atas }, { x: xr, y: atas }, { x: xr, y: bawah }, { x: xl, y: bawah }, kutubBawah]],
            lampu: [{ x: xa, y: atas }, { x: xb, y: atas }, { x: xc, y: atas }],
            baterai: bat,
        };
    }
    if (susunan === 'paralel') {
        const x1 = xl + 100;
        const x3 = xr;
        const x2 = (x1 + x3) / 2;
        return {
            segmen: [
                [kutubAtas, { x: xl, y: atas }, { x: x1, y: atas }],
                [{ x: x1, y: atas }, { x: x2, y: atas }],
                [{ x: x2, y: atas }, { x: x3, y: atas }],
                [{ x: x1, y: atas }, { x: x1, y: bawah }],
                [{ x: x2, y: atas }, { x: x2, y: bawah }],
                [{ x: x3, y: atas }, { x: x3, y: bawah }],
                [{ x: x3, y: bawah }, { x: x2, y: bawah }],
                [{ x: x2, y: bawah }, { x: x1, y: bawah }],
                [{ x: x1, y: bawah }, { x: xl, y: bawah }, kutubBawah],
            ],
            lampu: [{ x: x1, y: tengah }, { x: x2, y: tengah }, { x: x3, y: tengah }],
            baterai: bat,
        };
    }
    const x3 = xr;
    const x2 = xl + (x3 - xl) * 0.55;
    return {
        segmen: [
            [kutubAtas, { x: xl, y: atas }, { x: x2, y: atas }],
            [{ x: x2, y: atas }, { x: x3, y: atas }],
            [{ x: x2, y: atas }, { x: x2, y: bawah }],
            [{ x: x3, y: atas }, { x: x3, y: bawah }],
            [{ x: x3, y: bawah }, { x: x2, y: bawah }],
            [{ x: x2, y: bawah }, { x: xl, y: bawah }, kutubBawah],
        ],
        lampu: [{ x: (xl + x2) / 2, y: atas }, { x: x2, y: tengah }, { x: x3, y: tengah }],
        baterai: bat,
    };
}

function panjangLintasan(pts: Titik[]): number {
    let p = 0;
    for (let i = 1; i < pts.length; i++) p += Math.hypot(pts[i].x - pts[i - 1].x, pts[i].y - pts[i - 1].y);
    return p;
}

function titikPada(pts: Titik[], jarak: number): Titik {
    let sisa = jarak;
    for (let i = 1; i < pts.length; i++) {
        const d = Math.hypot(pts[i].x - pts[i - 1].x, pts[i].y - pts[i - 1].y);
        if (sisa <= d) {
            const f = d > 0 ? sisa / d : 0;
            return { x: pts[i - 1].x + f * (pts[i].x - pts[i - 1].x), y: pts[i - 1].y + f * (pts[i].y - pts[i - 1].y) };
        }
        sisa -= d;
    }
    return pts[pts.length - 1];
}

/** Campur dua warna heksadesimal #RRGGBB: f = 0 memberi a, f = 1 memberi b. */
function campur(a: string, b: string, f: number): string {
    const ambil = (s: string) => [1, 3, 5].map((i) => parseInt(s.slice(i, i + 2), 16));
    const [ar, ag, ab] = ambil(a);
    const [br, bg, bb] = ambil(b);
    const m = (x: number, y: number) => Math.round(x + (y - x) * f).toString(16).padStart(2, '0');
    return `#${m(ar, br)}${m(ag, bg)}${m(ab, bb)}`;
}

export default function RangkaianSeriParalel() {
    const [susunan, setSusunan] = useState<Susunan>('seri');
    const [ggl, setGgl] = useState(12);
    const [r1, setR1] = useState(4);
    const [r2, setR2] = useState(6);
    const [r3, setR3] = useState(3);
    const [rDalam, setRDalam] = useState(0);
    const [lepas3, setLepas3] = useState(false);
    const [percobaan, setPercobaan] = useState<Percobaan[]>([]);
    const [selesai, tandai] = useTantangan();

    const hasil = hitungRangkaian(susunan, ggl, r1, r2, r3, rDalam, lepas3);
    const hasilRef = useRef(hasil);
    hasilRef.current = hasil;
    const susunanRef = useRef(susunan);
    susunanRef.current = susunan;
    const nilaiR = [r1, r2, r3];
    const nilaiRRef = useRef(nilaiR);
    nilaiRRef.current = nilaiR;
    const lepasRef = useRef(lepas3);
    lepasRef.current = lepas3;
    const gglRef = useRef(ggl);
    gglRef.current = ggl;
    const rDalamRef = useRef(rDalam);
    rDalamRef.current = rDalam;

    // Titik muatan: jarak tempuh tiap potongan kawat (piksel), dimajukan di loop
    const fasaRef = useRef<number[]>(new Array(12).fill(0));

    const loop = useSimLoop((dt) => {
        const arus = arusSegmen(susunanRef.current, hasilRef.current);
        arus.forEach((a, i) => {
            fasaRef.current[i] += Math.min(LAJU_MAKS, Math.max(0, a) * PX_PER_AMPERE) * dt;
        });
    });

    // Aliran langsung berjalan, kecuali pengguna meminta animasi dikurangi
    useEffect(() => {
        if (!gerakDikurangi()) loop.mainkan();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const ulang = () => {
        fasaRef.current = new Array(12).fill(0);
        loop.segarkan();
    };

    /* ----- Tantangan yang terdeteksi dari keadaan ----- */

    useEffect(() => {
        if (susunan === 'seri' && !lepas3 && Math.abs(hasil.arus - 3) <= 0.15) tandai('seri3A');
        if (susunan === 'campuran' && !lepas3 && hasil.arus > 0.01) {
            const v1 = hasil.lampu[0].tegangan;
            if (Math.abs(v1 - hasil.lampu[1].tegangan) <= 0.03 * v1) tandai('tegangSama');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [susunan, ggl, r1, r2, r3, rDalam, lepas3]);

    const catat = () => {
        if (hasil.terbuka) return;
        const baru: Percobaan = {
            nilai: {
                ggl, r1, r2, r3, lepas3: lepas3 ? 1 : 0,
                susunan: SUSUNAN_KODE[susunan], rDalam,
                arus: hasil.arus, rTotal: hasil.rTotal, daya1: hasil.lampu[0].daya,
                tegangan1: hasil.lampu[0].tegangan, arus2: hasil.lampu[1].arus,
            },
        };
        if (susunan === 'paralel') {
            for (const p of percobaan) {
                const q = p.nilai;
                const sama = q.susunan === 1 && q.ggl === ggl && q.r1 === r1 && q.r2 === r2 && q.r3 === r3 && q.rDalam === rDalam;
                if (sama && q.lepas3 !== baru.nilai.lepas3) {
                    const dengan = q.lepas3 === 0 ? q : baru.nilai;
                    const tanpa = q.lepas3 === 0 ? baru.nilai : q;
                    if (tanpa.arus < dengan.arus) tandai('lepasCabang');
                }
            }
        }
        setPercobaan([...percobaan, baru]);
    };

    /* ----- Gambar panggung ----- */

    const gambar = (ctx: CanvasRenderingContext2D, w: number, h: number) => {
        const c = warnaSim();
        const sus = susunanRef.current;
        const hs = hasilRef.current;
        const tata = tataLetak(sus, w, h);
        const arus = arusSegmen(sus, hs);
        const lepas = lepasRef.current;

        // Kawat
        for (const seg of tata.segmen) lintasan(ctx, seg, { tebal: 3 });

        // Titik muatan: jumlah per panjang kawat tetap, lajunya mengikuti arus cabang
        tata.segmen.forEach((seg, i) => {
            if (!(arus[i] > 1e-6)) return;
            const panjang = panjangLintasan(seg);
            const n = Math.floor(panjang / JARAK_TITIK);
            if (n < 1) return;
            const jarak = panjang / n;
            const geser = fasaRef.current[i] % jarak;
            for (let k = 0; k < n; k++) {
                const t = titikPada(seg, (geser + k * jarak) % panjang);
                bulat(ctx, t.x, t.y, 3.5, { isi: c.oranye, tebal: 1.5 });
            }
        });

        // Baterai: kutub + di atas, kutub − di bawah
        const b = tata.baterai;
        kotak(ctx, b.x - 14, b.y - 24, 28, 48, { isi: c.krem, tebal: 2.5 });
        garis(ctx, b.x - 14, b.y, b.x + 14, b.y, { tebal: 2 });
        label(ctx, '+', b.x, b.y - 12, { rata: 'center', ukuran: 16 });
        label(ctx, '−', b.x, b.y + 12, { rata: 'center', ukuran: 16 });
        label(ctx, `ε ${angka(gglRef.current, 1)} V`, b.x + 22, b.y - 9, { ukuran: 11, latar: c.latar, bingkai: false });
        label(ctx, `r ${angka(rDalamRef.current, 1)} Ω`, b.x + 22, b.y + 9, { ukuran: 11, latar: c.latar, bingkai: false });

        // Lampu
        const nilaiRNow = nilaiRRef.current;
        const horizontal = (i: number) => (sus === 'seri' ? true : sus === 'campuran' ? i === 0 : false);
        tata.lampu.forEach((p, i) => {
            const lp = hs.lampu[i];
            const dilepas = lepas && i === 2;
            if (dilepas) {
                // Hapus kawat di belakang lampu supaya terlihat putus
                const lebar = horizontal(i) ? R_LAMPU * 2 + 8 : 12;
                const tinggi = horizontal(i) ? 12 : R_LAMPU * 2 + 8;
                ctx.fillStyle = c.latar;
                ctx.fillRect(p.x - lebar / 2, p.y - tinggi / 2, lebar, tinggi);
            }
            const warna = dilepas ? c.latar : campur(c.latar, c.lime, terang(lp.daya));
            ctx.save();
            if (dilepas) ctx.setLineDash([4, 4]);
            bulat(ctx, p.x, p.y, R_LAMPU, { isi: warna, tebal: 2.5 });
            ctx.restore();
            if (!dilepas) {
                const d = R_LAMPU * 0.68;
                garis(ctx, p.x - d, p.y - d, p.x + d, p.y + d, { tebal: 2 });
                garis(ctx, p.x - d, p.y + d, p.x + d, p.y - d, { tebal: 2 });
            }
            label(ctx, `R${'₁₂₃'[i]} ${angka(nilaiRNow[i], 0)} Ω`, p.x, p.y - R_LAMPU - 9, {
                rata: 'center', ukuran: 11, latar: c.latar, bingkai: false,
            });
            if (dilepas) {
                label(ctx, 'dilepas', p.x, p.y + R_LAMPU + 10, { rata: 'center', ukuran: 11, latar: c.latar, bingkai: false });
            } else if (!hs.terbuka) {
                label(ctx, `I ${angkaTetap(lp.arus, 2)} A`, p.x, p.y + R_LAMPU + 10, { rata: 'center', ukuran: 11, latar: c.latar, bingkai: false });
                label(ctx, `V ${angkaTetap(lp.tegangan, 1)} V`, p.x, p.y + R_LAMPU + 25, { rata: 'center', ukuran: 11, latar: c.latar, bingkai: false });
            } else {
                label(ctx, 'padam', p.x, p.y + R_LAMPU + 10, { rata: 'center', ukuran: 11, latar: c.latar, bingkai: false });
            }
        });

        label(ctx, 'Arus konvensional: dari kutub + ke kutub −', 10, h - 10, { ukuran: 11, tebal: 500, warna: c.redup });
    };

    /* ----- Grafik I terhadap ε ----- */

    const ambilGrafik = (): OpsiGrafik => {
        const [a, bb, cc] = nilaiRRef.current;
        const arusDi = (e: number) => hitungRangkaian(susunanRef.current, e, a, bb, cc, rDalamRef.current, lepasRef.current).arus;
        const titik = [0, 6, 12, 18, 24].map((e) => ({ x: e, y: arusDi(e) }));
        return {
            seri: [{ nama: 'I total', titik }],
            penanda: [{ x: gglRef.current, y: arusDi(gglRef.current) }],
            labelX: 'ε (V)', labelY: 'I total (A)',
            xMin: 0, xMaks: 24, yMin: 0, yMaks: Math.max(titik[4].y * 1.1, 0.2),
        };
    };

    /* ----- Rumus ----- */

    const R = (n: number) => msub(mi('R'), mn(n));
    const bagi = (a: string, b: string) => mfrac(a, b);
    const barisRumus: BarisRumus[] = [];
    if (susunan === 'seri') {
        barisRumus.push({
            mathml: `${mi('R')}${mo('=')}${R(1)}${mo('+')}${R(2)}${mo('+')}${R(3)}`,
            baca: 'R sama dengan R satu tambah R dua tambah R tiga',
        });
        barisRumus.push(hasil.terbuka
            ? { mathml: `${mo('=')}${mtext('tak hingga')}`, baca: 'hambatan tak hingga karena rangkaian terputus' }
            : { mathml: `${mo('=')}${mn(r1)}${mo('+')}${mn(r2)}${mo('+')}${mn(r3)}${mo('=')}${mn(angka(hasil.rTotal, 2))}${mtext('Ω')}`, baca: `sama dengan ${r1} tambah ${r2} tambah ${r3}, yaitu ${angka(hasil.rTotal, 2)} ohm` });
    } else if (susunan === 'paralel') {
        barisRumus.push({
            mathml: `${bagi(mn(1), mi('R'))}${mo('=')}${bagi(mn(1), R(1))}${mo('+')}${bagi(mn(1), R(2))}${lepas3 ? '' : `${mo('+')}${bagi(mn(1), R(3))}`}`,
            baca: lepas3 ? 'satu per R sama dengan satu per R satu tambah satu per R dua' : 'satu per R sama dengan satu per R satu tambah satu per R dua tambah satu per R tiga',
        });
        barisRumus.push({
            mathml: `${mo('=')}${bagi(mn(1), mn(r1))}${mo('+')}${bagi(mn(1), mn(r2))}${lepas3 ? '' : `${mo('+')}${bagi(mn(1), mn(r3))}`}`,
            baca: 'angka dimasukkan ke rumus',
        });
        barisRumus.push({
            mathml: `${mi('R')}${mo('=')}${mn(angka(hasil.rTotal, 2))}${mtext('Ω')}`,
            baca: `R sama dengan ${angka(hasil.rTotal, 2)} ohm`,
        });
    } else {
        barisRumus.push({
            mathml: `${mi('R')}${mo('=')}${R(1)}${mo('+')}${lepas3 ? R(2) : bagi(`${R(2)}${R(3)}`, `${R(2)}${mo('+')}${R(3)}`)}`,
            baca: lepas3 ? 'R sama dengan R satu tambah R dua' : 'R sama dengan R satu tambah hasil kali R dua R tiga per jumlah R dua dan R tiga',
        });
        barisRumus.push({
            mathml: `${mo('=')}${mn(r1)}${mo('+')}${lepas3 ? mn(r2) : bagi(`${mn(r2)}${mo('×')}${mn(r3)}`, `${mn(r2)}${mo('+')}${mn(r3)}`)}${mo('=')}${mn(angka(hasil.rTotal, 2))}${mtext('Ω')}`,
            baca: `sama dengan ${angka(hasil.rTotal, 2)} ohm`,
        });
    }
    if (!hasil.terbuka) {
        barisRumus.push({
            mathml: `${mi('I')}${mo('=')}${bagi(mi('ε'), `${mi('R')}${mo('+')}${mi('r')}`)}`,
            baca: 'I sama dengan epsilon per R tambah r',
        });
        barisRumus.push({
            mathml: `${mo('=')}${bagi(mn(angka(ggl, 1)), `${mn(angka(hasil.rTotal, 2))}${mo('+')}${mn(angka(rDalam, 1))}`)}${mo('=')}${mn(angka(hasil.arus, 2))}${mtext('A')}`,
            baca: `sama dengan ${angka(hasil.arus, 2)} ampere`,
        });
    } else {
        barisRumus.push({ mathml: `${mi('I')}${mo('=')}${mn(0)}`, baca: 'arus sama dengan nol' });
    }

    const catatanRumus = susunan === 'seri'
        ? 'Seri: arus sama besar di semua lampu, tegangan terbagi sebanding hambatan.'
        : susunan === 'paralel'
            ? 'Paralel: tegangan sama di semua cabang, arus terbagi. R total lebih kecil daripada R terkecil.'
            : 'Campuran: R₁ seri dengan gabungan paralel R₂ dan R₃. Arus lewat R₁ terbagi dua di percabangan.';

    /* ----- Ringkasan untuk pembaca layar ----- */

    const nama = susunan === 'seri' ? 'seri' : susunan === 'paralel' ? 'paralel' : 'campuran';
    const deskripsi = hasil.terbuka
        ? `Rangkaian seri terputus karena lampu 3 dilepas. Tidak ada arus dan semua lampu padam.`
        : `Rangkaian ${nama} dengan baterai ${angka(ggl, 1)} volt dan hambatan dalam ${angka(rDalam, 1)} ohm. Hambatan total ${angka(hasil.rTotal, 2)} ohm, arus total ${angka(hasil.arus, 2)} ampere. Lampu satu ${angka(hasil.lampu[0].arus, 2)} ampere dan ${angka(hasil.lampu[0].tegangan, 1)} volt, lampu dua ${angka(hasil.lampu[1].arus, 2)} ampere dan ${angka(hasil.lampu[1].tegangan, 1)} volt, lampu tiga ${lepas3 ? 'dilepas' : `${angka(hasil.lampu[2].arus, 2)} ampere dan ${angka(hasil.lampu[2].tegangan, 1)} volt`}.`;

    return (
        <SimShell
            panggung={<Panggung gambar={gambar} deskripsi={deskripsi} rasio={16 / 11} />}
            kendaliPutar={
                <div className="space-y-3">
                    <PlayBar loop={loop} onUlang={ulang} labelMulai="Alirkan" tanpaLangkah />
                    <div className="flex flex-wrap items-center gap-3">
                        <Tombol jenis="utama" onClick={catat} nonaktif={hasil.terbuka}>
                            <IconClipboardPlus size={16} stroke={2.5} aria-hidden="true" />
                            Catat pengukuran
                        </Tombol>
                        {hasil.terbuka && <p className="text-xs text-muted">Rangkaian terputus. Pasang lampu 3 atau ganti susunan untuk mencatat.</p>}
                    </div>
                </div>
            }
            bacaan={
                <BarisBacaan>
                    <Bacaan label="R total" nilai={hasil.terbuka ? 'tak hingga' : angkaTetap(hasil.rTotal, 2)} satuan={hasil.terbuka ? undefined : 'Ω'} />
                    <Bacaan label="I total" nilai={angkaTetap(hasil.arus, 2)} satuan="A" sorot="lime" />
                    <Bacaan label="Tegangan jepit" nilai={angkaTetap(hasil.jepit, 2)} satuan="V" />
                    <Bacaan label="Daya total" nilai={angkaTetap(hasil.daya, 2)} satuan="W" />
                    <Bacaan label="I lampu 1" nilai={angkaTetap(hasil.lampu[0].arus, 2)} satuan="A" />
                    <Bacaan label="I lampu 2" nilai={angkaTetap(hasil.lampu[1].arus, 2)} satuan="A" />
                    <Bacaan label="I lampu 3" nilai={angkaTetap(hasil.lampu[2].arus, 2)} satuan="A" />
                </BarisBacaan>
            }
            pengatur={
                <>
                    <Pilihan
                        label="Susunan lampu"
                        nilai={susunan}
                        pilihan={[{ nilai: 'seri', label: 'Seri' }, { nilai: 'paralel', label: 'Paralel' }, { nilai: 'campuran', label: 'Campuran' }]}
                        onUbah={setSusunan}
                    />
                    <Slider label="GGL baterai" simbol="ε" nilai={ggl} min={1.5} maks={24} langkah={0.5} satuan="V" desimal={1} onUbah={setGgl} />
                    <Slider label="Hambatan lampu 1" simbol="R₁" nilai={r1} min={1} maks={20} satuan="Ω" onUbah={setR1} />
                    <Slider label="Hambatan lampu 2" simbol="R₂" nilai={r2} min={1} maks={20} satuan="Ω" onUbah={setR2} />
                    <Slider label="Hambatan lampu 3" simbol="R₃" nilai={r3} min={1} maks={20} satuan="Ω" onUbah={setR3} />
                    <Slider label="Hambatan dalam baterai" simbol="r" nilai={rDalam} min={0} maks={2} langkah={0.1} satuan="Ω" desimal={1} onUbah={setRDalam} />
                    <Sakelar
                        label="Lepas lampu 3"
                        aktif={lepas3}
                        onUbah={setLepas3}
                        teksAktif="Lepas"
                        teksMati="Pasang"
                        catatan="Seri: seluruh rangkaian padam. Paralel dan campuran: hanya cabang lampu 3 yang padam."
                    />
                    <p className="text-xs text-muted">Susunan campuran: R₁ seri dengan (R₂ paralel R₃).</p>
                </>
            }
            rumus={<RumusHidup baris={barisRumus} catatan={catatanRumus} />}
            grafik={
                <Panel judul="Arus total terhadap ε" ikon={<IconChartDots size={18} stroke={2.5} aria-hidden="true" />}>
                    <GrafikHidup
                        ambil={ambilGrafik}
                        rasio={1.9}
                        deskripsi={`Grafik arus total terhadap ggl baterai untuk susunan ${nama}. Garisnya lurus: arus sebanding dengan ε. Saat ini ε ${angka(ggl, 1)} volt dan arus ${angka(hasil.arus, 2)} ampere.`}
                    />
                    <p className="text-xs text-muted mt-2">Garis lurus lewat titik nol berarti arus sebanding dengan ε. Ganti hambatan dan lihat kemiringannya berubah.</p>
                </Panel>
            }
            selidiki={
                <SelidikiHubungan
                    bebas={BEBAS}
                    terikat={TERIKAT}
                    tetap={['susunan', 'rDalam']}
                    percobaan={percobaan}
                    onHapus={() => setPercobaan([])}
                    ajakan="Tekan Catat pengukuran, ubah satu besaran saja (misalnya R₁), lalu catat lagi. Ulangi tiga kali atau lebih. Percobaan dengan susunan atau r berbeda tidak digambar bersama."
                />
            }
            tantangan={<Tantangan daftar={TANTANGAN} selesai={selesai} />}
        />
    );
}
