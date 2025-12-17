---
title: Adding ESLint 9 and PMD 7 as new supported tools September, 2024
rss_title: Codacy release notes RSS feed
rss_href: /feed_rss_created.xml
---


On September, 2024 Codacy added ESLint 9 and PMD 7 as new supported tools and it will deprecate ESLint 8 and PMD 6 soon:

-   ESLint 9 and PMD 7 won't be enabled by default for new repositories. Update these tools version to benefit from the new features and fixes.

-   ESLint 8 and PMD 6 will still be available but Codacy will stop providing updates for this version of the tool, and it will be deprecated

-   ESLint 7 will be deleted

## Migrating your configuration files to use ESLint 9

ESLint 9 [introduces breaking changes](https://eslint.org/blog/2024/04/eslint-v9.0.0-released/) that may affect the analysis of your repositories.

**If you're using the following [ESLint configuration files](https://eslint.org/docs/user-guide/configuring/configuration-files) ".eslintrc.js", ".eslintrc.cjs", ".eslintrc.yaml", ".eslintrc.yml", ".eslintrc.json"** you must update your configuration file before enabling ESLint 9 on Codacy because the only **[ESLint configuration files](https://eslint.org/docs/user-guide/configuring/configuration-files) supported are "eslint.config.js", "eslint.config.mjs", "eslint.config.cjs" and you can check how to create them [here](https://eslint.org/docs/latest/use/configure/configuration-files)**

If you have any questions or need help, please contact <mailto:support@codacy.com>.

## PMD 7

PMD 7 [introduces some changes](https://pmd.github.io/2024/03/22/PMD-7-is-here/)

**PMD 7 now supports Kotlin, Swift and TypeScript, apart from the other languages already part of the previous version of the tool**

If you have any questions or need help, please contact <mailto:support@codacy.com>.
