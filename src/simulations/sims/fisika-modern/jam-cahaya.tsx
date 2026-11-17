/* ============================================================
   SIMULASI: Jam Cahaya, Dilatasi Waktu dan Kontraksi Panjang (Bab 4-1)
   ============================================================
   Susunan file: (1) fisika murni, (2) komponen React, (3) pembantu MathML.

   Hubungan yang harus bisa ditemukan siswa:
   - v naik → γ naik, pelan di awal lalu melonjak dekat c
   - v naik → selang waktu jam bergerak (menurut pengamat diam) naik
   - v naik → panjang kereta teramati turun
   - panjang diam L₀ tidak mengubah γ
   ============================================================ */

import { IconChartDots, IconPencilPlus } from '@tabler/icons-react';
import { useEffect, useRef, useState } from 'react';
import {
    angka, angkaTetap, Ctx, garis, gerakDikurangi, jepit, kotak, label, bulat, OpsiGrafik, useSimLoop, warnaSim,
} from '../../engine';
import {
    Bacaan, BarisBacaan, BarisRumus, Besaran, GrafikHidup, mfrac, mi, mn, mo, msqrt, msub, msup, mtext,
    Panel, Panggung, Percobaan, PlayBar, RumusHidup, Sakelar, SelidikiHubungan, SimShell,
    Slider, Tantangan, Tombol, useTantangan,
} from '../../ui';

/* ---------- 1. Fisika ---------- */

/** Faktor Lorentz γ = 1/√(1 − β²), dengan β = v/c. */
export const gamma = (beta: number) => 1 / Math.sqrt(1 - beta * beta);

/** Selang waktu teramati pengamat diam untuk selang waktu diri Δt₀. */
export const selangTeramati = (dt0: number, beta: number) => gamma(beta) * dt0;

/** Panjang teramati dari panjang diam L₀. */
export const panjangTeramati = (L0: number, beta: number) => L0 / gamma(beta);

/**
 * Geometri jam cahaya (satuan c = 1). Tinggi jam h, detak diam Δt₀ = 2h.
 * Foton di jam bergerak menempuh setengah detak dalam waktu τ dan lintasan miring √(h² + (βτ)²) = τ.
 * Fungsi ini mengembalikan lintasan miring per setengah detak, memakai τ = γ·Δt₀/2.
 */
export function miringPerSetengahDetak(h: number, beta: number): number {
    const dt0 = 2 * h;
    const tau = (gamma(beta) * dt0) / 2;
    return Math.sqrt(h * h + (beta * tau) ** 2);
}

/** Posisi foton di jam (0 = cermin bawah, 1 = cermin atas) pada fase siklus ph (satu siklus = satu detak). */
export function posisiFoton(ph: number): number {
    const f = ph - Math.floor(ph);
    return f < 0.5 ? 2 * f : 2 - 2 * f;
}

/* ---------- 2. Komponen ---------- */

const BEBAS: Besaran[] = [
    { id: 'beta', label: 'kecepatan kereta', simbol: 'v/c', satuan: 'c', desimal: 2 },
    { id: 'L0', label: 'panjang diam kereta', simbol: 'L₀', satuan: 'm', desimal: 0 },
];

const TERIKAT: Besaran[] = [
    { id: 'gamma', label: 'faktor γ', simbol: 'γ', satuan: '', desimal: 3 },
    { id: 'dt', label: 'selang waktu teramati', simbol: 'Δt (untuk Δt₀ = 1 s)', satuan: 's', desimal: 2 },
    { id: 'L', label: 'panjang teramati', simbol: 'L', satuan: 'm', desimal: 1 },
];

const TANTANGAN = [
    { id: 'gamma2', teks: 'Cari kecepatan yang membuat jam di kereta berdetak setengah kali lebih jarang, yaitu γ = 2 (v sekitar 0,87c, boleh meleset 0,01c). Lalu tekan "Catat pengukuran".' },
    { id: 'enamPuluh', teks: 'Buat kereta 100 m teramati sepanjang 60 m (boleh meleset 1 m), lalu catat pengukurannya.' },
    { id: 'hampirSatu', teks: 'Catat pengukuran pada v sampai 0,1c dan lihat bahwa γ nyaris 1 (di bawah 1,01).' },
];

const T0 = 1; // satu detak jam diam = 1 detik layar (diperlambat)
const KL = 0.0045; // panjang kereta 1 m = KL × lebar panggung

interface Keadaan {
    t: number; // waktu pengamat peron (detik layar)
    ph1: number; // siklus jam diam
    ph2: number; // siklus jam bergerak
    u: number; // posisi jam kereta, dalam satuan tinggi jam
    jejak: { u: number; yf: number }[];
}

const KEADAAN_AWAL = (): Keadaan => ({ t: 0, ph1: 0, ph2: 0, u: 1.6, jejak: [{ u: 1.6, yf: 0 }] });

export default function JamCahaya() {
    const [beta, setBeta] = useState(0.6);
    const [L0, setL0] = useState(100);
    const [tampilJejak, setTampilJejak] = useState(true);

    const g = gamma(beta);
    const dt = selangTeramati(1, beta);
    const L = panjangTeramati(L0, beta);

    const pRef = useRef({ beta, L0 });
    pRef.current = { beta, L0 };
    const sRef = useRef<Keadaan>(KEADAAN_AWAL());
    const geoRef = useRef({ wU: 8, mU: 4 });

    const [percobaan, setPercobaan] = useState<Percobaan[]>([]);
    const [selesai, tandai] = useTantangan();

    const loop = useSimLoop((d) => {
        const { beta: b } = pRef.current;
        const s = sRef.current;
        const gm = gamma(b);
        s.t += d;
        s.ph1 += d / T0;
        const sebelum = Math.floor(s.ph2 * 2);
        s.ph2 += d / (gm * T0);
        // Kecepatan layar kereta = β kali kelajuan foton layar (2 tinggi jam per T₀)
        s.u += (b * 2 * d) / T0;
        const sesudah = Math.floor(s.ph2 * 2);
        if (sesudah > sebelum) s.jejak.push({ u: s.u, yf: sesudah % 2 });
        const { wU, mU } = geoRef.current;
        if (s.u > wU + mU) {
            s.u = -mU;
            s.jejak = [{ u: s.u, yf: posisiFoton(s.ph2) }];
        }
        if (s.jejak.length > 400) s.jejak.shift();
    });

    useEffect(() => {
        if (!gerakDikurangi()) loop.mainkan();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const ulang = () => {
        sRef.current = KEADAAN_AWAL();
        loop.segarkan();
    };

    const catat = () => {
        const baru: Percobaan = { nilai: { beta, L0, gamma: g, dt, L } };
        setPercobaan((lama) => [...lama, baru]);
        if (Math.abs(beta - 0.87) <= 0.01) tandai('gamma2');
        if (L0 === 100 && Math.abs(L - 60) <= 1) tandai('enamPuluh');
        if (beta <= 0.1 + 1e-9 && g < 1.01) tandai('hampirSatu');
    };

    /* ----- Gambar panggung ----- */

    const gambar = (ctx: Ctx, w: number, h: number) => {
        const c = warnaSim();
        const { beta: b, L0: l0 } = pRef.current;
        const s = sRef.current;
        const gm = gamma(b);
        // Ukuran relatif terhadap tinggi panggung. Kedua jam memakai H yang sama supaya adil.
        const H = 0.28 * h;
        geoRef.current = { wU: w / H, mU: (0.23 * w + 20) / H };

        const mw = Math.min(40, 0.1 * w); // lebar cermin
        const n1 = Math.floor(s.ph1);
        const n2 = Math.floor(s.ph2);
        const rFoton = 7;

        // --- Pita atas: jam diam di peron ---
        const y1t = 0.07 * h;
        const y1b = y1t + H;
        const x1 = Math.max(mw / 2 + 12, 0.12 * w);
        label(ctx, 'Jam diam di peron', 8, 10, { ukuran: 11, tebal: 700 });
        if (tampilJejak) garis(ctx, x1, y1t + 4, x1, y1b, { warna: c.oranye, tebal: 2, putus: [4, 4] });
        kotak(ctx, x1 - mw / 2, y1t - 6, mw, 6, { isi: c.lime });
        kotak(ctx, x1 - mw / 2, y1b, mw, 6, { isi: c.lime });
        bulat(ctx, x1, y1b - posisiFoton(s.ph1) * H, rFoton, { isi: c.oranye });
        const xt = x1 + mw / 2 + 14;
        label(ctx, `Diam: ${n1} detak, t = ${angkaTetap(s.ph1 * T0, 1)} s`, xt, y1t + H / 2, { ukuran: 12, latar: c.lime });

        // --- Peron ---
        const yp = 0.39 * h;
        kotak(ctx, 0, yp, w, 6, { isi: c.krem, tebal: 2 });

        // --- Pita bawah: kereta dengan jam ---
        label(ctx, 'Jam di kereta yang melaju', 8, yp + 18, { ukuran: 11, tebal: 700 });
        label(ctx, `Kereta: ${n2} detak, t = ${angkaTetap(s.ph2 * T0, 1)} s`, w - 8, yp + 18, { ukuran: 12, rata: 'right', latar: c.oranye });
        const y2t = 0.5 * h;
        const y2b = y2t + H;
        const xc = s.u * H;
        const yTr = y2b + 6;
        const hTr = Math.max(18, 0.065 * h);
        const lKereta = Math.max(2, KL * w * (l0 / gm));
        const lDiam = KL * w * l0;

        // Panjang diam sebagai pembanding (garis putus) di belakang kereta
        ctx.save();
        ctx.strokeStyle = c.redup;
        ctx.lineWidth = 1.5;
        ctx.setLineDash([5, 4]);
        ctx.strokeRect(xc - lDiam / 2, yTr, lDiam, hTr);
        ctx.restore();
        kotak(ctx, xc - lKereta / 2, yTr, lKereta, hTr, { isi: c.lime });
        const yRel = yTr + hTr + 4;
        garis(ctx, 0, yRel, w, yRel, { tebal: 2.5 });

        // Rangka jam dan cermin
        garis(ctx, xc - mw / 2, y2t, xc - mw / 2, yTr, { tebal: 1.5, warna: c.redup });
        garis(ctx, xc + mw / 2, y2t, xc + mw / 2, yTr, { tebal: 1.5, warna: c.redup });
        kotak(ctx, xc - mw / 2, y2t - 6, mw, 6, { isi: c.lime });
        kotak(ctx, xc - mw / 2, y2b, mw, 6, { isi: c.lime });

        // Jejak zigzag foton menurut pengamat peron
        const yFoton = (yf: number) => y2b - yf * H;
        const yfKini = posisiFoton(s.ph2);
        if (tampilJejak) {
            ctx.save();
            ctx.strokeStyle = c.oranye;
            ctx.lineWidth = 2.5;
            ctx.lineJoin = 'round';
            ctx.beginPath();
            s.jejak.forEach((p, i) => {
                const px = p.u * H;
                const py = yFoton(p.yf);
                if (i === 0) ctx.moveTo(px, py);
                else ctx.lineTo(px, py);
            });
            ctx.lineTo(xc, yFoton(yfKini));
            ctx.stroke();
            ctx.restore();
        }
        bulat(ctx, xc, yFoton(yfKini), rFoton, { isi: c.oranye });

        // Panjang kereta teramati, tepat di bawah kereta
        label(ctx, `Teramati: L = ${angka(panjangTeramati(l0, b), 1)} m (L₀ = ${angka(l0, 0)} m)`, jepit(xc, 105, w - 105), yRel + 14, {
            rata: 'center', ukuran: 11, latar: c.lime,
        });
    };

    /* ----- Grafik γ terhadap v/c ----- */

    const kurvaGamma = Array.from({ length: 100 }, (_, i) => ({ x: i / 100, y: gamma(i / 100) }));
    const ambilGrafik = (): OpsiGrafik => ({
        seri: [{ nama: 'γ', titik: kurvaGamma }],
        penanda: [{ x: beta, y: g }],
        labelX: 'v/c', labelY: 'γ',
        xMin: 0, xMaks: 1, yMin: 0, yMaks: 7.5,
    });

    /* ----- Rumus hidup ----- */

    const b2 = msup(mn(angka(beta, 2)), mn(2));
    const barisRumus: BarisRumus[] = [
        {
            mathml: `${mi('γ')}${mo('=')}${mfrac(mn(1), msqrt(`${mn(1)}${mo('−')}${mfrac(msup(mi('v'), mn(2)), msup(mi('c'), mn(2)))}`))}`,
            baca: 'gamma sama dengan satu per akar satu dikurangi v kuadrat per c kuadrat',
        },
        {
            mathml: `${mo('=')}${mfrac(mn(1), msqrt(`${mn(1)}${mo('−')}${b2}`))}${mo('=')}${mn(angka(g, 3))}`,
            baca: `sama dengan satu per akar satu dikurangi ${angka(beta, 2)} kuadrat, yaitu ${angka(g, 3)}`,
        },
        {
            mathml: `${mo('Δ')}${mi('t')}${mo('=')}${mi('γ')}${mo('Δ')}${msub(mi('t'), mn(0))}${mo('=')}${mn(angka(g, 3))}${mo('×')}${mn(1)}${mtext('s')}${mo('=')}${mn(angka(dt, 2))}${mtext('s')}`,
            baca: `delta t sama dengan gamma kali delta t nol, yaitu ${angka(dt, 2)} sekon`,
        },
        {
            mathml: `${mi('L')}${mo('=')}${mfrac(msub(mi('L'), mn(0)), mi('γ'))}${mo('=')}${mfrac(mn(angka(L0, 0)), mn(angka(g, 3)))}${mo('=')}${mn(angka(L, 1))}${mtext('m')}`,
            baca: `L sama dengan L nol per gamma, yaitu ${angka(L, 1)} meter`,
        },
    ];

    const s = sRef.current;
    const n1 = Math.floor(s.ph1);
    const n2 = Math.floor(s.ph2);

    const deskripsi = `Dua jam cahaya. Jam di peron diam, fotonnya naik turun lurus. Jam di kereta bergerak dengan kecepatan ${angka(beta, 2)} kali kecepatan cahaya, fotonnya menempuh jalur zigzag lebih panjang menurut pengamat peron. γ = ${angka(g, 3)}. Jam diam sudah berdetak ${n1} kali, jam kereta ${n2} kali. Kereta sepanjang ${angka(L0, 0)} meter teramati ${angka(L, 1)} meter.`;

    return (
        <SimShell
            panggung={<Panggung gambar={gambar} deskripsi={deskripsi} rasio={16 / 9} tinggiMin={270} />}
            kendaliPutar={
                <PlayBar
                    loop={loop}
                    onUlang={ulang}
                    tanpaLangkah
                    tambahan={
                        <Tombol jenis="utama" onClick={catat}>
                            <IconPencilPlus size={16} stroke={2.5} aria-hidden="true" />
                            Catat pengukuran
                        </Tombol>
                    }
                />
            }
            bacaan={
                <BarisBacaan>
                    <Bacaan label="Faktor γ" nilai={angkaTetap(g, 3)} sorot="lime" />
                    <Bacaan label="Δt untuk Δt₀ = 1 s" nilai={angkaTetap(dt, 2)} satuan="s" />
                    <Bacaan label="Panjang teramati (L)" nilai={angkaTetap(L, 1)} satuan="m" />
                    <Bacaan label="Perbandingan detak (diam : kereta)" nilai={`${n1} : ${n2}`} />
                    <Bacaan label="Detak jam diam" nilai={String(n1)} />
                    <Bacaan label="Detak jam kereta" nilai={String(n2)} />
                </BarisBacaan>
            }
            pengatur={
                <>
                    <Slider label="Kecepatan kereta" simbol="v/c" nilai={beta} min={0} maks={0.99} langkah={0.01} satuan="c" onUbah={setBeta} />
                    <Slider label="Panjang diam kereta" simbol="L₀" nilai={L0} min={20} maks={100} langkah={5} satuan="m" onUbah={setL0} />
                    <Sakelar label="Tampilkan lintasan foton" aktif={tampilJejak} onUbah={setTampilJejak} />
                    <p className="text-xs text-muted">
                        Waktu diperlambat: satu detak jam diam dibuat 1 detik di layar. Jam cahaya sungguhan berdetak jutaan kali lebih cepat. Kedua foton bergerak dengan kelajuan layar yang sama.
                    </p>
                </>
            }
            rumus={
                <RumusHidup
                    baris={barisRumus}
                    catatan="Δt₀ adalah selang waktu jam yang diam terhadap pengamat. Panjang L₀ tidak muncul di rumus γ."
                />
            }
            grafik={
                <Panel judul="Grafik γ terhadap v/c" ikon={<IconChartDots size={18} stroke={2.5} aria-hidden="true" />}>
                    <GrafikHidup
                        ambil={ambilGrafik}
                        rasio={1.7}
                        deskripsi={`Grafik faktor gamma terhadap v per c. Gamma hampir 1 sampai sekitar 0,5 lalu melonjak. Sekarang v per c ${angka(beta, 2)}, gamma ${angka(g, 3)}.`}
                    />
                    <p className="text-xs text-muted mt-2">
                        Titik oranye menandai kecepatan sekarang. γ hampir 1 sampai sekitar 0,5c, lalu naik cepat mendekati c.
                    </p>
                </Panel>
            }
            selidiki={
                <SelidikiHubungan
                    bebas={BEBAS}
                    terikat={TERIKAT}
                    percobaan={percobaan}
                    onHapus={() => setPercobaan([])}
                    ajakan='Tekan "Catat pengukuran", ubah satu besaran saja (misalnya kecepatan), lalu catat lagi. Ulangi dengan 3 nilai atau lebih.'
                />
            }
            tantangan={<Tantangan daftar={TANTANGAN} selesai={selesai} />}
        />
    );
}
