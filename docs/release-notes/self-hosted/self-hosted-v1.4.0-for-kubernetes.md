# Self-hosted v1.4.0 for Kubernetes

These release notes are for [Codacy Self-hosted v1.4.0](https://github.com/codacy/chart/releases/tag/1.4.0) for Kubernetes.

# Bug fixes

-    Fixed an issue that could cause the list of repositories in an organization to display the repositories in the incorrect order. (CY-1940)
-    Fixed an issue that could prevent pull requests from being analyzed if they were created while Codacy was already performing an analysis. (CY-1902)
-    Fixed a UI issue affecting the Country drop-down box in the Plan and Billing page. (CY-1896)
-    Fixed broken layout of Codacy comments on pull requests by removing the Codacy logo. (CY-1819)
-    Fixed an UI issue affecting the list of default patterns under the account settings. (CY-522)
-    Improved the feedback message provided by Codacy when deactivating a pattern that already has detected issues. (CY-117)
-    Fixed an issue preventing the coverage information tab to be displayed in the page for specific files in the repository if the coverage was 0%. (CY-118)
