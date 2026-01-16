---
rss_title: Codacy release notes RSS feed
rss_href: /feed_rss_created.xml
description: Release notes for Codacy Self-hosted v16.0.0.
codacy_tools_version_old: https://github.com/codacy-sh/codacy-tools-sh/releases/tag/1.2.19
codacy_tools_version_new: https://github.com/codacy-sh/codacy-tools-sh/releases/tag/1.2.21
---

# Self-hosted v16.0.0

These release notes are for [Codacy Self-hosted v16.0.0](https://github.com/codacy/chart/releases/tag/16.0.0){: target="_blank"}, released on January 16, 2026.<!-- TODO Update release date -->

📢 [Visit the Codacy roadmap](https://roadmap.codacy.com) and <span class="skip-vale">let us know</span> your feedback on both new and planned product updates!

<!--TODO Check these issues manually

Jira issues without release notes

Epics:
Bugs and other issues:

Jira issues with disabled release notes

Epics:
Bugs and other issues:
-->

## Upgrading Codacy Self-hosted

Follow the steps below to upgrade to Codacy Self-hosted v16.0.0:

1.  Check the [release notes for all Codacy Self-hosted versions](../index.md#self-hosted) **between your current version and the most recent version** for breaking changes and follow the instructions provided <span class="skip-vale">carefully</span>.

1.  Follow the instructions to [upgrade your Codacy Self-hosted instance](https://docs.codacy.com/v16.0/chart/maintenance/upgrade/).

1.  Update your Codacy command-line tools to the following versions:<!--TODO Update CLI tool versions-->

    -   [Codacy Analysis CLI MAJOR.MINOR.PATCH](https://github.com/codacy/codacy-analysis-cli/releases/tag/MAJOR.MINOR.PATCH)
    -   [Codacy Coverage Reporter MAJOR.MINOR.PATCH](https://github.com/codacy/codacy-coverage-reporter/releases/tag/MAJOR.MINOR.PATCH)

## Product enhancements


## Bug fixes


## Tool versions

This version of Codacy Self-hosted includes the tool versions below. The tools that were updated on this version are highlighted in bold:

-   @coffeelint/cli 5.2.11
-   **[Ameba 1.6.4](https://github.com/crystal-ameba/ameba/releases/tag/v1.6.4) (updated from 1.5.0)**
-   **[Bandit 1.8.3](https://github.com/PyCQA/bandit/releases/tag/1.8.3) (updated from 1.7.5)**
-   Brakeman 4.3.1
-   bundler-audit (deprecated) 0.9.1
-   **[Checkov 3.2.457](https://github.com/bridgecrewio/checkov/releases/tag/3.2.457) (updated from 3.0.25)**
-   **[Checkstyle 10.26.1](https://checkstyle.sourceforge.io/releasenotes.html#Release_10.26.1) (updated from 10.13.0)**
-   Clang-Tidy 10.0.1
-   **[CodeNarc 3.6.0](https://github.com/CodeNarc/CodeNarc/blob/master/CHANGELOG.md) (updated from 3.3.0)**
-   **[Cppcheck 2.18.0](https://github.com/danmar/cppcheck/releases/tag/2.18.0) (updated from 2.12.0)**
-   **[Credo 1.7.12](https://github.com/rrrene/credo/releases/tag/v1.7.12) (updated from 1.7.2)**
-   CSSLint (deprecated) 1.0.5
-   **[dartanalyzer 3.9.3](https://github.com/dart-lang/sdk/blob/main/CHANGELOG.md) (updated from 3.3.0)**
-   **[detekt 1.23.8](https://github.com/detekt/detekt/releases/tag/v1.23.8) (updated from 1.23.5)**
-   **[ESLint 8.57.0](https://github.com/eslint/eslint/releases/tag/v8.57.0) (updated from 8.56.0)**
-   ESLint (deprecated) 7.32.0
-   Faux-Pas 1.7.2
-   Flawfinder 2.0.19
-   **[Gosec 2.22.7](https://github.com/securego/gosec/releases/tag/v2.22.7) (updated from 2.15.0)**
-   **Hadolint 2.12.0 (updated from 1.18.2)**
-   **[Jackson Linter 2.19.2](https://github.com/FasterXML/jackson/wiki/Jackson-Release-2.19.2) (updated from 2.15.2)**
-   JSHint (deprecated) 2.13.6
-   **[markdownlint 0.34.0](https://github.com/DavidAnson/markdownlint/releases/tag/v0.34.0) (updated from 0.33.0)**
-   PHP Mess Detector 2.14.1
-   **[PHP_CodeSniffer 3.10.1](https://github.com/PHPCSStandards/PHP_CodeSniffer/releases/tag/3.10.1) (updated from 3.7.2)**
-   PMD 6.55.0
-   **[Prospector 1.17.2](https://github.com/landscapeio/prospector/releases/tag/v1.17.2) (updated from 1.10.3)**
-   **[PSScriptAnalyzer 1.24.0](https://github.com/PowerShell/PSScriptAnalyzer/releases/tag/1.24.0) (updated from 1.21.0)**
-   **[Pylint 3.3.9](https://github.com/pylint-dev/pylint/releases/tag/v3.3.9) (updated from 3.0.3)**
-   Pylint (deprecated) 1.9.5
-   **[remark-lint 10.0.1](https://github.com/remarkjs/remark-lint/releases/tag/10.0.1) (updated from 9.1.2)**
-   **[Revive 1.12.0](https://github.com/mgechev/revive/releases/tag/v1.12.0) (updated from 1.3.7)**
-   **[RuboCop 1.80.2](https://github.com/rubocop/rubocop/releases/tag/v1.80.2) (updated from 1.60.2)**
-   Scalastyle 1.5.1
-   **[ShellCheck 0.10.0](https://github.com/koalaman/shellcheck/blob/master/CHANGELOG.md) (updated from v0.9.0)**
-   **[SonarC# 9.32](https://github.com/SonarSource/sonar-dotnet/tags) (updated from 9.19)**
-   SonarVB 8.15
-   **[Spectral 1.22.0](https://github.com/stoplightio/spectral/releases/tag/%40stoplight%2Fspectral-rulesets-1.22.0) (updated from 1.18.1)**
-   **[SpotBugs 4.8.4](https://github.com/spotbugs/spotbugs/releases/tag/4.8.4) (updated from 4.8.3)**
-   SQLint 0.2.1
-   **[Staticcheck 2025.1.1](https://staticcheck.dev/changes/2025.1/#2025.1.1) (updated from 2023.1.6)**
-   **[Stylelint 16.23.0](https://github.com/stylelint/stylelint/releases/tag/16.23.0) (updated from 15.10.3)**
-   **[SwiftLint 0.61.0](https://github.com/realm/SwiftLint/releases/tag/0.61.0) (updated from 0.54.0)**
-   Tailor 0.12.0
-   TSLint (deprecated) 6.1.3
-   **TSQLLint 1.16.0 (updated from 1.11.1)**
-   **[Unity Roslyn Analyzers 1.23.0](https://github.com/microsoft/Microsoft.Unity.Analyzers/releases/tag/1.23.0) (updated from 1.17.0)**
