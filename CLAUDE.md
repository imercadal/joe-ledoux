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
| `/author` | Books (from MongoDB), individual book pages (`/author/[_id]`), columns, lectures |
| `/musician` | Albums (static data), shows (static data), gigs list |
| `/media` | Interviews, performances, read — filterable media lists |
| `/news` | News page; a dismissable `NewsBanner` appears on all other pages |
| `/career-celebration` | Static article listing page |

### Data Sources

Two patterns coexist:

1. **MongoDB (dynamic)** — Publications and books are stored in MongoDB Atlas (`websitedb` database, `publications` and `books` collections). Server components fetch from internal API routes (`/api/publications`, `/api/books`, `/api/books/[id]`, `/api/media`). All dynamic pages use `export const dynamic = 'force-dynamic'`. The DB connection is cached in module scope (`app/api/db.ts`).

2. **Static TypeScript data files** — Albums, shows, media items, lectures, columns, and articles are hardcoded in `*-data.ts` files co-located with their feature routes.

### Styling

- **Tailwind CSS v3** with a custom dark blue palette defined in `tailwind.config.ts`:
  - `lightText` (#ebf5fc), `lightAccent` (#d8f5fa), `accent`/`subMenu` (#0091bd), `dark` (#0d3a4e), `darker` (#0b2f42), `darkest` (#062637)
- **Fonts** defined in `styles/fonts.ts` and applied in the root layout: Inter (body), Azeret Mono (`font-azeret`), Cardo (`font-cardo` — used for headings)
- Global heading/element styles are set in `app/globals.css`

### Key Shared Components

- `app/components/Banner.tsx` — Full-width hero banner with image and title
- `app/components/NewsBanner.tsx` — Dismissable top announcement bar (client component, hides on `/news`)
- `app/components/ImageGrid.tsx` / `ImageGallery.tsx` — Image display layouts
- `app/components/TagSidebar.tsx` — Filter sidebar used in media pages
- `config/bannerConfig.ts` — Maps media sub-route names to banner image paths
