---
rss_title: Codacy release notes RSS feed
rss_href: /feed_rss_created.xml
---

# Deprecation of bundler-audit October 16, 2023

<!-- TODO TAROT-2399 Update with the correct date-->
On October 16th 2023 we deprecated the tool **bundler-audit** in favor of [**Trivy**](https://github.com/codacy/codacy-trivy), a more complete and actively maintained tool for detecting vulnerabilities in Ruby gems and other languages.

## If you are using bundler-audit

To continue monitoring your repositories for vulnerable Ruby gems, enable the **Trivy** tool in your [organization coding standards](../../organizations/using-coding-standards.md) (recommended) or on the [code patterns page](../../repositories-configure/configuring-code-patterns.md) of each of the affected repositories.

If you have any questions or need help, please contact <mailto:support@codacy.com>.
