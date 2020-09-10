# Self-hosted v2.0.379

## Product Enhancements

### Updated tools:

-   Credo 1.3.0
-   Detekt 1.6.0
-   PHP Code Sniffer 3.5.4
-   PMD 6.22.0
-   PyLint (Python 3) 2.4.4
-   Rubocop 0.80.1
-   Sonar C# 8.5
-   Sonar Visual Basic 8.5
-   Stylelint 12.0.1

## Breaking Changes

-   Updated Codacy to authenticate to GitHub Enterprise using GitHub Apps

    **Rationale:** [GitHub Apps](https://developer.github.com/apps/about-apps/) are the new preferred way of building products that work with GitHub repositories. With GitHub Apps you are able to select which accounts, organizations and repositories Codacy has access to. Using Apps also unlocks access to new APIs like GitHub Checks for creating better pull request reviews.

    **Workaround:** See how to [re-authenticate Codacy to GitHub Enterprise](https://support.codacy.com/hc/en-us/articles/360012729599-Upcoming-changes-to-GitHub-integration-for-Codacy-Self-hosted).

-   Removed the tools GoLint, Node Security and SCSSLint

    **Rationale:** These tools have become deprecated or stopped being updated by their maintainers and started providing a bad experience for Codacy users either by reporting false positives or causing other unexpected issues.

    **Workaround:** See how to [replace the functionality of each tool](https://support.codacy.com/hc/en-us/articles/360012328140-Removal-of-NodeSecurity-GoLint-and-SCSSLint).

## Bug Fixes

-   Fixed issue preventing Codacy from updating the status of pull requests on GitHub Enterprise
-   Fixed issue preventing Codacy from making comments on GitHub
-   Fixed issue where the Python floor division operator “//” was incorrectly interpreted as a comment
-   Fixed the validation of email addresses so they can contain the character "+"
-   Fixed issue that prevented the “Integrations” tab under repository settings from displaying who added the integrations
-   Fixed issue that caused Codacy to display a randomly generated Gravatar for certain users
-   Renamed Bitbucket Stash to Bitbucket Server on the pull request screen
