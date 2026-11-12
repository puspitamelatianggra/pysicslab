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
            <div className="min-h-screen flex items-center justify-center p-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-secondary-background border-2 border-border rounded-base p-8 max-w-lg w-full text-center shadow-shadow"
                >
                    <div className="text-6xl mb-4">⚠️</div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">
                        Supabase Belum Dikonfigurasi
                    </h2>
                    <p className="text-muted mb-6">
                        Website ini memerlukan koneksi ke Supabase untuk fitur login dan leaderboard.
                        Silakan hubungi admin untuk setup, atau ikuti panduan di file{' '}
                        <code className="bg-background px-2 py-1 rounded border-2 border-border text-foreground font-mono text-sm">
                            src/lib/supabase.ts
                        </code>
                    </p>
                    <button
                        onClick={() => navigate('/')}
                        className="px-6 py-3 rounded-base bg-accent text-foreground font-bold border-2 border-border shadow-shadow hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-shadow-sm transition-all"
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
        <div className="min-h-screen flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-md"
            >
                {/* Logo */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-base bg-main border-2 border-border shadow-shadow mb-4">
                        <Atom size={32} className="text-foreground" strokeWidth={3} />
                    </div>
                    <h1 className="text-3xl font-bold text-foreground mb-2">
                        Fermions+
                    </h1>
                    <p className="text-muted">
                        {isLogin ? 'Masuk ke akun Anda' : 'Buat akun baru untuk mulai belajar'}
                    </p>
                </div>

                {/* Form Card */}
                <div className="bg-secondary-background border-2 border-border rounded-base p-8 shadow-shadow">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Name (hanya muncul saat register) */}
                        {!isLogin && (
                            <div>
                                <label className="block text-sm text-foreground mb-2 font-semibold">
                                    Nama Lengkap
                                </label>
                                <div className="relative">
                                    <User size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" strokeWidth={3} />
                                    <input
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="Contoh: Budi Santoso"
                                        className="w-full pl-10 pr-4 py-3 rounded-base bg-background border-2 border-border text-foreground placeholder-muted focus:shadow-shadow-sm focus:outline-none transition-colors"
                                        required
                                    />
                                </div>
                            </div>
                        )}

                        {/* Class Name (hanya muncul saat register) */}
                        {!isLogin && (
                            <div>
                                <label className="block text-sm text-foreground mb-2 font-semibold">
                                    Kelas (Opsional)
                                </label>
                                <div className="relative">
                                    <School size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" strokeWidth={3} />
                                    <input
                                        type="text"
                                        value={className}
                                        onChange={(e) => setClassName(e.target.value)}
                                        placeholder="Contoh: X IPA 1"
                                        className="w-full pl-10 pr-4 py-3 rounded-base bg-background border-2 border-border text-foreground placeholder-muted focus:shadow-shadow-sm focus:outline-none transition-colors"
                                    />
                                </div>
                            </div>
                        )}

                        {/* Email */}
                        <div>
                            <label className="block text-sm text-foreground mb-2 font-semibold">
                                Email
                            </label>
                            <div className="relative">
                                <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" strokeWidth={3} />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="nama@email.com"
                                    className="w-full pl-10 pr-4 py-3 rounded-base bg-background border-2 border-border text-foreground placeholder-muted focus:shadow-shadow-sm focus:outline-none transition-colors"
                                    required
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-sm text-foreground mb-2 font-semibold">
                                Password
                            </label>
                            <div className="relative">
                                <Lock size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" strokeWidth={3} />
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Minimal 6 karakter"
                                    className="w-full pl-10 pr-4 py-3 rounded-base bg-background border-2 border-border text-foreground placeholder-muted focus:shadow-shadow-sm focus:outline-none transition-colors"
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
                                className="p-3 rounded-base bg-red-100 border-2 border-red-500 text-red-700 text-sm font-semibold"
                            >
                                {error}
                            </motion.div>
                        )}

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-3 rounded-base bg-accent text-foreground font-bold border-2 border-border shadow-shadow hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-shadow-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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
                        <p className="text-muted text-sm">
                            {isLogin ? 'Belum punya akun?' : 'Sudah punya akun?'}
                            <button
                                onClick={() => {
                                    setIsLogin(!isLogin);
                                    setError('');
                                }}
                                className="ml-2 text-foreground hover:underline font-bold"
                            >
                                {isLogin ? 'Daftar di sini' : 'Masuk di sini'}
                            </button>
                        </p>
                    </div>
                </div>

                {/* Info */}
                <div className="mt-6 text-center">
                    <p className="text-xs text-muted">
                        Dengan mendaftar, Anda setuju bahwa data progres belajar akan tersimpan di cloud.
                    </p>
                </div>
            </motion.div>
        </div>
    );
}
