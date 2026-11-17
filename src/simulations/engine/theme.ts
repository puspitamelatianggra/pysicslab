// Warna panggung simulasi. Nilainya dibaca dari variabel CSS di src/index.css,
// jadi kalau warna situs berubah, simulasi ikut berubah.

export interface WarnaSim {
    latar: string;      // putih, latar panggung
    krem: string;       // isi benda netral
    gelap: string;      // garis tepi, teks, vektor utama
    lime: string;       // identitas 1
    oranye: string;     // identitas 2: panas, muatan positif, komponen vektor
    oranyeLembut: string;
    redup: string;      // teks sekunder, jejak lama
    biru: string;       // dingin, muatan negatif
    kisi: string;       // garis kisi
}

const CADANGAN: WarnaSim = {
    latar: '#FFFFFF',
    krem: '#FFF7ED',
    gelap: '#1A1A1A',
    lime: '#C5FA00',
    oranye: '#FF6B00',
    oranyeLembut: '#FFE8D6',
    redup: '#475569',
    biru: '#2563EB',
    kisi: '#DDD8CF',
};

let tembolok: WarnaSim | null = null;

export function warnaSim(): WarnaSim {
    if (tembolok) return tembolok;
    if (typeof window === 'undefined') return CADANGAN;
    const gaya = getComputedStyle(document.documentElement);
    const baca = (nama: string, cadangan: string) => gaya.getPropertyValue(nama).trim() || cadangan;
    tembolok = {
        latar: baca('--secondary-background', CADANGAN.latar),
        krem: baca('--background', CADANGAN.krem),
        gelap: baca('--foreground', CADANGAN.gelap),
        lime: baca('--main', CADANGAN.lime),
        oranye: baca('--accent', CADANGAN.oranye),
        oranyeLembut: baca('--accent-soft', CADANGAN.oranyeLembut),
        redup: baca('--muted', CADANGAN.redup),
        biru: baca('--sim-biru', CADANGAN.biru),
        kisi: baca('--sim-abu', CADANGAN.kisi),
    };
    return tembolok;
}

// Angka dan label besaran memakai font judul; teks biasa memakai font isi.
export const FONT_ANGKA = '"Space Grotesk", Arial, sans-serif';
export const FONT_TEKS = '"Plus Jakarta Sans", Arial, sans-serif';

// true kalau pengguna meminta animasi dikurangi. Simulasi yang biasanya langsung
// bergerak harus mulai dalam keadaan jeda saat ini bernilai true.
export function gerakDikurangi(): boolean {
    return typeof window !== 'undefined'
        && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}
