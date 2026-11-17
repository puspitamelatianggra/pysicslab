/* ============================================================
   SIMULASI: Medan Listrik dan Gaya Coulomb (Bab 2-1)
   ============================================================
   Susunan file mengikuti gerak-parabola.tsx:
   1. Tetapan dan fungsi fisika murni (tanpa React).
   2. Komponen: state pengatur → hasil hitung → gambar panggung → <SimShell>.

   Hubungan yang harus bisa ditemukan siswa:
   - jarak r dua kali lebih besar → gaya jadi seperempat (F ∝ 1/r²)
   - muatan q₁ atau q₂ dua kali lebih besar → gaya dua kali lebih besar
   - tanda muatan hanya menentukan arah (tarik atau tolak), bukan besar gaya
   - medan di satu titik adalah jumlah vektor medan kedua muatan
   ============================================================ */

import { IconChartDots, IconClipboardPlus } from '@tabler/icons-react';
import { useEffect, useRef, useState } from 'react';
import {
    angka, angkaIlmiah, angkaTetap, buatSkala, bulat, derajat, gambarSumbu, jepit,
    label, lintasan, OpsiGrafik, panah, Skala, warnaSim,
} from '../../engine';
import {
    Bacaan, BarisBacaan, BarisRumus, Besaran, GrafikHidup, JenisTunjuk, mfrac, mi, mn, mo, msub, msup,
    mtext, Panel, Panggung, Percobaan, RumusHidup, Sakelar, SelidikiHubungan, SimShell,
    Slider, Tantangan, Tombol, useTantangan,
} from '../../ui';

/* ---------- 1. Fisika ---------- */

export const K = 9e9; // N·m²/C²
const MIKRO = 1e-6;

/** Bidang peragaan (meter) */
export const LEBAR = 1.2;
export const TINGGI = 0.75;
const Y_TENGAH = TINGGI / 2;
const X_TENGAH = LEBAR / 2;

export interface Muatan {
    x: number; // m
    y: number; // m
    q: number; // coulomb, bertanda
}

/** Besar gaya Coulomb (N) antara dua muatan (coulomb) yang berjarak r (m). */
export function gayaCoulomb(q1: number, q2: number, r: number): number {
    return (K * Math.abs(q1 * q2)) / (r * r);
}

/** Medan listrik total (N/C) di titik (px, py): jumlah vektor kq/r² dari tiap muatan. */
export function medanTitik(muatan: Muatan[], px: number, py: number): { ex: number; ey: number } {
    let ex = 0;
    let ey = 0;
    for (const m of muatan) {
        const dx = px - m.x;
        const dy = py - m.y;
        // Lantai kecil supaya tepat di muatan tidak jadi tak hingga
        const r2 = Math.max(dx * dx + dy * dy, 1e-6);
        const r = Math.sqrt(r2);
        const e = (K * m.q) / r2;
        ex += (e * dx) / r;
        ey += (e * dy) / r;
    }
    return { ex, ey };
}

export function besarMedan(muatan: Muatan[], px: number, py: number): number {
    const { ex, ey } = medanTitik(muatan, px, py);
    return Math.hypot(ex, ey);
}

/** Posisi mendatar kedua muatan: simetris terhadap pusat bidang. */
export function posisiMuatan(r: number): { x1: number; x2: number } {
    return { x1: X_TENGAH - r / 2, x2: X_TENGAH + r / 2 };
}

/** 1 = (+,+), 2 = (−,−), 3 = (+,−), 4 = (−,+) */
export function kodePasangan(q1: number, q2: number): number {
    if (q1 > 0 && q2 > 0) return 1;
    if (q1 < 0 && q2 < 0) return 2;
    return q1 > 0 ? 3 : 4;
}

/**
 * Menelusuri satu garis medan dari muatan sumber. Muatan positif: ikuti arah E.
 * Muatan negatif: telusuri mundur (melawan E), jadi garis tetap keluar dari sumbernya.
 * Berhenti di tepi bidang atau dekat muatan lain.
 */
export function telusuriGaris(muatan: Muatan[], sumber: number, sudutAwal: number): { x: number; y: number }[] {
    const LANGKAH = 0.008;
    const s = muatan[sumber];
    const tanda = s.q > 0 ? 1 : -1;
    let x = s.x + 0.02 * Math.cos(sudutAwal);
    let y = s.y + 0.02 * Math.sin(sudutAwal);
    const titik = [{ x, y }];
    const arah = (px: number, py: number) => {
        const { ex, ey } = medanTitik(muatan, px, py);
        const e = Math.hypot(ex, ey) || 1;
        return { dx: (tanda * ex) / e, dy: (tanda * ey) / e };
    };
    for (let i = 0; i < 700; i++) {
        const a = arah(x, y);
        const b = arah(x + (a.dx * LANGKAH) / 2, y + (a.dy * LANGKAH) / 2);
        x += b.dx * LANGKAH;
        y += b.dy * LANGKAH;
        titik.push({ x, y });
        if (x < 0 || x > LEBAR || y < 0 || y > TINGGI) break;
        let dekat = false;
        for (let k = 0; k < muatan.length; k++) {
            if (k !== sumber && Math.hypot(x - muatan[k].x, y - muatan[k].y) < 0.04) dekat = true;
        }
        if (dekat) break;
    }
    return titik;
}

/* ---------- 2. Komponen ---------- */

const BEBAS: Besaran[] = [
    { id: 'r', label: 'jarak antarmuatan', simbol: 'r', satuan: 'm', desimal: 2 },
    { id: 'q1', label: 'besar muatan pertama', simbol: '|q₁|', satuan: 'μC', desimal: 0 },
    { id: 'q2', label: 'besar muatan kedua', simbol: '|q₂|', satuan: 'μC', desimal: 0 },
    { id: 'pasangan', label: 'pasangan tanda muatan (1 = ++, 2 = −−, 3 = +−, 4 = −+)', simbol: 'tanda', satuan: '', desimal: 0 },
];

const TERIKAT: Besaran[] = [
    { id: 'gaya', label: 'gaya Coulomb', simbol: 'F', satuan: 'N', desimal: 3 },
    { id: 'medanTengah', label: 'kuat medan di titik tengah', simbol: 'E tengah', satuan: 'N/C', desimal: 0 },
];

const TANTANGAN = [
    { id: 'gaya09', teks: 'Atur muatan dan jarak sampai gaya antarmuatan tepat 0,9 N. Boleh meleset paling banyak 5%.' },
    { id: 'jarakDua', teks: 'Catat dua pengukuran dengan muatan yang sama tetapi jarak yang satu dua kali jarak yang lain. Lihat gayanya jadi seperempat.' },
    { id: 'titikNol', teks: 'Pakai dua muatan sejenis. Letakkan muatan uji di antara keduanya di titik yang medannya hampir nol.' },
];

const SKALA_AWAL = { x: 0.9, y: 0.55 };

type Jenis = 'q1' | 'q2' | 'uji';

export default function MedanListrik() {
    const [q1, setQ1] = useState(2); // μC
    const [q2, setQ2] = useState(-3);
    const [r, setR] = useState(0.5);
    const [tampilPanah, setTampilPanah] = useState(true);
    const [tampilGaris, setTampilGaris] = useState(false);
    const [uji, setUji] = useState(SKALA_AWAL);
    const [percobaan, setPercobaan] = useState<Percobaan[]>([]);
    const [selesai, tandai] = useTantangan();

    // Salinan ref untuk fungsi seret dan gambar
    const rRef = useRef(r);
    rRef.current = r;
    const ujiRef = useRef(uji);
    ujiRef.current = uji;
    const skalaRef = useRef<Skala | null>(null);
    const seretRef = useRef<Jenis | null>(null);

    // Slider muatan melompati nol
    const ubahMuatan = (lama: number, set: (n: number) => void) => (baru: number) => {
        if (baru === 0) set(lama > 0 ? -1 : 1);
        else set(baru);
    };

    const aturUji = (x: number, y: number) => {
        const nilai = {
            x: Math.round(jepit(x, 0, LEBAR) * 100) / 100,
            y: Math.round(jepit(y, 0, TINGGI) * 100) / 100,
        };
        ujiRef.current = nilai;
        setUji(nilai);
    };

    /* ----- Hasil hitung ----- */

    const { x1, x2 } = posisiMuatan(r);
    const muatan: Muatan[] = [
        { x: x1, y: Y_TENGAH, q: q1 * MIKRO },
        { x: x2, y: Y_TENGAH, q: q2 * MIKRO },
    ];
    const F = gayaCoulomb(q1 * MIKRO, q2 * MIKRO, r);
    const tolak = q1 * q2 > 0;
    const eUji = medanTitik(muatan, uji.x, uji.y);
    const besarUji = Math.hypot(eUji.ex, eUji.ey);
    const arahUji = (derajat(Math.atan2(eUji.ey, eUji.ex)) + 360) % 360; // y dunia ke atas
    const eTengah = besarMedan(muatan, X_TENGAH, Y_TENGAH);

    /* ----- Tantangan yang terdeteksi dari keadaan ----- */

    useEffect(() => {
        if (Math.abs(F - 0.9) <= 0.045) tandai('gaya09');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [F]);

    useEffect(() => {
        if (q1 * q2 <= 0) return;
        const antara = uji.x > Math.min(x1, x2) && uji.x < Math.max(x1, x2);
        if (!antara) return;
        const satu = Math.max(
            (K * Math.abs(q1) * MIKRO) / Math.max(1e-6, (uji.x - x1) ** 2 + (uji.y - Y_TENGAH) ** 2),
            (K * Math.abs(q2) * MIKRO) / Math.max(1e-6, (uji.x - x2) ** 2 + (uji.y - Y_TENGAH) ** 2),
        );
        if (besarUji < 0.02 * satu) tandai('titikNol');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [q1, q2, r, uji]);

    const catat = () => {
        const baru: Percobaan = {
            nilai: {
                r, q1: Math.abs(q1), q2: Math.abs(q2), pasangan: kodePasangan(q1, q2),
                gaya: F, medanTengah: eTengah,
            },
        };
        for (const p of percobaan) {
            const q = p.nilai;
            if (q.q1 === baru.nilai.q1 && q.q2 === baru.nilai.q2) {
                const rasio = Math.max(q.r, r) / Math.min(q.r, r);
                if (Math.abs(rasio - 2) < 0.02) tandai('jarakDua');
            }
        }
        setPercobaan([...percobaan, baru]);
    };

    /* ----- Seret di panggung ----- */

    const tunjuk = (jenis: JenisTunjuk, px: number, py: number) => {
        const s = skalaRef.current;
        if (!s) return;
        if (jenis === 'turun') {
            const { x1: a, x2: b } = posisiMuatan(rRef.current);
            const kandidat: { id: Jenis; x: number; y: number }[] = [
                { id: 'uji', x: s.x(ujiRef.current.x), y: s.y(ujiRef.current.y) },
                { id: 'q1', x: s.x(a), y: s.y(Y_TENGAH) },
                { id: 'q2', x: s.x(b), y: s.y(Y_TENGAH) },
            ];
            let terbaik: Jenis | null = null;
            let jarak = 26; // area seret minimal radius 22 px
            for (const k of kandidat) {
                const d = Math.hypot(px - k.x, py - k.y);
                if (d < jarak) {
                    jarak = d;
                    terbaik = k.id;
                }
            }
            seretRef.current = terbaik;
        }
        if (jenis === 'lepas') {
            seretRef.current = null;
            return;
        }
        const seret = seretRef.current;
        if (!seret) return;
        const wx = s.balikX(px);
        const wy = s.balikY(py);
        if (seret === 'uji') aturUji(wx, wy);
        else setR(jepit(Math.round(2 * Math.abs(wx - X_TENGAH) * 100) / 100, 0.1, 1));
    };

    /* ----- Gambar panggung ----- */

    const gambar = (ctx: CanvasRenderingContext2D, w: number, h: number) => {
        const c = warnaSim();
        const sisa = { kiri: 34, kanan: 12, atas: 12, bawah: 28 };
        const sc = Math.min((w - sisa.kiri - sisa.kanan) / LEBAR, (h - sisa.atas - sisa.bawah) / TINGGI);
        const ekstraX = (w - sisa.kiri - sisa.kanan - LEBAR * sc) / 2;
        const ekstraY = (h - sisa.atas - sisa.bawah - TINGGI * sc) / 2;
        const s = buatSkala({
            w, h, xMin: 0, xMaks: LEBAR, yMin: 0, yMaks: TINGGI,
            pad: {
                kiri: sisa.kiri + ekstraX, kanan: sisa.kanan + ekstraX,
                atas: sisa.atas + ekstraY, bawah: sisa.bawah + ekstraY,
            },
        });
        skalaRef.current = s;
        gambarSumbu(ctx, s, { langkahX: 0.2, langkahY: 0.25, labelX: 'x (m)', labelY: 'y (m)' });

        const pos = posisiMuatan(rRef.current);
        const m: Muatan[] = [
            { x: pos.x1, y: Y_TENGAH, q: q1 * MIKRO },
            { x: pos.x2, y: Y_TENGAH, q: q2 * MIKRO },
        ];
        const radius = (q: number) => 7 + 0.5 * Math.abs(q);
        const rad1 = radius(q1);
        const rad2 = radius(q2);
        const p1 = { x: s.x(pos.x1), y: s.y(Y_TENGAH) };
        const p2 = { x: s.x(pos.x2), y: s.y(Y_TENGAH) };

        // Garis medan
        if (tampilGaris) {
            for (let i = 0; i < 2; i++) {
                for (let k = 0; k < 10; k++) {
                    const sudut = (2 * Math.PI * (k + 0.5)) / 10;
                    const titik = telusuriGaris(m, i, sudut).map((t) => ({ x: s.x(t.x), y: s.y(t.y) }));
                    lintasan(ctx, titik, { warna: c.redup, tebal: 1.5 });
                }
            }
        }

        // Panah medan di kisi jarang. Panjang panah berskala logaritmik dan dibatasi.
        if (tampilPanah) {
            const kolom = 12;
            const baris = 8;
            const dx = LEBAR / kolom;
            const dy = TINGGI / baris;
            const maks = Math.min(dx, dy) * sc * 0.85;
            for (let i = 0; i < kolom; i++) {
                for (let j = 0; j < baris; j++) {
                    const wx = (i + 0.5) * dx;
                    const wy = (j + 0.5) * dy;
                    const px = s.x(wx);
                    const py = s.y(wy);
                    if (Math.hypot(px - p1.x, py - p1.y) < rad1 + 8) continue;
                    if (Math.hypot(px - p2.x, py - p2.y) < rad2 + 8) continue;
                    const { ex, ey } = medanTitik(m, wx, wy);
                    const e = Math.hypot(ex, ey);
                    if (e < 1) continue;
                    const frak = jepit((Math.log10(e) - 3.5) / 3.5, 0, 1);
                    const panjang = 7 + (maks - 7) * frak;
                    const ux = ex / e;
                    const uy = -ey / e; // layar: y ke bawah
                    panah(ctx, px - (ux * panjang) / 2, py - (uy * panjang) / 2, px + (ux * panjang) / 2, py + (uy * panjang) / 2, {
                        warna: c.gelap, tebal: 1.8,
                    });
                }
            }
        }

        // Muatan
        const gambarMuatan = (p: { x: number; y: number }, q: number, rad: number) => {
            bulat(ctx, p.x, p.y, rad, { isi: q > 0 ? c.oranye : c.biru, tebal: 2.5 });
            label(ctx, q > 0 ? '+' : '−', p.x, p.y + 0.5, {
                rata: 'center', ukuran: 16, warna: q > 0 ? c.gelap : '#FFFFFF',
            });
        };
        gambarMuatan(p1, q1, rad1);
        gambarMuatan(p2, q2, rad2);

        // Panah gaya pada tiap muatan: sama panjang (hukum III Newton)
        const frakF = jepit((Math.log10(Math.max(F, 1e-6)) + 2) / 4, 0, 1);
        const panjangF = 16 + 24 * frakF;
        const arahKe1 = tolak ? -1 : 1; // arah gaya pada muatan kiri
        const yF1 = p1.y - 30;
        const yF2 = p2.y + 30;
        panah(ctx, p1.x, yF1, p1.x + arahKe1 * panjangF, yF1, { warna: c.gelap, tebal: 3.5 });
        panah(ctx, p2.x, yF2, p2.x - arahKe1 * panjangF, yF2, { warna: c.gelap, tebal: 3.5 });
        label(ctx, 'F', p1.x + (arahKe1 * panjangF) / 2, yF1 - 11, { rata: 'center', ukuran: 12 });
        label(ctx, 'F', p2.x - (arahKe1 * panjangF) / 2, yF2 + 11, { rata: 'center', ukuran: 12 });

        // Muatan uji dan medan di posisinya
        const u = ujiRef.current;
        const pu = { x: s.x(u.x), y: s.y(u.y) };
        const eu = medanTitik(m, u.x, u.y);
        const besar = Math.hypot(eu.ex, eu.ey);
        if (besar > 1) {
            const frak = jepit((Math.log10(besar) - 3.5) / 3.5, 0, 1);
            const panjang = 14 + 30 * frak;
            panah(ctx, pu.x, pu.y, pu.x + (eu.ex / besar) * panjang, pu.y - (eu.ey / besar) * panjang, {
                warna: c.gelap, tebal: 3,
            });
        }
        bulat(ctx, pu.x, pu.y, 6, { isi: c.lime, tebal: 2.5 });
        label(ctx, 'uji', pu.x + 9, pu.y - 12, { ukuran: 11, warna: c.redup, tebal: 500 });

        // Keterangan angka
        label(ctx, `F = ${angka(F, 3)} N`, s.kiri + 8, s.atas + 14, { latar: c.lime, ukuran: 12 });
        label(ctx, `E uji = ${angkaIlmiah(besar, 1)} N/C`, s.kiri + 8, s.bawah - 14, { latar: c.lime, ukuran: 12 });
    };

    /* ----- Grafik F terhadap r ----- */

    const ambilGrafik = (): OpsiGrafik => {
        const c = warnaSim();
        const kurva: { x: number; y: number }[] = [];
        for (let rr = 0.1; rr <= 1.0001; rr += 0.01) kurva.push({ x: rr, y: gayaCoulomb(q1 * MIKRO, q2 * MIKRO, rr) });
        const f = gayaCoulomb(q1 * MIKRO, q2 * MIKRO, rRef.current);
        return {
            seri: [{ nama: 'teori', titik: kurva, gaya: 'putus', warna: c.gelap }],
            penanda: [{ x: rRef.current, y: f }],
            labelX: 'r (m)', labelY: 'F (N)',
            xMin: 0, xMaks: 1, yMin: 0, yMaks: kurva[0].y * 1.08,
        };
    };

    /* ----- Rumus ----- */

    const abs = (isi: string) => `${mo('|')}${isi}${mo('|')}`;
    const q1m = (a: number) => msub(mi('q'), mn(a));
    const barisRumus: BarisRumus[] = [
        {
            mathml: `${mi('F')}${mo('=')}${mfrac(`${mi('k')}${mo('·')}${abs(q1m(1))}${mo('·')}${abs(q1m(2))}`, msup(mi('r'), mn(2)))}`,
            baca: 'F sama dengan k kali nilai mutlak q satu kali nilai mutlak q dua per r kuadrat',
        },
        {
            mathml: `${mo('=')}${mfrac(
                `${mn(9)}${mo('×')}${msup(mn(10), mn(9))}${mo('×')}${mn(Math.abs(q1))}${mo('×')}${mn(Math.abs(q2))}${mo('×')}${msup(mn(10), mn(-12))}`,
                msup(mn(angka(r, 2)), mn(2)),
            )}`,
            baca: `sama dengan 9 kali 10 pangkat 9 kali ${Math.abs(q1)} kali ${Math.abs(q2)} kali 10 pangkat min 12 per ${angka(r, 2)} kuadrat`,
        },
        {
            mathml: `${mo('=')}${mn(angka(F, 3))}${mtext('N')}`,
            baca: `sama dengan ${angka(F, 3)} newton`,
        },
    ];

    /* ----- Ringkasan untuk pembaca layar ----- */

    const deskripsi = `Dua muatan titik berjarak ${angka(r, 2)} meter pada satu garis mendatar: q satu ${q1} mikrocoulomb dan q dua ${q2} mikrocoulomb. Keduanya ${tolak ? 'tolak-menolak' : 'tarik-menarik'} dengan gaya ${angka(F, 3)} newton. Muatan uji di x ${angka(uji.x, 2)} meter dan y ${angka(uji.y, 2)} meter merasakan medan ${angkaIlmiah(besarUji, 1)} newton per coulomb.`;

    const deskripsiGrafik = `Grafik gaya terhadap jarak. Gaya mengecil cepat saat jarak membesar, mengikuti satu per r kuadrat. Saat ini r ${angka(r, 2)} meter dan gaya ${angka(F, 3)} newton.`;

    return (
        <SimShell
            panggung={<Panggung gambar={gambar} deskripsi={deskripsi} onTunjuk={tunjuk} />}
            kendaliPutar={
                <div className="flex flex-wrap items-center gap-3">
                    <Tombol jenis="utama" onClick={catat}>
                        <IconClipboardPlus size={16} stroke={2.5} aria-hidden="true" />
                        Catat pengukuran
                    </Tombol>
                    <p className="text-xs text-muted">Seret muatan atau titik uji di panggung. Panjang panah medan memakai skala logaritmik.</p>
                </div>
            }
            bacaan={
                <BarisBacaan>
                    <Bacaan label="Gaya (F)" nilai={angkaTetap(F, 3)} satuan="N" sorot="lime" />
                    <Bacaan label="Interaksi" nilai={tolak ? 'Tolak-menolak' : 'Tarik-menarik'} />
                    <Bacaan label="Jarak (r)" nilai={angkaTetap(r, 2)} satuan="m" />
                    <Bacaan label="E di muatan uji" nilai={angkaIlmiah(besarUji, 2)} satuan="N/C" />
                    <Bacaan label="Arah E uji" nilai={angkaTetap(arahUji, 0)} satuan="°" />
                </BarisBacaan>
            }
            pengatur={
                <>
                    <Slider label="Muatan pertama" simbol="q₁" nilai={q1} min={-10} maks={10} satuan="μC" onUbah={ubahMuatan(q1, setQ1)} />
                    <Slider label="Muatan kedua" simbol="q₂" nilai={q2} min={-10} maks={10} satuan="μC" onUbah={ubahMuatan(q2, setQ2)} catatan="Muatan tidak bisa bernilai nol. Positif oranye, negatif biru." />
                    <Slider label="Jarak kedua muatan" simbol="r" nilai={r} min={0.1} maks={1} langkah={0.05} satuan="m" desimal={2} onUbah={setR} />
                    <Slider label="Posisi muatan uji, mendatar" simbol="x" nilai={uji.x} min={0} maks={LEBAR} langkah={0.01} satuan="m" desimal={2} onUbah={(v) => aturUji(v, ujiRef.current.y)} />
                    <Slider label="Posisi muatan uji, tegak" simbol="y" nilai={uji.y} min={0} maks={TINGGI} langkah={0.01} satuan="m" desimal={2} onUbah={(v) => aturUji(ujiRef.current.x, v)} />
                    <Sakelar label="Tampilkan panah medan" aktif={tampilPanah} onUbah={setTampilPanah} />
                    <Sakelar label="Tampilkan garis medan" aktif={tampilGaris} onUbah={setTampilGaris} />
                </>
            }
            rumus={
                <RumusHidup
                    baris={barisRumus}
                    catatan="Muatan ditulis dalam μC (1 μC = 10⁻⁶ C), k = 9 × 10⁹ N·m²/C². Tanda muatan hanya menentukan arah gaya, jadi rumus memakai nilai mutlak."
                />
            }
            grafik={
                <Panel judul="Gaya terhadap jarak" ikon={<IconChartDots size={18} stroke={2.5} aria-hidden="true" />}>
                    <GrafikHidup ambil={ambilGrafik} rasio={1.9} deskripsi={deskripsiGrafik} keterangan={[{ nama: 'Kurva 1/r² untuk q₁ dan q₂ sekarang', putus: true }]} />
                    <p className="text-xs text-muted mt-2">Titik oranye menandai jarak sekarang. Ubah r dan lihat titiknya meluncur di kurva.</p>
                </Panel>
            }
            selidiki={
                <SelidikiHubungan
                    bebas={BEBAS}
                    terikat={TERIKAT}
                    percobaan={percobaan}
                    onHapus={() => setPercobaan([])}
                    ajakan="Tekan Catat pengukuran, ubah satu besaran saja (misalnya r), lalu catat lagi. Ulangi sampai tiga kali. Untuk menyelidiki tanda muatan, balik tanda q₁ atau q₂ dan catat: gayanya tetap sama."
                />
            }
            tantangan={<Tantangan daftar={TANTANGAN} selesai={selesai} />}
        />
    );
}
