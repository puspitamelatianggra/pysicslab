import { gambarGrafik, OpsiGrafik } from '../engine/grafik';
import { warnaSim } from '../engine/theme';
import Panggung from './Panggung';

interface GrafikHidupProps {
    /**
     * Mengembalikan data grafik terbaru. Dipanggil tiap bingkai, jadi baca dari ref
     * dan jangan membuat perhitungan berat di sini.
     */
    ambil: () => OpsiGrafik;
    /** Ringkasan grafik untuk pembaca layar */
    deskripsi: string;
    rasio?: number;
    /** Nama dan gaya tiap garis untuk ditampilkan sebagai keterangan di bawah grafik */
    keterangan?: { nama: string; warna?: string; putus?: boolean }[];
}

export default function GrafikHidup({ ambil, deskripsi, rasio = 2, keterangan }: GrafikHidupProps) {
    const c = warnaSim();
    return (
        <div>
            <Panggung
                gambar={(ctx, w, h) => gambarGrafik(ctx, w, h, ambil())}
                deskripsi={deskripsi}
                rasio={rasio}
                tinggiMin={190}
            />
            {keterangan && keterangan.length > 0 && (
                <ul className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-xs font-semibold text-foreground">
                    {keterangan.map((k) => (
                        <li key={k.nama} className="flex items-center gap-1.5">
                            <svg width="22" height="8" aria-hidden="true">
                                <line
                                    x1="0" y1="4" x2="22" y2="4"
                                    stroke={k.warna ?? c.gelap}
                                    strokeWidth="3"
                                    strokeDasharray={k.putus ? '5 4' : undefined}
                                />
                            </svg>
                            {k.nama}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
