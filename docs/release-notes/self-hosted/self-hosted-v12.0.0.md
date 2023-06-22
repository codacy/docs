---
rss_title: Codacy release notes RSS feed
rss_href: /feed_rss_created.xml
description: Release notes for Codacy Self-hosted v12.0.0.
codacy_tools_version_old: https://github.com/codacy/codacy-tools-sh/releases/tag/sh-1.1.6
codacy_tools_version_new: https://github.com/codacy/codacy-tools-sh/releases/tag/sh-1.2.1
---

# Self-hosted v12.0.0

These release notes are for [Codacy Self-hosted v12.0.0](https://github.com/codacy/chart/releases/tag/12.0.0){: target="_blank"}, released on June 21, 2023.<!-- TODO Update release date -->

📢 [Visit the Codacy roadmap](https://roadmap.codacy.com) and <span class="skip-vale">let us know</span> your feedback on both new and planned product updates!

<!--TODO Check these issues manually
Jira issues without release notes
-   https://codacy.atlassian.net/browse/TS-110 TODO review

Jira issues with disabled release notes
-   https://codacy.atlassian.net/browse/TS-369 TODO Notify Paulo that we're ignoring this one: https://codacy.atlassian.net/browse/TS-369?focusedCommentId=56541
-   https://codacy.atlassian.net/browse/TS-356 TODO we may want to notify this: ESlint: install plugin vue-scoped-css
-->

## Upgrading Codacy Self-hosted

Follow the steps below to upgrade to Codacy Self-hosted v12.0.0:

1.  Check the [release notes for all Codacy Self-hosted versions](../index.md#self-hosted) **between your current version and the most recent version** for breaking changes and follow the instructions provided <span class="skip-vale">carefully</span>.

1.  Follow the instructions to [upgrade your Codacy Self-hosted instance](https://docs.codacy.com/v12.0/chart/maintenance/upgrade/).

1.  Update your Codacy command-line tools to the following versions:<!--TODO Update CLI tool versions-->

    -   [Codacy Analysis CLI MAJOR.MINOR.PATCH](https://github.com/codacy/codacy-analysis-cli/releases/tag/MAJOR.MINOR.PATCH)
    -   [Codacy Coverage Reporter MAJOR.MINOR.PATCH](https://github.com/codacy/codacy-coverage-reporter/releases/tag/MAJOR.MINOR.PATCH)

## Breaking changes

If you're updating Kubernetes to v1.25, upgrade to Codacy Self-hosted v12.0.0 before doing so, as some Kubernetes endpoints have been deprecated and may lead to service outage if used with Codacy Self-hosted v11.0.0.

If using the monitoring functionality [Grafana + Prometheus + Loki](https://docs.codacy.com/chart/configuration/monitoring/#setting-up-monitoring-using-grafana-prometheus-and-loki), ensure Pod Security Policies are disabled for Loki and Promtail by running the following commands after upgrading to Codacy Self-hosted v12.0.0 but before updating Kubernetes to v1.25:

 ```
 command here
 ```

## Product enhancements

-   Added support for [Kubernetes 1.25.\*](https://docs.codacy.com/v12.0/chart/requirements/#kubernetes-or-microk8s-cluster-setup) (REL-1306)
-   Added support for the ESLint plugin [<span class="skip-vale">eslint-plugin-rxjs</span>](https://www.npmjs.com/package/eslint-plugin-rxjs). (TS-346)
-   Added support for the ESLint plugins [<span class="skip-vale">eslint-plugin-markdown</span>](https://www.npmjs.com/package/eslint-plugin-markdown) and [<span class="skip-vale">eslint-plugin-yml</span>](https://www.npmjs.com/package/eslint-plugin-yml). (TS-121)

## Tool versions

This version of Codacy Self-hosted includes the tool versions below. The tools that were updated on this version are highlighted in bold:

-   Ameba 0.13.1
-   Bandit 1.7.0
-   Brakeman 4.3.1
-   bundler-audit 0.6.1
-   **[Checkov 2.3.187](https://github.com/bridgecrewio/checkov/releases/tag/2.3.187) (updated from 2.1.188)**
-   Checkstyle 10.3.1
-   Clang-Tidy 10.0.1
-   CodeNarc 3.2.0
-   CoffeeLint 2.1.0
-   **[Cppcheck 2.10.3](https://github.com/danmar/cppcheck/releases/tag/2.10.3) (updated from 2.10)**
-   Credo 1.4.0
-   CSSLint 1.0.5
-   dartanalyzer 2.17.0
-   **[detekt 1.22.0](https://github.com/detekt/detekt/releases/tag/v1.22.0) (updated from 1.19.0)**
-   **[ESLint 8.42.0](https://github.com/eslint/eslint/releases/tag/v8.42.0) (updated from 8.34.0)**
-   ESLint (deprecated) 7.32.0
-   Faux-Pas 1.7.2
-   Flawfinder 2.0.19
-   **[Gosec 2.15.0](https://github.com/securego/gosec/releases/tag/v2.15.0) (updated from 2.8.1)**
-   Hadolint 1.18.2
-   Jackson Linter 2.14.2
-   JSHint 2.13.5
-   markdownlint 0.26.2
-   PHP Mess Detector 2.13.0
-   PHP_CodeSniffer 3.7.2
-   PMD 6.55.0
-   **[Prospector 1.10.2](https://github.com/PyCQA/prospector/releases/tag/v1.10.2) (updated from 1.7.7)**
-   PSScriptAnalyzer 1.18.3
-   **[Pylint 2.17.3](https://github.com/PyCQA/pylint/releases/tag/v2.17.3) (updated from 2.17.0)**
-   Pylint (deprecated) 1.9.5
-   remark-lint 7.0.1
-   **[Revive 1.3.2](https://github.com/mgechev/revive/releases/tag/v1.3.2) (updated from 1.2.3)**
-   RuboCop 1.39.0
-   Scalastyle 1.5.0
-   ShellCheck v0.9.0
-   SonarC# 8.40
-   SonarVB 8.15
-   **[Spectral 1.16.0](https://github.com/stoplightio/spectral/releases/tag/%40stoplight%2Fspectral-rulesets-v1.16.0) (updated from 1.2.7)**
-   SpotBugs 4.7.3
-   SQLint 0.2.1
-   Staticcheck 2022.1.3
-   **[Stylelint 15.6.2](https://github.com/stylelint/stylelint/releases/tag/15.6.2) (updated from 14.16.1)**
-   SwiftLint 0.50.3
-   Tailor 0.12.0
-   TSLint 6.1.3
-   TSQLLint 1.11.1
-   Unity Roslyn Analyzers 1.14.0
