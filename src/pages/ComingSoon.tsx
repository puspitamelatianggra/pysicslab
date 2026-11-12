import { Link } from 'react-router-dom';

interface ComingSoonProps {
    title: string;
    description: string;
}

// Halaman sementara untuk menu yang belum tersedia (Artikel, Untuk Guru, Latihan Soal /practice/*)
export default function ComingSoon({ title, description }: ComingSoonProps) {
    return (
        <div className="min-h-[70vh] flex items-center justify-center p-4">
            <div className="bg-secondary-background border-2 border-border rounded-base p-8 max-w-md w-full text-center shadow-shadow">
                <div className="text-6xl mb-4">🚧</div>
                <h1 className="text-3xl font-bold text-foreground mb-4">
                    {title}
                </h1>
                <p className="text-muted mb-6">
                    {description}
                </p>
                <Link
                    to="/"
                    className="block w-full py-4 bg-accent text-foreground font-bold border-2 border-border rounded-base shadow-shadow hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-shadow-sm transition-all"
                >
                    Kembali ke Beranda
                </Link>
            </div>
        </div>
    );
}
