---
rss_title: Codacy release notes RSS feed
rss_href: /feed_rss_created.xml
description: Release notes for Codacy Self-hosted v7.0.0.
codacy_tools_version_old: https://github.com/codacy/codacy-tools/releases/tag/5.2.1
codacy_tools_version_new: https://github.com/codacy/codacy-tools/releases/tag/5.5.6
---

# Self-hosted v7.0.0

These release notes are for [Codacy Self-hosted v7.0.0](https://github.com/codacy/chart/releases/tag/7.0.0){: target="_blank"}, released on March 30, 2022. <!-- TODO Update release date -->

📢 [Visit the Codacy roadmap](https://roadmap.codacy.com) and <span class="skip-vale">let us know</span> your feedback on both new and planned product updates!

<!--TODO Check these issues manually

Jira issues without release notes

-   https://codacy.atlassian.net/browse/CY-5797
-   https://codacy.atlassian.net/browse/CY-5796
-   https://codacy.atlassian.net/browse/CY-5795
-   https://codacy.atlassian.net/browse/CY-5793
-->

## Upgrading Codacy Self-hosted

Follow the steps below to upgrade to Codacy Self-hosted v7.0.0:

1.  Check the [release notes for all Codacy Self-hosted versions](../index.md#self-hosted) **between your current version and the most recent version** for breaking changes and follow the instructions provided <span class="skip-vale">carefully</span>.

1.  Follow the instructions to [upgrade your Codacy Self-hosted instance](https://docs.codacy.com/v7.0/chart/maintenance/upgrade/).

1.  Update your Codacy command-line tools to the versions with the Git tag `self-hosted-7.0.0`:

    -   [Codacy Analysis CLI](https://github.com/codacy/codacy-analysis-cli/releases/tag/self-hosted-7.0.0)
    -   [Codacy Coverage Reporter](https://github.com/codacy/codacy-coverage-reporter/releases/tag/self-hosted-7.0.0)

## Product enhancements


## Bug fixes

-   Released a new tool. ESLint 8 and deprecated ESLint 7. (CY-5848)
-   Fixed an issue that caused inconsistencies on the last updated date when listing GitHub repositories. Now, the last updated date is the [date of the last push to the repositories](https://docs.codacy.com/v7.0/organizations/organization-overview/#last-updated-repositories). (CY-5784)
-   dartanalyzer now supports including the packages [lints](https://pub.dev/packages/lints){: target="_blank"} and [flutter_lints](https://pub.dev/packages/flutter_lints){: target="_blank"} in the `analysis_option.yaml` configuration file. (CY-5626)
-   Hide re-analyze button for repositories that are running analysis through a build server (CY-4205)

## Tool versions

This version of Codacy Self-hosted includes the tool versions below. The tools that were updated on this version are highlighted in bold:

-   Ameba 0.13.1
-   Bandit 1.7.0
-   Brakeman 4.3.1
-   bundler-audit 0.6.1
-   Checkov 2.0.399
-   Checkstyle 8.44
-   Clang-Tidy 10.0.1
-   CodeNarc 2.2.0
-   CoffeeLint 2.1.0
-   Cppcheck 2.2
-   Credo 1.4.0
-   CSSLint 1.0.5
-   **dartanalyzer 2.16.1 (updated from 2.15.1)**
-   detekt 1.19.0
-   **ESLint 8.10.0 (updated from 7.32.0)**
-   **ESLint (deprecated) 7.32.0 (new)**
-   Faux-Pas 1.7.2
-   Flawfinder 2.0.11
-   Gosec 2.8.1
-   Hadolint 1.18.2
-   Jackson Linter 2.10.2
-   JSHint 2.12.0
-   markdownlint 0.23.1
-   PHP Mess Detector 2.10.1
-   PHP_CodeSniffer 3.6.2
-   PMD 6.36.0
-   Prospector 1.3.1
-   PSScriptAnalyzer 1.18.3
-   Pylint 1.9.5
-   Pylint (Python 3) 2.7.4
-   remark-lint 7.0.1
-   Revive 1.0.2
-   **RuboCop 1.26.1 (updated from 1.25.1)**
-   Scalastyle 1.5.0
-   ShellCheck v0.7.2
-   Sonar C# 8.30
-   Sonar Visual Basic 8.15
-   spectral-rulesets 1.2.7
-   SpotBugs 4.5.3
-   SQLint 0.2.1
-   Staticcheck 2020.1.6
-   Stylelint 14.2.0
-   SwiftLint 0.43.1
-   Tailor 0.12.0
-   TSLint 6.1.3
-   TSQLLint 1.11.1
