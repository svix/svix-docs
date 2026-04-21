'use client'
// FIXME(lucho): make this pretty
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import {
  ArrowDownTrayIcon,
  ChevronDownIcon,
  PlayCircleIcon,
  SignalIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { CSSProperties } from 'react'

const BRAND_ICON_SRC = '/img/brand-small-icon.svg'

const edge: CSSProperties = {
  border: '1px solid color-mix(in oklab, currentColor 16%, transparent)',
  borderRadius: 6,
}

const row: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  width: '100%',
  padding: '6px 8px',
  fontSize: 13,
  color: 'inherit',
  textAlign: 'left',
  cursor: 'pointer',
  background: 'transparent',
}

type Product = {
  id: string
  name: string
  description: string
  path?: string
  href?: string
  hidden?: boolean
  icon: 'brand' | 'signal' | 'ingest' | 'play'
}

const products: Product[] = [
  {
    id: 'dispatch',
    name: 'Svix Dispatch',
    path: '/',
    description: 'Webhooks Sending',
    icon: 'brand',
  },
  {
    id: 'stream',
    name: 'Svix Stream',
    path: '/stream/introduction',
    description: 'Event Streaming',
    icon: 'signal',
  },
  {
    id: 'ingest',
    name: 'Svix Ingest',
    path: '/ingest/receiving-with-ingest',
    description: 'Webhooks Receiving',
    icon: 'ingest',
  },
  {
    id: 'play',
    name: 'Svix Play',
    href: 'https://svix.com/play',
    description: 'Webhooks Debugger',
    icon: 'play',
  },
]

function getSelectedProduct(pathname: string): Product {
  let p = pathname?.split('#')[0] ?? '/'
  if (p.length > 1 && p.endsWith('/')) {
    p = p.slice(0, -1)
  }
  const normalized = p === '' ? '/' : p

  if (normalized.startsWith('/stream')) {
    return products.find((p) => p.id === 'stream')!
  }
  if (normalized.startsWith('/ingest')) {
    return products.find((p) => p.id === 'ingest')!
  }
  if (normalized.startsWith('/play')) {
    return products.find((p) => p.id === 'play')!
  }
  // Dispatch docs live at the site root (/introduction, /api-keys, …), not under /dispatch.
  return products.find((p) => p.id === 'dispatch')!
}

const iconWrap: CSSProperties = {
  width: 20,
  height: 20,
  flexShrink: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

function ProductIcon({ kind }: { kind: Product['icon'] }) {
  const s: CSSProperties = { width: '100%', height: '100%', display: 'block' }
  if (kind === 'brand') {
    return (
      <span style={iconWrap}>
        <img src={BRAND_ICON_SRC} alt="" style={s} />
      </span>
    )
  }
  if (kind === 'signal') {
    return (
      <span style={iconWrap}>
        <SignalIcon width={20} height={20} aria-hidden />
      </span>
    )
  }
  if (kind === 'ingest') {
    return (
      <span style={iconWrap}>
        <ArrowDownTrayIcon width={20} height={20} aria-hidden />
      </span>
    )
  }
  return (
    <span style={iconWrap}>
      <PlayCircleIcon width={20} height={20} aria-hidden />
    </span>
  )
}

export function ProductSwitcher() {
  const pathname = usePathname() ?? '/'
  const selected = getSelectedProduct(pathname)

  if (selected.hidden) {
    return null
  }

  const visible = products.filter((p) => !p.hidden)

  const menuPanel: CSSProperties = {
    ...edge,
    marginTop: 4,
    minWidth: 200,
    padding: 4,
    zIndex: 50,
    background: 'rgb(var(--nextra-bg))',
    boxShadow: '0 4px 20px rgba(0,0,0,0.12)',
  }

  return (
    <Menu as="div" style={{ position: 'relative', width: '100%' }}>
      <MenuButton
        className="svix-product-switcher-trigger"
        style={{ ...row, ...edge, fontWeight: 600 }}
      >
        <ProductIcon kind={selected.icon} />
        <span className="svix-product-switcher-text" style={{ flex: 1, minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          {selected.name}
        </span>
        <ChevronDownIcon className="svix-product-switcher-chevron" width={16} height={16} style={{ flexShrink: 0, opacity: 0.5 }} aria-hidden />
      </MenuButton>

      <MenuItems anchor="bottom start" style={menuPanel}>
        {visible.map((product) => {
          const itemStyle: CSSProperties = {
            ...row,
            textDecoration: 'none',
            borderRadius: 4,
            outline: 'none',
            border: '1px solid transparent',
          }
          const label = (
            <>
              <ProductIcon kind={product.icon} />
              <span style={{ flex: 1, minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {product.name}
              </span>
            </>
          )

          if (product.href) {
            return (
              <MenuItem key={product.id} as="a" href={product.href} target="_blank" rel="noreferrer" style={itemStyle}>
                {label}
              </MenuItem>
            )
          }

          return (
            <MenuItem key={product.id} as={Link} href={product.path ?? '/'} prefetch={false} style={itemStyle}>
              {label}
            </MenuItem>
          )
        })}
      </MenuItems>
    </Menu>
  )
}
