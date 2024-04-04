# Managing branches

{% if not extra.self_hosted %}

{% include-markdown "../assets/includes/admin-access-control-info.md" %}

Codacy automatically analyzes the default branch of your repository (typically `master` or `main` as configured on your Git provider) and loads its data first on dashboards. Codacy also supports analyzing multiple branches.

!!! note
    Codacy doesn't support and skips the analysis of branches named [`HEAD`](<https://git-scm.com/docs/gitglossary#Documentation/gitglossary.txt-aiddefHEADaHEAD>) or matching the pattern [`refs/heads/*`](<https://git-scm.com/docs/gitglossary#Documentation/gitglossary.txt-aiddefrefaref>), as these are Git reserved terms.

To change the default branch of your repository or start analyzing other branches:

1.  Open your repository **Settings**, tab **Branches**.

    ![Managing branches](images/managing-branches.png)

1.  To enable analysis for a new branch, toggle the corresponding switch in the column **Analyze**.

    Enabling a new branch triggers an initial analysis of that branch and the analysis results and information for that branch will become available after the analysis is complete.

1.  To change the default branch on Codacy, click the corresponding **Make default** link that appears when you hover the column **Default**.

    Changing the default branch on Codacy doesn't change the default branch on your Git provider. Likewise, changing the default branch on your Git provider doesn't change the default branch on Codacy.

    !!! note
        You can only set as default branch an already enabled branch.
{% else %}
Codacy automatically triggers analysis on the main branch of your repository (typically `master` or `main` as configured on your Git provider), and also supports analyzing multiple branches.

To change the main branch of your repository or enable analysis on other branches, open your repository **Settings**, tab **Branches**. Enabling a new branch triggers an initial analysis of that branch and the analysis results and information for that branch will become available after the analysis is complete.

This page also displays the [code quality grade](../faq/code-analysis/which-metrics-does-codacy-calculate.md) for each enabled branch.

![Managing branches](images/managing-branches-sh.png)

!!! note
    **If you're using Codacy Self-hosted** you can also configure Codacy to automatically enable all new branches that are pushed to the repository.

    ![Auto-enable new branches](images/managing-branches-auto-enable.png)
{% endif %}

Codacy manages pull request branches and inactive branches as follows:

-   **Pull request branches**

    Codacy automatically analyzes branches corresponding to new pull requests and also enables the target branches if they're disabled.

-   **Inactive branches**

    Codacy automatically disables analysis for branches that don't have any commits for more than 2 weeks, except for the main branch and pull request branches that are analyzed automatically.
