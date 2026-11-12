import { Link } from 'react-router-dom';
import { BookOpen, HelpCircle, Trophy, Zap, Star, ArrowRight } from 'lucide-react';

export default function HomePage() {
    return (
        <div className="w-full">

            {/* Hero Section */}
            <section className="w-full py-16 lg:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-main border-2 border-border rounded-base shadow-shadow mb-6">
                            <Zap size={16} className="text-foreground" />
                            <span className="text-sm font-bold text-foreground">
                                Platform Belajar SMA #1
                            </span>
                        </div>

                        {/* Headline */}
                        <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                            Belajar <span className="bg-accent px-2 border-2 border-border rounded-base box-decoration-clone">Fisika</span> & <span className="bg-main px-2 border-2 border-border rounded-base box-decoration-clone">Matematika</span>
                            <br />
                            Jadi Lebih Menyenangkan
                        </h1>

                        <p className="text-lg lg:text-xl text-muted max-w-3xl mx-auto mb-8">
                            Platform belajar mandiri dengan materi lengkap, latihan soal interaktif,
                            laboratorium virtual, dan sistem gamifikasi yang membuat belajar jadi seru.
                        </p>
                    </div>

                    {/* Quick Access Cards - Pilihan Langsung */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {/* Belajar Materi */}
                        <Link
                            to="/materials"
                            className="bg-main border-2 border-border rounded-base p-6 shadow-shadow hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-shadow-sm transition-all group"
                        >
                            <BookOpen className="text-foreground mb-3" size={40} strokeWidth={3} />
                            <h3 className="text-xl font-bold text-foreground mb-2">
                                Belajar Materi
                            </h3>
                            <p className="text-sm text-muted mb-4">
                                Pelajari konsep dari dasar dengan penjelasan lengkap
                            </p>
                            <div className="flex items-center text-foreground font-semibold text-sm">
                                Mulai Belajar
                                <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </Link>

                        {/* Latihan Soal per Mapel */}
                        <Link
                            to="/practice"
                            className="bg-accent border-2 border-border rounded-base p-6 shadow-shadow hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-shadow-sm transition-all group"
                        >
                            <HelpCircle className="text-foreground mb-3" size={40} strokeWidth={3} />
                            <h3 className="text-xl font-bold text-foreground mb-2">
                                Latihan Soal
                            </h3>
                            <p className="text-sm text-foreground mb-4">
                                Latihan per mata pelajaran dengan pembahasan
                            </p>
                            <div className="flex items-center text-foreground font-semibold text-sm">
                                Mulai Latihan
                                <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </Link>

                        {/* TKA */}
                        <Link
                            to="/practice/tka"
                            className="bg-secondary-background border-2 border-border rounded-base p-6 shadow-shadow hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-shadow-sm transition-all group"
                        >
                            <Trophy className="text-foreground fill-accent mb-3" size={40} strokeWidth={3} />
                            <h3 className="text-xl font-bold text-foreground mb-2">
                                TKA
                            </h3>
                            <p className="text-sm text-muted mb-4">
                                Test Kompetensi Akademik level ujian
                            </p>
                            <div className="flex items-center text-foreground font-semibold text-sm">
                                Coba TKA
                                <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </Link>

                        {/* SNBT/UTBK */}
                        <Link
                            to="/practice/snbt"
                            className="bg-secondary-background border-2 border-border rounded-base p-6 shadow-shadow hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-shadow-sm transition-all group"
                        >
                            <Star className="text-foreground fill-accent mb-3" size={40} strokeWidth={3} />
                            <h3 className="text-xl font-bold text-foreground mb-2">
                                SNBT/UTBK
                            </h3>
                            <p className="text-sm text-muted mb-4">
                                Persiapan masuk PTN dengan try out lengkap
                            </p>
                            <div className="flex items-center text-foreground font-semibold text-sm">
                                Mulai Persiapan
                                <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Fitur Section */}
            <section className="w-full bg-main py-16 border-t-2 border-border">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                            Kenapa Pilih Fermionsplus?
                        </h2>
                        <p className="text-lg text-muted">
                            Fitur lengkap untuk belajar efektif dan menyenangkan
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        <div className="bg-secondary-background border-2 border-border rounded-base p-6 shadow-shadow">
                            <div className="text-4xl mb-3">📚</div>
                            <h3 className="text-xl font-bold text-foreground mb-2">
                                Materi Lengkap
                            </h3>
                            <p className="text-sm text-muted">
                                Penjelasan detail dengan rumus dan contoh soal dari dasar hingga advanced
                            </p>
                        </div>

                        <div className="bg-secondary-background border-2 border-border rounded-base p-6 shadow-shadow">
                            <div className="text-4xl mb-3">🎯</div>
                            <h3 className="text-xl font-bold text-foreground mb-2">
                                Latihan Berjenjang
                            </h3>
                            <p className="text-sm text-muted">
                                Dari latihan harian hingga TKA dan SNBT, semua level tersedia
                            </p>
                        </div>

                        <div className="bg-secondary-background border-2 border-border rounded-base p-6 shadow-shadow">
                            <div className="text-4xl mb-3">🏆</div>
                            <h3 className="text-xl font-bold text-foreground mb-2">
                                Gamifikasi
                            </h3>
                            <p className="text-sm text-muted">
                                Kumpulkan XP, raih badge, dan bersaing di leaderboard
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gamification Section */}
            <section className="w-full py-16 border-t-2 border-border">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                            Belajar Sambil Bermain 🎮
                        </h2>
                        <p className="text-lg text-muted">
                            Kumpulkan XP, raih badge, dan bersaing di papan peringkat
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        <div className="bg-secondary-background border-2 border-border rounded-base p-6 shadow-shadow">
                            <Star className="text-foreground fill-accent mb-3" size={36} strokeWidth={3} />
                            <h3 className="text-xl font-bold text-foreground mb-2">
                                Kumpulkan XP
                            </h3>
                            <p className="text-sm text-muted">
                                +10 XP per bab selesai, +5 XP per soal benar
                            </p>
                        </div>

                        <div className="bg-secondary-background border-2 border-border rounded-base p-6 shadow-shadow">
                            <Trophy className="text-foreground fill-accent mb-3" size={36} strokeWidth={3} />
                            <h3 className="text-xl font-bold text-foreground mb-2">
                                Raih Badge
                            </h3>
                            <p className="text-sm text-muted">
                                8 badge pencapaian yang bisa kamu koleksi
                            </p>
                        </div>

                        <div className="bg-secondary-background border-2 border-border rounded-base p-6 shadow-shadow">
                            <div className="text-4xl mb-3">📈</div>
                            <h3 className="text-xl font-bold text-foreground mb-2">
                                Naik Level
                            </h3>
                            <p className="text-sm text-muted">
                                Setiap 100 XP, kamu naik 1 level
                            </p>
                        </div>
                    </div>

                    <div className="text-center mt-8">
                        <Link
                            to="/leaderboard"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-foreground font-bold border-2 border-border rounded-base shadow-shadow hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-shadow-sm transition-all"
                        >
                            Lihat Peringkat
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="w-full bg-accent py-16 border-t-2 border-border">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                        Siap Mulai Belajar?
                    </h2>
                    <p className="text-xl text-foreground mb-8">
                        Gratis, tanpa batas, dan sepenuhnya interaktif
                    </p>
                    <Link
                        to="/materials"
                        className="inline-flex items-center gap-2 px-10 py-5 bg-main text-foreground font-bold text-xl border-2 border-border rounded-base shadow-shadow hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-shadow-sm transition-all"
                    >
                        <Zap size={24} />
                        Mulai Belajar Sekarang
                    </Link>
                </div>
            </section>

            {/* Footer */}
            <footer className="w-full bg-foreground py-12 border-t-2 border-border">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-4 gap-8 mb-8">
                        {/* Brand */}
                        <div className="md:col-span-2">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-10 h-10 bg-main border-2 border-border rounded-base flex items-center justify-center">
                                    <Zap size={22} className="text-foreground" strokeWidth={3} />
                                </div>
                                <span className="font-display text-xl font-bold text-white">
                                    Fermions+
                                </span>
                            </div>
                            <p className="text-gray-400 max-w-md">
                                Platform belajar fisika dan matematika mandiri dengan materi interaktif,
                                latihan soal, dan sistem gamifikasi untuk siswa SMA.
                            </p>
                        </div>

                        {/* Links */}
                        <div>
                            <h4 className="text-main font-bold mb-4">
                                Navigasi
                            </h4>
                            <ul className="space-y-2">
                                <li><Link to="/" className="text-gray-400 hover:text-main transition-colors">Home</Link></li>
                                <li><Link to="/materials" className="text-gray-400 hover:text-main transition-colors">Materi</Link></li>
                                <li><Link to="/practice" className="text-gray-400 hover:text-main transition-colors">Latihan Soal</Link></li>
                                <li><Link to="/lab" className="text-gray-400 hover:text-main transition-colors">Simulasi</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-main font-bold mb-4">
                                Fitur
                            </h4>
                            <ul className="space-y-2">
                                <li><Link to="/dashboard" className="text-gray-400 hover:text-main transition-colors">Dashboard</Link></li>
                                <li><Link to="/leaderboard" className="text-gray-400 hover:text-main transition-colors">Peringkat</Link></li>
                                <li><Link to="/login" className="text-gray-400 hover:text-main transition-colors">Masuk</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t-2 border-gray-700 pt-8 text-center">
                        <p className="text-gray-400 text-sm">
                            © 2024 Fermionsplus - Platform Belajar Fisika & Matematika untuk Siswa SMA
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
