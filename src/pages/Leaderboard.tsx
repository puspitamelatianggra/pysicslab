import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal, Crown, Star, Flame, Info } from 'lucide-react';
import { getLeaderboard, isSupabaseConfigured } from '../utils/supabaseStorage';
import { getProgress } from '../utils/storage';

export default function Leaderboard() {
    const [leaderboardData, setLeaderboardData] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            if (isSupabaseConfigured()) {
                // Ambil data dari Supabase
                const result = await getLeaderboard();
                if (result.data) {
                    setLeaderboardData(result.data);
                }
            } else {
                // Fallback ke localStorage
                const progress = getProgress();
                setLeaderboardData([{
                    id: 'local',
                    name: progress.name,
                    level: progress.level,
                    xp: progress.xp,
                    streak: progress.streak,
                    class_name: ''
                }]);
            }
            setLoading(false);
        };

        loadData();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-cream">
                <p className="text-dark font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Memuat...</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-cream p-4 md:p-8">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8 text-center"
                >
                    <h1 className="text-3xl md:text-4xl font-bold text-dark mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                        Papan Peringkat 🏆
                    </h1>
                    <p className="text-lg text-gray" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {isSupabaseConfigured()
                            ? 'Bersaing dengan siswa lain dan naik ke peringkat teratas!'
                            : 'Data tersimpan di browser Anda. Setup Supabase untuk leaderboard global.'}
                    </p>
                </motion.div>

                {/* Info Box */}
                {!isSupabaseConfigured() && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="mb-6 bg-lime border-[3px] border-dark rounded-xl p-4 shadow-[3px_3px_0_#1A1A1A]"
                    >
                        <div className="flex items-start gap-3">
                            <Info size={20} className="text-dark flex-shrink-0 mt-0.5" strokeWidth={3} />
                            <div>
                                <p className="text-sm text-dark" style={{ fontFamily: 'Inter, sans-serif' }}>
                                    <strong style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Mode Lokal Aktif:</strong>
                                </p>
                                <p className="text-sm text-gray mt-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                                    Leaderboard hanya menampilkan data Anda sendiri. Untuk bersaing dengan siswa lain,
                                    setup Supabase terlebih dahulu.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* Top 3 Podium */}
                {leaderboardData.length >= 3 && (
                    <div className="grid grid-cols-3 gap-4 mb-8">
                        {[leaderboardData[1], leaderboardData[0], leaderboardData[2]].map((player, index) => {
                            const positions = [
                                { height: 'h-32', order: 'order-1', color: 'from-gray-300 to-gray-400', icon: Medal },
                                { height: 'h-40', order: 'order-2', color: 'from-yellow-400 to-yellow-600', icon: Crown },
                                { height: 'h-28', order: 'order-3', color: 'from-orange-400 to-orange-600', icon: Medal },
                            ];
                            const pos = positions[index];
                            const Icon = pos.icon;

                            return (
                                <motion.div
                                    key={player.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.2 }}
                                    className={`flex flex-col items-center ${pos.order}`}
                                >
                                    <div className="text-3xl mb-2">
                                        {player.level >= 10 ? '👑' : player.level >= 7 ? '💎' : player.level >= 5 ? '🧠' : player.level >= 3 ? '⚡' : '🌱'}
                                    </div>
                                    <p className="text-sm font-bold text-dark mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                                        {player.name}
                                    </p>
                                    <p className="text-xs text-gray mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                                        {player.xp} XP
                                    </p>
                                    <div className={`w-full ${pos.height} bg-gradient-to-t ${pos.color} rounded-t-xl flex items-center justify-center`}>
                                        <Icon size={24} className="text-white" />
                                    </div>
                                    <div className="w-full bg-white border-[3px] border-dark rounded-b-xl p-2 text-center">
                                        <span className="text-lg font-bold text-dark" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                                            #{index === 0 ? 2 : index === 1 ? 1 : 3}
                                        </span>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                )}

                {/* Full Leaderboard */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="bg-white border-[3px] border-dark rounded-xl overflow-hidden shadow-[4px_4px_0_#1A1A1A]"
                >
                    <div className="p-4 border-b-[3px] border-dark bg-lime">
                        <h3 className="text-lg font-bold text-dark flex items-center gap-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                            <Trophy size={20} className="text-dark" strokeWidth={3} />
                            Peringkat Lengkap
                        </h3>
                    </div>
                    <div className="divide-y-[3px] divide-dark">
                        {leaderboardData.map((player, index) => (
                            <motion.div
                                key={player.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.6 + index * 0.05 }}
                                className="flex items-center gap-4 p-4 hover:bg-cream transition-colors"
                            >
                                {/* Rank */}
                                <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold ${index < 3
                                    ? 'bg-gradient-to-br from-yellow-400/20 to-orange-400/20 text-dark border-[2px] border-dark'
                                    : 'bg-cream text-dark border-[2px] border-dark'
                                    }`} style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                                    {index + 1}
                                </div>

                                {/* Avatar */}
                                <div className="w-10 h-10 rounded-full bg-lime border-[3px] border-dark flex items-center justify-center text-lg">
                                    {player.level >= 10 ? '👑' : player.level >= 7 ? '💎' : player.level >= 5 ? '🧠' : player.level >= 3 ? '⚡' : '🌱'}
                                </div>

                                {/* Info */}
                                <div className="flex-1">
                                    <p className="font-bold text-dark" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                                        {player.name}
                                    </p>
                                    <p className="text-xs text-gray" style={{ fontFamily: 'Inter, sans-serif' }}>
                                        Level {player.level} {player.class_name && `• ${player.class_name}`}
                                    </p>
                                </div>

                                {/* Stats */}
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center gap-1 text-sm">
                                        <Flame size={14} className="text-orange" strokeWidth={3} />
                                        <span className="text-dark font-semibold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                                            {player.streak}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-1 text-sm">
                                        <Star size={14} className="text-orange" strokeWidth={3} fill="#FF6B00" />
                                        <span className="text-dark font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                                            {player.xp}
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Info */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="mt-6 text-center"
                >
                    <p className="text-gray text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                        Peringkat diperbarui secara real-time. Selesaikan materi dan kuis untuk mendapatkan XP!
                    </p>
                </motion.div>
            </div>
        </div>
    );
}
