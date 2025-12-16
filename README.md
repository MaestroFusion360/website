# Website (Portfolio)

Personal portfolio website built with **SvelteKit (Svelte 5) + TypeScript + Tailwind CSS**. It produces a fully static build via `@sveltejs/adapter-static` and is suitable for GitHub Pages.

Live: `https://maestrofusion360.github.io/website/`

## Features

- RU/EN language switch and light/dark theme with persistence in `localStorage`.
- Projects rendered from a typed data source (see `src/project.ts`).
- SEO meta tags and Schema.org structured data (see `src/routes/+page.svelte`).

## Quick start

```bash
npm ci
npm run dev
```

Open `http://localhost:5173`.

## Scripts

- `npm run build` — build the static site.
- `npm run preview` — preview the production build locally.
- `npm run lint` — Prettier check + ESLint.
- `npm run format` — format with Prettier.
- `npm test` — run Vitest (unit + browser projects).

## Deploy (GitHub Pages)

1. Build: `npm run build`.
2. Publish the contents of `build/` (adapter-static output) to GitHub Pages.

If you deploy under a subpath like `/repo`, make sure SvelteKit is configured with the correct `paths.base`.

## License

MIT, see `LICENSE.md`.

## Contact

- Email: `maestrofusion360@gmail.com`
- Telegram: `https://t.me/MaestroFusion360`
