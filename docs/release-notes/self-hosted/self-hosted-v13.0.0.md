---
rss_title: Codacy release notes RSS feed
rss_href: /feed_rss_created.xml
description: Release notes for Codacy Self-hosted v13.0.0.
codacy_tools_version_old: https://github.com/codacy/codacy-tools-sh/releases/tag/sh-1.2.6
codacy_tools_version_new: https://github.com/codacy/codacy-tools-sh/releases/tag/sh-1.2.7
---

# Self-hosted v13.0.0

These release notes are for [Codacy Self-hosted v13.0.0](https://github.com/codacy/chart/releases/tag/13.0.0){: target="_blank"}, released on October 26, 2023.<!-- TODO Update release date -->

📢 [Visit the Codacy roadmap](https://roadmap.codacy.com) and <span class="skip-vale">let us know</span> your feedback on both new and planned product updates!

## Upgrading Codacy Self-hosted

Follow the steps below to upgrade to Codacy Self-hosted v13.0.0:

1.  Check the [release notes for all Codacy Self-hosted versions](../index.md#self-hosted) **between your current version and the most recent version** for breaking changes and follow the instructions provided <span class="skip-vale">carefully</span>.

1.  Follow the instructions to [upgrade your Codacy Self-hosted instance](https://docs.codacy.com/v13.0/chart/maintenance/upgrade/).

1.  Update your Codacy command-line tools to the following versions:<!--TODO Update CLI tool versions-->

    -   [Codacy Analysis CLI MAJOR.MINOR.PATCH](https://github.com/codacy/codacy-analysis-cli/releases/tag/MAJOR.MINOR.PATCH)
    -   [Codacy Coverage Reporter MAJOR.MINOR.PATCH](https://github.com/codacy/codacy-coverage-reporter/releases/tag/MAJOR.MINOR.PATCH)

## Product enhancements

-   Pylint now supports Python 3.11 syntax. (TS-467)
-   Added support for the ESLint plugin [<span class="skip-vale">vue-scoped-css</span>](https://www.npmjs.com/package/eslint-plugin-vue-scoped-css). (TS-356)
-   Added support for the ESLint plugin [<span class="skip-vale">eslint-plugin-rxjs</span>](https://www.npmjs.com/package/eslint-plugin-rxjs). (TS-346)
-   Added support for the ESLint plugins [<span class="skip-vale">eslint-plugin-markdown</span>](https://www.npmjs.com/package/eslint-plugin-markdown) and [<span class="skip-vale">eslint-plugin-yml</span>](https://www.npmjs.com/package/eslint-plugin-yml). (TS-121)

## Bug fixes

-   Fixed an incorrect popup being shown when loading the repository Code patterns page. (PLUTO-717)

## Tool versions

This version of Codacy Self-hosted includes the tool versions below. The tools that were updated on this version are highlighted in bold:

-   Ameba 1.4.3
-   **[Bandit 1.7.5](https://github.com/PyCQA/bandit/releases/tag/1.7.5) (updated from 1.7.0)**
-   Brakeman 4.3.1
-   **[bundler-audit 0.9.1](https://github.com/rubysec/bundler-audit/releases/tag/v0.9.1) (updated from 0.6.1)**
-   Checkov 2.3.187
-   **[Checkstyle 10.12.3](https://checkstyle.sourceforge.io/releasenotes.html#Release_10.12.3) (updated from 10.3.1)**
-   Clang-Tidy 10.0.1
-   **[CodeNarc 3.3.0](https://github.com/CodeNarc/CodeNarc/blob/master/CHANGELOG.md) (updated from 3.2.0)**
-   **[CoffeeLint 5.2.11](https://github.com/coffeelint/coffeelint/releases/tag/v5.2.11) (updated from 2.1.0)**
-   **[Cppcheck 2.12.0](https://github.com/danmar/cppcheck/releases/tag/2.12.0) (updated from 2.10.3)**
-   Credo 1.4.0
-   **CSSLint (deprecated) 1.0.5**
-   dartanalyzer 2.17.0
-   detekt 1.22.0
-   **[ESLint 8.51.0](https://github.com/eslint/eslint/releases/tag/v8.51.0) (updated from 8.34.0)**
-   ESLint (deprecated) 7.32.0
-   **Faux-Pas (deprecated) 1.7.2**
-   Flawfinder 2.0.19
-   Gosec 2.15.0
-   Hadolint 1.18.2
-   **[Jackson Linter 2.15.2](https://github.com/FasterXML/jackson/wiki/Jackson-Release-2.15.2) (updated from 2.14.2)**
-   **[JSHint (deprecated) 2.13.6](https://github.com/jshint/jshint/releases/tag/2.13.6) (updated from 2.13.5)**
-   markdownlint 0.26.2
-   PHP Mess Detector 2.13.0
-   PHP_CodeSniffer 3.7.2
-   PMD 6.55.0
-   Prospector 1.10.2
-   **[PSScriptAnalyzer 1.21.0](https://github.com/PowerShell/PSScriptAnalyzer/releases/tag/1.21.0) (updated from 1.18.3)**
-   **[Pylint 2.17.5](https://github.com/pylint-dev/pylint/releases/tag/v2.17.5) (updated from 2.17.3)**
-   Pylint (deprecated) 1.9.5
-   **[remark-lint 9.1.2](https://github.com/remarkjs/remark-lint/releases/tag/9.1.2) (updated from 7.0.1)**
-   **[Revive 1.3.3](https://github.com/mgechev/revive/releases/tag/v1.3.3) (updated from 1.3.2)**
-   **[RuboCop 1.56.1](https://github.com/rubocop/rubocop/releases/tag/v1.56.1) (updated from 1.52.1)**
-   **[Scalastyle 1.5.1](https://github.com/beautiful-scala/scalastyle/releases/tag/v1.5.1) (updated from 1.5.0)**
-   ShellCheck v0.9.0
-   SonarC# 8.40
-   SonarVB 8.15
-   Spectral 1.16.0
-   SpotBugs 4.7.3
-   SQLint 0.2.1
-   **[Staticcheck 2023.1.5](https://staticcheck.io/changes/2023.1.5/#2023.1.5) (updated from 2022.1.3)**
-   **[Stylelint 15.10.3](https://github.com/stylelint/stylelint/releases/tag/15.10.3) (updated from 15.9.0)**
-   SwiftLint 0.50.3
-   **Tailor (deprecated) 0.12.0**
-   **TSLint (deprecated) 6.1.3**
-   TSQLLint 1.11.1
-   **[Unity Roslyn Analyzers 1.17.0](https://github.com/microsoft/Microsoft.Unity.Analyzers/releases/tag/1.17.0) (updated from 1.14.0)**
