import type { Meta } from 'nextra'
import { ProductSwitcher } from '../../app/components/ProductSwitcher'

const meta = {
  _productSwitcher: { type: 'separator', title: <ProductSwitcher /> },
  introduction: 'Introduction',
  'event-types': 'Event Types',
  sinks: 'Sinks',
  portal: 'Stream Portal',
} satisfies Meta

export default meta
