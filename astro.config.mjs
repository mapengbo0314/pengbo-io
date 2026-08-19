// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://pengbo-io.com',
  // old /contact URL → contact section on the homepage
  redirects: { '/contact': '/#book' },
  // ponytail: single-page site — inlining CSS kills the extra request and makes
  // the built /design/* pages self-contained for the Claude Design sync
  build: { inlineStylesheets: 'always' },
  vite: {
    plugins: [tailwindcss()]
  }
});