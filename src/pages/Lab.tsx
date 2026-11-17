import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, X } from 'lucide-react';
import { IconBox, IconBulb, IconCircuitBulb, IconFlame, IconRipple, IconTarget } from '@tabler/icons-react';
import { IkonSimulasi, simulations } from '../data/simulations';
import { BIDANG, Bidang, gambarSim, labSims, URUTAN_BIDANG } from '../simulations/registry';

const IKON_PHET: Record<IkonSimulasi, typeof IconTarget> = {
    target: IconTarget,
    kotak: IconBox,
    rangkaian: IconCircuitBulb,
    gelombang: IconRipple,
    api: IconFlame,
    cahaya: IconBulb,
};

export default function Lab() {
    const [bidang, setBidang] = useState<Bidang | 'semua'>('semua');
    const [phetTerbuka, setPhetTerbuka] = useState<number | null>(null);

    const tampil = bidang === 'semua' ? labSims : labSims.filter((s) => s.bidang === bidang);
    const phet = simulations.find((s) => s.id === phetTerbuka);

    // Tutup jendela PhET dengan tombol Escape
    useEffect(() => {
        if (phetTerbuka === null) return;
        const saatTekan = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setPhetTerbuka(null);
        };
        window.addEventListener('keydown', saatTekan);
        return () => window.removeEventListener('keydown', saatTekan);
    }, [phetTerbuka]);

    const kelasSaring = (aktif: boolean) =>
        `flex-shrink-0 inline-flex items-center gap-2 min-h-11 px-4 rounded-base border-2 border-border text-sm font-semibold text-foreground transition-all ${aktif
            ? 'bg-main shadow-shadow-sm'
            : 'bg-secondary-background hover:bg-background'}`;

    return (
        <div className="min-h-screen p-4 md:p-8">
            <div className="max-w-6xl mx-auto">
                <header className="mb-8 max-w-3xl">
                    <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Lab Virtual</h1>
                    <p className="text-lg text-muted">
                        Ubah satu besaran, lalu lihat besaran lain ikut berubah. Tiap simulasi punya grafik hubungan
                        yang kamu isi sendiri dari hasil percobaanmu, dan tantangan untuk menguji tebakanmu.
                    </p>
                </header>

                {/* Saring per bidang */}
                <div className="flex items-center gap-2 mb-6 overflow-x-auto pb-2" role="group" aria-label="Saring simulasi per bidang">
                    <button type="button" aria-pressed={bidang === 'semua'} onClick={() => setBidang('semua')} className={kelasSaring(bidang === 'semua')}>
                        Semua
                    </button>
                    {URUTAN_BIDANG.map((b) => {
                        const { label, Ikon } = BIDANG[b];
                        return (
                            <button key={b} type="button" aria-pressed={bidang === b} onClick={() => setBidang(b)} className={kelasSaring(bidang === b)}>
                                <Ikon size={18} stroke={2.2} aria-hidden="true" />
                                {label}
                            </button>
                        );
                    })}
                </div>

                {/* Simulasi buatan sendiri */}
                <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {tampil.map((sim) => {
                        const { label, Ikon } = BIDANG[sim.bidang];
                        const isi = (
                            <>
                                <div className="aspect-[16/10] border-b-2 border-border bg-secondary-background flex items-center justify-center overflow-hidden">
                                    {sim.siap ? (
                                        <img
                                            src={gambarSim(sim.slug)}
                                            alt=""
                                            width={320}
                                            height={200}
                                            loading="lazy"
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <Ikon size={56} stroke={1.5} className="text-foreground/40" aria-hidden="true" />
                                    )}
                                </div>
                                <div className="p-5">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-base bg-background border-2 border-border text-xs font-bold text-foreground">
                                            <Ikon size={14} stroke={2.2} aria-hidden="true" />
                                            {label}
                                        </span>
                                        {!sim.siap && (
                                            <span className="px-2 py-0.5 rounded-base bg-accent-soft border-2 border-border text-xs font-bold text-foreground">
                                                Segera hadir
                                            </span>
                                        )}
                                    </div>
                                    <h2 className="text-lg font-bold text-foreground mb-1">{sim.judul}</h2>
                                    <p className="text-sm text-muted">{sim.deskripsi}</p>
                                </div>
                            </>
                        );
                        return (
                            <li key={sim.slug}>
                                {sim.siap ? (
                                    <Link
                                        to={`/lab/${sim.slug}`}
                                        className="block h-full bg-secondary-background border-2 border-border rounded-base overflow-hidden shadow-shadow hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-shadow-sm transition-all"
                                    >
                                        {isi}
                                    </Link>
                                ) : (
                                    <div className="h-full bg-secondary-background border-2 border-dashed border-border rounded-base overflow-hidden">
                                        {isi}
                                    </div>
                                )}
                            </li>
                        );
                    })}
                </ul>

                {/* Simulasi dari PhET */}
                <section className="mt-14" aria-labelledby="judul-phet">
                    <h2 id="judul-phet" className="text-2xl font-bold text-foreground mb-2">Simulasi dari PhET</h2>
                    <p className="text-muted mb-5 max-w-3xl">
                        Simulasi tambahan buatan PhET Interactive Simulations (University of Colorado Boulder). Gratis dan
                        berbahasa Inggris. Kalau simulasi tidak muncul di sini, buka di tab baru.
                    </p>
                    <ul className="bg-secondary-background border-2 border-border rounded-base divide-y-2 divide-border">
                        {simulations.map((sim) => {
                            const Ikon = IKON_PHET[sim.icon] ?? IconTarget;
                            return (
                                <li key={sim.id} className="flex flex-col sm:flex-row sm:items-center gap-3 p-4">
                                    <div className="flex items-start gap-3 flex-1 min-w-0">
                                        <span className="shrink-0 w-10 h-10 flex items-center justify-center rounded-base border-2 border-border bg-background">
                                            <Ikon size={22} stroke={2} aria-hidden="true" />
                                        </span>
                                        <div className="min-w-0">
                                            <h3 className="font-bold text-foreground">
                                                {sim.title}
                                                <span className="ml-2 text-xs font-semibold text-muted font-sans">{sim.category}</span>
                                            </h3>
                                            <p className="text-sm text-muted">{sim.description}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 shrink-0">
                                        <button
                                            type="button"
                                            onClick={() => setPhetTerbuka(sim.id)}
                                            className="min-h-11 px-4 rounded-base bg-main border-2 border-border text-foreground text-sm font-bold shadow-shadow-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
                                        >
                                            Buka di sini
                                        </button>
                                        <a
                                            href={sim.fallbackUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={`Buka ${sim.title} di tab baru`}
                                            className="min-h-11 min-w-11 inline-flex items-center justify-center rounded-base border-2 border-border bg-secondary-background text-foreground shadow-shadow-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
                                        >
                                            <ExternalLink size={16} aria-hidden="true" />
                                        </a>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </section>

                {/* Jendela PhET */}
                {phet && (
                    <div
                        className="fixed inset-0 bg-overlay z-50 flex items-center justify-center p-4"
                        onClick={() => setPhetTerbuka(null)}
                    >
                        <div
                            role="dialog"
                            aria-modal="true"
                            aria-label={phet.title}
                            className="bg-secondary-background border-2 border-border rounded-base w-full max-w-5xl max-h-[90vh] overflow-hidden shadow-shadow"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex items-center justify-between gap-3 p-3 border-b-2 border-border bg-main">
                                <div className="min-w-0">
                                    <h3 className="text-foreground font-bold truncate">{phet.title}</h3>
                                    <p className="text-xs font-semibold text-foreground">{phet.category} · PhET</p>
                                </div>
                                <div className="flex items-center gap-2 shrink-0">
                                    <a
                                        href={phet.fallbackUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 min-h-11 px-3 rounded-base bg-secondary-background text-foreground text-sm font-semibold border-2 border-border shadow-shadow-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
                                    >
                                        <ExternalLink size={14} aria-hidden="true" />
                                        Buka di tab baru
                                    </a>
                                    <button
                                        type="button"
                                        autoFocus
                                        onClick={() => setPhetTerbuka(null)}
                                        aria-label="Tutup simulasi"
                                        className="min-h-11 min-w-11 inline-flex items-center justify-center rounded-base bg-secondary-background border-2 border-border hover:bg-background transition-colors"
                                    >
                                        <X size={20} className="text-foreground" aria-hidden="true" />
                                    </button>
                                </div>
                            </div>
                            <div className="aspect-video bg-background">
                                <iframe
                                    src={phet.iframeUrl}
                                    width={1280}
                                    height={720}
                                    className="w-full h-full"
                                    title={phet.title}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
                                    allowFullScreen
                                />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
