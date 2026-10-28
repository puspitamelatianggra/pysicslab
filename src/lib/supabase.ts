/* ============================================================
   KONFIGURASI SUPABASE

   ⚠️ PENTING: ISI URL DAN KEY ANDA DI SINI!

   Cara mendapatkan URL dan KEY:
   1. Login ke https://supabase.com
   2. Buka project Anda
   3. Klik "Settings" (ikon gear di sidebar kiri)
   4. Klik "API"
   5. Copy "Project URL" → paste di SUPABASE_URL
   6. Copy "anon public" key → paste di SUPABASE_ANON_KEY

   ============================================================ */

import { createClient, SupabaseClient } from '@supabase/supabase-js';

// ====== ISI URL DAN KEY ANDA DI SINI ======
// (diberi tipe `string` agar TypeScript tidak protes saat dibandingkan di bawah)
const SUPABASE_URL: string = 'https://uahmcgvmnwxzktqkngsw.supabase.co';
const SUPABASE_ANON_KEY: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVhaG1jZ3Ztbnd4emt0cWtuZ3N3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTA3NDc5MDIsImV4cCI6MjEwNjMyMzkwMn0.oyPCsHDgK4KuXihCDTiqqkRmpnOKAAs-H5mrughb0Xo';
// ============================================

// Validasi konfigurasi
const isConfigured: boolean =
    SUPABASE_URL !== 'GANTI_DENGAN_URL_SUPABASE_ANDA' &&
    SUPABASE_ANON_KEY !== 'GANTI_DENGAN_ANON_KEY_ANDA';

// Buat client Supabase (hanya jika dikonfigurasi)
let supabaseClient: SupabaseClient | null = null;

if (isConfigured) {
    try {
        supabaseClient = createClient(
            SUPABASE_URL,
            SUPABASE_ANON_KEY,
            {
                auth: {
                    persistSession: true,
                    autoRefreshToken: true,
                }
            }
        );
    } catch (error) {
        console.log('Failed to create Supabase client:', error);
        supabaseClient = null;
    }
}

// Proxy object yang aman - jika Supabase tidak dikonfigurasi, return dummy
export const supabase: SupabaseClient = (isConfigured && supabaseClient)
    ? supabaseClient
    : ({
        auth: {
            getSession: async () => ({ data: { session: null }, error: null }),
            getUser: async () => ({ data: { user: null }, error: null }),
            signInWithPassword: async () => ({ data: { user: null, session: null }, error: { message: 'Not configured' } }),
            signUp: async () => ({ data: { user: null, session: null }, error: { message: 'Not configured' } }),
            signOut: async () => ({ error: null }),
            onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => { } } } }),
        },
        from: () => ({
            select: () => ({
                eq: () => ({
                    single: async () => ({ data: null, error: null }),
                    order: () => ({ limit: async () => ({ data: [], error: null }) }),
                    limit: async () => ({ data: [], error: null }),
                }),
                order: () => ({ limit: async () => ({ data: [], error: null }) }),
            }),
            insert: async () => ({ error: null }),
            update: () => ({ eq: async () => ({ error: null }) }),
        }),
    } as any);

// Fungsi untuk cek apakah Supabase sudah dikonfigurasi
export function isSupabaseConfigured(): boolean {
    return isConfigured;
}

// Tipe data untuk tabel students
export interface Student {
    id: string;
    email: string;
    name: string;
    class_name?: string;
    level: number;
    xp: number;
    streak: number;
    last_active: string;
    created_at: string;
}

// Tipe data untuk tabel quiz_scores
export interface QuizScore {
    id: string;
    student_id: string;
    quiz_id: number;
    score: number;
    total_questions: number;
    percentage: number;
    completed_at: string;
}

// Tipe data untuk tabel chapter_progress
export interface ChapterProgress {
    id: string;
    student_id: string;
    chapter_id: string;
    completed_at: string;
}

// Tipe data untuk tabel activities
export interface Activity {
    id: string;
    student_id: string;
    text: string;
    xp: string;
    icon: string;
    created_at: string;
}
