/* ============================================================
   SIMULASI: Efek Fotolistrik (Bab 4-3)
   ============================================================
   Susunan file: (1) fisika murni, (2) komponen React, (3) pembantu MathML.

   Hubungan yang harus bisa ditemukan siswa:
   - frekuensi cahaya naik → Eₖ maks naik secara linear (garis lurus)
   - intensitas naik → arus naik sebanding, tetapi Eₖ maks tetap
   - di bawah frekuensi ambang tidak ada elektron, berapa pun intensitasnya
   - fungsi kerja lebih besar → frekuensi ambang lebih besar
   ============================================================ */

import { IconChartDots, IconPencilPlus } from '@tabler/icons-react';
import { useEffect, useRef, useState } from 'react';
import {
    angka, angkaIlmiah, angkaTetap, bulat, Ctx, garis, gerakDikurangi,
    jepit, kotak, label, OpsiGrafik, useSimLoop, warnaSim,
} from '../../engine';
import {
    Bacaan, BarisBacaan, BarisRumus, Besaran, GrafikHidup, mfrac, mi, mn, mo, mtext, msub, msup,
    Panel, Panggung, Percobaan, Pilihan, PlayBar, RumusHidup, SelidikiHubungan, SimShell,
    Slider, Tantangan, Tombol, useTantangan,
} from '../../ui';

/* ---------- 1. Fisika ---------- */

export const H_EV = 4.136e-15; // tetapan Planck, eV·s
export const C_CAHAYA = 2.998e8; // m/s

export interface Logam {
    id: string;
    nama: string;
    /** fungsi kerja, eV */
    W0: number;
}

export const LOGAM: Logam[] = [
    { id: 'sesium', nama: 'Sesium', W0: 2.1 },
    { id: 'natrium', nama: 'Natrium', W0: 2.3 },
    { id: 'seng', nama: 'Seng', W0: 4.3 },
    { id: 'tembaga', nama: 'Tembaga', W0: 4.7 },
];

/** Energi satu foton (eV) untuk frekuensi f (Hz). */
export const energiFoton = (f: number) => H_EV * f;

/** Energi kinetik maksimum elektron (eV). 0 bila tidak ada elektron yang lepas. */
export const ekMaks = (f: number, W0: number) => Math.max(0, H_EV * f - W0);

/** Frekuensi ambang (Hz). */
export const fAmbang = (W0: number) => W0 / H_EV;

/** Panjang gelombang (nm) untuk frekuensi f (Hz). */
export const panjangGelombangNm = (f: number) => (C_CAHAYA / f) * 1e9;

/** Potensial henti (V): numerik sama dengan Eₖ maks dalam eV. */
export const potensialHenti = (f: number, W0: number) => ekMaks(f, W0);

/**
 * Arus relatif. 1 berarti intensitas 100 % tanpa tegangan penghenti.
 * Elektron lepas dengan energi 0 sampai Eₖ maks secara merata, jadi arus turun
 * linear dari nilai penuh (V = 0) sampai nol saat V mencapai Eₖ maks / e.
 */
export function arusRelatif(f: number, W0: number, intensitasPersen: number, V: number): number {
    const ek = ekMaks(f, W0);
    if (ek <= 0 || intensitasPersen <= 0) return 0;
    const sisa = V >= ek ? 0 : 1 - V / ek;
    return (intensitasPersen / 100) * sisa;
}

export type DaerahCahaya = 'ultraungu' | 'tampak' | 'inframerah';

export function daerahCahaya(nm: number): DaerahCahaya {
    return nm < 380 ? 'ultraungu' : nm > 750 ? 'inframerah' : 'tampak';
}

/** Warna fisis cahaya tampak. Di luar 380 sampai 750 nm: ungu redup dan merah gelap. */
export function warnaCahaya(nm: number): { warna: string; nama: string } {
    if (nm < 380) return { warna: '#9A86C2', nama: 'ultraungu' };
    if (nm > 750) return { warna: '#7A2020', nama: 'inframerah' };
    let r = 0, g = 0, b = 0;
    if (nm < 440) { r = (440 - nm) / 60; b = 1; }
    else if (nm < 490) { g = (nm - 440) / 50; b = 1; }
    else if (nm < 510) { g = 1; b = (510 - nm) / 20; }
    else if (nm < 580) { r = (nm - 510) / 70; g = 1; }
    else if (nm < 645) { r = 1; g = (645 - nm) / 65; }
    else { r = 1; }
    const hex = (v: number) => Math.round(255 * jepit(v, 0, 1)).toString(16).padStart(2, '0');
    const nama = nm < 450 ? 'ungu' : nm < 495 ? 'biru' : nm < 570 ? 'hijau' : nm < 590 ? 'kuning' : nm < 620 ? 'jingga' : 'merah';
    return { warna: `#${hex(r)}${hex(g)}${hex(b)}`, nama };
}

/** Garis lurus terbaik y = m·x + b (kuadrat terkecil). */
export function cocokGaris(titik: { x: number; y: number }[]): { m: number; b: number } | null {
    const n = titik.length;
    if (n < 2) return null;
    const rx = titik.reduce((a, t) => a + t.x, 0) / n;
    const ry = titik.reduce((a, t) => a + t.y, 0) / n;
    let sxy = 0, sxx = 0;
    for (const t of titik) {
        sxy += (t.x - rx) * (t.y - ry);
        sxx += (t.x - rx) ** 2;
    }
    if (sxx < 1e-12) return null;
    const m = sxy / sxx;
    return { m, b: ry - m * rx };
}

/* ---------- 2. Komponen ---------- */

const BEBAS: Besaran[] = [
    { id: 'f', label: 'frekuensi cahaya', simbol: 'f', satuan: '× 10¹⁴ Hz', desimal: 1 },
    { id: 'I', label: 'intensitas cahaya', simbol: 'I', satuan: '%', desimal: 0 },
    { id: 'W0', label: 'fungsi kerja logam', simbol: 'W₀', satuan: 'eV', desimal: 2 },
];

const TERIKAT: Besaran[] = [
    { id: 'ek', label: 'energi kinetik maksimum', simbol: 'Eₖ maks', satuan: 'eV', desimal: 2 },
    { id: 'arus', label: 'arus', simbol: 'i', satuan: 'rel.', desimal: 2 },
    { id: 'vh', label: 'potensial henti', simbol: 'V₀', satuan: 'V', desimal: 2 },
    { id: 'f0', label: 'frekuensi ambang', simbol: 'f₀', satuan: '× 10¹⁴ Hz', desimal: 2 },
];

const TANTANGAN = [
    { id: 'ambang', teks: 'Pilih natrium. Temukan frekuensi terkecil yang masih melepaskan elektron: tekan "Catat titik data" saat f hanya sampai 0,2 × 10¹⁴ Hz di atas frekuensi ambang.' },
    { id: 'garis', teks: 'Kumpulkan sedikitnya 3 titik data dengan frekuensi berbeda untuk satu logam (Eₖ maks harus lebih dari nol), sampai kemiringan garisnya berada dalam 5 % dari 4,14 × 10⁻¹⁵ eV·s.' },
    { id: 'henti', teks: 'Dengan intensitas lebih dari nol, naikkan tegangan penghenti sampai arus tepat nol. Bandingkan V itu dengan Eₖ maks (selisihnya harus di bawah 0,05 V).' },
];

// Geometri adegan sebagai pecahan lebar dan tinggi panggung
const BETA_VISUAL = 0.35; // seberapa cepat elektron tampil: pecahan jarak per detik untuk √(eV)
const LAJU_FOTON = 1.6; // pecahan lintasan sorot per detik
const LAJU_FOTON_MAKS = 8; // foton per detik pada intensitas 100 %

interface Foton { u: number; yf: number }
interface Elektron { s: number; u: number; yf: number }

export default function EfekFotolistrik() {
    // Pengatur
    const [f14, setF14] = useState(8);
    const [intensitas, setIntensitas] = useState(60);
    const [logamId, setLogamId] = useState('natrium');
    const [V, setV] = useState(0);

    const logam = LOGAM.find((l) => l.id === logamId) ?? LOGAM[0];
    const f = f14 * 1e14;
    const E = energiFoton(f);
    const ek = ekMaks(f, logam.W0);
    const f0 = fAmbang(logam.W0);
    const nm = panjangGelombangNm(f);
    const cahaya = warnaCahaya(nm);
    const arus = arusRelatif(f, logam.W0, intensitas, V);

    // Parameter yang dibaca loop dan panggung lewat ref
    const pRef = useRef({ f14, intensitas, W0: logam.W0, V, ek, warna: cahaya.warna, nm, nama: cahaya.nama });
    pRef.current = { f14, intensitas, W0: logam.W0, V, ek, warna: cahaya.warna, nm, nama: cahaya.nama };

    // Keadaan gerak
    const sRef = useRef<{ foton: Foton[]; elektron: Elektron[]; akuF: number }>({ foton: [], elektron: [], akuF: 0 });

    const [percobaan, setPercobaan] = useState<Percobaan[]>([]);
    const [selesai, tandai] = useTantangan();

    const loop = useSimLoop((dt) => {
        const p = pRef.current;
        const s = sRef.current;
        // Foton datang sebanding intensitas
        s.akuF += dt * (p.intensitas / 100) * LAJU_FOTON_MAKS;
        while (s.akuF >= 1) {
            s.akuF -= 1;
            if (s.foton.length < 60) s.foton.push({ u: 0, yf: 0.15 + 0.7 * Math.random() });
        }
        for (const ft of s.foton) ft.u += dt * LAJU_FOTON;
        // Foton yang tiba melepaskan satu elektron bila energinya cukup
        for (const ft of s.foton) {
            if (ft.u >= 1 && p.ek > 0 && s.elektron.length < 120) {
                const E0 = Math.random() * p.ek; // eV, merata dari 0 sampai Eₖ maks
                s.elektron.push({ s: 0, u: Math.max(0.1, Math.sqrt(BETA_VISUAL * E0)), yf: ft.yf });
            }
        }
        s.foton = s.foton.filter((ft) => ft.u < 1);
        // Elektron bergerak. Medan penghenti memberi perlambatan tetap: u² = β(E₀ − V·s)
        const perlambatan = (BETA_VISUAL * p.V) / 2;
        for (const e of s.elektron) {
            e.u -= perlambatan * dt;
            e.s += e.u * dt;
        }
        s.elektron = s.elektron.filter((e) => e.s >= 0 && e.s < 1);
    });

    useEffect(() => {
        if (!gerakDikurangi()) loop.mainkan();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const ulang = () => {
        sRef.current = { foton: [], elektron: [], akuF: 0 };
        loop.segarkan();
    };

    // Tantangan 3 dideteksi langsung dari keadaan pengatur
    useEffect(() => {
        if (ek > 0 && intensitas > 0 && arus === 0 && Math.abs(V - ek) <= 0.05) tandai('henti');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [f14, intensitas, logamId, V]);

    const catat = () => {
        const baru: Percobaan = {
            nilai: { f: f14, I: intensitas, W0: logam.W0, V, ek, arus, vh: ek, f0: f0 / 1e14 },
        };
        const semua = [...percobaan, baru];
        setPercobaan(semua);

        // Tantangan 1: natrium, sedikit di atas ambang
        if (logam.id === 'natrium' && ek > 0 && f14 - f0 / 1e14 <= 0.2) tandai('ambang');
        // Tantangan 2: kemiringan garis dari >= 3 titik dengan f berbeda
        const positif = titikLogam(semua, logam.W0).filter((t) => t.y > 0);
        const garisKu = cocokGaris(positif);
        if (garisKu && positif.length >= 3) {
            const h = garisKu.m * 1e-14;
            if (Math.abs(h - 4.14e-15) / 4.14e-15 <= 0.05) tandai('garis');
        }
    };

    /* ----- Gambar panggung ----- */

    const gambar = (ctx: Ctx, w: number, h: number) => {
        const c = warnaSim();
        const p = pRef.current;
        const s = sRef.current;

        const tabung = { x0: 0.08 * w, x1: 0.92 * w, y0: 0.25 * h, y1: 0.76 * h };
        const xK = 0.2 * w; // katode
        const xA = 0.82 * w; // anode
        const yP0 = 0.33 * h;
        const yP1 = 0.65 * h;
        const yFace = (yf: number) => yP0 + yf * (yP1 - yP0);
        const lampu = { x: 0.36 * w, yBawah: 0.12 * h };

        // Tabung hampa
        kotak(ctx, tabung.x0, tabung.y0, tabung.x1 - tabung.x0, tabung.y1 - tabung.y0, { isi: c.latar, tebal: 2.5 });

        // Rangkaian luar
        const yw = 0.86 * h;
        const xBat = 0.36 * w;
        const xAm = 0.58 * w;
        garis(ctx, xK, yP1, xK, yw, { tebal: 2.5 });
        garis(ctx, xA, yP1, xA, yw, { tebal: 2.5 });
        garis(ctx, xK, yw, xBat - 3, yw, { tebal: 2.5 });
        garis(ctx, xBat + 7, yw, xAm - 14, yw, { tebal: 2.5 });
        garis(ctx, xAm + 14, yw, xA, yw, { tebal: 2.5 });
        // Sumber tegangan penghenti (dua pelat: panjang dan pendek)
        garis(ctx, xBat - 3, yw - 11, xBat - 3, yw + 11, { tebal: 3 });
        garis(ctx, xBat + 7, yw - 6, xBat + 7, yw + 6, { tebal: 3 });
        label(ctx, `V = ${angka(p.V, 2)} V`, xBat, yw - 17, { rata: 'center', ukuran: 11 });
        // Amperemeter
        bulat(ctx, xAm, yw, 14, { isi: c.krem, tebal: 2.5 });
        label(ctx, 'A', xAm, yw, { rata: 'center', ukuran: 13 });
        const arusKini = arusRelatif(p.f14 * 1e14, p.W0, p.intensitas, p.V);
        label(ctx, `i = ${angka(arusKini, 2)} (relatif)`, xAm, yw + 21, { rata: 'center', ukuran: 11, latar: arusKini > 0 ? c.lime : undefined });

        // Katode dan anode (pelat)
        kotak(ctx, xK - 5, yP0, 10, yP1 - yP0, { isi: c.krem, tebal: 2.5 });
        kotak(ctx, xA - 5, yP0, 10, yP1 - yP0, { isi: c.krem, tebal: 2.5 });
        label(ctx, 'katode', xK, 0.71 * h, { rata: 'center', ukuran: 11, tebal: 600 });
        label(ctx, 'anode', xA, 0.71 * h, { rata: 'center', ukuran: 11, tebal: 600 });

        // Sumber cahaya
        kotak(ctx, 0.3 * w, 0.03 * h, 0.12 * w, 0.09 * h, { isi: c.krem });
        ctx.save();
        ctx.fillStyle = p.warna;
        ctx.fillRect(0.3 * w + 2, 0.03 * h + 0.09 * h - 7, 0.12 * w - 4, 5);
        ctx.restore();
        label(ctx, `${angka(p.nm, 0)} nm, ${p.nama}`, 0.44 * w, 0.075 * h, { ukuran: 11, tebal: 600 });

        // Foton: paket gelombang kecil di sepanjang sorot
        const lambdaPx = 4 + p.nm / 45;
        const xFace = xK + 5;
        for (const ft of s.foton) {
            const tx = xFace;
            const ty = yFace(ft.yf);
            const dx = tx - lampu.x;
            const dy = ty - lampu.yBawah;
            const jarak = Math.hypot(dx, dy);
            const ax = dx / jarak;
            const ay = dy / jarak;
            const nx = -ay;
            const ny = ax;
            const titik: { x: number; y: number }[] = [];
            const PANJANG = 26;
            const pusat = ft.u * jarak;
            for (let q = 0; q <= 16; q++) {
                const d = pusat - PANJANG + (PANJANG * q) / 16;
                if (d < 0 || d > jarak) continue;
                const gel = 3 * Math.sin((2 * Math.PI * (d - pusat)) / lambdaPx);
                titik.push({ x: lampu.x + ax * d + nx * gel, y: lampu.yBawah + ay * d + ny * gel });
            }
            if (titik.length > 1) {
                for (const [tebal, warna] of [[4.5, c.gelap], [2.5, p.warna]] as const) {
                    ctx.save();
                    ctx.strokeStyle = warna;
                    ctx.lineWidth = tebal;
                    ctx.lineJoin = 'round';
                    ctx.beginPath();
                    ctx.moveTo(titik[0].x, titik[0].y);
                    for (let q = 1; q < titik.length; q++) ctx.lineTo(titik[q].x, titik[q].y);
                    ctx.stroke();
                    ctx.restore();
                }
            }
        }

        // Elektron
        const xAnodeFace = xA - 5;
        for (const e of s.elektron) {
            bulat(ctx, xFace + e.s * (xAnodeFace - xFace), yFace(e.yf), 3.5, { isi: c.biru, tebal: 1.5 });
        }

        if (p.ek <= 0) {
            const xm = (xK + xA) / 2;
            const opsi = { rata: 'center' as const, ukuran: 11, latar: c.oranyeLembut };
            label(ctx, 'Tidak ada elektron lepas:', xm, 0.4 * h, opsi);
            label(ctx, 'energi foton lebih kecil', xm, 0.5 * h, opsi);
            label(ctx, 'dari fungsi kerja', xm, 0.6 * h, opsi);
        }
    };

    /* ----- Grafik utama: Eₖ maks terhadap f ----- */

    const titikIni = titikLogam(percobaan, logam.W0);
    const garisKu = titikIni.filter((t) => t.y > 0).length >= 2 ? cocokGaris(titikIni.filter((t) => t.y > 0)) : null;
    const hHasil = garisKu ? garisKu.m * 1e-14 : null;
    const f0Hasil = garisKu && garisKu.m > 0 ? -garisKu.b / garisKu.m : null;

    const ambilGrafik = (): OpsiGrafik => {
        const c = warnaSim();
        const kini = pRef.current;
        const seri: OpsiGrafik['seri'] = [];
        const penanda: NonNullable<OpsiGrafik['penanda']> = [];
        if (garisKu) {
            seri.push({ nama: 'garis terbaik', titik: [{ x: 0, y: garisKu.b }, { x: 16, y: garisKu.m * 16 + garisKu.b }], warna: c.oranye, tebal: 2 });
            if (f0Hasil !== null && f0Hasil > 0 && f0Hasil < 16) penanda.push({ x: f0Hasil, y: 0, warna: c.lime });
            penanda.push({ x: 0, y: garisKu.b, warna: c.lime });
        }
        seri.push({ nama: 'titik data', titik: titikIni, gaya: 'titik', warna: c.biru });
        penanda.push({ x: kini.f14, y: kini.ek });
        return {
            seri, penanda,
            labelX: 'f (×10¹⁴ Hz)', labelY: 'Eₖ maks (eV)',
            xMin: 0, xMaks: 16, yMin: -(logam.W0 + 0.8), yMaks: 4.5,
        };
    };

    /* ----- Rumus hidup ----- */

    const kali10 = (m: string, p: number) => `${mn(m)}${mo('×')}${msup(mn(10), mn(String(p).replace('-', '−')))}`;
    const indeks = (a: string, b: string) => `<msub><mi>${a}</mi><mtext>${b}</mtext></msub>`;
    const barisRumus: BarisRumus[] = [
        {
            mathml: `${indeks('E', 'k maks')}${mo('=')}${mi('h')}${mi('f')}${mo('−')}${msub(mi('W'), mn(0))}`,
            baca: 'E k maks sama dengan h kali f dikurangi W nol',
        },
        {
            mathml: `${mi('h')}${mi('f')}${mo('=')}${mn(angkaTetap(E, 3))}${mtext('eV')}`,
            baca: `h kali f sama dengan ${angka(E, 3)} elektronvolt`,
        },
        ek > 0
            ? {
                mathml: `${indeks('E', 'k maks')}${mo('=')}${mn(angka(E, 3))}${mo('−')}${mn(angka(logam.W0, 2))}${mo('=')}${mn(angka(ek, 2))}${mtext('eV')}`,
                baca: `E k maks sama dengan ${angka(E, 3)} dikurangi ${angka(logam.W0, 2)}, yaitu ${angka(ek, 2)} elektronvolt`,
            }
            : {
                mathml: `${mi('h')}${mi('f')}${mo('&lt;')}${msub(mi('W'), mn(0))}${mtext('tidak ada elektron')}`,
                baca: 'h f lebih kecil dari W nol, jadi tidak ada elektron lepas',
            },
        {
            mathml: `${msub(mi('f'), mn(0))}${mo('=')}${mfrac(msub(mi('W'), mn(0)), mi('h'))}`,
            baca: 'f nol sama dengan W nol per h',
        },
        {
            mathml: `${mo('=')}${kali10(angka(f0 / 1e14, 2), 14)}${mtext('Hz')}`,
            baca: `sama dengan ${angka(f0 / 1e14, 2)} kali sepuluh pangkat empat belas hertz`,
        },
    ];

    const deskripsi = ek > 0
        ? `Cahaya ${cahaya.nama} berfrekuensi ${angka(f14, 1)} kali sepuluh pangkat empat belas hertz menyinari ${logam.nama}. Energi foton ${angka(E, 2)} elektronvolt, energi kinetik maksimum elektron ${angka(ek, 2)} elektronvolt. Tegangan penghenti ${angka(V, 2)} volt, arus relatif ${angka(arus, 2)}.`
        : `Cahaya ${cahaya.nama} berfrekuensi ${angka(f14, 1)} kali sepuluh pangkat empat belas hertz menyinari ${logam.nama}. Energi foton ${angka(E, 2)} elektronvolt lebih kecil dari fungsi kerja ${angka(logam.W0, 2)}, jadi tidak ada elektron lepas dan arus nol.`;

    return (
        <SimShell
            panggung={<Panggung gambar={gambar} deskripsi={deskripsi} rasio={16 / 11} tinggiMin={260} />}
            kendaliPutar={
                <PlayBar
                    loop={loop}
                    onUlang={ulang}
                    tanpaLangkah
                    tambahan={
                        <Tombol jenis="utama" onClick={catat}>
                            <IconPencilPlus size={16} stroke={2.5} aria-hidden="true" />
                            Catat titik data
                        </Tombol>
                    }
                />
            }
            bacaan={
                <BarisBacaan>
                    <Bacaan label="Energi foton" nilai={angkaTetap(E, 2)} satuan="eV" />
                    <Bacaan label="Fungsi kerja (W₀)" nilai={angkaTetap(logam.W0, 2)} satuan="eV" />
                    <Bacaan label="Eₖ maks" nilai={angkaTetap(ek, 2)} satuan="eV" sorot={ek > 0 ? 'lime' : undefined} />
                    <Bacaan label="Frekuensi ambang (f₀)" nilai={angkaTetap(f0 / 1e14, 2)} satuan="× 10¹⁴ Hz" />
                    <Bacaan label="Potensial henti" nilai={angkaTetap(ek, 2)} satuan="V" />
                    <Bacaan label="Arus (relatif)" nilai={angkaTetap(arus, 2)} />
                </BarisBacaan>
            }
            pengatur={
                <>
                    <Slider
                        label="Frekuensi cahaya" simbol="f" nilai={f14} min={3} maks={15} langkah={0.1} satuan="× 10¹⁴ Hz" onUbah={setF14}
                        catatan={`Panjang gelombang ${angka(nm, 0)} nm, ${cahaya.nama}.`}
                    />
                    <Slider label="Intensitas cahaya" simbol="I" nilai={intensitas} min={0} maks={100} langkah={5} satuan="%" onUbah={setIntensitas} />
                    <Pilihan
                        label="Jenis logam (katode)"
                        nilai={logamId}
                        pilihan={LOGAM.map((l) => ({ nilai: l.id, label: `${l.nama} ${angka(l.W0, 2)} eV` }))}
                        onUbah={setLogamId}
                    />
                    <Slider
                        label="Tegangan penghenti" simbol="V" nilai={V} min={0} maks={5} langkah={0.05} satuan="V" onUbah={setV}
                        catatan="Arus bersatuan relatif: 1,00 berarti intensitas 100 % tanpa tegangan penghenti."
                    />
                </>
            }
            rumus={
                <RumusHidup
                    baris={barisRumus}
                    catatan="Dipakai h = 4,136 × 10⁻¹⁵ eV·s. Intensitas dan tegangan penghenti tidak muncul di rumus Eₖ maks."
                />
            }
            grafik={
                <Panel judul="Grafik Eₖ maks terhadap f" ikon={<IconChartDots size={18} stroke={2.5} aria-hidden="true" />}>
                    <GrafikHidup
                        ambil={ambilGrafik}
                        rasio={1.7}
                        deskripsi={`Grafik energi kinetik maksimum terhadap frekuensi untuk ${logam.nama}. Ada ${titikIni.length} titik data. ${hHasil ? `Kemiringan garis ${angkaIlmiah(hHasil, 2)} elektronvolt sekon.` : 'Garis terbaik belum ada.'} Keadaan sekarang: f ${angka(f14, 1)} kali sepuluh pangkat empat belas hertz, Eₖ ${angka(ek, 2)} elektronvolt.`}
                        keterangan={[
                            { nama: 'garis terbaik', warna: warnaSim().oranye },
                            { nama: 'titik data', warna: warnaSim().biru },
                        ]}
                    />
                    {garisKu && hHasil && f0Hasil !== null ? (
                        <div className="mt-2 space-y-1 text-xs text-foreground">
                            <p><strong>Kemiringan = h hasil percobaan:</strong> {angkaIlmiah(hHasil, 3)} eV·s</p>
                            <p><strong>Titik potong sumbu f = f₀:</strong> {angka(f0Hasil, 2)} × 10¹⁴ Hz</p>
                            <p><strong>Titik potong sumbu Eₖ = −W₀:</strong> {angka(garisKu.b, 2)} eV</p>
                        </div>
                    ) : (
                        <p className="text-xs text-muted mt-2">
                            Tekan "Catat titik data" pada beberapa frekuensi. Setelah ada 2 titik dengan Eₖ lebih dari nol untuk logam yang sama, garis lurus terbaik muncul. Grafik hanya menampilkan titik untuk logam yang sedang dipilih.
                        </p>
                    )}
                </Panel>
            }
            selidiki={
                <SelidikiHubungan
                    bebas={BEBAS}
                    terikat={TERIKAT}
                    tetap={['V']}
                    percobaan={percobaan}
                    onHapus={() => setPercobaan([])}
                    ajakan='Tekan "Catat titik data", ubah satu besaran saja (misalnya frekuensi), lalu catat lagi. Untuk membandingkan logam, catat dengan f dan intensitas yang sama di tiap logam.'
                />
            }
            tantangan={<Tantangan daftar={TANTANGAN} selesai={selesai} />}
        />
    );
}

/** Titik (f, Eₖ maks) dari percobaan untuk logam tertentu; f yang sama diganti oleh catatan terbaru. */
export function titikLogam(percobaan: Percobaan[], W0: number): { x: number; y: number }[] {
    const peta = new Map<number, number>();
    for (const p of percobaan) {
        if (Math.abs(p.nilai.W0 - W0) < 1e-9) peta.set(p.nilai.f, p.nilai.ek);
    }
    return [...peta.entries()].map(([x, y]) => ({ x, y })).sort((a, b) => a.x - b.x);
}
