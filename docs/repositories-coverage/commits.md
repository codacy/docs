---
page_name: commit
file_name: commits
product: coverage
---

# Coverage Commits page

The **Coverage Commits page** displays an overview of the commits in your repository, such as the analysis status and coverage for each commit. This allows you to monitor the evolution of coverage in your repository per commit.

By default, the page lists the commits on the main branch of your repository but if you have [more than one branch enabled](../repositories-configure/managing-branches.md) you can use the drop-down list at the top of the page to display commits on other branches.

![Commits page](images/commits.png)

Click a specific commit to see detailed information about the code coverage changes introduced by that commit.

![Commit detail](images/commits-detail.png)

The next sections describe each area of the commit detail page.

## Commit information {: id="info"}

This area displays detailed information about the commit:

-   Commit message
-   Committer, SHA hash, and parent commits
-   Date
-   Link to the commit on your Git provider

![Commit information](images/commits-detail-information.png)

<!--coverage-overview-start-->
## {{ page.meta.page_name.capitalize() }} coverage overview {: id="coverage-overview"}

This area displays the coverage gate status and an overview of the coverage metrics for the {{ page.meta.page_name }}:

-   The quality gate status is either **Up to coverage standards** or **Not up to coverage standards** depending on the [coverage gate rules](../repositories-configure/adjusting-quality-gates.md) for your repository.

    If you don't have any rules enabled for {{ page.meta.page_name }}s, the status is always **Up to coverage standards**.

-   The following coverage metrics for the {{ page.meta.page_name }}, displayed either as a **positive or negative variation**, {% if page.meta.page_name == "commit" %}or **no variation** (represented by `=`){% else %}**no variation** (represented by `=`), or **not applicable** (represented by `∅`){% endif %}:

{% if page.meta.page_name == "commit" %}
    -   **Coverage variation:** Variation of code coverage percentage relative to the parent commit
    -   **Total coverage:** Coverage value of the repository at this commit
{% else %}
    -   **Diff coverage:** Code coverage of the coverable lines added or changed by the pull request, or `∅` (not applicable) if there aren't any coverable lines added or changed
    -   **Coverage variation:** Variation of code coverage percentage relative to the target branch of the pull request
{% endif %}

    !!! note
        Learn how Codacy calculates the code quality metrics in more detail:

        -   [Which coverage metrics does Codacy calculate?](../faq/code-analysis/which-metrics-does-codacy-calculate.md#code-coverage)
        -   [Why does Codacy show unexpected coverage changes?](../faq/code-analysis/why-does-codacy-show-unexpected-coverage-changes.md)

-   The **colors** depend on the [coverage gate rules](../repositories-configure/adjusting-quality-gates.md) for your repository:

    -   **Green:** The metric passes the coverage gate
    -   **Red:** The metric fails the coverage gate
    -   **Gray:** There aren't coverage gate rules configured for the metric or the value doesn't impact the coverage gate

<!-- vale off -->
![{{ page.meta.page_name.capitalize() }} quality overview](images/{{ page.meta.file_name }}-detail-coverage-overview.png)
<!-- vale on -->
<!--coverage-overview-end-->

<!--tab-files-start-->
## Files tab

The **Files** tab displays the coverage variation that the {{ page.meta.page_name }} introduces to the files in your repository relative to the {% if page.meta.page_name == "commit" %}parent commit{% else %}target branch{% endif %}, displayed either as a **positive or negative variation**, or **no variation** (represented by `=`):

The option **Show also files without coverage changes** allows you to list all files that the {{ page.meta.page_name }} updates, even if their coverage doesn't change.

<!-- vale off -->
![Files tab](images/{{ page.meta.file_name }}-tab-files.png)
<!-- vale on -->
<!--tab-files-end-->

<!--tab-diff-start-->
## Diff tab

The **Diff** tab displays a line-by-line view of the coverage variation introduced by the {{ page.meta.page_name }}. It includes the following areas:

-   A **list of files** modified by the {{ page.meta.page_name }}, with additional information for each file:

    -   A **green plus icon** if the file is added or a **yellow dot icon** if it's modified by the {{ page.meta.page_name }}
    -   The **coverage variation** introduced by the {{ page.meta.page_name }} (green or red value) or the **total file coverage** if there's no variation (grey value)

-   A **diff viewer** showing for each modified file the diff coverage and a comparison of the old and new file content. The background of any added or modified lines depends on their coverage status:

    -   **Red**: Uncovered line
    -   **Green**: Covered line, labeled with its test coverage count
    -   **No background**: Non-coverable line

<!-- vale off -->
![Files tab](images/{{ page.meta.file_name }}-tab-diff.png)
<!-- vale on -->
<!--tab-diff-end-->
