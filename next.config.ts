import type { NextConfig } from 'next'
import nextra from 'nextra'

// Set up Nextra with its configuration
const withNextra = nextra({
  // ... Add Nextra-specific options here
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
      { source: '/receiving/verifying-payloads', destination: '/receiving/verifying-payloads/why', permanent: false },
      { source: '/ingest', destination: '/ingest/receiving-with-ingest', permanent: false },
      { source: '/receiving/receiving-with-ingest', destination: '/ingest/receiving-with-ingest', permanent: false },
      { source: '/management-ui', destination: '/app-portal', permanent: false },
      { source: '/account/retries', destination: '/retries', permanent: false },
      { source: '/transformation-templates', destination: '/connectors', permanent: false },
      { source: '/polling-endpoints', destination: '/advanced-endpoints/polling-endpoints', permanent: false },
      { source: '/rate-limit', destination: '/throttling', permanent: false },

    ]
  },
  devIndicators: false,
  ...(process.env.CI && ciExportConfig),
}

export default withNextra(nextConfig)
