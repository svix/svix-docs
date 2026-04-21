import type { Meta } from 'nextra'
import { ProductSwitcher } from '../../app/components/ProductSwitcher'
import metaLinks from '../../src/nav-links'

const meta = {
  ...metaLinks,
  _productSwitcher: { type: 'separator', title: <ProductSwitcher /> },
  _usingIngest: { type: 'separator', title: 'Using Ingest' },
  'receiving-with-ingest': 'Receiving Webhooks with Ingest',
  transformations: 'Transformations',
  'source-errors': 'Source Errors',
} satisfies Meta

export default meta
