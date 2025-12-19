import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import {useDocsSidebar} from '@docusaurus/plugin-content-docs/client';
import type {Props} from '@theme/DocRoot/Layout/Main';

import styles from './styles.module.css';

export default function DocRootLayoutMain({
  hiddenSidebarContainer,
  children,
}: Props): ReactNode {
  const sidebar = useDocsSidebar();
  const isEnhanced = hiddenSidebarContainer || !sidebar;

  return (
    <main
      className={clsx(
        styles.docMainContainer,
        isEnhanced && styles.docMainContainerEnhanced,
      )}>
      <div className={styles.docItemWrapperOuter}>
        <div
          className={clsx(
            'container',
            styles.docItemWrapper,
            hiddenSidebarContainer && styles.docItemWrapperEnhanced,
          )}>
          <div className={styles.docItemWrapperInner}>{children}</div>
        </div>
      </div>
    </main>
  );
}
