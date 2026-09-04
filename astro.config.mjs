// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

import { SITE } from './src/config/site';

// https://astro.build/config
export default defineConfig({
  // ⚠️ Domínio a confirmar — ajustar em src/config/site.ts quando definido.
  site: SITE.url,
  // Site 90% estático; ilha React só no /simulacao (Fase 4).
  integrations: [mdx(), react(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
