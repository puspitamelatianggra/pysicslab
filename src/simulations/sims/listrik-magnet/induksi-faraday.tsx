/* ============================================================
   SIMULASI: Induksi Faraday (Bab 2-4)
   ============================================================
   Susunan file mengikuti gerak-parabola.tsx:
   1. Tetapan dan fungsi fisika murni (tanpa React).
   2. Komponen: state pengatur → keadaan gerak (useRef) → loop
      → fungsi gambar panggung → <SimShell>.

   Ini model sederhana, bukan hitungan medan magnet yang sebenarnya:
   - magnet bergerak x(t) = A·sin(2πf·t) relatif pusat kumparan
   - medan rata-rata di kumparan B(x) = ±B₀ / (1 + (x/d)²)
   - fluks Φ = B(x) · luas, ggl ε = −N·dΦ/dt (dihitung dengan aturan rantai)

   Hubungan yang harus bisa ditemukan siswa:
   - magnet lebih cepat → ggl maksimum naik sebanding, fluks maksimum tetap
   - lilitan N naik → ggl naik sebanding
   - magnet diam → ggl nol walau fluks besar
   - ggl besar saat fluks berubah cepat, nol saat fluks di puncak
   - kutub atau arah gerak dibalik → arah arus berbalik (hukum Lenz)
   ============================================================ */

import { IconChartDots, IconClipboardPlus } from '@tabler/icons-react';
import { useEffect, useRef, useState } from 'react';
import {
    angka, angkaTetap, buatSkala, bulat, garis, gerakDikurangi, jepit, kotak, label, lintasan,
    OpsiGrafik, panah, rad, Skala, useSimLoop, warnaSim,
} from '../../engine';
import {
    Bacaan, BarisBacaan, BarisRumus, Besaran, GrafikHidup, JenisTunjuk, mfrac, mi, mn, mo, mtext,
    Panel, Panggung, Percobaan, PlayBar, RumusHidup, Sakelar, SelidikiHubungan, SimShell, Slider,
    Tantangan, Tombol, useTantangan,
} from '../../ui';

/* ---------- 1. Fisika ---------- */

/** Simpangan gerak magnet (m) dan jarak redam medan (m) */
export const AMP = 0.12;
export const D_MEDAN = AMP / 2;
const CM2 = 1e-4;

export interface Parameter {
    f: number; // Hz
    n: number; // lilitan
    b0: number; // T
    luas: number; // cm²
    tanda: 1 | -1; // −1 kalau kutub dibalik
}

/** Medan rata-rata di kumparan (T) saat pusat magnet di x. Tanda mengikuti arah kutub. */
export function medanRata(x: number, b0: number, tanda: 1 | -1 = 1): number {
    return (tanda * b0) / (1 + (x / D_MEDAN) ** 2);
}

/** Fluks (Wb) lewat kumparan seluas `luas` cm². */
export function fluks(x: number, b0: number, luas: number, tanda: 1 | -1 = 1): number {
    return medanRata(x, b0, tanda) * luas * CM2;
}

/** Turunan fluks terhadap posisi, dΦ/dx (Wb/m), dihitung analitis. */
export function turunanFluks(x: number, b0: number, luas: number, tanda: 1 | -1 = 1): number {
    const u = (x / D_MEDAN) ** 2;
    return (-tanda * b0 * luas * CM2 * 2 * x) / (D_MEDAN * D_MEDAN * (1 + u) ** 2);
}

/** Posisi dan kecepatan magnet pada waktu t (gerak bolak-balik). */
export function gerakMagnet(f: number, t: number): { x: number; v: number } {
    const w = 2 * Math.PI * f;
    return { x: AMP * Math.sin(w * t), v: AMP * w * Math.cos(w * t) };
}

/** ggl sesaat (V) lewat aturan rantai: ε = −N·(dΦ/dx)·(dx/dt). */
export function ggl(x: number, v: number, p: Parameter): number {
    return -p.n * turunanFluks(x, p.b0, p.luas, p.tanda) * v;
}

/**
 * Bagian bentuk dari ggl maksimum: nilai terbesar |g′(x)·cos θ| dengan x = A·sin θ
 * untuk g(x) = 1/(1 + (x/d)²). Tidak bergantung pada f, N, B₀, dan luas.
 */
export const BENTUK_MAKS = (() => {
    let maks = 0;
    const langkah = 20000;
    for (let i = 0; i < langkah; i++) {
        const th = (2 * Math.PI * i) / langkah;
        const x = AMP * Math.sin(th);
        const g = (-2 * x) / (D_MEDAN * D_MEDAN * (1 + (x / D_MEDAN) ** 2) ** 2);
        maks = Math.max(maks, Math.abs(g * Math.cos(th)));
    }
    return maks;
})();

/** ggl maksimum dalam satu periode (V), dari parameter, bukan dari sampel layar. */
export function gglMaks(p: Parameter): number {
    return p.n * p.b0 * p.luas * CM2 * 2 * Math.PI * p.f * AMP * BENTUK_MAKS;
}

/** Fluks maksimum (Wb) = B₀ × luas, tidak bergantung pada laju magnet. */
export function fluksMaks(p: Parameter): number {
    return p.b0 * p.luas * CM2;
}

/* ---------- 2. Komponen ---------- */

const BEBAS: Besaran[] = [
    { id: 'f', label: 'frekuensi gerak magnet', simbol: 'f', satuan: 'Hz', desimal: 1 },
    { id: 'n', label: 'jumlah lilitan', simbol: 'N', satuan: '', desimal: 0 },
    { id: 'b0', label: 'kuat magnet', simbol: 'B₀', satuan: 'T', desimal: 2 },
    { id: 'luas', label: 'luas kumparan', simbol: 'A', satuan: 'cm²', desimal: 0 },
    { id: 'balik', label: 'kutub dibalik (0 = tidak, 1 = ya)', simbol: 'balik', satuan: '', desimal: 0 },
];

const TERIKAT: Besaran[] = [
    { id: 'gglMaks', label: 'ggl maksimum', simbol: 'ε maks', satuan: 'mV', desimal: 2 },
    { id: 'fluksMaks', label: 'fluks maksimum', simbol: 'Φ maks', satuan: 'mWb', desimal: 3 },
    { id: 'arah', label: 'arah ggl saat magnet mendekat dari kiri (+1 searah jarum, −1 berlawanan)', simbol: 'arah', satuan: '', desimal: 0 },
];

const TANTANGAN = [
    { id: 'gglTepat', teks: 'Atur kumparan dan magnet sampai ggl maksimum tepat 50 mV. Boleh meleset paling banyak 5%.' },
    { id: 'duaKali', teks: 'Catat dua pengukuran dengan N, kuat magnet, dan luas yang sama, tetapi frekuensi yang satu dua kali yang lain. Lihat ggl maksimumnya ikut jadi dua kali.' },
    { id: 'seretBalik', teks: 'Setel frekuensi ke 0, lalu gerakkan magnet dengan tangan atau slider posisi sampai jarum galvanometer menyimpang ke kanan dan ke kiri.' },
];

const RIWAYAT_DETIK = 4;
const LANGKAH_RIWAYAT = 2; // simpan satu titik tiap 2 langkah loop (60 per sekon)
const BATAS_SERET = 0.18;
const LEBAR_DUNIA = 0.56;

interface Keadaan {
    t: number;
    theta: number;
    bergerak: boolean;
    x: number;
    xLalu: number;
    v: number;
    phi: number; // Wb
    eps: number; // V
    epsMaksTercatat: number;
    hitung: number;
    seret: boolean;
    geserSeret: number;
    lihatPositif: boolean;
    lihatNegatif: boolean;
}

function keadaanAwal(): Keadaan {
    return {
        t: 0, theta: 0, bergerak: false, x: -0.1, xLalu: -0.1, v: 0, phi: 0, eps: 0, epsMaksTercatat: 0,
        hitung: 0, seret: false, geserSeret: 0, lihatPositif: false, lihatNegatif: false,
    };
}

export default function InduksiFaraday() {
    const [f, setF] = useState(0.5);
    const [n, setN] = useState(100);
    const [b0, setB0] = useState(0.5);
    const [luas, setLuas] = useState(20);
    const [balik, setBalik] = useState(false);
    const [percobaan, setPercobaan] = useState<Percobaan[]>([]);
    const [selesai, tandai] = useTantangan();

    const parameter: Parameter = { f, n, b0, luas, tanda: balik ? -1 : 1 };
    const paramRef = useRef(parameter);
    paramRef.current = parameter;

    const st = useRef<Keadaan>(keadaanAwal());
    const riwayat = useRef<{ t: number[]; phi: number[]; eps: number[] }>({ t: [], phi: [], eps: [] });
    const skalaRef = useRef<Skala | null>(null);
    const tandaiRef = useRef(tandai);
    tandaiRef.current = tandai;

    const loop = useSimLoop((dt) => {
        const p = paramRef.current;
        const k = st.current;
        let x: number;
        let v: number;
        if (p.f > 0) {
            if (!k.bergerak) {
                k.theta = Math.asin(jepit(k.x / AMP, -1, 1));
                k.bergerak = true;
            }
            k.theta += 2 * Math.PI * p.f * dt;
            x = AMP * Math.sin(k.theta);
            v = AMP * 2 * Math.PI * p.f * Math.cos(k.theta);
            k.x = x;
            k.v = v;
        } else {
            k.bergerak = false;
            x = k.x;
            // Kecepatan seretan dihaluskan supaya tidak berkedip antara dua bingkai
            const mentah = (x - k.xLalu) / dt;
            k.v = Math.abs(k.v * 0.8 + mentah * 0.2) < 1e-4 ? 0 : k.v * 0.8 + mentah * 0.2;
            v = k.v;
        }
        k.xLalu = x;
        k.t += dt;
        k.phi = fluks(x, p.b0, p.luas, p.tanda);
        k.eps = ggl(x, v, p);
        k.epsMaksTercatat = Math.max(k.epsMaksTercatat, Math.abs(k.eps));

        if (p.f === 0 && Math.abs(k.eps) > 1e-3) {
            if (k.eps > 0) k.lihatPositif = true;
            else k.lihatNegatif = true;
            if (k.lihatPositif && k.lihatNegatif) tandaiRef.current('seretBalik');
        }

        k.hitung++;
        if (k.hitung % LANGKAH_RIWAYAT === 0) {
            const r = riwayat.current;
            r.t.push(k.t);
            r.phi.push(k.phi);
            r.eps.push(k.eps);
            while (r.t.length > 0 && r.t[0] < k.t - RIWAYAT_DETIK - 0.5) {
                r.t.shift();
                r.phi.shift();
                r.eps.shift();
            }
        }
    });

    // Aliran langsung berjalan, kecuali pengguna meminta animasi dikurangi
    useEffect(() => {
        if (!gerakDikurangi()) loop.mainkan();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Pengaturan diubah: ggl maksimum "sejauh ini" mulai dihitung lagi
    useEffect(() => {
        st.current.epsMaksTercatat = 0;
    }, [f, n, b0, luas, balik]);

    useEffect(() => {
        if (f > 0 && Math.abs(gglMaks(parameter) - 0.05) <= 0.0025) tandai('gglTepat');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [f, n, b0, luas, balik]);

    const ulang = () => {
        const lama = st.current;
        st.current = { ...keadaanAwal(), x: lama.x };
        riwayat.current = { t: [], phi: [], eps: [] };
        loop.segarkan();
    };

    const catat = () => {
        const baru: Percobaan = {
            nilai: {
                f, n, b0, luas, balik: balik ? 1 : 0,
                gglMaks: gglMaks(parameter) * 1000,
                fluksMaks: fluksMaks(parameter) * 1000,
                // Magnet mendekat dari kiri: x < 0 dan v > 0, jadi tanda ε = −tanda kutub
                arah: balik ? 1 : -1,
            },
        };
        for (const p of percobaan) {
            const q = p.nilai;
            if (q.n === n && q.b0 === b0 && q.luas === luas && q.f > 0 && f > 0) {
                const rasio = Math.max(q.f, f) / Math.min(q.f, f);
                if (Math.abs(rasio - 2) < 0.01) tandai('duaKali');
            }
        }
        setPercobaan([...percobaan, baru]);
    };

    /* ----- Seret magnet ----- */

    const tunjuk = (jenis: JenisTunjuk, px: number, py: number) => {
        const s = skalaRef.current;
        const k = st.current;
        if (!s || paramRef.current.f > 0) return;
        if (jenis === 'turun') {
            const sx = s.x(k.x);
            const u = ukuran(s.kanan + 10, s.bawah + 10);
            if (Math.abs(px - sx) < u.panjangMagnet / 2 + 12 && Math.abs(py - u.yc) < Math.max(22, u.tinggiMagnet / 2 + 10)) {
                k.seret = true;
                k.geserSeret = s.balikX(px) - k.x;
            }
            return;
        }
        if (jenis === 'lepas') {
            k.seret = false;
            return;
        }
        if (k.seret) {
            k.x = jepit(Math.round((s.balikX(px) - k.geserSeret) * 1000) / 1000, -BATAS_SERET, BATAS_SERET);
            loop.segarkan();
        }
    };

    /* ----- Gambar panggung ----- */

    const gambar = (ctx: CanvasRenderingContext2D, w: number, h: number) => {
        const c = warnaSim();
        const p = paramRef.current;
        const k = st.current;
        const s = buatSkala({
            w, h, xMin: -LEBAR_DUNIA / 2, xMaks: LEBAR_DUNIA / 2, yMin: 0, yMaks: 1,
            pad: { kiri: 10, kanan: 10, atas: 10, bawah: 10 },
        });
        skalaRef.current = s;
        const u = ukuran(w, h);
        const xc = s.x(0);
        const yc = u.yc;
        const ukLabel = jepit(h / 30, 11, 15);

        // Magnet batang: kiri S (biru), kanan U (oranye); dibalik kalau tanda −1
        const mx = s.x(k.x);
        const pj = u.panjangMagnet / 2;
        const kiriUtara = p.tanda < 0;
        const ukHuruf = jepit(u.tinggiMagnet * 0.6, 12, 22);
        kotak(ctx, mx - pj, yc - u.tinggiMagnet / 2, pj, u.tinggiMagnet, { isi: kiriUtara ? c.oranye : c.biru, tebal: 2.5 });
        kotak(ctx, mx, yc - u.tinggiMagnet / 2, pj, u.tinggiMagnet, { isi: kiriUtara ? c.biru : c.oranye, tebal: 2.5 });
        label(ctx, kiriUtara ? 'U' : 'S', mx - pj / 2, yc + 1, { rata: 'center', ukuran: ukHuruf, warna: kiriUtara ? c.gelap : '#FFFFFF' });
        label(ctx, kiriUtara ? 'S' : 'U', mx + pj / 2, yc + 1, { rata: 'center', ukuran: ukHuruf, warna: kiriUtara ? '#FFFFFF' : c.gelap });

        // Kumparan: deret lilitan (jumlah yang digambar dibatasi 6 sampai 14)
        const gambarLilitan = jepit(Math.round(6 + ((p.n - 10) / 190) * 8), 6, 14);
        const rx = jepit((u.panjangKumparan / gambarLilitan) * 0.9, 3, 0.06 * h);
        const sisiLilitan = u.panjangKumparan - 2 * rx;
        ctx.save();
        ctx.strokeStyle = c.gelap;
        ctx.lineWidth = 2.5;
        for (let i = 0; i < gambarLilitan; i++) {
            const lx = xc - sisiLilitan / 2 + (sisiLilitan * i) / (gambarLilitan - 1);
            ctx.beginPath();
            ctx.ellipse(lx, yc, rx, u.tinggiKumparan / 2, 0, 0, Math.PI * 2);
            ctx.stroke();
        }
        ctx.restore();

        // Galvanometer dengan skala penuh yang berubah per dekade (seperti saklar batas ukur)
        const gm = { x: xc, y: u.yGalv, r: u.rGalv };
        const skalaPenuh = skalaGalvanometer(p);
        const eps = k.eps;
        const yKawat = u.bawahKumparan + u.jarakKawat;
        const xLuar = gm.r + Math.max(26, 0.06 * w);
        const ujungKumparan = u.panjangKumparan / 2;

        label(ctx, `N = ${p.n}`, xc, (u.bawahKumparan + yKawat) / 2, { rata: 'center', ukuran: Math.min(ukLabel, 13), latar: c.lime });

        // Kawat dari kumparan ke galvanometer
        const kawatKiri = [
            { x: xc - ujungKumparan, y: u.bawahKumparan },
            { x: xc - ujungKumparan, y: yKawat },
            { x: xc - xLuar, y: yKawat },
            { x: xc - xLuar, y: gm.y },
            { x: gm.x - gm.r, y: gm.y },
        ];
        const kawatKanan = kawatKiri.map((t) => ({ x: 2 * xc - t.x, y: t.y }));
        lintasan(ctx, kawatKiri, { tebal: 2.5 });
        lintasan(ctx, kawatKanan, { tebal: 2.5 });

        // Panah arah arus: ε > 0 turun di kawat kiri dan naik di kawat kanan
        const ada = Math.abs(eps) > 0.02 * skalaPenuh;
        if (ada) {
            const arah = eps > 0 ? 1 : -1;
            const yMid = (gm.y + yKawat) / 2;
            const sisi = Math.max(10, 0.32 * (gm.y - yKawat));
            panah(ctx, xc - xLuar, yMid - arah * sisi, xc - xLuar, yMid + arah * sisi, { warna: c.oranye, tebal: 4 });
            panah(ctx, xc + xLuar, yMid + arah * sisi, xc + xLuar, yMid - arah * sisi, { warna: c.oranye, tebal: 4 });

            // Medan induksi kumparan: melawan perubahan fluks. ε > 0 berarti medan induksi ke kanan.
            const ya = u.atasKumparan - Math.max(14, 0.06 * h);
            const sisiB = Math.max(20, 0.07 * w);
            panah(ctx, xc - arah * sisiB, ya, xc + arah * sisiB, ya, { warna: c.gelap, tebal: 4 });
            label(ctx, 'B induksi', xc, ya - 15, { rata: 'center', ukuran: Math.min(ukLabel, 13), latar: c.latar, bingkai: false });
        }

        // Galvanometer
        bulat(ctx, gm.x, gm.y, gm.r, { isi: c.krem, tebal: 2.5 });
        for (const sudut of [-60, -30, 0, 30, 60]) {
            const a = rad(sudut - 90);
            garis(ctx, gm.x + Math.cos(a) * (gm.r * 0.74), gm.y + Math.sin(a) * (gm.r * 0.74), gm.x + Math.cos(a) * (gm.r * 0.92), gm.y + Math.sin(a) * (gm.r * 0.92), { tebal: 2 });
        }
        const sudutJarum = jepit(eps / skalaPenuh, -1, 1) * 60;
        const aj = rad(sudutJarum - 90);
        garis(ctx, gm.x, gm.y, gm.x + Math.cos(aj) * (gm.r * 0.82), gm.y + Math.sin(aj) * (gm.r * 0.82), { tebal: 3.5 });
        bulat(ctx, gm.x, gm.y, Math.max(4.5, gm.r * 0.1), { isi: c.gelap, tebal: 1.5 });
        label(ctx, 'G', gm.x, gm.y + gm.r * 0.5, { rata: 'center', ukuran: ukLabel });
        label(ctx, `skala penuh ${angka(skalaPenuh * (skalaPenuh < 1 ? 1000 : 1), 0)} ${skalaPenuh < 1 ? 'mV' : 'V'}`, gm.x, h - 9, {
            rata: 'center', ukuran: Math.min(ukLabel, 12), tebal: 500, warna: c.redup,
        });

        // Petunjuk seret
        if (p.f === 0) {
            label(ctx, 'Seret magnet', s.kiri + 4, 16, { ukuran: Math.min(ukLabel, 13), latar: c.lime });
        }
    };

    /* ----- Grafik bergulir: Φ dan ε dengan sumbu waktu sejajar ----- */

    const satuanEps = (parameter.f > 0 ? gglMaks(parameter) : 0.3) < 1 ? 'mV' : 'V';
    const faktorEps = satuanEps === 'mV' ? 1000 : 1;

    const ambilFluks = (): OpsiGrafik => {
        const r = riwayat.current;
        const p = paramRef.current;
        const tKini = st.current.t;
        const fm = fluksMaks(p) * 1000;
        return {
            seri: [{ nama: 'Φ', titik: r.t.map((t, i) => ({ x: t, y: r.phi[i] * 1000 })) }],
            labelX: 't (s)', labelY: 'Φ (mWb)',
            xMin: tKini - RIWAYAT_DETIK, xMaks: tKini,
            yMin: p.tanda > 0 ? 0 : -1.1 * fm, yMaks: p.tanda > 0 ? 1.1 * fm : 0,
            penanda: r.t.length ? [{ x: tKini, y: st.current.phi * 1000 }] : [],
        };
    };

    const ambilEps = (): OpsiGrafik => {
        const r = riwayat.current;
        const p = paramRef.current;
        const tKini = st.current.t;
        const fak = (p.f > 0 ? gglMaks(p) : 0.3) < 1 ? 1000 : 1;
        let batas = p.f > 0 ? gglMaks(p) : 0;
        for (const e of r.eps) batas = Math.max(batas, Math.abs(e));
        batas = Math.max(batas, 1e-6) * 1.1 * fak;
        return {
            seri: [{ nama: 'ε', titik: r.t.map((t, i) => ({ x: t, y: r.eps[i] * fak })), warna: warnaSim().gelap }],
            labelX: 't (s)', labelY: `ε (${fak === 1000 ? 'mV' : 'V'})`,
            xMin: tKini - RIWAYAT_DETIK, xMaks: tKini, yMin: -batas, yMaks: batas,
            penanda: r.t.length ? [{ x: tKini, y: st.current.eps * fak }] : [],
        };
    };

    /* ----- Bacaan dan rumus ----- */

    const k = st.current;
    const fmtEps = (v: number, d = 2) => angkaTetap(v * faktorEps, d);
    const laju = Math.abs(k.v);

    // dΦ/dt sesaat dari ε: ΔΦ/Δt = −ε/N
    const lajuFluks = -k.eps / n; // Wb/s
    const lajuFluksM = lajuFluks * 1000;
    const angkaBertanda = (v: number, d: number) => (v < 0 ? `${mo('−')}${mn(angka(-v, d))}` : mn(angka(v, d)));

    const barisRumus: BarisRumus[] = [
        {
            mathml: `${mi('ε')}${mo('=')}${mo('−')}${mi('N')}${mo('·')}${mfrac(`${mi('Δ')}${mi('Φ')}`, `${mi('Δ')}${mi('t')}`)}`,
            baca: 'epsilon sama dengan min N kali delta fluks per delta t',
        },
        {
            mathml: `${mo('=')}${mo('−')}${mn(n)}${mo('×')}${angkaBertanda(lajuFluksM, 2)}${mtext('mWb/s')}`,
            baca: `sama dengan min ${n} kali ${angka(lajuFluksM, 2)} miliweber per sekon`,
        },
        {
            mathml: `${mo('=')}${angkaBertanda(k.eps * faktorEps, 2)}${mtext(satuanEps)}`,
            baca: `sama dengan ${angka(k.eps * faktorEps, 2)} ${satuanEps === 'mV' ? 'milivolt' : 'volt'}`,
        },
    ];

    const catatanRumus = 'Angka di rumus ini nilai sesaat dan berubah terus. Saat Φ di puncak, ΔΦ/Δt nol, jadi ε juga nol. Ini model sederhana, bukan hitungan medan yang sebenarnya.';

    /* ----- Ringkasan untuk pembaca layar ----- */

    const arahArus = Math.abs(k.eps) <= 0.02 * skalaGalvanometer(parameter)
        ? 'jarum galvanometer hampir di nol'
        : k.eps > 0 ? 'jarum galvanometer menyimpang ke kanan' : 'jarum galvanometer menyimpang ke kiri';
    const deskripsi = `Magnet batang dengan kutub ${balik ? 'utara di kiri' : 'utara di kanan'} ${f > 0 ? `bergerak bolak-balik ${angka(f, 1)} kali per sekon` : 'diam, bisa digeser dengan tangan'} di dekat kumparan ${n} lilitan. Magnet ada di ${angka(k.x * 100, 0)} sentimeter dari pusat kumparan. Fluks ${angka(k.phi * 1000, 3)} miliweber, ggl ${angka(k.eps * faktorEps, 2)} ${satuanEps === 'mV' ? 'milivolt' : 'volt'}, ${arahArus}.`;

    const deskripsiFluks = `Grafik fluks terhadap waktu selama ${RIWAYAT_DETIK} sekon terakhir. Fluks saat ini ${angka(k.phi * 1000, 3)} miliweber dan paling besar ${angka(fluksMaks(parameter) * 1000, 3)} miliweber saat magnet tepat di pusat kumparan.`;
    const deskripsiEps = `Grafik ggl terhadap waktu dengan sumbu waktu yang sama. ggl saat ini ${angka(k.eps * faktorEps, 2)} ${satuanEps === 'mV' ? 'milivolt' : 'volt'}. ggl terbesar saat fluks berubah paling cepat dan nol saat fluks di puncak.`;

    return (
        <SimShell
            panggung={<Panggung gambar={gambar} deskripsi={deskripsi} onTunjuk={tunjuk} rasio={16 / 9} tinggiMin={250} />}
            kendaliPutar={
                <div className="space-y-3">
                    <PlayBar loop={loop} onUlang={ulang} labelMulai="Gerakkan" tanpaLangkah />
                    <div className="flex flex-wrap items-center gap-3">
                        <Tombol jenis="utama" onClick={catat}>
                            <IconClipboardPlus size={16} stroke={2.5} aria-hidden="true" />
                            Catat pengukuran
                        </Tombol>
                        <p className="text-xs text-muted">Yang dicatat: ggl maksimum dalam satu periode gerak, dihitung dari pengaturanmu.</p>
                    </div>
                </div>
            }
            bacaan={
                <BarisBacaan>
                    <Bacaan label="Fluks (Φ)" nilai={angkaTetap(k.phi * 1000, 3)} satuan="mWb" />
                    <Bacaan label="ggl (ε)" nilai={fmtEps(k.eps)} satuan={satuanEps} sorot="lime" />
                    <Bacaan label="ggl maksimum sejauh ini" nilai={fmtEps(k.epsMaksTercatat)} satuan={satuanEps} />
                    <Bacaan label="Laju magnet" nilai={angkaTetap(laju, 2)} satuan="m/s" />
                </BarisBacaan>
            }
            pengatur={
                <>
                    <Slider label="Frekuensi gerak magnet" simbol="f" nilai={f} min={0} maks={2} langkah={0.1} satuan="Hz" desimal={1} onUbah={setF} catatan="0 berarti magnet diam." />
                    <Slider label="Jumlah lilitan" simbol="N" nilai={n} min={10} maks={200} langkah={10} onUbah={setN} />
                    <Slider label="Kuat magnet" simbol="B₀" nilai={b0} min={0.1} maks={1} langkah={0.1} satuan="T" desimal={1} onUbah={setB0} />
                    <Slider label="Luas penampang kumparan" simbol="A" nilai={luas} min={10} maks={50} langkah={5} satuan="cm²" onUbah={setLuas} />
                    <Slider
                        label="Posisi magnet"
                        simbol="x"
                        nilai={Math.round(k.x * 100) / 100}
                        min={-BATAS_SERET}
                        maks={BATAS_SERET}
                        langkah={0.01}
                        satuan="m"
                        desimal={2}
                        nonaktif={f > 0}
                        onUbah={(v) => { st.current.x = v; loop.segarkan(); }}
                        catatan={f > 0 ? 'Aktif kalau frekuensi 0. Bisa juga menyeret magnet di panggung.' : undefined}
                    />
                    <Sakelar label="Balik kutub magnet" aktif={balik} onUbah={setBalik} teksAktif="Dibalik" teksMati="Normal" />
                </>
            }
            rumus={<RumusHidup baris={barisRumus} catatan={catatanRumus} />}
            grafik={
                <Panel judul="Fluks dan ggl terhadap waktu" ikon={<IconChartDots size={18} stroke={2.5} aria-hidden="true" />}>
                    <div className="space-y-3">
                        <GrafikHidup ambil={ambilFluks} rasio={2.6} deskripsi={deskripsiFluks} />
                        <GrafikHidup ambil={ambilEps} rasio={2.6} deskripsi={deskripsiEps} />
                    </div>
                    <p className="text-xs text-muted mt-2">Sumbu waktu kedua grafik sejajar. Bandingkan: ε besar saat Φ berubah cepat, ε nol saat Φ di puncak.</p>
                </Panel>
            }
            selidiki={
                <SelidikiHubungan
                    bebas={BEBAS}
                    terikat={TERIKAT}
                    percobaan={percobaan}
                    onHapus={() => setPercobaan([])}
                    ajakan="Tekan Catat pengukuran, ubah satu besaran saja (misalnya f), lalu catat lagi. Ulangi tiga kali atau lebih. Frekuensi 0 berarti magnet diam, jadi ggl maksimumnya nol."
                />
            }
            tantangan={<Tantangan daftar={TANTANGAN} selesai={selesai} />}
        />
    );
}

/** Ukuran adegan (piksel) yang mengikuti ukuran panggung w × h. */
function ukuran(w: number, h: number) {
    const tinggiKumparan = 0.38 * h;
    const yc = 0.37 * h;
    const atasKumparan = yc - tinggiKumparan / 2;
    const bawahKumparan = yc + tinggiKumparan / 2;
    const rGalv = 0.13 * h;
    return {
        yc,
        tinggiKumparan,
        panjangKumparan: 0.17 * w,
        atasKumparan,
        bawahKumparan,
        tinggiMagnet: 0.4 * tinggiKumparan,
        panjangMagnet: 0.22 * w,
        rGalv,
        yGalv: 0.78 * h,
        jarakKawat: Math.max(28, 0.1 * h),
    };
}

/** Skala penuh galvanometer (V): pangkat 10 terkecil yang memuat ggl maksimum. Magnet diam: 1 V. */
export function skalaGalvanometer(p: Parameter): number {
    const maks = p.f > 0 ? gglMaks(p) : 0.3;
    if (maks <= 0) return 1;
    return Math.pow(10, Math.ceil(Math.log10(maks) - 1e-9));
}
