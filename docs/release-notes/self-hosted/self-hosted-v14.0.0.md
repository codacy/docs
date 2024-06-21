---
rss_title: Codacy release notes RSS feed
rss_href: /feed_rss_created.xml
description: Release notes for Codacy Self-hosted v14.0.0.
codacy_tools_version_old: https://github.com/codacy/codacy-tools-sh/releases/tag/sh-1.2.7
codacy_tools_version_new: https://github.com/codacy/codacy-tools-sh/releases/tag/sh-1.2.12
---

# Self-hosted v14.0.0

These release notes are for [Codacy Self-hosted v14.0.0](https://github.com/codacy/chart/releases/tag/14.0.0){: target="_blank"}, released on June 20, 2024.<!-- TODO Update release date -->

📢 [Visit the Codacy roadmap](https://roadmap.codacy.com) and <span class="skip-vale">let us know</span> your feedback on both new and planned product updates!

## Upgrading Codacy Self-hosted

Follow the steps below to upgrade to Codacy Self-hosted v14.0.0:

1.  Check the [release notes for all Codacy Self-hosted versions](../index.md#self-hosted) **between your current version and the most recent version** for breaking changes and follow the instructions provided <span class="skip-vale">carefully</span>.

1.  Follow the instructions to [upgrade your Codacy Self-hosted instance](https://docs.codacy.com/v14.0/chart/maintenance/upgrade/).

1.  Update your Codacy command-line tools to the following versions:

    -   [Codacy Analysis CLI 7.9.5](https://github.com/codacy/codacy-analysis-cli/releases/tag/7.9.5)
    -   [Codacy Coverage Reporter 13.10.15](https://github.com/codacy/codacy-coverage-reporter/releases/tag/13.10.15)

## Product enhancements

-   Added support for [Kubernetes 1.27](https://docs.codacy.com/v14.0/chart/requirements/#kubernetes-or-microk8s-cluster-setup). (REL-1428)
-   ESLint now supports file extensions `.cjs` (JavaScript) and `.mts` (TypeScript). (TCE-673)

## Bug fixes

-   Fixed an issue that caused the coverage settings page to time out when loading. (TCE-1001)

## Tool versions

This version of Codacy Self-hosted includes the tool versions below. The tools that were updated on this version are highlighted in bold:

-   **[Ameba 1.5.0](https://github.com/crystal-ameba/ameba/releases/tag/v1.5.0) (updated from 1.4.3)**
-   Bandit 1.7.5
-   Brakeman 4.3.1
-   bundler-audit (deprecated) 0.9.1
-   **[Checkov 3.0.25](https://github.com/bridgecrewio/checkov/releases/tag/3.0.25) (updated from 2.3.187)**
-   **[Checkstyle 10.13.0](https://checkstyle.sourceforge.io/releasenotes.html#Release_10.13.0) (updated from 10.12.3)**
-   Clang-Tidy 10.0.1
-   CodeNarc 3.3.0
-   CoffeeLint 5.2.11
-   Cppcheck 2.12.0
-   **Credo 1.7.2 (updated from 1.4.0)**
-   CSSLint (deprecated) 1.0.5
-   **[dartanalyzer 3.3.0](https://github.com/dart-lang/sdk/blob/main/CHANGELOG.md) (updated from 2.17.0)**
-   **[detekt 1.23.5](https://github.com/detekt/detekt/releases/tag/v1.23.5) (updated from 1.22.0)**
-   **[ESLint 8.56.0](https://github.com/eslint/eslint/releases/tag/v8.56.0) (updated from 8.51.0)**
-   ESLint (deprecated) 7.32.0
-   Faux-Pas 1.7.2
-   Flawfinder 2.0.19
-   Gosec 2.15.0
-   Hadolint 1.18.2
-   Jackson Linter 2.15.2
-   JSHint (deprecated) 2.13.6
-   **[markdownlint 0.33.0](https://github.com/DavidAnson/markdownlint/releases/tag/v0.33.0) (updated from 0.26.2)**
-   **[PHP Mess Detector 2.14.1](https://github.com/phpmd/phpmd/releases/tag/2.14.1) (updated from 2.13.0)**
-   PHP_CodeSniffer 3.7.2
-   PMD 6.55.0
-   **[Prospector 1.10.3](https://github.com/landscapeio/prospector/releases/tag/v1.10.3) (updated from 1.10.2)**
-   PSScriptAnalyzer 1.21.0
-   **[Pylint 3.0.3](https://github.com/pylint-dev/pylint/releases/tag/v3.0.3) (updated from 2.17.5)**
-   Pylint (deprecated) 1.9.5
-   remark-lint 9.1.2
-   **[Revive 1.3.7](https://github.com/mgechev/revive/releases/tag/v1.3.7) (updated from 1.3.3)**
-   **[RuboCop 1.60.2](https://github.com/rubocop/rubocop/releases/tag/v1.60.2) (updated from 1.56.1)**
-   Scalastyle 1.5.1
-   ShellCheck v0.9.0
-   **[SonarC# 9.19](https://github.com/SonarSource/sonar-dotnet/tags) (updated from 8.40)**
-   SonarVB 8.15
-   **[Spectral 1.18.1](https://github.com/stoplightio/spectral/releases/tag/%40stoplight%2Fspectral-rulesets-1.18.1) (updated from 1.16.0)**
-   **[SpotBugs 4.8.3](https://github.com/spotbugs/spotbugs/releases/tag/4.8.3) (updated from 4.7.3)**
-   SQLint 0.2.1
-   **[Staticcheck 2023.1.6](https://staticcheck.io/changes/2023.1/#2023.1.6) (updated from 2023.1.5)**
-   Stylelint 15.10.3
-   **[SwiftLint 0.54.0](https://github.com/realm/SwiftLint/releases/tag/0.54.0) (updated from 0.50.3)**
-   Tailor 0.12.0
-   TSLint (deprecated) 6.1.3
-   TSQLLint 1.11.1
-   Unity Roslyn Analyzers 1.17.0
