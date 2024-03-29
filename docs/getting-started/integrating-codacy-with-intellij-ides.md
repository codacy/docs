# Integrating Codacy with IntelliJ IDEs

<!-- TODO ALA-872
- update instructions to match UI
- add screenshots
- review entire page for accuracy
-->

!!! info "The Codacy IntelliJ plugin is compatible with  IntelliJ IDEA (Ultimate, Community), Android Studio, and Aqua."

The [Codacy IntelliJ plugin](https://github.com/codacy/codacy-intellij-extension) is an open-source project that enables developers to review directly in IntelliJ IDEs the result of Codacy analysis for the pull requests they’re working on.

Use this plugin to get the full list of problems found by Codacy for a pull request and navigate to any Quality issue that you want to review and fix.

!!! info "To use this plugin you need a [Codacy account](https://www.codacy.com/signup-codacy)"

## Interface overview

[//]: # (![Main view]&#40;./images/codacy-intellij-plugin-main-view.png&#41;<!-- TODO ALA-872 screenshot -->)

The main view of the plugin displays information about the code quality and coverage changes introduced by the pull request of the currently checked-out branch:

-   The **Quality status** of the pull request, either up to standards or not up to standards, based on the [Quality gates](../repositories-configure/adjusting-quality-gates.md) set for the repository.

-   Any **Quality issues** introduced or fixed by the pull request. These are the same issues you find in the [Quality Issues tabs](../repositories/pull-requests.md#issues-tabs) in the Codacy app and are also visible in IntelliJ's Problems tab.

    The number next to each file name is the total number of Quality issues that the pull request adds to or removes from that file. The number farther to the right, added by IntelliJ, is the total number of problems in that file, which may or may not be Quality issues from Codacy. If there are any Medium or Critical Quality issues, the file name is also highlighted in yellow (Medium) or red (Critical).<!-- TODO ALA-872 confirm -->

[//]: # (    ![Important issues]&#40;./images/codacy-intellij-plugin-important-issues.png&#41;<!-- TODO ALA-872 screenshot -->)

-   The **diff coverage and coverage variation** introduced by the pull request. These are the same values you find in the [Pull request coverage overview](../repositories-coverage/pull-requests.md#coverage-overview) panel in the Codacy app.

    The percentage next to each file name is the coverage variation for that file.

-   Sequences of **duplicate code** (clones) introduced by the pull request. These are the same ones you find in the [Quality Duplication tabs](../repositories/pull-requests.md#duplication-tabs) in the Codacy app.

-   Variations in **code complexity** introduced by the pull request.

## Installing the Codacy IntelliJ plugin

1.  Make sure that the repository you’re working on is analyzed by Codacy and that you have a [repository read](../organizations/roles-and-permissions-for-organizations.md) role or higher.

    !!! tip
        If this is your first time using Codacy, see [how to add and analyze your first repository](./codacy-quickstart.md#adding-your-first-repository).

1.  Install the plugin from the [JetBrains Marketplace](https://plugins.jetbrains.com/plugin/23924-codacy) or through the [plugin settings panel](https://www.jetbrains.com/help/idea/managing-plugins.html) in your IntelliJ IDE.

## Getting pull request quality and coverage data

To see Codacy quality and coverage data for an open pull request, follow these steps:

1.  Open the repository directory in your IntelliJ IDE.

    !!! note
        If the repository isn't on Codacy yet, [add it to Codacy](../organizations/managing-repositories.md#adding-a-repository) first.

1.  Open the main view by clicking the **Codacy logo** in the activity bar or the **Codacy tab** in the status bar.

[//]: # (    ![Codacy main view]&#40;./images/codacy-intellij-plugin-sign-in.png&#41;)

1.  If you’re not signed in, click the **Sign in** button to authorize IntelliJ on Codacy.

    !!! tip
        To access a complete list of Codacy commands, open the IntelliJ command palette (`Ctrl+Shift+P` on Windows/Linux or `Cmd+Shift+P` on macOS) and type "Codacy".

1.  Check out the pull request of interest. You can do it either manually or from the **Open Pull Requests** tab, by clicking the arrow button or using the contextual right-click menu.

After completing these steps, the main view shows the result of the latest Codacy analysis for the pull request. The IntelliJ Problems tab lists the Quality issues found.

## Reviewing pull request issues

In the **Problems tab**, Codacy displays the same Quality issues you find in the **Status tab** and lets you navigate to the exact line of code where the issue was found.

!!! note
    Code coverage, duplicates, and complexity aren't currently shown in the Problems tab.

To review Quality issues:

1.  Open the **Problems tab** (use `Ctrl+Shift+M` on Windows/Linux or `Cmd+Shift+M` on macOS).

1.  Click the name of the issue you want to review.

[//]: # (    ![Navigate to a specific issue from the Problems tab]&#40;./images/codacy-intellij-plugin-problems-tab.png&#41;)

1.  Hover over a highlighted issue in the code editor to view available actions and suggested quick fixes (if available).

    For a list of tools that support quick fixes, see [Supported languages and tools](./supported-languages-and-tools.md#supported-languages-and-tools).

1.  Once you've addressed the problems in your code, push your changes to the Git provider so that Codacy analyzes the updated code.

When the analysis is complete, the Codacy plugin automatically refreshes the pull request analysis result. You can also refresh the pull request data manually by clicking the Refresh Pull Request button in the main view.

## See also

-   [Troubleshooting the Codacy IntelliJ plugin](https://github.com/codacy/codacy-vscode-extension#troubleshooting)
