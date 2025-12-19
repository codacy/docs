import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
// Sidebar sorting is handled via explicit `_order.ts` files in `docs/`.

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'My Site',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/codacy-favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  // once we configure it to be in docs.codacy.com, we change this to "docs.codacy.com"
  url: 'https://codacy.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  // once we configure it to be in docs.codacy.com, we change this to "/"
  baseUrl: '/docs-docusaurus/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Codacy', // Usually your GitHub org/user name.
  projectName: 'docs-docusaurus', // Usually your repo name.

  onBrokenLinks: 'warn',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          breadcrumbs: false,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        docsRouteBasePath: '/',
        indexBlog: false,
        hashed: true,
        language: ['en'],
        fuzzyMatchingDistance: 0,
        searchResultLimits: 8,
        searchResultContextMaxLength: 40,
      },
    ],
  ],
  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Docs',
      logo: {
        alt: 'Codacy Docs',
        src: 'img/codacy-logo.svg',
        srcDark: 'img/codacy-logo-white.svg',
      },
      items: [
        {
          to: '/',
          label: 'Home',
          position: 'left',
          exact: true,
        },
        {
          type: 'docSidebar',
          sidebarId: 'documentationSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          type: 'docSidebar',
          sidebarId: 'releaseNotesSidebar',
          position: 'left',
          label: 'Release notes',
        },
        {
          type: 'search',
          position: 'right',
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {label: 'Documentation', to: '/'},
            {label: 'Release notes', to: '/release-notes/'},
          ],
        },
        {
          title: 'Codacy',
          items: [
            {label: 'Website', href: 'https://www.codacy.com'},
            {label: 'Status', href: 'https://status.codacy.com'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Codacy`,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
