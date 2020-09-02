# Self-hosted v2.0.339

These updates won’t be available if you
are still using Codacy Legacy version. If you want to update Codacy to
the newest version, please contact us, and we will schedule a call to assist you
with the migration. Below is the
list of enhancements and bug fixes available with this update.

## Improvements

-   Updated
    look and feel of grade and coverage badges. Example:
    <https://github.com/codacy/node-codacy-coverage#node-codacy-coverage>
-   Introduced
    new optimization when cloning repositories reducing disk space
    usage. This may affect initial analysis performance after the update
    as the system recaches.
-   Changed
    the behavior of "Generate a new SSH key" to also queue the project
    for analysis afterward.
-   Fixed
    issue allowing duplicate accounts to be created and removed existing
    duplicate accounts.

## Bug fixes

-   Fixed
    an issue causing Codacy to reject web page requests after visiting
    many organizations.
-   Fixed
    an issue where changing the team filter in project list redirected
    users to the organization dashboard.
-   Fixed
    issue where the number of files covered reported in the project
    dashboard could be related to a different branch.
-   Fixed
    an issue causing some application to hang if Datadog wasn't
    started.
