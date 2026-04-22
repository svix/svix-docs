import { type ReactNode } from 'react'
import { TabGroup } from './Tabs'

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

export function CodeTabs({
  children,
  items = DEFAULT_CODE_TAB_ITEMS,
}: {
  children: ReactNode
  /** When omitted, uses the full default language list (11 tabs). */
  items?: readonly string[]
}) {
  return <TabGroup storageKey="programming-language" items={items}>{children}</TabGroup>
}
