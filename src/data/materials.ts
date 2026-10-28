/* ============================================================
   ====== INTERFACE MATERI (BASE TYPE) ======
   ============================================================

   File ini berisi interface dasar untuk materi.
   Data materi sebenarnya ada di:
   - physics-materials.ts (untuk Fisika)
   - math-materials.ts (untuk Matematika)

   ============================================================ */

export interface Chapter {
  chapterId: string;
  title: string;
  content: string;
  formula?: string;
  example?: string;
  videoUrl?: string; // ====== TEMPAT INPUT LINK VIDEO DISINI ======
}

export interface Material {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: string;
  chapters: Chapter[];
}
