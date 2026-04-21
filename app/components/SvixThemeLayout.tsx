'use client'
// FIXME(lucho): weird af hack to get the root pages to hide in the sidebar when in ingest/stream/receiving
import { Meta, PageMapItem } from 'nextra'
import { Layout } from 'nextra-theme-docs'
import { useFSRoute } from 'nextra/hooks'
import { useMemo, type ComponentProps } from 'react'

export function SvixThemeLayout(props: ComponentProps<typeof Layout>) {
  const { pageMap, ...rest } = props
  const route = useFSRoute()
  const map = useMemo(() => filterPageMapByProduct(pageMap, route), [pageMap, route])
  return <Layout pageMap={map} {...rest} />
}

const PRODUCT_ROOTS = ['/ingest', '/stream', '/receiving'] as const

/**
 * On ingest/stream/receiving, drop top-level `doc` entries so the sidebar only shows navbar roots
 * (`type: 'page'` / `type: 'menu'` in `content/_meta.tsx`).
 *
 * @param route Filesystem route from Nextra, e.g. `useFSRoute()` (already normalized; no hash).
 */
export function filterPageMapByProduct(pageMap: PageMapItem[], route: string): PageMapItem[] {
  const isRootRoute = PRODUCT_ROOTS.some((root) => route === root || route.startsWith(`${root}/`))
  if (!isRootRoute) {
    return pageMap
  }

  // Hide top-level `doc` entries so the sidebar only shows navbar roots (`type: 'page'` / `type: 'menu'` in `content/_meta.tsx`).
  const metaFile = pageMap[0]
  if (metaFile === undefined || !('data' in metaFile) || typeof metaFile.data !== 'object' || metaFile.data === null) {
    return pageMap
  }

  const meta = metaFile.data as Record<string, Meta>
  const rest = pageMap.slice(1).filter((item) => {
    if (!('name' in item)) {
      return true
    }
    const entry = meta[item.name]
    if (typeof entry !== 'object' || entry === null) {
      return false
    }
    if (entry.type === 'page' || entry.type === 'menu') {
      return true
    }
    // Keep the product switcher separator; other separators stay hidden on product roots (see comment above).
    return entry.type === 'separator' && item.name === '_productSwitcher'
  })

  return [metaFile, ...rest]
}
