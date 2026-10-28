import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, Trophy, Flame, Target, TrendingUp, Clock, Star, Award, ArrowRight } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { getProgress, resetProgress } from '../utils/storage';
import { physicsMaterials } from '../data/physics-materials';
import { mathMaterials } from '../data/math-materials';
import { formatDistanceToNow } from 'date-fns';
import { id as localeId } from 'date-fns/locale';
import { getStudentData, getCompletedChapters, getStudentQuizScores, getRecentActivities, getXpHistory, calculateBadges, getLocalDate, isSupabaseConfigured, withTimeout } from '../utils/supabaseStorage';
import { supabase } from '../lib/supabase';

// Combine semua materi untuk dashboard
const allMaterials = [...physicsMaterials, ...mathMaterials];

export default function Dashboard() {
    const [progress, setProgress] = useState<any>(null);
    const [weeklyXP, setWeeklyXP] = useState<any[]>([]);
    const [isCloud, setIsCloud] = useState(false);

    useEffect(() => {
        const loadData = async () => {
            let data: any = null;

            try {
                if (isSupabaseConfigured()) {
                    console.log('[Dashboard] 1. cek sesi...');
                    const { data: sessionData } = await withTimeout(supabase.auth.getSession());
                    console.log('[Dashboard] 1. sesi:', sessionData.session ? 'ADA' : 'TIDAK ADA');

                    if (sessionData.session) {
                        console.log('[Dashboard] 2. ambil data student...');
                        const studentResult = await withTimeout(getStudentData());
                        console.log('[Dashboard] 2. selesai:', studentResult.data ? 'ada baris' : 'KOSONG');

                        console.log('[Dashboard] 3. ambil bab selesai...');
                        const chaptersResult = await withTimeout(getCompletedChapters());
                        console.log('[Dashboard] 3. selesai');

                        console.log('[Dashboard] 4. ambil skor kuis...');
                        const scoresResult = await withTimeout(getStudentQuizScores());
                        console.log('[Dashboard] 4. selesai');

                        console.log('[Dashboard] 5. ambil aktivitas & riwayat XP...');
                        const [activitiesResult, historyResult] = await withTimeout(
                            Promise.all([getRecentActivities(10), getXpHistory(7)])
                        );
                        console.log('[Dashboard] 5. selesai');

                        if (studentResult.data) {
                            // Skor diurutkan dari yang terbaru, jadi simpan skor PERTAMA per kuis (= terbaru)
                            const quizScores: { [quizId: number]: number } = {};
                            for (const s of scoresResult.data || []) {
                                if (!(s.quiz_id in quizScores)) quizScores[s.quiz_id] = s.percentage;
                            }
                            const completedChapters = chaptersResult.data || [];

                            data = {
                                ...studentResult.data,
                                completedChapters,
                                quizScores,
                                totalQuizzesTaken: (scoresResult.data || []).length,
                                earnedBadges: calculateBadges({
                                    xp: studentResult.data.xp,
                                    level: studentResult.data.level,
                                    streak: studentResult.data.streak,
                                    completedChapters: completedChapters.length,
                                    quizPercentages: Object.values(quizScores),
                                }),
                                recentActivities: (activitiesResult.data || []).map((a: any) => ({
                                    id: a.id,
                                    text: a.text,
                                    xp: a.xp,
                                    icon: a.icon,
                                    time: formatDistanceToNow(new Date(a.created_at), { addSuffix: true, locale: localeId }),
                                })),
                                xpHistory: historyResult.data || {},
                            };
                            setIsCloud(true);
                        }
                    }
                }
            } catch (err) {
                console.error('[Dashboard] GAGAL:', err);
            }

            if (!data) {
                console.log('[Dashboard] pakai data lokal (fallback)');
                data = getProgress();
            }

            setProgress(data);

            const today = new Date();
            const days = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'];
            const weekData: any[] = [];
            for (let i = 6; i >= 0; i--) {
                const date = new Date(today);
                date.setDate(date.getDate() - i);
                const dateStr = getLocalDate(date);
                weekData.push({
                    day: days[date.getDay()],
                    xp: data.xpHistory?.[dateStr] ?? 0,
                    isToday: i === 0,
                });
            }
            setWeeklyXP(weekData);
        };

        loadData();
    }, []);

    const handleReset = () => {
        if (confirm('Yakin ingin mereset semua progres? Data tidak bisa dikembalikan!')) {
            resetProgress();
            window.location.reload();
        }
    };

    if (!progress) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-cream">
                <p className="text-dark font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Memuat...</p>
            </div>
        );
    }

    const scoreValues = Object.values(progress.quizScores) as number[];
    const avgScore = scoreValues.length
        ? Math.round(scoreValues.reduce((a, b) => a + b, 0) / scoreValues.length)
        : 0;

    const subjectProgress = allMaterials.map((m: any) => {
        const done = progress.completedChapters.filter((id: string) => id.startsWith(`${m.id}-`)).length;
        return {
            name: m.title,
            progress: Math.round((done / m.chapters.length) * 100),
            color: m.id === 1 ? '#C5FA00' : m.id === 2 ? '#FF6B00' : m.id === 3 ? '#ef4444' : m.id === 4 ? '#a855f7' : '#10b981'
        };
    });

    const quizScores = Object.entries(progress.quizScores).map(([quizId, score]) => ({
        quiz: 'Kuis ' + quizId,
        score: score
    }));

    const badges = [
        { id: 1, name: "Pemula", icon: "🌱" },
        { id: 2, name: "Rajin", icon: "📚" },
        { id: 3, name: "Jenius", icon: "🧠" },
        { id: 4, name: "Kilat", icon: "⚡" },
        { id: 5, name: "Sempurna", icon: "💎" },
        { id: 6, name: "Master", icon: "👑" },
        { id: 7, name: "Legenda", icon: "🏆" },
        { id: 8, name: "Ilmuwan", icon: "🔬" },
    ];

    const levelProgress = progress.xp % 100;

    return (
        <div className="min-h-screen bg-cream p-4 md:p-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8 flex items-center justify-between flex-wrap gap-4"
                >
                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold text-dark mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                            Dashboard Belajar
                        </h1>
                        <p className="text-lg text-gray" style={{ fontFamily: 'Inter, sans-serif' }}>
                            {isCloud ? 'Progres belajarmu tersimpan di akunmu' : 'Progres belajarmu tersimpan di browser ini'}
                        </p>
                    </div>
                    <div className="flex gap-2">
                        <Link
                            to="/leaderboard"
                            className="px-4 py-2 rounded-lg bg-orange text-white border-[3px] border-dark text-sm font-bold hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#1A1A1A] transition-all shadow-[4px_4px_0_#1A1A1A] flex items-center gap-2"
                            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                        >
                            <Trophy size={16} strokeWidth={3} />
                            Lihat Peringkat
                            <ArrowRight size={16} strokeWidth={3} />
                        </Link>
                        {/* Reset hanya menghapus data lokal, jadi disembunyikan untuk akun cloud */}
                        {!isCloud && <button
                            onClick={handleReset}
                            className="px-4 py-2 rounded-lg bg-red-100 border-[3px] border-red-500 text-red-700 text-sm font-bold hover:bg-red-200 transition-colors shadow-[3px_3px_0_#1A1A1A]"
                            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                        >
                            Reset Progres
                        </button>}
                    </div>
                </motion.div>

                {/* Info Box */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mb-6 bg-lime border-[3px] border-dark rounded-xl p-4 shadow-[3px_3px_0_#1A1A1A]"
                >
                    <p className="text-sm text-dark" style={{ fontFamily: 'Inter, sans-serif' }}>
                        💡 <strong style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Info:</strong> {isCloud
                            ? 'Data progres tersimpan di cloud dan bisa diakses dari perangkat mana pun.'
                            : 'Data progres tersimpan di browser Anda. Jika Anda ganti browser/komputer atau hapus cache, data akan hilang.'}
                        Progres Anda: <strong>{progress.completedChapters.length} bab selesai</strong>, <strong>{Object.keys(progress.quizScores).length} kuis dikerjakan</strong>.
                    </p>
                </motion.div>

                {/* Stats Cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    {[
                        { label: "Total XP", value: progress.xp.toString(), icon: Star, color: "bg-orange", textColor: "text-white" },
                        { label: "Streak", value: progress.streak + " hari", icon: Flame, color: "bg-lime", textColor: "text-dark" },
                        { label: "Kuis Selesai", value: progress.totalQuizzesTaken.toString(), icon: Target, color: "bg-white", textColor: "text-dark" },
                        { label: "Rata-rata Skor", value: avgScore + "%", icon: TrendingUp, color: "bg-orange", textColor: "text-white" },
                    ].map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className={`${stat.color} border-[3px] border-dark rounded-xl p-5 shadow-[4px_4px_0_#1A1A1A] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#1A1A1A] transition-all`}
                        >
                            <div className="w-10 h-10 rounded-lg bg-white border-[2px] border-dark flex items-center justify-center mb-3 shadow-[2px_2px_0_#1A1A1A]">
                                <stat.icon className="text-dark" size={20} strokeWidth={3} />
                            </div>
                            <p className={`text-2xl font-bold ${stat.textColor} mb-1`} style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                                {stat.value}
                            </p>
                            <p className="text-sm text-gray" style={{ fontFamily: 'Inter, sans-serif' }}>
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Charts Row */}
                <div className="grid lg:grid-cols-2 gap-6 mb-8">
                    {/* Weekly XP Chart */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="bg-white border-[3px] border-dark rounded-xl p-6 shadow-[4px_4px_0_#1A1A1A]"
                    >
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-lg font-bold text-dark" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                                XP 7 Hari Terakhir
                            </h3>
                            <span className="text-sm text-orange font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                                Total: {progress.xp} XP
                            </span>
                        </div>
                        <ResponsiveContainer width="100%" height={200}>
                            <BarChart data={weeklyXP}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#1A1A1A" />
                                <XAxis dataKey="day" stroke="#1A1A1A" />
                                <YAxis stroke="#1A1A1A" />
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#FFF7ED', border: '3px solid #1A1A1A', borderRadius: '8px' }}
                                    labelStyle={{ color: '#1A1A1A' }}
                                    formatter={(value: any) => [value + ' XP', 'XP']}
                                />
                                <Bar dataKey="xp" fill="#FF6B00" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                        <p className="text-xs text-gray mt-2 text-center" style={{ fontFamily: 'Inter, sans-serif' }}>
                            Grafik menampilkan XP yang didapat per hari
                        </p>
                    </motion.div>

                    {/* Quiz Scores Chart */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="bg-white border-[3px] border-dark rounded-xl p-6 shadow-[4px_4px_0_#1A1A1A]"
                    >
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-lg font-bold text-dark" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                                Skor Kuis
                            </h3>
                            <span className="text-sm text-orange font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                                Rata-rata: {avgScore}%
                            </span>
                        </div>
                        {quizScores.length > 0 ? (
                            <ResponsiveContainer width="100%" height={200}>
                                <BarChart data={quizScores}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#1A1A1A" />
                                    <XAxis dataKey="quiz" stroke="#1A1A1A" />
                                    <YAxis stroke="#1A1A1A" domain={[0, 100]} />
                                    <Tooltip
                                        contentStyle={{ backgroundColor: '#FFF7ED', border: '3px solid #1A1A1A', borderRadius: '8px' }}
                                        labelStyle={{ color: '#1A1A1A' }}
                                    />
                                    <Bar dataKey="score" fill="#C5FA00" radius={[4, 4, 0, 0]} />
                                </BarChart>
                            </ResponsiveContainer>
                        ) : (
                            <div className="h-[200px] flex items-center justify-center text-gray" style={{ fontFamily: 'Inter, sans-serif' }}>
                                <p>Belum ada kuis yang dikerjakan</p>
                            </div>
                        )}
                    </motion.div>
                </div>

                {/* Subject Progress & Badges */}
                <div className="grid lg:grid-cols-2 gap-6 mb-8">
                    {/* Subject Progress */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="bg-white border-[3px] border-dark rounded-xl p-6 shadow-[4px_4px_0_#1A1A1A]"
                    >
                        <h3 className="text-lg font-bold text-dark mb-6 flex items-center gap-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                            <BookOpen size={20} className="text-dark" strokeWidth={3} />
                            Progres per Materi
                        </h3>
                        <div className="space-y-4">
                            {subjectProgress.map((subject: any) => (
                                <div key={subject.name}>
                                    <div className="flex justify-between mb-1">
                                        <span className="text-sm text-dark" style={{ fontFamily: 'Inter, sans-serif' }}>{subject.name}</span>
                                        <span className="text-sm font-bold" style={{ color: subject.color, fontFamily: 'Space Grotesk, sans-serif' }}>
                                            {subject.progress}%
                                        </span>
                                    </div>
                                    <div className="h-3 bg-cream border-[2px] border-dark rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: subject.progress + '%' }}
                                            transition={{ duration: 1, delay: 0.5 }}
                                            className="h-full rounded-full"
                                            style={{ backgroundColor: subject.color }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Badges */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="bg-white border-[3px] border-dark rounded-xl p-6 shadow-[4px_4px_0_#1A1A1A]"
                    >
                        <h3 className="text-lg font-bold text-dark mb-6 flex items-center gap-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                            <Award size={20} className="text-dark" strokeWidth={3} />
                            Badge Pencapaian ({progress.earnedBadges.length}/{badges.length})
                        </h3>
                        <div className="grid grid-cols-4 gap-3">
                            {badges.map((badge) => {
                                const earned = progress.earnedBadges.includes(badge.id);
                                return (
                                    <motion.div
                                        key={badge.id}
                                        whileHover={{ scale: 1.1 }}
                                        className={`flex flex-col items-center p-3 rounded-xl border-[3px] ${earned
                                            ? 'bg-lime border-dark shadow-[3px_3px_0_#1A1A1A]'
                                            : 'bg-cream border-dark opacity-40'
                                            }`}
                                    >
                                        <span className="text-2xl mb-1">{badge.icon}</span>
                                        <span className="text-xs text-dark text-center" style={{ fontFamily: 'Inter, sans-serif' }}>{badge.name}</span>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>

                {/* Level Progress */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.65 }}
                    className="bg-white border-[3px] border-dark rounded-xl p-6 mb-8 shadow-[4px_4px_0_#1A1A1A]"
                >
                    <h3 className="text-lg font-bold text-dark mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                        Level Progress
                    </h3>
                    <div className="flex items-center gap-4">
                        <div className="text-4xl font-bold text-orange" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                            Lv.{progress.level}
                        </div>
                        <div className="flex-1">
                            <div className="flex justify-between mb-1">
                                <span className="text-sm text-gray" style={{ fontFamily: 'Inter, sans-serif' }}>{progress.xp} XP</span>
                                <span className="text-sm text-gray" style={{ fontFamily: 'Inter, sans-serif' }}>{(progress.level) * 100} XP</span>
                            </div>
                            <div className="h-4 bg-cream border-[3px] border-dark rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: levelProgress + '%' }}
                                    transition={{ duration: 1 }}
                                    className="h-full bg-gradient-to-r from-lime to-orange"
                                />
                            </div>
                            <p className="text-xs text-gray mt-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                                {100 - levelProgress} XP lagi untuk naik level
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Recent Activity */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="bg-white border-[3px] border-dark rounded-xl p-6 shadow-[4px_4px_0_#1A1A1A]"
                >
                    <h3 className="text-lg font-bold text-dark mb-6 flex items-center gap-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                        <Clock size={20} className="text-dark" strokeWidth={3} />
                        Aktivitas Terbaru
                    </h3>
                    {progress.recentActivities.length > 0 ? (
                        <div className="space-y-3">
                            {progress.recentActivities.map((activity: any) => (
                                <div key={activity.id} className="flex items-center gap-4 p-3 rounded-lg bg-cream border-[2px] border-dark hover:bg-lime/30 transition-colors">
                                    <span className="text-2xl">{activity.icon}</span>
                                    <div className="flex-1">
                                        <p className="text-sm text-dark" style={{ fontFamily: 'Inter, sans-serif' }}>{activity.text}</p>
                                        <p className="text-xs text-gray" style={{ fontFamily: 'Inter, sans-serif' }}>{activity.time}</p>
                                    </div>
                                    <span className="text-sm font-bold text-orange" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{activity.xp}</span>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-8 text-gray" style={{ fontFamily: 'Inter, sans-serif' }}>
                            <p className="text-lg mb-2">Belum ada aktivitas</p>
                            <p className="text-sm">Mulai belajar untuk melihat aktivitas di sini!</p>
                        </div>
                    )}
                </motion.div>
            </div>
        </div>
    );
}
