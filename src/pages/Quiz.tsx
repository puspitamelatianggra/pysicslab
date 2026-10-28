import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, ArrowRight, RotateCcw, Trophy, Target, Zap } from 'lucide-react';
import { quizzes, Quiz } from '../data/quizzes';
import { physicsMaterials } from '../data/physics-materials';
import { mathMaterials } from '../data/math-materials';
import { saveQuizScore, getProgress } from '../utils/storage';
import { saveQuizScoreCloud, isSupabaseConfigured } from '../utils/supabaseStorage';
import { supabase } from '../lib/supabase';

// Combine semua materi untuk lookup
const allMaterials = [...physicsMaterials, ...mathMaterials];

type QuizState = 'select' | 'playing' | 'result';

export default function QuizPage() {
    const [quizState, setQuizState] = useState<QuizState>('select');
    const [selectedQuiz, setSelectedQuiz] = useState<Quiz | null>(null);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [showExplanation, setShowExplanation] = useState(false);
    const [score, setScore] = useState(0);
    const [answers, setAnswers] = useState<number[]>([]);
    const [useSupabase, setUseSupabase] = useState(false);

    const startQuiz = async (quiz: Quiz) => {
        if (isSupabaseConfigured()) {
            const { data: { user } } = await supabase.auth.getUser();
            setUseSupabase(!!user);
        }
        setSelectedQuiz(quiz);
        setCurrentQuestion(0);
        setSelectedAnswer(null);
        setShowExplanation(false);
        setScore(0);
        setAnswers([]);
        setQuizState('playing');
    };

    const handleAnswer = (answerIndex: number) => {
        if (showExplanation) return;
        setSelectedAnswer(answerIndex);
        setShowExplanation(true);
        if (answerIndex === selectedQuiz!.questions[currentQuestion].correctAnswer) {
            setScore(score + 1);
        }
        setAnswers([...answers, answerIndex]);
    };

    const nextQuestion = () => {
        if (currentQuestion < selectedQuiz!.questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setSelectedAnswer(null);
            setShowExplanation(false);
        } else {
            // Simpan skor ke Supabase atau localStorage
            if (useSupabase) {
                saveQuizScoreCloud(selectedQuiz!.id, score, selectedQuiz!.questions.length);
            } else {
                saveQuizScore(selectedQuiz!.id, score, selectedQuiz!.questions.length);
            }
            setQuizState('result');
        }
    };

    const resetQuiz = () => {
        setQuizState('select');
        setSelectedQuiz(null);
    };

    // Quiz Selection Screen
    if (quizState === 'select') {
        return (
            <div className="min-h-screen bg-cream p-4 md:p-8">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-8"
                    >
                        <h1 className="text-3xl md:text-4xl font-bold text-dark mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                            Ruang Kuis 🎯
                        </h1>
                        <p className="text-lg text-gray" style={{ fontFamily: 'Inter, sans-serif' }}>
                            Uji pemahamanmu dengan kuis interaktif dan dapatkan XP!
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {quizzes.map((quiz, index) => {
                            const material = allMaterials.find((m: any) => m.id === quiz.materialId);
                            return (
                                <motion.div
                                    key={quiz.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white border-[3px] border-dark rounded-xl p-6 shadow-[4px_4px_0_#1A1A1A] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#1A1A1A] transition-all"
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${material?.color || 'from-lime to-orange'} border-[3px] border-dark flex items-center justify-center text-xl shadow-[3px_3px_0_#1A1A1A]`}>
                                            {material?.icon || '📝'}
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-dark" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                                                {quiz.title}
                                            </h3>
                                            <p className="text-sm text-gray" style={{ fontFamily: 'Inter, sans-serif' }}>
                                                {material?.title}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4 mb-4 text-sm text-gray" style={{ fontFamily: 'Inter, sans-serif' }}>
                                        <span className="flex items-center gap-1">
                                            <Target size={14} />
                                            {quiz.questions.length} Soal
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Zap size={14} />
                                            +{quiz.questions.length * 5} XP
                                        </span>
                                    </div>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {['mudah', 'sedang', 'sulit'].map(diff => {
                                            const count = quiz.questions.filter(q => q.difficulty === diff).length;
                                            if (count === 0) return null;
                                            const colors = {
                                                mudah: 'bg-green-100 text-green-700 border-green-500',
                                                sedang: 'bg-yellow-100 text-yellow-700 border-yellow-500',
                                                sulit: 'bg-red-100 text-red-700 border-red-500'
                                            };
                                            return (
                                                <span key={diff} className={`px-2 py-0.5 rounded-lg text-xs font-bold border-[2px] ${colors[diff as keyof typeof colors]}`} style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                                                    {diff} ({count})
                                                </span>
                                            );
                                        })}
                                    </div>

                                    <button
                                        onClick={() => startQuiz(quiz)}
                                        className="w-full py-3 rounded-xl bg-orange text-white font-bold border-[3px] border-dark shadow-[3px_3px_0_#1A1A1A] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0_#1A1A1A] transition-all"
                                        style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                                    >
                                        Mulai Kuis
                                    </button>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }

    // Quiz Playing Screen
    if (quizState === 'playing' && selectedQuiz) {
        const question = selectedQuiz.questions[currentQuestion];
        const progress = ((currentQuestion + 1) / selectedQuiz.questions.length) * 100;

        return (
            <div className="min-h-screen bg-cream p-4 md:p-8">
                <div className="max-w-3xl mx-auto">
                    {/* Progress Bar */}
                    <div className="mb-6">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-sm text-gray" style={{ fontFamily: 'Inter, sans-serif' }}>
                                Soal {currentQuestion + 1} dari {selectedQuiz.questions.length}
                            </span>
                            <span className="text-sm text-orange font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                                Skor: {score}/{currentQuestion + (showExplanation ? 1 : 0)}
                            </span>
                        </div>
                        <div className="h-3 bg-white border-[3px] border-dark rounded-full overflow-hidden">
                            <motion.div
                                animate={{ width: `${progress}%` }}
                                className="h-full bg-gradient-to-r from-lime to-orange"
                            />
                        </div>
                    </div>

                    {/* Question Card */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentQuestion}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="bg-white border-[3px] border-dark rounded-xl p-6 md:p-8 shadow-[4px_4px_0_#1A1A1A]"
                        >
                            {/* Difficulty Badge */}
                            <div className="mb-4">
                                <span className={`px-3 py-1 rounded-lg text-xs font-bold border-[2px] ${question.difficulty === 'mudah' ? 'bg-green-100 text-green-700 border-green-500' :
                                    question.difficulty === 'sedang' ? 'bg-yellow-100 text-yellow-700 border-yellow-500' :
                                        'bg-red-100 text-red-700 border-red-500'
                                    }`} style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                                    {question.difficulty.charAt(0).toUpperCase() + question.difficulty.slice(1)}
                                </span>
                            </div>

                            {/* Question */}
                            <h2 className="text-xl md:text-2xl font-bold text-dark mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                                {question.question}
                            </h2>

                            {/* Options */}
                            <div className="space-y-3 mb-6">
                                {question.options.map((option, index) => {
                                    const isSelected = selectedAnswer === index;
                                    const isCorrect = index === question.correctAnswer;
                                    const showResult = showExplanation;

                                    let optionClass = 'bg-cream border-[3px] border-dark hover:border-orange';
                                    if (showResult) {
                                        if (isCorrect) {
                                            optionClass = 'bg-green-100 border-[3px] border-green-500';
                                        } else if (isSelected && !isCorrect) {
                                            optionClass = 'bg-red-100 border-[3px] border-red-500';
                                        } else {
                                            optionClass = 'bg-cream border-[3px] border-dark opacity-50';
                                        }
                                    } else if (isSelected) {
                                        optionClass = 'bg-lime border-[3px] border-dark';
                                    }

                                    return (
                                        <button
                                            key={index}
                                            onClick={() => handleAnswer(index)}
                                            disabled={showExplanation}
                                            className={`w-full text-left p-4 rounded-xl transition-all shadow-[3px_3px_0_#1A1A1A] ${optionClass}`}
                                        >
                                            <div className="flex items-center gap-3">
                                                <span className="w-8 h-8 rounded-lg bg-white border-[2px] border-dark flex items-center justify-center text-sm font-bold text-dark" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                                                    {String.fromCharCode(65 + index)}
                                                </span>
                                                <span className="text-dark flex-1" style={{ fontFamily: 'Inter, sans-serif' }}>{option}</span>
                                                {showResult && isCorrect && (
                                                    <CheckCircle size={20} className="text-green-600" />
                                                )}
                                                {showResult && isSelected && !isCorrect && (
                                                    <XCircle size={20} className="text-red-600" />
                                                )}
                                            </div>
                                        </button>
                                    );
                                })}
                            </div>

                            {/* Explanation */}
                            {showExplanation && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="bg-lime border-[3px] border-dark rounded-xl p-4 mb-6 shadow-[3px_3px_0_#1A1A1A]"
                                >
                                    <h4 className="text-dark font-bold mb-2 flex items-center gap-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                                        <Zap size={16} /> Pembahasan
                                    </h4>
                                    <p className="text-gray text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>{question.explanation}</p>
                                </motion.div>
                            )}

                            {/* Next Button */}
                            {showExplanation && (
                                <motion.button
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    onClick={nextQuestion}
                                    className="w-full py-3 rounded-xl bg-orange text-white font-bold border-[3px] border-dark shadow-[4px_4px_0_#1A1A1A] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#1A1A1A] transition-all flex items-center justify-center gap-2"
                                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                                >
                                    {currentQuestion < selectedQuiz.questions.length - 1 ? (
                                        <>Soal Berikutnya <ArrowRight size={18} /></>
                                    ) : (
                                        <>Lihat Hasil <Trophy size={18} /></>
                                    )}
                                </motion.button>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        );
    }

    // Quiz Result Screen
    if (quizState === 'result' && selectedQuiz) {
        const percentage = Math.round((score / selectedQuiz.questions.length) * 100);
        const xpEarned = score * 5;

        return (
            <div className="min-h-screen bg-cream p-4 md:p-8 flex items-center justify-center">
                <div className="max-w-lg w-full">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-white border-[3px] border-dark rounded-xl p-8 text-center shadow-[6px_6px_0_#1A1A1A]"
                    >
                        {/* Score Circle */}
                        <div className="relative w-40 h-40 mx-auto mb-6">
                            <svg className="w-full h-full transform -rotate-90">
                                <circle cx="80" cy="80" r="70" stroke="#FFF7ED" strokeWidth="8" fill="none" />
                                <motion.circle
                                    cx="80" cy="80" r="70"
                                    stroke={percentage >= 70 ? '#10b981' : percentage >= 50 ? '#f59e0b' : '#ef4444'}
                                    strokeWidth="8"
                                    fill="none"
                                    strokeDasharray={`${2 * Math.PI * 70}`}
                                    initial={{ strokeDashoffset: 2 * Math.PI * 70 }}
                                    animate={{ strokeDashoffset: 2 * Math.PI * 70 * (1 - percentage / 100) }}
                                    transition={{ duration: 1.5, delay: 0.5 }}
                                    strokeLinecap="round"
                                />
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div>
                                    <p className="text-3xl font-bold text-dark" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{percentage}%</p>
                                    <p className="text-sm text-gray" style={{ fontFamily: 'Inter, sans-serif' }}>{score}/{selectedQuiz.questions.length}</p>
                                </div>
                            </div>
                        </div>

                        {/* Result Message */}
                        <h2 className="text-2xl font-bold text-dark mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                            {percentage >= 80 ? '🎉 Luar Biasa!' : percentage >= 60 ? '👍 Bagus!' : '💪 Terus Belajar!'}
                        </h2>
                        <p className="text-gray mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                            {percentage >= 80
                                ? 'Kamu menguasai materi ini dengan sangat baik!'
                                : percentage >= 60
                                    ? 'Pemahaman yang baik! Terus tingkatkan.'
                                    : 'Jangan menyerah! Coba baca ulang materinya.'}
                        </p>

                        {/* XP Earned */}
                        <div className="bg-lime border-[3px] border-dark rounded-xl p-4 mb-6 shadow-[3px_3px_0_#1A1A1A]">
                            <div className="flex items-center justify-center gap-2">
                                <Zap className="text-dark" size={20} />
                                <span className="text-xl font-bold text-dark" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>+{xpEarned} XP</span>
                            </div>
                            <p className="text-xs text-gray mt-1" style={{ fontFamily: 'Inter, sans-serif' }}>diperoleh dari kuis ini</p>
                        </div>

                        {/* Answer Summary */}
                        <div className="grid grid-cols-5 gap-2 mb-6">
                            {selectedQuiz.questions.map((_, index) => (
                                <div
                                    key={index}
                                    className={`w-full aspect-square rounded-lg flex items-center justify-center text-sm font-bold border-[2px] ${answers[index] === selectedQuiz.questions[index].correctAnswer
                                        ? 'bg-green-100 text-green-700 border-green-500'
                                        : 'bg-red-100 text-red-700 border-red-500'
                                        }`}
                                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                                >
                                    {index + 1}
                                </div>
                            ))}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-3">
                            <button
                                onClick={() => startQuiz(selectedQuiz)}
                                className="flex-1 py-3 rounded-xl bg-white border-[3px] border-dark text-dark font-bold hover:bg-lime/50 transition-colors flex items-center justify-center gap-2 shadow-[3px_3px_0_#1A1A1A]"
                                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                            >
                                <RotateCcw size={16} /> Ulangi
                            </button>
                            <button
                                onClick={resetQuiz}
                                className="flex-1 py-3 rounded-xl bg-orange text-white font-bold border-[3px] border-dark hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#1A1A1A] transition-all shadow-[3px_3px_0_#1A1A1A]"
                                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                            >
                                Kuis Lainnya
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        );
    }

    return null;
}
