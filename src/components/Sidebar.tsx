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
import { getStudentData, logoutStudent, isSupabaseConfigured } from '../utils/supabaseStorage';
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
                    const result = await getStudentData();
                    if (result.data) {
                        setUserXP(result.data.xp || 0);
                        setUserLevel(result.data.level || 1);
                        setUserStreak(result.data.streak || 0);
                        setUserName(result.data.name || 'Siswa');

                        // Hitung badge
                        let badges = 1;
                        if (result.data.xp >= 200) badges++;
                        if (result.data.streak >= 7) badges++;
                        if (result.data.level >= 5) badges++;
                        if (result.data.xp >= 1000) badges++;
                        setUserBadges(badges);
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
        <aside className="w-80 bg-white border-[3px] border-dark rounded-xl shadow-[6px_6px_0_#1A1A1A] hidden lg:block fixed right-8 top-24 z-40">
            {/* Header */}
            <div className="p-6 border-b-[3px] border-dark bg-lime rounded-t-xl">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-orange border-[3px] border-dark rounded-xl flex items-center justify-center shadow-[3px_3px_0_#1A1A1A]">
                        <Star size={24} className="text-white" fill="white" strokeWidth={3} />
                    </div>
                    <div>
                        <p className="text-sm text-dark" style={{ fontFamily: 'Inter, sans-serif' }}>Level {userLevel}</p>
                        <p className="text-lg font-bold text-dark" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{levelName}</p>
                    </div>
                </div>

                {/* XP Progress */}
                <div>
                    <div className="flex justify-between text-sm mb-2">
                        <span className="text-dark" style={{ fontFamily: 'Inter, sans-serif' }}>{userXP} XP</span>
                        <span className="text-dark" style={{ fontFamily: 'Inter, sans-serif' }}>{userLevel * 100} XP</span>
                    </div>
                    <div className="w-full h-3 bg-cream border-[3px] border-dark rounded-full overflow-hidden">
                        <div
                            className="h-full bg-orange transition-all duration-500"
                            style={{ width: `${levelProgress}%` }}
                        />
                    </div>
                    <p className="text-xs text-dark mt-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {100 - levelProgress} XP lagi ke Level {userLevel + 1}
                    </p>
                </div>
            </div>

            {/* Stats */}
            <div className="p-6 border-b-[3px] border-dark">
                <h3 className="text-sm font-bold text-dark mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    STATISTIK
                </h3>
                <div className="grid grid-cols-2 gap-3">
                    <div className="bg-cream border-[3px] border-dark rounded-xl p-3 shadow-[3px_3px_0_#1A1A1A]">
                        <div className="flex items-center gap-2 mb-1">
                            <Flame size={16} className="text-orange" strokeWidth={3} />
                            <span className="text-xs text-dark" style={{ fontFamily: 'Inter, sans-serif' }}>Streak</span>
                        </div>
                        <p className="text-2xl font-bold text-dark" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                            {userStreak}
                        </p>
                        <p className="text-xs text-dark" style={{ fontFamily: 'Inter, sans-serif' }}>hari</p>
                    </div>
                    <div className="bg-cream border-[3px] border-dark rounded-xl p-3 shadow-[3px_3px_0_#1A1A1A]">
                        <div className="flex items-center gap-2 mb-1">
                            <Award size={16} className="text-orange" strokeWidth={3} />
                            <span className="text-xs text-dark" style={{ fontFamily: 'Inter, sans-serif' }}>Badge</span>
                        </div>
                        <p className="text-2xl font-bold text-dark" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                            {userBadges}
                        </p>
                        <p className="text-xs text-dark" style={{ fontFamily: 'Inter, sans-serif' }}>dari 8</p>
                    </div>
                </div>
            </div>

            {/* Menu */}
            <div className="p-6 border-b-[3px] border-dark">
                <h3 className="text-sm font-bold text-dark mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    MENU
                </h3>
                <nav className="space-y-2">
                    <Link
                        to="/dashboard"
                        className="flex items-center justify-between px-4 py-3 text-dark hover:bg-lime rounded-lg transition-colors"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                        <div className="flex items-center gap-3">
                            <LayoutDashboard size={20} strokeWidth={3} />
                            <span>Dashboard</span>
                        </div>
                        <ChevronRight size={16} strokeWidth={3} />
                    </Link>
                    <Link
                        to="/leaderboard"
                        className="flex items-center justify-between px-4 py-3 text-dark hover:bg-lime rounded-lg transition-colors"
                        style={{ fontFamily: 'Inter, sans-serif' }}
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
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-cream text-dark border-[3px] border-dark rounded-xl shadow-[3px_3px_0_#1A1A1A] hover:bg-red-100 hover:border-red-500 transition-colors"
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                    <LogOut size={18} strokeWidth={3} />
                    <span>Keluar</span>
                </button>
            </div>
        </aside>
    );
}
