import { useCallback, useEffect, useRef, useState } from 'react';

// Langkah waktu simulasi tetap (detik). Hasil fisika tidak bergantung pada kecepatan layar.
export const DT = 1 / 120;

export interface SimLoop {
    jalan: boolean;
    mainkan: () => void;
    jeda: () => void;
    alih: () => void;
    /** Maju sedikit (1/30 detik simulasi) saat sedang jeda. */
    langkahSatu: () => void;
    kecepatan: number;
    setKecepatan: (k: number) => void;
    /** Bertambah kira-kira 12 kali per detik selama berjalan. Dipakai supaya angka bacaan di layar ikut diperbarui. */
    denyut: number;
    /** Paksa bacaan diperbarui, misalnya setelah simulasi diulang. */
    segarkan: () => void;
}

/**
 * Loop animasi simulasi.
 * `langkah(dt)` dipanggil berulang dengan dt tetap (DT). Simpan keadaan yang berubah tiap langkah
 * di useRef, bukan useState, lalu gambar dari ref itu di <Panggung>.
 * Panggil `jeda()` dari dalam `langkah` kalau percobaan sudah selesai.
 */
export function useSimLoop(langkah: (dt: number) => void): SimLoop {
    const [jalan, setJalan] = useState(false);
    const [kecepatan, setKecepatan] = useState(1);
    const [denyut, setDenyut] = useState(0);

    const langkahRef = useRef(langkah);
    langkahRef.current = langkah;
    const kecepatanRef = useRef(kecepatan);
    kecepatanRef.current = kecepatan;
    const aktifRef = useRef(false);

    const segarkan = useCallback(() => setDenyut((d) => d + 1), []);

    const mainkan = useCallback(() => {
        aktifRef.current = true;
        setJalan(true);
    }, []);

    const jeda = useCallback(() => {
        aktifRef.current = false;
        setJalan(false);
        setDenyut((d) => d + 1);
    }, []);

    const alih = useCallback(() => {
        if (aktifRef.current) jeda();
        else mainkan();
    }, [jeda, mainkan]);

    const langkahSatu = useCallback(() => {
        if (aktifRef.current) return;
        for (let i = 0; i < 4; i++) langkahRef.current(DT);
        setDenyut((d) => d + 1);
    }, []);

    useEffect(() => {
        if (!jalan) return;
        let id = 0;
        let terakhir = performance.now();
        let denyutTerakhir = terakhir;
        let sisa = 0;

        const bingkai = (kini: number) => {
            // Batasi selisih waktu supaya simulasi tidak melompat setelah tab lama tidak aktif
            const selisih = Math.min(0.1, (kini - terakhir) / 1000);
            terakhir = kini;
            sisa += selisih * kecepatanRef.current;
            while (sisa >= DT && aktifRef.current) {
                langkahRef.current(DT);
                sisa -= DT;
            }
            if (kini - denyutTerakhir > 80) {
                denyutTerakhir = kini;
                setDenyut((d) => d + 1);
            }
            if (aktifRef.current) id = requestAnimationFrame(bingkai);
        };
        id = requestAnimationFrame(bingkai);

        const saatTersembunyi = () => {
            if (document.hidden) {
                aktifRef.current = false;
                setJalan(false);
            }
        };
        document.addEventListener('visibilitychange', saatTersembunyi);

        return () => {
            cancelAnimationFrame(id);
            document.removeEventListener('visibilitychange', saatTersembunyi);
        };
    }, [jalan]);

    return { jalan, mainkan, jeda, alih, langkahSatu, kecepatan, setKecepatan, denyut, segarkan };
}
