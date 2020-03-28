# Enterprise v2.0.333

The following updates are only available if you already upgraded Codacy
to Docker v17.09.0-ce. If you haven’t done this yet but would like to,
please contact us and we will schedule a call and
assist you with the migration.

**Product Enhancements:**

-   Improvements to Admin view: We have revamped our admin view to make
    it easier for admins to manage teams and Codacy settings. Not only
    does this make for better visualisation but also provides
    information previously not available like no. of licenses.
-   Quality Status and Coverage Status is now split: Quality results
    such as complexity, issues and duplication will now be available as
    soon as a Pull Request is analysed instead of having to wait till
    coverage was available.
-   New Dashboards: We have improved our existing [Project
    dashboard](/hc/en-us/articles/360003890673-Project-Dashboard-How-does-it-work-),
    and launched two new ones:
    [Organization](/hc/en-us/articles/360003863274-Organization-Dashboard-How-does-it-work-)
    and [Personal
    dashboard](/hc/en-us/articles/360003863434-Personal-Dashboard-How-does-it-work-). 
-   We now support configuration files in Submodules for GitHub,
    Bitbucket (not Stash/Bitbucket Server) and GitLab. Check our
    [documentation](/hc/en-us/articles/360005239394)
    for more information on this.
-   You can now update build status for commits in BitBucket.
-   We now support partial coverage reports so you can now submit
    separate reports for different languages as well as send us partial
    reports without having to merge them before uploading to Codacy.
    [Here](https://github.com/codacy/codacy-coverage-reporter#updating-codacy)
    is an article with steps on how to upload partial coverage to
    Codacy.
-   We now display errors concerning [Codacy configuration
    file](/hc/en-us/articles/115002130625-Codacy-Configuration-File)
    in the UI.
-   We have updated the following tools to newer versions:
    -   Scalastyle version 1.0.0
    -   SCSSLint version 0.57.0
    -   CPPcheck version 1.83
        Following plugins have been added as well:
    -   ESLint:
        -   eslint-plugin-prettier
            eslint-config-react
    -   PHP CodeSniffer
        -   [PHP
            Compatibility](https://github.com/wimg/PHPCompatibility)

**Bugs:**

-   Fixed some false positives that were being reported by Cppcheck
-   Fixed highlighting problems with PHP syntax
-   Fixed the export issue in .csv format from the Security dashboard
-   Fixed problems with some of the coverage results not being displayed
-   Fixed problems with some of the PR’s that were failing to analyse
-   Fixed the issue of users that were unable to change a project name
-   The problems with creating issues with Jira integration is also
    resolved.
-   Fixed multiple issues with Gitlab integration.
-   Fix to allow projects to have a name only made up of numbers.
