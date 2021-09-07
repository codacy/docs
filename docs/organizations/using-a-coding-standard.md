# Using a coding standard

Create a coding standard on your organization to define and apply global tool and code pattern configurations consistently across your repositories. You can also apply the coding standard to new repositories automatically by defining the coding standard as default.

Use the organization coding standard to ensure that Codacy analyzes all your repositories with the same tool and code pattern settings. For example, configure the organization coding standard to ensure that all your repositories and teams are following the same global security rules or coding conventions.

If you then customize the tool and code patterns for a specific repository, Codacy warns you that the repository will stop following the coding standard and ask for your confirmation.

## Creating a coding standard {: id="creating"}

<!--TODO

-   Isn't it possible to configure the coding standard as the default while creating it? https://www.figma.com/file/Od7PrP0rpI2vvycq0iOvzI?node-id=904:2732#106911296

-->

Organizations on Codacy can have one coding standard. To create a coding standard for your organization:

1.  Open your organization **Coding standards** page, tab **Coding standards**.

1.  Enter the name of the coding standard and click **Create standard**.

    Optionally, select a repository that Codacy will use as a baseline to bootstrap the tool and pattern configurations for the new coding standard. This is useful if you already have a repository with code patterns configured and that you wish to use as a template for the coding standard.

    ![Creating a new coding standard](images/coding-standard-create.png)

1.  Select all the programming languages that the new coding standard will cover and click **Next: Tools and patterns**.

    The coding standard will only include configurations for the tools that support at least one of the selected languages.

    ![Selecting the languages for the coding standard](images/coding-standard-select-languages.png)

1.  Configure the tools and patterns of the coding standard and click **Next: Select and apply to repositories**.

    For each tool:

    -   Toggle if Codacy will run the tool when analyzing your code
    -   Configure the code patterns that the tool will use

    You can use the filters to help you find the relevant tools and code patterns.

    ![Configuring the tools and patterns for the coding standard](images/coding-standard-configure-tools.png)

1.  Select existing repositories that should follow the new coding standard and click **Save and apply standard**.

    Codacy will use the new coding standard when analyzing the next commit on each selected repository.

    ![Applying the coding standard to repositories](images/coding-standard-apply.png)

## Editing a coding standard {: id="editing"}

<!--TODO

Editing a coding standard (include applying to other repositories)
-   Not possible to delete a coding standard once it's created? https://www.figma.com/file/Od7PrP0rpI2vvycq0iOvzI?node-id=904:2732#106911633

-->

To edit an existing coding standard or change the repositories that follow that coding standard:

1.  Open your organization **Coding standards** page, tab **Coding standards**.

1.  Click the edit icon on the coding standard card.

    ![Editing an existing coding standard](images/coding-standard-edit.png)

1.  Follow the same steps as when [creating the coding standard](#creating) to update:

    -   The programming languages that the coding standard covers
    -   The tools and patterns of the coding standard
    -   The repositories that follow the coding standard

1.  Click the button **Save and apply standard** on the repository selection screen to save your changes to the coding standard.

    Codacy will use the updated coding standard when analyzing the next commit on each selected repository.

Optionally, you can configure new repositories in your organization to follow the coding standard by default:

## Setting a coding standard as default {: id="set-default"}

New repositories in your organization will automatically follow the default coding standard.

To set a coding standard as default:

1.  Open your organization **Coding standards** page, tab **Coding standards**.

1.  Toggle **Make default** on the coding standard card.

    ![Setting a coding standard as the default](images/coding-standard-set-default.png)

## See also

-   [Configuring code patterns on each repository](../repositories-configure/configuring-code-patterns.md)
-   [Copying code patterns between repositories](copying-code-patterns-between-repositories.md)
