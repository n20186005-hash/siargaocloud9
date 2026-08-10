# Cloud 9 Siargao Visitor Guide

A one-page, English (Philippines) visitor guide for Cloud 9 Surfing Area in General Luna, Siargao. Built with Astro, Tailwind CSS and TypeScript and deployed as static assets on Cloudflare Workers.

## Runtime

- Node.js: `24.18.1` (`.node-version` and `engines`)
- pnpm: `11.21.0` (`packageManager` and `engines`)
- Astro: `7.2.0`
- Tailwind CSS: `4.3.3`
- TypeScript: `6.0.3`
- Wrangler: `4.113.0`

All package versions are exact; the lockfile is committed.

## Local development

```bash
corepack enable
pnpm install --frozen-lockfile
pnpm dev
```

Validation:

```bash
pnpm check
pnpm build
```

## Production domain

The production origin has exactly one project-level configuration point: the `site` constant in `astro.config.ts`.

It intentionally starts as an empty string. In that state:

- the project still builds;
- canonical and `og:url` are omitted;
- `og:image` gracefully uses a root-relative path;
- absolute URL fields are omitted from JSON-LD;
- `@astrojs/sitemap` is not enabled, so no sitemap with a fake host is emitted.

When a real domain is ready, put its full origin in that `site` constant and rebuild. Astro will then provide the single source used by canonical, Open Graph, JSON-LD and the sitemap integration.

## Cloudflare Workers

The site is fully static, so Wrangler deploys `./dist` through Workers Static Assets; no server adapter, database, login or CMS is used.

```bash
pnpm deploy
```

## Visitor itinerary privacy

The trip-list feature uses only browser `localStorage` under the key `cloud9-siargao-itinerary-v1`. It has no API calls and sends no itinerary data to a server.

## Media

Attraction photos are stored locally in `public/images`. Attribution is included in the site footer; all four supplied photos are CC BY-SA 4.0 files from Wikimedia Commons. The logo and all favicon sizes are local assets and share the same wave / sun / boardwalk visual mark.
