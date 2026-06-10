/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://docs.svix.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },

  trailingSlash: false,
  // Non-content routes: icon/image metadata routes and the generated robots/sitemap files.
  exclude: ['/apple-icon.png', '/icon.png', '/icon.svg', '/robots.txt', '/sitemap.xml'],
  changefreq: 'weekly',
  priority: 0.7,
  transform: async (config, path) => ({
    loc: path,
    changefreq: config.changefreq,
    priority: path === '/' ? 1 : config.priority,
  }),
}
