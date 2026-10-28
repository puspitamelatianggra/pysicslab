/* ============================================================
   SISTEM PENYIMPANAN PROGRES BELAJAR
   Menggunakan localStorage (tersimpan di browser masing-masing siswa)

   CATATAN PENTING:
   - Data tersimpan di browser siswa, BUKAN di server
   - Jika siswa ganti browser/komputer, data hilang
   - Jika siswa hapus cache browser, data hilang
   - Leaderboard hanya menampilkan data lokal (bukan antar siswa)

   Untuk leaderboard GLOBAL (antar siswa), Anda butuh backend seperti:
   - Supabase (gratis): https://supabase.com
   - Firebase (gratis): https://firebase.google.com
   ============================================================ */

import { getLocalDate, XP_UPDATED_EVENT } from './supabaseStorage';

export interface UserProgress {
    // Profil
    name: string;
    level: number;
    xp: number;
    streak: number;
    lastActiveDate: string;

    // Progres Materi
    completedChapters: string[]; // array of chapterId

    // Skor Kuis
    quizScores: { [quizId: number]: number }; // quizId -> skor (0-100)

    // Badge
    earnedBadges: number[]; // array of badge id

    // Statistik
    totalQuizzesTaken: number;
    totalCorrectAnswers: number;
    totalWrongAnswers: number;

    // Aktivitas
    recentActivities: Activity[];

    // XP per hari (untuk grafik) - format: { "2024-01-15": 30, "2024-01-16": 50 }
    xpHistory: { [date: string]: number };
}

export interface Activity {
    id: number;
    text: string;
    xp: string;
    time: string;
    icon: string;
    timestamp: number;
}

const STORAGE_KEY = 'physicslab_progress';

// Default progress untuk siswa baru
const defaultProgress: UserProgress = {
    name: 'Siswa',
    level: 1,
    xp: 0,
    streak: 0,
    lastActiveDate: '',
    completedChapters: [],
    quizScores: {},
    earnedBadges: [1], // Badge "Pemula" otomatis didapat
    totalQuizzesTaken: 0,
    totalCorrectAnswers: 0,
    totalWrongAnswers: 0,
    recentActivities: [],
    xpHistory: {},
};

// ====== FUNGSI UNTUK MEMBACA DATA ======
export function getProgress(): UserProgress {
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (!stored) return { ...defaultProgress };
        return JSON.parse(stored);
    } catch (error) {
        console.error('Error reading progress:', error);
        return { ...defaultProgress };
    }
}

// ====== FUNGSI UNTUK MENYIMPAN DATA ======
export function saveProgress(progress: UserProgress): void {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch (error) {
        console.error('Error saving progress:', error);
    }
}

// ====== FUNGSI UNTUK MENAMBAH XP ======
export function addXP(amount: number, reason: string): UserProgress {
    const progress = getProgress();
    progress.xp += amount;

    // Simpan XP ke history per hari
    const today = getLocalDate();
    if (!progress.xpHistory) {
        progress.xpHistory = {};
    }
    if (!progress.xpHistory[today]) {
        progress.xpHistory[today] = 0;
    }
    progress.xpHistory[today] += amount;

    // Cek naik level (setiap 100 XP naik 1 level)
    const newLevel = Math.floor(progress.xp / 100) + 1;
    if (newLevel > progress.level) {
        progress.level = newLevel;
        addActivity(progress, `Naik ke Level ${newLevel}! 🎉`, '', '🎊');
    }

    // Update streak
    updateStreak(progress);

    // Tambah aktivitas
    addActivity(progress, reason, `+${amount} XP`, '⭐');

    // Cek badge baru
    checkBadges(progress);

    saveProgress(progress);
    window.dispatchEvent(new Event(XP_UPDATED_EVENT));
    return progress;
}

// ====== FUNGSI UNTUK MENYELESAIKAN BAB ======
export function completeChapter(chapterId: string): UserProgress {
    const progress = getProgress();

    if (!progress.completedChapters.includes(chapterId)) {
        progress.completedChapters.push(chapterId);
        saveProgress(progress);
        // addXP() sudah mencatat aktivitas, jadi tidak perlu addActivity() lagi
        return addXP(10, `Bab ${chapterId} selesai`);
    }

    return progress;
}

// ====== FUNGSI UNTUK MENYIMPAN SKOR KUIS ======
export function saveQuizScore(quizId: number, score: number, total: number): UserProgress {
    const progress = getProgress();
    const percentage = Math.round((score / total) * 100);

    progress.quizScores[quizId] = percentage;
    progress.totalQuizzesTaken += 1;
    progress.totalCorrectAnswers += score;
    progress.totalWrongAnswers += (total - score);

    const xpEarned = score * 5;

    saveProgress(progress);
    return addXP(xpEarned, `Kuis selesai dengan skor ${percentage}%`);
}

// ====== FUNGSI UPDATE STREAK ======
function updateStreak(progress: UserProgress): void {
    const today = getLocalDate();

    if (progress.lastActiveDate === today) {
        // Sudah aktif hari ini, tidak perlu update streak
        return;
    }

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = getLocalDate(yesterday);

    if (progress.lastActiveDate === yesterdayStr) {
        // Aktif kemarin, streak bertambah
        progress.streak += 1;
    } else if (progress.lastActiveDate !== today) {
        // Sudah lebih dari 1 hari tidak aktif, streak reset
        progress.streak = 1;
    }

    progress.lastActiveDate = today;
}

// ====== FUNGSI TAMBAH AKTIVITAS ======
function addActivity(progress: UserProgress, text: string, xp: string, icon: string): void {
    const activity: Activity = {
        id: Date.now(),
        text,
        xp,
        time: 'Baru saja',
        icon,
        timestamp: Date.now(),
    };

    progress.recentActivities.unshift(activity);

    // Hanya simpan 10 aktivitas terakhir
    if (progress.recentActivities.length > 10) {
        progress.recentActivities = progress.recentActivities.slice(0, 10);
    }
}

// ====== FUNGSI CEK BADGE ======
function checkBadges(progress: UserProgress): void {
    const badges = [
        { id: 1, condition: () => true }, // Pemula (otomatis)
        { id: 2, condition: () => progress.completedChapters.length >= 3 }, // Rajin
        { id: 3, condition: () => progress.xp >= 200 }, // Jenius
        { id: 4, condition: () => progress.streak >= 7 }, // Kilat
        { id: 5, condition: () => Object.values(progress.quizScores).some(s => s === 100) }, // Sempurna
        { id: 6, condition: () => progress.level >= 5 }, // Master
        { id: 7, condition: () => progress.xp >= 1000 }, // Legenda
        { id: 8, condition: () => progress.completedChapters.length >= 10 }, // Ilmuwan
    ];

    badges.forEach(badge => {
        if (!progress.earnedBadges.includes(badge.id) && badge.condition()) {
            progress.earnedBadges.push(badge.id);
            addActivity(progress, `Mendapat badge baru! 🏆`, '+0 XP', '🏅');
        }
    });
}

// ====== FUNGSI RESET DATA (untuk testing) ======
export function resetProgress(): void {
    localStorage.removeItem(STORAGE_KEY);
}

// ====== FUNGSI HITUNG RATA-RATA SKOR ======
export function getAverageScore(): number {
    const progress = getProgress();
    const scores = Object.values(progress.quizScores);
    if (scores.length === 0) return 0;
    const sum = scores.reduce((a, b) => a + b, 0);
    return Math.round(sum / scores.length);
}

// ====== FUNGSI HITUNG PROGRES PER MATERI ======
export function getSubjectProgress(materialId: number, totalChapters: number): number {
    const progress = getProgress();
    const completed = progress.completedChapters.filter(id =>
        id.startsWith(`${materialId}-`)
    ).length;
    return Math.round((completed / totalChapters) * 100);
}
