import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calculator, Atom, ArrowRight } from 'lucide-react';
import { physicsMaterials } from '../data/physics-materials';
import { mathMaterials } from '../data/math-materials';
import { Material } from '../data/materials';

// Jumlah modul & bab dihitung dari data, jadi otomatis benar saat bab baru ditambahkan
const countLabel = (materials: Material[]) =>
    `${materials.length} Modul • ${materials.reduce((n, m) => n + m.chapters.length, 0)} Bab`;

export default function Materials() {
    const subjects = [
        {
            title: "Fisika",
            description: "Pelajari Mekanika, Listrik, Termodinamika, Gelombang, dan Fisika Modern",
            icon: Atom,
            chapters: countLabel(physicsMaterials),
            color: "bg-accent",
            path: "/materials/physics"
        },
        {
            title: "Matematika",
            description: "Pelajari Aljabar, Geometri, Trigonometri, dan Kalkulus dasar",
            icon: Calculator,
            chapters: countLabel(mathMaterials),
            color: "bg-main",
            path: "/materials/math"
        }
    ];

    return (
        <div className="min-h-screen p-4 md:p-8">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12 text-center"
                >
                    <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Pilih Mata Pelajaran
                    </h1>
                    <p className="text-lg text-muted">
                        Mulai belajar dari mata pelajaran yang kamu minati
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {subjects.map((subject, index) => (
                        <motion.div
                            key={subject.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Link to={subject.path} className="block h-full">
                                <div className="bg-secondary-background border-2 border-border rounded-base p-8 shadow-shadow hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-shadow-sm transition-all h-full group">
                                    <div className={`${subject.color} w-20 h-20 border-2 border-border rounded-base flex items-center justify-center mb-6 shadow-shadow group-hover:scale-105 transition-transform`}>
                                        <subject.icon size={40} className="text-foreground" strokeWidth={3} />
                                    </div>

                                    <h2 className="text-3xl font-bold text-foreground mb-3">
                                        {subject.title}
                                    </h2>

                                    <p className="text-muted mb-6">
                                        {subject.description}
                                    </p>

                                    <div className="flex items-center justify-between pt-4 border-t-2 border-border">
                                        <span className="text-sm font-bold text-foreground bg-background px-3 py-1 border-2 border-border rounded-base">
                                            {subject.chapters}
                                        </span>
                                        <div className="flex items-center text-foreground font-bold">
                                            Mulai Belajar
                                            <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="mt-12 bg-background border-2 border-border rounded-base p-6 max-w-4xl mx-auto"
                >
                    <div className="flex items-start gap-4">
                        <div className="text-4xl">💡</div>
                        <div>
                            <h3 className="text-foreground font-bold mb-2">
                                Tips Belajar Efektif
                            </h3>
                            <p className="text-muted text-sm">
                                Bacalah materi secara berurutan dari bab pertama. Setelah memahami setiap bab,
                                kerjakan kuis terkait untuk menguji pemahamanmu. Gunakan Lab Virtual untuk
                                memvisualisasikan konsep yang sulit dipahami.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}