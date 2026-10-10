// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // ponytail: placeholder domain, change when you buy one (used for canonical/OG URLs and the sitemap)
  site: 'https://trutimemedia.com',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
    // The Three.js chunk (~129KB gzipped) is lazy-loaded on desktop only, so its size is expected.
    build: { chunkSizeWarningLimit: 600 },
  },
});
