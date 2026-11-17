import { useEffect, useRef } from 'react';
import { Ctx } from '../engine/draw';

export type JenisTunjuk = 'turun' | 'gerak' | 'lepas';

interface PanggungProps {
    /**
     * Dipanggil setiap bingkai. Gambar seluruh adegan dari keadaan terbaru (ref).
     * Canvas sudah dibersihkan dan satuan koordinatnya piksel CSS.
     */
    gambar: (ctx: Ctx, w: number, h: number) => void;
    /** Ringkasan adegan untuk pembaca layar, misalnya "Bola ditembakkan 45°, mendarat di 40 m". */
    deskripsi: string;
    /** Lebar : tinggi. Bawaan 16/10. */
    rasio?: number;
    /** Tinggi minimum dalam piksel supaya adegan tetap terbaca di HP. */
    tinggiMin?: number;
    /** Kalau diisi, panggung bisa diseret/disentuh. Koordinat dalam piksel CSS relatif ke panggung. */
    onTunjuk?: (jenis: JenisTunjuk, x: number, y: number) => void;
    className?: string;
}

/**
 * Canvas panggung: mengurus ukuran, layar tajam (devicePixelRatio), dan menggambar ulang tiap bingkai.
 * Berhenti menggambar saat tab tersembunyi atau panggung di luar layar.
 */
export default function Panggung({ gambar, deskripsi, rasio = 16 / 10, tinggiMin = 240, onTunjuk, className = '' }: PanggungProps) {
    const wadahRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const gambarRef = useRef(gambar);
    gambarRef.current = gambar;
    const ukuranRef = useRef({ w: 0, h: 0, dpr: 1 });
    const terlihatRef = useRef(true);

    useEffect(() => {
        const wadah = wadahRef.current;
        const canvas = canvasRef.current;
        if (!wadah || !canvas) return;

        const lukis = () => {
            const ctx = canvas.getContext('2d');
            const { w, h, dpr } = ukuranRef.current;
            if (!ctx || w === 0) return;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            ctx.clearRect(0, 0, w, h);
            gambarRef.current(ctx, w, h);
        };

        const atur = () => {
            const w = Math.max(1, Math.floor(wadah.clientWidth));
            const h = Math.max(tinggiMin, Math.round(w / rasio));
            const dpr = Math.min(2, window.devicePixelRatio || 1);
            const lama = ukuranRef.current;
            if (lama.w === w && lama.h === h && lama.dpr === dpr) return;
            ukuranRef.current = { w, h, dpr };
            // Mengubah ukuran canvas menghapus isinya, jadi langsung gambar lagi supaya tidak berkedip
            canvas.width = Math.round(w * dpr);
            canvas.height = Math.round(h * dpr);
            canvas.style.height = `${h}px`;
            lukis();
        };
        atur();
        const pengamatUkuran = new ResizeObserver(atur);
        pengamatUkuran.observe(wadah);

        const pengamatLayar = new IntersectionObserver((entri) => {
            terlihatRef.current = entri[0]?.isIntersecting ?? true;
        });
        pengamatLayar.observe(wadah);

        let id = 0;
        const bingkai = () => {
            if (terlihatRef.current && !document.hidden) lukis();
            id = requestAnimationFrame(bingkai);
        };
        id = requestAnimationFrame(bingkai);

        return () => {
            cancelAnimationFrame(id);
            pengamatUkuran.disconnect();
            pengamatLayar.disconnect();
        };
    }, [rasio, tinggiMin]);

    const tunjuk = (jenis: JenisTunjuk) => (e: React.PointerEvent<HTMLCanvasElement>) => {
        if (!onTunjuk) return;
        const kotak = e.currentTarget.getBoundingClientRect();
        if (jenis === 'turun') e.currentTarget.setPointerCapture(e.pointerId);
        onTunjuk(jenis, e.clientX - kotak.left, e.clientY - kotak.top);
    };

    return (
        <div
            ref={wadahRef}
            className={`bg-secondary-background border-2 border-border rounded-base overflow-hidden ${className}`}
        >
            <canvas
                ref={canvasRef}
                role="img"
                aria-label={deskripsi}
                className="block w-full"
                style={{ touchAction: onTunjuk ? 'none' : 'auto', cursor: onTunjuk ? 'grab' : 'default' }}
                onPointerDown={tunjuk('turun')}
                onPointerMove={tunjuk('gerak')}
                onPointerUp={tunjuk('lepas')}
                onPointerCancel={tunjuk('lepas')}
            />
        </div>
    );
}
