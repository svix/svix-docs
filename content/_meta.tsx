import { Meta } from "nextra"

const meta = {
  '*': {
    type: 'page' as const,
  },
  dispatch: {
    title: 'Svix Dispatch',
    type: 'page' as const,
  },
  stream: {
    title: 'Svix Stream',
    type: 'page' as const,
  },
  ingest: {
    title: 'Svix Ingest',
    type: 'page' as const,
  },
  receiving: {
    title: 'Consuming Webhooks',
    type: 'page' as const,
  },
} satisfies Meta

export default meta
