// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // ponytail: placeholder domain, change when you buy one (used for canonical/OG URLs)
  site: 'https://trutimemedia.com',
  vite: { plugins: [tailwindcss()] },
});
