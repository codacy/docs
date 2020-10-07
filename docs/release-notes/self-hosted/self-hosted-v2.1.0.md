# Self-hosted v2.1.0

These release notes are for [Codacy Self-hosted v2.1.0](https://github.com/codacy/chart/releases/tag/2.1.0){: target="_blank"}, released on September 16, 2020.

To upgrade Codacy, follow [these instructions](/chart/maintenance/upgrade/).

## Product enhancements

-   Improved the [repositories list page](https://docs.codacy.com/organizations/managing-repositories-in-your-organization/) to streamline managing the repositories in an organization and display metrics for each repository. (CY-1847)

## Bug fixes

-   Fixed an issue that prevented analyzing private repositories in organizations that had upgraded from trial to the Pro plan. (CY-2716)
-   Fixed an issue that prevented changes to GitHub Marketplace subscriptions to be reflected accordingly on Codacy. (CY-2712)
-   Fixed an issue that caused repository dashboards to show empty charts for the last 8 commits. (CY-2699)
-   Fixed an issue that caused the code patterns page to incorrectly display the configuration file option selected for tools that didn't have a configuration file in the repository. (CY-2697)
-   Fixed an issue that caused repository dashboards to show empty charts instead of the last 8 commits if the repositories didn't have enough historical data. (CY-2694)
-   Fixed an issue that could prevent Codacy from displaying organizations and repositories that the user had access to on GitLab Cloud or GitLab Enterprise. (CY-2685)
-   Fixed an issue that could cause the quality evolution chart in repository dashboards to display historical data only for the last 8 commits instead of for the last 31 or 7 days. (CY-2670)
-   When trying to add a repository that already exists in a different organization, Codacy now provides a more detailed error message that includes the name of the organization that already contains the repository. (CY-2620)
-   If the duplication metric isn't calculated, the repository dashboards now provide clear error messages that include instructions on how to solve the issue. (CY-2436)
-   Fixed an error when opening an empty repository list on GitHub Enterprise organizations. (CY-2361)
-   Fixed the text alignment in the repositories screen empty state. (CY-2074)
-   Fixed an issue that caused Codacy to send spurious email notifications to users who had enabled repository notifications only for their activity. (CY-1932)

## Tool versions

This version of Codacy Self-hosted includes the tool versions below. The tools that were updated on this version are highlighted in bold:

-   Ameba 0.13.1
-   Bandit 1.6.2
-   Brakeman 4.3.1
-   Bundler Audit 0.6.1
-   Checkstyle 8.34
-   Codenarc 1.6
-   Codesniffer 3.5.6
-   Coffeelint 2.1.0
-   Cppcheck 2.1
-   Credo 1.3.0
-   Csslint 1.0.5
-   Detekt 1.10.0
-   **Eslint 7.8.1 (updated from 7.6.0)**
-   Flawfinder 2.0.11
-   Gorevive 1.0.2
-   Gosec v2.3.0
-   Hadolint 1.17.5
-   Jackson Linter 2.10.2
-   Jshint 2.10.2
-   Phpmd 2.8.1
-   **Pmd 6.27.0 (updated from 6.25.0)**
-   Pmdjava 5.8.1
-   Prospector 1.2.0
-   Psscriptanalyzer 1.18.3
-   Pylint 1.9.5
-   **Pylint Python3 2.6.0 (updated from 2.5.3)**
-   Remark Lint 7.0.0
-   Rubocop 0.82.0
-   Scalastyle 1.0.0
-   **Shellcheck v0.7.1 (updated from v0.7.0)**
-   **Sonar Csharp 8.12 (updated from 8.10)**
-   **Sonar Visual Basic 8.12 (updated from 8.10)**
-   **Spotbugs 4.1.2 (updated from 4.0.1)**
-   Sqlint 0.1.9
-   Staticcheck 2017.2.2
-   **Stylelint 13.7.0 (updated from 13.6.1)**
-   Swiftlint 0.39.2
-   Tailor 0.12.0
-   Tslint 5.14.0
-   Tsqllint 1.11.1
