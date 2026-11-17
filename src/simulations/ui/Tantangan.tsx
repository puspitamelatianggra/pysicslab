import { IconCheck, IconTarget } from '@tabler/icons-react';
import { useCallback, useState } from 'react';
import { Panel } from './Kendali';

export interface ButirTantangan {
    id: string;
    teks: string;
}

interface TantanganProps {
    daftar: ButirTantangan[];
    /** Id tantangan yang sudah tercapai */
    selesai: ReadonlySet<string>;
}

/**
 * Daftar tantangan prediksi. Simulasi sendiri yang memeriksa apakah tantangan tercapai
 * lalu memanggil `tandai(id)` dari useTantangan. Tidak ada tombol "saya sudah selesai".
 */
export default function Tantangan({ daftar, selesai }: TantanganProps) {
    const jumlah = daftar.filter((d) => selesai.has(d.id)).length;
    return (
        <Panel
            judul="Tantangan"
            nada="oranye"
            ikon={<IconTarget size={18} stroke={2.5} aria-hidden="true" />}
            aksi={<span className="text-xs font-bold text-foreground tabular-nums">{jumlah} dari {daftar.length} tercapai</span>}
        >
            <ol className="space-y-2.5" aria-live="polite">
                {daftar.map((d, i) => {
                    const beres = selesai.has(d.id);
                    return (
                        <li key={d.id} className="flex items-start gap-3">
                            <span
                                className={`mt-0.5 shrink-0 w-6 h-6 flex items-center justify-center rounded-base border-2 border-border font-display text-xs font-bold text-foreground ${beres ? 'bg-main' : 'bg-secondary-background'}`}
                            >
                                {beres ? <IconCheck size={15} stroke={3.5} aria-hidden="true" /> : i + 1}
                            </span>
                            <p className="text-sm text-foreground">
                                {d.teks}
                                {beres && <span className="font-bold"> Tercapai.</span>}
                            </p>
                        </li>
                    );
                })}
            </ol>
        </Panel>
    );
}

/** Menyimpan tantangan mana yang sudah tercapai selama halaman terbuka. */
export function useTantangan(): [ReadonlySet<string>, (id: string) => void] {
    const [selesai, setSelesai] = useState<ReadonlySet<string>>(new Set());
    const tandai = useCallback((id: string) => {
        setSelesai((lama) => (lama.has(id) ? lama : new Set(lama).add(id)));
    }, []);
    return [selesai, tandai];
}
