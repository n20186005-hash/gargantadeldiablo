import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://gargantadeldiablo.com',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en', 'zh', 'it'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
  redirects: {
    '/': '/es',
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'es',
        locales: {
          es: 'es-AR',
          en: 'en-US',
          zh: 'zh-CN',
          it: 'it-IT',
        },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
