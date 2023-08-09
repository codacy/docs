---
description: Configure the static analysis tools and code patterns that Codacy uses to analyze your repositories to ensure that the analysis results fit your needs.
---

# Configuring code patterns

!!! note
    Organization admins can [change who is allowed to configure code patterns](../organizations/roles-and-permissions-for-organizations.md#change-analysis-configuration).

By default, Codacy analyzes your repositories using a subset of the supported static analysis tools and code patterns. These default configurations are the result of community feedback and of existing coding standards.

You have multiple options to adapt the default configurations to your needs:

-   [Configuring tools and code patterns using the Codacy UI](#configuring-tools-and-code-patterns-using-the-codacy-ui)
-   [Importing configurations from another repository](#import-patterns)
-   [Using tool configuration files](#using-your-own-tool-configuration-files)

## Configuring tools and code patterns using the Codacy UI

!!! note
    If you update the configurations of a repository that follows a [coding standard](../organizations/using-coding-standards.md),  Codacy copies the coding standard configurations to the repository, and the repository stops following the coding standard. You can then customize the repository configurations without affecting the coding standard.

To configure the tools and code patterns for a repository using the Codacy UI:

1.  Open the repository **Code patterns** page.

    ![Code patterns page](images/code-patterns.png)

1.  Enable or disable the tools that Codacy should use to analyze the repository.

    ![Toggling tools](images/code-patterns-toggle-tools.png)

1.  Select a tool to enable or disable its code patterns. Some patterns also allow you to configure the rules for detecting issues.

    To filter the patterns by language, category, or status, use the sidebar filters.

    To see an explanation of the issues that a pattern detects and how to fix them, click **Show details**.

    !!! tip
        -   To enable a group of code patterns, use the filter to select the relevant group of patterns and click **Enable all**.

            For example, to enable all Security patterns, click the **Security** filter and then click **Enable all**.

        - Codacy displays the tag **New** for one month next to the name of newly added code patterns.

    ![Configuring code patterns](images/code-patterns-configure.png)

1.  Optionally, to take the changes into account immediately, [reanalyze the repository manually](../faq/repositories/how-do-i-reanalyze-my-repository.md). Otherwise, Codacy will use the updated configuration when analyzing subsequent commits and pull requests.

## Importing configurations from another repository {: id="import-patterns"}

Importing tool and code pattern configurations from another repository can help you bootstrap and standardize the tool and code pattern configurations across your repositories.

For example, when adding a new repository on Codacy you can copy the tool and code pattern configurations from an existing repository that's already configured, and then tweak and adapt the settings for your new repository.

!!! tip
    To ensure that multiple repositories consistently follow the same global tool and code pattern configurations, [use an organization coding standard](../organizations/using-coding-standards.md) instead.

    Alternatively, you can also copy the tool and code pattern configurations [from one repository to multiple target repositories](../organizations/copying-code-patterns-between-repositories.md).

<!-- TODO DOCS-341 Can we simplify this? -->
<!--code-patterns-copy-start-->
!!! important
    Consider the following when using this feature:

    -   **Tool matching:** Codacy only copies settings for tools that are available on both the source and target repositories, and overwrites the existing settings for these tools on the target repository.
    -   **Toggle status:** Codacy copies the enabled or disabled status of the matching tools from the source to the target repository.
    -   **Configuration files:** Codacy copies the UI configuration of all matching tools, even those set to use configuration files. However, the import doesn't include the configuration mode itself and doesn't copy configuration files across repositories.

    The following example illustrates the points above:

    | Source repository | Target repository | Target repository after import |
    |-------------------|-------------------|--------------------------------|
    | ![Source repository](images/code-patterns-import-example-source.svg) | ![Target repository](images/code-patterns-import-example-target.svg) | ![Target repository after import](images/code-patterns-import-example-final.svg) |
<!--code-patterns-copy-end-->

To import the tool and code pattern configurations from another repository:

1.  Open your repository **Code patterns** and click **Import patterns**.

<!-- TODO DOCS-341 Evaluate whether to keep -->
[//]: # (    ![Importing code patterns from another repository]&#40;images/code-patterns-import.png&#41;)

1.  Follow the instructions to select the source repository and complete the import.

1.  Review and adjust your tool and code pattern configurations if necessary.

Codacy will use the updated configurations on the next analysis.

## Using tool configuration files {: id="using-your-own-tool-configuration-files"}

!!! note
    -   Once set, Codacy uses a configuration file even if you exclude it from Codacy analysis [using the Codacy UI](ignoring-files.md) or a [Codacy configuration file](codacy-configuration-file.md#syntax-for-ignoring-files).

    -   When you update pattern settings using a configuration file, Codacy may display outdated messages for issues identified previously by those patterns.<!-- TODO Can we remove this? If not, can we clarify when this happens and if this is temporary?  -->

Codacy [supports configuration files for several static analysis tools](../getting-started/supported-languages-and-tools.md#tool-configuration-files) to help you streamline your setup.

To use a configuration file for a static analysis tool:

1.  Push the configuration file to the root of the [default Codacy branch](managing-branches.md).

1.  Open the repository **Code patterns** page, select the tool of interest, and select the option **Configuration file**.

    !!! note
        -   If a subsequent pull request updates the configuration file, Codacy considers the updates when analyzing that pull request.

        -   If a subsequent pull request deletes the configuration file, Codacy reverts to the last tool patterns set before using the configuration file.

    ![Using a configuration file](images/code-patterns-config-file.png)

## See also

-   [Applying a coding standard across multiple repositories](../organizations/using-coding-standards.md)
-   [Copying code patterns between repositories](../organizations/copying-code-patterns-between-repositories.md)
-   [How to implement Google JavaScript style guide with Codacy](https://blog.codacy.com/implement-google-javascript-style-guide-with-codacy/)<!-- TODO DOCS-341 Shouldn't we rather mention an internal docs page here? -->
