import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Atom, ChevronDown, LogOut } from 'lucide-react';
import { logoutStudent, isSupabaseConfigured } from '../utils/supabaseStorage';
import { supabase } from '../lib/supabase';

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    // Cek status login (DIPERBAIKI: pakai useEffect + cleanup agar listener tidak menumpuk)
    useEffect(() => {
        if (!isSupabaseConfigured()) return;

        supabase.auth.getSession().then(({ data }) => {
            setIsLoggedIn(!!data.session);
        });

        const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
            setIsLoggedIn(!!session);
        });
        return () => authListener?.subscription.unsubscribe();
    }, []);

    const latihanPerMapelItems = [
        { name: 'Matematika', path: '/practice/math', desc: 'Latihan soal per bab' },
        { name: 'Fisika', path: '/practice/physics', desc: 'Latihan soal per bab' },
    ];

    const tkaItems = [
        { name: 'TKA Saintek', path: '/practice/tka-saintek', desc: 'Matematika + Fisika level ujian' },
        { name: 'TKA Soshum', path: '/practice/tka-soshum', desc: 'Segera hadir' },
    ];

    const snbtItems = [
        { name: 'TPS', path: '/practice/tps', desc: 'Tes Potensi Skolastik' },
        { name: 'Literasi', path: '/practice/literasi', desc: 'B.Indonesia + B.Inggris' },
        { name: 'Simulasi Ujian', path: '/practice/simulasi', desc: 'Try Out lengkap' },
    ];

    const simulasiItems = [
        { name: 'Laboratorium Virtual', path: '/lab', desc: 'Simulasi interaktif PhET' },
    ];

    const isActive = (path: string) => location.pathname.startsWith(path);

    const toggleDropdown = (menu: string) => {
        setActiveDropdown(activeDropdown === menu ? null : menu);
    };

    const handleLogout = async () => {
        await logoutStudent();
        navigate('/');
    };

    return (
        <nav className="w-full bg-cream border-b-[3px] border-dark sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-lime border-[3px] border-dark rounded-lg flex items-center justify-center shadow-[3px_3px_0_#1A1A1A]">
                            <Atom size={22} className="text-dark" strokeWidth={3} />
                        </div>
                        <span className="text-xl font-bold text-dark" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                            PhysicsLab
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-1">
                        {/* Home */}
                        <Link
                            to="/"
                            className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all ${location.pathname === '/'
                                ? 'bg-lime border-[3px] border-dark shadow-[3px_3px_0_#1A1A1A]'
                                : 'hover:bg-lime/50 border-[3px] border-transparent'
                                }`}
                            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                        >
                            Home
                        </Link>

                        {/* Materi */}
                        <Link
                            to="/materials"
                            className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all ${location.pathname === '/materials'
                                ? 'bg-lime border-[3px] border-dark shadow-[3px_3px_0_#1A1A1A]'
                                : 'hover:bg-lime/50 border-[3px] border-transparent'
                                }`}
                            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                        >
                            Materi
                        </Link>

                        {/* Latihan Soal Dropdown */}
                        <div className="relative">
                            <button
                                onClick={() => toggleDropdown('latihan')}
                                onMouseEnter={() => setActiveDropdown('latihan')}
                                className={`flex items-center gap-1 px-4 py-2 text-sm font-semibold rounded-lg transition-all ${isActive('/practice') || isActive('/quiz')
                                    ? 'bg-lime border-[3px] border-dark shadow-[3px_3px_0_#1A1A1A]'
                                    : 'hover:bg-lime/50 border-[3px] border-transparent'
                                    }`}
                                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                            >
                                Latihan Soal
                                <ChevronDown
                                    size={16}
                                    className={`transition-transform ${activeDropdown === 'latihan' ? 'rotate-180' : ''}`}
                                />
                            </button>

                            <AnimatePresence>
                                {activeDropdown === 'latihan' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -5 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -5 }}
                                        onMouseLeave={() => setActiveDropdown(null)}
                                        className="absolute top-full left-0 mt-2 w-72 bg-white border-[3px] border-dark rounded-xl shadow-[4px_4px_0_#1A1A1A] overflow-hidden"
                                    >
                                        <div className="px-4 py-2 bg-lime/20 border-b-[2px] border-dark">
                                            <div className="text-xs font-bold text-dark" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                                                PER MATA PELAJARAN
                                            </div>
                                        </div>
                                        {latihanPerMapelItems.map((item) => (
                                            <Link
                                                key={item.path}
                                                to={item.path}
                                                onClick={() => setActiveDropdown(null)}
                                                className="block px-4 py-2 hover:bg-lime/30 border-b-[2px] border-dark last:border-b-0 transition-colors"
                                            >
                                                <div className="font-semibold text-dark text-sm" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                                                    {item.name}
                                                </div>
                                                <div className="text-xs text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                                                    {item.desc}
                                                </div>
                                            </Link>
                                        ))}

                                        <div className="px-4 py-2 bg-orange/20 border-b-[2px] border-dark border-t-[2px] border-t-dark">
                                            <div className="text-xs font-bold text-dark" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                                                TKA (TEST KOMPETENSI AKADEMIK)
                                            </div>
                                        </div>
                                        {tkaItems.map((item) => (
                                            <Link
                                                key={item.path}
                                                to={item.path}
                                                onClick={() => setActiveDropdown(null)}
                                                className="block px-4 py-2 hover:bg-orange/30 border-b-[2px] border-dark last:border-b-0 transition-colors"
                                            >
                                                <div className="font-semibold text-dark text-sm" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                                                    {item.name}
                                                </div>
                                                <div className="text-xs text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                                                    {item.desc}
                                                </div>
                                            </Link>
                                        ))}

                                        <div className="px-4 py-2 bg-lime/20 border-b-[2px] border-dark border-t-[2px] border-t-dark">
                                            <div className="text-xs font-bold text-dark" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                                                SNBT/UTBK PREP
                                            </div>
                                        </div>
                                        {snbtItems.map((item) => (
                                            <Link
                                                key={item.path}
                                                to={item.path}
                                                onClick={() => setActiveDropdown(null)}
                                                className="block px-4 py-2 hover:bg-lime/30 border-b-[2px] border-dark last:border-b-0 transition-colors"
                                            >
                                                <div className="font-semibold text-dark text-sm" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                                                    {item.name}
                                                </div>
                                                <div className="text-xs text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                                                    {item.desc}
                                                </div>
                                            </Link>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Simulasi Dropdown */}
                        <div className="relative">
                            <button
                                onClick={() => toggleDropdown('simulasi')}
                                onMouseEnter={() => setActiveDropdown('simulasi')}
                                className={`flex items-center gap-1 px-4 py-2 text-sm font-semibold rounded-lg transition-all ${isActive('/lab')
                                    ? 'bg-lime border-[3px] border-dark shadow-[3px_3px_0_#1A1A1A]'
                                    : 'hover:bg-lime/50 border-[3px] border-transparent'
                                    }`}
                                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                            >
                                Simulasi
                                <ChevronDown
                                    size={16}
                                    className={`transition-transform ${activeDropdown === 'simulasi' ? 'rotate-180' : ''}`}
                                />
                            </button>

                            <AnimatePresence>
                                {activeDropdown === 'simulasi' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -5 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -5 }}
                                        onMouseLeave={() => setActiveDropdown(null)}
                                        className="absolute top-full left-0 mt-2 w-64 bg-white border-[3px] border-dark rounded-xl shadow-[4px_4px_0_#1A1A1A] overflow-hidden"
                                    >
                                        {simulasiItems.map((item) => (
                                            <Link
                                                key={item.path}
                                                to={item.path}
                                                onClick={() => setActiveDropdown(null)}
                                                className="block px-4 py-3 hover:bg-lime/30 border-b-[2px] border-dark last:border-b-0 transition-colors"
                                            >
                                                <div className="font-semibold text-dark text-sm" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                                                    {item.name}
                                                </div>
                                                <div className="text-xs text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                                                    {item.desc}
                                                </div>
                                            </Link>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Peringkat */}
                        <Link
                            to="/leaderboard"
                            className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all ${isActive('/leaderboard')
                                ? 'bg-lime border-[3px] border-dark shadow-[3px_3px_0_#1A1A1A]'
                                : 'hover:bg-lime/50 border-[3px] border-transparent'
                                }`}
                            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                        >
                            Peringkat
                        </Link>

                        {/* Login/Logout Button */}
                        {isLoggedIn ? (
                            <button
                                onClick={handleLogout}
                                className="ml-2 px-5 py-2 bg-white text-dark font-semibold text-sm border-[3px] border-dark rounded-lg shadow-[3px_3px_0_#1A1A1A] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0_#1A1A1A] transition-all flex items-center gap-2"
                                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                            >
                                <LogOut size={16} />
                                Keluar
                            </button>
                        ) : (
                            <Link
                                to="/login"
                                className="ml-2 px-5 py-2 bg-orange text-white font-semibold text-sm border-[3px] border-dark rounded-lg shadow-[3px_3px_0_#1A1A1A] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0_#1A1A1A] transition-all"
                                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                            >
                                Masuk
                            </Link>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2 text-dark border-[3px] border-dark rounded-lg shadow-[3px_3px_0_#1A1A1A]"
                    >
                        {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-cream border-t-[3px] border-dark">
                    <div className="px-4 py-4 space-y-2">
                        <Link
                            to="/"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block px-4 py-3 text-sm font-semibold rounded-lg hover:bg-lime/50 border-[3px] border-transparent"
                            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                        >
                            Home
                        </Link>

                        <Link
                            to="/materials"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block px-4 py-3 text-sm font-semibold rounded-lg hover:bg-lime/50 border-[3px] border-transparent"
                            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                        >
                            Materi
                        </Link>

                        {/* Latihan Soal Mobile */}
                        <div>
                            <button
                                onClick={() => toggleDropdown('latihan-mobile')}
                                className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold rounded-lg hover:bg-lime/50 border-[3px] border-transparent"
                                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                            >
                                Latihan Soal
                                <ChevronDown size={16} className={`transition-transform ${activeDropdown === 'latihan-mobile' ? 'rotate-180' : ''}`} />
                            </button>
                            <AnimatePresence>
                                {activeDropdown === 'latihan-mobile' && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="ml-4 mt-1 space-y-3"
                                    >
                                        <div>
                                            <div className="px-2 py-1 text-xs font-bold text-dark bg-lime/20 rounded">PER MATA PELAJARAN</div>
                                            {latihanPerMapelItems.map((item) => (
                                                <Link
                                                    key={item.path}
                                                    to={item.path}
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                    className="block px-4 py-2 text-sm hover:bg-lime/30 rounded-lg"
                                                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                                                >
                                                    <div className="font-semibold text-dark">{item.name}</div>
                                                    <div className="text-xs text-gray-600">{item.desc}</div>
                                                </Link>
                                            ))}
                                        </div>

                                        <div>
                                            <div className="px-2 py-1 text-xs font-bold text-dark bg-orange/20 rounded">TKA</div>
                                            {tkaItems.map((item) => (
                                                <Link
                                                    key={item.path}
                                                    to={item.path}
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                    className="block px-4 py-2 text-sm hover:bg-orange/30 rounded-lg"
                                                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                                                >
                                                    <div className="font-semibold text-dark">{item.name}</div>
                                                    <div className="text-xs text-gray-600">{item.desc}</div>
                                                </Link>
                                            ))}
                                        </div>

                                        <div>
                                            <div className="px-2 py-1 text-xs font-bold text-dark bg-lime/20 rounded">SNBT/UTBK PREP</div>
                                            {snbtItems.map((item) => (
                                                <Link
                                                    key={item.path}
                                                    to={item.path}
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                    className="block px-4 py-2 text-sm hover:bg-lime/30 rounded-lg"
                                                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                                                >
                                                    <div className="font-semibold text-dark">{item.name}</div>
                                                    <div className="text-xs text-gray-600">{item.desc}</div>
                                                </Link>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Simulasi Mobile */}
                        <div>
                            <button
                                onClick={() => toggleDropdown('simulasi-mobile')}
                                className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold rounded-lg hover:bg-lime/50 border-[3px] border-transparent"
                                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                            >
                                Simulasi
                                <ChevronDown size={16} className={`transition-transform ${activeDropdown === 'simulasi-mobile' ? 'rotate-180' : ''}`} />
                            </button>
                            <AnimatePresence>
                                {activeDropdown === 'simulasi-mobile' && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="ml-4 mt-1 space-y-1"
                                    >
                                        {simulasiItems.map((item) => (
                                            <Link
                                                key={item.path}
                                                to={item.path}
                                                onClick={() => setIsMobileMenuOpen(false)}
                                                className="block px-4 py-2 text-sm hover:bg-lime/30 rounded-lg"
                                                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                                            >
                                                <div className="font-semibold text-dark">{item.name}</div>
                                                <div className="text-xs text-gray-600">{item.desc}</div>
                                            </Link>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <Link
                            to="/leaderboard"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block px-4 py-3 text-sm font-semibold rounded-lg hover:bg-lime/50 border-[3px] border-transparent"
                            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                        >
                            Peringkat
                        </Link>

                        {isLoggedIn ? (
                            <button
                                onClick={() => {
                                    handleLogout();
                                    setIsMobileMenuOpen(false);
                                }}
                                className="block w-full px-4 py-3 bg-white text-dark text-sm font-semibold text-center border-[3px] border-dark rounded-lg shadow-[3px_3px_0_#1A1A1A]"
                                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                            >
                                Keluar
                            </button>
                        ) : (
                            <Link
                                to="/login"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block px-4 py-3 bg-orange text-white text-sm font-semibold text-center border-[3px] border-dark rounded-lg shadow-[3px_3px_0_#1A1A1A]"
                                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                            >
                                Masuk
                            </Link>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
}
