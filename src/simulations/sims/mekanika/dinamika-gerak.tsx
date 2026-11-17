/* ============================================================
   SIMULASI: Dinamika Gerak, Hukum Newton dan Gesekan (Bab 1-6 dan 1-7)
   ============================================================
   Susunan file mengikuti gerak-parabola.tsx:
   1. Fungsi fisika murni (tanpa React), supaya mudah diperiksa.
   2. Komponen: state pengatur → keadaan gerak (useRef) → loop → gambar → <SimShell>.

   Hubungan yang harus bisa ditemukan siswa:
   - F naik → a naik (linear setelah balok mulai bergerak)
   - m naik → a turun
   - gesek statis menyesuaikan gaya tarik sampai batas μₛ·N, lalu turun jadi μₖ·N
   - θ naik → N turun dan w sin θ naik
   - di bidang miring dengan F = 0 (dan μ tetap), massa tidak mengubah a

   Arah positif: naik sepanjang bidang (ke kanan saat bidang datar).
   ============================================================ */

import { IconChartDots } from '@tabler/icons-react';
import { useEffect, useMemo, useRef, useState } from 'react';
import {
    angka, angkaTetap, Ctx, garis, jepit, kotak, label, OpsiGrafik, panah, rad, useSimLoop, warnaSim,
} from '../../engine';
import {
    Bacaan, BarisBacaan, BarisRumus, Besaran, GrafikHidup, mfrac, mi, mn, mo, mtext, msub,
    Panel, Panggung, Percobaan, Pilihan, PlayBar, RumusHidup, Sakelar, SelidikiHubungan, SimShell,
    Slider, Tantangan, useTantangan,
} from '../../ui';

/* ---------- 1. Fisika ---------- */

const G = 10; // m/s², dibulatkan seperti di buku SMA
const PANJANG_BIDANG = 10; // m, balok mulai di tengah bidang
const JARAK_UJUNG = PANJANG_BIDANG / 2; // m, jarak dari titik awal ke tiap ujung bidang
const WAKTU_MAKS = 6; // s

export interface Param {
    F: number;     // gaya tarik sejajar bidang, ke atas bidang (N)
    m: number;     // massa (kg)
    theta: number; // sudut bidang (derajat)
    mus: number;   // koefisien gesek statis
    muk: number;   // koefisien gesek kinetis (dijepit ke μₛ)
}

export interface Gaya {
    N: number;      // gaya normal (N)
    ws: number;     // komponen berat sejajar bidang, w sin θ (N)
    f: number;      // gaya gesek sepanjang bidang, positif = naik bidang (N)
    jenis: 'statis' | 'kinetis';
    bersih: number; // ΣF sepanjang bidang, setelah gesekan (N)
    a: number;      // percepatan sepanjang bidang (m/s²)
}

/** μₖ tidak boleh lebih besar daripada μₛ. */
export function mukEfektif(p: Param): number {
    return Math.min(p.muk, p.mus);
}

/** N = m·g·cos θ */
export function gayaNormal(m: number, thetaDerajat: number): number {
    return m * G * Math.cos(rad(thetaDerajat));
}

/** w sin θ = m·g·sin θ */
export function komponenBerat(m: number, thetaDerajat: number): number {
    return m * G * Math.sin(rad(thetaDerajat));
}

/** Sudut terkecil saat balok mulai meluncur sendiri tanpa gaya tarik: tan θ = μₛ (derajat). */
export function sudutMeluncur(mus: number): number {
    return (Math.atan(mus) * 180) / Math.PI;
}

/**
 * Gaya pada balok yang kecepatannya v (sepanjang bidang).
 * v = 0: balok diam, periksa syarat statis |F − w sin θ| ≤ μₛ·N. Kalau terpenuhi, gesekan statis
 * melawan gaya penggerak persis dan a = 0. Kalau tidak, balok mulai bergerak searah gaya penggerak.
 * v ≠ 0: gesekan kinetis μₖ·N melawan arah gerak.
 */
export function keadaanGaya(p: Param, v: number): Gaya {
    const N = gayaNormal(p.m, p.theta);
    const ws = komponenBerat(p.m, p.theta);
    const penggerak = p.F - ws;
    let arah: number;
    if (Math.abs(v) < 1e-12) {
        if (Math.abs(penggerak) <= p.mus * N + 1e-9) {
            return { N, ws, f: -penggerak, jenis: 'statis', bersih: 0, a: 0 };
        }
        arah = Math.sign(penggerak);
    } else {
        arah = Math.sign(v);
    }
    const f = -arah * mukEfektif(p) * N;
    const bersih = penggerak + f;
    return { N, ws, f, jenis: 'kinetis', bersih, a: bersih / p.m };
}

/** Satu langkah waktu dt dengan percepatan tetap selama langkah. Mengembalikan posisi dan kecepatan baru. */
export function langkahFisika(p: Param, x: number, v: number, dt: number): { x: number; v: number } {
    // Kecepatan yang hanya sisa galat pembulatan dianggap nol, sama seperti di keadaanGaya
    if (Math.abs(v) < 1e-12) v = 0;
    const g = keadaanGaya(p, v);
    if (v === 0) {
        if (g.jenis === 'statis') return { x, v: 0 };
        return { x: x + 0.5 * g.a * dt * dt, v: g.a * dt };
    }
    const vBaru = v + g.a * dt;
    if (vBaru * v <= 0) {
        // Kecepatan berganti tanda di tengah langkah: balok berhenti. Syarat statis diperiksa lagi pada langkah berikutnya.
        const ts = Math.abs(v / g.a);
        return { x: x + (v * ts) / 2, v: 0 };
    }
    return { x: x + v * dt + 0.5 * g.a * dt * dt, v: vBaru };
}

/** Gaya gesek (besarnya) untuk balok yang mulai dari diam, sebagai fungsi gaya tarik F. */
export function gesekTerhadapTarik(p: Param, F: number): number {
    const g = keadaanGaya({ ...p, F }, 0);
    return Math.abs(g.f);
}

/** Titik kurva teori gesek terhadap gaya tarik: naik/turun linear sampai batas μₛN, lalu loncat turun ke μₖN. */
export function kurvaGesek(p: Param, Fmaks: number): { x: number; y: number }[] {
    const N = gayaNormal(p.m, p.theta);
    const ws = komponenBerat(p.m, p.theta);
    const batas = [0, ws - p.mus * N, ws, ws + p.mus * N, Fmaks]
        .filter((b) => b >= 0 && b <= Fmaks)
        .sort((a, b) => a - b);
    const titik: { x: number; y: number }[] = [];
    for (const b of batas) {
        const kiri = { x: b, y: gesekTerhadapTarik(p, Math.max(0, b - 1e-7)) };
        const kanan = { x: b, y: gesekTerhadapTarik(p, Math.min(Fmaks, b + 1e-7)) };
        titik.push(kiri);
        if (Math.abs(kiri.y - kanan.y) > 1e-4) titik.push(kanan);
    }
    return titik;
}

/* ---------- 2. Komponen ---------- */

type Status = 'siap' | 'jalan' | 'selesai';
type Grafik = 'v' | 'f';

const BEBAS: Besaran[] = [
    { id: 'F', label: 'gaya tarik', simbol: 'F', satuan: 'N', desimal: 0 },
    { id: 'm', label: 'massa', simbol: 'm', satuan: 'kg', desimal: 0 },
    { id: 'theta', label: 'sudut bidang', simbol: 'θ', satuan: '°', desimal: 0 },
    { id: 'muk', label: 'koefisien gesek kinetis', simbol: 'μₖ', satuan: '', desimal: 2 },
];

const TERIKAT: Besaran[] = [
    { id: 'a', label: 'percepatan', simbol: 'a', satuan: 'm/s²', desimal: 2 },
    { id: 'N', label: 'gaya normal', simbol: 'N', satuan: 'N', desimal: 1 },
    { id: 'f', label: 'gaya gesek', simbol: 'f', satuan: 'N', desimal: 1 },
];

const TANTANGAN = [
    { id: 'tarikKecil', teks: 'Di bidang datar (θ = 0) dengan gesekan, cari gaya tarik terkecil yang membuat balok mulai bergerak. Balok harus bergerak dengan F tidak lebih dari 5% di atas μₛ·N.' },
    { id: 'massaSama', teks: 'Atur F = 0 dan naikkan sudut sampai balok meluncur sendiri. Lalu jalankan dua percobaan dengan sudut yang sama dan massa berbeda. Percepatannya akan sama.' },
    { id: 'a2', teks: 'Atur supaya balok bergerak dengan percepatan tepat 2 m/s² (boleh meleset 0,1). Jalankan sampai selesai.' },
];


/** Bilangan di MathML; bilangan negatif diberi kurung supaya tanda tidak tertukar dengan operator. */
function bil(x: number, desimal = 1): string {
    const teks = mn(angka(x, desimal));
    return x < -1e-9 ? `${mo('(')}${teks}${mo(')')}` : teks;
}

export default function DinamikaGerak() {
    // Pengatur
    const [F, setF] = useState(40);
    const [m, setM] = useState(10);
    const [theta, setTheta] = useState(0);
    const [mus, setMus] = useState(0.5);
    const [muk, setMuk] = useState(0.3);
    const [komponen, setKomponen] = useState(false);
    const [grafik, setGrafik] = useState<Grafik>('v');

    const mukEf = Math.min(muk, mus);
    const param: Param = useMemo(() => ({ F, m, theta, mus, muk: mukEf }), [F, m, theta, mus, mukEf]);

    // Keadaan gerak
    const xRef = useRef(0); // perpindahan dari titik awal, positif naik bidang (m)
    const vRef = useRef(0);
    const tRef = useRef(0);
    const aGerakRef = useRef(0); // percepatan terakhir saat balok bergerak
    const riwayatRef = useRef<{ x: number; y: number }[]>([{ x: 0, y: 0 }]);
    const cuplikRef = useRef(0);
    const statusRef = useRef<Status>('siap');
    const [status, setStatus] = useState<Status>('siap');
    const aturStatus = (s: Status) => {
        statusRef.current = s;
        setStatus(s);
    };

    const [percobaan, setPercobaan] = useState<Percobaan[]>([]);
    const [selesai, tandai] = useTantangan();

    const loop = useSimLoop((dt) => {
        if (statusRef.current === 'selesai') return;
        if (statusRef.current === 'siap') aturStatus('jalan');
        const g = keadaanGaya(param, vRef.current);
        if (g.jenis === 'kinetis') aGerakRef.current = g.a;
        const hasil = langkahFisika(param, xRef.current, vRef.current, dt);
        xRef.current = hasil.x;
        vRef.current = hasil.v;
        tRef.current += dt;
        if (tRef.current >= cuplikRef.current) {
            riwayatRef.current.push({ x: tRef.current, y: vRef.current });
            cuplikRef.current += 0.05;
        }
        if (Math.abs(xRef.current) >= JARAK_UJUNG) {
            xRef.current = Math.sign(xRef.current) * JARAK_UJUNG;
            saatSelesai();
        } else if (tRef.current >= WAKTU_MAKS) {
            saatSelesai();
        }
    }); // dt tetap dari useSimLoop

    function saatSelesai() {
        aturStatus('selesai');
        loop.jeda();
        riwayatRef.current.push({ x: tRef.current, y: vRef.current });
        const akhir = keadaanGaya(param, vRef.current);
        const gerak = Math.abs(xRef.current) > 0.02;
        const aCatat = gerak ? aGerakRef.current : 0;
        const baru: Percobaan = {
            nilai: {
                F, m, theta, muk: mukEf, mus,
                a: aCatat, N: akhir.N, f: Math.abs(akhir.f),
            },
        };
        setPercobaan((p) => [...p, baru]);

        // Periksa tantangan
        if (gerak) {
            const N = gayaNormal(m, theta);
            if (theta === 0 && mus >= 0.1 && F > mus * N && F <= 1.05 * mus * N) tandai('tarikKecil');
            if (Math.abs(Math.abs(aCatat) - 2) <= 0.1) tandai('a2');
            if (F === 0 && theta > 0) {
                for (const p of percobaan) {
                    const q = p.nilai;
                    if (q.F === 0 && q.theta === theta && q.mus === mus && q.muk === mukEf
                        && q.m !== m && q.a !== 0 && Math.abs(q.a - aCatat) < 0.01) {
                        tandai('massaSama');
                    }
                }
            }
        }
    }

    const ulangKeadaan = () => {
        xRef.current = 0;
        vRef.current = 0;
        tRef.current = 0;
        aGerakRef.current = 0;
        riwayatRef.current = [{ x: 0, y: 0 }];
        cuplikRef.current = 0.05;
        aturStatus('siap');
    };

    // Pengatur diubah: balok kembali ke titik awal
    useEffect(() => {
        ulangKeadaan();
        loop.jeda();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [F, m, theta, mus, mukEf]);

    const mulai = () => {
        if (statusRef.current === 'selesai') ulangKeadaan();
        loop.mainkan();
    };

    const ulang = () => {
        ulangKeadaan();
        loop.jeda();
    };

    // Bacaan (diperbarui sekitar 12 kali per detik lewat loop.denyut)
    const kini = keadaanGaya(param, vRef.current);
    const v = vRef.current;
    const x = xRef.current;
    const fDown = -kini.f; // gesekan yang menahan gerak naik bidang, sesuai rumus ΣF = F − w sin θ − f

    /* ----- Gambar panggung ----- */

    const gambar = (ctx: Ctx, w: number, h: number) => {
        const c = warnaSim();
        const kg = keadaanGaya(param, vRef.current);
        const xKini = xRef.current;
        const th = rad(theta);
        const cos = Math.cos(th);
        const sin = Math.sin(th);

        // Ukuran mengikuti panggung: sisi balok 14% lebar (minimal 44 px), panah paling panjang 25% tinggi
        const sisi = Math.max(44, w * 0.14);
        const bl = sisi;
        const bt = sisi * 0.8;
        const ukTeks = Math.round(Math.min(18, Math.max(13, sisi * 0.3)));
        const panahMaks = h * 0.25;
        const pxPerN = panahMaks / 120;

        // Bidang miring digambar mengelilingi titik tengah yang bergeser sedikit menurut sudut, supaya
        // panggung terpakai penuh dan diagram gaya tetap di dalamnya. Bidang datar: garis tanah di 68% tinggi.
        const cy = h * (0.68 - 0.18 * (sin / 0.866));
        const cx = w / 2;
        let Lpx = w * 0.72;
        if (sin > 0.01) Lpx = Math.min(Lpx, (2 * (cy - 0.08 * h)) / sin, (2 * (0.97 * h - cy)) / sin);
        const pxPerM = Lpx / PANJANG_BIDANG;
        const arah = { x: cos, y: -sin };   // naik bidang (koordinat layar)
        const normal = { x: -sin, y: -cos }; // keluar dari permukaan
        const p0 = { x: cx - arah.x * Lpx / 2, y: cy - arah.y * Lpx / 2 };
        const p1 = { x: cx + arah.x * Lpx / 2, y: cy + arah.y * Lpx / 2 };

        // Tanah dan baji bidang miring
        ctx.save();
        ctx.fillStyle = c.krem;
        ctx.fillRect(0, p0.y, w, h - p0.y);
        ctx.strokeStyle = c.gelap;
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.moveTo(0, p0.y);
        ctx.lineTo(w, p0.y);
        ctx.stroke();
        if (theta > 0) {
            ctx.beginPath();
            ctx.moveTo(p0.x, p0.y);
            ctx.lineTo(p1.x, p1.y);
            ctx.lineTo(p1.x, p0.y);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
        }
        ctx.restore();

        // Penanda ujung bidang
        for (const u of [p0, p1]) {
            garis(ctx, u.x, u.y, u.x + normal.x * sisi * 0.4, u.y + normal.y * sisi * 0.4, { tebal: 3 });
        }

        // Keterangan sudut
        label(ctx, theta === 0 ? 'datar' : `θ = ${theta}°`, p0.x + 8, p0.y + 8 + ukTeks, { ukuran: ukTeks - 1 });

        // Balok, dengan massa di bagian atas tengah supaya tidak tertimpa panah berat dari pusat
        const ux = cx + arah.x * xKini * pxPerM + normal.x * bt / 2;
        const uy = cy + arah.y * xKini * pxPerM + normal.y * bt / 2;
        ctx.save();
        ctx.translate(ux, uy);
        ctx.rotate(-th);
        kotak(ctx, -bl / 2, -bt / 2, bl, bt, { isi: c.lime, tebal: 2.5 });
        label(ctx, `${angka(m, 0)} kg`, 0, -bt * 0.22, { rata: 'center', ukuran: ukTeks });
        ctx.restore();

        // Diagram gaya bebas. Panjang sebanding besar gaya, dibatasi, dan dipotong supaya ujungnya tetap di panggung.
        const berat = m * G;
        const panjang = (besar: number) => Math.min(panahMaks, besar * pxPerN);
        const gambarGaya = (ox: number, oy: number, dx: number, dy: number, besar: number, warna: string, simbol: string) => {
            let len = panjang(besar);
            if (dx > 1e-6) len = Math.min(len, (w - 14 - ox) / dx);
            if (dx < -1e-6) len = Math.min(len, (ox - 14) / -dx);
            if (dy > 1e-6) len = Math.min(len, (h - 14 - oy) / dy);
            if (dy < -1e-6) len = Math.min(len, (oy - 14) / -dy);
            len = Math.max(0, len);
            panah(ctx, ox, oy, ox + dx * len, oy + dy * len, { warna, tebal: 3.5 });
            if (len >= 8) {
                const jarak = len + ukTeks * 0.9;
                label(ctx, simbol, jepit(ox + dx * jarak, 10, w - 10), jepit(oy + dy * jarak, 10, h - 10), { rata: 'center', ukuran: ukTeks });
            }
        };

        // Komponen berat (putus-putus) dari pusat balok
        if (komponen && theta > 0) {
            const l1 = panjang(kg.ws);
            const l2 = panjang(berat * cos);
            panah(ctx, ux, uy, ux - arah.x * l1, uy - arah.y * l1, { warna: c.gelap, tebal: 2, putus: [5, 4] });
            panah(ctx, ux, uy, ux - normal.x * l2, uy - normal.y * l2, { warna: c.gelap, tebal: 2, putus: [5, 4] });
            if (l1 >= 14) label(ctx, 'w sin θ', jepit(ux - arah.x * (l1 + 8), 30, w - 30), uy - arah.y * (l1 + 8) + 10, { rata: 'center', ukuran: ukTeks - 2 });
            if (l2 >= 14) label(ctx, 'w cos θ', jepit(ux - normal.x * (l2 + 8), 30, w - 30), uy - normal.y * (l2 + 8) + 10, { rata: 'center', ukuran: ukTeks - 2 });
        }

        // w dari pusat ke bawah, N dari sisi atas, F dari sisi depan, f dari alas (sisi belakang atau depan sesuai arahnya)
        gambarGaya(ux, uy, 0, 1, berat, c.gelap, 'w');
        gambarGaya(ux + normal.x * bt / 2, uy + normal.y * bt / 2, normal.x, normal.y, kg.N, c.gelap, 'N');
        gambarGaya(ux + arah.x * bl / 2, uy + arah.y * bl / 2, arah.x, arah.y, F, c.oranye, 'F');
        if (Math.abs(kg.f) > 1e-9) {
            const s = Math.sign(kg.f);
            gambarGaya(
                // Panah gesek keluar dari sisi balok yang searah dengannya, supaya tidak masuk ke dalam balok dan menimpa panah berat
                ux + s * arah.x * bl / 2 - normal.x * (bt / 2 - 4), uy + s * arah.y * bl / 2 - normal.y * (bt / 2 - 4),
                arah.x * s, arah.y * s, Math.abs(kg.f), c.biru, 'f',
            );
        }

        if (statusRef.current === 'selesai') {
            label(ctx, kg.jenis === 'statis' && Math.abs(xKini) < 0.02 ? 'balok diam' : `Δs = ${angka(xKini, 2)} m`, w / 2, h - 12, {
                rata: 'center', ukuran: 12, latar: c.lime,
            });
        }
    };

    /* ----- Grafik ----- */

    const aAwal = keadaanGaya(param, 0).a;
    const opsiV = (): OpsiGrafik => {
        const riwayat = riwayatRef.current.slice();
        const akhir = { x: tRef.current, y: vRef.current };
        riwayat.push(akhir);
        let xMaks = WAKTU_MAKS;
        let vUjung = 0;
        if (aAwal !== 0) {
            vUjung = Math.sqrt(2 * Math.abs(aAwal) * JARAK_UJUNG);
            xMaks = jepit(Math.sqrt((2 * JARAK_UJUNG) / Math.abs(aAwal)) * 1.15, 1, WAKTU_MAKS);
        }
        const batas = vUjung * 1.12 + 0.5;
        return {
            seri: [{ nama: 'v', titik: riwayat }],
            penanda: [akhir],
            labelX: 't (s)', labelY: 'v (m/s)',
            xMin: 0, xMaks,
            yMin: aAwal < 0 ? -batas : 0,
            yMaks: aAwal < 0 ? 0.5 : (aAwal > 0 ? batas : 1),
        };
    };

    const FMAKS = 100;
    const opsiF = (): OpsiGrafik => {
        const teori = kurvaGesek(param, FMAKS);
        const gKini = keadaanGaya(param, vRef.current);
        const puncak = teori.reduce((a, b) => Math.max(a, b.y), 0);
        return {
            seri: [{ nama: 'teori', titik: teori, gaya: 'putus', warna: warnaSim().redup, tebal: 2 }],
            penanda: [{ x: F, y: Math.abs(gKini.f) }],
            labelX: 'F (N)', labelY: 'f (N)',
            xMin: 0, xMaks: FMAKS, yMin: 0, yMaks: puncak * 1.15 + 1,
        };
    };

    /* ----- Rumus dengan angka saat ini ----- */

    const sinTeks = (isi: string) => `${mi('sin')}${mo('&#x2061;')}${isi}`;
    const barisRumus: BarisRumus[] = [
        {
            mathml: `${mi('ΣF')}${mo('=')}${mi('F')}${mo('−')}${mi('w')}${sinTeks(mi('θ'))}${mo('−')}${mi('f')}`,
            baca: 'sigma F sama dengan F dikurangi w sinus teta dikurangi f',
        },
        {
            mathml: `${mo('=')}${bil(F, 0)}${mo('−')}${bil(kini.ws)}${mo('−')}${bil(fDown)}${mo('=')}${mn(angka(kini.bersih, 1))}${mtext('N')}`,
            baca: `sama dengan ${angka(F, 0)} dikurangi ${angka(kini.ws, 1)} dikurangi ${angka(fDown, 1)}, yaitu ${angka(kini.bersih, 1)} newton`,
        },
        {
            mathml: `${mi('a')}${mo('=')}${mfrac(mi('ΣF'), mi('m'))}`,
            baca: 'a sama dengan sigma F per m',
        },
        {
            mathml: `${mo('=')}${mfrac(bil(kini.bersih), mn(angka(m, 0)))}${mo('=')}${mn(angka(kini.a, 2))}${mtext('m/s²')}`,
            baca: `sama dengan ${angka(kini.bersih, 1)} per ${angka(m, 0)}, yaitu ${angka(kini.a, 2)} meter per sekon kuadrat`,
        },
        {
            mathml: `${msub(mi('f'), mtext('maks'))}${mo('=')}${msub(mi('μ'), mi('s'))}${mi('N')}${mo('=')}${mn(angka(mus * kini.N, 1))}${mtext('N')}`,
            baca: `gesek statis maksimum ${angka(mus * kini.N, 1)} newton`,
        },
    ];

    const catatanRumus = kini.jenis === 'statis'
        ? 'Balok diam. Gesekan statis menyesuaikan diri sampai persis menahan gaya penggerak, jadi ΣF = 0. Arah positif: naik bidang.'
        : 'Balok bergerak. Gesekan kinetis tetap sebesar μₖ·N dan melawan arah gerak. f negatif berarti gesekan mengarah naik bidang.';

    /* ----- Ringkasan untuk pembaca layar ----- */

    const deskripsi = status === 'selesai'
        ? `Percobaan selesai setelah ${angka(tRef.current, 2)} sekon. Balok ${Math.abs(x) < 0.02 ? 'tetap diam' : `berpindah ${angka(x, 2)} meter sepanjang bidang`}. Percepatan ${angka(kini.a, 2)} meter per sekon kuadrat.`
        : status === 'jalan'
            ? `Balok bergerak. Kecepatan ${angka(v, 2)} meter per sekon, gesekan ${kini.jenis}, ${angka(Math.abs(kini.f), 1)} newton.`
            : `Balok ${angka(m, 0)} kilogram di bidang bersudut ${theta} derajat, ditarik gaya ${angka(F, 0)} newton sejajar bidang. Gesekan ${kini.jenis} ${angka(Math.abs(kini.f), 1)} newton, percepatan awal ${angka(kini.a, 2)} meter per sekon kuadrat.`;

    const deskripsiGrafik = grafik === 'v'
        ? `Grafik kecepatan balok terhadap waktu. Saat ini t ${angka(tRef.current, 2)} sekon, kecepatan ${angka(v, 2)} meter per sekon.`
        : `Grafik gaya gesek terhadap gaya tarik. Pada F ${angka(F, 0)} newton, gesekan ${kini.jenis} ${angka(Math.abs(kini.f), 1)} newton. Gesekan naik mengikuti F sampai ${angka(mus * kini.N, 1)} newton lalu turun ke ${angka(mukEf * kini.N, 1)} newton.`;

    return (
        <SimShell
            panggung={<Panggung gambar={gambar} deskripsi={deskripsi} rasio={16 / 9} tinggiMin={250} />}
            kendaliPutar={<PlayBar loop={loop} onMulai={mulai} onUlang={ulang} labelMulai={status === 'jalan' ? 'Lanjut' : 'Lepas'} />}
            bacaan={
                <BarisBacaan>
                    <Bacaan label="Gaya normal (N)" nilai={angkaTetap(kini.N, 1)} satuan="N" />
                    <Bacaan label={`Gaya gesek (f), ${kini.jenis}`} nilai={angkaTetap(Math.abs(kini.f), 1)} satuan="N" sorot={kini.jenis === 'statis' ? undefined : 'lime'} />
                    <Bacaan label="Gaya bersih (ΣF)" nilai={angkaTetap(kini.bersih, 1)} satuan="N" />
                    <Bacaan label="Percepatan (a)" nilai={angkaTetap(kini.a, 2)} satuan="m/s²" />
                    <Bacaan label="Kecepatan (v)" nilai={angkaTetap(v, 2)} satuan="m/s" />
                    <Bacaan label="Perpindahan (Δs)" nilai={angkaTetap(x, 2)} satuan="m" />
                </BarisBacaan>
            }
            pengatur={
                <>
                    <Slider label="Gaya tarik" simbol="F" nilai={F} min={0} maks={100} satuan="N" onUbah={setF} />
                    <Slider label="Massa" simbol="m" nilai={m} min={1} maks={20} satuan="kg" onUbah={setM} />
                    <Slider label="Sudut bidang" simbol="θ" nilai={theta} min={0} maks={60} satuan="°" onUbah={setTheta} catatan={theta === 0 ? 'θ = 0 berarti bidang datar.' : undefined} />
                    <Slider label="Gesek statis" simbol="μₛ" nilai={mus} min={0} maks={1} langkah={0.05} onUbah={setMus} />
                    <Slider
                        label="Gesek kinetis" simbol="μₖ" nilai={mukEf} min={0} maks={mus} langkah={0.05} onUbah={setMuk}
                        catatan="μₖ tidak bisa lebih besar daripada μₛ."
                    />
                    <Sakelar label="Tampilkan komponen berat" aktif={komponen} onUbah={setKomponen} teksAktif="Ya" />
                </>
            }
            rumus={<RumusHidup baris={barisRumus} catatan={catatanRumus} />}
            grafik={
                <Panel
                    judul="Grafik"
                    ikon={<IconChartDots size={18} stroke={2.5} aria-hidden="true" />}
                >
                    <div className="mb-3">
                        <Pilihan
                            label="Grafik yang ditampilkan"
                            labelTersembunyi
                            nilai={grafik}
                            pilihan={[{ nilai: 'v', label: 'v terhadap t' }, { nilai: 'f', label: 'f terhadap F' }]}
                            onUbah={setGrafik}
                        />
                    </div>
                    <GrafikHidup
                        ambil={grafik === 'v' ? opsiV : opsiF}
                        rasio={1.9}
                        deskripsi={deskripsiGrafik}
                        keterangan={grafik === 'f' ? [{ nama: 'Kurva teori', warna: warnaSim().redup, putus: true }] : undefined}
                    />
                    <p className="text-xs text-muted mt-2">
                        {grafik === 'v'
                            ? 'Garis v–t tergambar selama balok bergerak. Garis datar di nol berarti balok diam.'
                            : 'Titik oranye adalah keadaan sekarang. Gesekan statis naik mengikuti F sampai μₛ·N, lalu turun ke μₖ·N saat balok mulai bergerak.'}
                    </p>
                </Panel>
            }
            selidiki={
                <SelidikiHubungan
                    bebas={BEBAS}
                    terikat={TERIKAT}
                    tetap={['mus']}
                    percobaan={percobaan}
                    onHapus={() => setPercobaan([])}
                    ajakan="Tekan Lepas dan tunggu percobaan selesai (balok sampai ujung bidang atau 6 detik). Lalu ubah satu besaran saja, misalnya F, dan lepas lagi. Percepatan positif berarti naik bidang."
                />
            }
            tantangan={<Tantangan daftar={TANTANGAN} selesai={selesai} />}
        />
    );
}
