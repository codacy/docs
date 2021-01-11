# Issues View

This page displays an overview of all issues raised by Codacy in your repository. For every issue, Codacy presents information on why it considers the issue, how you could solve it, and the related code pattern.

![Issues View](images/issues-view.png)

## Issue categories

-   **Security:** security issues, potential vulnerabilities, unsafe dependencies.
-   **Error** **Prone:** bad practices/patterns that cause code to fail/prone to bugs.
-   **Code Style:** related to the style of the code, line length, tabs vs spaces.
-   **Compatibility:** identifies code that has problems with older systems or cross platform support.
-   **Unused Code:** unnecessary code not in use.
-   **Performance:** inefficiently written code.

## Issue level

-   **Info:** The least critical issue type will appear in blue. For example, code style issues.
-   **Warning:** This issue type will appear in yellow. You should be careful with these ones, they're based on code standards and conventions.
-   **Error:** The more dangerous issue type will show in red. Take your time to fix these, although the code may run, these issues show the code that's very susceptible to problems. These issues are bug-prone, and can have serious problems regarding security and compatibility.

Each pattern has a pre-defined severity level and at the moment, it's not possible to customize that information.

## Ignoring an issue

For an issue you disagree with or false positives, you can either ignore that instance or disable the pattern across the whole repository. To do so, click on cog wheel and select the desired option:

![Ignoring an issue](images/issues-view-ignore.gif)

### Reinstating ignored issues

To reinstate ignored issues, click on the **Current Issues** box, and select **Ignored Issues** from the drop-down menu.

![Reinstating an issue](images/issues-view-reinstate.gif)

## Removing a pattern

When you want to remove a pattern altogether from your repository's analysis, expand the issue you're aiming to disable the pattern for, click on the cog wheel, select **Remove pattern** and confirm your choice.

![Removing a pattern](images/issues-view-remove-pattern.gif)

!!! note
    If you're using a custom [configuration file](../repositories-configure/code-patterns.md#using-your-own-tool-configuration-files), you have to remove that pattern line manually in your file.

### Restoring a removed pattern

To restore a removed pattern, go to your repository's **Code Pattern** settings, choose the tool you'd like to enable the pattern for, find the pattern and click on the check box to enable.

![Restoring a removed pattern](images/issues-view-restore-pattern.gif)

!!! note
    If you're using a custom pattern configuration file, have to restore the line manually.

## Ignoring files

You can cherry-pick files that Codacy will ignore on later analysis. To ignore a file, expand the issue, click on the cog wheel, select **Ignore file** from the menu, and confirm.

!!! important
    This operation ignores the file across the entire repository and for all patterns.

![Ignoring files](images/issues-view-ignoring-files.gif)

See [more information on managing ignored files](../repositories-configure/ignoring-files.md).

## Create a comment in your repository

You can also add comments to the code on Codacy, and it will sync in your repository on [GitHub](../repositories-configure/integrations/github-integration.md) or [Bitbucket](../repositories-configure/integrations/bitbucket-integration.md).
