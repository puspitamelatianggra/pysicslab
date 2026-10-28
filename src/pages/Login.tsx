import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Atom, Mail, Lock, User, School, Loader2 } from 'lucide-react';
import { loginStudent, registerStudent, isSupabaseConfigured } from '../utils/supabaseStorage';

export default function Login() {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [className, setClassName] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    // Cek apakah Supabase sudah dikonfigurasi
    if (!isSupabaseConfigured()) {
        return (
            <div className="min-h-screen flex items-center justify-center p-4 bg-cream">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white border-[3px] border-dark rounded-xl p-8 max-w-lg w-full text-center shadow-[6px_6px_0_#1A1A1A]"
                >
                    <div className="text-6xl mb-4">⚠️</div>
                    <h2 className="text-2xl font-bold text-dark mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                        Supabase Belum Dikonfigurasi
                    </h2>
                    <p className="text-gray mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                        Website ini memerlukan koneksi ke Supabase untuk fitur login dan leaderboard.
                        Silakan hubungi admin untuk setup, atau ikuti panduan di file{' '}
                        <code className="bg-cream px-2 py-1 rounded border-[2px] border-dark text-orange font-mono text-sm">
                            src/lib/supabase.ts
                        </code>
                    </p>
                    <button
                        onClick={() => navigate('/')}
                        className="px-6 py-3 rounded-xl bg-orange text-white font-bold border-[3px] border-dark shadow-[4px_4px_0_#1A1A1A] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#1A1A1A] transition-all"
                        style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                    >
                        Kembali ke Beranda
                    </button>
                </motion.div>
            </div>
        );
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            if (isLogin) {
                // Login
                console.log('Attempting login...');
                const result = await loginStudent(email, password);

                if (result.error) {
                    console.error('Login error:', result.error);
                    setError('Email atau password salah. Silakan coba lagi.');
                } else {
                    console.log('Login successful, redirecting...');
                    // Redirect ke dashboard
                    navigate('/dashboard', { replace: true });
                }
            } else {
                // Register
                if (!name.trim()) {
                    setError('Nama harus diisi');
                    setLoading(false);
                    return;
                }
                if (password.length < 6) {
                    setError('Password minimal 6 karakter');
                    setLoading(false);
                    return;
                }

                console.log('Attempting register...');
                const result = await registerStudent(email, password, name, className);

                if (result.error) {
                    console.error('Register error:', result.error);
                    if (result.error.message && result.error.message.includes('already registered')) {
                        setError('Email sudah terdaftar. Silakan login.');
                    } else {
                        setError(result.error.message || 'Gagal membuat akun');
                    }
                } else if (result.needsEmailConfirmation) {
                    // Belum ada session: siswa harus klik link konfirmasi di email dulu
                    setIsLogin(true);
                    setError('Akun dibuat! Cek email Anda dan klik link konfirmasi, lalu masuk di sini.');
                } else {
                    console.log('Register successful, redirecting...');
                    // Redirect ke dashboard
                    navigate('/dashboard', { replace: true });
                }
            }
        } catch (err) {
            console.error('Submit error:', err);
            setError('Terjadi kesalahan. Silakan coba lagi.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-4 bg-cream">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-md"
            >
                {/* Logo */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-lime border-[3px] border-dark shadow-[4px_4px_0_#1A1A1A] mb-4">
                        <Atom size={32} className="text-dark" strokeWidth={3} />
                    </div>
                    <h1 className="text-3xl font-bold text-dark mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                        PhysicsLab
                    </h1>
                    <p className="text-gray" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {isLogin ? 'Masuk ke akun Anda' : 'Buat akun baru untuk mulai belajar'}
                    </p>
                </div>

                {/* Form Card */}
                <div className="bg-white border-[3px] border-dark rounded-xl p-8 shadow-[6px_6px_0_#1A1A1A]">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Name (hanya muncul saat register) */}
                        {!isLogin && (
                            <div>
                                <label className="block text-sm text-dark mb-2 font-semibold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                                    Nama Lengkap
                                </label>
                                <div className="relative">
                                    <User size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray" strokeWidth={3} />
                                    <input
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="Contoh: Budi Santoso"
                                        className="w-full pl-10 pr-4 py-3 rounded-lg bg-cream border-[3px] border-dark text-dark placeholder-gray focus:border-orange focus:outline-none transition-colors"
                                        style={{ fontFamily: 'Inter, sans-serif' }}
                                        required
                                    />
                                </div>
                            </div>
                        )}

                        {/* Class Name (hanya muncul saat register) */}
                        {!isLogin && (
                            <div>
                                <label className="block text-sm text-dark mb-2 font-semibold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                                    Kelas (Opsional)
                                </label>
                                <div className="relative">
                                    <School size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray" strokeWidth={3} />
                                    <input
                                        type="text"
                                        value={className}
                                        onChange={(e) => setClassName(e.target.value)}
                                        placeholder="Contoh: X IPA 1"
                                        className="w-full pl-10 pr-4 py-3 rounded-lg bg-cream border-[3px] border-dark text-dark placeholder-gray focus:border-orange focus:outline-none transition-colors"
                                        style={{ fontFamily: 'Inter, sans-serif' }}
                                    />
                                </div>
                            </div>
                        )}

                        {/* Email */}
                        <div>
                            <label className="block text-sm text-dark mb-2 font-semibold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                                Email
                            </label>
                            <div className="relative">
                                <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray" strokeWidth={3} />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="nama@email.com"
                                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-cream border-[3px] border-dark text-dark placeholder-gray focus:border-orange focus:outline-none transition-colors"
                                    style={{ fontFamily: 'Inter, sans-serif' }}
                                    required
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-sm text-dark mb-2 font-semibold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                                Password
                            </label>
                            <div className="relative">
                                <Lock size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray" strokeWidth={3} />
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Minimal 6 karakter"
                                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-cream border-[3px] border-dark text-dark placeholder-gray focus:border-orange focus:outline-none transition-colors"
                                    style={{ fontFamily: 'Inter, sans-serif' }}
                                    required
                                    minLength={6}
                                />
                            </div>
                        </div>

                        {/* Error Message */}
                        {error && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="p-3 rounded-lg bg-red-100 border-[3px] border-red-500 text-red-700 text-sm font-semibold"
                                style={{ fontFamily: 'Inter, sans-serif' }}
                            >
                                {error}
                            </motion.div>
                        )}

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-3 rounded-xl bg-orange text-white font-bold border-[3px] border-dark shadow-[4px_4px_0_#1A1A1A] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#1A1A1A] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                        >
                            {loading ? (
                                <>
                                    <Loader2 size={18} className="animate-spin" />
                                    Memproses...
                                </>
                            ) : (
                                <>{isLogin ? 'Masuk' : 'Daftar'}</>
                            )}
                        </button>
                    </form>

                    {/* Toggle Login/Register */}
                    <div className="mt-6 text-center">
                        <p className="text-gray text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                            {isLogin ? 'Belum punya akun?' : 'Sudah punya akun?'}
                            <button
                                onClick={() => {
                                    setIsLogin(!isLogin);
                                    setError('');
                                }}
                                className="ml-2 text-orange hover:underline font-bold"
                                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                            >
                                {isLogin ? 'Daftar di sini' : 'Masuk di sini'}
                            </button>
                        </p>
                    </div>
                </div>

                {/* Info */}
                <div className="mt-6 text-center">
                    <p className="text-xs text-gray" style={{ fontFamily: 'Inter, sans-serif' }}>
                        Dengan mendaftar, Anda setuju bahwa data progres belajar akan tersimpan di cloud.
                    </p>
                </div>
            </motion.div>
        </div>
    );
}
