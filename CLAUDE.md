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

The site uses a neo-brutalist look that follows the token system of [neobrutalism.dev/styling](https://www.neobrutalism.dev/styling). The token names are identical, so components copied from neobrutalism.dev work without changes. Color values live in `:root` in [src/index.css](src/index.css) and are mapped to Tailwind classes through `@theme inline`:

| Token / class | Value | Use |
|---|---|---|
| `bg-main` | lime `#C5FA00` | identity color 1: active states, tags, secondary buttons, the homepage feature band, formula boxes |
| `bg-background` | cream `#FFF7ED` | page background (set on `body`), tinted surfaces inside cards |
| `bg-secondary-background` | white | cards, navbar, sections |
| `text-foreground`, `border-border` | `#1A1A1A` | text and borders (also `text-main-foreground`) |
| `text-muted` | `#475569` | secondary text |
| `bg-accent` / `bg-accent-soft` | orange `#FF6B00` / `#FFE8D6` | identity color 2: main action buttons (quiz, register, mark complete), the quiz card, the closing homepage CTA band, XP/progress bars, XP chips, chapter section numbers, `.catatan` |
| `shadow-shadow` / `shadow-shadow-sm` | 4px / 2px hard shadow | |
| `rounded-base` | 5px | |

Rules:
- Use `border-2` for borders.
- Buttons move on hover with `hover:translate-x-[2px] hover:translate-y-[2px]` and drop one shadow step (`shadow-shadow` → `hover:shadow-shadow-sm`, `shadow-shadow-sm` → `hover:shadow-none`).
- Lime and orange are both meant to be visible. Full-width bands are fine (the homepage feature band is lime, the closing CTA band is orange), but cards inside them stay `bg-secondary-background`.
- Physics is paired with orange and math with lime (homepage headline highlights, subject tiles, list bullets).
- Text on lime or orange is always `text-foreground` (never white, never `text-muted` on orange), and orange is never used for text: white on orange is about 2.9:1 and orange on cream about 2.7:1, both below WCAG AA. To make a word or number stand out, give it an orange or lime block behind dark text. Orange icons use `text-foreground fill-accent` so the dark stroke carries the contrast.
- Page wrappers (`min-h-screen`) get no background color of their own. They inherit it from `body`, so the page background only has to change in `--background`.
- Don't reintroduce color names such as `bg-lime` or `text-dark`.

Fonts:
- `font-display` is the heading font family (Space Grotesk). `h1`–`h6` get it from the base CSS, and other elements opt in with `font-display` (logo, large stat numbers).
- The body font is Plus Jakarta Sans (`--font-sans`).
- As on neobrutalism.dev, `font-base` (500) and `font-heading` (700) are font **weights**, not families. `body` uses 500, and `.materi-content` uses 400 so long paragraphs stay light.
- Don't set fonts inline with `style={{ fontFamily }}`. Both fonts load from Google Fonts in [index.html](index.html). The background color there is set on `body` only, not on `html`, so the background from `index.css` covers the whole page.

`Material.color` holds a flat background class (usually `"bg-main"`), not a gradient.

Dark mode is not implemented yet. To add it, add a `.dark { --background: …; … }` block next to `:root`, and keep `.materi-content .gambar` white, because the chapter SVGs use dark strokes and have no background of their own.
