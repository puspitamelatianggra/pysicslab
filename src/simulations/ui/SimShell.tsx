import { IconAdjustmentsHorizontal } from '@tabler/icons-react';
import { ReactNode } from 'react';
import { Panel } from './Kendali';

interface SimShellProps {
    /** <Panggung /> adegan utama */
    panggung: ReactNode;
    /** <PlayBar /> atau tombol aksi lain tepat di bawah panggung */
    kendaliPutar?: ReactNode;
    /** <BarisBacaan> berisi <Bacaan /> angka-angka saat ini */
    bacaan?: ReactNode;
    /** Slider, pilihan, dan sakelar. Dibungkus panel "Atur besaran" secara otomatis. */
    pengatur: ReactNode;
    /** <RumusHidup /> */
    rumus?: ReactNode;
    /** Grafik terhadap waktu (<GrafikHidup /> di dalam <Panel>) */
    grafik?: ReactNode;
    /** <SelidikiHubungan /> */
    selidiki?: ReactNode;
    /** <Tantangan /> */
    tantangan?: ReactNode;
}

/**
 * Tata letak baku semua simulasi.
 * Layar sempit: panggung, tombol, pengatur, lalu sisanya menurun.
 * Layar lebar: panggung di kiri, pengatur dan rumus di kanan; grafik, selidiki, dan tantangan di bawahnya.
 * Titik pindahnya mengikuti lebar wadah (bukan lebar layar), karena saat login ada Sidebar di kanan.
 */
export default function SimShell({ panggung, kendaliPutar, bacaan, pengatur, rumus, grafik, selidiki, tantangan }: SimShellProps) {
    return (
        <div className="@container">
            <div className="grid gap-4 @4xl:grid-cols-[minmax(0,1fr)_19rem] items-start">
                <div className="space-y-3 min-w-0">
                    {panggung}
                    {kendaliPutar}
                    {bacaan}
                </div>
                <div className="space-y-4 min-w-0">
                    <Panel judul="Atur besaran" ikon={<IconAdjustmentsHorizontal size={18} stroke={2.5} aria-hidden="true" />}>
                        <div className="space-y-3">{pengatur}</div>
                    </Panel>
                    {rumus}
                </div>
            </div>

            {(grafik || selidiki) && (
                <div className="grid gap-4 mt-4 @3xl:grid-cols-2 items-start">
                    {grafik && <div className="min-w-0">{grafik}</div>}
                    {selidiki && <div className="min-w-0">{selidiki}</div>}
                </div>
            )}

            {tantangan && <div className="mt-4">{tantangan}</div>}
        </div>
    );
}
