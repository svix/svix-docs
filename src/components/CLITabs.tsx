import type { ReactNode } from 'react'
import { Tabs } from 'nextra/components'

const CLI_TAB_ITEMS = ['Homebrew', 'Scoop', 'macOS', 'Linux', 'Windows'] as const

/** Install tabs for the CLI tutorial; children must be five `<CodeTab>` panels in that order. */
export function CLITabs({ children }: { children: ReactNode }) {
  return (
    <Tabs items={[...CLI_TAB_ITEMS]} defaultIndex={0} storageKey="cli-platform">
      {children}
    </Tabs>
  )
}
