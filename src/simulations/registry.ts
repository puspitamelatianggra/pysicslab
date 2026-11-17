/* ============================================================
   ====== DAFTAR SIMULASI BUATAN SENDIRI (LAB VIRTUAL) ======
   ============================================================

   File ini hanya berisi DAFTAR simulasi. Isi tiap simulasi ada di
   folder ./sims/<bidang>/<slug>.tsx

   sims/
   ├── mekanika/
   │   ├── gerak-lurus.tsx               (Bab 1-2)
   │   ├── gerak-parabola.tsx            (Bab 1-3)  ← contoh acuan
   │   └── dinamika-gerak.tsx            (Bab 1-6, 1-7)
   ├── kalor/
   │   ├── pemanasan-es.tsx              (Bab 3-2)
   │   ├── asas-black.tsx                (Bab 3-2)
   │   └── gas-piston.tsx                (Bab 3-4, 3-5)
   ├── listrik-magnet/
   │   ├── medan-listrik.tsx             (Bab 2-1)
   │   ├── rangkaian-seri-paralel.tsx    (Bab 2-2)
   │   └── induksi-faraday.tsx           (Bab 2-4)
   ├── fisika-atom/
   │   ├── atom-bohr.tsx                 (Bab 5-1)
   │   ├── hamburan-rutherford.tsx       (Bab 5-1)
   │   └── peluruhan-radioaktif.tsx      (Bab 5-3)
   └── fisika-modern/
       ├── efek-fotolistrik.tsx          (Bab 4-3)
       ├── radiasi-benda-hitam.tsx       (Bab 4-2)
       └── jam-cahaya.tsx                (Bab 4-1)

   Menambah simulasi baru:
   1. Salin sims/mekanika/gerak-parabola.tsx, ganti nama file dan isinya.
   2. Buat gambar kartu di public/images/sim/<slug>.svg
   3. Tambahkan satu blok { ... } di daftar `labSims` di bawah.

   Keterangan tiap blok:
   - slug       : alamat simulasi (#/lab/<slug>) dan nama file gambarnya
   - chapterIds : bab materi yang menampilkan kartu "Coba simulasinya"
   - siap       : false = kartu bertanda "Segera hadir" dan belum bisa dibuka

   Simulasi dari situs lain (PhET) ada di src/data/simulations.ts
   ============================================================ */

import { ComponentType, lazy, LazyExoticComponent } from 'react';
import {
    IconAtom, IconBolt, IconFlame, IconRocket, IconSun,
} from '@tabler/icons-react';

export type Bidang = 'mekanika' | 'kalor' | 'listrik-magnet' | 'fisika-atom' | 'fisika-modern';

type Ikon = ComponentType<{ size?: number | string; stroke?: number | string; className?: string }>;

/** materialId menunjuk ke materi fisika di src/data/physics-materials.ts */
export const BIDANG: Record<Bidang, { label: string; materialId: number; Ikon: Ikon }> = {
    'mekanika': { label: 'Mekanika', materialId: 1, Ikon: IconRocket },
    'kalor': { label: 'Kalor', materialId: 3, Ikon: IconFlame },
    'listrik-magnet': { label: 'Listrik & Magnet', materialId: 2, Ikon: IconBolt },
    'fisika-atom': { label: 'Fisika Atom', materialId: 5, Ikon: IconAtom },
    'fisika-modern': { label: 'Fisika Modern', materialId: 4, Ikon: IconSun },
};

export const URUTAN_BIDANG: Bidang[] = ['mekanika', 'kalor', 'listrik-magnet', 'fisika-atom', 'fisika-modern'];

export interface LabSim {
    slug: string;
    judul: string;
    deskripsi: string;
    bidang: Bidang;
    chapterIds: string[];
    siap: boolean;
    komponen: LazyExoticComponent<ComponentType>;
}

// ====== MULAI DAFTAR SIMULASI - EDIT DIBAWAH INI ======
export const labSims: LabSim[] = [
    // ---------- Mekanika ----------
    {
        slug: 'gerak-lurus',
        judul: 'Gerak Lurus',
        deskripsi: 'Bandingkan gerak dengan kecepatan tetap dan gerak dipercepat. Lihat jejak posisi tiap detik dan grafik s–t, v–t, a–t yang tergambar bersamaan.',
        bidang: 'mekanika',
        chapterIds: ['1-2'],
        siap: true,
        komponen: lazy(() => import('./sims/mekanika/gerak-lurus')),
    },
    {
        slug: 'gerak-parabola',
        judul: 'Gerak Parabola',
        deskripsi: 'Tembakkan bola, lalu ubah kecepatan awal, sudut, massa, dan hambatan udara. Cari tahu besaran mana yang mengubah jarak tembak dan mana yang tidak.',
        bidang: 'mekanika',
        chapterIds: ['1-3'],
        siap: true,
        komponen: lazy(() => import('./sims/mekanika/gerak-parabola')),
    },
    {
        slug: 'dinamika-gerak',
        judul: 'Dinamika Gerak Benda',
        deskripsi: 'Tarik balok di bidang datar atau miring. Amati diagram gayanya dan cari hubungan gaya, massa, gesekan, dan percepatan.',
        bidang: 'mekanika',
        chapterIds: ['1-6', '1-7'],
        siap: true,
        komponen: lazy(() => import('./sims/mekanika/dinamika-gerak')),
    },

    // ---------- Kalor ----------
    {
        slug: 'pemanasan-es',
        judul: 'Memanaskan Es Sampai Menguap',
        deskripsi: 'Panaskan es dan ikuti grafik suhu terhadap kalor. Lihat kapan suhu naik dan kapan suhu berhenti naik walau terus dipanaskan.',
        bidang: 'kalor',
        chapterIds: ['3-2'],
        siap: true,
        komponen: lazy(() => import('./sims/kalor/pemanasan-es')),
    },
    {
        slug: 'asas-black',
        judul: 'Asas Black: Mencampur Dua Zat',
        deskripsi: 'Campur zat panas dan zat dingin. Ubah massa, suhu, dan jenis zatnya, lalu lihat ke mana suhu akhir bergeser.',
        bidang: 'kalor',
        chapterIds: ['3-2'],
        siap: true,
        komponen: lazy(() => import('./sims/kalor/asas-black')),
    },
    {
        slug: 'gas-piston',
        judul: 'Gas dalam Piston',
        deskripsi: 'Panaskan atau mampatkan gas pada empat proses berbeda. Hubungkan tekanan, volume, dan suhu dengan gerak partikel dan diagram P–V.',
        bidang: 'kalor',
        chapterIds: ['3-4', '3-5'],
        siap: true,
        komponen: lazy(() => import('./sims/kalor/gas-piston')),
    },

    // ---------- Listrik & Magnet ----------
    {
        slug: 'medan-listrik',
        judul: 'Muatan dan Medan Listrik',
        deskripsi: 'Geser muatan positif dan negatif, lihat arah medannya, dan ukur bagaimana gaya berubah saat jarak dan besar muatan diubah.',
        bidang: 'listrik-magnet',
        chapterIds: ['2-1'],
        siap: true,
        komponen: lazy(() => import('./sims/listrik-magnet/medan-listrik')),
    },
    {
        slug: 'rangkaian-seri-paralel',
        judul: 'Rangkaian Seri dan Paralel',
        deskripsi: 'Susun tiga lampu secara seri, paralel, atau campuran. Amati arus, tegangan, dan terang tiap lampu saat hambatan diubah.',
        bidang: 'listrik-magnet',
        chapterIds: ['2-2'],
        siap: true,
        komponen: lazy(() => import('./sims/listrik-magnet/rangkaian-seri-paralel')),
    },
    {
        slug: 'induksi-faraday',
        judul: 'Induksi Faraday',
        deskripsi: 'Gerakkan magnet keluar-masuk kumparan. Bandingkan grafik fluks dan ggl, lalu ubah laju gerak, jumlah lilitan, dan kuat magnet.',
        bidang: 'listrik-magnet',
        chapterIds: ['2-4'],
        siap: true,
        komponen: lazy(() => import('./sims/listrik-magnet/induksi-faraday')),
    },

    // ---------- Fisika Atom ----------
    {
        slug: 'atom-bohr',
        judul: 'Atom Hidrogen Bohr',
        deskripsi: 'Pindahkan elektron antartingkat energi dan kumpulkan garis spektrumnya. Hubungkan selisih tingkat dengan energi dan warna foton.',
        bidang: 'fisika-atom',
        chapterIds: ['5-1'],
        siap: true,
        komponen: lazy(() => import('./sims/fisika-atom/atom-bohr')),
    },
    {
        slug: 'hamburan-rutherford',
        judul: 'Hamburan Rutherford',
        deskripsi: 'Tembakkan partikel alfa ke atom emas. Bandingkan model Thomson dan Rutherford lewat sudut hamburnya.',
        bidang: 'fisika-atom',
        chapterIds: ['5-1'],
        siap: true,
        komponen: lazy(() => import('./sims/fisika-atom/hamburan-rutherford')),
    },
    {
        slug: 'peluruhan-radioaktif',
        judul: 'Peluruhan Radioaktif',
        deskripsi: 'Amati ratusan inti meluruh secara acak dan bandingkan dengan kurva teorinya. Ubah waktu paruh dan jumlah inti awal.',
        bidang: 'fisika-atom',
        chapterIds: ['5-3'],
        siap: true,
        komponen: lazy(() => import('./sims/fisika-atom/peluruhan-radioaktif')),
    },

    // ---------- Fisika Modern ----------
    {
        slug: 'efek-fotolistrik',
        judul: 'Efek Fotolistrik',
        deskripsi: 'Sinari logam dengan cahaya berbagai frekuensi dan intensitas. Kumpulkan data energi kinetik elektron untuk menemukan tetapan Planck.',
        bidang: 'fisika-modern',
        chapterIds: ['4-3'],
        siap: true,
        komponen: lazy(() => import('./sims/fisika-modern/efek-fotolistrik')),
    },
    {
        slug: 'radiasi-benda-hitam',
        judul: 'Radiasi Benda Hitam',
        deskripsi: 'Ubah suhu benda dan lihat kurva pancarannya bergeser. Selidiki hukum pergeseran Wien dan hukum Stefan-Boltzmann.',
        bidang: 'fisika-modern',
        chapterIds: ['4-2'],
        siap: true,
        komponen: lazy(() => import('./sims/fisika-modern/radiasi-benda-hitam')),
    },
    {
        slug: 'jam-cahaya',
        judul: 'Jam Cahaya dan Dilatasi Waktu',
        deskripsi: 'Bandingkan jam cahaya yang diam dengan yang melaju mendekati kecepatan cahaya. Lihat waktu memulur dan panjang menyusut.',
        bidang: 'fisika-modern',
        chapterIds: ['4-1'],
        siap: true,
        komponen: lazy(() => import('./sims/fisika-modern/jam-cahaya')),
    },
];
// ====== AKHIR DAFTAR SIMULASI ======

export const gambarSim = (slug: string) => `/images/sim/${slug}.svg`;

export function simUntukBab(chapterId: string): LabSim[] {
    return labSims.filter((s) => s.siap && s.chapterIds.includes(chapterId));
}
