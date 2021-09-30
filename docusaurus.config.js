module.exports = {
  title: "Svix Docs",
  tagline: "Webhooks as a service",
  url: "https://docs.svix.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  themeConfig: {
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
          to: "https://www.svix.com/slack/",
          label: "Community",
          position: "left",
        },
        {
          to: "mailto:contact@svix.com",
          label: "Contact",
          position: "left",
        },
      ],
    },
    colorMode: {
      switchConfig: {
        darkIcon: "🌙",
        lightIcon: "☀️",
      },
    },
    footer: {
      style: "dark",
      copyright: `Copyright © Svix`,
    },
    prism: {
      additionalLanguages: ["ruby", "php", "java", "groovy", "csharp", "kotlin"],
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
        ],
      },
    ],
  ],
};
