import type { Meta } from 'nextra'
import metaLinks from '../../src/nav-links'

const meta = {
  ...metaLinks,
  introduction: 'Introduction',
  'using-app-portal': 'Using the App Portal',
  'verifying-payloads': 'Verifying Webhooks',
  'webhooks-autoconfig': 'Receiving with Webhooks AutoConfig',
  'additional-authentication': 'Additional Authentication',
  'delivery-control': 'Delivery Control',
  'source-ips': 'Static Source IP Addresses',
} satisfies Meta

export default meta
