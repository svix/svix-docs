import React from 'react';
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/react';
import { useRouteMatch, Link } from 'react-router-dom';
import { SignalIcon, ArrowDownTrayIcon, ChevronDownIcon, PlayCircleIcon } from '@heroicons/react/24/outline';
import brandNavySmall from '../../../static/img/brand-small-icon.svg';

import styles from './styles.module.css';

const products = [
  {
    id: 'dispatch',
    name: 'Svix Dispatch',
    path: '/',
    description: 'Webhooks Sending',
    icon: brandNavySmall
  },
  {
    id: 'stream',
    name: 'Svix Stream',
    baseUrl: '/stream/',
    path: '/stream/introduction/',
    description: 'Event Streaming',
    icon: SignalIcon
  },
  {
    id: 'ingest',
    name: 'Svix Ingest',
    baseUrl: '/ingest',
    path: '/ingest/receiving-with-ingest',
    description: 'Webhooks Receiving',
    icon: ArrowDownTrayIcon
  },
  {
    id: 'play',
    name: 'Svix Play',
    baseUrl: '/play',
    href: 'https://svix.com/play',
    description: 'Webhooks Debugger',
    icon: PlayCircleIcon
  },
  {
    id: 'other',
    name: 'More',
    baseUrl: '/receiving',
    path: '/receiving/introduction/',
    description: 'Useful documentation',
    icon: brandNavySmall,
    hidden: true
  }
];

export default function ProductSwitcher() {
  const selectedProduct = products.find(p => useRouteMatch({ path: p.baseUrl === '/' ? '/' : `${p.baseUrl}*` })) || products[0];

  if (selectedProduct.hidden) {
    return null;
  }

  return (
    <Menu>
      <MenuButton className={styles.menuButton}>
        <div className={styles.iconContainer}>
          <selectedProduct.icon />
        </div>
        <div className={styles.productInfo}>
          <div className={styles.productName}>{selectedProduct.name}</div>
          <div className={styles.productDescription}>{selectedProduct.description}</div>
        </div>
        <ChevronDownIcon className={styles.chevron} />
      </MenuButton>

      <MenuItems className={styles.menuItems} anchor="bottom">

        <div className={styles.menuTitle}>Products</div>
        {products.filter(product => !product.hidden).map((product) => (
          <MenuItem
            key={product.id}
            className={styles.menuItem}
            as={product.href ? 'a' : Link}
            target={product.href ? '_blank' : undefined}
            to={product.path}
            href={product.href}
          >
            <>
              <div className={styles.menuItemIcon}>
                <product.icon />
              </div>
              <div className={styles.menuItemContent}>
                <div className={styles.menuItemName}>{product.name}</div>
                <div className={styles.menuItemDescription}>{product.description}</div>
              </div>
            </>
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
}
