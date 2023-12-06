import { defineConfig } from 'astro/config';
import aws from 'astro-sst';
import starlight from '@astrojs/starlight';

export default defineConfig({
  adapter: aws(),
  vite: {
    optimizeDeps: ['sst'],
  },
  integrations: [
    starlight({
      title: 'DevPortal Docs',
      logo: {
        src: '/src/assets/images/sensedia-logo.png',
      },
      customCss: ['./src/styles/custom-style.css'],
      defaultLocale: 'pt',
      locales: {
        root: {
          label: 'portuguese',
          lang: 'pt',
        },
      },

      sidebar: [
        {
          label: 'Guias',
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: 'Introdução ao CMS Externo',
              link: '/guides/introduction-to-external-cms/',
            },
          ],
        },
        {
          label: 'Referências',
          autogenerate: { directory: 'reference' },
        },
      ],
    }),
  ],
});
