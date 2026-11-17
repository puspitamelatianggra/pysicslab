// Grafik garis/titik yang digambar langsung di canvas (cukup ringan untuk diperbarui tiap bingkai).

import { buatSkala, bulat, Ctx, gambarSumbu, garis, lintasan } from './draw';
import { warnaSim } from './theme';

export interface Titik {
    x: number;
    y: number;
}

export interface Seri {
    nama: string;
    titik: Titik[];
    warna?: string;
    /** 'garis' (bawaan), 'putus' untuk kurva teori atau percobaan lama, 'titik' untuk data hasil percobaan */
    gaya?: 'garis' | 'putus' | 'titik';
    tebal?: number;
}

export interface OpsiGrafik {
    seri: Seri[];
    labelX: string;
    labelY: string;
    xMin?: number;
    xMaks?: number;
    yMin?: number;
    yMaks?: number;
    /** Titik yang ditonjolkan, misalnya keadaan saat ini */
    penanda?: (Titik & { warna?: string })[];
    /** false: sumbu tidak dipaksa memuat nol */
    muatNol?: boolean;
}

function rentang(nilai: number[], muatNol: boolean): [number, number] {
    let min = Infinity;
    let maks = -Infinity;
    for (const v of nilai) {
        if (!Number.isFinite(v)) continue;
        if (v < min) min = v;
        if (v > maks) maks = v;
    }
    if (min === Infinity) return [0, 1];
    if (muatNol) {
        min = Math.min(min, 0);
        maks = Math.max(maks, 0);
    }
    if (maks - min < 1e-9) {
        const lebar = Math.abs(maks) > 1e-9 ? Math.abs(maks) * 0.5 : 1;
        return [muatNol ? Math.min(0, min) : min - lebar, maks + lebar];
    }
    const pad = (maks - min) * 0.08;
    return [min < 0 || !muatNol ? min - pad : min, maks + pad];
}

export function gambarGrafik(ctx: Ctx, w: number, h: number, o: OpsiGrafik): void {
    const c = warnaSim();
    const muatNol = o.muatNol !== false;
    const semuaX: number[] = [];
    const semuaY: number[] = [];
    for (const s of o.seri) for (const t of s.titik) { semuaX.push(t.x); semuaY.push(t.y); }
    for (const p of o.penanda ?? []) { semuaX.push(p.x); semuaY.push(p.y); }
    const [ax, bx] = rentang(semuaX, muatNol);
    const [ay, by] = rentang(semuaY, muatNol);

    const s = buatSkala({
        w, h,
        xMin: o.xMin ?? ax, xMaks: o.xMaks ?? bx,
        yMin: o.yMin ?? ay, yMaks: o.yMaks ?? by,
        pad: { kiri: 46, kanan: 14, atas: 14, bawah: 30 },
    });
    gambarSumbu(ctx, s, { labelX: o.labelX, labelY: o.labelY });

    // Garis nol kalau sumbu y memuat nilai negatif
    if (s.yMin < 0 && s.yMaks > 0) {
        garis(ctx, s.kiri, s.y(0), s.kanan, s.y(0), { warna: c.gelap, tebal: 1.5 });
    }

    ctx.save();
    ctx.beginPath();
    ctx.rect(s.kiri, s.atas - 4, s.kanan - s.kiri + 4, s.bawah - s.atas + 8);
    ctx.clip();
    for (const seri of o.seri) {
        const warna = seri.warna ?? c.gelap;
        const piksel = seri.titik.map((t) => ({ x: s.x(t.x), y: s.y(t.y) }));
        if (seri.gaya === 'titik') {
            for (const p of piksel) bulat(ctx, p.x, p.y, 5, { isi: warna, tebal: 2 });
        } else {
            lintasan(ctx, piksel, {
                warna,
                tebal: seri.tebal ?? 2.5,
                putus: seri.gaya === 'putus' ? [6, 5] : undefined,
            });
        }
    }
    for (const p of o.penanda ?? []) {
        bulat(ctx, s.x(p.x), s.y(p.y), 6, { isi: p.warna ?? c.oranye, tebal: 2 });
    }
    ctx.restore();
}
