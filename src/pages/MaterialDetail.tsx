import { useState, useEffect } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, BookOpen, Lightbulb, Calculator, Play, CheckCircle, ArrowLeft } from 'lucide-react';
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
    const subjectColor = isPhysics ? 'from-blue-500 to-cyan-400' : 'from-green-500 to-emerald-400';

    const material = materials.find(m => m.id === Number(id));
    const [activeChapter, setActiveChapter] = useState(0);
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

    // Saat pindah bab, kembali ke atas halaman agar bab baru dibaca dari awal
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
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
            <div className="min-h-screen flex items-center justify-center bg-cream">
                <div className="text-center">
                    <p className="text-2xl text-dark mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                        Materi tidak ditemukan
                    </p>
                    <Link to={subjectPath} className="text-orange hover:underline font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>
                        Kembali ke Daftar Materi
                    </Link>
                </div>
            </div>
        );
    }

    const chapter = material.chapters[activeChapter];

    return (
        <div className="min-h-screen bg-cream p-4 md:p-8">
            <div className="max-w-5xl mx-auto">
                {/* Breadcrumb */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center gap-2 text-sm text-gray mb-6"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                >
                    <Link to="/materials" className="hover:text-orange transition-colors font-semibold">
                        Materi
                    </Link>
                    <ChevronRight size={14} />
                    <Link to={subjectPath} className="hover:text-orange transition-colors font-semibold">
                        {subjectName}
                    </Link>
                    <ChevronRight size={14} />
                    <span className="text-dark font-semibold">{material.title}</span>
                </motion.div>

                {/* Back Button */}
                <Link
                    to={subjectPath}
                    className="inline-flex items-center gap-2 text-orange hover:underline font-semibold mb-4"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                >
                    <ArrowLeft size={16} />
                    Kembali ke Daftar Materi {subjectName}
                </Link>

                {/* Chapter Navigation */}
                <div className="flex gap-2 overflow-x-auto pb-4 mb-6">
                    {material.chapters.map((ch, index) => (
                        <button
                            key={ch.chapterId}
                            onClick={() => setActiveChapter(index)}
                            className={`flex-shrink-0 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${index === activeChapter
                                ? 'bg-lime border-[3px] border-dark shadow-[3px_3px_0_#1A1A1A]'
                                : 'bg-white border-[3px] border-dark text-gray hover:bg-lime/50'
                                }`}
                            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                        >
                            {index + 1}. {ch.title}
                        </button>
                    ))}
                </div>

                {/* Content Area */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={chapter.chapterId}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white border-[3px] border-dark rounded-xl p-6 md:p-8 shadow-[4px_4px_0_#1A1A1A]"
                    >
                        {/* Chapter Title */}
                        <div className="flex items-center gap-3 mb-6">
                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${material.color} border-[3px] border-dark flex items-center justify-center shadow-[3px_3px_0_#1A1A1A]`}>
                                <BookOpen size={24} className="text-dark" strokeWidth={3} />
                            </div>
                            <div>
                                <h2 className="text-xl md:text-2xl font-bold text-dark" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                                    {chapter.title}
                                </h2>
                                <p className="text-sm text-gray" style={{ fontFamily: 'Inter, sans-serif' }}>
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
                            <div className="bg-lime border-[3px] border-dark rounded-xl p-6 mb-6 shadow-[3px_3px_0_#1A1A1A]">
                                <div className="flex items-center gap-2 mb-3">
                                    <Calculator size={20} className="text-dark" strokeWidth={3} />
                                    <h4 className="text-dark font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                                        Rumus Penting
                                    </h4>
                                </div>
                                <pre className="text-dark font-mono text-sm whitespace-pre-wrap" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                                    {chapter.formula}
                                </pre>
                            </div>
                        )}

                        {/* Example Box */}
                        {chapter.example && (
                            <div className="bg-orange border-[3px] border-dark rounded-xl p-6 mb-6 shadow-[3px_3px_0_#1A1A1A]">
                                <div className="flex items-center gap-2 mb-3">
                                    <Lightbulb size={20} className="text-white" strokeWidth={3} />
                                    <h4 className="text-white font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                                        Contoh Soal & Pembahasan
                                    </h4>
                                </div>
                                <pre className="text-white text-sm whitespace-pre-wrap" style={{ fontFamily: 'Inter, sans-serif' }}>
                                    {chapter.example}
                                </pre>
                            </div>
                        )}

                        {/* Video Link */}
                        {chapter.videoUrl && (
                            <div className="bg-cream border-[3px] border-dark rounded-xl p-6 mb-6 shadow-[3px_3px_0_#1A1A1A]">
                                <div className="flex items-center gap-2 mb-3">
                                    <Play size={20} className="text-dark" strokeWidth={3} />
                                    <h4 className="text-dark font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                                        Video Pembelajaran
                                    </h4>
                                </div>
                                <a
                                    href={chapter.videoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-orange hover:underline font-semibold text-sm"
                                    style={{ fontFamily: 'Inter, sans-serif' }}
                                >
                                    Tonton Video →
                                </a>
                            </div>
                        )}

                        {/* Complete Button */}
                        {completedChapters.includes(chapter.chapterId) ? (
                            <div className="flex items-center gap-2 mb-4 p-4 rounded-xl bg-lime border-[3px] border-dark shadow-[3px_3px_0_#1A1A1A] mt-8">
                                <CheckCircle size={20} className="text-dark" strokeWidth={3} />
                                <span className="text-dark font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                                    Bab ini sudah selesai! +10 XP {useSupabase ? '(tersimpan di cloud)' : '(tersimpan lokal)'}
                                </span>
                            </div>
                        ) : (
                            <button
                                onClick={markAsComplete}
                                className="w-full mb-4 py-4 rounded-xl bg-orange text-white font-bold border-[3px] border-dark shadow-[4px_4px_0_#1A1A1A] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#1A1A1A] transition-all mt-8"
                                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                            >
                                ✓ Tandai Bab Ini Selesai (+10 XP)
                            </button>
                        )}

                        {/* Success Message */}
                        {showCompleteMessage && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mb-4 p-4 rounded-xl bg-lime border-[3px] border-dark shadow-[3px_3px_0_#1A1A1A] text-center"
                            >
                                <span className="text-dark font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                                    🎉 +10 XP! Progres {useSupabase ? 'tersimpan di cloud' : 'tersimpan lokal'}.
                                </span>
                            </motion.div>
                        )}

                        {/* Navigation Buttons */}
                        <div className="flex items-center justify-between pt-6 border-t-[2px] border-dark">
                            <button
                                onClick={() => setActiveChapter(Math.max(0, activeChapter - 1))}
                                disabled={activeChapter === 0}
                                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white border-[3px] border-dark text-gray hover:bg-lime/50 disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-[3px_3px_0_#1A1A1A] hover:shadow-[2px_2px_0_#1A1A1A]"
                                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                            >
                                <ChevronLeft size={16} /> Sebelumnya
                            </button>

                            {activeChapter === material.chapters.length - 1 ? (
                                <Link
                                    to="/quiz"
                                    className="flex items-center gap-2 px-6 py-2 rounded-lg bg-orange text-white font-bold border-[3px] border-dark shadow-[3px_3px_0_#1A1A1A] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0_#1A1A1A] transition-all"
                                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                                >
                                    Kerjakan Kuis 🎯
                                </Link>
                            ) : (
                                <button
                                    onClick={() => setActiveChapter(activeChapter + 1)}
                                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-lime border-[3px] border-dark text-dark font-bold hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#1A1A1A] transition-all shadow-[3px_3px_0_#1A1A1A]"
                                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}
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
