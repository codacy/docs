---
rss_title: Codacy release notes RSS feed
rss_href: /feed_rss_created.xml
description: Release notes for Codacy Self-hosted v8.0.0.
codacy_tools_version_old: https://github.com/codacy/codacy-tools/releases/tag/5.5.6
codacy_tools_version_new: https://github.com/codacy/codacy-tools/releases/tag/5.7.38
---

# Self-hosted v8.0.0

These release notes are for [Codacy Self-hosted v8.0.0](https://github.com/codacy/chart/releases/tag/8.0.0), released on May 12, 2022.

📢 [Visit the Codacy roadmap](https://roadmap.codacy.com) and <span class="skip-vale">let us know</span> your feedback on both new and planned product updates!

## Upgrading Codacy Self-hosted

Follow the steps below to upgrade to Codacy Self-hosted v8.0.0:

1.  Check the [release notes for all Codacy Self-hosted versions](../index.md#self-hosted) **between your current version and the most recent version** for breaking changes and follow the instructions provided <span class="skip-vale">carefully</span>.

1.  Follow the instructions to [upgrade your Codacy Self-hosted instance](https://docs.codacy.com/v8.0/chart/maintenance/upgrade/).

1.  Update your Codacy command-line tools to the versions with the Git tag `self-hosted-8.0.0`:

    -   [Codacy Analysis CLI](https://github.com/codacy/codacy-analysis-cli/releases/tag/self-hosted-8.0.0)
    -   [Codacy Coverage Reporter](https://github.com/codacy/codacy-coverage-reporter/releases/tag/self-hosted-8.0.0)

## Breaking changes

ESLint 8 will be **enabled by default on new repositories** starting on this version of Codacy Self-hosted.

The previous Codacy Self-hosted version [already included ESLint 8 as a new supported tool and deprecated ESLint 7](self-hosted-v7.0.0.md#product-enhancements), and Codacy recommends that you migrate to the new version of the tool to benefit from the new features and fixes of ESLint.

See [how to migrate your configuration files to use ESLint 8](../cloud/cloud-2022-03-31-adding-eslint8.md#migrating-your-configuration-files-to-use-eslint-8). (CY-5848)

## Product enhancements

-   Updated the design of the **Code patterns** page to make the currently selected tool more noticeable. (CY-6021)
-   Added support for the ESLint plugin [<span class="skip-vale">eslint-plugin-es</span>](https://github.com/mysticatea/eslint-plugin-es) to disallow the syntax of specific ECMAScript versions. (CY-5968)
-   Moved the code coverage setup page under the repository **Settings**, tab **Coverage**. The new page includes a list of the most recent coverage reports uploaded to Codacy to [help you troubleshoot your coverage setup](http://docs.codacy.com/v8.0/coverage-reporter/#uploading-coverage). (CY-5399)

## Bug fixes

-   Fixed an issue that could be used by an attacker to redirect Codacy users to a malicious URL. CVSS v3.1 score: 6.5 (Medium) (CY-6052)
-   Fixed a broken link in the notification emails sent to organization admins when new members ask to join an organization. (CY-5979)
-   Fixed an issue that prevented Codacy from listing GitHub repositories on the Repositories list. (CY-5935)
-   Fixed an issue that could cause the **Organization Overview** page to display pull requests with the wrong status under the **Most problematic** open pull requests tab. (CY-5872)
-   Now, the **Files** page always displays the **Coverage** column on repositories that have coverage set up, even if there's no coverage data for any of the displayed files. (CY-5555)

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
-   **[dartanalyzer 2.16.2](https://github.com/dart-lang/sdk/blob/main/CHANGELOG.md#2162---2022-03-24) (updated from 2.16.1)**
-   detekt 1.19.0
-   **[ESLint 8.14.0](https://github.com/eslint/eslint/releases/tag/v8.14.0) (updated from 8.10.0)**
-   ESLint (deprecated) 7.32.0
-   Faux-Pas 1.7.2
-   **[Flawfinder 2.0.19](https://github.com/david-a-wheeler/flawfinder/blob/master/ChangeLog) (updated from 2.0.11)**
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
-   **[RuboCop 1.28.2](https://github.com/rubocop/rubocop/releases/tag/v1.28.2) (updated from 1.26.1)**
-   Scalastyle 1.5.0
-   ShellCheck 0.7.2
-   **[Sonar C# 8.33](https://github.com/SonarSource/sonar-dotnet/releases/tag/8.33.0.40503) (updated from 8.30)**
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
