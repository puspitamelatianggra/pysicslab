/* ============================================================
   SIMULASI: Atom Hidrogen Model Bohr (Bab 5-1)
   ============================================================
   Susunan file mengikuti gerak-parabola.tsx:
   1. Tetapan dan fungsi fisika murni (tanpa React).
   2. Komponen: state pengatur → keadaan lompatan (useRef) → loop → gambar → <SimShell>.

   Hubungan yang harus bisa ditemukan siswa:
   - selisih tingkat naik → energi foton naik → panjang gelombang turun (berbanding terbalik)
   - n naik → jari-jari orbit naik sebanding n²
   - jarak antartingkat energi menyempit di n besar
   - energi foton sama dengan SELISIH dua tingkat, bukan energi satu tingkat
   ============================================================ */

import { IconChartDots, IconEraser, IconPencilPlus } from '@tabler/icons-react';
import { useEffect, useRef, useState } from 'react';
import {
    angka, angkaIlmiah, angkaTetap, bulat, Ctx, garis, jepit, kotak, label,
    lintasan as gambarLintasan, OpsiGrafik, panah, useSimLoop, warnaSim,
} from '../../engine';
import {
    Bacaan, BarisBacaan, BarisRumus, Besaran, GrafikHidup, mfrac, mi, mn, mo, msub,
    Panel, Panggung, Percobaan, Pilihan, PlayBar, RumusHidup, SelidikiHubungan, SimShell,
    Slider, Tantangan, Tombol, useTantangan,
} from '../../ui';

/* ---------- 1. Fisika ---------- */

const E1 = 13.6; // eV, energi ionisasi hidrogen
const HC = 1240; // eV·nm
const R_BOHR = 0.529; // Å, jari-jari orbit n = 1
const EV_KE_JOULE = 1.602e-19;
const H_PLANCK = 6.626e-34; // J·s
const TINGKAT_MAKS = 6;
const DURASI = 1.5; // detik animasi lompatan

/** Energi tingkat ke-n dalam eV (negatif: elektron terikat). */
export function energiTingkat(n: number): number {
    return -E1 / (n * n);
}

/** Jari-jari orbit ke-n dalam angstrom. */
export function jariJari(n: number): number {
    return n * n * R_BOHR;
}

/** Panjang gelombang foton (nm) dari energinya (eV). */
export function panjangGelombang(eFoton: number): number {
    return eFoton > 0 ? HC / eFoton : Infinity;
}

/** Frekuensi foton (Hz) dari energinya (eV). */
export function frekuensi(eFoton: number): number {
    return (eFoton * EV_KE_JOULE) / H_PLANCK;
}

const NAMA_DERET = ['', 'Lyman', 'Balmer', 'Paschen', 'Brackett', 'Pfund'];

export function namaDeret(nBawah: number): string {
    return NAMA_DERET[nBawah] ?? `deret n = ${nBawah}`;
}

export type Daerah = 'ultraungu' | 'tampak' | 'inframerah';

export function daerahSpektrum(nm: number): Daerah {
    if (nm < 380) return 'ultraungu';
    if (nm > 750) return 'inframerah';
    return 'tampak';
}

export interface Transisi {
    eAsal: number;
    eTujuan: number;
    eFoton: number;
    lambda: number;
    frek: number;
    emisi: boolean;
    deret: string;
    daerah: Daerah;
}

export function hitungTransisi(ni: number, nf: number): Transisi {
    const eAsal = energiTingkat(ni);
    const eTujuan = energiTingkat(nf);
    const eFoton = Math.abs(eTujuan - eAsal);
    const lambda = panjangGelombang(eFoton);
    return {
        eAsal, eTujuan, eFoton, lambda,
        frek: frekuensi(eFoton),
        emisi: ni > nf,
        deret: namaDeret(Math.min(ni, nf)),
        daerah: Number.isFinite(lambda) ? daerahSpektrum(lambda) : 'inframerah',
    };
}

/** Warna cahaya tampak (CSS rgb) untuk panjang gelombang 380 sampai 750 nm. Di luar itu null. */
export function warnaCahaya(nm: number): string | null {
    if (nm < 380 || nm > 750) return null;
    let r = 0, g = 0, b = 0;
    if (nm < 440) { r = (440 - nm) / 60; b = 1; }
    else if (nm < 490) { g = (nm - 440) / 50; b = 1; }
    else if (nm < 510) { g = 1; b = (510 - nm) / 20; }
    else if (nm < 580) { r = (nm - 510) / 70; g = 1; }
    else if (nm < 645) { r = 1; g = (645 - nm) / 65; }
    else { r = 1; }
    let f = 1;
    if (nm < 420) f = 0.3 + (0.7 * (nm - 380)) / 40;
    else if (nm > 700) f = 0.3 + (0.7 * (750 - nm)) / 50;
    const k = (v: number) => Math.round(255 * Math.pow(v * f, 0.8));
    return `rgb(${k(r)}, ${k(g)}, ${k(b)})`;
}

/**
 * Jadwal satu lompatan pada waktu relatif u (0 sampai 1).
 * Emisi: elektron turun dulu, lalu foton meluncur keluar.
 * Absorpsi: foton datang dulu, lalu elektron naik.
 * `tingkat` bernilai pecahan selama elektron melompat; `foton` = kemajuan foton 0..1 atau null.
 */
export function jadwalLompat(ni: number, nf: number, u: number): { tingkat: number; foton: number | null } {
    const halus = (x: number) => x * x * (3 - 2 * x);
    if (ni > nf) {
        const l = halus(jepit(u / 0.3, 0, 1));
        return { tingkat: ni + (nf - ni) * l, foton: u < 0.3 ? null : jepit((u - 0.3) / 0.7, 0, 1) };
    }
    const l = halus(jepit((u - 0.6) / 0.3, 0, 1));
    return { tingkat: ni + (nf - ni) * l, foton: u >= 0.6 ? null : jepit(u / 0.6, 0, 1) };
}

/** Jari-jari gambar (piksel) yang dimampatkan: r asli ∝ n² terlalu lebar untuk layar. */
function jariGambar(n: number, rMaks: number): number {
    const k = jepit((n - 1) / (TINGKAT_MAKS - 1), 0, 1.2);
    return rMaks * (0.15 + 0.85 * Math.pow(k, 0.85));
}

/* ---------- 2. Komponen ---------- */

type Status = 'siap' | 'lompat' | 'selesai';

interface GarisSpektrum {
    ni: number;
    nf: number;
    nm: number;
}

const BEBAS: Besaran[] = [
    { id: 'selisih', label: 'selisih tingkat', simbol: 'Δn', satuan: 'tingkat', desimal: 0 },
    { id: 'bawah', label: 'tingkat bawah', simbol: 'n bawah', satuan: 'tingkat', desimal: 0 },
    { id: 'n', label: 'tingkat orbit', simbol: 'n', satuan: 'tingkat', desimal: 0 },
];

const TERIKAT: Besaran[] = [
    { id: 'efoton', label: 'energi foton', simbol: 'E foton', satuan: 'eV', desimal: 2 },
    { id: 'lambda', label: 'panjang gelombang', simbol: 'λ', satuan: 'nm', desimal: 0 },
    { id: 'rn', label: 'jari-jari orbit', simbol: 'rₙ', satuan: 'Å', desimal: 2 },
    { id: 'en', label: 'energi tingkat', simbol: 'Eₙ', satuan: 'eV', desimal: 2 },
];

const TANTANGAN = [
    { id: 'merah', teks: 'Hasilkan garis merah deret Balmer dengan panjang gelombang sekitar 656 nm. Elektron harus turun dan memancarkan foton.' },
    { id: 'balmer', teks: 'Kumpulkan keempat garis tampak deret Balmer di pita spektrum, yaitu transisi dari n = 3, 4, 5, dan 6 ke n = 2.' },
    { id: 'energi12', teks: 'Elektron harus turun dan memancarkan foton berenergi lebih dari 12 eV. Tingkat mana yang kamu pilih?' },
];

const warnaFoton = (nm: number) => warnaCahaya(nm) ?? warnaSim().redup;

export default function AtomBohr() {
    // Pengatur
    const [ni, setNi] = useState(3);
    const [nf, setNf] = useState(2);
    const [grafik, setGrafik] = useState<'energi' | 'jari'>('energi');

    const tr = hitungTransisi(ni, nf);

    // Keadaan lompatan
    const tRef = useRef(0);
    const statusRef = useRef<Status>('siap');
    const [status, setStatus] = useState<Status>('siap');
    const aturStatus = (s: Status) => {
        statusRef.current = s;
        setStatus(s);
    };

    const [garisSpektrum, setGarisSpektrum] = useState<GarisSpektrum[]>([]);
    const [percobaan, setPercobaan] = useState<Percobaan[]>([]);
    const [selesai, tandai] = useTantangan();

    const loop = useSimLoop((dt) => {
        if (statusRef.current !== 'lompat') return;
        tRef.current += dt;
        if (tRef.current >= DURASI) {
            tRef.current = DURASI;
            saatSelesai();
        }
    });

    function saatSelesai() {
        aturStatus('selesai');
        loop.jeda();
        const catatan: Percobaan = {
            nilai: {
                selisih: Math.abs(ni - nf), bawah: Math.min(ni, nf), n: 0,
                efoton: tr.eFoton, lambda: tr.lambda, rn: 0, en: 0,
            },
        };
        setPercobaan((p) => [...p, catatan]);

        if (tr.emisi) {
            const sudahAda = garisSpektrum.some((g) => g.ni === ni && g.nf === nf);
            const baru = sudahAda ? garisSpektrum : [...garisSpektrum, { ni, nf, nm: tr.lambda }];
            if (!sudahAda) setGarisSpektrum(baru);
            if (Math.abs(tr.lambda - 656) < 2) tandai('merah');
            if (tr.eFoton > 12) tandai('energi12');
            if ([3, 4, 5, 6].every((n) => baru.some((g) => g.ni === n && g.nf === 2))) tandai('balmer');
        }
    }

    // Pengatur diubah: elektron kembali ke tingkat asal
    useEffect(() => {
        tRef.current = 0;
        aturStatus('siap');
        loop.jeda();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ni, nf]);

    const pindahkan = () => {
        if (ni === nf) return;
        if (statusRef.current === 'selesai') tRef.current = 0;
        aturStatus('lompat');
        loop.mainkan();
    };

    const ulang = () => {
        tRef.current = 0;
        aturStatus('siap');
        loop.jeda();
    };

    const hapusGaris = () => setGarisSpektrum([]);

    const catatTingkat = () => {
        const n = statusRef.current === 'selesai' ? nf : ni;
        setPercobaan((p) => [...p, {
            nilai: {
                selisih: 0, bawah: 0, n,
                efoton: 0, lambda: 0, rn: jariJari(n), en: energiTingkat(n),
            },
        }]);
    };

    /* ----- Gambar panggung: orbit dan diagram tingkat energi ----- */

    const gambar = (ctx: Ctx, w: number, h: number) => {
        const c = warnaSim();
        const u = tRef.current / DURASI;
        const j = jadwalLompat(ni, nf, u);
        const sudutElektron = (t: number) => -0.8 + 6 * t;
        const kiriLebar = Math.round(w * 0.5);

        // Orbit (kiri)
        const cx = kiriLebar / 2;
        const cy = (h - 40) / 2 + 4;
        const rMaks = Math.min(kiriLebar / 2 - 20, (h - 56) / 2);
        const tepi = kiriLebar / 2 - 6;
        for (let n = 1; n <= TINGKAT_MAKS; n++) {
            const pilih = n === ni || n === nf;
            bulat(ctx, cx, cy, jariGambar(n, rMaks), { isi: 'none', garis: pilih ? c.gelap : c.redup, tebal: pilih ? 2.5 : 1 });
            label(ctx, String(n), cx + 3, cy - jariGambar(n, rMaks) - 1, { ukuran: 10, dasar: 'bottom', tebal: 700 });
        }
        bulat(ctx, cx, cy, 6, { isi: c.oranye });

        // Foton sebagai gelombang pendek di sepanjang satu jari-jari
        if (j.foton !== null && statusRef.current !== 'siap') {
            const emisi = ni > nf;
            const sudutF = sudutElektron(emisi ? 0.3 * DURASI : 0.6 * DURASI);
            const r0 = jariGambar(emisi ? nf : ni, rMaks);
            const rKepala = emisi ? r0 + (tepi - r0) * j.foton : tepi + (r0 - tepi) * j.foton;
            const panjang = 30;
            const awal = emisi ? Math.max(r0, rKepala - panjang) : rKepala;
            const akhir = emisi ? rKepala : Math.min(tepi, rKepala + panjang);
            const lamLihat = 5 + 10 * jepit(Math.log(tr.lambda / 90) / Math.log(2000 / 90), 0, 1);
            const titik: { x: number; y: number }[] = [];
            for (let d = awal; d <= akhir; d += 1.5) {
                const sim = 5 * Math.sin((2 * Math.PI * d) / lamLihat - 14 * tRef.current);
                const px = cx + d * Math.cos(sudutF) - sim * Math.sin(sudutF);
                const py = cy + d * Math.sin(sudutF) + sim * Math.cos(sudutF);
                titik.push({ x: px, y: py });
            }
            gambarLintasan(ctx, titik, { warna: c.gelap, tebal: 5 });
            gambarLintasan(ctx, titik, { warna: warnaFoton(tr.lambda), tebal: 2.5 });
        }

        const rE = jariGambar(j.tingkat, rMaks);
        const aE = sudutElektron(tRef.current);
        bulat(ctx, cx + rE * Math.cos(aE), cy + rE * Math.sin(aE), 6, { isi: c.biru });

        const nSekarang = Math.round(j.tingkat);
        label(ctx, `n = ${nSekarang}, r = ${angka(jariJari(nSekarang), 2)} Å`, cx, h - 24, {
            rata: 'center', ukuran: 11, latar: c.lime,
        });
        label(ctx, 'Gambar tidak berskala', cx, h - 8, { rata: 'center', ukuran: 10, tebal: 500, warna: c.redup });

        // Diagram tingkat energi (kanan), berskala benar
        const x0 = kiriLebar + 34;
        const x1 = w - 30;
        const yAtas = 24;
        const yBawah = h - 36;
        const yE = (e: number) => yAtas + (-e / E1) * (yBawah - yAtas);
        label(ctx, 'E (eV)', x0, 10, { ukuran: 10 });
        garis(ctx, x0, yAtas, x1, yAtas, { warna: c.redup, tebal: 1, putus: [4, 4] });
        label(ctx, '0', x0 - 4, yAtas, { rata: 'right', ukuran: 10, tebal: 500, warna: c.redup });
        label(ctx, 'n = ∞', x1 + 4, yAtas, { ukuran: 10, tebal: 500, warna: c.redup });

        // Label n di kanan digeser ke bawah kalau tingkatnya rapat
        let batasBawah = yAtas + 6;
        for (let n = TINGKAT_MAKS; n >= 1; n--) {
            const y = yE(energiTingkat(n));
            const pilih = n === ni || n === nf;
            garis(ctx, x0, y, x1, y, { warna: pilih ? c.gelap : c.redup, tebal: pilih ? 3 : 1.5 });
            const yLabel = Math.max(y, batasBawah + 11);
            batasBawah = yLabel;
            if (yLabel - y > 2) garis(ctx, x1, y, x1 + 4, yLabel, { warna: c.redup, tebal: 1 });
            label(ctx, `n = ${n}`, x1 + 5, yLabel, { ukuran: 10, tebal: pilih ? 700 : 500 });
            if (n <= 3) {
                label(ctx, angka(energiTingkat(n), 1), x0 - 4, y, { rata: 'right', ukuran: 10, tebal: 500, warna: c.redup });
            }
        }

        // Panah transisi dan elektron di diagram
        const xa = x1 - 20;
        if (ni !== nf) {
            const yAsal = yE(energiTingkat(ni));
            const yTuju = yE(energiTingkat(nf));
            panah(ctx, xa, yAsal, xa, yTuju, { warna: c.gelap, tebal: 2.5, putus: statusRef.current === 'siap' ? [5, 4] : undefined });
            label(ctx, `${angka(tr.eFoton, 2)} eV`, xa - 8, (yAsal + yTuju) / 2, { rata: 'right', ukuran: 11, latar: c.lime });
        }
        bulat(ctx, xa, yE(energiTingkat(j.tingkat)), 6, { isi: c.biru });
    };

    /* ----- Pita spektrum: garis yang pernah dipancarkan ----- */

    const LAM_MIN = 90;
    const LAM_MAKS = 2000;

    const gambarSpektrum = (ctx: Ctx, w: number, h: number) => {
        const c = warnaSim();
        const kiri = 12;
        const kanan = w - 12;
        const yAxis = h - 30;
        const xLam = (nm: number) => kiri + (Math.log(jepit(nm, LAM_MIN, LAM_MAKS) / LAM_MIN) / Math.log(LAM_MAKS / LAM_MIN)) * (kanan - kiri);

        // Pita warna cahaya tampak, dipotong per 1 nm
        for (let nm = 380; nm < 750; nm++) {
            ctx.fillStyle = warnaFoton(nm);
            const xa = xLam(nm);
            ctx.fillRect(xa, yAxis - 11, xLam(nm + 1) - xa + 0.6, 11);
        }
        kotak(ctx, xLam(380), yAxis - 11, xLam(750) - xLam(380), 11, { isi: 'none', tebal: 2 });
        garis(ctx, kiri, yAxis, kanan, yAxis, { tebal: 2 });

        // Pembatas daerah dan namanya
        garis(ctx, xLam(380), 18, xLam(380), yAxis - 11, { warna: c.redup, tebal: 1, putus: [3, 3] });
        garis(ctx, xLam(750), 18, xLam(750), yAxis - 11, { warna: c.redup, tebal: 1, putus: [3, 3] });
        label(ctx, 'ultraungu', (kiri + xLam(380)) / 2, 10, { rata: 'center', ukuran: 10, tebal: 600, warna: c.redup });
        label(ctx, 'tampak', (xLam(380) + xLam(750)) / 2, 10, { rata: 'center', ukuran: 10, tebal: 600 });
        label(ctx, 'inframerah', (xLam(750) + kanan) / 2, 10, { rata: 'center', ukuran: 10, tebal: 600, warna: c.redup });

        for (const nm of [100, 200, 500, 1000, 2000]) {
            const x = xLam(nm);
            garis(ctx, x, yAxis, x, yAxis + 4, { tebal: 1.5 });
            label(ctx, String(nm), x, yAxis + 12, { rata: nm === 2000 ? 'right' : 'center', ukuran: 10, tebal: 500, warna: c.redup });
        }
        label(ctx, 'λ (nm), skala logaritmik', kiri, h - 6, { ukuran: 10, tebal: 600 });

        // Garis spektrum terkumpul
        for (const g of garisSpektrum) {
            const x = xLam(g.nm);
            garis(ctx, x, 38, x, yAxis - 11, { warna: c.gelap, tebal: 5 });
            garis(ctx, x, 38, x, yAxis - 11, { warna: warnaFoton(g.nm), tebal: 3 });
        }
        if (garisSpektrum.length > 0) {
            const g = garisSpektrum[garisSpektrum.length - 1];
            const teks = g.nm > LAM_MAKS ? `${angka(g.nm, 0)} nm (di luar pita)` : `${angka(g.nm, 0)} nm`;
            label(ctx, teks, jepit(xLam(g.nm), kiri + 40, kanan - 40), 27, { rata: 'center', ukuran: 11, latar: c.lime });
        } else {
            label(ctx, 'Belum ada garis. Turunkan elektron untuk memancarkan foton.', w / 2, 52, {
                rata: 'center', ukuran: 11, tebal: 500, warna: c.redup,
            });
        }
    };

    /* ----- Grafik tingkat ----- */

    const ambilGrafik = (): OpsiGrafik => {
        const c = warnaSim();
        const kurva: { x: number; y: number }[] = [];
        const fungsi = grafik === 'energi' ? energiTingkat : jariJari;
        for (let n = 1; n <= TINGKAT_MAKS + 1e-9; n += 0.1) kurva.push({ x: n, y: fungsi(n) });
        const bulatan = [1, 2, 3, 4, 5, 6].map((n) => ({ x: n, y: fungsi(n) }));
        return {
            seri: [
                { nama: 'kurva', titik: kurva, warna: c.redup, tebal: 1.5 },
                { nama: 'tingkat', titik: bulatan, gaya: 'titik', warna: c.krem },
            ],
            penanda: [
                { x: ni, y: fungsi(ni), warna: c.oranye },
                { x: nf, y: fungsi(nf), warna: c.lime },
            ],
            labelX: 'n', labelY: grafik === 'energi' ? 'Eₙ (eV)' : 'rₙ (Å)',
            xMin: 0.5, xMaks: 6.5,
            yMin: grafik === 'energi' ? -14.5 : 0, yMaks: grafik === 'energi' ? 1.5 : 20,
        };
    };

    /* ----- Rumus dengan angka saat ini ----- */

    const Ei = msub(mi('E'), mi('i'));
    const Ef = msub(mi('E'), mi('f'));
    const ang = (v: number) => (v < 0 ? `${mo('(')}${mo('−')}${mn(angka(-v, 2))}${mo(')')}` : mn(angka(v, 2)));
    const barisRumus: BarisRumus[] = ni === nf
        ? [{
            mathml: `${msub(mi('E'), mtekst('foton'))}${mo('=')}${Ei}${mo('−')}${Ef}${mo('=')}${mn(0)}`,
            baca: 'Energi foton sama dengan nol karena tingkat asal dan tujuan sama',
        }]
        : [
            {
                mathml: tr.emisi
                    ? `${msub(mi('E'), mtekst('foton'))}${mo('=')}${Ei}${mo('−')}${Ef}`
                    : `${msub(mi('E'), mtekst('foton'))}${mo('=')}${Ef}${mo('−')}${Ei}`,
                baca: tr.emisi ? 'Energi foton sama dengan E awal dikurangi E akhir' : 'Energi foton sama dengan E akhir dikurangi E awal',
            },
            {
                mathml: `${mo('=')}${tr.emisi ? ang(tr.eAsal) : ang(tr.eTujuan)}${mo('−')}${tr.emisi ? ang(tr.eTujuan) : ang(tr.eAsal)}${mo('=')}${mn(angka(tr.eFoton, 2))}${mtekst('eV')}`,
                baca: `sama dengan ${angka(tr.eFoton, 2)} elektronvolt`,
            },
            {
                mathml: `${mi('λ')}${mo('=')}${mfrac(mi('hc'), mi('E'))}${mo('=')}${mfrac(mn(HC), mn(angka(tr.eFoton, 2)))}${mo('=')}${mn(angka(tr.lambda, 0))}${mtekst('nm')}`,
                baca: `lambda sama dengan h c per E, sama dengan ${HC} per ${angka(tr.eFoton, 2)}, yaitu ${angka(tr.lambda, 0)} nanometer`,
            },
        ];
    const catatanRumus = `Dipakai hc = ${angka(HC, 0)} eV·nm. Eₙ = −13,6 / n² eV. Foton hanya membawa selisih dua tingkat.`;

    /* ----- Pembaca layar ----- */

    const deskripsi = ni === nf
        ? `Elektron atom hidrogen berada di tingkat n sama dengan ${ni}. Pilih tingkat tujuan yang berbeda supaya elektron bisa berpindah.`
        : status === 'siap'
            ? `Elektron di tingkat ${ni}, siap pindah ke tingkat ${nf}. Ini ${tr.emisi ? 'emisi' : 'absorpsi'} foton ${angka(tr.eFoton, 2)} elektronvolt.`
            : status === 'lompat'
                ? `Elektron sedang berpindah dari tingkat ${ni} ke ${nf}, ${tr.emisi ? 'memancarkan' : 'menyerap'} foton.`
                : `Elektron sudah di tingkat ${nf}. Foton ${tr.emisi ? 'dipancarkan' : 'diserap'} berenergi ${angka(tr.eFoton, 2)} elektronvolt, panjang gelombang ${angka(tr.lambda, 0)} nanometer.`;

    const deskripsiSpektrum = garisSpektrum.length === 0
        ? 'Pita spektrum panjang gelombang 90 sampai 2000 nanometer. Belum ada garis emisi.'
        : `Pita spektrum dengan ${garisSpektrum.length} garis emisi pada ${garisSpektrum.map((g) => `${angka(g.nm, 0)} nanometer`).join(', ')}.`;

    const sama = ni === nf;
    const aksi = tr.emisi ? 'Emisi' : 'Absorpsi';

    return (
        <SimShell
            panggung={
                <>
                    <Panggung gambar={gambar} deskripsi={deskripsi} />
                    <Panggung gambar={gambarSpektrum} deskripsi={deskripsiSpektrum} rasio={3} tinggiMin={120} />
                </>
            }
            kendaliPutar={
                sama ? (
                    <div className="flex flex-wrap items-center gap-3">
                        <Tombol jenis="utama" nonaktif onClick={() => undefined}>Pindahkan elektron</Tombol>
                        <p className="text-sm text-muted">Tingkat asal dan tujuan sama, jadi elektron tidak berpindah. Ubah salah satunya.</p>
                    </div>
                ) : (
                    <PlayBar
                        loop={loop}
                        onMulai={pindahkan}
                        onUlang={ulang}
                        labelMulai={status === 'lompat' ? 'Lanjut' : 'Pindahkan elektron'}
                        tambahan={garisSpektrum.length > 0 && (
                            <Tombol onClick={hapusGaris}>
                                <IconEraser size={16} stroke={2.5} aria-hidden="true" />
                                Hapus garis
                            </Tombol>
                        )}
                    />
                )
            }
            bacaan={
                <BarisBacaan>
                    <Bacaan label="Energi asal (Eᵢ)" nilai={angkaTetap(tr.eAsal, 2)} satuan="eV" />
                    <Bacaan label="Energi tujuan (Ef)" nilai={angkaTetap(tr.eTujuan, 2)} satuan="eV" />
                    <Bacaan label="Energi foton" nilai={angkaTetap(tr.eFoton, 2)} satuan="eV" sorot={status === 'selesai' ? 'lime' : undefined} />
                    <Bacaan label="Panjang gelombang (λ)" nilai={sama ? '–' : angkaTetap(tr.lambda, 0)} satuan="nm" />
                    <Bacaan label="Frekuensi (f)" nilai={sama ? '–' : angkaIlmiah(tr.frek, 2)} satuan="Hz" />
                    <Bacaan label={sama ? 'Deret' : `${aksi}, deret`} nilai={sama ? '–' : `${tr.deret}, ${tr.daerah}`} />
                </BarisBacaan>
            }
            pengatur={
                <>
                    <Slider label="Tingkat asal" simbol="nᵢ" nilai={ni} min={1} maks={TINGKAT_MAKS} onUbah={setNi} />
                    <Slider label="Tingkat tujuan" simbol="nf" nilai={nf} min={1} maks={TINGKAT_MAKS} onUbah={setNf} />
                    <p className="text-xs text-muted">
                        {sama
                            ? 'nᵢ sama dengan nf: tidak ada perpindahan.'
                            : tr.emisi
                                ? 'nᵢ lebih besar dari nf: elektron turun dan memancarkan foton (emisi).'
                                : 'nᵢ lebih kecil dari nf: elektron naik dengan menyerap foton (absorpsi).'}
                    </p>
                    <Tombol onClick={catatTingkat}>
                        <IconPencilPlus size={16} stroke={2.5} aria-hidden="true" />
                        Catat tingkat ini
                    </Tombol>
                    <p className="text-xs text-muted">
                        Tombol ini mencatat jari-jari dan energi tingkat elektron saat ini. Lalu ubah tingkatnya dan catat lagi.
                    </p>
                </>
            }
            rumus={<RumusHidup baris={barisRumus} catatan={catatanRumus} />}
            grafik={
                <Panel
                    judul="Grafik tingkat orbit"
                    ikon={<IconChartDots size={18} stroke={2.5} aria-hidden="true" />}
                >
                    <div className="mb-3">
                        <Pilihan
                            label="Besaran yang digambar"
                            labelTersembunyi
                            nilai={grafik}
                            pilihan={[{ nilai: 'energi', label: 'Energi (Eₙ)' }, { nilai: 'jari', label: 'Jari-jari (rₙ)' }]}
                            onUbah={setGrafik}
                        />
                    </div>
                    <GrafikHidup
                        ambil={ambilGrafik}
                        rasio={1.9}
                        deskripsi={grafik === 'energi'
                            ? `Grafik energi tingkat terhadap n. E1 sama dengan minus 13,6 elektronvolt, makin besar n makin dekat ke nol dan jaraknya makin rapat. Titik oranye di n sama dengan ${ni}, titik lime di n sama dengan ${nf}.`
                            : `Grafik jari-jari orbit terhadap n. Jari-jari naik sebanding n kuadrat, dari 0,529 angstrom di n sama dengan 1. Titik oranye di n sama dengan ${ni}, titik lime di n sama dengan ${nf}.`}
                    />
                    <p className="text-xs text-muted mt-2">
                        {grafik === 'energi'
                            ? 'Titik oranye: tingkat asal. Titik lime: tingkat tujuan. Makin ke atas, jarak antartingkat makin rapat.'
                            : 'Titik oranye: tingkat asal. Titik lime: tingkat tujuan. rₙ = n² × 0,529 Å.'}
                    </p>
                </Panel>
            }
            selidiki={
                <SelidikiHubungan
                    bebas={BEBAS}
                    terikat={TERIKAT}
                    percobaan={percobaan}
                    onHapus={() => setPercobaan([])}
                    ajakan="Pindahkan elektron, lalu ubah satu tingkat saja (misalnya tingkat asal) dan pindahkan lagi. Untuk jari-jari dan energi tingkat, pakai tombol Catat tingkat ini di panel pengatur."
                />
            }
            tantangan={<Tantangan daftar={TANTANGAN} selesai={selesai} />}
        />
    );
}

/** Teks biasa sebagai indeks, misalnya E dengan indeks "foton" */
function mtekst(s: string): string {
    return `<mtext>${s}</mtext>`;
}
