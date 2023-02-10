# Using a coding standard

!!! info "This is a beta feature"
    This is a new Codacy feature and <span class="skip-vale">we're</span> continuing to improve it.

    For more information [read the release announcement](https://blog.codacy.com/organization-coding-standards/) or [watch a demo (3 min)](https://www.loom.com/share/19642d09662e40f2820bf2be6bdf3660) to learn how to create a coding standard for your organization.

Create a coding standard on your organization to define and apply shared tool and code pattern configurations consistently across your repositories. You can also apply the coding standard to new repositories automatically by defining the coding standard as default.

The organization coding standard helps you ensure that Codacy analyzes multiple repositories with the same tool and code pattern settings. For example, you can use the organization coding standard to ensure that all your repositories and teams are following the same security rules or coding conventions.

If a coding standard does not include a tool, any pre-existing repository settings for that tool and for the related code patterns are not modified by the coding standard.

When you customize the tools or code patterns of a repository that follows the coding standard, Codacy warns you that the repository will stop following the coding standard and asks for your confirmation.

!!! important
    The coding standard turns tools with configuration files on and off. Those tool configuration files, however, take precedence over the code patterns defined on the coding standard.

## Creating a coding standard {: id="creating"}

To create a coding standard for your organization:

1.  Open your organization **Coding standards** page, tab **Coding standards**.

1.  Name your coding standard and click **Create standard**.

    Optionally, select a repository for Codacy to use as a baseline when bootstrapping the tool and pattern configurations for the new coding standard. This is useful if you already have a configured repository that you wish to use as a template.

    ![Creating a new coding standard](images/coding-standard-create.png)

1.  Select the programming languages that the new coding standard should cover and click **Next: Tools and patterns**.

    The coding standard will only include configurations for the tools that support at least one of the selected languages.

    ![Selecting the languages for the coding standard](images/coding-standard-select-languages.png)

1.  Configure the tools and patterns of the coding standard and click **Next: Select and apply to repositories**.

    -   Toggle the tools to run when Codacy analyzes your code
    -   For each enabled tool, configure the code patterns to use

    !!! tip
        -   Use the filters to find the relevant tools and code patterns. The recommended configurations are manually curated by Codacy or based on tool defaults and are marked with the icon ![Recommended icon](images/coding-standard-recommended-icon.png).
        -   To toggle multiple code patterns at once, click the checkbox of the first pattern and **Shift+click** the checkbox of the last pattern in a range.
        -   To toggle all the code patterns visible on the list, click the checkbox on the header of the code patterns list. If there are more code patterns to load on the list, you can click the link **Enable/Disable all &lt;N&gt; patterns** to toggle all patterns matching the current filters.

    ![Configuring the tools and patterns for the coding standard](images/coding-standard-configure-tools.png)

1.  Select existing repositories that should follow the new coding standard and click **Save and apply standard**.

    Codacy will start using the new coding standard on the next analysis of each selected repository.

    ![Applying the coding standard to repositories](images/coding-standard-apply.png)

## Setting a coding standard as default {: id="set-default"}

New repositories in your organization automatically follow the default coding standard or Codacy defaults if no default coding standard is set.

To set a coding standard as default:

1.  Open your organization **Coding standards** page, tab **Coding standards**.

1.  Toggle **Make default** on the coding standard card.

    ![Setting a coding standard as the default](images/coding-standard-set-default.png)

## Editing a coding standard {: id="editing"}

To edit an existing coding standard or change the repositories that follow that coding standard:

1.  Open your organization **Coding standards** page, tab **Coding standards**.

1.  Click the edit icon on the coding standard card.

    ![Editing an existing coding standard](images/coding-standard-edit.png)

1.  Edit the current coding standard configurations and click the button **Next** to advance between the following pages:

    -   The programming languages that the coding standard applies to
    -   The tool and code pattern configurations of the coding standard
    -   The repositories that follow the coding standard

    You can also rename the coding standard using the input at the bottom of the first page of the wizard:

    ![Renaming a coding standard](images/coding-standard-rename.png)

1.  Click the button **Save and apply standard** on the repository selection page to save your changes to the coding standard.

    !!! important
        If you stop applying the coding standard to any repository, Codacy restores the previous code pattern configurations for that repository.

    Codacy will start using the updated coding standard on the next analysis of each selected repository.

!!! tip
    To ensure that all new repositories automatically follow the coding standard, [set the coding standard as default](#set-default).

## See also

-   [Copying code patterns between repositories](copying-code-patterns-between-repositories.md)
-   [Importing pattern configurations from another repository](../repositories-configure/configuring-code-patterns.md#import-patterns)
-   [Configuring code patterns on each repository](../repositories-configure/configuring-code-patterns.md)
-   [How to implement Google JavaScript style guide with Codacy](https://blog.codacy.com/implement-google-javascript-style-guide-with-codacy/)
