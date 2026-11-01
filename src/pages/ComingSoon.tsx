import { Link } from 'react-router-dom';

interface ComingSoonProps {
    title: string;
    description: string;
}

// Halaman sementara untuk menu yang belum tersedia (Artikel, Untuk Guru)
export default function ComingSoon({ title, description }: ComingSoonProps) {
    return (
        <div className="min-h-[70vh] flex items-center justify-center p-4">
            <div className="bg-white border-[3px] border-dark rounded-xl p-8 max-w-md w-full text-center shadow-[6px_6px_0_#1A1A1A]">
                <div className="text-6xl mb-4">🚧</div>
                <h1 className="text-3xl font-bold text-dark mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    {title}
                </h1>
                <p className="text-gray mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {description}
                </p>
                <Link
                    to="/"
                    className="block w-full py-4 bg-orange text-white font-bold border-[3px] border-dark rounded-xl shadow-[4px_4px_0_#1A1A1A] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#1A1A1A] transition-all"
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                    Kembali ke Beranda
                </Link>
            </div>
        </div>
    );
}
