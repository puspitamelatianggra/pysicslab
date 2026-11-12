/* ============================================================
   ====== MATERI MATEMATIKA ======
   ============================================================

   File ini hanya berisi DAFTAR materi dan urutan bab-nya.
   Isi tiap bab ada di file terpisah dalam folder ./math/

   math/
   ├── persamaan-linear/
   │   └── pengertian-persamaan-linear.ts    (Bab 101-1)
   ├── persamaan-kuadrat/
   │   └── bentuk-umum-persamaan-kuadrat.ts  (Bab 102-1)
   └── trigonometri/
       └── perbandingan-trigonometri.ts      (Bab 103-1)

   Menambah bab baru:
   1. Salin salah satu file bab, ganti nama file & nama variabelnya.
   2. Import di bawah ini.
   3. Masukkan ke array `chapters` materi yang sesuai.

   ============================================================ */

import { Material } from './materials';

// ====== Persamaan Linear ======
import { pengertianPersamaanLinear } from './math/persamaan-linear/pengertian-persamaan-linear';

// ====== Persamaan Kuadrat ======
import { bentukUmumPersamaanKuadrat } from './math/persamaan-kuadrat/bentuk-umum-persamaan-kuadrat';

// ====== Trigonometri ======
import { perbandinganTrigonometri } from './math/trigonometri/perbandingan-trigonometri';

export const mathMaterials: Material[] = [
  {
    id: 101,
    title: "Persamaan Linear",
    description: "Pelajari persamaan linear satu dan dua variabel",
    icon: "📐",
    color: "bg-main",
    chapters: [
      pengertianPersamaanLinear,
    ]
  },
  {
    id: 102,
    title: "Persamaan Kuadrat",
    description: "Pelajari persamaan kuadrat dan cara penyelesaiannya",
    icon: "📊",
    color: "bg-main",
    chapters: [
      bentukUmumPersamaanKuadrat,
    ]
  },
  {
    id: 103,
    title: "Trigonometri",
    description: "Pelajari sin, cos, tan dan penerapannya",
    icon: "📏",
    color: "bg-main",
    chapters: [
      perbandinganTrigonometri,
    ]
  }
];
