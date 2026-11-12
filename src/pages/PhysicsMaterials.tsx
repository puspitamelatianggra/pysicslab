import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Clock, Star, ArrowLeft } from 'lucide-react';
import { physicsMaterials } from '../data/physics-materials';

export default function PhysicsMaterials() {
    return (
        <div className="min-h-screen p-4 md:p-8">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center gap-2 text-sm text-muted mb-4">
                    <Link to="/materials" className="hover:text-foreground hover:underline underline-offset-4 transition-colors font-semibold">
                        Materi
                    </Link>
                    <ChevronRight size={14} />
                    <span className="text-foreground font-semibold">Fisika</span>
                </div>

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
                        Materi Fisika
                    </h1>
                    <p className="text-lg text-muted">
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
                                <div className="bg-secondary-background border-2 border-border rounded-base p-6 shadow-shadow hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-shadow-sm transition-all h-full">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className={`w-14 h-14 rounded-base ${material.color} border-2 border-border flex items-center justify-center text-2xl shadow-shadow-sm`}>
                                            {material.icon}
                                        </div>
                                        <span className="px-3 py-1 rounded-base bg-background border-2 border-border text-xs font-bold text-foreground">
                                            {material.chapters.length} Bab
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-bold text-foreground mb-2">
                                        {material.title}
                                    </h3>
                                    <p className="text-muted text-sm mb-4">
                                        {material.description}
                                    </p>

                                    <div className="space-y-2 mb-4">
                                        {material.chapters.slice(0, 3).map((chapter) => (
                                            <div key={chapter.chapterId} className="flex items-center gap-2 text-sm text-muted">
                                                <div className="w-2 h-2 rounded-full bg-accent border border-border" />
                                                <span className="truncate">{chapter.title}</span>
                                            </div>
                                        ))}
                                        {material.chapters.length > 3 && (
                                            <p className="text-xs text-muted">
                                                +{material.chapters.length - 3} bab lainnya
                                            </p>
                                        )}
                                    </div>

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
        </div>
    );
}