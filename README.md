# Work Support

Frontend recreation of the Work Support marketing site — React + Vite + TypeScript + Tailwind CSS.

## Setup

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

## Build

```bash
npm run build
npm run preview
```

## Adding the real logo

Drop a logo file at `public/logo.png`. The header already points at `/logo.png` and
falls back to a small "WS" placeholder mark automatically if the file is missing.

## Structure

```
src/
├── components/   Header, Logo, Navigation, Button, Hero, SupportCard, Stats, Footer, PageHero
├── pages/        Home, WorkSupport, Training, WorkWithTeam, JoiningOurTeam, Contact
├── hooks/        useRouter (History API) + RouterContext
├── data/         navigation items, checklist items
├── App.tsx
├── main.tsx
└── index.css
```

Routing is a small dependency-free router built on the History API (see `src/hooks/useRouter.ts`),
so real URLs work for every page (`/`, `/work-support`, `/training`, `/work-with-team`,
`/joining-our-team`, `/contact`) without adding `react-router-dom`.

## Note on the design

This build was implemented from a very detailed written specification. No screenshot image
was actually attached to the request — only the text brief — so colors, spacing, and copy
follow the brief's explicit values (hex codes, exact heading/paragraph text, exact stat
labels, etc.) as closely as possible. If you do have the original screenshot, share it and
the layout can be refined against it pixel-by-pixel.
