import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, FlaskConical, Filter, X } from 'lucide-react';
import { simulations } from '../data/simulations';

export default function Lab() {
    const [selectedSim, setSelectedSim] = useState<number | null>(null);
    const [filterCategory, setFilterCategory] = useState<string>('all');

    const categories = ['all', ...new Set(simulations.map(s => s.category))];
    const filteredSims = filterCategory === 'all'
        ? simulations
        : simulations.filter(s => s.category === filterCategory);

    const selectedSimulation = simulations.find(s => s.id === selectedSim);

    return (
        <div className="min-h-screen bg-cream p-4 md:p-8">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8"
                >
                    <h1 className="text-3xl md:text-4xl font-bold text-dark mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                        Laboratorium Virtual 🔬
                    </h1>
                    <p className="text-lg text-gray" style={{ fontFamily: 'Inter, sans-serif' }}>
                        Eksplorasi konsep fisika melalui simulasi interaktif
                    </p>
                </motion.div>

                {/* Filter */}
                <div className="flex items-center gap-3 mb-6 overflow-x-auto pb-2">
                    <Filter size={18} className="text-dark flex-shrink-0" strokeWidth={3} />
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setFilterCategory(cat)}
                            className={`flex-shrink-0 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${filterCategory === cat
                                ? 'bg-lime border-[3px] border-dark shadow-[3px_3px_0_#1A1A1A]'
                                : 'bg-white border-[3px] border-dark text-gray hover:bg-lime/50'
                                }`}
                            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                        >
                            {cat === 'all' ? 'Semua' : cat}
                        </button>
                    ))}
                </div>

                {/* Simulation Modal */}
                {selectedSimulation && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
                        onClick={() => setSelectedSim(null)}
                    >
                        <div
                            className="bg-white border-[3px] border-dark rounded-xl w-full max-w-5xl max-h-[90vh] overflow-hidden shadow-[6px_6px_0_#1A1A1A]"
                            onClick={e => e.stopPropagation()}
                        >
                            <div className="flex items-center justify-between p-4 border-b-[3px] border-dark bg-lime">
                                <div className="flex items-center gap-3">
                                    <span className="text-2xl">{selectedSimulation.icon}</span>
                                    <div>
                                        <h3 className="text-dark font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                                            {selectedSimulation.title}
                                        </h3>
                                        <p className="text-xs text-gray" style={{ fontFamily: 'Inter, sans-serif' }}>
                                            {selectedSimulation.category}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <a
                                        href={selectedSimulation.fallbackUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-orange text-white text-sm font-semibold border-[2px] border-dark shadow-[2px_2px_0_#1A1A1A] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0_#1A1A1A] transition-all"
                                        style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                                    >
                                        <ExternalLink size={14} />
                                        Buka di Tab Baru
                                    </a>
                                    <button
                                        onClick={() => setSelectedSim(null)}
                                        className="p-2 rounded-lg hover:bg-white border-[2px] border-dark transition-colors"
                                    >
                                        <X size={20} className="text-dark" />
                                    </button>
                                </div>
                            </div>
                            <div className="aspect-video bg-cream">
                                <iframe
                                    src={selectedSimulation.iframeUrl}
                                    className="w-full h-full"
                                    title={selectedSimulation.title}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
                                    allowFullScreen
                                />
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* Simulations Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSims.map((sim, index) => (
                        <motion.div
                            key={sim.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white border-[3px] border-dark rounded-xl overflow-hidden shadow-[4px_4px_0_#1A1A1A] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#1A1A1A] transition-all group"
                        >
                            {/* Preview Area */}
                            <div className="aspect-video bg-lime relative overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-6xl group-hover:scale-110 transition-transform">{sim.icon}</span>
                                </div>
                                <button
                                    onClick={() => setSelectedSim(sim.id)}
                                    className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity"
                                >
                                    <span className="px-4 py-2 rounded-lg bg-orange text-white font-bold text-sm border-[2px] border-dark shadow-[2px_2px_0_#1A1A1A]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                                        Jalankan Simulasi
                                    </span>
                                </button>
                            </div>

                            {/* Info */}
                            <div className="p-5">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="px-2 py-0.5 rounded-lg bg-cream border-[2px] border-dark text-xs font-bold text-dark" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                                        {sim.category}
                                    </span>
                                </div>
                                <h3 className="text-lg font-bold text-dark mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                                    {sim.title}
                                </h3>
                                <p className="text-sm text-gray mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                                    {sim.description}
                                </p>
                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={() => setSelectedSim(sim.id)}
                                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-lime border-[3px] border-dark text-dark text-sm font-bold shadow-[3px_3px_0_#1A1A1A] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0_#1A1A1A] transition-all"
                                        style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                                    >
                                        <FlaskConical size={14} />
                                        Buka Simulasi
                                    </button>
                                    <a
                                        href={sim.fallbackUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 rounded-lg border-[3px] border-dark text-gray hover:text-orange hover:border-orange transition-colors shadow-[3px_3px_0_#1A1A1A]"
                                    >
                                        <ExternalLink size={16} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Info Box */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-8 bg-orange border-[3px] border-dark rounded-xl p-6 shadow-[4px_4px_0_#1A1A1A]"
                >
                    <div className="flex items-start gap-4">
                        <FlaskConical className="text-white flex-shrink-0 mt-1" size={24} strokeWidth={3} />
                        <div>
                            <h4 className="text-white font-bold mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                                Tentang Simulasi
                            </h4>
                            <p className="text-white/90 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                                Simulasi di atas disediakan oleh PhET Interactive Simulations (Universitas Colorado Boulder).
                                Jika simulasi tidak dapat dimuat langsung, klik tombol "Buka di Tab Baru" untuk mengaksesnya.
                                Semua simulasi bersifat gratis dan open-source.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
