import { Callout } from 'nextra/components'
import { useMDXComponents as getThemeComponents } from 'nextra-theme-docs' // nextra-theme-blog or your custom theme
import { CodeTab, CodeTabGroup } from './src/components/CodeTabs'
import { CLITabs } from './src/components/CLITabs'

// Get the default MDX components
const themeComponents = getThemeComponents()

// Merge components
export function useMDXComponents(components) {
  return {
    ...themeComponents,
    ...components,
    Callout,
    CodeTabGroup,
    CodeTab,
    CLITabs,
  }
}
