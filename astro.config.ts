import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Set the production origin here once the domain is ready. Leave empty until then.
const site = '';
const configuredSite = site.trim() || undefined;

export default defineConfig({
  site: configuredSite,
  output: 'static',
  integrations: configuredSite ? [sitemap()] : [],
  vite: {
    plugins: [tailwindcss()],
  },
});
