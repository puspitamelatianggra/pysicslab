/* ============================================================
   SIMULASI: Gerak Lurus (Bab 1-2)
   ============================================================
   Susunan file mengikuti gerak-parabola.tsx:
   1. Fungsi fisika murni (tanpa React), supaya mudah diperiksa.
   2. Komponen: state pengatur → keadaan gerak (useRef) → loop → gambar → <SimShell>.

   Hubungan yang harus bisa ditemukan siswa:
   - a = 0 (GLB): jarak antarcap tetap dan kecepatan tidak berubah
   - a naik → kecepatan akhir naik sebanding
   - dari diam, t jadi 2 kali → perpindahan jadi 4 kali (sebanding t²)
   - a negatif → mobil melambat, berhenti sesaat, lalu berbalik arah
   - luas di bawah grafik v–t sama dengan perpindahan
   - posisi awal s₀ tidak mengubah perpindahan
   ============================================================ */

import { IconChartDots } from '@tabler/icons-react';
import { useEffect, useMemo, useRef, useState } from 'react';
import {
    angka, angkaTetap, buatSkala, bulat, Ctx, gambarGrafik, garis, jepit, kotak, label, langkahBagus,
    OpsiGrafik, panah, Seri, useSimLoop, warnaSim,
} from '../../engine';
import {
    Bacaan, BarisBacaan, BarisRumus, Besaran, GrafikHidup, mfrac, mi, mn, mo, mtext, msub, msup,
    Panel, Panggung, Percobaan, Pilihan, PlayBar, RumusHidup, Sakelar, SelidikiHubungan, SimShell,
    Slider, Tantangan, useTantangan,
} from '../../ui';

/* ---------- 1. Fisika ---------- */

export interface Mobil {
    s0: number; // posisi awal (m)
    v0: number; // kecepatan awal (m/s)
    a: number;  // percepatan (m/s²)
}

/** Posisi saat t: s = s₀ + v₀·t + ½·a·t² */
export function posisi(m: Mobil, t: number): number {
    return m.s0 + m.v0 * t + 0.5 * m.a * t * t;
}

/** Kecepatan saat t: v = v₀ + a·t */
export function kecepatan(m: Mobil, t: number): number {
    return m.v0 + m.a * t;
}

/** Perpindahan sejak awal sampai t: Δs = v₀·t + ½·a·t² */
export function perpindahan(m: Mobil, t: number): number {
    return m.v0 * t + 0.5 * m.a * t * t;
}

/** Kecepatan rata-rata = Δs / t (bernilai 0 saat t = 0) */
export function kecepatanRata(m: Mobil, t: number): number {
    return t > 0 ? perpindahan(m, t) / t : 0;
}

/** Saat mobil berhenti sesaat (v = 0) setelah gerak dimulai. null kalau tidak pernah berhenti. */
export function waktuBerhenti(m: Mobil): number | null {
    if (m.a === 0) return null;
    const t = -m.v0 / m.a;
    return t > 1e-9 ? t : null;
}

/** Luas di bawah kurva v–t dari 0 sampai t (selalu sama dengan perpindahan). Dihitung dengan trapesium. */
export function luasVT(m: Mobil, t: number, n = 400): number {
    let luas = 0;
    const dt = t / n;
    for (let i = 0; i < n; i++) {
        luas += 0.5 * (kecepatan(m, i * dt) + kecepatan(m, (i + 1) * dt)) * dt;
    }
    return luas;
}

/* ---------- 2. Komponen ---------- */

type Status = 'siap' | 'jalan' | 'selesai';
type Grafik = 's' | 'v' | 'a';

const BEBAS: Besaran[] = [
    { id: 'v0', label: 'kecepatan awal', simbol: 'v₀', satuan: 'm/s', desimal: 0 },
    { id: 'a', label: 'percepatan', simbol: 'a', satuan: 'm/s²', desimal: 1 },
    { id: 't', label: 'lama gerak', simbol: 't', satuan: 's', desimal: 0 },
];

const TERIKAT: Besaran[] = [
    { id: 'ds', label: 'perpindahan', simbol: 'Δs', satuan: 'm', desimal: 1 },
    { id: 'v', label: 'kecepatan akhir', simbol: 'v', satuan: 'm/s', desimal: 1 },
    { id: 'vrata', label: 'kecepatan rata-rata', simbol: 'v rata-rata', satuan: 'm/s', desimal: 1 },
];

const TANTANGAN = [
    { id: 'glb50', teks: 'Buat mobil menempuh tepat 50 m dalam 5 s dengan GLB (percepatan nol). Jalankan sampai selesai.' },
    { id: 'diam20', teks: 'Mobil mulai dari diam. Atur percepatan dan lama gerak supaya kecepatannya tepat 20 m/s di akhir gerak.' },
    { id: 'balik', teks: 'Buat mobil berhenti sesaat, lalu kembali sampai melewati atau tiba di posisi awalnya sebelum gerak selesai.' },
];

const PILIHAN_PANDANG = [40, 80, 150, 250, 400, 600]; // lebar lintasan dalam meter
const PX_PER_MS = 2.2; // panjang panah kecepatan: piksel per (m/s)
const PX_PER_A = 9; // panjang panah percepatan: piksel per (m/s²)
const BATAS_PANAH = 80;

/** Bilangan di MathML; bilangan negatif diberi kurung supaya tanda tidak tertukar dengan operator. */
function bil(x: number, desimal = 1): string {
    const teks = mn(angka(x, desimal));
    return x < -1e-9 ? `${mo('(')}${teks}${mo(')')}` : teks;
}

export default function GerakLurus() {
    // Pengatur
    const [v0, setV0] = useState(0);
    const [a, setA] = useState(2);
    const [s0, setS0] = useState(0);
    const [lama, setLama] = useState(5);
    const [banding, setBanding] = useState(false);
    const [v02, setV02] = useState(10);
    const [a2, setA2] = useState(0);
    const [grafik, setGrafik] = useState<Grafik>('v');

    const mobil1: Mobil = useMemo(() => ({ s0, v0, a }), [s0, v0, a]);
    const mobil2: Mobil = useMemo(() => ({ s0, v0: v02, a: a2 }), [s0, v02, a2]);

    // Keadaan gerak
    const tRef = useRef(0);
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
        tRef.current += dt;
        if (tRef.current >= lama - 1e-9) {
            tRef.current = lama;
            saatSelesai();
        }
    });

    function saatSelesai() {
        aturStatus('selesai');
        loop.jeda();
        const ds = perpindahan(mobil1, lama);
        const vAkhir = kecepatan(mobil1, lama);
        setPercobaan((p) => [...p, {
            nilai: { v0, a, t: lama, s0, ds, v: vAkhir, vrata: ds / lama },
        }]);

        // Periksa tantangan
        if (a === 0 && lama === 5 && Math.abs(ds - 50) < 1e-6) tandai('glb50');
        if (v0 === 0 && Math.abs(vAkhir - 20) < 1e-6) tandai('diam20');
        const tb = waktuBerhenti(mobil1);
        if (tb !== null && tb < lama - 1e-9 && ds <= 1e-9) tandai('balik');
    }

    // Pengatur diubah: mobil kembali ke garis start
    useEffect(() => {
        tRef.current = 0;
        aturStatus('siap');
        loop.jeda();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [v0, a, s0, lama, banding, v02, a2]);

    const mulai = () => {
        if (statusRef.current === 'selesai') {
            tRef.current = 0;
            aturStatus('siap');
        }
        loop.mainkan();
    };

    const ulang = () => {
        tRef.current = 0;
        aturStatus('siap');
        loop.jeda();
    };

    // Data untuk bacaan dan rumus (diperbarui sekitar 12 kali per detik lewat loop.denyut)
    const t = tRef.current;
    const sKini = posisi(mobil1, t);
    const vKini = kecepatan(mobil1, t);
    const dsKini = perpindahan(mobil1, t);
    const tBerhenti = waktuBerhenti(mobil1);

    /* ----- Rentang tampilan yang tetap selama percobaan ----- */

    const rentang = useMemo(() => {
        const daftar = banding ? [mobil1, mobil2] : [mobil1];
        let sLo = Infinity, sHi = -Infinity, vLo = Infinity, vHi = -Infinity;
        for (const m of daftar) {
            for (let i = 0; i <= 100; i++) {
                const tt = (lama * i) / 100;
                sLo = Math.min(sLo, posisi(m, tt));
                sHi = Math.max(sHi, posisi(m, tt));
                vLo = Math.min(vLo, kecepatan(m, tt));
                vHi = Math.max(vHi, kecepatan(m, tt));
            }
            // titik balik di antara dua cuplikan
            const tb = waktuBerhenti(m);
            if (tb !== null && tb < lama) {
                sLo = Math.min(sLo, posisi(m, tb));
                sHi = Math.max(sHi, posisi(m, tb));
            }
        }
        return { sLo, sHi, vLo, vHi };
    }, [mobil1, mobil2, banding, lama]);

    /* ----- Gambar panggung ----- */

    const gambar = (ctx: Ctx, w: number, h: number) => {
        const c = warnaSim();
        const tt = tRef.current;
        const pad = { kiri: 20, kanan: 20, atas: 8, bawah: 30 };

        // Pilih lebar pandang tetap yang memuat seluruh lintasan, termasuk bagian negatif
        const lo = Math.min(0, rentang.sLo) - 6;
        const hi = Math.max(rentang.sHi, 10) + 6;
        const perlu = hi - lo;
        const lebar = PILIHAN_PANDANG.find((p) => p >= perlu) ?? Math.ceil(perlu / 100) * 100;
        const xMin = lo - (lebar - perlu) / 2;
        const s = buatSkala({ w, h, pad, xMin, xMaks: xMin + lebar, yMin: 0, yMaks: 1 });

        // Penggaris meter di bawah lintasan
        const yPenggaris = s.bawah;
        const langkah = langkahBagus(lebar, Math.max(3, Math.round((s.kanan - s.kiri) / 70)));
        for (let v = Math.ceil(s.xMin / langkah) * langkah; v <= s.xMaks + 1e-9; v += langkah) {
            const px = s.x(v);
            garis(ctx, px, s.atas, px, yPenggaris, { warna: c.kisi, tebal: 1 });
            garis(ctx, px, yPenggaris, px, yPenggaris + 5, { tebal: 2 });
            label(ctx, angka(v, 0), px, yPenggaris + 8, { rata: 'center', dasar: 'top', ukuran: 11, tebal: 500, warna: c.redup });
        }
        garis(ctx, s.kiri, yPenggaris, s.kanan, yPenggaris, { tebal: 2 });
        label(ctx, 'm', s.kanan, yPenggaris - 8, { rata: 'right', ukuran: 11 });

        const jalur = banding
            ? [{ m: mobil1, y: h * 0.4, warna: c.lime, nama: 'Mobil 1' }, { m: mobil2, y: h * 0.8, warna: c.biru, nama: 'Mobil 2' }]
            : [{ m: mobil1, y: h * 0.62, warna: c.lime, nama: 'Mobil' }];

        // Ukuran gambar mengikuti tinggi panggung: tinggi mobil 20% (15% untuk dua lajur), minimal 26 px.
        // k = faktor skala terhadap mobil rancangan setinggi 29 px.
        const tinggiMobil = Math.max(26, h * (banding ? 0.15 : 0.2));
        const k = tinggiMobil / 29;
        const ukuranTeks = Math.round(Math.min(18, 11 + k * 2));
        const tebalPanah = Math.min(5, 2 + k);

        for (const j of jalur) {
            const y = j.y;
            // Lintasan
            garis(ctx, s.kiri, y, s.kanan, y, { tebal: 3 });
            label(ctx, j.nama, s.kiri + 2, y + 8 + ukuranTeks, { ukuran: ukuranTeks - 1, tebal: 600, warna: c.redup });

            // Garis start
            const xs = s.x(j.m.s0);
            garis(ctx, xs, y - 34 * k, xs, y, { tebal: 1.5, putus: [4, 3] });

            // Cap posisi tiap 1 s
            if (statusRef.current !== 'siap') {
                for (let n = 1; n <= tt + 1e-9; n++) {
                    const xc = s.x(posisi(j.m, n));
                    garis(ctx, xc, y - 7 * k, xc, y + 7 * k, { tebal: 2 });
                    bulat(ctx, xc, y, 3.5 * Math.max(1, k * 0.8), { isi: c.latar, tebal: 1.5 });
                }
            }

            // Mobil: kotak + roda, menghadap ke arah kecepatan
            const x = s.x(posisi(j.m, tt));
            const v = kecepatan(j.m, tt);
            const arah = v < -1e-9 ? -1 : 1;
            kotak(ctx, x - 18 * k, y - 21 * k, 36 * k, 12 * k, { isi: j.warna, tebal: 2.5 });
            kotak(ctx, x - 9 * k + arah * 4 * k, y - 29 * k, 18 * k, 8 * k, { isi: c.krem, tebal: 2.5 });
            bulat(ctx, x - 10 * k, y - 5 * k, 5 * k, { isi: c.krem, tebal: 2.5 });
            bulat(ctx, x + 10 * k, y - 5 * k, 5 * k, { isi: c.krem, tebal: 2.5 });

            // Panah kecepatan (gelap) dan percepatan (oranye) di atas mobil
            const batas = BATAS_PANAH * k;
            const pv = jepit(v * PX_PER_MS * k, -batas, batas);
            const pa = jepit(j.m.a * PX_PER_A * k, -batas, batas);
            const yv = y - 41 * k;
            const ya = y - 54 * k - 4;
            panah(ctx, x, yv, x + pv, yv, { tebal: tebalPanah });
            if (Math.abs(pv) >= 4) label(ctx, 'v', x + pv + (pv > 0 ? 8 : -8), yv, { rata: pv > 0 ? 'left' : 'right', ukuran: ukuranTeks });
            panah(ctx, x, ya, x + pa, ya, { warna: c.oranye, tebal: tebalPanah });
            if (Math.abs(pa) >= 4) label(ctx, 'a', x + pa + (pa > 0 ? 8 : -8), ya, { rata: pa > 0 ? 'left' : 'right', ukuran: ukuranTeks });
        }

        // Keterangan keadaan penting
        if (!banding && tBerhenti !== null && tBerhenti < lama && tt >= tBerhenti) {
            label(ctx, 'berhenti lalu berbalik', s.kanan, s.atas + 10, { rata: 'right', ukuran: 12, latar: c.lime });
        }
    };

    /* ----- Grafik terhadap waktu ----- */

    /** Titik grafik dari t = 0 sampai waktu sekarang. */
    const cuplik = (m: Mobil, fungsi: (m: Mobil, t: number) => number) => {
        const tt = tRef.current;
        const n = Math.max(1, Math.ceil(tt / 0.1));
        const hasil = [];
        for (let i = 0; i <= n; i++) {
            const x = (tt * i) / n;
            hasil.push({ x, y: fungsi(m, x) });
        }
        return hasil;
    };

    const opsiGrafik = (jenis: Grafik): OpsiGrafik => {
        const c = warnaSim();
        const tt = tRef.current;
        const fungsi = jenis === 's' ? posisi : jenis === 'v' ? kecepatan : (m: Mobil) => m.a;
        const seri: Seri[] = [{ nama: 'Mobil 1', titik: cuplik(mobil1, fungsi) }];
        if (banding) seri.push({ nama: 'Mobil 2', titik: cuplik(mobil2, fungsi), warna: c.biru });
        let yMin: number, yMaks: number, labelY: string;
        if (jenis === 's') {
            yMin = Math.min(0, rentang.sLo) - 1;
            yMaks = rentang.sHi * 1.08 + 1;
            labelY = 's (m)';
        } else if (jenis === 'v') {
            yMin = Math.min(0, rentang.vLo) * 1.1 - (rentang.vLo < 0 ? 1 : 0);
            yMaks = Math.max(rentang.vHi, 1) * 1.1 + 1;
            labelY = 'v (m/s)';
        } else {
            yMin = -4.8;
            yMaks = 4.8;
            labelY = 'a (m/s²)';
        }
        const penanda: NonNullable<OpsiGrafik['penanda']> = [{ x: tt, y: fungsi(mobil1, tt) }];
        if (banding) penanda.push({ x: tt, y: fungsi(mobil2, tt), warna: c.biru });
        return { seri, penanda, labelX: 't (s)', labelY, xMin: 0, xMaks: lama, yMin, yMaks };
    };

    /** Grafik v–t dengan luas di bawah kurva diarsir (lime untuk positif, krem oranye untuk negatif). */
    const gambarVT = (ctx: Ctx, w: number, h: number) => {
        const c = warnaSim();
        const o = opsiGrafik('v');
        const tt = tRef.current;
        const s = buatSkala({
            w, h, xMin: 0, xMaks: lama, yMin: o.yMin as number, yMaks: o.yMaks as number,
            pad: { kiri: 46, kanan: 14, atas: 14, bawah: 30 },
        });
        if (tt > 0) {
            const titik = cuplik(mobil1, kecepatan);
            const isi = (atas: boolean, warna: string) => {
                ctx.save();
                ctx.beginPath();
                const y0 = s.y(0);
                if (atas) ctx.rect(s.kiri, s.atas, s.kanan - s.kiri, y0 - s.atas);
                else ctx.rect(s.kiri, y0, s.kanan - s.kiri, s.bawah - y0);
                ctx.clip();
                ctx.beginPath();
                ctx.moveTo(s.x(0), y0);
                for (const p of titik) ctx.lineTo(s.x(p.x), s.y(p.y));
                ctx.lineTo(s.x(tt), y0);
                ctx.closePath();
                ctx.fillStyle = warna;
                ctx.fill();
                ctx.restore();
            };
            isi(true, c.lime);
            isi(false, c.oranyeLembut);
        }
        gambarGrafik(ctx, w, h, o);
        const luas = perpindahan(mobil1, tt);
        label(ctx, `luas = Δs = ${angka(luas, 1)} m`, s.kiri + 8, s.atas + 10, { ukuran: 12, latar: c.lime });
    };

    /* ----- Rumus dengan angka saat ini ----- */

    const S0 = msub(mi('s'), mn(0));
    const V0 = msub(mi('v'), mn(0));
    const setengah = mfrac(mn(1), mn(2));
    const tTampil = angka(t, 2);
    const barisRumus: BarisRumus[] = [
        {
            mathml: `${mi('v')}${mo('=')}${V0}${mo('+')}${mi('a')}${mo('·')}${mi('t')}`,
            baca: 'v sama dengan v nol ditambah a kali t',
        },
        {
            mathml: `${mo('=')}${bil(v0, 0)}${mo('+')}${bil(a)}${mo('·')}${mn(tTampil)}${mo('=')}${mn(angka(vKini, 1))}${mtext('m/s')}`,
            baca: `sama dengan ${angka(v0, 0)} ditambah ${angka(a, 1)} kali ${tTampil}, yaitu ${angka(vKini, 1)} meter per sekon`,
        },
        {
            mathml: `${mi('s')}${mo('=')}${S0}${mo('+')}${V0}${mi('t')}${mo('+')}${setengah}${mi('a')}${msup(mi('t'), mn(2))}`,
            baca: 's sama dengan s nol ditambah v nol t ditambah setengah a t kuadrat',
        },
        {
            mathml: `${mo('=')}${bil(s0, 0)}${mo('+')}${bil(v0, 0)}${mo('·')}${mn(tTampil)}${mo('+')}${setengah}${mo('·')}${bil(a)}${mo('·')}${msup(mn(tTampil), mn(2))}`,
            baca: `sama dengan ${angka(s0, 0)} ditambah ${angka(v0, 0)} kali ${tTampil} ditambah setengah kali ${angka(a, 1)} kali ${tTampil} kuadrat`,
        },
        {
            mathml: `${mo('=')}${mn(angka(sKini, 1))}${mtext('m')}`,
            baca: `sama dengan ${angka(sKini, 1)} meter`,
        },
    ];

    const catatanRumus = a === 0
        ? 'Percepatan nol berarti GLB: v tetap sama dengan v₀ dan s bertambah teratur.'
        : 'Dengan a tetap, v berubah teratur (GLBB). Suku ½at² membuat s tidak berubah teratur.';

    /* ----- Ringkasan untuk pembaca layar ----- */

    const deskripsi = status === 'selesai'
        ? `Mobil selesai bergerak ${lama} sekon. Perpindahan ${angka(dsKini, 1)} meter, kecepatan akhir ${angka(vKini, 1)} meter per sekon.`
        : status === 'jalan'
            ? `Mobil sedang bergerak. Waktu ${angka(t, 1)} sekon, posisi ${angka(sKini, 1)} meter, kecepatan ${angka(vKini, 1)} meter per sekon, percepatan ${angka(a, 1)} meter per sekon kuadrat.`
            : `Mobil siap di posisi ${angka(s0, 0)} meter dengan kecepatan awal ${angka(v0, 0)} meter per sekon dan percepatan ${angka(a, 1)} meter per sekon kuadrat.${banding ? ' Ada mobil pembanding di lajur kedua.' : ''}`;

    const deskripsiGrafik = grafik === 's'
        ? `Grafik posisi terhadap waktu. Saat ini t ${angka(t, 2)} sekon, posisi ${angka(sKini, 1)} meter.`
        : grafik === 'v'
            ? `Grafik kecepatan terhadap waktu dengan luas di bawah kurva diarsir. Saat ini kecepatan ${angka(vKini, 1)} meter per sekon, luas sama dengan perpindahan ${angka(dsKini, 1)} meter.`
            : `Grafik percepatan terhadap waktu. Percepatan tetap ${angka(a, 1)} meter per sekon kuadrat.`;

    const catatanGrafik = grafik === 's'
        ? (a === 0 ? 'GLB: grafik s–t berupa garis lurus miring.' : 'GLBB: grafik s–t melengkung (parabola).')
        : grafik === 'v'
            ? 'Luas arsiran lime sampai waktu sekarang sama dengan perpindahan. Luas di bawah sumbu (krem) berarti mobil bergerak mundur.'
            : 'Percepatan tetap, jadi grafik a–t berupa garis mendatar.';

    return (
        <SimShell
            panggung={<Panggung gambar={gambar} deskripsi={deskripsi} rasio={banding ? 16 / 9 : 16 / 6} tinggiMin={banding ? 270 : 200} />}
            kendaliPutar={
                <PlayBar
                    loop={loop}
                    onMulai={mulai}
                    onUlang={ulang}
                    labelMulai={status === 'jalan' ? 'Lanjut' : 'Jalan'}
                />
            }
            bacaan={
                <BarisBacaan>
                    <Bacaan label="Waktu (t)" nilai={angkaTetap(t, 2)} satuan="s" />
                    <Bacaan label="Posisi (s)" nilai={angkaTetap(sKini, 1)} satuan="m" />
                    <Bacaan label="Kecepatan (v)" nilai={angkaTetap(vKini, 1)} satuan="m/s" />
                    <Bacaan label="Percepatan (a)" nilai={angkaTetap(a, 1)} satuan="m/s²" />
                    <Bacaan label="Perpindahan (Δs)" nilai={angkaTetap(dsKini, 1)} satuan="m" sorot={status === 'selesai' ? 'lime' : undefined} />
                    <Bacaan label="v rata-rata" nilai={angkaTetap(kecepatanRata(mobil1, t), 1)} satuan="m/s" />
                </BarisBacaan>
            }
            pengatur={
                <>
                    <Slider label="Kecepatan awal" simbol="v₀" nilai={v0} min={0} maks={20} satuan="m/s" onUbah={setV0} />
                    <Slider
                        label="Percepatan" simbol="a" nilai={a} min={-4} maks={4} langkah={0.5} satuan="m/s²" onUbah={setA}
                        catatan={a === 0 ? 'a = 0 berarti GLB.' : a < 0 ? 'a negatif: mobil diperlambat.' : undefined}
                    />
                    <Slider label="Posisi awal" simbol="s₀" nilai={s0} min={0} maks={20} satuan="m" onUbah={setS0} />
                    <Slider label="Lama gerak" simbol="t" nilai={lama} min={2} maks={10} satuan="s" onUbah={setLama} />
                    <Sakelar
                        label="Mobil pembanding"
                        aktif={banding}
                        onUbah={setBanding}
                        teksAktif="Ada"
                        catatan="Mobil biru memakai v₀ dan a sendiri, mulai dari posisi awal yang sama."
                    />
                    {banding && (
                        <>
                            <Slider label="Kecepatan awal mobil biru" simbol="v₀" nilai={v02} min={0} maks={20} satuan="m/s" onUbah={setV02} />
                            <Slider label="Percepatan mobil biru" simbol="a" nilai={a2} min={-4} maks={4} langkah={0.5} satuan="m/s²" onUbah={setA2} />
                        </>
                    )}
                </>
            }
            rumus={<RumusHidup baris={barisRumus} catatan={catatanRumus} />}
            grafik={
                <Panel
                    judul="Grafik terhadap waktu"
                    ikon={<IconChartDots size={18} stroke={2.5} aria-hidden="true" />}
                >
                    <div className="mb-3">
                        <Pilihan
                            label="Grafik yang ditampilkan"
                            labelTersembunyi
                            nilai={grafik}
                            pilihan={[
                                { nilai: 's', label: 's–t' },
                                { nilai: 'v', label: 'v–t' },
                                { nilai: 'a', label: 'a–t' },
                            ]}
                            onUbah={setGrafik}
                        />
                    </div>
                    {grafik === 'v' ? (
                        <Panggung gambar={gambarVT} deskripsi={deskripsiGrafik} rasio={1.9} tinggiMin={190} />
                    ) : (
                        <GrafikHidup
                            ambil={() => opsiGrafik(grafik)}
                            deskripsi={deskripsiGrafik}
                            rasio={1.9}
                            keterangan={banding ? [{ nama: 'Mobil 1' }, { nama: 'Mobil 2', warna: warnaSim().biru }] : undefined}
                        />
                    )}
                    {banding && (
                        <p className="text-xs text-muted mt-2">Garis biru adalah mobil pembanding. Hanya mobil pertama yang dihitung di bacaan dan di panel Selidiki.</p>
                    )}
                    <p className="text-xs text-muted mt-2">{catatanGrafik}</p>
                </Panel>
            }
            selidiki={
                <SelidikiHubungan
                    bebas={BEBAS}
                    terikat={TERIKAT}
                    percobaan={percobaan}
                    onHapus={() => setPercobaan([])}
                    ajakan="Jalankan mobil sampai selesai, lalu ubah satu besaran saja (misalnya lama gerak dari diam) dan jalankan lagi. Tiap gerak yang selesai jadi satu titik di grafik ini."
                />
            }
            tantangan={<Tantangan daftar={TANTANGAN} selesai={selesai} />}
        />
    );
}
