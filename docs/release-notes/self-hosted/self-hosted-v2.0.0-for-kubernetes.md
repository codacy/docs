# Self-hosted v2.0.0 for Kubernetes

These release notes are for [Codacy Self-hosted v2.0.0](https://github.com/codacy/chart/releases/tag/2.0.0) for Kubernetes. [Follow these instructions](https://docs.codacy.com/chart/maintenance/upgrade/) to upgrade Codacy.

## Breaking changes

TODO: List changes to Chart configuration values

## Product enhancements

TODO: Add tool versions and updates

## Bug fixes

-    Now, Codacy provides feedback if the Country field is empty while updating the invoice details for an organization. (CY-2600)
-    Fixed an issue that prevented users from finishing the onboarding process unless they added a Git provider organization. (CY-2580)
-    Fixed an issue that prevented Codacy from loading the organization data from the Git provider during the onboarding process. (CY-2572)
-    Fixed an issue that prevented Codacy from sending commit and pull request notification emails to members of an organization. (CY-2467)
-    Fixed an issue that could cause Codacy to display an HTTP 404 error page instead of the Repositories page for an organization. (CY-2356)
-    Fixed an issue that could cause Codacy to stop syncing Bitbucket Cloud repositories and updating pull requests in those repositories. (CY-2355)
-    Fixed an issue that could prevent new users from starting the onboarding wizard. (CY-2288)
-    Now, Codacy automatically navigates to the Organizations page after deleting an organization. (CY-2278)
