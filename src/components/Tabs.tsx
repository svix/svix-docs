import { Children, isValidElement, type ComponentProps, type ReactNode } from 'react'
import { Tabs } from "nextra/components"

function getTabIndex(node: ReactNode, tabItems: readonly string[]): number {
  if (!isValidElement<{ value: string }>(node)) return -1
  return tabItems.findIndex(item => item === node.props.value)
}

// This is a wrapper around nextra's Tabs component to allow declaring tab values in any order, using the value attribute of the Tab component.
// It will fail in build time if the tabs are invalid (invalid values, missing tabs for a specific value).
export function TabGroup({
  children,
  items,
  storageKey,
}: {
  children: ReactNode
  items: readonly string[]
  storageKey: string
}) {
  const childrenItems = Children.toArray(children);
  const childrenItemsKeys = childrenItems.map(e => {
    if (!isValidElement<{ value: string }>(e)) return null;
    return e.props.value;
  });

  if (childrenItems.some(e => getTabIndex(e, items) === -1)) {
    throw new Error(`Invalid Tab value, must be one of the TabGroup items`)
  }

  for (const item of items) {
    if (!childrenItemsKeys.includes(item)) {
      throw new Error(`Invalid Tab value, ${item} is not one of the TabGroup items`)
    }
  }

  const sortedChildren = childrenItems.sort((a, b) => {
    const aValue = getTabIndex(a, items)
    const bValue = getTabIndex(b, items)
    return aValue - bValue
  })

  return (
    <Tabs storageKey={storageKey} items={items as string[]}>
      {sortedChildren}
    </Tabs>
  )
}

type TabProps = ComponentProps<typeof Tabs.Tab> & {
  value: string
}

export function Tab(props: TabProps) {
  return <Tabs.Tab {...props} />
}
