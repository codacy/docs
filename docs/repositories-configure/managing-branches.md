# Managing branches

Codacy automatically analyzes the default branch of your repository (typically `master` or `main` as configured on your Git provider), and also supports analyzing multiple branches.

To change the default branch of your repository or enable analysis on other branches:

1.  Open your repository **Settings**, tab **Branches**.

    ![Managing branches](images/managing-branches.png)

1.  To enable a new branch, toggle the corresponding switch in the column **Analyze**.

    Enabling a new branch triggers an initial analysis of that branch and the analysis results and information for that branch will become available after the analysis is complete.

1.  To change the default branch on Codacy, click the corresponding **Make default** link in the column **Default**.

    Codacy displays information for the default branch on dashboards and the repositories list by default, and we recommend that you set the default branch on Codacy to match the default branch of your Git repository.

    <!--TODO Check if it's important to mention this-->
    !!! note
        To set a branch as the default branch, you must first enable that branch.

Codacy manages pull request branches and inactive branches as follows:

-   **Pull request branches**

    Codacy automatically analyzes branches corresponding to new pull requests, **as long as the target branches of the pull requests are enabled**.

    Codacy stops analyzing these branches when the pull requests are merged or closed.

-   **Inactive branches**

    Codacy automatically disables analysis for branches that don't have any commits for more than 2 weeks, except for the main branch and pull request branches that are analyzed automatically.
