---
page_name: commit
file_name: commits
product: coverage
---

# [Coverage] Commits page

The **Commits page** displays an overview of the commits in your repository, such as the analysis status and coverage for each commit. This allows you to monitor the evolution of coverage in your repository per commit.

By default, the page lists the commits on the main branch of your repository but if you have [more than one branch enabled](../../repositories-configure/managing-branches.md) you can use the drop-down list at the top of the page to display issues on other branches.

![Commits page](images/commits.png)<!--TODO Update-->

Click a specific commit to see detailed information about the code quality changes introduced by that commit.

![Commit detail](images/commits-detail.png)

The next sections describe each area of the commit detail page.

## Commit information {: id="info"}

This area displays the information that identifies the commit:

-   Commit message
-   Committer, SHA hash, and parent commit(s)
-   Date
-   Link to the commit on your Git provider

![Commit status](images/commits-detail-status.png)<!--TODO Update-->

<!--coverage-overview-start-->
## {{ page.meta.page_name.capitalize() }} coverage overview {: id="quality-overview"}
<!--TODO
    Review the entire section, see https://codacy.atlassian.net/browse/COV-122 for extra details to cover here-->

This area displays the coverage gate status and an overview of the coverage metrics for the {{ page.meta.page_name }}:

-   The quality gate status is either **Not up to coverage standards** or **Up to coverage standards** depending on the [coverage gate rules](../../repositories-configure/adjusting-quality-settings.md) for your repository.

    If you don't have any rules enabled for {{ page.meta.page_name }}s, the status is always **Up to coverage standards**.

-   The following coverage metrics for the {{ page.meta.page_name }}, displayed either as a **positive or negative variation**, {% if page.meta.page_name == "commit" %}or **no variation** (represented by `=`){% else %}**no variation** (represented by `=`), or **not applicable** (represented by `∅`){% endif %}:

{% if page.meta.page_name == "commit" %}
    -   **Coverage:** Variation of code coverage percentage relative to the parent commit
{% else %}
    -   **Coverage variation:** Variation of code coverage percentage relative to the target branch
    -   **Diff coverage:** Code coverage of the coverable lines added or changed by the pull request, or `∅` (not applicable) if there aren't any coverable lines added or changed
{% endif %}

    !!! note
        Learn how Codacy calculates the code quality metrics in more detail:

        -   [Which coverage metrics does Codacy calculate?](../../faq/code-analysis/which-metrics-does-codacy-calculate.md#coverage)
        -   [Why does Codacy show unexpected coverage changes?](../../faq/code-analysis/why-does-codacy-show-unexpected-coverage-changes.md)

-   The **colors** depend on the [quality gate rules](../../repositories-configure/adjusting-quality-settings.md) for your repository:

    -   **Green:** The metric passes the quality gate
    -   **Red:** The metric fails the quality gate
    -   **Gray:** There aren't quality gate rules configured for the metric or the value doesn't impact the quality gate

<!-- vale off -->
![{{ page.meta.page_name.capitalize() }} quality overview](images/{{ page.meta.file_name }}-detail-coverage-overview.png)<!--TODO Update-->
<!-- vale on -->
<!--coverage-overview-end-->

<!--tabs-start-->
## Files tab

The **Files** tab displays the coverage variation that the {{ page.meta.page_name }} introduced to the files in your repository relative to the {% if page.meta.page_name == "commit" %}parent commit{% else %}target branch{% endif %}, displayed either as a **positive or negative variation**, or **no variation** (represented by `=`):

The option **Show also files without coverage changes** allows you to list all files that the {{ page.meta.page_name }} updated, even if their coverage didn't change.

<!-- vale off -->
![Files tab](images/{{ page.meta.file_name }}-tab-files.png)<!--TODO Update-->
<!-- vale on -->
<!--tabs-end-->
