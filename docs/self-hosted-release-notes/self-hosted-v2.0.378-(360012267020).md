# Self-hosted v2.0.378

## Product Enhancements

-   **gitlab.com support:** We've added the ability to work with
    gitlab.com repositories. You'll now get automatic code reviews on
    your GitLab Merge Requests.
-   **Improved coverage reporter:** We migrated the existing language
    support to
    the [codacy-coverage-reporter](https://github.com/codacy/codacy-coverage-reporter)
    and deprecated the remaining reporters. In the new reporter, you'll
    find a streamlined installation process, support for all languages,
    support for common CI environments and partial coverage upload. You
    can also automate the reporter for multiple repositories using the
    new account-based authentication.
-   **Added language support with:**
    -   Added support for SpotBugs and Find Security Bugs for Scala
    -   Added support for SonarVisualBasic 8.4 for Visual Basic
    -   Added support for Revive 1.0.1 for Go
-   **Updated tools:**
    -   Updated Rubocop to 0.80
    -   Updated ESLint to 6.8.0
    -   Updated PMD to 6.21.0
    -   Updated Hadolint to 1.17.2
    -   Updated Flawfinder to 2.0.10
    -   Updated Credo to 1.0.0
    -   Updated cppcheck to 1.90
    -   Updated SpotBugs to 4.0.0
    -   Updated prospector to 1.2.0 (Python 3)
    -   Updated Checkstyle to 8.29
    -   Updated PHP Mess Detector to 2.8.1
    -   Updated PyLint to 1.9.5
    -   Updated PyLint (Python 3) to 2.4.3
    -   Updated PHP Code Sniffer to 3.5.3
    -   Updated Sonar C\# to 8.4
    -   Updated Detekt to 1.5.0
    -   Updated Ameba to 0.11.0
-   **Disabled tools:**
    -   Removed govet

## Other news

-   **Public Roadmap** - To give more visibility to what are we working
    on and the upcoming planned items we have now our [Roadmap
    public](https://roadmap.codacy.com/)! Feel free to check it and to
    give us feedback. 

## Bug Fixes

Fixed issue that caused inconsistent Complexity, Duplication and
Coverage values for commits and pull requests depending on which
analysis ran concurrently.

Other corrections:

-   Prevented analysis failing with timeout if commits were deleted by
    push forced updates.
-   Fixed issue that prevented users from revoking their GitHub
    Enterprise and GitHub.com integration separately.
-   Fixed an issue that caused deleting an organization when the last
    user left.
-   Increased the permissions required to perform some operations to
    Repository Admin's were validated through the user interface but not
    the API.
-   Fixed an issue that prevented users to add Bitbucket integration to
    their repositories.

 
