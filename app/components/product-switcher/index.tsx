'use client'

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import {
  ArrowDownTrayIcon,
  ChevronDownIcon,
  PlayCircleIcon,
  SignalIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { faGem } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BrandSmallIcon } from './BrandSmallIcon'

type Product = {
  id: string
  name: string
  description: string
  path?: string
  href?: string
  hidden?: boolean
  icon: React.ReactNode
}

const products: Product[] = [
  {
    id: 'dispatch',
    name: 'Svix Dispatch',
    path: '/',
    description: 'Webhooks Sending',
    icon: <BrandSmallIcon className="shrink-0 text-gray-500 dark:text-neutral-400" />,
  },
  {
    id: 'stream',
    name: 'Svix Stream',
    path: '/stream/introduction',
    description: 'Event Streaming',
    icon: <SignalIcon width={20} height={20} aria-hidden />,
  },
  {
    id: 'ingest',
    name: 'Svix Ingest',
    path: '/ingest/receiving-with-ingest',
    description: 'Webhooks Receiving',
    icon: <ArrowDownTrayIcon width={20} height={20} aria-hidden />,
  },
  {
    id: 'play',
    name: 'Svix Play',
    href: 'https://svix.com/play',
    description: 'Webhooks Debugger',
    icon: <PlayCircleIcon width={20} height={20} aria-hidden />,
  },
  {
    id: 'diom',
    name: 'Diom',
    href: 'https://diom.svix.com/docs',
    description: 'Backend Components',
    icon: <FontAwesomeIcon icon={faGem} width={20} height={20} />,
  }
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
  return products.find((p) => p.id === 'dispatch')!
}

export function ProductSwitcher() {
  const pathname = usePathname() ?? '/'
  const selected = getSelectedProduct(pathname)

  if (selected.hidden) {
    return null
  }

  const visible = products.filter((p) => !p.hidden)

  return (
    <Menu as="div" data-product-switcher>
      <MenuButton
        type="button"
        className="flex items-center justify-between gap-2 px-4 py-3 rounded-md hover:bg-gray-100 dark:hover:bg-neutral-800/50 cursor-pointer border nextra-border transition-all duration-300 w-full outline-none"
      >
        {selected.icon}
        <div className="flex flex-col ml-1 text-left">
          <span>{selected.name}</span>
          <span className="text-xs text-gray-500 dark:text-neutral-400 font-normal">{selected.description}</span>
        </div>

        <ChevronDownIcon width={16} height={16} aria-hidden className="ml-auto" />
      </MenuButton>

      <MenuItems
        anchor="bottom"
        className="flex flex-col bg-[rgb(var(--nextra-bg))] outline-none mt-2 w-[16em] mx-4 shadow-md rounded-md border nextra-border"
      >
        <span className="text-sm text-gray-500 dark:text-neutral-400 px-4 py-2">Products</span>
        {visible.map((product) => {
          return (
            <MenuItem
              key={product.id}
              as={product.href ? Link : 'a'}
              href={product.href ?? product.path ?? '/'}
              className="flex items-center gap-2 px-4 py-3 hover:bg-gray-100 dark:hover:bg-neutral-800/50 cursor-pointer border-t nextra-border"
            >
              {product.icon}
              <div className="flex flex-col ml-2">
                <span className="text-sm font-medium">{product.name}</span>
                <span className="text-xs text-gray-500 dark:text-neutral-400 font-normal">{product.description}</span>
              </div>
            </MenuItem>
          )
        })}
      </MenuItems>
    </Menu >
  )
}
