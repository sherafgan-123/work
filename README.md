# Shair Afgan, B2B Growth & Pipeline Strategist

Portfolio website built with Vite, React and TypeScript. Styles are plain CSS with tokens. Fonts are self-hosted.

## Pages

Home, Services, Case Studies (with industry filter), ten case study pages, About, Contact and a 404.

## Run locally

```bash
npm install
npm run dev
```

## Build and check

```bash
npm run build
npm run check
```

`build` type-checks, bundles and writes one HTML file per route with its own title, description and canonical URL, plus `sitemap.xml`, `robots.txt` and `404.html`. `check` verifies every route, unique titles, internal links, the ten case studies and the copy rules.

## Deploy

Run `npm run deploy`. It builds the site and publishes it to the `gh-pages` branch, which GitHub Pages serves. Source code lives on `main`.

The site is served at `https://shairafgan.online` (the repository is `sherafgan-123/work`). The domain is set in `public/CNAME` and `site.url` in `src/data/site.ts`. DNS lives at Namecheap: four A records for the root pointing to GitHub Pages and a CNAME for `www`.

## Where things live

- `src/data/site.ts`: contact details, booking link, form endpoint, headline metrics.
- `src/data/case-studies.json`: all case study content and verified metrics.
- `src/data/pages.json`: titles and descriptions for the main pages.
- `src/styles.css`: design tokens and all styles.
- `research/` and `docs/`: competitive research, strategy, design system, content gaps.

See `docs/content-and-todo.md` before launch.
