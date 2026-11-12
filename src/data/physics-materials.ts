/* ============================================================
   ====== MATERI FISIKA ======
   ============================================================

   File ini hanya berisi DAFTAR materi dan urutan bab-nya.
   Isi tiap bab ada di file terpisah dalam folder ./physics/

   physics/
   ├── mekanika/
   │   ├── besaran-gerak.ts                      (Bab 1-1)
   │   ├── gerak-lurus.ts                        (Bab 1-2)
   │   ├── gerak-parabola.ts                     (Bab 1-3)
   │   ├── gerak-melingkar-beraturan.ts          (Bab 1-4)
   │   ├── gerak-melingkar-berubah-beraturan.ts  (Bab 1-5)
   │   ├── hukum-newton.ts                       (Bab 1-6)
   │   ├── penerapan-hukum-newton.ts             (Bab 1-7)
   │   ├── momentum-impuls.ts                    (Bab 1-8)
   │   ├── dinamika-rotasi.ts                    (Bab 1-9)
   │   ├── keseimbangan-benda-tegar.ts           (Bab 1-10)
   │   ├── elastisitas-zat-padat.ts              (Bab 1-11)
   │   ├── fluida-statis.ts                      (Bab 1-12)
   │   └── fluida-dinamis.ts                     (Bab 1-13)
   ├── listrik-magnet/
   │   └── listrik-statis.ts                     (Bab 2-1)
   └── termodinamika/
       ├── suhu-pemuaian.ts                      (Bab 3-1)
       └── kalor-perubahan-wujud.ts              (Bab 3-2)

   Menambah bab baru:
   1. Salin salah satu file bab, ganti nama file & nama variabelnya.
   2. Import di bawah ini.
   3. Masukkan ke array `chapters` materi yang sesuai.

   ============================================================ */

import { Material } from './materials';

// ====== Mekanika ======
import { besaranGerak } from './physics/mekanika/besaran-gerak';
import { gerakLurus } from './physics/mekanika/gerak-lurus';
import { gerakParabola } from './physics/mekanika/gerak-parabola';
import { gerakMelingkarBeraturan } from './physics/mekanika/gerak-melingkar-beraturan';
import { gerakMelingkarBerubahBeraturan } from './physics/mekanika/gerak-melingkar-berubah-beraturan';
import { hukumNewton } from './physics/mekanika/hukum-newton';
import { penerapanHukumNewton } from './physics/mekanika/penerapan-hukum-newton';
import { momentumImpuls } from './physics/mekanika/momentum-impuls';
import { dinamikaRotasi } from './physics/mekanika/dinamika-rotasi';
import { keseimbanganBendaTegar } from './physics/mekanika/keseimbangan-benda-tegar';
import { elastisitasZatPadat } from './physics/mekanika/elastisitas-zat-padat';
import { fluidaStatis } from './physics/mekanika/fluida-statis';
import { fluidaDinamis } from './physics/mekanika/fluida-dinamis';

// ====== Listrik & Magnet ======
import { listrikStatis } from './physics/listrik-magnet/listrik-statis';

// ====== Termodinamika ======
import { suhuPemuaian } from './physics/termodinamika/suhu-pemuaian';
import { kalorPerubahanWujud } from './physics/termodinamika/kalor-perubahan-wujud';

export const physicsMaterials: Material[] = [
  {
    id: 1,
    title: "Mekanika",
    description: "Pelajari gerak benda, gaya, momentum, rotasi, keseimbangan, elastisitas, dan fluida dari dasar hingga mahir.",
    icon: "🚀",
    color: "bg-main",
    chapters: [
      besaranGerak,
      gerakLurus,
      gerakParabola,
      gerakMelingkarBeraturan,
      gerakMelingkarBerubahBeraturan,
      hukumNewton,
      penerapanHukumNewton,
      momentumImpuls,
      dinamikaRotasi,
      keseimbanganBendaTegar,
      elastisitasZatPadat,
      fluidaStatis,
      fluidaDinamis,
    ]
  },
  {
    id: 2,
    title: "Listrik & Magnet",
    description: "Pelajari muatan listrik, arus, tegangan, rangkaian, dan medan magnet.",
    icon: "⚡",
    color: "bg-main",
    chapters: [
      listrikStatis,
    ]
  },
  {
    id: 3,
    title: "Termodinamika",
    description: "Pelajari suhu, pemuaian, kalor, perubahan wujud zat, hingga teori kinetik gas dan hukum termodinamika.",
    icon: "🌡️",
    color: "bg-main",
    chapters: [
      suhuPemuaian,
      kalorPerubahanWujud,
    ]
  }
];
