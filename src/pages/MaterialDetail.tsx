import { useState, useEffect, useRef } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, BookOpen, Lightbulb, Calculator, Play, CheckCircle, ArrowLeft, ExternalLink } from 'lucide-react';
import { physicsMaterials } from '../data/physics-materials';
import { mathMaterials } from '../data/math-materials';
import { completeChapter, getProgress } from '../utils/storage';
import { completeChapterCloud, getCompletedChapters, isSupabaseConfigured } from '../utils/supabaseStorage';
import { supabase } from '../lib/supabase';

export default function MaterialDetail() {
    const { id } = useParams();
    const location = useLocation();
    const isPhysics = location.pathname.includes('/physics');
    const materials = isPhysics ? physicsMaterials : mathMaterials;
    const subjectName = isPhysics ? 'Fisika' : 'Matematika';
    const subjectPath = isPhysics ? '/materials/physics' : '/materials/math';

    const material = materials.find(m => m.id === Number(id));
    const [activeChapter, setActiveChapter] = useState(0);
    const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
    const [completedChapters, setCompletedChapters] = useState<string[]>([]);
    const [showCompleteMessage, setShowCompleteMessage] = useState(false);
    const [useSupabase, setUseSupabase] = useState(false);

    useEffect(() => {
        const checkAuth = async () => {
            if (isSupabaseConfigured()) {
                const userResult = await supabase.auth.getUser();
                const user = userResult.data.user;
                if (user) {
                    setUseSupabase(true);
                    const result = await getCompletedChapters();
                    if (result.data) {
                        setCompletedChapters(result.data);
                    }
                } else {
                    const progress = getProgress();
                    setCompletedChapters(progress.completedChapters);
                }
            } else {
                const progress = getProgress();
                setCompletedChapters(progress.completedChapters);
            }
        };
        checkAuth();
    }, []);

    // Saat pindah bab, langsung kembali ke atas (tanpa scroll smooth yang berebut dengan animasi)
    // dan geser tab bab aktif ke area yang terlihat
    useEffect(() => {
        window.scrollTo({ top: 0 });
        tabRefs.current[activeChapter]?.scrollIntoView({ block: 'nearest', inline: 'nearest' });
    }, [activeChapter]);

    const markAsComplete = async () => {
        if (!material) return;
        const chapter = material.chapters[activeChapter];

        if (completedChapters.includes(chapter.chapterId)) return;

        if (useSupabase) {
            const result = await completeChapterCloud(chapter.chapterId);

            // DIPERBAIKI: Cek error sebelum menampilkan sukses
            if (result.error) {
                alert('Gagal menyimpan progres: ' + result.error.message);
                console.error('Complete chapter error:', result.error);
                return;
            }

            if (!result.alreadyCompleted) {
                setCompletedChapters([...completedChapters, chapter.chapterId]);
                setShowCompleteMessage(true);
                setTimeout(() => setShowCompleteMessage(false), 3000);
            }
        } else {
            completeChapter(chapter.chapterId);
            setCompletedChapters([...completedChapters, chapter.chapterId]);
            setShowCompleteMessage(true);
            setTimeout(() => setShowCompleteMessage(false), 3000);
        }
    };

    if (!material) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <p className="text-2xl text-foreground mb-4">
                        Materi tidak ditemukan
                    </p>
                    <Link to={subjectPath} className="text-foreground underline underline-offset-4 decoration-2 font-semibold">
                        Kembali ke Daftar Materi
                    </Link>
                </div>
            </div>
        );
    }

    const chapter = material.chapters[activeChapter];

    return (
        <div className="min-h-screen p-4 md:p-8">
            <div className="max-w-5xl mx-auto">
                {/* Breadcrumb */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center gap-2 text-sm text-muted mb-6"
                >
                    <Link to="/materials" className="hover:text-foreground hover:underline underline-offset-4 transition-colors font-semibold">
                        Materi
                    </Link>
                    <ChevronRight size={14} />
                    <Link to={subjectPath} className="hover:text-foreground hover:underline underline-offset-4 transition-colors font-semibold">
                        {subjectName}
                    </Link>
                    <ChevronRight size={14} />
                    <span className="text-foreground font-semibold">{material.title}</span>
                </motion.div>

                {/* Back Button */}
                <Link
                    to={subjectPath}
                    className="inline-flex items-center gap-2 text-foreground hover:underline underline-offset-4 decoration-2 font-semibold mb-4"
                >
                    <ArrowLeft size={16} />
                    Kembali ke Daftar Materi {subjectName}
                </Link>

                {/* Chapter Navigation */}
                <div className="flex gap-2 overflow-x-auto pb-3 mb-6">
                    {material.chapters.map((ch, index) => (
                        <button
                            key={ch.chapterId}
                            ref={(el) => { tabRefs.current[index] = el; }}
                            onClick={() => setActiveChapter(index)}
                            aria-current={index === activeChapter ? 'step' : undefined}
                            className={`flex-shrink-0 px-4 py-2 rounded-base border-2 border-border text-sm font-semibold transition-colors ${index === activeChapter
                                ? 'bg-main text-foreground shadow-shadow-sm'
                                : 'bg-secondary-background text-foreground/70 hover:bg-background hover:text-foreground'
                                }`}
                        >
                            {index + 1}. {ch.title}
                        </button>
                    ))}
                </div>

                {/* Content Area */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={chapter.chapterId}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="bg-secondary-background border-2 border-border rounded-base p-5 md:p-8 shadow-shadow"
                    >
                        {/* Chapter Title */}
                        <div className="flex items-center gap-3 mb-6">
                            <div className={`w-12 h-12 rounded-base ${material.color} border-2 border-border flex items-center justify-center shadow-shadow-sm`}>
                                <BookOpen size={24} className="text-foreground" strokeWidth={3} />
                            </div>
                            <div>
                                <h2 className="text-xl md:text-2xl font-bold text-foreground">
                                    {chapter.title}
                                </h2>
                                <p className="text-sm text-muted">
                                    Bab {activeChapter + 1} dari {material.chapters.length}
                                </p>
                            </div>
                        </div>

                        {/* Main Content */}
                        {/* Link daftar isi (#id) di-scroll manual, karena HashRouter
                            akan menganggap "#id" sebagai alamat halaman baru */}
                        <div
                            className="materi-content mb-8"
                            onClick={(e) => {
                                const link = (e.target as HTMLElement).closest('a');
                                const href = link?.getAttribute('href');
                                if (!href || !href.startsWith('#')) return;
                                e.preventDefault();
                                e.currentTarget.querySelector(`[id="${href.slice(1)}"]`)
                                    ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            }}
                            dangerouslySetInnerHTML={{ __html: chapter.content }}
                        />

                        {/* Formula Box */}
                        {chapter.formula && (
                            <div className="bg-main border-2 border-border rounded-base p-6 mb-6 shadow-shadow-sm">
                                <div className="flex items-center gap-2 mb-3">
                                    <Calculator size={20} className="text-foreground" strokeWidth={3} />
                                    <h4 className="text-foreground font-bold">
                                        Rumus Penting
                                    </h4>
                                </div>
                                <pre className="text-foreground font-mono text-sm whitespace-pre-wrap">
                                    {chapter.formula}
                                </pre>
                            </div>
                        )}

                        {/* Example Box */}
                        {chapter.example && (
                            <div className="bg-accent border-2 border-border rounded-base p-6 mb-6 shadow-shadow-sm">
                                <div className="flex items-center gap-2 mb-3">
                                    <Lightbulb size={20} className="text-foreground" strokeWidth={3} />
                                    <h4 className="text-foreground font-bold">
                                        Contoh Soal & Pembahasan
                                    </h4>
                                </div>
                                <pre className="text-foreground text-sm whitespace-pre-wrap font-[inherit]">
                                    {chapter.example}
                                </pre>
                            </div>
                        )}

                        {/* Video Link */}
                        {chapter.videoUrl && (
                            <div className="bg-background border-2 border-border rounded-base p-6 mb-6">
                                <div className="flex items-center gap-2 mb-3">
                                    <Play size={20} className="text-foreground" strokeWidth={3} />
                                    <h4 className="text-foreground font-bold">
                                        Video Pembelajaran
                                    </h4>
                                </div>
                                <a
                                    href={chapter.videoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-foreground underline underline-offset-4 decoration-2 decoration-main font-semibold text-sm"
                                >
                                    Tonton Video <ExternalLink size={14} />
                                </a>
                            </div>
                        )}

                        {/* Complete Button */}
                        {completedChapters.includes(chapter.chapterId) ? (
                            <div className="flex items-center gap-2 mb-4 p-4 rounded-base bg-background border-2 border-border mt-8">
                                <CheckCircle size={20} className="text-foreground" strokeWidth={3} />
                                <span className="text-foreground font-bold">
                                    Bab ini sudah selesai! +10 XP {useSupabase ? '(tersimpan di cloud)' : '(tersimpan lokal)'}
                                </span>
                            </div>
                        ) : (
                            <button
                                onClick={markAsComplete}
                                className="w-full mb-4 py-4 rounded-base bg-accent text-foreground font-bold border-2 border-border shadow-shadow hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-shadow-sm transition-all mt-8 flex items-center justify-center gap-2"
                            >
                                <CheckCircle size={20} strokeWidth={2.5} />
                                Tandai Bab Ini Selesai (+10 XP)
                            </button>
                        )}

                        {/* Success Message */}
                        {showCompleteMessage && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mb-4 p-4 rounded-base bg-background border-2 border-border text-center"
                            >
                                <span className="text-foreground font-bold">
                                    +10 XP! Progres {useSupabase ? 'tersimpan di cloud' : 'tersimpan lokal'}.
                                </span>
                            </motion.div>
                        )}

                        {/* Navigation Buttons */}
                        <div className="flex items-center justify-between pt-6 border-t-2 border-border">
                            <button
                                onClick={() => setActiveChapter(Math.max(0, activeChapter - 1))}
                                disabled={activeChapter === 0}
                                className="flex items-center gap-2 px-4 py-2 rounded-base bg-secondary-background border-2 border-border text-foreground font-semibold hover:bg-background disabled:opacity-30 disabled:cursor-not-allowed transition-colors shadow-shadow-sm"
                            >
                                <ChevronLeft size={16} /> Sebelumnya
                            </button>

                            {activeChapter === material.chapters.length - 1 ? (
                                <Link
                                    to="/quiz"
                                    className="flex items-center gap-2 px-6 py-2 rounded-base bg-accent text-foreground font-bold border-2 border-border shadow-shadow-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
                                >
                                    Kerjakan Kuis
                                </Link>
                            ) : (
                                <button
                                    onClick={() => setActiveChapter(activeChapter + 1)}
                                    className="flex items-center gap-2 px-4 py-2 rounded-base bg-main border-2 border-border text-foreground font-bold hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all shadow-shadow-sm"
                                >
                                    Selanjutnya <ChevronRight size={16} />
                                </button>
                            )}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}
