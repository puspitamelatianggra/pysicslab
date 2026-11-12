import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    LayoutDashboard,
    TrendingUp,
    Clock,
    Trophy,
    LogOut,
    Flame,
    Star,
    Award,
    ChevronRight
} from 'lucide-react';
import { getProgress } from '../utils/storage';
import { getStudentData, getCompletedChapters, getStudentQuizScores, calculateBadges, logoutStudent, isSupabaseConfigured, XP_UPDATED_EVENT } from '../utils/supabaseStorage';
import { supabase } from '../lib/supabase';

export default function Sidebar() {
    const [userXP, setUserXP] = useState(0);
    const [userLevel, setUserLevel] = useState(1);
    const [userStreak, setUserStreak] = useState(0);
    const [userBadges, setUserBadges] = useState(0);
    const [userName, setUserName] = useState('Siswa');
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const loadData = async () => {
            if (isSupabaseConfigured()) {
                // DIPERBAIKI: Pakai getSession() bukan getUser() untuk performa
                const { data: sessionData } = await supabase.auth.getSession();

                if (sessionData.session) {
                    // Ambil data dari Supabase
                    const [result, chapters, scores] = await Promise.all([
                        getStudentData(),
                        getCompletedChapters(),
                        getStudentQuizScores(),
                    ]);
                    if (result.data) {
                        setUserXP(result.data.xp || 0);
                        setUserLevel(result.data.level || 1);
                        setUserStreak(result.data.streak || 0);
                        setUserName(result.data.name || 'Siswa');

                        // Hitung badge (aturan sama dengan Dashboard)
                        setUserBadges(calculateBadges({
                            xp: result.data.xp || 0,
                            level: result.data.level || 1,
                            streak: result.data.streak || 0,
                            completedChapters: (chapters.data || []).length,
                            quizPercentages: (scores.data || []).map((s: any) => s.percentage),
                        }).length);
                    }
                }
            } else {
                // Fallback ke localStorage
                const progress = getProgress();
                setUserXP(progress.xp);
                setUserLevel(progress.level);
                setUserStreak(progress.streak);
                setUserBadges(progress.earnedBadges.length);
            }
        };

        loadData();

        // Muat ulang saat XP bertambah (selesai bab / kuis) tanpa pindah halaman
        window.addEventListener(XP_UPDATED_EVENT, loadData);
        return () => window.removeEventListener(XP_UPDATED_EVENT, loadData);
    }, [location.pathname]);

    const handleLogout = async () => {
        if (isSupabaseConfigured()) {
            await logoutStudent();
        }
        navigate('/');
    };
    const levelProgress = userXP % 100;
    const levelNames = ['Pemula', 'Explorer', 'Penjelajah', 'Pelajar', 'Cendekia', 'Ahli', 'Master', 'Expert', 'Genius', 'Legenda'];
    const levelName = levelNames[Math.min(userLevel - 1, levelNames.length - 1)];

    return (
        <aside className="w-80 bg-secondary-background border-2 border-border rounded-base shadow-shadow hidden lg:block fixed right-8 top-24 z-40">
            {/* Header */}
            <div className="p-6 border-b-2 border-border bg-background rounded-t-base">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-accent border-2 border-border rounded-base flex items-center justify-center shadow-shadow-sm">
                        <Star size={24} className="text-foreground" fill="#1A1A1A" strokeWidth={3} />
                    </div>
                    <div>
                        <p className="text-sm text-foreground">{userName} · Level {userLevel}</p>
                        <p className="text-lg font-bold text-foreground">{levelName}</p>
                    </div>
                </div>

                {/* XP Progress */}
                <div>
                    <div className="flex justify-between text-sm mb-2">
                        <span className="text-foreground">{userXP} XP</span>
                        <span className="text-foreground">{userLevel * 100} XP</span>
                    </div>
                    <div className="w-full h-3 bg-background border-2 border-border rounded-full overflow-hidden">
                        <div
                            className="h-full bg-accent transition-all duration-500"
                            style={{ width: `${levelProgress}%` }}
                        />
                    </div>
                    <p className="text-xs text-foreground mt-2">
                        {100 - levelProgress} XP lagi ke Level {userLevel + 1}
                    </p>
                </div>
            </div>

            {/* Stats */}
            <div className="p-6 border-b-2 border-border">
                <h3 className="text-sm font-bold text-foreground mb-4">
                    STATISTIK
                </h3>
                <div className="grid grid-cols-2 gap-3">
                    <div className="bg-background border-2 border-border rounded-base p-3 shadow-shadow-sm">
                        <div className="flex items-center gap-2 mb-1">
                            <Flame size={16} className="text-foreground fill-accent" strokeWidth={3} />
                            <span className="text-xs text-foreground">Streak</span>
                        </div>
                        <p className="font-display text-2xl font-bold text-foreground">
                            {userStreak}
                        </p>
                        <p className="text-xs text-foreground">hari</p>
                    </div>
                    <div className="bg-background border-2 border-border rounded-base p-3 shadow-shadow-sm">
                        <div className="flex items-center gap-2 mb-1">
                            <Award size={16} className="text-foreground fill-accent" strokeWidth={3} />
                            <span className="text-xs text-foreground">Badge</span>
                        </div>
                        <p className="font-display text-2xl font-bold text-foreground">
                            {userBadges}
                        </p>
                        <p className="text-xs text-foreground">dari 8</p>
                    </div>
                </div>
            </div>

            {/* Menu */}
            <div className="p-6 border-b-2 border-border">
                <h3 className="text-sm font-bold text-foreground mb-4">
                    MENU
                </h3>
                <nav className="space-y-2">
                    <Link
                        to="/dashboard"
                        className="flex items-center justify-between px-4 py-3 text-foreground hover:bg-main rounded-base transition-colors"
                    >
                        <div className="flex items-center gap-3">
                            <LayoutDashboard size={20} strokeWidth={3} />
                            <span>Dashboard</span>
                        </div>
                        <ChevronRight size={16} strokeWidth={3} />
                    </Link>
                    <Link
                        to="/leaderboard"
                        className="flex items-center justify-between px-4 py-3 text-foreground hover:bg-main rounded-base transition-colors"
                    >
                        <div className="flex items-center gap-3">
                            <Trophy size={20} strokeWidth={3} />
                            <span>Peringkat</span>
                        </div>
                        <ChevronRight size={16} strokeWidth={3} />
                    </Link>
                </nav>
            </div>

            {/* Footer */}
            <div className="p-6">
                <button
                    onClick={handleLogout}
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-background text-foreground border-2 border-border rounded-base shadow-shadow-sm hover:bg-red-100 hover:border-red-500 transition-colors"
                >
                    <LogOut size={18} strokeWidth={3} />
                    <span>Keluar</span>
                </button>
            </div>
        </aside>
    );
}
