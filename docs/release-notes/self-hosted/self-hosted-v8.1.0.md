---
rss_title: Codacy release notes RSS feed
rss_href: /feed_rss_created.xml
description: Release notes for Codacy Self-hosted v8.1.0.
codacy_tools_version_old: https://github.com/codacy/codacy-tools/releases/tag/5.7.38
codacy_tools_version_new: https://github.com/codacy/codacy-tools/releases/tag/6.1.25
---

# Self-hosted v8.1.0

These release notes are for [Codacy Self-hosted v8.1.0](https://github.com/codacy/chart/releases/tag/8.1.0){: target="_blank"}, released on June 14, 2022. <!-- TODO Update release date -->

📢 [Visit the Codacy roadmap](https://roadmap.codacy.com) and <span class="skip-vale">let us know</span> your feedback on both new and planned product updates!

## Upgrading Codacy Self-hosted

Follow the steps below to upgrade to Codacy Self-hosted v8.1.0:

1.  Check the [release notes for all Codacy Self-hosted versions](../index.md#self-hosted) **between your current version and the most recent version** for breaking changes and follow the instructions provided <span class="skip-vale">carefully</span>.

1.  Follow the instructions to [upgrade your Codacy Self-hosted instance](https://docs.codacy.com/v8.1/chart/maintenance/upgrade/).

1.  Update your Codacy command-line tools to the versions with the Git tag `self-hosted-8.1.0`:

    -   [Codacy Analysis CLI](https://github.com/codacy/codacy-analysis-cli/releases/tag/self-hosted-8.1.0)
    -   [Codacy Coverage Reporter](https://github.com/codacy/codacy-coverage-reporter/releases/tag/self-hosted-8.1.0)

## Product enhancements

-   The Codacy Coverage Reporter now prints a more explicit error message when using an account API token from a user that [doesn't have permission to upload coverage data](https://docs.codacy.com/v8.1/organizations/roles-and-permissions-for-synced-organizations/). (CY-6084)
-   Now, Codacy [displays diff coverage as not applicable](https://docs.codacy.com/v8.1/repositories/pull-requests/#pull-request-quality-overview) (represented by `∅`) when there are no coverable lines included in a pull request, and correctly reports the pull request status on your Git provider in this scenario. ![Not applicable diff coverage](../images/cy-5960.png) (CY-5960)
-   [Pull request notification emails](https://docs.codacy.com/v8.1/account/emails/#managing-your-email-notifications) now display the diff coverage metric. (CY-5700) <!--TODO Add screenshot?-->

## Bug fixes

-   Fix: Save coverage for the first commit of a repo (CY-6196)
-   Fixed a problem where an attacker could join a **public organization** and know the emails of members. This did not allow the attacker to see or change any repositories information. (Overall CVSS Score: 5.1)

Fixed a problem where an attacker could do destructive actions on a **Personal Organization** (related with the other linked tickets) like removing members or deleting the organization. This did not allow the attacker to see or change any repositories information. (Overall CVSS Score: 7.9)

(All the attacks are referring to information and actions on Codacy side, meaning as example, the attacker could NOT remove an organization from the Provider, only from Codacy) (CY-6174)
-   Removed the username field from the UI and API endpoints, as it is no longer used and could be used to leak which emails are already in use in Codacy.  (CY-6173)
-   Fixed an issue that caused commits to be in the "Analyzing" state indefinitely if the setting **Run the repository analysis on your build server** was off and a client-side result was uploaded to the repository. (CY-6136)
-   Tokens used to access GitLab will now be refreshed when they expire. Users that are affected by issues connecting to GitLab will need to re-login with their GitLab accounts via the UI, or revoke and recreate GitLab integrations.  (CY-6117)
-   fix: fixed parsing of tool results when returning too much issues
bump: bumped dartanalyzer to 2.17.0 (CY-6067)

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
-   **[dartanalyzer 2.17.0](https://github.com/dart-lang/sdk/blob/main/CHANGELOG.md){: target="_blank"} (updated from 2.16.2)**
-   detekt 1.19.0
-   **[ESLint 8.15.0](https://github.com/eslint/eslint/releases/tag/v8.15.0){: target="_blank"} (updated from 8.14.0)**
-   ESLint (deprecated) 7.32.0
-   Faux-Pas 1.7.2
-   Flawfinder 2.0.19
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
-   **[Revive 1.2.1](https://github.com/mgechev/revive/releases/tag/v1.2.1){: target="_blank"} (updated from 1.0.2)**
-   RuboCop 1.28.2
-   Scalastyle 1.5.0
-   ShellCheck v0.7.2
-   **[Sonar C# 8.39](https://github.com/SonarSource/sonar-dotnet/releases/tag/v8.39){: target="_blank"} (updated from 8.33)**
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
