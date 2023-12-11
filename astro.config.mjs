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
            {
              label: 'Introdução ao CMS Externo',
              link: '/guides/introduction-to-external-cms/',
            },
            {
              label: 'Catálogo de APIs',
              link: '/guides/api-browser-devportal/',
            },
            {
              label: 'Documentações no DevPortal',
              link: '/guides/documentations-devportal/',
            },
            {
              label: 'APIs Status',
              link: '/guides/api-status-devportal/',
            },
            {
              label: 'Dev Dashboard',
              link: '/guides/dev-dashboard-devportal/',
            },
            {
              label: 'Aplicações',
              link: '/guides/apps-devportal/',
            },
            {
              label: 'Produtos',
              link: '/guides/products-devportal/',
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
