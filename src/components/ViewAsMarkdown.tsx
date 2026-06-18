'use client'

import { Anchor } from 'nextra/components'
import { usePathname } from 'next/navigation'

// Matches the styling of nextra-theme-docs' "Edit this page" link so the two
// sit together consistently in the TOC sidebar.
const linkClassName =
  'x:text-xs x:font-medium x:transition x:text-gray-600 x:dark:text-gray-400 x:hover:text-gray-800 x:dark:hover:text-gray-200 x:contrast-more:text-gray-700 x:contrast-more:dark:text-gray-100'

export function ViewAsMarkdown() {
  const pathname = usePathname() ?? '/'
  const markdownPath = `${pathname === '/' ? '/introduction' : pathname}.md`

  return (
    <Anchor className={linkClassName} href={markdownPath}>
      View as Markdown
    </Anchor>
  )
}
