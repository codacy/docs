import React from 'react';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import styles from './styles.module.css';

type FooterLink = {label: string; href: string};
type FooterSocialLink = FooterLink & {icon: string};

export default function Footer(): React.JSX.Element {
  const year = new Date().getFullYear();
  const {siteConfig} = useDocusaurusContext();
  const customFields = siteConfig.customFields as {
    footerNavLinks?: FooterLink[];
    footerSocialLinks?: FooterSocialLink[];
    footerPrivacyLink?: FooterLink;
  };
  const navLinks = customFields?.footerNavLinks ?? [];
  const socialLinks = customFields?.footerSocialLinks ?? [];
  const privacyLink = customFields?.footerPrivacyLink ?? null;

  return (
    <footer className={styles.footer}>
      <Head>
        <script
          type="module"
          src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
        />
        <script
          nomodule
          src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
        />
      </Head>
      <div className={styles.inner}>
        <div className={styles.left}>
          <div className={styles.social}>
            {socialLinks.map((item) => (
              <Link
                key={item.label}
                className={styles.iconLink}
                href={item.href}
                aria-label={item.label}>
                <ion-icon className={styles.icon} name={item.icon} />
              </Link>
            ))}
          </div>
          <nav className={styles.nav}>
            {navLinks.map((item) => (
              <Link key={item.label} className={styles.navLink} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className={styles.right}>
          { privacyLink && (
            <Link className={styles.navLink} href={privacyLink.href}>
              {privacyLink.label}
            </Link>
          )}
          <span className={styles.copy}>© {year} Codacy</span>
        </div>
      </div>
    </footer>
  );
}
