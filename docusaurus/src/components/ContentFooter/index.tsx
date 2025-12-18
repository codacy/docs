import React from 'react';

import styles from './styles.module.css';

export default function ContentFooter(): React.JSX.Element {
  return (
    <div className={styles.contentFooter}>
      <div className={styles.inner}>
        <div className={styles.meta}>
          Copyright © {new Date().getFullYear()} Codacy.
        </div>
      </div>
    </div>
  );
}
