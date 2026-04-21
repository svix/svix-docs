import type { NextConfig } from 'next'
import nextra from 'nextra'

const withNextra = nextra({
  defaultShowCopyCode: true,
  readingTime: true,
})

const ciExportConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  }
};

const nextConfig: NextConfig = {
  redirects: async () => {
    return [
      { source: '/', destination: '/introduction', permanent: false },
      { source: '/advanced-endpoints/intro', destination: '/advanced-endpoints', permanent: true },
      { source: '/connectors/connectors', destination: '/connectors', permanent: true },
      { source: '/tutorials/connectors', destination: '/tutorials/slack-connector', permanent: true },
      { source: '/receiving/verifying-payloads', destination: '/receiving/verifying-payloads/why', permanent: false },
      { source: '/ingest', destination: '/ingest/receiving-with-ingest', permanent: false },
      { source: '/receiving/receiving-with-ingest', destination: '/ingest/receiving-with-ingest', permanent: false },
      { source: '/receiving', destination: '/receiving/introduction', permanent: false },
      { source: '/management-ui', destination: '/app-portal', permanent: true },
      { source: '/account/retries', destination: '/retries', permanent: true },
      { source: '/transformation-templates', destination: '/connectors', permanent: true },
      { source: '/polling-endpoints', destination: '/advanced-endpoints/polling-endpoints', permanent: true },
      { source: '/rate-limit', destination: '/throttling', permanent: true },
    ]
  },
  devIndicators: false,
  ...(process.env.CI && ciExportConfig),
}

export default withNextra(nextConfig)
