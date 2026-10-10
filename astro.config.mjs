// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Live URL, used for canonical/OG URLs and the sitemap. Change when you buy a custom domain (also in public/robots.txt).
  site: 'https://trutimemedia.netlify.app',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
    // The Three.js chunk (~129KB gzipped) is lazy-loaded on desktop only, so its size is expected.
    build: { chunkSizeWarningLimit: 600 },
  },
});
