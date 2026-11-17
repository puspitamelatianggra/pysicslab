/* ============================================================
   SIMULASI: Radiasi Benda Hitam (Bab 4-2)
   ============================================================
   Susunan file: (1) fisika murni, (2) komponen React, (3) pembantu MathML.

   Hubungan yang harus bisa ditemukan siswa:
   - suhu naik → λ maks turun (berbanding terbalik)
   - suhu naik 2 kali → daya naik 16 kali (sebanding pangkat empat)
   - luas naik → daya naik sebanding, λ maks tetap
   - emisivitas tidak mengubah λ maks
   ============================================================ */

import { IconPencilPlus } from '@tabler/icons-react';
import { useState } from 'react';
import {
    angka, angkaIlmiah, angkaTetap, bulat, Ctx, garis, gambarSumbu, buatSkala, jepit, label, warnaSim,
} from '../../engine';
import {
    Bacaan, BarisBacaan, BarisRumus, Besaran, mfrac, mi, mn, mo, mtext, msub, msup,
    Panggung, Percobaan, Pilihan, RumusHidup, Sakelar, SelidikiHubungan, SimShell,
    Slider, Tantangan, Tombol, useTantangan,
} from '../../ui';

/* ---------- 1. Fisika ---------- */

export const H = 6.626e-34; // J·s
export const C = 2.998e8; // m/s
export const K_BOLTZMANN = 1.381e-23; // J/K
export const SIGMA = 5.67e-8; // W/(m²·K⁴)
export const B_WIEN = 2.898e-3; // m·K

/** Hukum Planck: radiansi spektral B(λ, T) dalam W/(m²·sr·m). λ dalam meter. */
export function planck(lambda: number, T: number): number {
    if (lambda <= 0 || T <= 0) return 0;
    const x = (H * C) / (lambda * K_BOLTZMANN * T);
    if (x > 700) return 0;
    return (2 * H * C * C) / (lambda ** 5) / (Math.exp(x) - 1);
}

/** Hukum pergeseran Wien: λ maks dalam meter. */
export const lambdaMaks = (T: number) => B_WIEN / T;

/** Hukum Stefan-Boltzmann: daya total (W). */
export const dayaTotal = (T: number, A: number, e: number) => e * SIGMA * A * T ** 4;

/** Daya per satuan luas (W/m²). */
export const dayaPerLuas = (T: number, e: number) => e * SIGMA * T ** 4;

/** Tinggi puncak spektrum emisi (kW per m² per μm) untuk benda berpancaran e. */
export const tinggiPuncak = (T: number, e: number) => Math.PI * e * planck(lambdaMaks(T), T) * 1e-9;

/** π ∫ B dλ, harus sama dengan σT⁴ (integral trapesium pada skala logaritmik λ). */
export function integralPlanck(T: number): number {
    const lMin = lambdaMaks(T) / 200;
    const lMaks = lambdaMaks(T) * 400;
    const N = 20000;
    const a = Math.log(lMin);
    const b = Math.log(lMaks);
    const d = (b - a) / N;
    let jumlah = 0;
    for (let i = 0; i <= N; i++) {
        const l = Math.exp(a + i * d);
        const nilai = planck(l, T) * l; // dλ = λ d(ln λ)
        jumlah += i === 0 || i === N ? nilai / 2 : nilai;
    }
    return Math.PI * jumlah * d;
}

export type DaerahSpektrum = 'ultraungu' | 'tampak' | 'inframerah';

export function daerahPuncak(nm: number): DaerahSpektrum {
    return nm < 380 ? 'ultraungu' : nm > 750 ? 'inframerah' : 'tampak';
}

/** Warna fisis cahaya tampak (380 sampai 750 nm), dipakai untuk pita warna di dasar grafik. */
export function warnaPanjangGelombang(nm: number): string {
    let r = 0, g = 0, b = 0;
    if (nm < 440) { r = (440 - nm) / 60; b = 1; }
    else if (nm < 490) { g = (nm - 440) / 50; b = 1; }
    else if (nm < 510) { g = 1; b = (510 - nm) / 20; }
    else if (nm < 580) { r = (nm - 510) / 70; g = 1; }
    else if (nm < 645) { r = 1; g = (645 - nm) / 65; }
    else { r = 1; }
    const hex = (v: number) => Math.round(255 * jepit(v, 0, 1)).toString(16).padStart(2, '0');
    return `#${hex(r)}${hex(g)}${hex(b)}`;
}

const TITIK_PIJAR: { T: number; rgb: [number, number, number] }[] = [
    { T: 300, rgb: [58, 58, 58] },
    { T: 800, rgb: [58, 58, 58] },
    { T: 1100, rgb: [120, 18, 18] },
    { T: 1600, rgb: [205, 45, 20] },
    { T: 2300, rgb: [255, 125, 30] },
    { T: 3000, rgb: [255, 175, 70] },
    { T: 4000, rgb: [255, 208, 115] },
    { T: 5500, rgb: [255, 240, 200] },
    { T: 7000, rgb: [255, 255, 255] },
    { T: 10000, rgb: [200, 222, 255] },
];

/** Warna pijar benda panas (satu warna isi datar) dan namanya. */
export function warnaPijar(T: number): { warna: string; nama: string } {
    let rgb: [number, number, number] = TITIK_PIJAR[TITIK_PIJAR.length - 1].rgb;
    for (let i = 0; i < TITIK_PIJAR.length - 1; i++) {
        const a = TITIK_PIJAR[i];
        const b = TITIK_PIJAR[i + 1];
        if (T <= b.T) {
            const f = jepit((T - a.T) / (b.T - a.T), 0, 1);
            rgb = [0, 1, 2].map((k) => Math.round(a.rgb[k] + f * (b.rgb[k] - a.rgb[k]))) as [number, number, number];
            break;
        }
    }
    const nama = T < 800 ? 'hitam' : T < 1300 ? 'merah gelap' : T < 1900 ? 'merah' : T < 2500 ? 'jingga'
        : T < 3500 ? 'jingga kekuningan' : T < 4800 ? 'kuning' : T < 6500 ? 'putih kekuningan'
            : T < 8000 ? 'putih' : 'putih kebiruan';
    return { warna: `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`, nama };
}

/** Rentang sumbu mendatar (nm) dari pilihan tetap, cukup lebar untuk memuat puncak semua benda. */
export const RENTANG_NM = [3000, 6000, 12000, 30000];
export function pilihRentang(lambdaMaksTerbesarNm: number): number {
    return RENTANG_NM.find((r) => lambdaMaksTerbesarNm * 2.2 <= r) ?? RENTANG_NM[RENTANG_NM.length - 1];
}

/** Panjang gelombang dalam nm atau μm, tergantung besarnya. */
export function teksPanjang(nm: number): string {
    return nm >= 1000 ? `${angka(nm / 1000, 2)} μm` : `${angka(nm, 0)} nm`;
}

/* ---------- 2. Komponen ---------- */

const BEBAS: Besaran[] = [
    { id: 'T', label: 'suhu', simbol: 'T', satuan: 'K', desimal: 0 },
    { id: 'A', label: 'luas permukaan', simbol: 'A', satuan: 'm²', desimal: 1 },
    { id: 'e', label: 'emisivitas', simbol: 'e', satuan: '', desimal: 2 },
];

const TERIKAT: Besaran[] = [
    { id: 'lam', label: 'panjang gelombang puncak', simbol: 'λ maks', satuan: 'nm', desimal: 0 },
    { id: 'P', label: 'daya total', simbol: 'P', satuan: 'W', desimal: 0 },
    { id: 'tinggi', label: 'tinggi puncak intensitas', simbol: 'I puncak', satuan: 'kW/m² per μm', desimal: 1 },
];

const TANTANGAN = [
    { id: 'hijau', teks: 'Cari suhu yang puncak spektrumnya berada di cahaya hijau sekitar 500 nm (boleh meleset 15 nm), lalu tekan "Catat pengukuran".' },
    { id: 'enamBelas', teks: 'Catat dua pengukuran dengan suhu dua kali lipat, luas dan emisivitas sama, lalu lihat bahwa dayanya 16 kali.' },
    { id: 'inframerah', teks: 'Cari suhu tertinggi yang puncaknya masih di inframerah (λ maks di atas 750 nm). Catat pengukuran yang suhunya hanya sampai 100 K di bawah batas 3.864 K.' },
];

const CONTOH_SUHU = [
    { nilai: 310, label: 'Tubuh 310 K' },
    { nilai: 2800, label: 'Lampu pijar 2.800 K' },
    { nilai: 5800, label: 'Matahari 5.800 K' },
    { nilai: 10000, label: 'Bintang biru 10.000 K' },
];

export default function RadiasiBendaHitam() {
    const [T, setT] = useState(5800);
    const [A, setA] = useState(1);
    const [e, setE] = useState(1);
    const [banding, setBanding] = useState(false);
    const [T2, setT2] = useState(3000);
    const [skala, setSkala] = useState<'otomatis' | 'tetap'>('otomatis');

    const [percobaan, setPercobaan] = useState<Percobaan[]>([]);
    const [selesai, tandai] = useTantangan();

    const lamNm = lambdaMaks(T) * 1e9;
    const lam2Nm = lambdaMaks(T2) * 1e9;
    const daya = dayaTotal(T, A, e);
    const perLuas = dayaPerLuas(T, e);
    const pijar = warnaPijar(T);
    const pijar2 = warnaPijar(T2);
    const daerah = daerahPuncak(lamNm);

    const catat = () => {
        const baru: Percobaan = { nilai: { T, A, e, lam: lamNm, P: daya, tinggi: tinggiPuncak(T, e) } };
        setPercobaan((lama) => [...lama, baru]);

        // Tantangan 1: puncak di hijau
        if (Math.abs(lamNm - 500) <= 15) tandai('hijau');
        // Tantangan 3: puncak di inframerah, suhu dalam 100 K dari batas
        if (lamNm > 750 && T >= 3864 - 100 && T <= 3864) tandai('inframerah');
        // Tantangan 2: dua pengukuran, suhu 2 kali, A dan e sama, daya 16 kali
        for (const q of percobaan) {
            const n = q.nilai;
            if (Math.abs(n.A - A) > 1e-9 || Math.abs(n.e - e) > 1e-9) continue;
            for (const [kecil, besar] of [[n, baru.nilai], [baru.nilai, n]]) {
                if (Math.abs(besar.T / kecil.T - 2) < 1e-6 && Math.abs(besar.P / kecil.P / 16 - 1) < 0.01) tandai('enamBelas');
            }
        }
    };

    /* ----- Gambar panggung: spektrum ----- */

    const gambar = (ctx: Ctx, w: number, h: number) => {
        const c = warnaSim();
        const badan = [{ T, e, putus: false }, ...(banding ? [{ T: T2, e, putus: true }] : [])];

        // Benda berpijar di bagian atas
        const kolom = banding ? w / 2 : w;
        badan.forEach((b, i) => {
            const pj = warnaPijar(b.T);
            const x0 = i * kolom;
            bulat(ctx, x0 + 30, 32, 20, { isi: pj.warna, tebal: 2.5 });
            label(ctx, `${angka(b.T, 0)} K`, x0 + 58, 24, { ukuran: 13 });
            label(ctx, pj.nama, x0 + 58, 42, { ukuran: 11, tebal: 600, warna: c.redup });
            if (i === 1) garis(ctx, x0 - 1, 8, x0 - 1, 56, { warna: c.kisi, tebal: 1.5 });
        });

        // Rentang sumbu mendatar
        const lamMaksTerbesar = Math.max(...badan.map((b) => lambdaMaks(b.T) * 1e9));
        const rentang = pilihRentang(lamMaksTerbesar);
        const mikron = rentang >= 6000;
        const bagi = mikron ? 1000 : 1;
        const s = buatSkala({
            w, h, xMin: 0, xMaks: rentang / bagi, yMin: 0, yMaks: 1,
            pad: { kiri: 14, kanan: 14, atas: 70, bawah: 34 },
        });

        // Tinggi sumbu tegak
        const puncak = badan.map((b) => b.e * planck(lambdaMaks(b.T), b.T));
        const yMaks = skala === 'otomatis'
            ? Math.max(...puncak) * 1.3
            : planck(lambdaMaks(8000), 8000) * 1.15;
        const yPiksel = (nilai: number) => s.bawah - (nilai / yMaks) * (s.bawah - s.atas);

        gambarSumbu(ctx, s, { labelX: `λ (${mikron ? 'μm' : 'nm'})`, labelY: 'intensitas per λ', angkaY: false });

        // Kurva
        const N = Math.max(120, Math.round(s.kanan - s.kiri));
        const buatTitik = (b: { T: number; e: number }) => {
            const t: { x: number; y: number }[] = [];
            for (let i = 1; i <= N; i++) {
                const lamNmI = (rentang * i) / N;
                t.push({ x: s.kiri + ((s.kanan - s.kiri) * i) / N, y: yPiksel(b.e * planck(lamNmI * 1e-9, b.T)) });
            }
            return t;
        };
        ctx.save();
        ctx.beginPath();
        ctx.rect(s.kiri, s.atas - 2, s.kanan - s.kiri + 2, s.bawah - s.atas + 4);
        ctx.clip();
        badan.forEach((b) => {
            const t = buatTitik(b);
            if (!b.putus) {
                // Luas di bawah kurva, isi datar
                ctx.beginPath();
                ctx.moveTo(t[0].x, s.bawah);
                for (const p of t) ctx.lineTo(p.x, p.y);
                ctx.lineTo(t[t.length - 1].x, s.bawah);
                ctx.closePath();
                ctx.fillStyle = c.oranyeLembut;
                ctx.fill();
            }
        });
        // Pita cahaya tampak di dasar grafik
        const lamA = 380;
        const lamB = 750;
        if (lamA < rentang) {
            for (let nm = lamA; nm < Math.min(lamB, rentang); nm += 10) {
                const x1 = s.kiri + ((nm / rentang) * (s.kanan - s.kiri));
                const lebar = Math.max(1, (10 / rentang) * (s.kanan - s.kiri) + 0.5);
                ctx.fillStyle = warnaPanjangGelombang(nm + 5);
                ctx.fillRect(x1, s.bawah - 9, lebar, 9);
            }
        }
        badan.forEach((b) => {
            const t = buatTitik(b);
            ctx.beginPath();
            ctx.moveTo(t[0].x, t[0].y);
            for (const p of t) ctx.lineTo(p.x, p.y);
            ctx.lineJoin = 'round';
            ctx.lineWidth = 3.5;
            ctx.strokeStyle = b.putus ? c.biru : c.gelap;
            ctx.setLineDash(b.putus ? [8, 5] : []);
            ctx.stroke();
        });
        ctx.setLineDash([]);
        ctx.restore();

        // Penanda puncak (λ maks)
        badan.forEach((b, i) => {
            const lm = lambdaMaks(b.T) * 1e9;
            if (lm >= rentang) return;
            const px = s.kiri + (lm / rentang) * (s.kanan - s.kiri);
            const py = yPiksel(b.e * planck(lambdaMaks(b.T), b.T));
            const atasBingkai = py < s.atas;
            garis(ctx, px, Math.max(py, s.atas), px, s.bawah - 9, { warna: b.putus ? c.biru : c.gelap, tebal: 1.5, putus: [4, 4] });
            const ly = Math.max(py, s.atas + 2) - 9 - i * 22;
            label(ctx, `λ maks = ${teksPanjang(lm)}${atasBingkai ? ' (puncak di atas)' : ''}`, jepit(px, s.kiri + 62, s.kanan - 62), Math.max(ly, 8), {
                rata: 'center', ukuran: 11, latar: b.putus ? c.krem : c.lime,
            });
        });
    };

    /* ----- Rumus hidup ----- */

    const kali10 = (m: string, p: number) => `${mn(m)}${mo('×')}${msup(mn(10), mn(String(p).replace('-', '−')))}`;
    const pangkat10 = (nilai: number) => {
        const p = Math.floor(Math.log10(Math.abs(nilai)));
        return { m: angka(nilai / 10 ** p, 2), p };
    };
    const dayaP = pangkat10(daya);
    const barisRumus: BarisRumus[] = [
        {
            mathml: `${msub(mi('λ'), mtext('maks').replace('&nbsp;', ''))}${mo('=')}${mfrac(mi('b'), mi('T'))}`,
            baca: 'lambda maks sama dengan b per T',
        },
        {
            mathml: `${mo('=')}${mfrac(kali10('2,898', -3), mn(angka(T, 0)))}${mo('=')}${mn(angka(lamNm, 1))}${mtext('nm')}`,
            baca: `sama dengan 2,898 kali sepuluh pangkat min tiga per ${angka(T, 0)}, yaitu ${angka(lamNm, 1)} nanometer`,
        },
        {
            mathml: `${mi('P')}${mo('=')}${mi('e')}${mi('σ')}${mi('A')}${msup(mi('T'), mn(4))}`,
            baca: 'P sama dengan e sigma A T pangkat empat',
        },
        {
            mathml: `${mo('=')}${mn(angka(e, 2))}${mo('×')}${kali10('5,67', -8)}${mo('×')}${mn(angka(A, 1))}${mo('×')}${msup(mn(angka(T, 0)), mn(4))}`,
            baca: `sama dengan ${angka(e, 2)} kali 5,67 kali sepuluh pangkat min delapan kali ${angka(A, 1)} kali ${angka(T, 0)} pangkat empat`,
        },
        {
            mathml: `${mo('=')}${daya >= 1000 || daya < 0.01 ? kali10(dayaP.m, dayaP.p) : mn(angka(daya, 1))}${mtext('W')}`,
            baca: `sama dengan ${angkaIlmiah(daya, 2)} watt`,
        },
    ];

    const deskripsi = `Grafik spektrum benda hitam bersuhu ${angka(T, 0)} kelvin. Puncak spektrum di panjang gelombang ${teksPanjang(lamNm)}, daerah ${daerah}. Benda berpijar berwarna ${pijar.nama}. Daya total ${angkaIlmiah(daya, 2)} watt.${banding ? ` Benda pembanding bersuhu ${angka(T2, 0)} kelvin, puncak di ${teksPanjang(lam2Nm)}, berwarna ${pijar2.nama}.` : ''}`;

    return (
        <SimShell
            panggung={<Panggung gambar={gambar} deskripsi={deskripsi} rasio={16 / 12} tinggiMin={290} />}
            kendaliPutar={
                <div className="flex flex-wrap items-center gap-3">
                    <Tombol jenis="utama" onClick={catat}>
                        <IconPencilPlus size={16} stroke={2.5} aria-hidden="true" />
                        Catat pengukuran
                    </Tombol>
                    <p className="text-xs text-muted">Tinggi kurva tidak berskala sama untuk semua suhu. Lihat pilihan skala sumbu tegak.</p>
                </div>
            }
            bacaan={
                <BarisBacaan>
                    <Bacaan label="λ maks" nilai={teksPanjang(lamNm)} sorot="lime" />
                    <Bacaan label="Puncak di daerah" nilai={daerah} />
                    <Bacaan label="Daya total (P)" nilai={angkaIlmiah(daya, 2)} satuan="W" />
                    <Bacaan label="Daya per luas" nilai={angkaIlmiah(perLuas, 2)} satuan="W/m²" />
                    <Bacaan label="Warna pijar" nilai={pijar.nama} />
                    {banding
                        ? <Bacaan label="λ maks pembanding" nilai={teksPanjang(lam2Nm)} />
                        : <Bacaan label="Suhu (T)" nilai={angka(T, 0)} satuan="K" />}
                </BarisBacaan>
            }
            pengatur={
                <>
                    <Pilihan label="Contoh suhu" nilai={T} pilihan={CONTOH_SUHU} onUbah={setT} />
                    <Slider label="Suhu" simbol="T" nilai={T} min={300} maks={10000} langkah={100} satuan="K" onUbah={setT} />
                    <Slider label="Luas permukaan" simbol="A" nilai={A} min={0.1} maks={2} langkah={0.1} satuan="m²" onUbah={setA} />
                    <Slider label="Emisivitas" simbol="e" nilai={e} min={0.1} maks={1} langkah={0.05} desimal={2} onUbah={setE} />
                    <Sakelar label="Benda pembanding" aktif={banding} onUbah={setBanding} teksAktif="Ada" catatan="Kurva putus-putus biru, dengan luas dan emisivitas yang sama." />
                    {banding && <Slider label="Suhu pembanding" simbol="T" nilai={T2} min={300} maks={10000} langkah={100} satuan="K" onUbah={setT2} />}
                    <Pilihan
                        label="Skala sumbu tegak"
                        nilai={skala}
                        pilihan={[{ nilai: 'otomatis', label: 'Sesuaikan otomatis' }, { nilai: 'tetap', label: 'Skala tetap' }]}
                        onUbah={setSkala}
                    />
                    <p className="text-xs text-muted -mt-1">
                        {skala === 'tetap'
                            ? 'Skala tetap dipakai untuk membandingkan suhu. Benda dingin tampak hampir datar karena intensitasnya jauh lebih kecil.'
                            : 'Otomatis: puncak selalu pas di bingkai, jadi tinggi kurva tidak bisa dibandingkan antarsuhu.'}
                    </p>
                </>
            }
            rumus={
                <RumusHidup
                    baris={barisRumus}
                    catatan="b = 2,898 × 10⁻³ m·K dan σ = 5,67 × 10⁻⁸ W/(m²·K⁴). Emisivitas hanya mengubah daya dan tinggi kurva, tidak mengubah letak puncak."
                />
            }
            selidiki={
                <SelidikiHubungan
                    bebas={BEBAS}
                    terikat={TERIKAT}
                    percobaan={percobaan}
                    onHapus={() => setPercobaan([])}
                    ajakan='Tekan "Catat pengukuran", ubah satu besaran saja (misalnya suhu), lalu catat lagi. Ulangi dengan 3 nilai atau lebih.'
                />
            }
            tantangan={<Tantangan daftar={TANTANGAN} selesai={selesai} />}
        />
    );
}
