---
rss_title: Codacy release notes RSS feed
rss_href: /feed_rss_created.xml
description: Release notes for Codacy Self-hosted v3.0.0.
---

# Self-hosted v3.0.0

These release notes are for [Codacy Self-hosted v3.0.0](https://github.com/codacy/chart/releases/tag/3.0.0){: target="_blank"}, released on November 2, 2020.

To upgrade Codacy, follow [these instructions](../../chart/maintenance/upgrade.md).

## Breaking changes

**If you're using GitHub and require Codacy pull request status to pass before merging pull requests** you must manually re-enable the required status check on your repositories. To do this:

1.  Wait until there is a new status check from Codacy on your repositories using the new GitHub Checks integration:

    ![Codacy pull request status on GitHub](../../repositories-configure/integrations/images/github-integration-pr-status.png)

1.  Follow the instructions to [require the Codacy status check to pass before merging pull requests](https://docs.codacy.com/v3.0/faq/repositories/how-do-i-set-codacy-as-a-required-check-to-merge-prs/#github) on your GitHub branch protection rules.

## Product enhancements

-   Codacy now supports the integration with GitHub Checks. From now on, [all Codacy analysis information on pull requests](https://docs.codacy.com/v3.0/repositories-configure/integrations/github-integration/#configuring-the-github-integration) will show up under the **Checks** tab on the GitHub pull request pages. For private repositories, the annotations will appear as authored by Codacy instead of the user who configured the integration. (CY-46)

## Tool versions

This version of Codacy Self-hosted includes the tool versions below. The tools that were updated on this version are highlighted in bold:

-   Ameba 0.13.1
-   Bandit 1.6.2
-   Brakeman 4.3.1
-   bundler-audit 0.6.1
-   Checkstyle 8.34
-   Clang-Tidy 10.0.1
-   CodeNarc 1.6
-   CoffeeLint 2.1.0
-   Cppcheck 2.2
-   Credo 1.4.0
-   CSSLint 1.0.5
-   detekt 1.10.0
-   Flawfinder 2.0.11
-   Gosec v2.3.0
-   **Hadolint 1.18.2 (updated from 1.17.5)**
-   Jackson Linter 2.10.2
-   JSHint 2.12.0
-   **PHP_CodeSniffer 3.5.8 (updated from 3.5.6)**
-   PHP Mess Detector 2.8.1
-   PMD (Legacy) 5.8.1
-   **PMD 6.28.0 (updated from 6.27.0)**
-   Prospector 1.2.0
-   PSScriptAnalyzer 1.18.3
-   Pylint (Python 3) 2.6.0
-   Pylint 1.9.5
-   remark-lint 7.0.1
-   Revive 1.0.2
-   RuboCop 0.82.0
-   Scalastyle 1.0.0
-   ShellCheck 0.7.1
-   **Sonar C# 8.14 (updated from 8.13)**
-   **Sonar Visual Basic 8.14 (updated from 8.13)**
-   SpotBugs 4.1.2
-   SQLint 0.1.9
-   Staticcheck 2017.2.2
-   Stylelint 13.7.2
-   SwiftLint 0.39.2
-   Tailor 0.12.0
-   TSLint 5.14.0
-   TSQLLint 1.11.1
