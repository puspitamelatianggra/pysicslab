import { IconPlayerPauseFilled, IconPlayerPlayFilled, IconPlayerSkipForwardFilled, IconRotate } from '@tabler/icons-react';
import { ReactNode } from 'react';
import { SimLoop } from '../engine/useSimLoop';
import { Pilihan, Tombol } from './Kendali';

interface PlayBarProps {
    loop: SimLoop;
    /** Dipanggil saat tombol utama ditekan dalam keadaan jeda. Bawaan: loop.mainkan */
    onMulai?: () => void;
    onUlang: () => void;
    /** Teks tombol utama saat belum berjalan, misalnya "Tembak" atau "Lepaskan balok" */
    labelMulai?: string;
    /** Sembunyikan tombol maju satu langkah untuk simulasi yang tidak membutuhkannya */
    tanpaLangkah?: boolean;
    /** Tombol tambahan khusus simulasi, misalnya "Hapus jejak" */
    tambahan?: ReactNode;
}

const KECEPATAN = [
    { nilai: 0.25, label: '¼×' },
    { nilai: 0.5, label: '½×' },
    { nilai: 1, label: '1×' },
];

export default function PlayBar({ loop, onMulai, onUlang, labelMulai = 'Mulai', tanpaLangkah, tambahan }: PlayBarProps) {
    return (
        <div className="flex flex-wrap items-end justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
                {loop.jalan ? (
                    <Tombol jenis="utama" onClick={loop.jeda} className="min-w-28">
                        <IconPlayerPauseFilled size={16} aria-hidden="true" />
                        Jeda
                    </Tombol>
                ) : (
                    <Tombol jenis="utama" onClick={onMulai ?? loop.mainkan} className="min-w-28">
                        <IconPlayerPlayFilled size={16} aria-hidden="true" />
                        {labelMulai}
                    </Tombol>
                )}
                {!tanpaLangkah && (
                    <Tombol onClick={loop.langkahSatu} nonaktif={loop.jalan} ariaLabel="Maju satu langkah">
                        <IconPlayerSkipForwardFilled size={16} aria-hidden="true" />
                    </Tombol>
                )}
                <Tombol onClick={onUlang}>
                    <IconRotate size={16} stroke={2.5} aria-hidden="true" />
                    Ulang
                </Tombol>
                {tambahan}
            </div>
            <Pilihan
                label="Kecepatan putar"
                labelTersembunyi
                nilai={loop.kecepatan}
                pilihan={KECEPATAN}
                onUbah={loop.setKecepatan}
            />
        </div>
    );
}
