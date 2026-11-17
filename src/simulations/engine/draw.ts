// Alat gambar bersama untuk panggung simulasi (Canvas 2D).
// Gaya: isi datar, garis tepi gelap, tanpa gradien dan tanpa bayangan lembut.

import { FONT_ANGKA, warnaSim } from './theme';
import { angka } from './format';

export type Ctx = CanvasRenderingContext2D;

/* ---------- Skala dunia → layar ---------- */

export interface Skala {
    /** Koordinat dunia → piksel */
    x: (nilai: number) => number;
    y: (nilai: number) => number;
    /** Panjang dunia → piksel (mendatar / tegak) */
    px: (panjang: number) => number;
    py: (panjang: number) => number;
    /** Piksel → koordinat dunia */
    balikX: (piksel: number) => number;
    balikY: (piksel: number) => number;
    xMin: number; xMaks: number; yMin: number; yMaks: number;
    kiri: number; kanan: number; atas: number; bawah: number;
}

export interface OpsiSkala {
    w: number; h: number;
    xMin: number; xMaks: number; yMin: number; yMaks: number;
    /** Ruang kosong di tepi (piksel) */
    pad?: { kiri?: number; kanan?: number; atas?: number; bawah?: number };
    /** true: 1 meter mendatar = 1 meter tegak di layar. Rentang y atau x diperluas agar pas. */
    samaSkala?: boolean;
}

export function buatSkala(o: OpsiSkala): Skala {
    const kiri = o.pad?.kiri ?? 44;
    const kanan = o.w - (o.pad?.kanan ?? 16);
    const atas = o.pad?.atas ?? 16;
    const bawah = o.h - (o.pad?.bawah ?? 34);
    let { xMin, xMaks, yMin, yMaks } = o;
    let sx = (kanan - kiri) / (xMaks - xMin);
    let sy = (bawah - atas) / (yMaks - yMin);
    if (o.samaSkala) {
        const s = Math.min(sx, sy);
        sx = s;
        sy = s;
        xMaks = xMin + (kanan - kiri) / s;
        yMaks = yMin + (bawah - atas) / s;
    }
    return {
        x: (v) => kiri + (v - xMin) * sx,
        y: (v) => bawah - (v - yMin) * sy,
        px: (p) => p * sx,
        py: (p) => p * sy,
        balikX: (p) => xMin + (p - kiri) / sx,
        balikY: (p) => yMin + (bawah - p) / sy,
        xMin, xMaks, yMin, yMaks, kiri, kanan, atas, bawah,
    };
}

/** Jarak antargaris yang enak dibaca (1, 2, 5 × 10ⁿ) untuk kira-kira `jumlah` garis. */
export function langkahBagus(rentang: number, jumlah = 6): number {
    if (rentang <= 0 || !Number.isFinite(rentang)) return 1;
    const kasar = rentang / jumlah;
    const pangkat = Math.pow(10, Math.floor(Math.log10(kasar)));
    const sisa = kasar / pangkat;
    const faktor = sisa < 1.5 ? 1 : sisa < 3.5 ? 2 : sisa < 7.5 ? 5 : 10;
    return faktor * pangkat;
}

function desimalUntuk(langkah: number): number {
    if (langkah >= 1) return 0;
    return Math.min(4, Math.ceil(-Math.log10(langkah)));
}

/* ---------- Kisi dan sumbu ---------- */

export interface OpsiSumbu {
    langkahX?: number;
    langkahY?: number;
    labelX?: string;
    labelY?: string;
    /** false: tanpa garis kisi, hanya sumbu dan angka */
    kisi?: boolean;
    angkaX?: boolean;
    angkaY?: boolean;
}

/** Kisi tipis + sumbu tebal + angka skala. Kisi di sini berfungsi sebagai penggaris, bukan hiasan. */
export function gambarSumbu(ctx: Ctx, s: Skala, o: OpsiSumbu = {}): void {
    const w = warnaSim();
    // Jumlah garis mengikuti ukuran layar supaya angka skala tidak berdempetan di HP
    const lx = o.langkahX ?? langkahBagus(s.xMaks - s.xMin, Math.max(3, Math.round((s.kanan - s.kiri) / 80)));
    const ly = o.langkahY ?? langkahBagus(s.yMaks - s.yMin, Math.max(3, Math.round((s.bawah - s.atas) / 55)));
    const dx = desimalUntuk(lx);
    const dy = desimalUntuk(ly);

    ctx.save();
    ctx.lineWidth = 1;
    ctx.strokeStyle = w.kisi;
    ctx.fillStyle = w.redup;
    ctx.font = `500 11px ${FONT_ANGKA}`;

    const awalX = Math.ceil(s.xMin / lx - 1e-9) * lx;
    for (let v = awalX; v <= s.xMaks + 1e-9; v += lx) {
        const px = Math.round(s.x(v)) + 0.5;
        if (o.kisi !== false) {
            ctx.beginPath();
            ctx.moveTo(px, s.atas);
            ctx.lineTo(px, s.bawah);
            ctx.stroke();
        }
        if (o.angkaX !== false) {
            ctx.textAlign = 'center';
            ctx.textBaseline = 'top';
            ctx.fillText(angka(v, dx), px, s.bawah + 6);
        }
    }
    const awalY = Math.ceil(s.yMin / ly - 1e-9) * ly;
    for (let v = awalY; v <= s.yMaks + 1e-9; v += ly) {
        const py = Math.round(s.y(v)) + 0.5;
        if (o.kisi !== false) {
            ctx.beginPath();
            ctx.moveTo(s.kiri, py);
            ctx.lineTo(s.kanan, py);
            ctx.stroke();
        }
        if (o.angkaY !== false) {
            ctx.textAlign = 'right';
            ctx.textBaseline = 'middle';
            ctx.fillText(angka(v, dy), s.kiri - 6, py);
        }
    }

    // Sumbu
    ctx.strokeStyle = w.gelap;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(s.kiri, s.atas);
    ctx.lineTo(s.kiri, s.bawah);
    ctx.lineTo(s.kanan, s.bawah);
    ctx.stroke();

    ctx.fillStyle = w.gelap;
    ctx.font = `700 12px ${FONT_ANGKA}`;
    if (o.labelX) {
        ctx.textAlign = 'right';
        ctx.textBaseline = 'bottom';
        ctx.fillText(o.labelX, s.kanan, s.bawah - 5);
    }
    if (o.labelY) {
        ctx.textAlign = 'left';
        ctx.textBaseline = 'top';
        ctx.fillText(o.labelY, s.kiri + 6, s.atas);
    }
    ctx.restore();
}

/* ---------- Bentuk dasar ---------- */

export interface GayaBentuk {
    isi?: string;
    garis?: string;
    tebal?: number;
}

export function kotak(ctx: Ctx, x: number, y: number, w: number, h: number, g: GayaBentuk = {}): void {
    const c = warnaSim();
    ctx.save();
    if (g.isi !== 'none') {
        ctx.fillStyle = g.isi ?? c.krem;
        ctx.fillRect(x, y, w, h);
    }
    ctx.lineWidth = g.tebal ?? 2;
    ctx.strokeStyle = g.garis ?? c.gelap;
    ctx.lineJoin = 'miter';
    ctx.strokeRect(x, y, w, h);
    ctx.restore();
}

export function bulat(ctx: Ctx, x: number, y: number, r: number, g: GayaBentuk = {}): void {
    const c = warnaSim();
    // Radius hasil hitungan bisa jadi negatif di panggung yang sangat sempit; canvas menolak nilai itu
    if (!(r > 0)) return;
    ctx.save();
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    if (g.isi !== 'none') {
        ctx.fillStyle = g.isi ?? c.oranye;
        ctx.fill();
    }
    ctx.lineWidth = g.tebal ?? 2;
    ctx.strokeStyle = g.garis ?? c.gelap;
    ctx.stroke();
    ctx.restore();
}

export interface GayaGaris {
    warna?: string;
    tebal?: number;
    /** Pola putus-putus, misalnya [6, 5] */
    putus?: number[];
}

export function garis(ctx: Ctx, x1: number, y1: number, x2: number, y2: number, g: GayaGaris = {}): void {
    ctx.save();
    ctx.strokeStyle = g.warna ?? warnaSim().gelap;
    ctx.lineWidth = g.tebal ?? 2;
    if (g.putus) ctx.setLineDash(g.putus);
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.restore();
}

/** Garis melalui banyak titik (koordinat piksel). Dipakai untuk lintasan dan jejak. */
export function lintasan(ctx: Ctx, titik: { x: number; y: number }[], g: GayaGaris = {}): void {
    if (titik.length < 2) return;
    ctx.save();
    ctx.strokeStyle = g.warna ?? warnaSim().gelap;
    ctx.lineWidth = g.tebal ?? 2;
    ctx.lineJoin = 'round';
    if (g.putus) ctx.setLineDash(g.putus);
    ctx.beginPath();
    ctx.moveTo(titik[0].x, titik[0].y);
    for (let i = 1; i < titik.length; i++) ctx.lineTo(titik[i].x, titik[i].y);
    ctx.stroke();
    ctx.restore();
}

/**
 * Panah vektor dari (x1, y1) ke (x2, y2) dalam piksel.
 * Panah yang terlalu pendek (< 4 px) tidak digambar supaya vektor nol tidak tampak sebagai titik.
 */
export function panah(ctx: Ctx, x1: number, y1: number, x2: number, y2: number, g: GayaGaris = {}): void {
    const panjang = Math.hypot(x2 - x1, y2 - y1);
    if (panjang < 4) return;
    const warna = g.warna ?? warnaSim().gelap;
    const tebal = g.tebal ?? 3;
    const kepala = Math.min(6 + tebal * 2, panjang * 0.6);
    const sudut = Math.atan2(y2 - y1, x2 - x1);
    // Batang berhenti sedikit sebelum ujung supaya ujung panah tetap lancip
    const ujungX = x2 - Math.cos(sudut) * kepala * 0.8;
    const ujungY = y2 - Math.sin(sudut) * kepala * 0.8;
    ctx.save();
    ctx.strokeStyle = warna;
    ctx.fillStyle = warna;
    ctx.lineWidth = tebal;
    ctx.lineCap = 'butt';
    if (g.putus) ctx.setLineDash(g.putus);
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(ujungX, ujungY);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.beginPath();
    ctx.moveTo(x2, y2);
    ctx.lineTo(x2 - Math.cos(sudut - 0.45) * kepala, y2 - Math.sin(sudut - 0.45) * kepala);
    ctx.lineTo(x2 - Math.cos(sudut + 0.45) * kepala, y2 - Math.sin(sudut + 0.45) * kepala);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
}

export interface GayaLabel {
    rata?: CanvasTextAlign;
    dasar?: CanvasTextBaseline;
    ukuran?: number;
    tebal?: number;
    warna?: string;
    /** Blok warna di belakang teks (lime/oranye) untuk angka penting. Teks tetap gelap. */
    latar?: string;
    /** Garis tepi blok latar */
    bingkai?: boolean;
}

/** Teks di panggung. Jangan memakai oranye sebagai warna teks; pakai `latar` untuk menonjolkan. */
export function label(ctx: Ctx, teks: string, x: number, y: number, g: GayaLabel = {}): void {
    const c = warnaSim();
    const ukuran = g.ukuran ?? 13;
    ctx.save();
    ctx.font = `${g.tebal ?? 700} ${ukuran}px ${FONT_ANGKA}`;
    ctx.textAlign = g.rata ?? 'left';
    ctx.textBaseline = g.dasar ?? 'middle';
    if (g.latar) {
        const lebar = ctx.measureText(teks).width;
        const padX = 5;
        const tinggi = ukuran + 8;
        let kiri = x - padX;
        if (ctx.textAlign === 'center') kiri = x - lebar / 2 - padX;
        else if (ctx.textAlign === 'right' || ctx.textAlign === 'end') kiri = x - lebar - padX;
        let atas = y - tinggi / 2;
        if (ctx.textBaseline === 'top') atas = y - 4;
        else if (ctx.textBaseline === 'bottom' || ctx.textBaseline === 'alphabetic') atas = y - tinggi + 4;
        ctx.fillStyle = g.latar;
        ctx.fillRect(kiri, atas, lebar + padX * 2, tinggi);
        if (g.bingkai !== false) {
            ctx.strokeStyle = c.gelap;
            ctx.lineWidth = 1.5;
            ctx.strokeRect(kiri, atas, lebar + padX * 2, tinggi);
        }
    }
    ctx.fillStyle = g.warna ?? c.gelap;
    ctx.fillText(teks, x, y);
    ctx.restore();
}
