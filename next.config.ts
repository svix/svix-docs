import type { NextConfig } from 'next'
import nextra from 'nextra'

const withNextra = nextra({
  defaultShowCopyCode: true,
  readingTime: true,
})

const ciExportConfig: NextConfig = {
  output: "export",
};

const nextConfig: NextConfig = {
  redirects: async () => {
    return [
      { source: '/', destination: '/introduction', permanent: false },
      { source: '/advanced-endpoints/:path*', destination: '/advanced-destinations/:path*', permanent: true },
      { source: '/advanced-destinations/intro', destination: '/advanced-destinations', permanent: true },
      { source: '/connectors/connectors', destination: '/connectors', permanent: true },
      { source: '/tutorials/connectors', destination: '/tutorials/slack-connector', permanent: true },
      { source: '/receiving/verifying-payloads', destination: '/receiving/verifying-payloads/why', permanent: false },
      { source: '/ingest', destination: '/ingest/receiving-with-ingest', permanent: false },
      { source: '/receiving/receiving-with-ingest', destination: '/ingest/receiving-with-ingest', permanent: false },
      { source: '/receiving', destination: '/receiving/introduction', permanent: false },
      { source: '/management-ui', destination: '/app-portal', permanent: true },
      { source: '/account/retries', destination: '/retries', permanent: true },
      { source: '/transformation-templates', destination: '/connectors', permanent: true },
      { source: '/polling-endpoints', destination: '/advanced-destinations/polling-endpoints', permanent: true },
      { source: '/rate-limit', destination: '/throttling', permanent: true },
      { source: '/rate-limiting', destination: '/throttling', permanent: true },
      { source: '/entities-overview', destination: '/overview', permanent: true },
      { source: '/consumer-app-portal', destination: '/app-portal', permanent: true },
      { source: '/operational-webhooks', destination: '/incoming-webhooks', permanent: true },
      { source: '/retry-schedule', destination: '/retries', permanent: true },
      { source: '/receiving/using-the-app-portal', destination: '/receiving/using-app-portal/event-catalog', permanent: true },
      { source: '/receiving/using-polling-endpoints', destination: '/receiving/using-app-portal/polling-endpoints', permanent: true },
      { source: '/receiving/:page(event-catalog|adding-endpoints|testing-events|filtering-logs|replaying-messages|polling-endpoints)', destination: '/receiving/using-app-portal/:page', permanent: true },
      { source: '/receiving/verifying-webhooks/:page(why|how)', destination: '/receiving/verifying-payloads/:page', permanent: true },
      { source: '/receiving/verifying-webhooks/bridge', destination: '/receiving/verifying-payloads/receiving-with-bridge', permanent: true },
      { source: '/receiving/verifying-webhooks/manual', destination: '/receiving/verifying-payloads/how-manual', permanent: true },
      { source: '/receiving/verifying-webhooks/additional-authentication', destination: '/receiving/additional-authentication', permanent: true },
      { source: '/receiving/verifying-webhooks/static-ips', destination: '/receiving/source-ips', permanent: true },
    ]
  },
  rewrites: async () => {
    return [
      {
        source: '/:path(.+)\\.md',
        destination: '/generated/md/:path.md',
      }
    ]
  },
  devIndicators: false,
  ...(process.env.CI && ciExportConfig),
}

export default withNextra(nextConfig)
