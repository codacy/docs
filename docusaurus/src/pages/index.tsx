import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

import styles from './index.module.css';

export default function Home(): React.JSX.Element {
  return (
    <Layout title="Home" description="Codacy Docs homepage">
      <main className={styles.homepage}>
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <p className={styles.kicker}>Codacy Docs</p>
            <h1 className={styles.title}>Documentation that ships fast</h1>
            <p className={styles.subtitle}>
              Practical guides, API references, and release notes for Codacy.
            </p>
            <div className={styles.ctaRow}>
              <Link className={styles.primaryCta} to="/docs/">
                Explore docs
              </Link>
              <Link className={styles.secondaryCta} to="/docs/release-notes/">
                Release notes
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.grid}>
          <article className={styles.card}>
            <h2>Get started</h2>
            <p>Install, configure, and ship with confidence.</p>
            <Link to="/docs/getting-started/">Start here</Link>
          </article>
          <article className={styles.card}>
            <h2>API guides</h2>
            <p>Automate workflows with Codacy APIs.</p>
            <Link to="/docs/codacy-api/">Browse API docs</Link>
          </article>
          <article className={styles.card}>
            <h2>Integrations</h2>
            <p>Connect Codacy with your CI and SCM tools.</p>
            <Link to="/docs/repositories-configure/">See integrations</Link>
          </article>
        </section>
      </main>
    </Layout>
  );
}
