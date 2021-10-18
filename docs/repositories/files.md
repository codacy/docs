# Files page

The **Files page** displays the current code quality information for each analyzed file in your [active repository branches](../repositories-configure/managing-branches.md).

Codacy displays the following information for each file, if available:

-   Grade
-   Number of issues
-   Complexity
-   Duplication
-   Code coverage

<!--NOTE Removed in CY-5028 >
You can sort the list by each column to help you identify which files you should improve or refactor next.
--->

![Files list](images/files.png)

If you have more than one branch enabled on Codacy, use the drop-down list next to the page title to select the branch that contains the files to display on the list. Use the search box to filter the list and find specific files.

![Changing the branch on the Files page](images/files-select-branch.png)

## File details

Select a file to see more detailed analysis information for that file, including statistics on:

-   **Size:** Lines of code, source lines of code, and commented lines of code
-   **Structure:** Number of methods and ratio of source lines of code per number of methods
-   **Complexity:** Complexity and complexity per method
-   **Duplication:** Number of clones and duplicated lines of code

The button **Ignore File** allows you to ignore the selected file on future Codacy analysis.

![File detail](images/files-details.png)

Depending on the available analysis information for the file, Codacy displays one or more of the following tabs:

-   **Issues:** Shows all issues in the file.

    Toggle between the list and annotated source code views using the icon on the right-hand side. When using the list view, you can use filters to help you find specific issues in the file. Select an issue to see more information about the issue.

    For more information about the available information and filters and for each issue see the [Issues page](issues.md).

    ![Issues for a file](images/files-issues.png)

-   **Duplication:** Shows all duplicated blocks in the file with links to the clones of each block.

    Toggle between the list and annotated source code views using the icon on the right-hand side.

    ![Duplicated blocks for a file](images/files-duplication.png)

-   **Coverage:** Shows which lines of code are covered by tests or not.

    ![Coverage information for a file](images/files-coverage.png)

## Why are some files missing? {: id="missing-files"}

The Files page only displays files in your repository that were analyzed by Codacy. This means that some of your files may be missing from the list, for example:

-   **You're viewing the incorrect branch**

    Not all files may exist in all branches of your repositories. Make sure that you're displaying files for the correct branch.

-   **The file might be ignored**

    The Files page doesn't display [ignored files](../repositories-configure/ignoring-files.md) that aren't meant to be analyzed, including the [files that Codacy ignores by default](../repositories-configure/ignoring-files.md#default-ignored-files).

-   **The file has an extension that is not on the list of supported extensions**

    Codacy has a [list of file extensions](../repositories-configure/file-extensions.md) associated with each language. Codacy doesn't analyze or display files with extensions that aren't associated with a language.

-   **The file might be too big**

    Codacy doesn't analyze or display files that are over a certain size. [Read more details](../faq/troubleshooting/why-is-my-file-over-150-kb-missing.md) for information on how to overcome this limit.
