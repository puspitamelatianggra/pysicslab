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
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-foreground font-bold">Memuat...</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen p-4 md:p-8">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8 text-center"
                >
                    <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                        Papan Peringkat 🏆
                    </h1>
                    <p className="text-lg text-muted">
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
                        className="mb-6 bg-main border-2 border-border rounded-base p-4 shadow-shadow-sm"
                    >
                        <div className="flex items-start gap-3">
                            <Info size={20} className="text-foreground flex-shrink-0 mt-0.5" strokeWidth={3} />
                            <div>
                                <p className="text-sm text-foreground">
                                    <strong>Mode Lokal Aktif:</strong>
                                </p>
                                <p className="text-sm text-muted mt-1">
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
                                    <p className="text-sm font-bold text-foreground mb-1">
                                        {player.name}
                                    </p>
                                    <p className="text-xs text-muted mb-2">
                                        {player.xp} XP
                                    </p>
                                    <div className={`w-full ${pos.height} bg-gradient-to-t ${pos.color} rounded-t-base flex items-center justify-center`}>
                                        <Icon size={24} className="text-white" />
                                    </div>
                                    <div className="w-full bg-secondary-background border-2 border-border rounded-b-base p-2 text-center">
                                        <span className="text-lg font-bold text-foreground">
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
                    className="bg-secondary-background border-2 border-border rounded-base overflow-hidden shadow-shadow"
                >
                    <div className="p-4 border-b-2 border-border bg-main">
                        <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                            <Trophy size={20} className="text-foreground" strokeWidth={3} />
                            Peringkat Lengkap
                        </h3>
                    </div>
                    <div className="divide-y-[3px] divide-border">
                        {leaderboardData.map((player, index) => (
                            <motion.div
                                key={player.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.6 + index * 0.05 }}
                                className="flex items-center gap-4 p-4 hover:bg-background transition-colors"
                            >
                                {/* Rank */}
                                <div className={`w-8 h-8 rounded-base flex items-center justify-center text-sm font-bold ${index < 3
                                    ? 'bg-gradient-to-br from-yellow-400/20 to-orange-400/20 text-foreground border-2 border-border'
                                    : 'bg-background text-foreground border-2 border-border'
                                    }`}>
                                    {index + 1}
                                </div>

                                {/* Avatar */}
                                <div className="w-10 h-10 rounded-full bg-main border-2 border-border flex items-center justify-center text-lg">
                                    {player.level >= 10 ? '👑' : player.level >= 7 ? '💎' : player.level >= 5 ? '🧠' : player.level >= 3 ? '⚡' : '🌱'}
                                </div>

                                {/* Info */}
                                <div className="flex-1">
                                    <p className="font-bold text-foreground">
                                        {player.name}
                                    </p>
                                    <p className="text-xs text-muted">
                                        Level {player.level} {player.class_name && `• ${player.class_name}`}
                                    </p>
                                </div>

                                {/* Stats */}
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center gap-1 text-sm">
                                        <Flame size={14} className="text-foreground fill-accent" strokeWidth={3} />
                                        <span className="text-foreground font-semibold">
                                            {player.streak}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-1 text-sm">
                                        <Star size={14} className="text-foreground fill-accent" strokeWidth={3} />
                                        <span className="text-foreground font-bold">
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
                    <p className="text-muted text-sm">
                        Peringkat diperbarui secara real-time. Selesaikan materi dan kuis untuk mendapatkan XP!
                    </p>
                </motion.div>
            </div>
        </div>
    );
}
