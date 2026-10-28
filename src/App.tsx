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
            <div className="min-h-screen flex items-center justify-center bg-cream">
                <div className="text-center">
                    <div className="text-6xl mb-4 animate-bounce">⚛️</div>
                    <p className="text-2xl font-bold text-dark" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                        Memuat PhysicsLab...
                    </p>
                </div>
            </div>
        );
    }

    // Mode lokal (tanpa Supabase)
    if (!isSupabaseConfigured()) {
        return (
            <HashRouter>
                <div className="min-h-screen bg-cream">
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
            <div className="min-h-screen bg-cream">
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
                    </Routes>
                </main>
                {isLoggedIn && <Sidebar />}
            </div>
        </HashRouter>
    );
}

function LoginPageLocal() {
    return (
        <div className="min-h-screen flex items-center justify-center p-4 bg-cream">
            <div className="bg-white border-[3px] border-dark rounded-xl p-8 max-w-md w-full text-center shadow-[6px_6px_0_#1A1A1A]">
                <div className="text-6xl mb-4">🔐</div>
                <h2 className="text-3xl font-bold text-dark mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    Mode Lokal Aktif
                </h2>
                <p className="text-gray mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Website sedang berjalan dalam <strong className="text-orange">mode lokal</strong>.
                    Data tersimpan di browser Anda. Untuk fitur login dan leaderboard global,
                    silakan setup Supabase terlebih dahulu.
                </p>
                <div className="space-y-3">
                    <a
                        href="#/materials"
                        className="block w-full py-4 bg-orange text-white font-bold border-[3px] border-dark rounded-xl shadow-[4px_4px_0_#1A1A1A] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#1A1A1A] transition-all"
                        style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                    >
                        Mulai Belajar Materi
                    </a>
                    <a
                        href="#/lab"
                        className="block w-full py-4 bg-white text-dark font-bold border-[3px] border-dark rounded-xl shadow-[4px_4px_0_#1A1A1A] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#1A1A1A] transition-all"
                        style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                    >
                        Coba Lab Virtual
                    </a>
                    <a
                        href="#/"
                        className="block w-full py-4 bg-cream text-dark font-bold border-[3px] border-dark rounded-xl shadow-[4px_4px_0_#1A1A1A] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#1A1A1A] transition-all"
                        style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                    >
                        Kembali ke Beranda
                    </a>
                </div>
            </div>
        </div>
    );
}

export default App;
