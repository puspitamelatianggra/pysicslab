/* ============================================================
   ====== MATERI MATEMATIKA ======
   ============================================================

   File ini hanya berisi DAFTAR materi dan urutan bab-nya.
   Isi tiap bab ada di file terpisah dalam folder ./math/

   Materi dikelompokkan menurut 4 elemen Capaian Pembelajaran
   Matematika SMA (Fase E kelas X, Fase F kelas XI–XII):
   Bilangan, Aljabar dan Fungsi, Geometri, Analisis Data dan Peluang.

   math/
   ├── eksponen-logaritma/                   (Elemen Bilangan)
   │   ├── bilangan-berpangkat.ts            (Bab 104-1)
   │   └── logaritma.ts                      (Bab 104-2)
   ├── barisan-deret/                        (Elemen Bilangan)
   │   ├── barisan-deret-aritmetika.ts       (Bab 105-1)
   │   ├── barisan-deret-geometri.ts         (Bab 105-2)
   │   └── bunga-anuitas.ts                  (Bab 105-3)
   ├── persamaan-linear/                     (Elemen Aljabar dan Fungsi)
   │   ├── pengertian-persamaan-linear.ts    (Bab 101-1)
   │   └── sistem-pertidaksamaan-linear.ts   (Bab 101-2)
   ├── persamaan-kuadrat/                    (Elemen Aljabar dan Fungsi)
   │   ├── bentuk-umum-persamaan-kuadrat.ts  (Bab 102-1)
   │   └── fungsi-kuadrat.ts                 (Bab 102-2)
   ├── fungsi/                               (Elemen Aljabar dan Fungsi)
   │   ├── fungsi-eksponensial.ts            (Bab 106-1)
   │   ├── komposisi-invers.ts               (Bab 106-2)
   │   └── transformasi-fungsi.ts            (Bab 106-3)
   ├── trigonometri/                         (Elemen Geometri)
   │   ├── perbandingan-trigonometri.ts      (Bab 103-1)
   │   └── penerapan-trigonometri.ts         (Bab 103-2)
   ├── lingkaran/                            (Elemen Geometri)
   │   ├── sudut-busur-juring.ts             (Bab 107-1)
   │   └── tali-busur-garis-singgung.ts      (Bab 107-2)
   ├── statistika/                           (Elemen Analisis Data dan Peluang)
   │   ├── penyajian-data-pemusatan.ts       (Bab 108-1)
   │   ├── ukuran-letak-penyebaran.ts        (Bab 108-2)
   │   └── data-dua-variabel.ts              (Bab 108-3)
   └── peluang/                              (Elemen Analisis Data dan Peluang)
       ├── kaidah-pencacahan.ts              (Bab 109-1)
       └── peluang-kejadian.ts               (Bab 109-2)

   Catatan ID: nomor materi (101, 102, …) dan ID bab ("101-1", …)
   dipakai untuk menyimpan progres siswa, jadi JANGAN diubah urutannya.
   Urutan tampil diatur oleh array `mathElements` di bawah, bukan oleh ID.
   Materi baru memakai ID berikutnya (110, 111, …).

   Menambah bab baru:
   1. Salin salah satu file bab, ganti nama file & nama variabelnya.
   2. Import di bawah ini.
   3. Masukkan ke array `chapters` materi yang sesuai.

   ============================================================ */

import { Material } from './materials';

// ====== Bilangan ======
import { bilanganBerpangkat } from './math/eksponen-logaritma/bilangan-berpangkat';
import { logaritma } from './math/eksponen-logaritma/logaritma';
import { barisanDeretAritmetika } from './math/barisan-deret/barisan-deret-aritmetika';
import { barisanDeretGeometri } from './math/barisan-deret/barisan-deret-geometri';
import { bungaAnuitas } from './math/barisan-deret/bunga-anuitas';

// ====== Aljabar dan Fungsi ======
import { pengertianPersamaanLinear } from './math/persamaan-linear/pengertian-persamaan-linear';
import { sistemPertidaksamaanLinear } from './math/persamaan-linear/sistem-pertidaksamaan-linear';
import { bentukUmumPersamaanKuadrat } from './math/persamaan-kuadrat/bentuk-umum-persamaan-kuadrat';
import { fungsiKuadrat } from './math/persamaan-kuadrat/fungsi-kuadrat';
import { fungsiEksponensial } from './math/fungsi/fungsi-eksponensial';
import { komposisiInvers } from './math/fungsi/komposisi-invers';
import { transformasiFungsi } from './math/fungsi/transformasi-fungsi';

// ====== Geometri ======
import { perbandinganTrigonometri } from './math/trigonometri/perbandingan-trigonometri';
import { penerapanTrigonometri } from './math/trigonometri/penerapan-trigonometri';
import { sudutBusurJuring } from './math/lingkaran/sudut-busur-juring';
import { taliBusurGarisSinggung } from './math/lingkaran/tali-busur-garis-singgung';

// ====== Analisis Data dan Peluang ======
import { penyajianDataPemusatan } from './math/statistika/penyajian-data-pemusatan';
import { ukuranLetakPenyebaran } from './math/statistika/ukuran-letak-penyebaran';
import { dataDuaVariabel } from './math/statistika/data-dua-variabel';
import { kaidahPencacahan } from './math/peluang/kaidah-pencacahan';
import { peluangKejadian } from './math/peluang/peluang-kejadian';

// Satu elemen Capaian Pembelajaran beserta materi-materinya
export interface ElemenMatematika {
  nama: string;
  deskripsi: string;
  materi: Material[];
}

export const mathElements: ElemenMatematika[] = [
  {
    nama: "Bilangan",
    deskripsi: "Bilangan berpangkat, logaritma, barisan dan deret, serta bunga dan anuitas.",
    materi: [
      {
        id: 104,
        title: "Bilangan Berpangkat dan Logaritma",
        description: "Kelas X · Sifat pangkat, pangkat pecahan, bentuk akar, notasi ilmiah, dan logaritma.",
        icon: "🔢",
        color: "bg-main",
        chapters: [
          bilanganBerpangkat,
          logaritma,
        ]
      },
      {
        id: 105,
        title: "Barisan, Deret, dan Bunga",
        description: "Kelas XI · Barisan dan deret aritmetika dan geometri, pertumbuhan, bunga majemuk, dan anuitas.",
        icon: "📈",
        color: "bg-main",
        chapters: [
          barisanDeretAritmetika,
          barisanDeretGeometri,
          bungaAnuitas,
        ]
      },
    ]
  },
  {
    nama: "Aljabar dan Fungsi",
    deskripsi: "Persamaan dan pertidaksamaan, fungsi kuadrat, fungsi eksponensial, komposisi, invers, dan transformasi fungsi.",
    materi: [
      {
        id: 101,
        title: "Persamaan dan Pertidaksamaan Linear",
        description: "Kelas X · SPLDV, sistem pertidaksamaan linear dua variabel, dan nilai optimum.",
        icon: "⚖️",
        color: "bg-main",
        chapters: [
          pengertianPersamaanLinear,
          sistemPertidaksamaanLinear,
        ]
      },
      {
        id: 102,
        title: "Persamaan dan Fungsi Kuadrat",
        description: "Kelas X · Akar persamaan kuadrat (termasuk akar imajiner), grafik parabola, dan nilai optimum.",
        icon: "🏀",
        color: "bg-main",
        chapters: [
          bentukUmumPersamaanKuadrat,
          fungsiKuadrat,
        ]
      },
      {
        id: 106,
        title: "Fungsi",
        description: "Kelas X–XI · Fungsi eksponensial, komposisi dan invers fungsi, transformasi, dan pemodelan.",
        icon: "🔗",
        color: "bg-main",
        chapters: [
          fungsiEksponensial,
          komposisiInvers,
          transformasiFungsi,
        ]
      },
    ]
  },
  {
    nama: "Geometri",
    deskripsi: "Perbandingan trigonometri pada sudut lancip dan hubungan antarunsur lingkaran.",
    materi: [
      {
        id: 103,
        title: "Trigonometri",
        description: "Kelas X · Sinus, kosinus, tangen, sudut istimewa, sudut elevasi dan depresi.",
        icon: "📐",
        color: "bg-main",
        chapters: [
          perbandinganTrigonometri,
          penerapanTrigonometri,
        ]
      },
      {
        id: 107,
        title: "Lingkaran",
        description: "Kelas XI · Sudut pusat dan keliling, busur, juring, tali busur, dan garis singgung.",
        icon: "⭕",
        color: "bg-main",
        chapters: [
          sudutBusurJuring,
          taliBusurGarisSinggung,
        ]
      },
    ]
  },
  {
    nama: "Analisis Data dan Peluang",
    deskripsi: "Penyajian dan ringkasan data, hubungan dua variabel, kaidah pencacahan, dan peluang.",
    materi: [
      {
        id: 108,
        title: "Statistika",
        description: "Kelas X–XII · Diagram data, ukuran pemusatan, kuartil, box plot, diagram pencar, dan regresi.",
        icon: "📊",
        color: "bg-main",
        chapters: [
          penyajianDataPemusatan,
          ukuranLetakPenyebaran,
          dataDuaVariabel,
        ]
      },
      {
        id: 109,
        title: "Peluang",
        description: "Kelas XI–XII · Permutasi, kombinasi, kejadian majemuk, saling bebas, dan peluang bersyarat.",
        icon: "🎲",
        color: "bg-main",
        chapters: [
          kaidahPencacahan,
          peluangKejadian,
        ]
      },
    ]
  },
];

// Daftar datar semua materi matematika (dipakai Dashboard, Quiz, MaterialDetail)
export const mathMaterials: Material[] = mathElements.flatMap((elemen) => elemen.materi);
