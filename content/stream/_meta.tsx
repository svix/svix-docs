import type { Meta } from 'nextra'
import { ProductSwitcher } from '../../app/components/product-switcher'
import metaLinks from '../../src/nav-links'

const meta = {
  ...metaLinks,
  _productSwitcher: { type: 'separator', title: <ProductSwitcher /> },
  _intro: { type: 'separator', title: 'Svix Stream' },
  introduction: 'Introduction',
  'event-types': 'Event Types',
  sinks: 'Sinks',
  portal: 'Stream Portal',
} satisfies Meta

export default meta
