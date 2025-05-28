import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Guia - IA para Revit',
  tagline: 'Guia completo de Inteligência Artificial para desenhistas e projetistas que usam Revit',
  favicon: 'img/guia-logo.svg',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://theguide.vercel.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'paulogiavoni', // Usually your GitHub org/user name.
  projectName: 'theguide', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'pt',
    locales: ['pt'],
    localeConfigs: {
      pt: {
        label: 'Português',
        direction: 'ltr',
        htmlLang: 'pt-BR',
      },
    },
  },

  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            from: '/docs/intro',
            to: '/docs/category/1-fundamentos-da-ia',
          },
          {
            from: '/en/docs/intro',
            to: '/docs/category/1-fundamentos-da-ia',
          },
          {
            from: '/en/docs',
            to: '/docs/category/1-fundamentos-da-ia',
          },
          {
            from: '/en',
            to: '/docs/category/1-fundamentos-da-ia',
          },
          {
            from: '/it/docs/intro',
            to: '/docs/category/1-fundamentos-da-ia',
          },
          {
            from: '/it/docs',
            to: '/docs/category/1-fundamentos-da-ia',
          },
          {
            from: '/it',
            to: '/docs/category/1-fundamentos-da-ia',
          },
        ],
      },
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: 'docs',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      logo: {
        alt: 'Guia Logo',
        src: 'img/guia-logo.svg',
        width: 32,
        height: 32,
        href: '/docs/category/1-fundamentos-da-ia',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Guia',
        },
        {
          href: 'https://it.linkedin.com/in/paulogiavoni/en',
          label: 'LinkedIn',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Conteúdo',
          items: [
            {
              label: 'Fundamentos da IA',
              to: '/docs/fundamentos-ia/introducao',
            },
            {
              label: 'Engenharia de Prompt',
              to: '/docs/engenharia-prompt/o-que-e-prompt',
            },
            {
              label: 'Primeiros Passos',
              to: '/docs/primeiros-passos/google-ai-studio',
            },
          ],
        },
        {
          title: 'Contato',
          items: [
            {
              label: 'LinkedIn',
              href: 'https://it.linkedin.com/in/paulogiavoni/en',
            },
          ],
        },
        {
          title: 'Recursos',
          items: [
            {
              label: 'Livro: SCAN to BIM',
              href: 'https://www.amazon.it/SCAN-BIM-Guidelines-Digitalization-Hydroelectric/dp/B0DS9TC4PM',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Paulo Giavoni. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
