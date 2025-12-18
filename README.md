# Website (Portfolio)

Personal portfolio website built with **SvelteKit (Svelte 5) + TypeScript + Tailwind CSS** and exported as static files via `@sveltejs/adapter-static`.

Live: `https://maestrofusion360.github.io/website/`

## Stack

- SvelteKit + Svelte 5 (Runes)
- TypeScript
- Tailwind CSS v4
- PWA via `vite-plugin-pwa`
- Storybook (SvelteKit/Vite)
- Vitest (DOM + optional browser project)

## Features

- RU/EN language switch (`setContext/getContext`) + theme toggle with `localStorage` persistence.
- Projects rendered from a generated TypeScript data source (`src/routes/projects/project.ts`).
- SEO meta tags + Schema.org JSON-LD (`src/routes/schema.ts`, `src/routes/+page.svelte`).

## Project structure

- `src/routes/+page.svelte` — main landing page sections (About/Tech/Projects/Upcoming/Contacts).
- `src/routes/components/*` — page sections and layout blocks:
  - `Header.svelte`, `Footer.svelte`, `Contacts.svelte`
  - `ProjectsCarousel.svelte`, `UpcomingCarousel.svelte`, `Technologies.svelte`
- `src/lib/*` — reusable UI components:
  - `Badge.svelte`, `Button.svelte`, `Card.svelte`, `Carousel.svelte`, `Hero.svelte`
  - `ThemeToggle.svelte`, `LangSwitch.svelte`
- `src/stories/*` — Storybook stories for UI components.
- `src/lib/__tests__/*` and `src/routes/page.svelte.spec.ts` — Vitest tests.

## Projects data + editor

<!-- markdownlint-disable MD033 -->
<details>
  <summary>Screenshot</summary>

<p align="center">
  <div style="text-align: center;">
    <img src="static/assets/editor_main.png" alt="Image 1">
  </div>
</p>

</details>

Projects live in two formats:

- `src/routes/projects/project.json` — source of truth for the editor.
- `src/routes/projects/project.ts` — generated TypeScript module used by the website build.

To manage projects data, use the GUI editor:

```bash
python scripts/editor.py
```

See [EDITOR_README.md](scripts/EDITOR_README.md) for details and screenshots.

## Quick start

```bash
npm ci
npm run dev
```

Open `http://localhost:5173`.

## Scripts

- `npm run dev` — dev server
- `npm run build` — build static site
- `npm run preview` — preview production build
- `npm run check` — `svelte-check`
- `npm run lint` — Prettier check + ESLint
- `npm run format` — format with Prettier
- `npm test` — Vitest (`--run`)
- `npm run storybook` — Storybook dev server
- `npm run build-storybook` — Storybook static build

## Deploy (GitHub Pages)

1. Build: `npm run build`.
2. Publish the contents of `build/` (adapter-static output) to GitHub Pages.

If you deploy under a subpath like `/repo`, ensure SvelteKit `paths.base` is set (see `svelte.config.js`).

## License

MIT, see [LICENSE.md](LICENSE.md).

## Contact

- Email: `maestrofusion360@gmail.com`
- Telegram: `https://t.me/MaestroFusion360`
