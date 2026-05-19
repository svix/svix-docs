import { Callout, Steps } from 'nextra/components'
import { useMDXComponents as getThemeComponents } from 'nextra-theme-docs'
import { CodeTabs } from './src/components/CodeTabs'
import { CLITabs } from './src/components/CLITabs'
import { SlackJoinLink } from './src/components/SlackJoinLink'
import ConnectorLogo from './src/components/ConnectorLogo'
import clsx from 'clsx'
import Image from 'next/image'
import { Tabs } from 'nextra/components'

const themeComponents = getThemeComponents({
  img: function DocsImage({ className, ...props }) {
    return (
      <Image
        className={clsx('dark:bg-slate-50 rounded-md shadow-xs', className)}
        {...props}
      />
    )
  },
})

// Merge components
export function useMDXComponents(components) {
  return {
    ...themeComponents,
    ...components,
    Callout,
    Steps,
    CodeTabs,
    CLITabs,
    TabItem: Tabs.Tab,
    ConnectorLogo,
    SlackJoinLink,
  }
}
