module.exports = {
  title: 'Diahook Docs',
  tagline: 'Webhooks as a service',
  url: 'https://www.diahook.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  themeConfig: {
    navbar: {
      title: 'Diahook',
      logo: {
        alt: 'Diahook logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'https://www.diahook.com',
          label: 'Website',
          position: 'left',
        },
        {
          to: 'https://api.diahook.com/docs',
          label: 'API Specifications',
          position: 'left',
        },
        {
          to: 'mailto:contact@diahook.com',
          label: 'Contact Us',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © Diahook Inc.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
