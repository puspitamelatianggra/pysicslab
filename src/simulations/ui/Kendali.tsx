import { ReactNode, useId } from 'react';
import { angka } from '../engine/format';

/* ---------- Panel ---------- */

interface PanelProps {
    judul: string;
    ikon?: ReactNode;
    /** Warna pita judul. Lime untuk rumus, oranye untuk tantangan, netral untuk lainnya. */
    nada?: 'netral' | 'lime' | 'oranye';
    /** Isi di sisi kanan pita judul, misalnya tombol kecil */
    aksi?: ReactNode;
    children: ReactNode;
    className?: string;
}

const NADA = {
    netral: 'bg-background',
    lime: 'bg-main',
    oranye: 'bg-accent',
};

export function Panel({ judul, ikon, nada = 'netral', aksi, children, className = '' }: PanelProps) {
    return (
        <section className={`bg-secondary-background border-2 border-border rounded-base ${className}`}>
            <div className={`flex items-center justify-between gap-3 px-4 py-2.5 border-b-2 border-border rounded-t-[3px] ${NADA[nada]}`}>
                <h2 className="flex items-center gap-2 text-sm font-bold text-foreground">
                    {ikon}
                    {judul}
                </h2>
                {aksi}
            </div>
            <div className="p-4">{children}</div>
        </section>
    );
}

/* ---------- Slider ---------- */

interface SliderProps {
    label: string;
    /** Simbol besaran, misalnya "v₀" atau "θ" */
    simbol?: string;
    nilai: number;
    min: number;
    maks: number;
    langkah?: number;
    satuan?: string;
    desimal?: number;
    onUbah: (nilai: number) => void;
    nonaktif?: boolean;
    /** Keterangan kecil di bawah slider */
    catatan?: string;
}

export function Slider({ label, simbol, nilai, min, maks, langkah = 1, satuan = '', desimal, onUbah, nonaktif, catatan }: SliderProps) {
    const id = useId();
    const d = desimal ?? (langkah >= 1 ? 0 : langkah >= 0.1 ? 1 : 2);
    return (
        <div>
            <div className="flex items-baseline justify-between gap-3">
                <label htmlFor={id} className="text-sm font-semibold text-foreground">
                    {label}
                    {simbol && <span className="font-display font-bold"> ({simbol})</span>}
                </label>
                <output htmlFor={id} className="font-display text-sm font-bold text-foreground bg-main border-2 border-border rounded-base px-2 py-0.5 tabular-nums whitespace-nowrap">
                    {angka(nilai, d)}{satuan && ` ${satuan}`}
                </output>
            </div>
            <input
                id={id}
                type="range"
                className="sim-slider"
                min={min}
                max={maks}
                step={langkah}
                value={nilai}
                disabled={nonaktif}
                onChange={(e) => onUbah(Number(e.target.value))}
            />
            {catatan && <p className="text-xs text-muted -mt-1">{catatan}</p>}
        </div>
    );
}

/* ---------- Pilihan (segmented) ---------- */

interface PilihanProps<T extends string | number> {
    label: string;
    nilai: T;
    pilihan: { nilai: T; label: string }[];
    onUbah: (nilai: T) => void;
    /** Sembunyikan label secara visual (tetap terbaca pembaca layar) */
    labelTersembunyi?: boolean;
}

export function Pilihan<T extends string | number>({ label, nilai, pilihan, onUbah, labelTersembunyi }: PilihanProps<T>) {
    return (
        <fieldset>
            <legend className={labelTersembunyi ? 'sr-only' : 'text-sm font-semibold text-foreground mb-1.5'}>{label}</legend>
            <div className="flex flex-wrap gap-2">
                {pilihan.map((p) => {
                    const aktif = p.nilai === nilai;
                    return (
                        <button
                            key={String(p.nilai)}
                            type="button"
                            aria-pressed={aktif}
                            onClick={() => onUbah(p.nilai)}
                            className={`min-h-11 px-3 rounded-base border-2 border-border text-sm font-semibold text-foreground transition-all ${aktif
                                ? 'bg-main shadow-shadow-sm'
                                : 'bg-secondary-background hover:bg-background active:translate-x-[1px] active:translate-y-[1px]'
                                }`}
                        >
                            {p.label}
                        </button>
                    );
                })}
            </div>
        </fieldset>
    );
}

/* ---------- Sakelar (toggle) ---------- */

interface SakelarProps {
    label: string;
    aktif: boolean;
    onUbah: (aktif: boolean) => void;
    catatan?: string;
    /** Teks pendek di dalam sakelar. Bawaan "Ya" / "Tidak". */
    teksAktif?: string;
    teksMati?: string;
}

export function Sakelar({ label, aktif, onUbah, catatan, teksAktif = 'Ya', teksMati = 'Tidak' }: SakelarProps) {
    const id = useId();
    return (
        <div>
            <div className="flex items-center justify-between gap-3 min-h-11">
                <span id={id} className="text-sm font-semibold text-foreground">{label}</span>
                <button
                    type="button"
                    role="switch"
                    aria-checked={aktif}
                    aria-labelledby={id}
                    onClick={() => onUbah(!aktif)}
                    className={`shrink-0 inline-flex items-center gap-1.5 min-w-[68px] h-9 px-[3px] rounded-base border-2 border-border transition-colors ${aktif ? 'flex-row-reverse bg-accent' : 'bg-background hover:bg-secondary-background'}`}
                >
                    {/* Lebar sakelar mengikuti panjang teksnya; tombol geser pindah sisi saat aktif */}
                    <span aria-hidden="true" className="shrink-0 w-6 h-6 rounded-[3px] border-2 border-border bg-secondary-background" />
                    <span aria-hidden="true" className="flex-1 px-1 text-center text-[11px] font-bold text-foreground whitespace-nowrap">
                        {aktif ? teksAktif : teksMati}
                    </span>
                </button>
            </div>
            {catatan && <p className="text-xs text-muted">{catatan}</p>}
        </div>
    );
}

/* ---------- Tombol ---------- */

interface TombolProps {
    children: ReactNode;
    onClick: () => void;
    /** 'utama' = oranye (satu aksi terpenting di simulasi), 'kedua' = lime, 'biasa' = putih */
    jenis?: 'utama' | 'kedua' | 'biasa';
    nonaktif?: boolean;
    /** Wajib untuk tombol yang isinya hanya ikon */
    ariaLabel?: string;
    className?: string;
}

const JENIS_TOMBOL = {
    utama: 'bg-accent',
    kedua: 'bg-main',
    biasa: 'bg-secondary-background',
};

export function Tombol({ children, onClick, jenis = 'biasa', nonaktif, ariaLabel, className = '' }: TombolProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            disabled={nonaktif}
            aria-label={ariaLabel}
            className={`inline-flex items-center justify-center gap-2 min-h-11 px-4 rounded-base border-2 border-border text-sm font-bold text-foreground shadow-shadow-sm transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none disabled:opacity-40 disabled:hover:translate-x-0 disabled:hover:translate-y-0 disabled:hover:shadow-shadow-sm ${JENIS_TOMBOL[jenis]} ${className}`}
        >
            {children}
        </button>
    );
}

/* ---------- Bacaan (readout) ---------- */

interface BacaanProps {
    label: string;
    nilai: string;
    satuan?: string;
    /** Tonjolkan besaran yang sedang jadi pusat perhatian */
    sorot?: 'lime' | 'oranye';
}

export function Bacaan({ label, nilai, satuan, sorot }: BacaanProps) {
    const latar = sorot === 'lime' ? 'bg-main' : sorot === 'oranye' ? 'bg-accent' : 'bg-background';
    return (
        <div className={`border-2 border-border rounded-base px-3 py-2 ${latar}`}>
            <div className={`text-xs font-semibold ${sorot ? 'text-foreground' : 'text-muted'}`}>{label}</div>
            <div className="font-display text-lg font-bold text-foreground tabular-nums leading-tight">
                {nilai}
                {satuan && <span className="text-sm font-medium"> {satuan}</span>}
            </div>
        </div>
    );
}

export function BarisBacaan({ children }: { children: ReactNode }) {
    return <div className="grid grid-cols-2 @md:grid-cols-3 @2xl:grid-cols-6 gap-2">{children}</div>;
}
