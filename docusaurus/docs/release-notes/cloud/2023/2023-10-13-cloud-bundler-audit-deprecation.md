---
title: Deprecation of bundler-audit October 13, 2023
rss_title: Codacy release notes RSS feed
rss_href: /feed_rss_created.xml
slug: /release-notes/cloud/cloud-2023-10-13-bundler-audit-deprecation
---


On October 13th 2023 we deprecated the tool **bundler-audit** in favor of [**Trivy**](https://github.com/codacy/codacy-trivy), a more complete and actively maintained tool for detecting vulnerabilities in Ruby gems and other languages, with a vulnerability database that's updated daily.

## Removal of bundler-audit January 1, 2024

On January 1st, 2024 we'll be removing **bundler-audit** from Codacy.

## If you are using bundler-audit

To continue monitoring your repositories for vulnerable Ruby gems, enable the **Trivy** tool in your [organization coding standards](../../../organizations/using-coding-standards.md) (recommended) or on the [code patterns page](../../../repositories-configure/configuring-code-patterns.md) of each of the affected repositories.

For new repositories, **Trivy** will be active by default.

If you have any questions or need help, please contact [support@codacy.com](mailto:support@codacy.com).
