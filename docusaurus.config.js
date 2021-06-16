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
          to: 'https://www.svix.com/slack/',
          label: 'Community',
          position: 'left',
        },
        {
          to: 'mailto:contact@svix.com',
          label: 'Contact',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © Svix`,
    },
    prism: {
      additionalLanguages: ['ruby', 'php', 'java', 'groovy'],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/svix/svix-docs/edit/main/',
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
  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            to: '/receiving/verifying-payloads/why',
            from: '/receiving/verifying-payloads',
          },
        ],
      },
    ],
  ],
};
