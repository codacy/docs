# Self-hosted v1.1.0

These release notes are for [Codacy Self-hosted v1.1.0](https://github.com/codacy/chart/releases/tag/1.1.0){: target="_blank"}. To upgrade Codacy, [follow these instructions](/chart/maintenance/upgrade/).

## Product enhancements

-   The Profile and Access Management pages are now built using the React framework. (CY-83)
-   It is now possible to define custom values for the analysis inactivity timeout, analysis task timeout, and maximum analysis file size. (CY-1298)

## Bug fixes

-   Fixed an issue that sometimes caused logging into Codacy with GitLab Cloud to fail. (CY-1772)
-   Fixed an issue that caused the deletion of an account in Codacy to fail. (CY-1720)
-   Fixed an issue that could block Bitbucket Cloud and Bitbucket Server repositories from being added to Codacy if they contained spaces in the name. (CY-1717)
-   Fixed an issue that prevented pull request notification emails from being sent to the pull request authors. (CY-1678)
