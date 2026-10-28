import { Link } from 'react-router-dom';
import { BookOpen, HelpCircle, Trophy, Zap, Star, ArrowRight } from 'lucide-react';

export default function HomePage() {
    return (
        <div className="w-full bg-cream">

            {/* Hero Section */}
            <section className="w-full bg-cream py-16 lg:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-lime border-[3px] border-dark rounded-lg shadow-[4px_4px_0_#1A1A1A] mb-6">
                            <Zap size={16} className="text-dark" />
                            <span className="text-sm font-bold text-dark" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                                Platform Belajar SMA #1
                            </span>
                        </div>

                        {/* Headline */}
                        <h1 className="text-4xl lg:text-6xl font-bold text-dark mb-6 leading-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                            Belajar <span className="text-orange">Fisika</span> & <span className="text-orange">Matematika</span>
                            <br />
                            Jadi Lebih Menyenangkan
                        </h1>

                        <p className="text-lg lg:text-xl text-gray max-w-3xl mx-auto mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
                            Platform belajar mandiri dengan materi lengkap, latihan soal interaktif,
                            laboratorium virtual, dan sistem gamifikasi yang membuat belajar jadi seru.
                        </p>
                    </div>

                    {/* Quick Access Cards - Pilihan Langsung */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {/* Belajar Materi */}
                        <Link
                            to="/materials"
                            className="bg-lime border-[3px] border-dark rounded-xl p-6 shadow-[4px_4px_0_#1A1A1A] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#1A1A1A] transition-all group"
                        >
                            <BookOpen className="text-dark mb-3" size={40} strokeWidth={3} />
                            <h3 className="text-xl font-bold text-dark mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                                Belajar Materi
                            </h3>
                            <p className="text-sm text-gray mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                                Pelajari konsep dari dasar dengan penjelasan lengkap
                            </p>
                            <div className="flex items-center text-dark font-semibold text-sm" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                                Mulai Belajar
                                <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </Link>

                        {/* Latihan Soal per Mapel */}
                        <Link
                            to="/practice"
                            className="bg-orange border-[3px] border-dark rounded-xl p-6 shadow-[4px_4px_0_#1A1A1A] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#1A1A1A] transition-all group"
                        >
                            <HelpCircle className="text-white mb-3" size={40} strokeWidth={3} />
                            <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                                Latihan Soal
                            </h3>
                            <p className="text-sm text-white/90 mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                                Latihan per mata pelajaran dengan pembahasan
                            </p>
                            <div className="flex items-center text-white font-semibold text-sm" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                                Mulai Latihan
                                <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </Link>

                        {/* TKA */}
                        <Link
                            to="/practice/tka"
                            className="bg-white border-[3px] border-dark rounded-xl p-6 shadow-[4px_4px_0_#1A1A1A] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#1A1A1A] transition-all group"
                        >
                            <Trophy className="text-orange mb-3" size={40} strokeWidth={3} />
                            <h3 className="text-xl font-bold text-dark mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                                TKA
                            </h3>
                            <p className="text-sm text-gray mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                                Test Kompetensi Akademik level ujian
                            </p>
                            <div className="flex items-center text-dark font-semibold text-sm" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                                Coba TKA
                                <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </Link>

                        {/* SNBT/UTBK */}
                        <Link
                            to="/practice/snbt"
                            className="bg-white border-[3px] border-dark rounded-xl p-6 shadow-[4px_4px_0_#1A1A1A] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#1A1A1A] transition-all group"
                        >
                            <Star className="text-orange mb-3" size={40} strokeWidth={3} fill="#FF6B00" />
                            <h3 className="text-xl font-bold text-dark mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                                SNBT/UTBK
                            </h3>
                            <p className="text-sm text-gray mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                                Persiapan masuk PTN dengan try out lengkap
                            </p>
                            <div className="flex items-center text-dark font-semibold text-sm" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                                Mulai Persiapan
                                <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Fitur Section */}
            <section className="w-full bg-lime py-16 border-t-[3px] border-dark">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                            Kenapa Pilih PhysicsLab?
                        </h2>
                        <p className="text-lg text-gray" style={{ fontFamily: 'Inter, sans-serif' }}>
                            Fitur lengkap untuk belajar efektif dan menyenangkan
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        <div className="bg-white border-[3px] border-dark rounded-xl p-6 shadow-[4px_4px_0_#1A1A1A]">
                            <div className="text-4xl mb-3">📚</div>
                            <h3 className="text-xl font-bold text-dark mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                                Materi Lengkap
                            </h3>
                            <p className="text-sm text-gray" style={{ fontFamily: 'Inter, sans-serif' }}>
                                Penjelasan detail dengan rumus dan contoh soal dari dasar hingga advanced
                            </p>
                        </div>

                        <div className="bg-white border-[3px] border-dark rounded-xl p-6 shadow-[4px_4px_0_#1A1A1A]">
                            <div className="text-4xl mb-3">🎯</div>
                            <h3 className="text-xl font-bold text-dark mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                                Latihan Berjenjang
                            </h3>
                            <p className="text-sm text-gray" style={{ fontFamily: 'Inter, sans-serif' }}>
                                Dari latihan harian hingga TKA dan SNBT, semua level tersedia
                            </p>
                        </div>

                        <div className="bg-white border-[3px] border-dark rounded-xl p-6 shadow-[4px_4px_0_#1A1A1A]">
                            <div className="text-4xl mb-3">🏆</div>
                            <h3 className="text-xl font-bold text-dark mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                                Gamifikasi
                            </h3>
                            <p className="text-sm text-gray" style={{ fontFamily: 'Inter, sans-serif' }}>
                                Kumpulkan XP, raih badge, dan bersaing di leaderboard
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gamification Section */}
            <section className="w-full bg-cream py-16 border-t-[3px] border-dark">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                            Belajar Sambil Bermain 🎮
                        </h2>
                        <p className="text-lg text-gray" style={{ fontFamily: 'Inter, sans-serif' }}>
                            Kumpulkan XP, raih badge, dan bersaing di papan peringkat
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        <div className="bg-white border-[3px] border-dark rounded-xl p-6 shadow-[4px_4px_0_#1A1A1A]">
                            <Star className="text-orange mb-3" size={36} strokeWidth={3} fill="#FF6B00" />
                            <h3 className="text-xl font-bold text-dark mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                                Kumpulkan XP
                            </h3>
                            <p className="text-sm text-gray" style={{ fontFamily: 'Inter, sans-serif' }}>
                                +10 XP per bab selesai, +5 XP per soal benar
                            </p>
                        </div>

                        <div className="bg-white border-[3px] border-dark rounded-xl p-6 shadow-[4px_4px_0_#1A1A1A]">
                            <Trophy className="text-orange mb-3" size={36} strokeWidth={3} />
                            <h3 className="text-xl font-bold text-dark mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                                Raih Badge
                            </h3>
                            <p className="text-sm text-gray" style={{ fontFamily: 'Inter, sans-serif' }}>
                                8 badge pencapaian yang bisa kamu koleksi
                            </p>
                        </div>

                        <div className="bg-white border-[3px] border-dark rounded-xl p-6 shadow-[4px_4px_0_#1A1A1A]">
                            <div className="text-4xl mb-3">📈</div>
                            <h3 className="text-xl font-bold text-dark mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                                Naik Level
                            </h3>
                            <p className="text-sm text-gray" style={{ fontFamily: 'Inter, sans-serif' }}>
                                Setiap 100 XP, kamu naik 1 level
                            </p>
                        </div>
                    </div>

                    <div className="text-center mt-8">
                        <Link
                            to="/leaderboard"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-orange text-white font-bold border-[3px] border-dark rounded-xl shadow-[4px_4px_0_#1A1A1A] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#1A1A1A] transition-all"
                            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                        >
                            Lihat Peringkat
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="w-full bg-orange py-16 border-t-[3px] border-dark">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                        Siap Mulai Belajar?
                    </h2>
                    <p className="text-xl text-white/90 mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
                        Gratis, tanpa batas, dan sepenuhnya interaktif
                    </p>
                    <Link
                        to="/materials"
                        className="inline-flex items-center gap-2 px-10 py-5 bg-lime text-dark font-bold text-xl border-[3px] border-dark rounded-xl shadow-[6px_6px_0_#1A1A1A] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0_#1A1A1A] transition-all"
                        style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                    >
                        <Zap size={24} />
                        Mulai Belajar Sekarang
                    </Link>
                </div>
            </section>

            {/* Footer */}
            <footer className="w-full bg-dark py-12 border-t-[3px] border-dark">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-4 gap-8 mb-8">
                        {/* Brand */}
                        <div className="md:col-span-2">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-10 h-10 bg-lime border-[3px] border-dark rounded-lg flex items-center justify-center">
                                    <Zap size={22} className="text-dark" strokeWidth={3} />
                                </div>
                                <span className="text-xl font-bold text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                                    PhysicsLab
                                </span>
                            </div>
                            <p className="text-gray-400 max-w-md" style={{ fontFamily: 'Inter, sans-serif' }}>
                                Platform belajar fisika dan matematika mandiri dengan materi interaktif,
                                latihan soal, dan sistem gamifikasi untuk siswa SMA.
                            </p>
                        </div>

                        {/* Links */}
                        <div>
                            <h4 className="text-lime font-bold mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                                Navigasi
                            </h4>
                            <ul className="space-y-2">
                                <li><Link to="/" className="text-gray-400 hover:text-lime transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>Home</Link></li>
                                <li><Link to="/materials" className="text-gray-400 hover:text-lime transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>Materi</Link></li>
                                <li><Link to="/practice" className="text-gray-400 hover:text-lime transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>Latihan Soal</Link></li>
                                <li><Link to="/lab" className="text-gray-400 hover:text-lime transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>Simulasi</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-lime font-bold mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                                Fitur
                            </h4>
                            <ul className="space-y-2">
                                <li><Link to="/dashboard" className="text-gray-400 hover:text-lime transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>Dashboard</Link></li>
                                <li><Link to="/leaderboard" className="text-gray-400 hover:text-lime transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>Peringkat</Link></li>
                                <li><Link to="/login" className="text-gray-400 hover:text-lime transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>Masuk</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t-2 border-gray-700 pt-8 text-center">
                        <p className="text-gray-400 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                            © 2024 PhysicsLab - Platform Belajar Fisika & Matematika untuk Siswa SMA
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
