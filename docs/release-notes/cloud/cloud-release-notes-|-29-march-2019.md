# Cloud Release Notes | March 29, 2019

## Product enhancements

-   We now integrate with [Bitbucket using OAuth2](../../organizations/what-are-synced-organizations.md). This has allowed us to reduce the level of permissions we require when you integrate Codacy with your Bitbucket account.

-   We updated TSLint to version [5.14.0](https://www.npmjs.com/package/tslint/v/5.14.0).

-   As a way of improving performance, we've stopped analysis for inactive, free, and open-source accounts and we've communicated to those impacted by this measure. This was done so we could allocate more resources to people that are actively using Codacy.

-   We removed the option to add projects using a Git URL. Projects that were added before February 12, 2019, will continue to be analyzed as usual.

-   As part of our performance improvement measures, we've implemented an upper limit of 150 Kb for file sizes that should be considered for analysis. This means that:

    -   These files won't show in the UI as ignored
    -   Some projects that weren't analyzing before will now be able to analyze
    -   Some projects will take less time to analyze
    -   Some projects will have fewer issues as third party libraries issues covered by this limit won't show
    -   Some projects will have more issues because the analysis batch in which they're inserted won't fail
    -   Although most of the files that are now being ignored will be third-party dependencies and generated files, there is still the chance that some files that are actually development code and should be analyzed won't be. This is a global setting and is currently not customizable per-client (that option is only available for Self-hosted customers)

## Bug fixes

-   Fixed a bug where it wasn't possible to <span class="skip-vale">unignore</span> a file
-   Fixed a bug where it wasn't possible to add Bitbucket integration in the project **Settings** -> **Integrations** page
-   Fixed a bug where pull requests weren't analyzing when a branch was renamed 
-   Fixed a bug where the "<span class="skip-vale">Unignore</span> issue" button wasn't working
-   Fixed a bug where webhook notifications were being sent with incomplete information
-   Fixed a bug that prevented users to save changes in project Settings when using Firefox 61
-   Fixed a bug with PHP_CodeSniffer "PHPCS_Internal" pattern that was generating false positives
-   Fixed a bug with PHP_CodeSniffer deprecated parameters `customSanitizingFunctions property` and `WordPress.CSRF.NonceVerification` that were generating false positives
-   Fixed a bug that was causing Cppcheck to fail analysis
-   Fixed a bug where the Merged Pull Requests view was showing a blank page
-   Fixed a bug where it wasn't possible to invite new team members from the Commit page
-   Fixed a bug where the Codacy status page link was broken
-   Fixed a bug where it wasn't possible to remove a user from an organization if the user had a special character in the name
-   Fixed a bug where some links in the <https://security.codacy.com/> page were broken
-   Fixed a bug where a user was having to confirm access to their Bitbucket account every time they logged in to Codacy
-   Fixed a bug where the link to "See all files" on the coverage applet in the project dashboard wasn't clickable
-   Fixed a typo in the Pull Requests page in the "possible fixed issues" message
