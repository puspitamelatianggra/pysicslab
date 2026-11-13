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
   │   ├── listrik-statis.ts                     (Bab 2-1)
   │   ├── rangkaian-arus-searah.ts              (Bab 2-2)
   │   ├── medan-magnet.ts                       (Bab 2-3)
   │   ├── induksi-elektromagnetik.ts            (Bab 2-4)
   │   └── arus-bolak-balik.ts                   (Bab 2-5)
   ├── termodinamika/
   │   ├── suhu-pemuaian.ts                      (Bab 3-1)
   │   ├── kalor-perubahan-wujud.ts              (Bab 3-2)
   │   ├── perpindahan-kalor.ts                  (Bab 3-3)
   │   ├── teori-kinetik-gas.ts                  (Bab 3-4)
   │   └── hukum-termodinamika.ts                (Bab 3-5)
   ├── fisika-modern/
   │   ├── relativitas-khusus.ts                 (Bab 4-1)
   │   ├── radiasi-benda-hitam.ts                (Bab 4-2)
   │   └── dualisme-gelombang-partikel.ts        (Bab 4-3)
   └── fisika-atom/
       ├── model-atom.ts                         (Bab 5-1)
       ├── inti-atom.ts                          (Bab 5-2)
       └── radioaktivitas.ts                     (Bab 5-3)

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
import { rangkaianArusSearah } from './physics/listrik-magnet/rangkaian-arus-searah';
import { medanMagnet } from './physics/listrik-magnet/medan-magnet';
import { induksiElektromagnetik } from './physics/listrik-magnet/induksi-elektromagnetik';
import { arusBolakBalik } from './physics/listrik-magnet/arus-bolak-balik';

// ====== Termodinamika ======
import { suhuPemuaian } from './physics/termodinamika/suhu-pemuaian';
import { kalorPerubahanWujud } from './physics/termodinamika/kalor-perubahan-wujud';
import { perpindahanKalor } from './physics/termodinamika/perpindahan-kalor';
import { teoriKinetikGas } from './physics/termodinamika/teori-kinetik-gas';
import { hukumTermodinamika } from './physics/termodinamika/hukum-termodinamika';

// ====== Fisika Modern ======
import { relativitasKhusus } from './physics/fisika-modern/relativitas-khusus';
import { radiasiBendaHitam } from './physics/fisika-modern/radiasi-benda-hitam';
import { dualismeGelombangPartikel } from './physics/fisika-modern/dualisme-gelombang-partikel';

// ====== Fisika Atom dan Inti ======
import { modelAtom } from './physics/fisika-atom/model-atom';
import { intiAtom } from './physics/fisika-atom/inti-atom';
import { radioaktivitas } from './physics/fisika-atom/radioaktivitas';

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
    description: "Pelajari listrik statis, rangkaian arus searah, medan magnet, induksi elektromagnetik, dan listrik arus bolak-balik.",
    icon: "⚡",
    color: "bg-main",
    chapters: [
      listrikStatis,
      rangkaianArusSearah,
      medanMagnet,
      induksiElektromagnetik,
      arusBolakBalik,
    ]
  },
  {
    id: 3,
    title: "Termodinamika",
    description: "Pelajari suhu, pemuaian, kalor, perpindahan kalor, teori kinetik gas, dan hukum termodinamika pada mesin kalor.",
    icon: "🌡️",
    color: "bg-main",
    chapters: [
      suhuPemuaian,
      kalorPerubahanWujud,
      perpindahanKalor,
      teoriKinetikGas,
      hukumTermodinamika,
    ]
  },
  {
    id: 4,
    title: "Fisika Modern",
    description: "Pelajari teori relativitas khusus, radiasi benda hitam, dan gejala kuantum seperti efek fotolistrik dan gelombang de Broglie.",
    icon: "💡",
    color: "bg-main",
    chapters: [
      relativitasKhusus,
      radiasiBendaHitam,
      dualismeGelombangPartikel,
    ]
  },
  {
    id: 5,
    title: "Fisika Atom dan Inti",
    description: "Pelajari perkembangan model atom, spektrum hidrogen, inti atom, reaksi fisi dan fusi, serta radioaktivitas dan pemanfaatannya.",
    icon: "⚛️",
    color: "bg-main",
    chapters: [
      modelAtom,
      intiAtom,
      radioaktivitas,
    ]
  }
];
