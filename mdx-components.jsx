import { Callout } from 'nextra/components'
import { useMDXComponents as getThemeComponents } from 'nextra-theme-docs'
import { CodeTab, CodeTabGroup } from './src/components/CodeTabs'
import { CLITabs } from './src/components/CLITabs'
import ConnectorLogo from './src/components/ConnectorLogo'
import clsx from 'clsx'
import Image from 'next/image'

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
    CodeTabGroup,
    CodeTab,
    CLITabs,
    ConnectorLogo,
  }
}
