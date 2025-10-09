import React from 'react';
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { SignalIcon, ArrowDownTrayIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import brandNavySmall from '../../../static/img/brand-small-icon.svg';

import styles from './styles.module.css';

const products = [
  {
    id: 'dispatch',
    name: 'Svix Dispatch',
    url: '/',
    description: 'Webhooks Sending',
    icon: brandNavySmall
  },
  {
    id: 'stream',
    name: 'Svix Stream',
    baseUrl: '/stream/',
    url: '/stream/introduction/',
    description: 'Event Streaming',
    icon: SignalIcon
  },
  {
    id: 'ingest',
    name: 'Svix Ingest',
    baseUrl: '/receiving/',
    url: '/receiving/introduction/',
    description: 'Webhooks Receiving',
    icon: ArrowDownTrayIcon
  },
];

export default function ProductSwitcher() {
  const history = useHistory();
  const selectedProduct = products.find(p => useRouteMatch({ path: p.baseUrl === '/' ? '/' : `${p.baseUrl}*` })) || products[0];

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
        {products.map((product) => (
          <MenuItem
            key={product.id}
            as="button"
            onClick={() => history.push(product.url)}
            className={styles.menuItem}
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
