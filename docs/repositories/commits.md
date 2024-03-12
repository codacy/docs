---
page_name: "commit"
file_name: "commits"
---

# Quality Commits page

The **Quality Commits page** displays an overview of the commits in your repository, such as the analysis status and the code quality metrics for each commit. This allows you to monitor the evolution of the code quality per commit in your repository.

By default, the page lists the commits on the main branch of your repository, but if you have [more than one branch enabled](../repositories-configure/managing-branches.md) you can use the drop-down list at the top of the page to display commits on other branches.

![Commits page](images/commits.png)

Click a specific commit to see detailed information about the code quality changes introduced by that commit.

![Commit detail](images/commits-detail.png)

The next sections describe each area of the commit detail page.

## Commit status {: id="status"}

![Commit status](images/commits-detail-status.png)

This area displays the information that identifies the commit (commit message, committer, SHA hash, and last updated date), as well as:

-   A link to the commit on your Git provider
-   A [link to reanalyze the commit](../faq/repositories/how-do-i-reanalyze-my-repository.md), enabled when the committer [is part of your organization](../organizations/managing-people.md)
-   A link to the analysis logs

<!--quality-overview-start-->
## {{ page.meta.page_name.capitalize() }} quality overview {: id="quality-overview"}

<!-- vale off -->
![{{ page.meta.page_name.capitalize() }} quality overview](images/{{ page.meta.file_name }}-detail-quality-overview.png)
<!-- vale on -->

This area displays the quality gate status for the {{ page.meta.page_name }} and the code quality metrics [with a gate set up](../repositories-configure/adjusting-quality-gates.md):

-   The quality gate status is either **Up to quality standards** or **Not up to quality standards** depending on the [quality gate rules](../repositories-configure/adjusting-quality-gates.md) for your repository.

    If there are no gate rules enabled for {{ page.meta.page_name }}s, the status is always **Up to quality standards**.

-   The variation introduced by the {{ page.meta.page_name }} is displayed either as a **positive or negative variation**, {% if page.meta.page_name == "commit" %}or **no variation** (represented by `=`){% else %}**no variation** (represented by `=`), or **not applicable** (represented by `∅`){% endif %} for code quality metrics [with a gate set up](../repositories-configure/adjusting-quality-gates.md):

    -   **Issues:** Number of new issues
    -   **Duplication:** Changes in the number of duplicated code blocks
    -   **Complexity:** Changes in code complexity<!-- TODO ALA-643 Is this still visible on the commit view? -->
{% if page.meta.page_name == "commit" %}
    -   **Coverage variation:** Changes in code coverage percentage compared with the parent commit
{% else %}
    -   **Diff coverage:** Code coverage of the coverable lines affected by the pull request, or `∅` (not applicable) if there are no coverable lines
    -   **Coverage variation:** Changes in code coverage percentage compared with the target branch
{% endif %}

    Depending on the languages being analyzed or if you haven't [set up coverage for your repository](../coverage-reporter/index.md), some metrics **may not be calculated** (represented by `-`).

    !!! note
        Learn how Codacy calculates the code quality metrics in more detail:

        -   [Which code quality metrics does Codacy calculate?](../faq/code-analysis/which-metrics-does-codacy-calculate.md)
        -   [Why does Codacy show unexpected coverage changes?](../faq/code-analysis/why-does-codacy-show-unexpected-coverage-changes.md)

-   The **colors** depend on the [quality gate rules](../repositories-configure/adjusting-quality-gates.md) for your repository:

    -   **Green:** The metric passes the quality gate
    -   **Red:** The metric fails the quality gate
    -   **Gray:** Coverage data is missing<!-- TODO ALA-643 Confirm this only applies to coverage -->

    !!! note
        If you change the quality gate rules you must reanalyze the {{ page.meta.page_name }} to update the color of the metrics, except for coverage which updates immediately after you save your changes on the Quality Settings page.<!-- TODO ALA-643 Confirm this is still correct -->
<!--quality-overview-end-->

<!--tabs-start-->
## Issues tab {: id="issues-tabs"}

The **Issues** tab displays the lists of issues that the {{ page.meta.page_name }} creates or fixes. Use the sidebar filters to filter the list by new issues (including issues of specific severity or category), issues within a specific file, fixed issues, [potential new issues, or potential fixed issues](#possible-issues).

{%
    include-markdown "./issues.md"
    start="<!--issue-details-start-->"
    end="<!--issue-details-end-->"
%}

To [ignore or manage an issue](issues.md#ignoring-and-managing-issues), click the associated options in the menu.

![Issues tab](images/{{ page.meta.file_name }}-tab-issues.png)

### Potential issues {: id="possible-issues"}

Codacy may label some issues as **potential**, which means that the code analysis detected these issues in lines of code that weren't changed by the analyzed {{ page.meta.page_name }}. This highlights potential consequences in other parts of your codebase.

The following are example situations that can lead to potential issues:

-   The issue was either created or fixed in the current {{ page.meta.page_name }}, but the static code analysis tools reported the issue on a line that didn't change in the {{ page.meta.page_name }}. For example, if you remove the line containing the declaration of a variable you may get an "undeclared variable" issue in other lines that use that variable.

-   If a file had [more than 50 issues reported by the same tool](../faq/code-analysis/does-codacy-place-limits-on-the-code-analysis.md) and you push a new commit that fixes some of these issues, Codacy will report more issues until the limit of 50 issues. These issues will be potential issues if they're outside the lines of code changed in the new commit.

!!! note
    **If you're using GitHub** you may see [annotations](../repositories-configure/integrations/github-integration.md#issue-annotations) for potential issues reported under **Unchanged files with check annotations** on the **Files changed** tab of your pull requests.

    This happens when Codacy reports potential issues in files that weren't changed in your pull request. [Read more about this GitHub feature](https://developer.github.com/changes/2019-09-06-more-check-annotations-shown-in-files-changed-tab/).

## Duplication tab {: id="duplication-tabs"}

The **Duplication** tab displays the lists of clones (duplicated code blocks) that the {{ page.meta.page_name }} adds or fixes. You can click a clone to expand it and inspect the code.

![Duplication tabs](./images/{{ page.meta.file_name }}-tab-duplication.png)

## Complexity tab

The **Complexity** tab displays the complexity changes introduced by the {{ page.meta.page_name }}. Use the sidebar filters to filter the list by high increase, low increase, or improvement.

![Complexity tab](./images/{{ page.meta.file_name }}-tab-complexity.png)

<!-- TODO ALA-643 Confirm there's no coverage tab on commits -->
{% if page.meta.page_name == "pull request" %}
{%
    include-markdown "../repositories-coverage/commits.md"
    start="<!--tab-diff-start-->"
    end="<!--tab-diff-end-->"
%}
{% endif %}

## Diff tab

The **Diff** tab displays the code changes and issues introduced by the {{ page.meta.page_name }}. It includes the following areas:

-   A **list of files** modified by the {{ page.meta.page_name }}, with additional information for each file:

    -   A **green plus icon** if the file is added or a **yellow dot icon** if it's modified by the {{ page.meta.page_name }}
    -   The **number of new issues** introduced by the {{ page.meta.page_name }}

-   A **diff viewer** showing for each modified file the diff coverage and a comparison of the old and new file content. 

    Lines with issues are highlighted according to issue severity and include a pill label with the issue type and count. Hover over the pill label to view more details or navigate to the issues.

<!-- vale off -->
![Diff tab](images/{{ page.meta.file_name }}-tab-diff.png)
<!-- vale on -->

## Files tab

The **Files** tab displays the variation of the following [code quality metrics](../faq/code-analysis/which-metrics-does-codacy-calculate.md) that the {{ page.meta.page_name }} introduces to the files in your repository, displayed either as a **positive or negative variation**, or **no variation** (represented by `=`):

-   **New issues:** Number of new issues
-   **Duplication:** Changes in the number of duplicated code blocks
-   **Complexity:** Changes in code complexity
-   **Coverage variation:** Changes in code coverage percentage compared with the {% if page.meta.page_name == "commit" %}parent commit{% else %}target branch{% endif %}

Depending on the languages being analyzed or if you haven't [set up coverage for your repository](../coverage-reporter/index.md), some metrics **may not be calculated** (represented by `-`).

<!-- vale off -->
![Files tab](images/{{ page.meta.file_name }}-tab-files.png)
<!-- vale on -->
<!--tabs-end-->

## See also

-   [Which metrics does Codacy calculate?](../faq/code-analysis/which-metrics-does-codacy-calculate.md)
