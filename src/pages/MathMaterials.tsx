import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Clock, Star, ArrowLeft } from 'lucide-react';
import { mathElements, mathLanjutElements, ElemenMatematika } from '../data/math-materials';

// Satu kelompok mata pelajaran (umum / tingkat lanjut), berisi elemen-elemen beserta kartu materinya
function KelompokMateri({ id, judul, keterangan, daftar }: {
  id: string;
  judul: string;
  keterangan: string;
  daftar: ElemenMatematika[];
}) {
  return (
    <section className="mb-12" aria-labelledby={id}>
      <div className="border-b-2 border-border pb-3 mb-6">
        <h2 id={id} className="text-2xl md:text-3xl font-bold text-foreground">
          {judul}
        </h2>
        <p className="text-muted mt-1">{keterangan}</p>
      </div>

      {daftar.map((elemen, elemenIndex) => (
        <div key={elemen.nama} className="mb-10">
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-4">
            <span className="px-2 py-0.5 rounded-base bg-main border-2 border-border text-xs font-bold text-foreground">
              Elemen
            </span>
            <h3 className="text-xl font-bold text-foreground">
              {elemen.nama}
            </h3>
            <p className="w-full text-sm text-muted">{elemen.deskripsi}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {elemen.materi.map((material, index) => (
              <motion.div
                key={material.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (elemenIndex + index) * 0.05 }}
              >
                <Link to={`/materials/math/${material.id}`}>
                  <div className="bg-secondary-background border-2 border-border rounded-base p-6 shadow-shadow hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-shadow-sm transition-all h-full">
                    {/* Icon & Badge */}
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-14 h-14 rounded-base ${material.color} border-2 border-border flex items-center justify-center text-2xl shadow-shadow-sm`}>
                        {material.icon}
                      </div>
                      <span className="px-3 py-1 rounded-base bg-background border-2 border-border text-xs font-bold text-foreground">
                        {material.chapters.length} Bab
                      </span>
                    </div>

                    {/* Title & Description */}
                    <h4 className="text-xl font-bold text-foreground mb-2">
                      {material.title}
                    </h4>
                    <p className="text-muted text-sm mb-4">
                      {material.description}
                    </p>

                    {/* Chapters Preview */}
                    <div className="space-y-2 mb-4">
                      {material.chapters.slice(0, 3).map((chapter) => (
                        <div key={chapter.chapterId} className="flex items-center gap-2 text-sm text-muted">
                          <div className="w-2 h-2 rounded-full bg-main border border-border" />
                          <span className="truncate">{chapter.title}</span>
                        </div>
                      ))}
                      {material.chapters.length > 3 && (
                        <p className="text-xs text-muted">
                          +{material.chapters.length - 3} bab lainnya
                        </p>
                      )}
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t-2 border-border">
                      <div className="flex items-center gap-3 text-xs text-muted">
                        <span className="flex items-center gap-1">
                          <Clock size={12} />
                          ~{material.chapters.length * 15} min
                        </span>
                        <span className="flex items-center gap-1">
                          <Star size={12} />
                          +{material.chapters.length * 10} XP
                        </span>
                      </div>
                      <span className="flex items-center gap-1 text-foreground text-sm font-bold">
                        Mulai <ChevronRight size={14} />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default function MathMaterials() {
  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted mb-4">
          <Link to="/materials" className="hover:text-foreground hover:underline underline-offset-4 transition-colors font-semibold">
            Materi
          </Link>
          <ChevronRight size={14} />
          <span className="text-foreground font-semibold">Matematika</span>
        </div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link
            to="/materials"
            className="inline-flex items-center gap-2 text-foreground hover:underline underline-offset-4 decoration-2 font-semibold mb-4"
          >
            <ArrowLeft size={16} />
            Kembali
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Materi Matematika
          </h1>
          <p className="text-lg text-muted">
            Rangkuman matematika SMA kelas X–XII, disusun menurut elemen Capaian Pembelajaran.
          </p>
        </motion.div>

        <KelompokMateri
          id="matematika-umum"
          judul="Matematika Umum"
          keterangan="Wajib untuk semua siswa kelas X–XII, mencakup empat elemen: Bilangan, Aljabar dan Fungsi, Geometri, serta Analisis Data dan Peluang."
          daftar={mathElements}
        />

        <KelompokMateri
          id="matematika-lanjut"
          judul="Matematika Tingkat Lanjut"
          keterangan="Mata pelajaran pilihan kelas XI–XII untuk pendalaman, terutama bagi yang ingin melanjutkan ke bidang sains dan teknik."
          daftar={mathLanjutElements}
        />

        {/* Info Box */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 bg-background border-2 border-border rounded-base p-6"
        >
          <div className="flex items-start gap-4">
            <div className="text-3xl">💡</div>
            <div>
              <h4 className="text-foreground font-bold mb-1">
                Tips Belajar Matematika
              </h4>
              <p className="text-muted text-sm">
                Pahami konsep dasar dan rumus terlebih dahulu. Kerjakan contoh soal sebelum mencoba latihan.
                Matematika butuh latihan rutin, luangkan waktu setiap hari untuk berlatih.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
