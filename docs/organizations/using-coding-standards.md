# Using coding standards

Coding standards enable the analysis of multiple repositories with the same tool and code pattern configurations, ensuring consistent code quality across your organization. For example, you can use a coding standard to ensure that a group of repositories follows the same security rules or coding conventions.

This page covers the following topics:

-   [Creating a coding standard](#creating)
-   [Defining a default coding standard](#set-default)
-   [Editing a coding standard](#editing)
-   [Deleting a coding standard](#deleting)
-   [Using a coding standard alongside tool configuration files](#using-with-tool-configuration)

## Creating a coding standard {: id="creating"}

!!! note
    Codacy currently supports up to 10 coding standards per organization.

To create a coding standard for your organization:

1.  Open your organization **Policies** page, tab **Coding standards**.

1.  Click the button **Create new standard** at the top right-hand corner of the page. This opens the coding standard creation form.

1.  Enter a unique name and click **Create standard**.

    Optionally, select a repository to use as a baseline for the new coding standard. This is useful if you already have a well-configured repository that you wish to use as a template.

    ![Creating a new coding standard](images/coding-standard-create.png)

1.  Select the programming languages that the new coding standard should cover. 

    !!! important
        The coding standard will only control tools that can analyze one or more of the languages selected in this step.
         
        For the remaining languages not selected in this step, Codacy uses existing repository-level configurations if present or global Codacy defaults otherwise, potentially analyzing some of the omitted languages. To prevent this:

        1. Ensure all languages are selected, so that the coding standard controls all tools.

        1. In the next step, explicitly disable the tools that you don't want to use.

    ![Selecting the languages for the coding standard](images/coding-standard-select-languages.png)

1.  Click **Next: Tools and patterns**.

1.  Configure the tools and patterns of the coding standard.

    -   Toggle the tools to run when Codacy analyzes your code
    -   For each enabled tool, configure the code patterns to use

    !!! tip
        -   Use the filters to find the relevant tools and code patterns. The recommended configurations are manually curated by Codacy or based on tool defaults and are marked with the icon ![Recommended icon](images/coding-standard-recommended-icon.png).
        -   To toggle multiple code patterns at once, click the checkbox of the first pattern and **Shift+click** the checkbox of the last pattern in a range.
        -   To toggle all the code patterns visible on the list, click the checkbox on the header of the code patterns list. If there are more code patterns to load on the list, you can click the link **Enable/Disable all &lt;N&gt; patterns** to toggle all patterns matching the current filters.

    ![Configuring the tools and patterns for the coding standard](images/coding-standard-configure-tools.png)

1.  Click **Next: Select and apply to repositories**.

1.  Select existing repositories that should follow the new coding standard and click **Save and apply standard**.

    Codacy will start using the new coding standard on the next analysis of each selected repository.

    !!! note
        A repository can follow one coding standard at a time. Assigning a coding standard to a repository unassigns any previously assigned coding standard.

    ![Applying the coding standard to repositories](images/coding-standard-apply.png)

## Defining a default coding standard {: id="set-default"}

For ease of management, you can define a default coding standard that automatically applies to new repositories. In the absence of a default coding standard, Codacy applies global defaults to all new repositories.

!!! note
    When Codacy introduces new tools, those are automatically added to the global Codacy defaults but need to be manually added to the default coding standard.

To set a coding standard as default:

1.  Open your organization **Policies** page, tab **Coding standards**.

1.  Toggle **Make default** on the relevant coding standard card.

    !!! note
    Only one coding standard at a time can be the default coding standard.

    ![Setting a coding standard as the default](images/coding-standard-set-default.png)

## Editing a coding standard {: id="editing"}

!!! note
    Any edits to the configurations of a coding standard are automatically applied from the next analysis of each associated repository. However, any edit to the configurations of an associated repository unassigns the coding standard from that repository.

To edit an existing coding standard or change the repositories that follow that coding standard:

1.  Open your organization **Policies** page, tab **Coding standards**.

1.  Click the edit icon on the coding standard card.

    ![Editing an existing coding standard](images/coding-standard-edit.png)

1.  Edit the current coding standard configurations and click the button **Next** to advance between the following pages:

    -   The programming languages that the coding standard applies to
    -   The tool and code pattern configurations of the coding standard
    -   The repositories that follow the coding standard

    You can also rename the coding standard using the input at the bottom of the first page of the wizard:

    ![Renaming a coding standard](images/coding-standard-rename.png)

1.  Click the button **Save and apply standard** on the repository selection page to save your changes to the coding standard.

    Codacy will start using the updated coding standard on the next analysis of each selected repository.

    !!! note
        If you stop applying a coding standard to a repository, Codacy restores the previous code pattern configurations of that repository, but keeps the tool activation status defined by the coding standard.

## Deleting a coding standard {: id="deleting"}

To delete a coding standard:

1.  Open your organization **Policies** page, tab **Coding standards**.

1.  Click the trash can icon on the coding standard card and confirm.

    !!! note
        If you delete a coding standard, Codacy restores the previous code pattern configurations of any repositories following the coding standard, but keeps the tool activation status defined by the coding standard.

    ![Deleting a coding standard](images/coding-standard-delete.png)

## Using a coding standard alongside tool configuration files {: id="using-with-tool-configuration"}

When using a [tool configuration file](../repositories-configure/configuring-code-patterns.md#using-your-own-tool-configuration-files) alongside a coding standard, the configuration file controls the code patterns, while the coding standard controls whether the tool is enabled or disabled.

## See also

-   [Configuring code patterns on each repository](../repositories-configure/configuring-code-patterns.md)
-   [How to implement Google JavaScript style guide with Codacy](https://blog.codacy.com/implement-google-javascript-style-guide-with-codacy/)
