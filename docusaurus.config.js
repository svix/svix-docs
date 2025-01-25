module.exports = {
  title: "Svix Docs",
  tagline: "Webhooks as a service",
  url: "https://docs.svix.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  favicon: "img/favicon-96x96.png",
  themeConfig: {
    image: 'img/socialbanner.png',
    navbar: {
      logo: {
        alt: "Svix logo",
        src: "img/brand.svg",
        srcDark: "img/brand.white.svg",
      },
      items: [
        {
          to: "https://www.svix.com",
          label: "Website",
          position: "left",
        },
        {
          to: "https://api.svix.com/docs",
          label: "API Reference",
          position: "left",
        },
        {
          to: "https://docs.svix.com/receiving/introduction/",
          label: "Consuming Webhooks",
          position: "left",
        },
        {
          to: "https://www.svix.com/slack/",
          label: "Community",
          position: "left",
        },
        {
          to: "/get-help",
          label: "Support",
          position: "left",
        },
        {
          href: 'https://github.com/svix/svix-webhooks',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
          position: 'right',
        },
        {
          to: "https://www.svix.com/signup/",
          label: "Get Started",
          className: "cta",
          position: "left"
        }
      ],
    },
    footer: {
      style: "dark",
      copyright: `Copyright © Svix`,
    },
    prism: {
      additionalLanguages: ["ruby", "php", "java", "groovy", "csharp", "rust", "kotlin"],
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/svix/svix-docs/edit/main/",
          sidebarCollapsible: false,
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          trackingID: "G-Z7S16CMH3G",
          anonymizeIP: true,
        },
      },
    ],
  ],
  plugins: [
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [
          {
            to: "/receiving/verifying-payloads/why",
            from: "/receiving/verifying-payloads",
          },
          {
            to: "/app-portal",
            from: "/management-ui",
          },
          {
            to: "/retries",
            from: "/account/retries"
          },
          {
            to: "/connectors",
            from: "/transformation-templates",
          }
        ],
      },
    ],
    [
      require.resolve('docusaurus-lunr-search'),
      {
      },
    ],
  ],
  scripts: [{
    src: "/js/r2b2.js",
    async: true,
    defer: true,
  }],
  markdown: {
    mdx1Compat: {
      comments: false,
      admonitions: false,
      headingIds: false,
    },
  }
};
