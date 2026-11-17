import { IconChartDots, IconEqual, IconTrash, IconTrendingDown, IconTrendingUp } from '@tabler/icons-react';
import { ReactNode, useEffect, useId, useMemo, useState } from 'react';
import { angka } from '../engine/format';
import { OpsiGrafik } from '../engine/grafik';
import { warnaSim } from '../engine/theme';
import GrafikHidup from './GrafikHidup';
import { Panel } from './Kendali';

export interface Besaran {
    id: string;
    /** Nama lengkap, huruf kecil: "kecepatan awal" */
    label: string;
    /** Simbol: "v₀" */
    simbol: string;
    satuan: string;
    desimal?: number;
}

export interface Percobaan {
    /** Nilai semua besaran (bebas, terikat, dan yang dijaga tetap) saat percobaan selesai, dengan kunci = id besaran */
    nilai: Record<string, number>;
}

interface SelidikiHubunganProps {
    /** Besaran yang bisa diubah siswa (jadi sumbu mendatar) */
    bebas: Besaran[];
    /** Besaran hasil yang diamati (jadi sumbu tegak) */
    terikat: Besaran[];
    /** Id besaran lain yang juga harus sama agar percobaan bisa dibandingkan, misalnya sakelar hambatan udara (0/1) */
    tetap?: string[];
    percobaan: Percobaan[];
    onHapus: () => void;
    /** Kalimat ajakan khusus simulasi ini, tampil saat data masih kosong */
    ajakan?: string;
}

type Arah = 'naik' | 'turun' | 'tetap' | 'puncak' | 'lembah' | 'acak';

interface Kesimpulan {
    arah: Arah;
    teks: string;
}

const POLA_PANGKAT: { pangkat: number; teks: string }[] = [
    { pangkat: 1, teks: 'sebanding: kalau yang satu jadi 2 kali, yang lain juga jadi 2 kali' },
    { pangkat: 2, teks: 'sebanding dengan kuadratnya: kalau yang satu jadi 2 kali, yang lain jadi 4 kali' },
    { pangkat: 4, teks: 'sebanding dengan pangkat empatnya: kalau yang satu jadi 2 kali, yang lain jadi 16 kali' },
    { pangkat: 0.5, teks: 'sebanding dengan akarnya: kalau yang satu jadi 4 kali, yang lain jadi 2 kali' },
    { pangkat: -1, teks: 'berbanding terbalik: kalau yang satu jadi 2 kali, yang lain jadi setengahnya' },
    { pangkat: -2, teks: 'berbanding terbalik dengan kuadratnya: kalau yang satu jadi 2 kali, yang lain jadi seperempatnya' },
];

/** Kemiringan garis terbaik pada log y terhadap log x, hanya kalau datanya memang mengikuti pola pangkat. */
function pangkatTerbaik(titik: { x: number; y: number }[]): number | null {
    if (titik.some((t) => t.x <= 0 || t.y <= 0)) return null;
    const lx = titik.map((t) => Math.log(t.x));
    const ly = titik.map((t) => Math.log(t.y));
    const n = titik.length;
    const rx = lx.reduce((a, b) => a + b, 0) / n;
    const ry = ly.reduce((a, b) => a + b, 0) / n;
    let sxy = 0, sxx = 0, syy = 0;
    for (let i = 0; i < n; i++) {
        sxy += (lx[i] - rx) * (ly[i] - ry);
        sxx += (lx[i] - rx) ** 2;
        syy += (ly[i] - ry) ** 2;
    }
    if (sxx < 1e-12 || syy < 1e-12) return null;
    const r2 = (sxy * sxy) / (sxx * syy);
    if (r2 < 0.995) return null;
    return sxy / sxx;
}

function simpulkan(titik: { x: number; y: number }[], bx: Besaran, by: Besaran): Kesimpulan | null {
    if (titik.length < 3) return null;
    const ys = titik.map((t) => t.y);
    const yMin = Math.min(...ys);
    const yMaks = Math.max(...ys);
    const skala = Math.max(Math.abs(yMin), Math.abs(yMaks), 1e-9);
    const X = bx.label;
    const Y = by.label;

    if ((yMaks - yMin) / skala < 0.02) {
        return {
            arah: 'tetap',
            teks: `${awalKapital(X)} kamu ubah, tetapi ${Y} tetap sekitar ${angka(ys[ys.length - 1], by.desimal ?? 1)} ${by.satuan}. Jadi ${Y} tidak bergantung pada ${X}.`,
        };
    }

    const toleransi = (yMaks - yMin) * 0.01;
    const selisih = ys.slice(1).map((y, i) => y - ys[i]);
    const semuaNaik = selisih.every((d) => d >= -toleransi);
    const semuaTurun = selisih.every((d) => d <= toleransi);

    if (semuaNaik || semuaTurun) {
        const p = pangkatTerbaik(titik);
        const pola = p === null ? undefined : POLA_PANGKAT.find((k) => Math.abs(k.pangkat - p) < 0.08);
        const dasar = semuaNaik
            ? `Makin besar ${X}, makin besar ${Y}.`
            : `Makin besar ${X}, makin kecil ${Y}.`;
        return {
            arah: semuaNaik ? 'naik' : 'turun',
            teks: pola ? `${dasar} Dari datamu, keduanya ${pola.teks}.` : dasar,
        };
    }

    // Satu puncak atau satu lembah
    const tanda = selisih.filter((d) => Math.abs(d) > toleransi).map((d) => Math.sign(d));
    const ganti = tanda.slice(1).filter((t, i) => t !== tanda[i]).length;
    if (ganti === 1) {
        const puncak = tanda[0] > 0;
        const iEkstrem = ys.indexOf(puncak ? yMaks : yMin);
        const xEkstrem = angka(titik[iEkstrem].x, bx.desimal ?? 1);
        return {
            arah: puncak ? 'puncak' : 'lembah',
            teks: puncak
                ? `${awalKapital(Y)} naik dulu lalu turun. Nilai terbesar di datamu ada saat ${X} = ${xEkstrem} ${bx.satuan}. Coba nilai di sekitarnya untuk mencari puncak yang tepat.`
                : `${awalKapital(Y)} turun dulu lalu naik. Nilai terkecil di datamu ada saat ${X} = ${xEkstrem} ${bx.satuan}.`,
        };
    }
    return {
        arah: 'acak',
        teks: `Polanya belum jelas. Tambah beberapa percobaan dengan ${X} yang berbeda.`,
    };
}

function awalKapital(s: string): string {
    return s.charAt(0).toUpperCase() + s.slice(1);
}

const IKON_ARAH: Record<Arah, ReactNode> = {
    naik: <IconTrendingUp size={20} stroke={2.5} aria-hidden="true" />,
    turun: <IconTrendingDown size={20} stroke={2.5} aria-hidden="true" />,
    tetap: <IconEqual size={20} stroke={2.5} aria-hidden="true" />,
    puncak: <IconTrendingUp size={20} stroke={2.5} aria-hidden="true" />,
    lembah: <IconTrendingDown size={20} stroke={2.5} aria-hidden="true" />,
    acak: <IconChartDots size={20} stroke={2.5} aria-hidden="true" />,
};

/**
 * Panel inti tiap simulasi: siswa memilih satu besaran untuk diubah dan satu untuk diamati.
 * Tiap percobaan yang selesai jadi satu titik di grafik, lalu kesimpulan hubungannya
 * dirumuskan dari titik-titik itu. Percobaan yang besaran lainnya berbeda tidak ikut digambar,
 * supaya hanya satu besaran yang berubah.
 */
export default function SelidikiHubungan({ bebas, terikat, tetap = [], percobaan, onHapus, ajakan }: SelidikiHubunganProps) {
    const idX = useId();
    const idY = useId();
    const [pilihX, setPilihX] = useState(bebas[0].id);
    const [pilihY, setPilihY] = useState(terikat[0].id);
    // Kalau dua percobaan terakhir hanya berbeda pada satu besaran, besaran itulah yang sedang diselidiki siswa:
    // pindahkan sumbu mendatar ke sana supaya titik barunya langsung terlihat.
    useEffect(() => {
        if (percobaan.length < 2) return;
        const a = percobaan[percobaan.length - 2].nilai;
        const b = percobaan[percobaan.length - 1].nilai;
        const berubah = bebas.filter((x) => Math.abs(a[x.id] - b[x.id]) > 1e-9);
        if (berubah.length === 1) setPilihX(berubah[0].id);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [percobaan.length]);

    const bx = bebas.find((b) => b.id === pilihX) ?? bebas[0];
    const by = terikat.find((b) => b.id === pilihY) ?? terikat[0];

    const { titik, tersisih, dikunci } = useMemo(() => {
        const acuan = percobaan[percobaan.length - 1];
        if (!acuan) return { titik: [], tersisih: 0, dikunci: [] as Besaran[] };
        const lain = bebas.filter((b) => b.id !== bx.id);
        const kunci = [...lain.map((b) => b.id), ...tetap];
        const cocok = percobaan.filter((p) => kunci.every((k) => Math.abs(p.nilai[k] - acuan.nilai[k]) < 1e-9));
        // Percobaan terbaru menggantikan yang lama pada nilai x yang sama
        const perX = new Map<number, number>();
        for (const p of cocok) perX.set(p.nilai[bx.id], p.nilai[by.id]);
        const hasil = [...perX.entries()].map(([x, y]) => ({ x, y })).sort((a, b) => a.x - b.x);
        return { titik: hasil, tersisih: percobaan.length - cocok.length, dikunci: lain };
    }, [percobaan, bebas, tetap, bx.id, by.id]);

    const kesimpulan = useMemo(() => simpulkan(titik, bx, by), [titik, bx, by]);
    const acuan = percobaan[percobaan.length - 1];

    const ambil = (): OpsiGrafik => ({
        seri: [
            { nama: 'hubungan', titik, gaya: 'putus', warna: warnaSim().redup, tebal: 1.5 },
            { nama: 'percobaan', titik, gaya: 'titik', warna: warnaSim().oranye },
        ],
        labelX: `${bx.simbol} (${bx.satuan})`,
        labelY: `${by.simbol} (${by.satuan})`,
    });

    const kelasPilih = 'min-h-11 w-full px-3 rounded-base border-2 border-border bg-secondary-background text-sm font-semibold text-foreground';

    return (
        <Panel
            judul="Selidiki hubungan"
            ikon={<IconChartDots size={18} stroke={2.5} aria-hidden="true" />}
            aksi={percobaan.length > 0 ? (
                <button
                    type="button"
                    onClick={onHapus}
                    className="inline-flex items-center gap-1.5 min-h-9 px-2.5 rounded-base border-2 border-border bg-secondary-background text-xs font-bold text-foreground hover:bg-main transition-colors"
                >
                    <IconTrash size={14} stroke={2.5} aria-hidden="true" />
                    Hapus data
                </button>
            ) : undefined}
        >
            <div className="grid grid-cols-2 gap-3 mb-3">
                <div>
                    <label htmlFor={idX} className="block text-xs font-semibold text-muted mb-1">Yang kamu ubah</label>
                    <select id={idX} className={kelasPilih} value={bx.id} onChange={(e) => setPilihX(e.target.value)}>
                        {bebas.map((b) => <option key={b.id} value={b.id}>{awalKapital(b.label)} ({b.simbol})</option>)}
                    </select>
                </div>
                <div>
                    <label htmlFor={idY} className="block text-xs font-semibold text-muted mb-1">Yang kamu amati</label>
                    <select id={idY} className={kelasPilih} value={by.id} onChange={(e) => setPilihY(e.target.value)}>
                        {terikat.map((b) => <option key={b.id} value={b.id}>{awalKapital(b.label)} ({b.simbol})</option>)}
                    </select>
                </div>
            </div>

            {titik.length === 0 ? (
                <div className="border-2 border-dashed border-border rounded-base bg-background px-4 py-8 text-center">
                    <p className="text-sm font-semibold text-foreground">Belum ada titik data.</p>
                    <p className="text-sm text-muted mt-1">
                        {ajakan ?? `Jalankan satu percobaan, lalu ubah ${bx.label} saja dan jalankan lagi. Tiap percobaan jadi satu titik di grafik ini.`}
                    </p>
                </div>
            ) : (
                <>
                    <GrafikHidup
                        ambil={ambil}
                        rasio={1.9}
                        deskripsi={`Grafik ${by.label} terhadap ${bx.label} dari ${titik.length} percobaan: ${titik.map((t) => `${angka(t.x, bx.desimal ?? 1)} ${bx.satuan} menghasilkan ${angka(t.y, by.desimal ?? 1)} ${by.satuan}`).join('; ')}.`}
                    />
                    {acuan && dikunci.length > 0 && (
                        <p className="text-xs text-muted mt-2">
                            Dijaga tetap: {dikunci.map((b) => `${b.simbol} = ${angka(acuan.nilai[b.id], b.desimal ?? 1)} ${b.satuan}`).join(', ')}.
                            {tersisih > 0 && ` ${tersisih} percobaan lain tidak digambar karena besaran ini berbeda.`}
                        </p>
                    )}
                    <div aria-live="polite" className="mt-3">
                        {kesimpulan ? (
                            <div className="flex items-start gap-3 border-2 border-border rounded-base bg-main px-3 py-2.5">
                                <span className="mt-0.5 shrink-0 text-foreground">{IKON_ARAH[kesimpulan.arah]}</span>
                                <p className="text-sm font-semibold text-foreground">{kesimpulan.teks}</p>
                            </div>
                        ) : (
                            <p className="text-sm text-muted border-2 border-border rounded-base bg-background px-3 py-2.5">
                                {titik.length === 1
                                    ? `Baru satu titik. Ubah ${bx.label} saja, lalu jalankan lagi.`
                                    : 'Dua titik belum cukup untuk melihat pola. Tambah satu percobaan lagi.'}
                            </p>
                        )}
                    </div>
                </>
            )}
        </Panel>
    );
}
