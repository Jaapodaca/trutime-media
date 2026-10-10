# TruTime Media website

Business site for TruTime Media (El Paso, TX). Astro + Tailwind CSS v4 + GSAP, with a lazy-loaded Three.js hero.

## Run it

```bash
corepack pnpm install
corepack pnpm dev        # http://localhost:4321
corepack pnpm build      # production build → dist/
corepack pnpm preview    # serve dist/ locally
```

## Contact form setup

1. Get a free access key at https://web3forms.com (use trutimealltime@gmail.com).
2. `cp .env.example .env` and paste the key after `PUBLIC_WEB3FORMS_KEY=`.
3. Restart the dev server. Without a key, the Contact page shows an "email me directly" fallback.

## Deploy (Netlify or Cloudflare Pages, both free)

1. Push this repo to GitHub.
2. In Netlify ("Add new site → Import from Git") or Cloudflare Pages ("Create → Pages → Connect to Git"), pick the repo.
3. Settings: build command `pnpm build`, output/publish directory `dist`.
4. Add the environment variable `PUBLIC_WEB3FORMS_KEY` with your key, then deploy.
5. When you have a real domain, update it in **two places**: `site` in `astro.config.mjs` and the `Sitemap:` line in `public/robots.txt`.

After it's live: run https://pagespeed.web.dev on the URL, and submit `/sitemap-index.xml` in Google Search Console.

## Reusing this for a client site

| What | Where |
|---|---|
| Business name, email, city, nav, services, stats, plans, steps | `src/data/site.ts` |
| Colors and fonts | `@theme` block in `src/styles/global.css` |
| Logo, favicon, share image | `src/assets/`, `public/favicon.png`, `public/apple-touch-icon.png`, `public/og-image.png` |
| Domain | `astro.config.mjs` + `public/robots.txt` |

Components in `src/components/` take props and don't hard-code TruTime content:
`Hero`, `PageHeader`, `Section`, `Button`, `ServiceCard`, `StatCard`, `PlanCard`, `ProjectCard`, `ContactForm`, `CTA`, `Icon`, `Nav`, `Footer`.

Animations are opt-in through attributes (see `src/scripts/motion.ts`):
`data-hero`, `data-line`, `data-reveal`, `data-progress`, `data-count`. All of them respect "reduce motion."
