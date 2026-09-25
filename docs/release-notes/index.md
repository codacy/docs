---
rss_title: Codacy release notes RSS feed
rss_href: /feed_rss_created.xml
description: Index of release notes for Codacy Cloud and Codacy Self-hosted.
icon: megaphone-outline
hide:
  - toc
---

# Codacy release notes

This section contains the release notes for Codacy Cloud and Codacy Self-hosted.

For product updates that are in progress or planned [visit the Codacy public roadmap instead](https://roadmap.codacy.com).

!!! tip
    Subscribe to this [<img style="height: 1em;" src="../assets/images/icon-rss-feed.svg" alt="Codacy release notes RSS feed"/> RSS feed](/feed_rss_created.xml) using your favorite news aggregator to receive notifications when there are new Codacy release notes.

## Codacy Cloud release notes {: id="cloud"}

### 2026 {.release-series}


-   [September 2, 2026](cloud/cloud-2026-09-adding-oxlint.md) <span class="release-digest__body">**Oxlint support:** Codacy can now analyze your JavaScript and TypeScript projects with Oxlint, a fast Rust-based linter from the Oxc project, and report results directly in your dashboard.</span>
-   [September 2, 2026](cloud/cloud-2026-08.md) <span class="release-digest__body">**Repository tokens for API v3:** scoped repository tokens are now fully supported end-to-end, with mandatory token lifetimes enforced. Also new: search and branch-scope filters on the Pull Requests page, and a Dart adapter for the Analysis CLI.</span>
-   [August 11, 2026](cloud/cloud-2026-07.md) <span class="release-digest__body">**Folder-level metrics:** browse a repository by folder with quality metrics scoped to each directory. Also new: affected entrypoint functions on vulnerable-dependency findings, a filter bar on the Pull Requests page, and PHP CS Fixer joining the supported tools.</span>
-   [July 29, 2026](cloud/cloud-2026-07-adding-shellcheck-config-file.md) <span class="release-digest__body">**Shellcheck configuration files:** You can now manage Shellcheck settings with a `.shellcheckrc` file in your repository instead of configuring analysis directly through the Codacy UI.</span>
-   [July 27, 2026](cloud/cloud-2026-07-adding-phpcsfixer-checkov-config-files.md) <span class="release-digest__body">**PHP CS Fixer:** joins Codacy's supported tools for PHP style violations. Also: Checkov analysis can now be configured with a `.checkov.yaml` or `.checkov.yml` file in your repository.</span>
-   [July 10, 2026](cloud/cloud-2026-07-remove-codesniffer-packages.md) <span class="release-digest__body">**PHP_CodeSniffer upgrade:** PHP_CodeSniffer is upgrading to its latest version, which drops support for several unmaintained coding standard packages, including the WordPress-VIP, Magento, and PHPCS Security Audit rule sets.</span>
-   [July 10, 2026](cloud/cloud-2026-06.md) <span class="release-digest__body">**Import chain visibility for vulnerable dependencies:** Codacy now shows the dependency chain behind a vulnerability. Also new: clearer CI/CD setup visibility in container scanning, and proxy support for Guardrails.</span>
-   [June 11, 2026](cloud/cloud-2026-05.md) <span class="release-digest__body">**Draft PR AI review control:** the PR reviewer no longer runs automatically on draft pull requests. Also new: AI suggestions in GitHub are deprecated in favor of the PR reviewer, and YAML analysis now covers `.env`, `.env.production`, `.env.prod`, and `.env.staging` files.</span>
-   [May 8, 2026](cloud/cloud-2026-04.md) <span class="release-digest__body">**Context-aware feedback loops:** the AI Reviewer (GitHub only) now factors in earlier comments across a pull request's lifetime. Also new: the Pull Request Summary Experience, replacing the legacy coverage summary settings.</span>
-   [April 15, 2026](cloud/cloud-2026-03.md) <span class="release-digest__body">**AI security and privacy safeguards:** the AI reviewer now masks secrets or credentials in code before it reaches AI models. Also new: a `review.md` file to tune the AI Reviewer's output, a manual "Run review" trigger on pull requests, and AI-powered test coverage suggestions with a ready-to-use prompt for your coding agent.</span>
-   [March 2, 2026](cloud/cloud-2026-03-github-integration-settings-changes.md) <span class="release-digest__body">**AI-enhanced comments deprecation:** AI-enhanced comments (Beta) are being replaced by the AI Reviewer on March 17, 2026. Also: the Coverage summary setting is being folded into the Pull request review comment — both migrations happen automatically.</span>
-   [March 6, 2026](cloud/cloud-2026-02.md) <span class="release-digest__body">**Migration from Semgrep to Opengrep:** following licensing changes to Semgrep, Codacy moved to Opengrep, an open-source fork of the same engine. Also new: an Organization Overview Dashboard with health, security, and coverage metrics, and text search for SRM findings.</span>
-   [February 19, 2026](cloud/cloud-2026-02-migrating-semgrep.md) <span class="release-digest__body">**Semgrep to Opengrep:** Following licensing changes to Semgrep, Codacy switched to Opengrep as a 1:1 replacement, preserving all existing patterns, issue history, and configuration.</span>
-   [January 5, 2026](cloud/cloud-2026-01.md) <span class="release-digest__body">**GolangCI-Lint integration:** a new wrapper runs over 100 linters in a single pass, extending how much of your Go code Codacy checks in one analysis. Also new: a dedicated VS Code setup section for configuring the extension.</span>
-   [January 13, 2026](cloud/cloud-2026-01-adding-golangci-lint.md) <span class="release-digest__body">**GolangCI-Lint (client-side):** Run GolangCI-Lint locally on your Go projects and upload the results to Codacy for analysis and reporting.</span>

### 2025 {.release-series}

-   [Cloud December 2025](cloud/cloud-2025-12.md)
-   [Cloud November 2025](cloud/cloud-2025-11.md)
-   [Cloud October 2025](cloud/cloud-2025-10.md)
-   [Cloud September 2025](cloud/cloud-2025-09.md)
-   [Cloud August 2025](cloud/cloud-2025-08.md)
-   [Cloud July 2025](cloud/cloud-2025-07.md)
-   [Cloud June 2025](cloud/cloud-2025-06.md)
-   [Adding SQLFluff and Reek as new supported tools June, 2025](cloud/cloud-2025-06-adding-sqlfluff-reek.md)
-   [Cloud May 2025](cloud/cloud-2025-05.md)
-   [Cloud April 2025](cloud/cloud-2025-04.md)
-   [Cloud March 2025](cloud/cloud-2025-03.md)
-   [Adding Ruff and Lizard as new supported tools February, 2025](cloud/cloud-2025-02-adding-ruff-lizard.md)
-   [Cloud February 2025](cloud/cloud-2025-02.md)
-   [Cloud January 2025](cloud/cloud-2025-01.md)

### 2024 {.release-series}

-   [Cloud December 2024](cloud/cloud-2024-12.md)
-   [Cloud November 2024](cloud/cloud-2024-11.md)
-   [Cloud October 2024](cloud/cloud-2024-10.md)
-   [Cloud September 2024](cloud/cloud-2024-09.md)
-   [Adding ESLint 9 and PMD 7 as new supported tools September, 2024](cloud/cloud-2024-09-adding-eslint9-and-pmd7.md)
-   [Cloud August 2024](cloud/cloud-2024-08.md)
-   [Cloud July 2024](cloud/cloud-2024-07.md)
-   [Cloud June 2024](cloud/cloud-2024-06.md)
-   [Cloud May 2024](cloud/cloud-2024-05.md)
-   [Cloud April 2024](cloud/cloud-2024-04.md)
-   [Cloud March 2024](cloud/cloud-2024-03.md)
-   [Cloud February 2024](cloud/cloud-2024-02.md)
-   [Cloud January 2024](cloud/cloud-2024-01.md)
-   [Discontinuation of SSH keys for GitHub repositories January 15, 2024](cloud/cloud-2024-01-15-gh-repository-ssh-keys-discontinuation.md)

### 2023 {.release-series}

-   [Cloud December 2023](cloud/cloud-2023-12.md)
-   [Cloud November 2023](cloud/cloud-2023-11.md)
-   [Rollout of new Coverage engine November 23, 2023](cloud/cloud-2023-11-23-new-coverage-engine-status-checks.md)
-   [Removal of Jira, Slack, and Webhooks repository integrations November 13, 2023](cloud/cloud-2023-11-13-jira-slack-webhooks-repo-integrations-removal.md)
-   [Cloud October 2023](cloud/cloud-2023-10.md)
-   [Deprecation of CSSLint, JSHint, Faux Pas, Tailor, TSLint October 25, 2023](cloud/cloud-2023-10-25-csslint-jshint-fauxpas-tailor-tslint-deprecation.md)
-   [Deprecation of bundler-audit October 13, 2023](cloud/cloud-2023-10-13-bundler-audit-deprecation.md)
-   [Cloud September 2023](cloud/cloud-2023-09.md)
-   [Cloud August 2023](cloud/cloud-2023-08.md)
-   [Cloud July 2023](cloud/cloud-2023-07.md)
-   [Cloud June 2023](cloud/cloud-2023-06.md)
-   [Cloud May 2023](cloud/cloud-2023-05.md)
-   [Cloud April 2023](cloud/cloud-2023-04.md)
-   [Cloud March 2023](cloud/cloud-2023-03.md)
-   [Cloud February 2023](cloud/cloud-2023-02.md)
-   [Cloud January 2023](cloud/cloud-2023-01.md)

### 2022 {.release-series}

-   [Cloud December 2022](cloud/cloud-2022-12.md)
-   [Cloud November 2022](cloud/cloud-2022-11.md)
-   [Cloud October 2022](cloud/cloud-2022-10.md)
-   [Cloud September 2022](cloud/cloud-2022-09.md)
-   [Cloud August 2022](cloud/cloud-2022-08.md)
-   [Cloud July 2022](cloud/cloud-2022-07.md)
-   [Cloud June 2022](cloud/cloud-2022-06.md)
-   [Cloud May 2022](cloud/cloud-2022-05.md)
-   [Cloud April 2022](cloud/cloud-2022-04.md)
-   [Cloud March 2022](cloud/cloud-2022-03.md)
-   [Adding ESLint 8 as a supported tool March 31, 2022](cloud/cloud-2022-03-31-adding-eslint8.md)
-   [Cloud February 2022](cloud/cloud-2022-02.md)
-   [Removal of PMD (Legacy) February 16, 2022](cloud/cloud-2022-02-16-pmd-legacy-removal.md)
-   [Cloud January 2022](cloud/cloud-2022-01.md)

### 2021 {.release-series}

-   [Cloud December 2021](cloud/cloud-2021-12.md)
-   [Cloud November 2021](cloud/cloud-2021-11.md)
-   [Cloud October 2021](cloud/cloud-2021-10.md)
-   [Cloud September 2021](cloud/cloud-2021-09.md)
-   [End of support for legacy manual organizations November 2, 2021](cloud/cloud-2021-11-02-legacy-organizations.md)
-   [Cloud August 2021](cloud/cloud-2021-08.md)
-   [Performing scheduled database maintenance July 3, 2021](cloud/cloud-2021-07-03-scheduled-db-maintenance.md)

### 2020 {.release-series}

-   [Deprecating HTTP headers for API tokens April 1, 2020](cloud/cloud-2020-04-01-deprecating-http-headers-for-api-tokens.md)
-   [Removal of NodeSecurity, GoLint, and SCSS Lint March 9, 2020](cloud/cloud-2020-03-09-nodesecurity-golint-scsslint-removal.md)
-   [Codacy now supports GitHub Apps February 2, 2020](cloud/cloud-2020-02-github-apps.md)

### 2019 {.release-series}

-   [Cloud November 15, 2019](cloud/cloud-2019-11-15.md)
-   [Cloud October 30, 2019](cloud/cloud-2019-10-30.md)
-   [Cloud September 5, 2019](cloud/cloud-2019-09-05.md)
-   [Cloud August 7, 2019](cloud/cloud-2019-08-07.md)
-   [Cloud June 18, 2019](cloud/cloud-2019-06-18.md)
-   [Cloud May 20, 2019](cloud/cloud-2019-05-20.md)
-   [Cloud May 5, 2019](cloud/cloud-2019-05-05.md)
-   [Cloud April 8, 2019](cloud/cloud-2019-04-08.md)
-   [Cloud March 29, 2019](cloud/cloud-2019-03-29.md)
-   [Bitbucket changes February 18, 2019](cloud/cloud-2019-02-18-bitbucket-changes.md)
-   [Cloud January 2, 2019](cloud/cloud-2019-01-02.md)

### 2018 {.release-series}

-   [Cloud November 16, 2018](cloud/cloud-2018-11-16.md)
-   [Cloud November 2, 2018](cloud/cloud-2018-11-02.md)
-   [Cloud October 19, 2018](cloud/cloud-2018-10-19.md)
-   [Cloud July 23, 2018](cloud/cloud-2018-07-23.md)

## Codacy Self-hosted release notes {: id="self-hosted"}

### v16 {.release-series}

-   [v16.0.0](self-hosted/self-hosted-v16.0.0.md) (January, 2026)

### v15 {.release-series}

-   [v15.0.0](self-hosted/self-hosted-v15.0.0.md) (April 10, 2025)

### v14 {.release-series}

-   [v14.1.1](self-hosted/self-hosted-v14.1.1.md) (March 10, 2025)
-   [v14.0.0](self-hosted/self-hosted-v14.0.0.md) (June 26, 2024)

### v13 {.release-series}

-   [v13.0.0](self-hosted/self-hosted-v13.0.0.md) (November 23, 2023)

### v12 {.release-series}

-   [v12.0.0](self-hosted/self-hosted-v12.0.0.md) (July 20, 2023)

### v11 {.release-series}

-   [v11.0.0](self-hosted/self-hosted-v11.0.0.md) (April 20, 2023)

### v10 {.release-series}

-   [v10.0.0](self-hosted/self-hosted-v10.0.0.md) (February 3, 2023)

### v9 {.release-series}

-   [v9.0.0](self-hosted/self-hosted-v9.0.0.md) (September 23, 2022)

### v8 {.release-series}

-   [v8.1.0](self-hosted/self-hosted-v8.1.0.md) (June 17, 2022)
-   [v8.0.0](self-hosted/self-hosted-v8.0.0.md) (May 12, 2022)

### v7 {.release-series}

-   [v7.0.0](self-hosted/self-hosted-v7.0.0.md) (April 4, 2022)

### v6 {.release-series}

-   [v6.0.0](self-hosted/self-hosted-v6.0.0.md) (March 2, 2022)

### v5 {.release-series}

-   [v5.1.0](self-hosted/self-hosted-v5.1.0.md) (January 6, 2022)
-   [v5.0.0](self-hosted/self-hosted-v5.0.0.md) (December 17, 2021)

### v4 {.release-series}

-   [v4.4.0](self-hosted/self-hosted-v4.4.0.md) (October 12, 2021)
-   [v4.3.0](self-hosted/self-hosted-v4.3.0.md) (September 16, 2021)
-   [v4.2.0](self-hosted/self-hosted-v4.2.0.md) (August 31, 2021)
-   [v4.1.0](self-hosted/self-hosted-v4.1.0.md) (July 6, 2021)
-   [v4.0.1](self-hosted/self-hosted-v4.0.1.md) (June 2, 2021)
-   [v4.0.0](self-hosted/self-hosted-v4.0.0.md) (May 18, 2021)

### v3 {.release-series}

-   [v3.5.1](self-hosted/self-hosted-v3.5.1.md) (June 1, 2021)
-   [v3.5.0](self-hosted/self-hosted-v3.5.0.md) (March 31, 2021)
-   [v3.4.0](self-hosted/self-hosted-v3.4.0.md) (March 12, 2021)
-   [v3.3.0](self-hosted/self-hosted-v3.3.0.md) (February 12, 2021)
-   [v3.2.0](self-hosted/self-hosted-v3.2.0.md) (December 17, 2020)
-   [v3.1.0](self-hosted/self-hosted-v3.1.0.md) (December 10, 2020)
-   [v3.0.0](self-hosted/self-hosted-v3.0.0.md) (November 2, 2020)

### v2 {.release-series}

-   [v2.2.1](self-hosted/self-hosted-v2.2.1.md) (October 22, 2020)
-   [v2.2.0](self-hosted/self-hosted-v2.2.0.md) (October 8, 2020)
-   [v2.1.1](self-hosted/self-hosted-v2.1.1.md) (September 24, 2020)
-   [v2.1.0](self-hosted/self-hosted-v2.1.0.md) (September 16, 2020)
-   [v2.0.0](self-hosted/self-hosted-v2.0.0.md) (August 18, 2020)

### v1 {.release-series}

-   [v1.5.0](self-hosted/self-hosted-v1.5.0.md) (July 20, 2020)
-   [v1.4.0](self-hosted/self-hosted-v1.4.0.md) (June 23, 2020)
-   [v1.3.0](self-hosted/self-hosted-v1.3.0.md) (June 12, 2020)
-   [v1.2.0](self-hosted/self-hosted-v1.2.0.md) (June 4, 2020)
-   [v1.1.0](self-hosted/self-hosted-v1.1.0.md) (May 26, 2020)
-   [v1.0.1](self-hosted/self-hosted-v1.0.1.md) (May 21, 2020)
-   [v1.0.0](self-hosted/self-hosted-v1.0.0.md) (May 18, 2020)
