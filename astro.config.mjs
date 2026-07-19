// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import { site } from './src/site.config.ts';

export default defineConfig({
  site: site.url,
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  redirects: {
    '/politicas-privacidade': '/politica-privacidade',
  },
});
