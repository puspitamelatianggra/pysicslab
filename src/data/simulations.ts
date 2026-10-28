/* ============================================================
   ====== TEMPAT INPUT SIMULASI/LAB VIRTUAL DISINI ======
   ============================================================

   PANDUAN UNTUK PENGGUNA AWAM:
   - Setiap simulasi memiliki: id, title, description, iframeUrl, icon
   - Untuk MENGGANTI link simulasi: edit bagian iframeUrl: "..."
   - Untuk MENAMBAH simulasi baru: copy satu blok { ... } dan paste

   CONTOH LINK SIMULASI GRATIS:
   - PhET Simulations: https://phet.colorado.edu/en/simulations/filter?subjects=physics
   - Contoh langsung embed: https://phet.colorado.edu/sims/html/projectile-motion/latest/projectile-motion_en.html

   CATATAN:
   - Beberapa website tidak mengizinkan embed iframe. Jika simulasi tidak muncul,
     gunakan tombol "Buka di Tab Baru" sebagai alternatif.
   ============================================================ */

export interface Simulation {
    id: number;
    title: string;
    description: string;
    iframeUrl: string;
    fallbackUrl: string;
    icon: string;
    category: string;
}

// ====== MULAI DAFTAR SIMULASI - EDIT DIBAWAH INI ======
export const simulations: Simulation[] = [
    {
        id: 1,
        title: "Gerak Proyektil",
        description: "Simulasikan gerak parabola dengan mengubah sudut dan kecepatan awal peluncuran.",
        iframeUrl: "https://phet.colorado.edu/sims/html/projectile-motion/latest/projectile-motion_en.html",
        fallbackUrl: "https://phet.colorado.edu/en/simulations/projectile-motion",
        icon: "🎯",
        category: "Mekanika"
    },
    {
        id: 2,
        title: "Hukum Newton",
        description: "Eksperimen interaktif untuk memahami hubungan gaya, massa, dan percepatan.",
        iframeUrl: "https://phet.colorado.edu/sims/html/forces-and-motion-basics/latest/forces-and-motion-basics_en.html",
        fallbackUrl: "https://phet.colorado.edu/en/simulations/forces-and-motion-basics",
        icon: "📦",
        category: "Mekanika"
    },
    {
        id: 3,
        title: "Rangkaian Listrik",
        description: "Bangun rangkaian listrik sederhana dan amati aliran arus, tegangan, dan hambatan.",
        iframeUrl: "https://phet.colorado.edu/sims/html/circuit-construction-kit-dc/latest/circuit-construction-kit-dc_en.html",
        fallbackUrl: "https://phet.colorado.edu/en/simulations/circuit-construction-kit-dc",
        icon: "🔌",
        category: "Listrik"
    },
    {
        id: 4,
        title: "Gelombang pada Tali",
        description: "Visualisasikan gelombang transversal dan longitudinal dengan parameter yang dapat diubah.",
        iframeUrl: "https://phet.colorado.edu/sims/html/wave-on-a-string/latest/wave-on-a-string_en.html",
        fallbackUrl: "https://phet.colorado.edu/en/simulations/wave-on-a-string",
        icon: "🌊",
        category: "Gelombang"
    },
    {
        id: 5,
        title: "Hukum Termodinamika",
        description: "Amati hubungan antara tekanan, volume, dan suhu pada gas ideal.",
        iframeUrl: "https://phet.colorado.edu/sims/html/gas-properties/latest/gas-properties_en.html",
        fallbackUrl: "https://phet.colorado.edu/en/simulations/gas-properties",
        icon: "🔥",
        category: "Termodinamika"
    },
    {
        id: 6,
        title: "Efek Fotolistrik",
        description: "Eksperimen virtual untuk memahami efek fotolistrik dan dualisme gelombang-partikel.",
        iframeUrl: "https://phet.colorado.edu/sims/html/photoelectric-effect/latest/photoelectric-effect_en.html",
        fallbackUrl: "https://phet.colorado.edu/en/simulations/photoelectric-effect",
        icon: "💡",
        category: "Fisika Modern"
    }
];
// ====== AKHIR DAFTAR SIMULASI ======
