# Digital Archive Website for renowned Neuroscientist, Author and Musician Joseph E. LeDoux.
Next.js 15 · React 19 · TypeScript · Tailwind CSS · MongoDB Atlas · Vercel

# OVERVIEW
A full-stack personal website for Joseph E. LeDoux, NYU neuroscientist, author, and musician. The site consolidates his three distinct bodies of work (research, books, and music), into a single cohesive platform, designed to be navigable by audiences ranging from academic researchers to casual readers.

# FEATURES:
- Multi-persona navigation (Neuroscientist / Author / Musician) via responsive image map
- Dynamic publications & books from MongoDB Atlas with ISR
- Page-level SEO: metadata templates, Open Graph, Twitter cards, JSON-LD structured data
- Framer Motion animations on interactive hotspots
- Filterable media library with server-side API routes

# ARCHITECTURE
The original, client-approved design unified all media in one page, which could be filtered by field (neuroscience, books, music), media type (written, audio and video), and year. This is why a `/media/_[type]` dynamic route exists in the codebase (the underscore prefix disables it in next.js routing). The client later requested dedicated pages for each media type, so `/media/interviews`, `/media/performances` and `/media/read` each have their own page.

  ## Data sources

  Two patterns coexist depending on how frequently content changes:
  - **MongoDB Atlas** — Publications, books, and media items are stored in a
    `websitedb` database and fetched server-side via internal API routes
    (`/api/publications`, `/api/books`, `/api/media`). Media pages use ISR with
    a 5-minute revalidation window. The individual book page (`/author/[slug]`)
    is the exception: it queries MongoDB directly through a shared helper —
    see "Self-fetching and preview deployments" below.
  - **Static TypeScript data files** — Albums, shows, lectures, columns, and
    articles are hardcoded in `*-data.ts` files co-located with their routes.
    These change infrequently enough that a redeploy is acceptable.

  ## Self-fetching and preview deployments

  Most server components load their data by fetching the site's own API routes
  over HTTP, using a base URL from an environment variable
  (`NEXT_PUBLIC_SITE_URL` or `NEXT_PUBLIC_BASE_URL`). In production that URL
  is the live site, so on a **Vercel preview deployment** these pages call the
  *production* API rather than the preview's own code.

  This surfaced when book pages moved from ObjectId URLs to slugs (Stage 1 of
  the roadmap below). Locally everything worked, but on the preview every book
  page showed "Document not found": the preview's new `/author/[slug]` page
  asked production's `/api/books/<slug>`, and production — still on the old
  code — rejected anything that wasn't an ObjectId.

  The fix was to stop the book page from calling its own API. The lookup now
  lives in `app/api/books/get-book.ts` (`getBook(slugOrId)`), which is used by
  both the `/author/[slug]` page and the `/api/books/[id]` route. As a result:
  - Previews test their own code, so API changes can be verified before merging
  - There is one fewer HTTP round trip (and serverless invocation) per page view
  - The page no longer depends on a base-URL env var being set correctly

  Other pages (`/author`, publications, media) still self-fetch. They work, but
  have the same weakness and should be converted the same way when their API
  routes next change — in particular, the Starting Over page (Stage 2) should
  use `getBook('starting-over')` directly.

  ## Server and client components

  Next.js metadata exports require server components, but several pages need
  client-side interactivity (modals, image galleries, responsive state). These
  are split into a thin server wrapper that exports `metadata` and a
  `*Client.tsx` component that holds the `"use client"` logic — for example,
  `app/musician/page.tsx` → `app/musician/MusicianClient.tsx`.

  ## Development process
  Requirements evolved during development, which made the development intertwined with the design process. Navigational structure and dedicated section landing pages were added iteratively based on client feedback.

# ROADMAP: Starting Over companion page
Appendix C of Joe's memoir *Starting Over* (MIT Press) sends readers to the website ("open the Author door to explore Starting Over"). The client asked for a Starting Over page with tabs for pre-publication endorsements, post-publication praise & reviews, dates and locations of readings, lectures and related musical performances, additional personal photos, and merch. Book pages used to live at `/author/<MongoDB ObjectId>`, so the first stage gives every book a human-readable slug; the companion page then lives at `/author/starting-over`.

  ## Stage 1 — Book slugs and slug-based routes
  - [x] Add `slug` to the `Book` type (`app/author/book-data.ts`)
  - [x] Add a unique `slug` to every document in `websitedb.books` and a unique index on it (done manually in the MongoDB Playground)
  - [x] `/api/books/[id]` looks up by `slug`, falling back to `_id` for legacy links
  - [x] Rename `app/author/[_id]` → `app/author/[slug]`; legacy ObjectId URLs permanently redirect to the slug URL
  - [x] Book links use slugs: `BookList.tsx`, `sitemap.ts`, `NewsBanner.tsx`, `news/page.tsx`
  - [x] Book page queries MongoDB directly via `getBook()` instead of self-fetching, so previews test their own code (see "Self-fetching and preview deployments")

  ## Stage 2 — Starting Over page shell
  - [ ] `app/author/starting-over/starting-over-data.ts` — static data for endorsements, reviews, events, photos and merch (reuses `AdvancedPraise` / `Review` from `book-data.ts`)
  - [ ] `app/author/starting-over/page.tsx` — server component with metadata and banner; core book info (cover, synopsis, stores) comes from MongoDB via `getBook('starting-over')`. The static segment takes precedence over `[slug]`
  - [ ] `StartingOverTabs.tsx` — client tabs styled like `BookContentTabs.tsx`: The Book / Endorsements / Praise & Reviews / Readings & Events / Photos / Merch. Empty tabs are hidden; the active tab is synced to `?tab=` so tabs can be linked directly; nav wraps on mobile

  ## Stage 3 — Tab content
  - [ ] Endorsements and Reviews — same quote layout as the existing book Praise/Reviews tabs
  - [ ] Readings & Events — Upcoming (ascending) and Past (descending), with a type label (reading / lecture / performance) and optional link. Related lectures are **not duplicated**: add an optional `book?: string` (slug) to `Lecture` in `lecture-data.ts`, tag entries with `book: "starting-over"`, and merge them in, so they show on both the lectures pages and this tab
  - [ ] Photos — reuse `app/components/ImageGallery.tsx` with images in `public/starting-over/*.webp`; add optional captions
  - [ ] Merch — card grid linking out to external stores (no on-site checkout)

  ## Stage 4 — Entry points
  - [ ] Add "starting over" to the author submenu in `app/components/header-data.ts` (check active-state highlighting against "books")
  - [ ] Optionally feature the Starting Over card on `/author`
  - [ ] Update `CLAUDE.md` with the new route

  ## Pending from the client
  - Confirmed book title (to be updated in the database)
  - Endorsement and review texts with attributions and links
  - Reading and performance dates/locations
  - Personal photos
  - Merch items and store URLs

# LOCAL SETUP
                                                                                                                     
1. Clone the repository and install dependencies:                                                                                      
  npm install

2. Start the development server:
  npm run dev

  Open http://localhost:3000 in your browser.

Note: Some content (albums, shows, lectures and columns) is hardcoded
in static data files and will load without any configuration. Pages that
fetch from the database — publications, books, and media — require MongoDB
Atlas credentials in a .env.local file and are not publicly accessible.