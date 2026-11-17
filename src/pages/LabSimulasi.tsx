import { Component, ReactNode, Suspense } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, BookOpen, ChevronRight } from 'lucide-react';
import { physicsMaterials } from '../data/physics-materials';
import { BIDANG, labSims } from '../simulations/registry';

/** Menangkap kegagalan memuat atau menjalankan simulasi supaya halaman tidak kosong. */
class BatasGalat extends Component<{ children: ReactNode }, { galat: boolean }> {
    state = { galat: false };

    static getDerivedStateFromError() {
        return { galat: true };
    }

    render() {
        if (!this.state.galat) return this.props.children;
        return (
            <div role="alert" className="border-2 border-border rounded-base bg-accent-soft px-6 py-10 text-center">
                <p className="font-display text-xl font-bold text-foreground">Simulasi gagal dimuat.</p>
                <p className="text-sm text-foreground mt-2">
                    Biasanya ini karena sambungan internet terputus saat simulasi diunduh. Periksa sambunganmu, lalu muat ulang.
                </p>
                <button
                    type="button"
                    onClick={() => window.location.reload()}
                    className="mt-5 min-h-11 px-5 rounded-base bg-accent text-foreground font-bold border-2 border-border shadow-shadow-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
                >
                    Muat ulang halaman
                </button>
            </div>
        );
    }
}

export default function LabSimulasi() {
    const { slug } = useParams();
    const sim = labSims.find((s) => s.slug === slug);

    if (!sim || !sim.siap) {
        return (
            <div className="min-h-screen flex items-center justify-center p-4">
                <div className="text-center">
                    <p className="text-2xl font-bold text-foreground mb-2">
                        {sim ? `Simulasi "${sim.judul}" belum siap` : 'Simulasi tidak ditemukan'}
                    </p>
                    <p className="text-muted mb-4">
                        {sim ? 'Simulasi ini masih dibuat.' : 'Alamatnya mungkin salah ketik.'}
                    </p>
                    <Link to="/lab" className="text-foreground underline underline-offset-4 decoration-2 font-semibold">
                        Lihat semua simulasi
                    </Link>
                </div>
            </div>
        );
    }

    const Simulasi = sim.komponen;
    const bidang = BIDANG[sim.bidang];

    // Bab materi yang terkait dengan simulasi ini
    const babTerkait = sim.chapterIds.flatMap((id) => {
        for (const materi of physicsMaterials) {
            const bab = materi.chapters.find((c) => c.chapterId === id);
            if (bab) return [{ id, judul: bab.title, materialId: materi.id }];
        }
        return [];
    });

    return (
        <div className="min-h-screen p-4 md:p-8">
            <div className="max-w-6xl mx-auto">
                <nav aria-label="Jejak halaman" className="flex items-center gap-2 text-sm text-muted mb-5">
                    <Link to="/lab" className="inline-flex items-center gap-1.5 hover:text-foreground hover:underline underline-offset-4 transition-colors font-semibold">
                        <ArrowLeft size={14} aria-hidden="true" />
                        Lab Virtual
                    </Link>
                    <ChevronRight size={14} aria-hidden="true" />
                    <span className="font-semibold">{bidang.label}</span>
                    <ChevronRight size={14} aria-hidden="true" />
                    <span className="text-foreground font-semibold">{sim.judul}</span>
                </nav>

                <header className="mb-6 max-w-3xl">
                    <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">{sim.judul}</h1>
                    <p className="text-muted">{sim.deskripsi}</p>
                </header>

                <BatasGalat>
                    <Suspense
                        fallback={
                            <div role="status" className="border-2 border-border rounded-base bg-secondary-background px-6 py-16 text-center">
                                <p className="font-display text-lg font-bold text-foreground">Memuat simulasi {sim.judul}…</p>
                            </div>
                        }
                    >
                        <Simulasi />
                    </Suspense>
                </BatasGalat>

                {babTerkait.length > 0 && (
                    <aside className="mt-8 border-t-2 border-border pt-5" aria-labelledby="judul-bab-terkait">
                        <h2 id="judul-bab-terkait" className="text-base font-bold text-foreground mb-3">Baca materinya</h2>
                        <ul className="flex flex-wrap gap-3">
                            {babTerkait.map((b) => (
                                <li key={b.id}>
                                    <Link
                                        to={`/materials/physics/${b.materialId}?bab=${b.id}`}
                                        className="inline-flex items-center gap-2 min-h-11 px-4 rounded-base bg-secondary-background border-2 border-border text-sm font-semibold text-foreground shadow-shadow-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
                                    >
                                        <BookOpen size={16} aria-hidden="true" />
                                        {b.judul}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </aside>
                )}
            </div>
        </div>
    );
}
