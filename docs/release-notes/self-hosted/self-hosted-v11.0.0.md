---
rss_title: Codacy release notes RSS feed
rss_href: /feed_rss_created.xml
description: Release notes for Codacy Self-hosted v11.0.0.
codacy_tools_version_old: https://github.com/codacy/codacy-tools-sh/releases/tag/sh-1.1.3
codacy_tools_version_new: https://github.com/codacy/codacy-tools-sh/releases/tag/sh-1.1.6
---

# Self-hosted v11.0.0

These release notes are for [Codacy Self-hosted v11.0.0](https://github.com/codacy/chart/releases/tag/11.0.0){: target="_blank"}, released on April 19, 2023.<!-- TODO Update release date -->

📢 [Visit the Codacy roadmap](https://roadmap.codacy.com) and <span class="skip-vale">let us know</span> your feedback on both new and planned product updates!

## Upgrading Codacy Self-hosted

Follow the steps below to upgrade to Codacy Self-hosted v11.0.0:

1.  Check the [release notes for all Codacy Self-hosted versions](../index.md#self-hosted) **between your current version and the most recent version** for breaking changes and follow the instructions provided <span class="skip-vale">carefully</span>.

1.  Follow the instructions to [upgrade your Codacy Self-hosted instance](https://docs.codacy.com/v11.0/chart/maintenance/upgrade/).

1.  Update your Codacy command-line tools to the versions with the Git tag `self-hosted-11.0.0`:

    -   [Codacy Analysis CLI](https://github.com/codacy/codacy-analysis-cli/releases/tag/self-hosted-11.0.0)
    -   [Codacy Coverage Reporter](https://github.com/codacy/codacy-coverage-reporter/releases/tag/self-hosted-11.0.0)

## Product enhancements

## Bug fixes

-   Fixed an issue while synchronizing the name of Codacy organizations with the corresponding GitLab groups. (PLUTO-450)
-   Fixed a scenario where tools could fail to complete the analysis due to a shorter than expected timeout. (IO-482)
-   Fixed an inconsistent issue count between the **Commits** list and the **Repository Dashboard** page. (IO-422)

## Tool versions

This version of Codacy Self-hosted includes the tool versions below. The tools that were updated on this version are highlighted in bold:

-   Ameba 0.13.1
-   Bandit 1.7.0
-   Brakeman 4.3.1
-   bundler-audit 0.6.1
-   Checkov 2.1.188
-   Checkstyle 10.3.1
-   Clang-Tidy 10.0.1
-   **[CodeNarc 3.2.0](https://github.com/CodeNarc/CodeNarc/blob/master/CHANGELOG.md#version-320----jan-2023) (updated from 2.2.0)**
-   CoffeeLint 2.1.0
-   **[Cppcheck 2.10](https://github.com/danmar/cppcheck/releases/tag/2.10) (updated from 2.2)**
-   Credo 1.4.0
-   CSSLint 1.0.5
-   dartanalyzer 2.17.0
-   detekt 1.19.0
-   **[ESLint 8.34.0](https://github.com/eslint/eslint/releases/tag/v8.34.0) (updated from 8.23.1)**
-   ESLint (deprecated) 7.32.0
-   Faux-Pas 1.7.2
-   Flawfinder 2.0.19
-   Gosec 2.8.1
-   Hadolint 1.18.2
-   **[Jackson Linter 2.14.2](https://github.com/FasterXML/jackson/wiki/Jackson-Release-2.14.2) (updated from 2.10.2)**
-   JSHint 2.13.5
-   **[markdownlint 0.26.2](https://github.com/DavidAnson/markdownlint/releases/tag/v0.26.2) (updated from 0.23.1)**
-   **[PHP Mess Detector 2.13.0](https://github.com/phpmd/phpmd/releases/tag/2.13.0) (updated from 2.10.1)**
-   **[PHP_CodeSniffer 3.7.2](https://github.com/squizlabs/PHP_CodeSniffer/releases/tag/3.7.2) (updated from 3.6.2)**
-   **[PMD 6.55.0](https://pmd.sourceforge.io/pmd-6.55.0/pmd_release_notes.html) (updated from 6.48.0)**
-   Prospector 1.7.7
-   PSScriptAnalyzer 1.18.3
-   **[Pylint 2.17.0](https://github.com/PyCQA/pylint/releases/tag/v2.17.0) (updated from 2.14.5)**
-   Pylint (deprecated) 1.9.5
-   remark-lint 7.0.1
-   Revive 1.2.3
-   RuboCop 1.39.0
-   Scalastyle 1.5.0
-   **[ShellCheck 0.9.0](https://github.com/koalaman/shellcheck/blob/master/CHANGELOG.md#v090---2022-12-12) (updated from 0.8.0)**
-   **[SonarC# 8.40](https://github.com/SonarSource/sonar-dotnet/releases/tag/8.40.0.48530) (updated from 8.39)**
-   SonarVB 8.15
-   spectral-rulesets 1.2.7
-   **[SpotBugs 4.7.3](https://github.com/spotbugs/spotbugs/releases/tag/4.7.3) (updated from 4.5.3)**
-   SQLint 0.2.1
-   Staticcheck 2022.1.3
-   **[Stylelint 14.16.1](https://github.com/stylelint/stylelint/releases/tag/14.16.1) (updated from 14.2.0)**
-   **[SwiftLint 0.50.3](https://github.com/realm/SwiftLint/releases/tag/0.50.3) (updated from 0.43.1)**
-   Tailor 0.12.0
-   TSLint 6.1.3
-   TSQLLint 1.11.1
-   Unity Roslyn Analyzers 1.14.0
