# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run lint     # Run ESLint
```

No test framework is configured.

## Environment Variables

Required in `.env.local`:
- `MONGODB_USER` — MongoDB Atlas username
- `MONGODB_PASSWORD` — MongoDB Atlas password
- `NEXT_PUBLIC_SITE_URL` — Full base URL (e.g. `http://localhost:3000`), used to construct internal API fetch URLs in server components

## Architecture

This is a **Next.js 15 App Router** site for Joseph LeDoux (neuroscientist, author, musician), deployed on Vercel.

### Route Structure

The site is organized around three personas:

| Route | Content |
|-------|---------|
| `/neuroscientist` | Lab photos, publications (from MongoDB), lectures |
| `/author` | Books (from MongoDB), individual book pages (`/author/[slug]`), columns, lectures |
| `/musician` | Albums (static data), shows (static data), gigs list |
| `/media` | Interviews, performances, read — filterable media lists |
| `/news` | News page; a dismissable `NewsBanner` appears on all other pages |
| `/career-celebration` | Static article listing page |

### Data Sources

Two patterns coexist:

1. **MongoDB (dynamic)** — Publications and books are stored in MongoDB Atlas (`websitedb` database, `publications` and `books` collections). Server components fetch from internal API routes (`/api/publications`, `/api/books`, `/api/books/[id]`, `/api/media`). All dynamic pages use `export const dynamic = 'force-dynamic'`. The DB connection is cached in module scope (`app/api/db.ts`). Each book document has a unique `slug` field; `/api/books/[id]` looks up by slug first and falls back to `_id` for legacy ObjectId links, which `/author/[slug]` then `permanentRedirect`s to the slug URL.

2. **Static TypeScript data files** — Albums, shows, media items, lectures, columns, articles, and nav structure (`app/components/header-data.ts`) are hardcoded in `*-data.ts` files co-located with their feature routes/components.

### Styling

- **Tailwind CSS v3** with a custom dark blue palette defined in `tailwind.config.ts`:
  - `lightText` (#ebf5fc), `lightAccent` (#d8f5fa), `accent`/`subMenu` (#0091bd), `dark` (#0d3a4e), `darker` (#0b2f42), `darkest` (#062637)
- **Fonts** defined in `styles/fonts.ts` and applied in the root layout: Inter (body), Azeret Mono (`font-azeret`), Cardo (`font-cardo` — used for headings)
- Global heading/element styles are set in `app/globals.css`

### Key Shared Components

- `app/components/Header.tsx` — Nav bar with active-section tracking (`activeSubmenu`, synced to `pathname`). Composed from local subcomponents (`DesktopNavLink`, `SubmenuBar`, `MobileNavPanel`); nav data/types and the `isActivePath` helper live in the co-located `app/components/header-data.ts`. On mobile, the hamburger menu's `Disclosure` for the current section renders pre-expanded via `defaultOpen`; this only re-evaluates because the `Dialog` unmounts its children on close, forcing a remount each time the menu opens — don't switch the `Dialog` to stay mounted (e.g. a `static` Transition) without replacing `defaultOpen` with controlled `open` state
- `app/components/Banner.tsx` — Full-width hero banner with image and title
- `app/components/NewsBanner.tsx` — Dismissable top announcement bar (client component, hides on `/news`)
- `app/components/ImageGrid.tsx` / `ImageGallery.tsx` — Image display layouts
- `app/components/TagSidebar.tsx` — Filter sidebar used in media pages
- `app/components/YearAnchorNav.tsx` — Sticky year-jump nav bar (`#year-YYYY` anchors), used by `/neuroscientist/publications`, `/neuroscientist/lectures`, `/author/lectures`, and `/musician/gigs`. It measures its own rendered height (via `ResizeObserver`, since it wraps to a different number of lines depending on year count and viewport width) and writes that to a `--year-anchor-offset` CSS variable on `<html>`, with a `4rem` fallback defined in `app/globals.css`. Each page's `#year-YYYY` target div applies `scroll-mt-[var(--year-anchor-offset)]` so anchor jumps land below the sticky bar instead of underneath it — don't replace this with a static `scroll-mt-*` value, since the bar's height isn't fixed
- `config/bannerConfig.ts` — Maps media sub-route names to banner image paths

## Planned Work

- **Starting Over companion page** — staged roadmap (slugs → `/author/starting-over` with tabs for endorsements, reviews, events, photos, merch) documented in the `ROADMAP` section of `README.md`. Stage 1 (book slugs) is done.
- **Search bar for list/database pages** — client-side search (stage 1: simple substring match; stage 2: filter by section/page) across Publications, Books, Media, Lectures (both routes), Columns, Musician Gigs/Albums, and Career Celebration. Full design (new `SearchBar` component, shared `searchItems` util, per-page wiring) written up at `~/.claude/plans/i-would-like-to-luminous-heron.md` — read that file before starting implementation.
