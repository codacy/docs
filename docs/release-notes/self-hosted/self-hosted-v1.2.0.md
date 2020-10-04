# Self-hosted v1.2.0

These release notes are for [Codacy Self-hosted v1.2.0](https://github.com/codacy/chart/releases/tag/1.2.0){: target="_blank"}.

To upgrade Codacy, follow [these instructions](/chart/maintenance/upgrade/).

## Product enhancements

-   To avoid downtime, Codacy now automatically rolls the deployment when performing an Help upgrade. (CY-1420)
-   Now, Codacy does not allow the last Codacy administrator to delete its own account. (CY-1768)

## Bug fixes

-   Fixed an issue that prevented the correct removal of repositories from Codacy when the repositories were deleted on GitHub. (CY-1820)
