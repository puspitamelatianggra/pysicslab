import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Clock, Star, ArrowLeft } from 'lucide-react';
import { physicsMaterials } from '../data/physics-materials';

export default function PhysicsMaterials() {
    return (
        <div className="min-h-screen bg-cream p-4 md:p-8">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center gap-2 text-sm text-gray mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                    <Link to="/materials" className="hover:text-orange transition-colors font-semibold">
                        Materi
                    </Link>
                    <ChevronRight size={14} />
                    <span className="text-dark font-semibold">Fisika</span>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8"
                >
                    <Link
                        to="/materials"
                        className="inline-flex items-center gap-2 text-orange hover:underline font-semibold mb-4"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                        <ArrowLeft size={16} />
                        Kembali
                    </Link>
                    <h1 className="text-3xl md:text-4xl font-bold text-dark mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                        Materi Fisika 🚀
                    </h1>
                    <p className="text-lg text-gray" style={{ fontFamily: 'Inter, sans-serif' }}>
                        Pelajari konsep fisika dari dasar hingga mahir
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6">
                    {physicsMaterials.map((material, index) => (
                        <motion.div
                            key={material.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Link to={`/materials/physics/${material.id}`}>
                                <div className="bg-white border-[3px] border-dark rounded-xl p-6 shadow-[4px_4px_0_#1A1A1A] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#1A1A1A] transition-all h-full">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${material.color} border-[3px] border-dark flex items-center justify-center text-2xl shadow-[3px_3px_0_#1A1A1A]`}>
                                            {material.icon}
                                        </div>
                                        <span className="px-3 py-1 rounded-lg bg-cream border-[2px] border-dark text-xs font-bold text-dark" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                                            {material.chapters.length} Bab
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-bold text-dark mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                                        {material.title}
                                    </h3>
                                    <p className="text-gray text-sm mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                                        {material.description}
                                    </p>

                                    <div className="space-y-2 mb-4">
                                        {material.chapters.slice(0, 3).map((chapter) => (
                                            <div key={chapter.chapterId} className="flex items-center gap-2 text-sm text-gray" style={{ fontFamily: 'Inter, sans-serif' }}>
                                                <div className="w-1.5 h-1.5 rounded-full bg-orange" />
                                                <span className="truncate">{chapter.title}</span>
                                            </div>
                                        ))}
                                        {material.chapters.length > 3 && (
                                            <p className="text-xs text-gray" style={{ fontFamily: 'Inter, sans-serif' }}>
                                                +{material.chapters.length - 3} bab lainnya
                                            </p>
                                        )}
                                    </div>

                                    <div className="flex items-center justify-between pt-4 border-t-[2px] border-dark">
                                        <div className="flex items-center gap-3 text-xs text-gray" style={{ fontFamily: 'Inter, sans-serif' }}>
                                            <span className="flex items-center gap-1">
                                                <Clock size={12} />
                                                ~{material.chapters.length * 15} min
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Star size={12} />
                                                +{material.chapters.length * 10} XP
                                            </span>
                                        </div>
                                        <span className="flex items-center gap-1 text-orange text-sm font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                                            Mulai <ChevronRight size={14} />
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}