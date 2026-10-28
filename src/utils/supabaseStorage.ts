/* ============================================================
   FUNGSI SYNC DATA KE SUPABASE

   Semua data tersimpan di cloud database Supabase
   OPTIMIZED: Pakai getSession() bukan getUser() untuk performa
   ============================================================ */

import { supabase, isSupabaseConfigured as isConfigured } from '../lib/supabase';

// Re-export untuk dipakai di halaman lain
export const isSupabaseConfigured = isConfigured;

// ====== HELPER FUNCTION ======

// DIPERBAIKI: Pakai getSession() yang baca dari cache browser, bukan request ke server
async function getUserId(): Promise<string | null> {
    const { data } = await supabase.auth.getSession();
    return data.session?.user.id ?? null;
}

// ====== FUNGSI AUTH (Login/Register) ======

// Register siswa baru
export async function registerStudent(email: string, password: string, name: string, className?: string) {
    if (!isSupabaseConfigured()) {
        return { error: { message: 'Supabase belum dikonfigurasi.' } };
    }

    try {
        const { data, error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                data: {
                    name: name,
                    class_name: className || ''
                }
            }
        });

        if (error) {
            console.error('SignUp error:', error);
            return { error };
        }

        if (!data.user) {
            return { error: { message: 'Gagal membuat akun' } };
        }

        // Jika "Confirm email" aktif di Supabase, session belum ada sampai email dikonfirmasi
        return { data: data.user, needsEmailConfirmation: !data.session };
    } catch (err) {
        console.error('Register exception:', err);
        return { error: { message: 'Terjadi kesalahan saat mendaftar' } };
    }
}

// Login siswa
export async function loginStudent(email: string, password: string) {
    if (!isSupabaseConfigured()) {
        return { error: { message: 'Supabase belum dikonfigurasi' } };
    }

    try {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        });

        if (error) {
            console.error('Login error:', error);
            return { error };
        }

        // DIPERBAIKI: last_active TIDAK diupdate di sini. Kalau diupdate saat login,
        // addXpToStudent() mengira siswa sudah aktif hari ini dan streak tidak pernah naik.

        return { data: data.user };
    } catch (err) {
        console.error('Login exception:', err);
        return { error: { message: 'Terjadi kesalahan saat login' } };
    }
}

// Logout
export async function logoutStudent() {
    try {
        const { error } = await supabase.auth.signOut();
        return { error };
    } catch (err) {
        console.error('Logout exception:', err);
        return { error: { message: 'Terjadi kesalahan saat logout' } };
    }
}

// ====== FUNGSI DATA STUDENT ======

// Ambil baris student milik user yang login. Jika belum ada (misalnya trigger
// pembuat baris di database belum jalan), baris dibuat dari data pendaftaran.
async function getOrCreateStudentRow() {
    const { data: sessionData } = await supabase.auth.getSession();
    const user = sessionData.session?.user;
    if (!user) return { data: null, error: null };

    const { data, error } = await supabase
        .from('students')
        .select('*')
        .eq('id', user.id)
        .maybeSingle();

    if (error || data) return { data, error };

    console.warn('Baris student belum ada, membuat baru...');
    const { data: created, error: insertError } = await supabase
        .from('students')
        .insert({
            id: user.id,
            email: user.email,
            name: user.user_metadata?.name || 'Siswa',
            class_name: user.user_metadata?.class_name || '',
            level: 1,
            xp: 0,
            streak: 0,
        })
        .select()
        .single();

    return { data: created, error: insertError };
}

export async function getStudentData() {
    if (!isSupabaseConfigured()) return { data: null };

    try {
        const { data, error } = await getOrCreateStudentRow();

        if (error) {
            console.error('Get student data error:', error);
            return { data: null };
        }

        return { data };
    } catch (err) {
        console.error('Get student data exception:', err);
        return { data: null };
    }
}

// DIPERBAIKI: Pakai getUserId() bukan getUser()
export async function addXpToStudent(amount: number, reason: string, icon: string = '⭐'): Promise<boolean> {
    if (!isSupabaseConfigured()) return false;

    try {
        const userId = await getUserId();
        if (!userId) return false;

        // 1. Ambil data student (dibuat otomatis jika belum ada)
        const { data: student, error: selectError } = await getOrCreateStudentRow();

        if (selectError || !student) {
            console.error('Student not found:', selectError);
            return false;
        }

        // 2. Hitung XP dan level baru
        const newXp = student.xp + amount;
        const newLevel = Math.floor(newXp / 100) + 1;

        // 3. Update streak
        const today = getLocalDate();
        let newStreak = student.streak;

        if (student.last_active !== today) {
            const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);
            const yesterdayStr = getLocalDate(yesterday);

            if (student.last_active === yesterdayStr) {
                newStreak += 1;
            } else {
                newStreak = 1;
            }
        }

        // 4. Update student
        const { error: updateError } = await supabase
            .from('students')
            .update({
                xp: newXp,
                level: newLevel,
                streak: newStreak,
                last_active: today
            })
            .eq('id', userId);

        if (updateError) {
            console.error('Update XP gagal:', updateError);
            return false;
        }

        // 5. Tambah activity log
        await supabase
            .from('activities')
            .insert({
                student_id: userId,
                text: reason,
                xp: '+' + amount + ' XP',
                icon: icon,
            });

        // Beri tahu Sidebar agar angka XP langsung diperbarui
        window.dispatchEvent(new Event(XP_UPDATED_EVENT));

        return true;
    } catch (err) {
        console.error('Add XP exception:', err);
        return false;
    }
}

// ====== FUNGSI CHAPTER PROGRESS ======

// DIPERBAIKI: Pakai getUserId() bukan getUser()
export async function completeChapterCloud(chapterId: string) {
    if (!isSupabaseConfigured()) return { error: { message: 'Not configured' } };

    try {
        const userId = await getUserId();
        if (!userId) return { error: { message: 'Not logged in' } };

        // Cek apakah sudah selesai
        const { data: existing } = await supabase
            .from('chapter_progress')
            .select('id')
            .eq('student_id', userId)
            .eq('chapter_id', chapterId)
            .maybeSingle();

        if (existing) return { data: null, alreadyCompleted: true };

        // Insert progress baru
        const { error: insertError } = await supabase
            .from('chapter_progress')
            .insert({
                student_id: userId,
                chapter_id: chapterId,
            });

        if (insertError) {
            console.error('Insert chapter progress error:', insertError);
            return { error: insertError };
        }

        // Tambah XP
        const xpSuccess = await addXpToStudent(10, 'Menyelesaikan bab ' + chapterId, '📖');

        if (!xpSuccess) {
            console.warn('XP addition failed but chapter marked as complete');
        }

        return { data: { chapterId: chapterId } };
    } catch (err) {
        console.error('Complete chapter exception:', err);
        return { error: { message: 'Terjadi kesalahan' } };
    }
}

// DIPERBAIKI: Pakai getUserId() bukan getUser()
export async function getCompletedChapters() {
    if (!isSupabaseConfigured()) return { data: [] };

    try {
        const userId = await getUserId();
        if (!userId) return { data: [] };

        const { data, error } = await supabase
            .from('chapter_progress')
            .select('chapter_id')
            .eq('student_id', userId);

        if (error) return { error };

        const chapterIds = data ? data.map(d => d.chapter_id) : [];
        return { data: chapterIds };
    } catch (err) {
        console.error('Get completed chapters exception:', err);
        return { data: [] };
    }
}

// ====== FUNGSI QUIZ SCORES ======

// DIPERBAIKI: Pakai getUserId() bukan getUser()
export async function saveQuizScoreCloud(quizId: number, score: number, total: number) {
    if (!isSupabaseConfigured()) return;

    try {
        const userId = await getUserId();
        if (!userId) return;

        const percentage = Math.round((score / total) * 100);

        // Insert skor baru
        const { error: insertError } = await supabase
            .from('quiz_scores')
            .insert({
                student_id: userId,
                quiz_id: quizId,
                score: score,
                total_questions: total,
                percentage: percentage,
            });

        if (insertError) {
            console.error('Insert quiz score error:', insertError);
            return;
        }

        // Tambah XP (5 XP per jawaban benar)
        const xpEarned = score * 5;
        await addXpToStudent(xpEarned, 'Skor ' + percentage + '% di kuis', '🎯');
    } catch (err) {
        console.error('Save quiz score exception:', err);
    }
}

// DIPERBAIKI: Pakai getUserId() bukan getUser()
export async function getStudentQuizScores() {
    if (!isSupabaseConfigured()) return { data: [] };

    try {
        const userId = await getUserId();
        if (!userId) return { data: [] };

        const { data, error } = await supabase
            .from('quiz_scores')
            .select('*')
            .eq('student_id', userId)
            .order('completed_at', { ascending: false });

        if (error) return { error };
        return { data: data || [] };
    } catch (err) {
        console.error('Get quiz scores exception:', err);
        return { data: [] };
    }
}

// ====== FUNGSI LEADERBOARD ======

export async function getLeaderboard() {
    if (!isSupabaseConfigured()) return { data: [] };

    try {
        const { data, error } = await supabase
            .from('students')
            .select('id, name, level, xp, streak, class_name')
            .order('xp', { ascending: false })
            .limit(50);

        if (error) return { error };
        return { data: data || [] };
    } catch (err) {
        console.error('Get leaderboard exception:', err);
        return { data: [] };
    }
}

// ====== FUNGSI ACTIVITIES ======

// DIPERBAIKI: Pakai getUserId() bukan getUser()
export async function getRecentActivities(limit: number = 10) {
    if (!isSupabaseConfigured()) return { data: [] };

    try {
        const userId = await getUserId();
        if (!userId) return { data: [] };

        const { data, error } = await supabase
            .from('activities')
            .select('*')
            .eq('student_id', userId)
            .order('created_at', { ascending: false })
            .limit(limit);

        if (error) return { error };
        return { data: data || [] };
    } catch (err) {
        console.error('Get activities exception:', err);
        return { data: [] };
    }
}

// ====== FUNGSI GRAFIK XP ======

// XP per hari selama `days` hari terakhir, dihitung dari tabel activities.
// Hasil: { "2026-10-28": 30, "2026-10-27": 15, ... }
export async function getXpHistory(days: number = 7) {
    if (!isSupabaseConfigured()) return { data: {} };

    try {
        const userId = await getUserId();
        if (!userId) return { data: {} };

        const since = new Date();
        since.setHours(0, 0, 0, 0);
        since.setDate(since.getDate() - (days - 1));

        const { data, error } = await supabase
            .from('activities')
            .select('xp, created_at')
            .eq('student_id', userId)
            .gte('created_at', since.toISOString());

        if (error) return { error, data: {} };

        const history: { [date: string]: number } = {};
        for (const row of data || []) {
            const amount = parseInt(String(row.xp).replace(/[^0-9-]/g, ''), 10) || 0;
            const date = getLocalDate(new Date(row.created_at));
            history[date] = (history[date] || 0) + amount;
        }
        return { data: history };
    } catch (err) {
        console.error('Get XP history exception:', err);
        return { data: {} };
    }
}

// ====== FUNGSI BADGE ======

// Aturan badge sama dengan versi lokal (lihat checkBadges di storage.ts)
export function calculateBadges(stats: {
    xp: number;
    level: number;
    streak: number;
    completedChapters: number;
    quizPercentages: number[];
}): number[] {
    const rules: [number, boolean][] = [
        [1, true],                                   // Pemula
        [2, stats.completedChapters >= 3],           // Rajin
        [3, stats.xp >= 200],                        // Jenius
        [4, stats.streak >= 7],                      // Kilat
        [5, stats.quizPercentages.some(p => p === 100)], // Sempurna
        [6, stats.level >= 5],                       // Master
        [7, stats.xp >= 1000],                       // Legenda
        [8, stats.completedChapters >= 10],          // Ilmuwan
    ];
    return rules.filter(([, earned]) => earned).map(([id]) => id);
}

// ====== HELPER FUNCTIONS ======

// Nama event yang dikirim setiap kali XP bertambah (didengar oleh Sidebar)
export const XP_UPDATED_EVENT = 'xp-updated';

// Pakai local timezone, bukan UTC
export function getLocalDate(date: Date = new Date()): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

export function withTimeout<T>(promise: PromiseLike<T>, ms = 8000): Promise<T> {
    return Promise.race([
        promise,
        new Promise<T>((_, reject) =>
            setTimeout(() => reject(new Error('Koneksi ke server terlalu lama')), ms)
        ),
    ]);
}