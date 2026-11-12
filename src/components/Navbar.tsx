import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Atom, ChevronDown, LogOut } from 'lucide-react';
import { logoutStudent, isSupabaseConfigured } from '../utils/supabaseStorage';
import { supabase } from '../lib/supabase';

// soon: halaman belum ada (diarahkan ke "Segera hadir"), diberi label agar siswa tahu sebelum mengklik
type NavItem = { name: string; path: string; desc: string; soon?: boolean };
type NavGroup = { label?: string; items: NavItem[] };

const materiGroups: NavGroup[] = [
    {
        items: [
            { name: 'Fisika', path: '/materials/physics', desc: 'Materi fisika SMA' },
            { name: 'Matematika', path: '/materials/math', desc: 'Materi matematika SMA' },
        ],
    },
];

const latihanGroups: NavGroup[] = [
    {
        label: 'Kuis',
        items: [{ name: 'Kuis per bab', path: '/quiz', desc: 'Uji pemahaman setelah membaca materi' }],
    },
    {
        label: 'Per mata pelajaran',
        items: [
            { name: 'Matematika', path: '/practice/math', desc: 'Latihan soal per bab', soon: true },
            { name: 'Fisika', path: '/practice/physics', desc: 'Latihan soal per bab', soon: true },
        ],
    },
    {
        label: 'TKA (Tes Kompetensi Akademik)',
        items: [
            { name: 'TKA Saintek', path: '/practice/tka-saintek', desc: 'Matematika + Fisika level ujian', soon: true },
            { name: 'TKA Soshum', path: '/practice/tka-soshum', desc: 'Soshum level ujian', soon: true },
        ],
    },
    {
        label: 'SNBT/UTBK',
        items: [
            { name: 'TPS', path: '/practice/tps', desc: 'Tes Potensi Skolastik', soon: true },
            { name: 'Literasi', path: '/practice/literasi', desc: 'B.Indonesia + B.Inggris', soon: true },
            { name: 'Simulasi Ujian', path: '/practice/simulasi', desc: 'Try Out lengkap', soon: true },
        ],
    },
];

const linkClass = (active: boolean) =>
    `px-3 py-2 text-[15px] font-semibold rounded-base border-2 transition-colors ${active
        ? 'bg-main border-border'
        : 'border-transparent hover:bg-main/40 hover:border-border'
    }`;

function SoonTag() {
    return (
        <span className="ml-2 px-1.5 py-px text-[11px] font-semibold text-muted bg-background border border-border rounded-base align-middle">
            Segera hadir
        </span>
    );
}

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

    // Tutup semua menu saat pindah halaman
    useEffect(() => {
        setActiveDropdown(null);
        setIsMobileMenuOpen(false);
    }, [location.pathname]);

    // Tombol Escape menutup dropdown
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setActiveDropdown(null);
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, []);

    // Dashboard hanya muncul setelah masuk (menggantikan Peringkat)
    const extraLinks = [
        { name: 'Artikel', path: '/artikel' },
        { name: 'Untuk Guru', path: '/guru' },
        ...(isLoggedIn ? [{ name: 'Dashboard', path: '/dashboard' }] : []),
    ];

    const isActive = (path: string) => location.pathname.startsWith(path);

    const toggleDropdown = (menu: string) => {
        setActiveDropdown(activeDropdown === menu ? null : menu);
    };

    const handleLogout = async () => {
        await logoutStudent();
        navigate('/');
    };

    // Dropdown desktop: area hover mencakup tombol + panel (pt-2, bukan margin) agar panel tidak tertutup saat kursor turun
    const renderDropdown = (id: string, label: string, groups: NavGroup[], active: boolean, width: string) => (
        <div
            className="relative"
            onMouseEnter={() => setActiveDropdown(id)}
            onMouseLeave={() => setActiveDropdown(null)}
        >
            <button
                onClick={() => toggleDropdown(id)}
                aria-expanded={activeDropdown === id}
                aria-haspopup="true"
                className={`flex items-center gap-1 ${linkClass(active)}`}
            >
                {label}
                <ChevronDown
                    size={16}
                    className={`transition-transform ${activeDropdown === id ? 'rotate-180' : ''}`}
                />
            </button>

            <AnimatePresence>
                {activeDropdown === id && (
                    <motion.div
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.12 }}
                        className={`absolute top-full left-0 pt-2 ${width}`}
                    >
                        <div className="bg-secondary-background border-2 border-border rounded-base shadow-shadow p-1.5">
                            {groups.map((group, gi) => (
                                <div key={group.label ?? gi} className={gi > 0 ? 'mt-1.5 pt-1.5 border-t-2 border-border' : ''}>
                                    {group.label && (
                                        <div className="px-3 pt-1 pb-0.5 text-xs font-semibold text-muted">
                                            {group.label}
                                        </div>
                                    )}
                                    {group.items.map((item) => (
                                        <Link
                                            key={item.path}
                                            to={item.path}
                                            className="block px-3 py-2 rounded-base hover:bg-main/30 transition-colors"
                                        >
                                            <div className="font-semibold text-foreground text-sm">
                                                {item.name}
                                                {item.soon && <SoonTag />}
                                            </div>
                                            <div className="text-xs text-muted">{item.desc}</div>
                                        </Link>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );

    const renderMobileGroup = (id: string, label: string, groups: NavGroup[]) => (
        <div>
            <button
                onClick={() => toggleDropdown(id)}
                aria-expanded={activeDropdown === id}
                className="w-full flex items-center justify-between px-3 py-3 text-[15px] font-semibold rounded-base border-2 border-transparent hover:bg-main/40 hover:border-border"
            >
                {label}
                <ChevronDown size={16} className={`transition-transform ${activeDropdown === id ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
                {activeDropdown === id && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="ml-3 overflow-hidden"
                    >
                        {groups.map((group, gi) => (
                            <div key={group.label ?? gi} className="py-1">
                                {group.label && (
                                    <div className="px-3 pt-1 text-xs font-semibold text-muted">{group.label}</div>
                                )}
                                {group.items.map((item) => (
                                    <Link
                                        key={item.path}
                                        to={item.path}
                                        className="block px-3 py-2 text-sm rounded-base hover:bg-main/30"
                                    >
                                        <div className="font-semibold text-foreground">
                                            {item.name}
                                            {item.soon && <SoonTag />}
                                        </div>
                                        <div className="text-xs text-muted">{item.desc}</div>
                                    </Link>
                                ))}
                            </div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );

    return (
        <nav className="w-full bg-background border-b-2 border-border sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2">
                        <div className="w-9 h-9 bg-main border-2 border-border rounded-base flex items-center justify-center">
                            <Atom size={20} className="text-foreground" strokeWidth={2.5} />
                        </div>
                        <span className="font-display text-xl font-bold text-foreground">
                            Fermions+
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-1">
                        <Link to="/" className={linkClass(location.pathname === '/')}>
                            Beranda
                        </Link>

                        {renderDropdown('materi', 'Materi', materiGroups, isActive('/materials'), 'w-60')}
                        {renderDropdown('latihan', 'Latihan Soal', latihanGroups, isActive('/practice') || isActive('/quiz'), 'w-72')}

                        <Link to="/lab" className={linkClass(isActive('/lab'))}>
                            Lab Virtual
                        </Link>

                        {/* Artikel, Untuk Guru, dan Dashboard (hanya saat masuk) */}
                        {extraLinks.map((item) => (
                            <Link key={item.path} to={item.path} className={linkClass(isActive(item.path))}>
                                {item.name}
                            </Link>
                        ))}

                        {/* Login/Logout Button */}
                        {isLoggedIn ? (
                            <button
                                onClick={handleLogout}
                                className="ml-3 px-4 py-2 bg-secondary-background text-foreground font-semibold text-sm border-2 border-border rounded-base shadow-shadow-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all flex items-center gap-2"
                            >
                                <LogOut size={16} />
                                Keluar
                            </button>
                        ) : (
                            <Link
                                to="/login"
                                className="ml-3 px-5 py-2 bg-accent text-foreground font-semibold text-sm border-2 border-border rounded-base shadow-shadow-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
                            >
                                Masuk
                            </Link>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label={isMobileMenuOpen ? 'Tutup menu' : 'Buka menu'}
                        aria-expanded={isMobileMenuOpen}
                        className="lg:hidden p-2 text-foreground border-2 border-border rounded-base"
                    >
                        {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden bg-background border-t-2 border-border max-h-[calc(100vh-4rem)] overflow-y-auto">
                    <div className="px-4 py-3 space-y-1">
                        <Link
                            to="/"
                            className="block px-3 py-3 text-[15px] font-semibold rounded-base border-2 border-transparent hover:bg-main/40 hover:border-border"
                        >
                            Beranda
                        </Link>

                        {renderMobileGroup('materi-mobile', 'Materi', materiGroups)}
                        {renderMobileGroup('latihan-mobile', 'Latihan Soal', latihanGroups)}

                        <Link
                            to="/lab"
                            className="block px-3 py-3 text-[15px] font-semibold rounded-base border-2 border-transparent hover:bg-main/40 hover:border-border"
                        >
                            Lab Virtual
                        </Link>

                        {extraLinks.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className="block px-3 py-3 text-[15px] font-semibold rounded-base border-2 border-transparent hover:bg-main/40 hover:border-border"
                            >
                                {item.name}
                            </Link>
                        ))}

                        <div className="pt-2">
                            {isLoggedIn ? (
                                <button
                                    onClick={() => {
                                        handleLogout();
                                        setIsMobileMenuOpen(false);
                                    }}
                                    className="block w-full px-4 py-3 bg-secondary-background text-foreground text-sm font-semibold text-center border-2 border-border rounded-base shadow-shadow-sm"
                                >
                                    Keluar
                                </button>
                            ) : (
                                <Link
                                    to="/login"
                                    className="block px-4 py-3 bg-accent text-foreground text-sm font-semibold text-center border-2 border-border rounded-base shadow-shadow-sm"
                                >
                                    Masuk
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
