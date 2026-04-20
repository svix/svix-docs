import type { ReactNode } from 'react'
import { Tabs } from 'nextra/components'

const DEFAULT_CODE_TAB_ITEMS = [
  'JavaScript',
  'Python',
  'Rust',
  'Go',
  'Java',
  'Kotlin',
  'Ruby',
  'C#',
  'PHP',
  'CLI',
  'cURL',
] as const

export function CodeTabGroup({
  children,
  items,
}: {
  children: ReactNode
  /** When omitted, uses the full default language list (11 tabs). */
  items?: string[]
}) {
  const tabItems = items ?? [...DEFAULT_CODE_TAB_ITEMS]
  return (
    <Tabs storageKey="programming-language" items={tabItems}>
      {children}
    </Tabs>
  )
}

export const CodeTab = Tabs.Tab
