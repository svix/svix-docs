import type { ReactNode } from 'react'
import { TabGroup } from './Tabs'

const CLI_TAB_ITEMS = ['NPM', 'Homebrew', 'Scoop', 'macOS', 'Linux', 'Windows'] as const

/** Install tabs for the CLI tutorial; children must be six `<TabItem>` panels in that order. */
export function CLITabs({ children }: { children: ReactNode }) {
  return (
    <TabGroup storageKey="cli-platform" items={CLI_TAB_ITEMS}>
      {children}
    </TabGroup>
  )
}
