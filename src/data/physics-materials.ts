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
   │   └── momentum-impuls.ts                    (Bab 1-8)
   └── listrik-magnet/
       └── listrik-statis.ts                     (Bab 2-1)

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

// ====== Listrik & Magnet ======
import { listrikStatis } from './physics/listrik-magnet/listrik-statis';

export const physicsMaterials: Material[] = [
  {
    id: 1,
    title: "Mekanika",
    description: "Pelajari gerak benda, gaya, energi, dan momentum dari dasar hingga mahir.",
    icon: "🚀",
    color: "from-blue-500 to-cyan-400",
    chapters: [
      besaranGerak,
      gerakLurus,
      gerakParabola,
      gerakMelingkarBeraturan,
      gerakMelingkarBerubahBeraturan,
      hukumNewton,
      penerapanHukumNewton,
      momentumImpuls,
    ]
  },
  {
    id: 2,
    title: "Listrik & Magnet",
    description: "Pelajari muatan listrik, arus, tegangan, rangkaian, dan medan magnet.",
    icon: "⚡",
    color: "from-yellow-400 to-orange-500",
    chapters: [
      listrikStatis,
    ]
  }
];
