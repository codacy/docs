# Self-hosted v2.1.0

These release notes are for [Codacy Self-hosted v2.1.0](https://github.com/codacy/chart/releases/tag/2.1.0){: target="_blank"}. To upgrade Codacy, [follow these instructions](/chart/maintenance/upgrade/).

## Product enhancements

-   Improved the [repositories list page](https://docs.codacy.com/organizations/managing-repositories-in-your-organization/) to streamline managing the repositories in an organization and display metrics for each repository (CY-1847)

## Bug fixes

-   Fixed an issue that prevented analyzing private repositories in organizations that had upgraded from trial to the Pro plan. (CY-2716)
-   Fixed an issue that prevented changes to GitHub Marketplace subscriptions to be reflected accordingly on Codacy. (CY-2712)
-   Fixed an issue that caused repository dashboards to show empty charts for the last 8 commits. (CY-2699)
-   Fixed an issue that caused the code patterns page to incorrectly display the configuration file option selected for tools that did not have a configuration file in the repository. (CY-2697)
-   Fixed an issue that caused repository dashboards to show empty charts instead of the last 8 commits if the repositories didn't have enough historical data. (CY-2694)
-   Fixed an issue that could prevent Codacy from displaying organizations and repositories that the user had access to on GitLab Cloud or GitLab Enterprise. (CY-2685)
-   Fixed an issue that could cause the quality evolution chart in repository dashboards to display historical data only for the last 8 commits instead of for the last 31 or 7 days. (CY-2670)
-   When trying to add a repository that already exists in a different organization, Codacy now provides a more detailed error message that includes the name of the organization that already contains the repository. (CY-2620)
-   If the duplication metric is not calculated, the repository dashboards now provide clear error messages that include instructions on how to solve the issue. (CY-2436)
-   Fixed an error when opening an empty repository list on GitHub Enterprise organizations. (CY-2361)
-   Fixed the text alignment in the repositories screen empty state. (CY-2074)
-   Fixed an issue that caused Codacy to send spurious email notifications to users who had enabled repository notifications only for their activity. (CY-1932)
-   Now, Codacy provides feedback if the Country field is empty while updating the invoice details for an organization. (CY-2600)
-   Fixed an issue that prevented users from finishing the onboarding process unless they added a Git provider organization. (CY-2580)
-   Fixed an issue that prevented Codacy from loading the organization data from the Git provider during the onboarding process. (CY-2572)
-   Fixed an issue that prevented Codacy from sending commit and pull request notification emails to members of an organization. (CY-2467)
-   Fixed an issue that could cause Codacy to display an HTTP 404 error page instead of the Repositories page for an organization. (CY-2356)
-   Fixed an issue that could cause Codacy to stop syncing Bitbucket Cloud repositories and updating pull requests in those repositories. (CY-2355)
-   Fixed an issue that could prevent new users from starting the onboarding wizard. (CY-2288)
-   Now, Codacy automatically navigates to the Organizations page after deleting an organization. (CY-2278)
-   Codacy no longer displays a banner asking to add the user to the list of authors for commits with no associated email address (CY-2020)
-   Fixed an issue that prevented Codacy from automatically removing GitHub organizations with the GitHub Marketplace plan when they were deleted on the Git provider (CY-1989)
-   Fixed an issue that allowed users with access to a repository on the Git provider but who did not belong to the organization on Codacy to change settings for that repository on the Codacy UI (CY-1985)
-   Added missing redirect from the login page to the repositories list page when the user is already logged in. (CY-1946)
-   Fixed an issue that could cause the list of repositories in an organization to display the repositories in the incorrect order. (CY-1940)
-   Fixed an issue that could prevent pull requests from being analyzed if they were created while Codacy was already performing an analysis. (CY-1902)
-   Fixed a UI issue affecting the Country drop-down box in the Plan and Billing page. (CY-1896)
-   Fixed an issue that prevented Codacy from reporting the Complexity metric on TypeScript repositories (CY-1824)
-   Fixed broken layout of Codacy comments on pull requests by removing the Codacy logo. (CY-1819)
-   Fixed an issue related to the expiration of the session cookie that caused the Codacy API to return 401 Unauthorized errors when the user was correctly logged in (CY-1815)
-   Fixed an UI issue affecting the list of default patterns under the account settings. (CY-522)
-   Improved the feedback message provided by Codacy when deactivating a pattern that already has detected issues. (CY-117)
-   Fixed an issue preventing the coverage information tab to be displayed in the page for specific files in the repository if the coverage was 0%. (CY-118)

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
