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
    a 5-minute revalidation window.
  - **Static TypeScript data files** — Albums, shows, lectures, columns, and
    articles are hardcoded in `*-data.ts` files co-located with their routes.
    These change infrequently enough that a redeploy is acceptable.

  ## Server and client components

  Next.js metadata exports require server components, but several pages need
  client-side interactivity (modals, image galleries, responsive state). These
  are split into a thin server wrapper that exports `metadata` and a
  `*Client.tsx` component that holds the `"use client"` logic — for example,
  `app/musician/page.tsx` → `app/musician/MusicianClient.tsx`.

  ## Development process
  Requirements evolved during development, which made the development intertwined with the design process. Navigational structure and dedicated section landing pages were added iteratively based on client feedback.

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