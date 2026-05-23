# Resume — Next.js + Tailwind CSS

Space-themed Nebula resume site, built with Next.js 14 (App Router) and Tailwind CSS.

## Quick start

```bash
cd nextjs
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## File structure

```
nextjs/
├── app/
│   ├── globals.css        # Tailwind + custom animations (nebula, stars, reveal)
│   ├── layout.tsx         # Root layout (fonts, metadata)
│   └── page.tsx           # Single landing page — all 5 sections
├── components/
│   ├── NebulaStage.tsx    # Animated rotating nebula blobs
│   ├── StarField.tsx      # Parallax twinkling stars + shooting stars
│   ├── Hero.tsx           # 01 — profile + intro + socials
│   ├── Education.tsx      # 02 — KMUTNB card
│   ├── Experience.tsx     # 03 — timeline / cards layout
│   ├── Projects.tsx       # 04 — galaxy preview cards
│   ├── Skills.tsx         # 05 — animated progress bars
│   ├── Footer.tsx
│   ├── Icons.tsx          # Inline SVG icons
│   └── useReveal.ts       # Scroll-triggered reveal hook
├── lib/
│   └── data.ts            # All resume content (single source of truth)
├── public/
│   └── profile.jpeg
├── tailwind.config.ts
├── next.config.js
├── package.json
└── tsconfig.json
```

## Customizing content

All resume content lives in **`lib/data.ts`** — edit that one file to update name, education, experience, projects, and skills. Components import from it.

## Tech

- Next.js 14 (App Router, RSC)
- TypeScript
- Tailwind CSS 3.4
- `next/font` for Space Grotesk + Inter + JetBrains Mono
- `next/image` for the profile photo

## Animations

- Three drifting nebula blobs with `@keyframes drift-*`
- Two parallax star layers driven by `window.scrollY`
- Periodic shooting stars
- Skill bars animate width on scroll-into-view
- Section reveals via `useReveal` hook (scroll-based bounding-rect check — works in restrictive iframes where IntersectionObserver doesn't)
