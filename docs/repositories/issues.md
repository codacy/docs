# Issues page

The **Issues page** lists all the issues that Codacy detected in your repository.

By default, the page lists the issues on the main branch of your repository but if you have [more than one branch enabled](../repositories-configure/managing-branches.md) you can use the drop-down list at the top of the page to display issues on other branches.

![Issues page](images/issues.png)

Click the title of an issue to see the following information:

-   What's the issue and how to solve it
-   Details about the code pattern that detected the issue

![Issue details](images/issues-detail.png)

## Filtering issues

Filter the list of issues to find particular issues, such as the issues with the highest severity or security issues:

![Filtering issues](images/issues-filter.png)

You can define one or more of the following filters:

-   **Language**: Programming language of the file where the issues were detected

-   **Issue category**: One of the following types of issue:

    {%
        include-markdown "../repositories-configure/code-patterns.md"
        start="<!--categories-start-->"
        end="<!--categories-end-->"
    %}

-   **Severity level**: Potential impact of the issues:

    -   **Error (red):** The most dangerous issues that you should prioritize fixing since they identify code that's susceptible to serious problems regarding security and compatibility
    -   **Warning (yellow):** You should check out these issues, as they're based on code standards and conventions
    -   **Info (blue):** The least critical issues, such as code style issues

-   **Pattern**: [Code pattern](../repositories-configure/code-patterns.md) that detected the issue

-   **Author**: Commit author that introduced the issue on the code

!!! note
    Each code pattern has a pre-defined severity level and at the moment Codacy doesn't support customizing that information.

## Ignoring issues

Ignoring an issue hides the issue from the list of issues and helps you focus on the issues that your team should tackle.

For example, you can ignore issues that you disagree with because:

-   Your team won't tackle the issues in the immediate feature
-   The issue isn't relevant in the specific context of your code
-   The issue is a false positive

To ignore an issue, click the issue title and select **Ignore issue** on the cogwheel menu:

![Ignoring an issue](images/issues-ignore.png)

To see the list of ignored issues or restore ignored issues, click **Current Issues** and select **Ignored Issues**:

![Restoring an ignored issue](images/issues-unignore.png)

!!! tip
    Organization owners can [configure who is allowed to ignore issues](../organizations/roles-and-permissions-for-synced-organizations.md#configure-ignore-issues).

## Disabling patterns

Disabling the pattern that triggered an issue means that Codacy will stop using that pattern in the next analysis of your repository, so be sure that you're no longer interested in identifying similar issues.

To disable the pattern that triggered an issue, click the issue title and select **Remove pattern** on the cogwheel menu:

![Disabling a pattern](images/issues-disable-pattern.png)

To re-enable patterns use the [Code patterns page](../repositories-configure/code-patterns.md).

!!! note
    If you're using a [custom configuration file](../repositories-configure/code-patterns.md#using-your-own-tool-configuration-files), you must manage patterns manually on your configuration file.

## Ignoring files

[Ignoring a file](../repositories-configure/ignoring-files.md) means that Codacy will no longer analyze that file on your repository, so be sure that you're no longer interested in identifying any type of issues on that file.

To ignore the file that contains an issue, click the issue title and select **Ignore file** on the cogwheel menu:

![Ignoring files](images/issues-ignore-file.png)

## Create a comment in your repository

You can also add comments to the code on Codacy, and it will sync in your repository on [GitHub](../repositories-configure/integrations/github-integration.md) or [Bitbucket](../repositories-configure/integrations/bitbucket-integration.md).
