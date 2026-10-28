import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calculator, Atom, ArrowRight } from 'lucide-react';

export default function Materials() {
    const subjects = [
        {
            title: "Fisika",
            description: "Pelajari Mekanika, Listrik, Termodinamika, Gelombang, dan Fisika Modern",
            icon: Atom,
            chapters: "5 Modul • 15 Bab",
            color: "bg-orange",
            path: "/materials/physics"
        },
        {
            title: "Matematika",
            description: "Pelajari Aljabar, Geometri, Trigonometri, dan Kalkulus dasar",
            icon: Calculator,
            chapters: "4 Modul • 12 Bab",
            color: "bg-lime",
            path: "/materials/math"
        }
    ];

    return (
        <div className="min-h-screen bg-cream p-4 md:p-8">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12 text-center"
                >
                    <h1 className="text-3xl md:text-4xl font-bold text-dark mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                        Pilih Mata Pelajaran
                    </h1>
                    <p className="text-lg text-gray" style={{ fontFamily: 'Inter, sans-serif' }}>
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
                                <div className="bg-white border-[3px] border-dark rounded-xl p-8 shadow-[6px_6px_0_#1A1A1A] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0_#1A1A1A] transition-all h-full group">
                                    <div className={`${subject.color} w-20 h-20 border-[3px] border-dark rounded-xl flex items-center justify-center mb-6 shadow-[4px_4px_0_#1A1A1A] group-hover:scale-105 transition-transform`}>
                                        <subject.icon size={40} className="text-dark" strokeWidth={3} />
                                    </div>

                                    <h2 className="text-3xl font-bold text-dark mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                                        {subject.title}
                                    </h2>

                                    <p className="text-gray mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                                        {subject.description}
                                    </p>

                                    <div className="flex items-center justify-between pt-4 border-t-[2px] border-dark">
                                        <span className="text-sm font-bold text-dark bg-cream px-3 py-1 border-[2px] border-dark rounded-md" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                                            {subject.chapters}
                                        </span>
                                        <div className="flex items-center text-orange font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
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
                    className="mt-12 bg-lime border-[3px] border-dark rounded-xl p-6 shadow-[4px_4px_0_#1A1A1A] max-w-4xl mx-auto"
                >
                    <div className="flex items-start gap-4">
                        <div className="text-4xl">💡</div>
                        <div>
                            <h3 className="text-dark font-bold mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                                Tips Belajar Efektif
                            </h3>
                            <p className="text-gray text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
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