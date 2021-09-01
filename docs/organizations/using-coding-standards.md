# Using coding standards

<!--TODO

Concept:
-   Intro (also use as meta description)
-   Overview and value of the feature
-   How coding standards work, warning about repositories stopping to follow the coding standard
-   Default coding standard

-->

## Creating a coding standard

Organizations on Codacy can have one coding standard. To create a coding standard for your organization:

1.  Open your organization **Coding standards** page, tab **Coding standards**.

1.  Enter the name of the coding standard and click **Create standard**.

    Optionally, select a repository that Codacy will use as a baseline to bootstrap the tool and pattern configurations for the new coding standard. This is useful if you already have a repository with code patterns configured and that you wish to use as a template for the coding standard.

    ![Creating a new coding standard](images/coding-standard-create.png)

1.  Select all the programming languages that the new coding standard will cover and click **Next: Tools and patterns**.

    The coding standard will only include configurations for the tools that support at least one of the selected languages.

    ![Selecting the languages for the coding standard](images/coding-standard-select-languages.png)

1.  Configure the tools and patterns for the coding standard and click **Next: Select and apply to repositories**.

    For each tool:

    -   Toggle if Codacy will run the tool when analyzing your code
    -   Configure the code patterns that the tool will use

    You can use the filters to help you find the relevant tools and code patterns.

    ![Configuring the tools and patterns for the coding standard](images/coding-standard-configure-tools.png)

1.  Select existing repositories that should follow the new coding standard and click **Save and apply standard**.

    Codacy will use the new coding standard when analyzing the next commit on each selected repository.

    ![Applying the coding standard to repositories](images/coding-standard-apply.png)

## Editing a coding standard

<!--TODO

Editing a coding standard (include applying to other repositories)
-   Not possible to delete a coding standard once it's created?

-->
