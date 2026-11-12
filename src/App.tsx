import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';
import Dashboard from './pages/Dashboard';
import Materials from './pages/Materials';
import PhysicsMaterials from './pages/PhysicsMaterials';
import MathMaterials from './pages/MathMaterials';
import MaterialDetail from './pages/MaterialDetail';
import Lab from './pages/Lab';
import Quiz from './pages/Quiz';
import Leaderboard from './pages/Leaderboard';
import Login from './pages/Login';
import ComingSoon from './pages/ComingSoon';
import { isSupabaseConfigured, supabase } from './lib/supabase';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        // Jika Supabase tidak dikonfigurasi, langsung set checked
        if (!isSupabaseConfigured()) {
            setIsLoggedIn(false);
            setChecked(true);
            return;
        }

        // Check auth status - DIPERBAIKI: Handle semua session, bukan hanya event tertentu
        const checkAuth = async () => {
            try {
                const { data } = await supabase.auth.getSession();

                // Set logged in jika ada session aktif
                setIsLoggedIn(!!data.session);
            } catch (error) {
                console.log('Auth check error:', error);
                setIsLoggedIn(false);
            } finally {
                setChecked(true);
            }
        };

        checkAuth();

        // Listen untuk SEMUA auth state changes - DIPERBAIKI: Handle semua event
        const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
            console.log('Auth state changed:', _event, session ? 'has session' : 'no session');

            // Set logged in berdasarkan apakah ada session atau tidak
            setIsLoggedIn(!!session);
        });

        // Cleanup
        return () => {
            authListener?.subscription.unsubscribe();
        };
    }, []);

    // Loading screen
    if (!checked) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <div className="text-6xl mb-4 animate-bounce">⚛️</div>
                    <p className="font-display text-2xl font-bold text-foreground">
                        Memuat Fermionsplus...
                    </p>
                </div>
            </div>
        );
    }

    // Mode lokal (tanpa Supabase)
    if (!isSupabaseConfigured()) {
        return (
            <HashRouter>
                <div className="min-h-screen">
                    <Navbar />
                    <main className="w-full">
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/dashboard" element={<Dashboard />} />
                            <Route path="/materials" element={<Materials />} />
                            <Route path="/materials/physics" element={<PhysicsMaterials />} />
                            <Route path="/materials/math" element={<MathMaterials />} />
                            <Route path="/materials/physics/:id" element={<MaterialDetail />} />
                            <Route path="/materials/math/:id" element={<MaterialDetail />} />
                            <Route path="/lab" element={<Lab />} />
                            <Route path="/quiz" element={<Quiz />} />
                            <Route path="/leaderboard" element={<Leaderboard />} />
                            <Route path="/artikel" element={<ComingSoon title="Artikel" description="Artikel belajar sedang disiapkan. Segera hadir!" />} />
                            <Route path="/guru" element={<ComingSoon title="Untuk Guru" description="Fitur untuk guru sedang disiapkan. Segera hadir!" />} />
                            <Route path="/practice/*" element={<ComingSoon title="Latihan Soal" description="Bank latihan soal, TKA, dan SNBT sedang disiapkan. Sementara itu, coba kuis per bab di menu Latihan Soal." />} />
                            <Route path="/login" element={<LoginPageLocal />} />
                        </Routes>
                    </main>
                </div>
            </HashRouter>
        );
    }

    // Mode Supabase (dengan login)
    return (
        <HashRouter>
            <div className="min-h-screen">
                <Navbar />
                <main className={`w-full ${isLoggedIn ? 'lg:pr-96' : ''}`}>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/login" element={
                            isLoggedIn ? <Navigate to="/dashboard" replace /> : <Login />
                        } />
                        <Route path="/dashboard" element={
                            isLoggedIn ? <Dashboard /> : <Navigate to="/login" replace />
                        } />
                        <Route path="/materials" element={<Materials />} />
                        <Route path="/materials/physics" element={<PhysicsMaterials />} />
                        <Route path="/materials/math" element={<MathMaterials />} />
                        <Route path="/materials/physics/:id" element={<MaterialDetail />} />
                        <Route path="/materials/math/:id" element={<MaterialDetail />} />
                        <Route path="/lab" element={<Lab />} />
                        <Route path="/quiz" element={
                            isLoggedIn ? <Quiz /> : <Navigate to="/login" replace />
                        } />
                        <Route path="/leaderboard" element={
                            isLoggedIn ? <Leaderboard /> : <Navigate to="/login" replace />
                        } />
                        <Route path="/artikel" element={<ComingSoon title="Artikel" description="Artikel belajar sedang disiapkan. Segera hadir!" />} />
                        <Route path="/guru" element={<ComingSoon title="Untuk Guru" description="Fitur untuk guru sedang disiapkan. Segera hadir!" />} />
                        <Route path="/practice/*" element={<ComingSoon title="Latihan Soal" description="Bank latihan soal, TKA, dan SNBT sedang disiapkan. Sementara itu, coba kuis per bab di menu Latihan Soal." />} />
                    </Routes>
                </main>
                {isLoggedIn && <Sidebar />}
            </div>
        </HashRouter>
    );
}

function LoginPageLocal() {
    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            <div className="bg-secondary-background border-2 border-border rounded-base p-8 max-w-md w-full text-center shadow-shadow">
                <div className="text-6xl mb-4">🔐</div>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                    Mode Lokal Aktif
                </h2>
                <p className="text-muted mb-6">
                    Website sedang berjalan dalam <strong className="bg-main px-1 rounded-base text-foreground">mode lokal</strong>.
                    Data tersimpan di browser Anda. Untuk fitur login dan leaderboard global,
                    silakan setup Supabase terlebih dahulu.
                </p>
                <div className="space-y-3">
                    <a
                        href="#/materials"
                        className="block w-full py-4 bg-accent text-foreground font-bold border-2 border-border rounded-base shadow-shadow hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-shadow-sm transition-all"
                    >
                        Mulai Belajar Materi
                    </a>
                    <a
                        href="#/lab"
                        className="block w-full py-4 bg-secondary-background text-foreground font-bold border-2 border-border rounded-base shadow-shadow hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-shadow-sm transition-all"
                    >
                        Coba Lab Virtual
                    </a>
                    <a
                        href="#/"
                        className="block w-full py-4 bg-background text-foreground font-bold border-2 border-border rounded-base shadow-shadow hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-shadow-sm transition-all"
                    >
                        Kembali ke Beranda
                    </a>
                </div>
            </div>
        </div>
    );
}

export default App;
