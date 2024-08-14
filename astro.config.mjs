import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), tailwind()],
  site: 'https://scottharrisondev.github.io',
  base: '2024-website',
});