# CLAUDE.md

Fermionsplus (repo: PhysicsLab): a self-study website for Indonesian high-school (SMA) physics and math, with lessons, embedded virtual labs, quizzes, and XP/level/streak gamification. The UI text, code comments, and content are all in **Bahasa Indonesia**, so keep new user-facing text and comments in Indonesian.

## Commands

```bash
npm run dev        # Vite dev server
npm run build      # production build → dist/
npm run typecheck  # tsc --noEmit (the only automated check; there are no tests or linter)
```

## Stack

React 18 + TypeScript (strict), Vite 6, Tailwind CSS v4 (via `@tailwindcss/vite`, configured in CSS rather than a config file), react-router-dom v6 with **`HashRouter`** (URLs look like `#/materials/physics/1`), framer-motion, lucide-react icons, recharts, date-fns (`id` locale), and Supabase for auth and cloud data.

## Architecture

### Two runtime modes ([src/App.tsx](src/App.tsx))
- **Local mode**: used when `isSupabaseConfigured()` is false. There is no login, every route is open, and progress lives in `localStorage` (key `fermionsplus_progress`) through [src/utils/storage.ts](src/utils/storage.ts).
- **Supabase mode**: `/dashboard`, `/quiz`, and `/leaderboard` require login. A logged-in user gets the right-hand [Sidebar](src/components/Sidebar.tsx), and `main` gets `lg:pr-96`. Cloud data goes through [src/utils/supabaseStorage.ts](src/utils/supabaseStorage.ts).

Pages decide at runtime which backend to use: when Supabase is configured *and* a user is signed in they call the `*Cloud` / Supabase functions, and otherwise they fall back to `storage.ts`. If you add a progress feature, implement it in **both** storage modules.

[src/lib/supabase.ts](src/lib/supabase.ts) holds the hard-coded project URL and anon key. When those are not configured, it exports a stub client that returns no data. Tables: `students`, `quiz_scores`, `chapter_progress`, `activities`. Their TS interfaces are in the same file. No SQL or migrations are kept in this repo.

### Gamification rules (keep both modules in sync)
- Finishing a chapter gives +10 XP. A quiz gives `score * 5` XP.
- `level = floor(xp / 100) + 1`.
- The streak goes up when `last_active` was yesterday and resets to 1 otherwise. Dates use `getLocalDate()`, which gives the local date and avoids UTC.
- After XP changes, dispatch `window` event `XP_UPDATED_EVENT` (`'xp-updated'`) so the Sidebar refreshes.
- Wrap slow Supabase calls with `withTimeout()`.

### Routes
`/`, `/login`, `/dashboard`, `/materials`, `/materials/physics`, `/materials/math`, `/materials/{physics|math}/:id` (one [MaterialDetail](src/pages/MaterialDetail.tsx) serves both and checks the subject from the pathname), `/lab`, `/quiz`, `/leaderboard`.

## Content (most edits happen here)

All content is static TypeScript under [src/data/](src/data/). Many data files begin with an Indonesian "how to edit" comment block written for non-programmers. Keep those blocks and keep them accurate.

- **Types**: [materials.ts](src/data/materials.ts) defines `Material { id, title, description, icon, color, chapters }` and `Chapter { chapterId, title, content, formula?, example?, videoUrl? }`.
- **Subject indexes**: [physics-materials.ts](src/data/physics-materials.ts) and [math-materials.ts](src/data/math-materials.ts) only import chapters and list them in order. Each one's header comment has a file tree. Update that tree when you add chapters.
- **Chapter files**: there is one file per chapter, at `src/data/{physics|math}/<topic>/<slug>.ts`. Each exports a camelCase `const` of type `Chapter`.
- **ID conventions**: physics material ids are `1, 2, …` and math ids are `101, 102, …`. A `chapterId` is `"<materialId>-<n>"` (for example `"1-2"`, `"103-1"`). Chapter ids are what progress gets stored under, so **never renumber existing ones**.
- **Adding a chapter**: copy an existing chapter file, rename the file and the variable, import it into the subject index, and append it to the right `chapters` array.

### Chapter `content` HTML format
`content` is a template-literal HTML string rendered with `dangerouslySetInnerHTML` inside `.materi-content`. Copy the structure of a finished chapter such as [gerak-lurus.ts](src/data/physics/mekanika/gerak-lurus.ts):
- `<header class="materi-header">` holds `<span class="mapel">`, `<h1>`, and `<p>`.
- `<nav class="daftar-isi">` holds a table of contents with `#id` links. MaterialDetail intercepts these and scrolls smoothly, because otherwise HashRouter would treat them as routes.
- Each topic is a `<section class="bagian" id="…">` with `<div class="bagian-judul"><span class="nomor">N</span><h2>…</h2></div>`.
- Formula boxes use `.rumus` with `.rumus-judul`, one or more `.rumus-isi` holding **MathML** (`<math display="block" aria-label="…">`, with an Indonesian `aria-label`), and `.keterangan` with `<dl>` and units in `<span class="satuan">`.
- Other classes: `ul.poin`, `ol.langkah`, `.kartu`, `.catatan` / `.catatan.info`, `.istilah`, `.tabel-wrap`, `.ringkasan`, `.cabang`. Figures use `figure.gambar` (optionally `.lebar`) with `.gambar-isi` and `figcaption`.
- Images are SVGs in [public/images/](public/images/), referenced as `/images/<name>.svg`, with descriptive Indonesian `alt` text.
- The styles for these classes are in [src/index.css](src/index.css) under `.materi-content …`. If you add a class, add its CSS there too.

Older or stub chapters (for example [listrik-statis.ts](src/data/physics/listrik-magnet/listrik-statis.ts)) still use plain `<h3>`/`<p>` with the optional `formula` and `example` plain-text fields, which appear as separate boxes below the content. New chapters should use the rich format.

### Other data
- [quizzes.ts](src/data/quizzes.ts): `Quiz { id, title, materialId, questions }`. `correctAnswer` is a 0-based index, and `difficulty` is `"mudah" | "sedang" | "sulit"`.
- [simulations.ts](src/data/simulations.ts): Lab entries with `iframeUrl` (mostly PhET), plus a `fallbackUrl` for sites that block embedding.

## Styling

The site uses a neo-brutalist look. Theme tokens live in `@theme` in [src/index.css](src/index.css): `lime #C5FA00`, `cream #FFF7ED`, `orange #FF6B00`, `dark #1A1A1A`, `gray #475569`. Components use them as Tailwind classes (`bg-cream`, `text-orange`, `border-[3px] border-dark`, `rounded-xl`, `shadow-[4px_4px_0_#1A1A1A]`), and buttons move on hover with `hover:translate-x-[2px] hover:translate-y-[2px]`. Headings use Space Grotesk, often set inline (`style={{ fontFamily: 'Space Grotesk, sans-serif' }}`), and body text uses Inter. Both fonts load from Google Fonts in [index.html](index.html).
