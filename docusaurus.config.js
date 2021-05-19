module.exports = {
  title: 'Svix Docs',
  tagline: 'Webhooks as a service',
  url: 'https://www.svix.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  themeConfig: {
    navbar: {
      logo: {
        alt: 'Svix logo',
        src: 'img/brand.svg',
      },
      items: [
        {
          to: 'https://www.svix.com',
          label: 'Website',
          position: 'left',
        },
        {
          to: 'https://api.svix.com/docs',
          label: 'API Specifications',
          position: 'left',
        },
        {
          to: 'mailto:contact@svix.com',
          label: 'Contact Us',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © Svix`,
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
