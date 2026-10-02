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
-   [September 2, 2026](cloud/cloud-2026-08.md) <span class="release-digest__body">**Repository (Project) Tokens for API v3:** Full rollout of scoped repository tokens — creation, listing, deletion (single & bulk), and expiration is now supported end-to-end across all features of our product.<br><br>**Mandatory token expiration & auditability:** Repository tokens now enforce a maximum lifetime, surfaced in both the API and the SPA.<br><br>**Pull Requests page filters:** New search + branch-scope filter bar on the Pull Requests page, backed by API support and a new `pull-requests list` command in the Cloud CLI.<br><br>**Dart support in the Analysis CLI:** Added a `dartanalyzer` adapter, closing a cli-v2 parity gap for Dart projects.</span>
-   [August 11, 2026](cloud/cloud-2026-07.md) <span class="release-digest__body">**Folder-Level Metrics:** Users can now browse their repositories by folder and view quality metrics — issues, complexity, coverage, and duplication — scoped to each directory. Folder navigation, search, and branch-keyed overviews are all included.<br><br>**Affected Functions in Security Findings:** Security dependency findings now surface the affected entrypoint functions, so teams can immediately see which code paths are reachable from a vulnerable dependency. The functions are visible in the Findings card, in the cloud CLI `findings` command, and in the public API.<br><br>**Pull Requests Page Filter Bar:** A new filter bar on the Pull Requests page lets users search pull requests by title and switch between all target branches or the current branch only.<br><br>**PHP CS Fixer is live:** Codacy added support for PHP CS Fixer, a popular tool that fixes PHP code to follow standard coding style rules.</span>
-   [July 29, 2026](cloud/cloud-2026-07-adding-shellcheck-config-file.md) <span class="release-digest__body">**Shellcheck configuration files:** You can now manage Shellcheck settings with a `.shellcheckrc` file in your repository instead of configuring analysis directly through the Codacy UI.</span>
-   [July 27, 2026](cloud/cloud-2026-07-adding-phpcsfixer-checkov-config-files.md) <span class="release-digest__body">**PHP CS Fixer:** Support for PHP-CS-Fixer, a tool that fixes PHP code to follow standard coding style rules; Codacy can now analyze PHP projects for style violations and report them in your dashboard.<br><br>**Now Checkov supports configuration files:** Checkov analysis can now be configured with a `.checkov.yaml` or `.checkov.yml` file in your repository.</span>
-   [July 10, 2026](cloud/cloud-2026-07-remove-codesniffer-packages.md) <span class="release-digest__body">**PHP_CodeSniffer upgrade:** PHP_CodeSniffer is upgrading to its latest version, which drops support for several unmaintained coding standard packages, including the WordPress-VIP, Magento, and PHPCS Security Audit rule sets.</span>
-   [July 10, 2026](cloud/cloud-2026-06.md) <span class="release-digest__body">**Import chain visibility for vulnerable dependencies:** We added clearer dependency chain visibility so users can better understand how vulnerable dependencies are introduced into their projects.<br><br>**Better visibility for CI/CD setup in container scanning:** We made the CI/CD setup option more prominent in container scanning so teams can find and enable it more easily.<br><br>**Proxy support for Guardrails:** Guardrails now supports proxy configurations, making it easier to use in restricted network environments.</span>
-   [June 11, 2026](cloud/cloud-2026-05.md) <span class="release-digest__body">**Draft PR AI Review Control:** The PR reviewer no longer runs automatically for draft PRs. Please trigger it manually using the button on the summary if you want a review.<br><br>**Deprecation of AI Suggestions:** Deprecated AI suggestions in GitHub; please use our PR reviewer instead.<br><br>**YAML Support for Environment Files:** Codacy now supports `.env`, `.env.production`, `.env.prod`, and `.env.staging` files for the YAML language. All tools running for YAML will be able to scan these files as well.</span>
-   [May 8, 2026](cloud/cloud-2026-04.md) <span class="release-digest__body">**Context-Aware Feedback Loops:** The AI Reviewer (GitHub only) now factors in previous comments throughout the life of a Pull Request. By learning from the conversation history, it delivers more relevant feedback and reduces noise with every subsequent review.<br><br>**New Pull Request Summary Experience:** We have introduced the Pull Request Summary to replace the legacy coverage summary settings (GitHub only). All repositories and organizations previously using the coverage summary have been migrated to this new, unified view.</span>
-   [April 15, 2026](cloud/cloud-2026-03.md) <span class="release-digest__body">**AI Security & Privacy Safeguards:** The AI reviewer and false positive detection now automatically mask any secrets or credentials accidentally pushed in code, protecting sensitive data before it is processed by AI models.<br><br>**Customizable AI Instructions:** You can now tune the AI Reviewer's output by adding a `review.md` file to your repository, to define specific coding conventions and prioritize the types of feedback that matter most to your team.<br><br>**Manual AI Review Trigger:** The new "Run review" button on the Pull Request Summary page lets you trigger the AI Reviewer exactly when you need it, rather than relying solely on automated triggers.<br><br>**AI-Powered Test Coverage Suggestions:** The AI Reviewer now identifies gaps in test coverage and suggests missing tests for your changes, with a ready-to-use prompt you can give to your coding agent to generate them.</span>
-   [March 2, 2026](cloud/cloud-2026-03-github-integration-settings-changes.md) <span class="release-digest__body">**AI-enhanced comments (Beta) being deprecated for GitHub:** AI-enhanced comments are being replaced by the AI Reviewer on March 17, 2026.<br><br>**Coverage summary moving to Pull request review:** The Coverage summary setting is being removed; coverage data will soon be included in the Pull request review comment.</span>
-   [March 6, 2026](cloud/cloud-2026-02.md) <span class="release-digest__body">**Migration from Semgrep to Opengrep:** In response to recent licensing changes affecting Semgrep, we have transitioned to Opengrep, an open-source fork of the Semgrep engine, ensuring uninterrupted access to your existing code patterns and continued support for your workflows.<br><br>**Organization Overview Dashboard:** A comprehensive dashboard providing a holistic view of your organization's health, including new metrics for code health & security, grade, complexity, duplication, and coverage.<br><br>**SRM Findings Text Search:** Added the ability to filter findings in the SRM tab using text search, for more efficient navigation and management of results.</span>
-   [February 19, 2026](cloud/cloud-2026-02-migrating-semgrep.md) <span class="release-digest__body">**Semgrep to Opengrep:** Following licensing changes to Semgrep, Codacy switched to Opengrep as a 1:1 replacement, preserving all existing patterns, issue history, and configuration.</span>
-   [January 5, 2026](cloud/cloud-2026-01.md) <span class="release-digest__body">**GolangCI-Lint Integration:** We've built a new GolangCI-Lint wrapper. This client-side tool integrates over 100 linters, providing deeper insight into Go code quality.<br><br>**VS Code Setup Section:** Introduced a dedicated setup section within the VS Code extension to streamline the initial configuration process and improve the onboarding experience.</span>
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
