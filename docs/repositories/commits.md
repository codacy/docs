---
page_name: "commit"
file_name: "commits"
---

# Quality Commits page

The **Quality Commits page** displays an overview of the commits in your repository, such as the analysis status and the code quality metrics for each commit. This allows you to monitor the evolution of the code quality in your repository per commit.

By default, the page lists the commits on the main branch of your repository, but if you have [more than one branch enabled](../repositories-configure/managing-branches.md) you can use the drop-down list at the top of the page to display commits on other branches.

![Commits page](images/commits.png)

Click a specific commit to see detailed information about the code quality changes introduced by that commit.

![Commit detail](images/commits-detail.png)<!-- TODO ALA-643 Screenshot -->

The next sections describe each area of the commit detail page.

## Commit status {: id="status"}

![Commit status](images/commits-detail-status.png)<!-- TODO ALA-643 Screenshot -->

This area displays the information that identifies the commit (commit message, committer, SHA hash, and date), as well as:

-   The analysis status<!-- TODO ALA-643 Confirm -->
-   A link to the commit on your Git provider
-   A [button to reanalyze the commit](../faq/repositories/how-do-i-reanalyze-my-repository.md), enabled when the committer [is part of your organization](../organizations/managing-people.md)
-   A link to the analysis logs

<!--quality-overview-start-->
## {{ page.meta.page_name.capitalize() }} analysis status and quality overview {: id="quality-overview"}

<!-- TODO ALA-643 We'll only show dta if there's a gate set -->

<!-- vale off -->
![{{ page.meta.page_name.capitalize() }} quality overview](images/{{ page.meta.file_name }}-detail-quality-overview.png)
<!-- vale on -->

When an analysis is running, this area displays a detailed analysis status, analysis times, and a link to inspect the logs.<!-- TODO ALA-643 Confirm -->

After an analysis completes, this area displays the code quality metrics and gate status for the {{ page.meta.page_name }}:

-   The analysis status is either **Up to quality standards** or **Not up to quality standards** depending on the [quality gate rules](../repositories-configure/adjusting-quality-gates.md) for your repository.

    If you don't have any rules enabled for {{ page.meta.page_name }}s, the status is always **Up to quality standards**.

-   The variation of the following code quality metrics introduced by the {{ page.meta.page_name }} is displayed either as a **positive or negative variation**, {% if page.meta.page_name == "commit" %}or **no variation** (represented by `=`){% else %}**no variation** (represented by `=`), or **not applicable** (represented by `∅`){% endif %}:

    -   **Issues:** Number of new or fixed issues
{% if page.meta.page_name == "commit" %}
    -   **Duplication:** Variation of the number of duplicated code blocks
    -   **Complexity:** Variation of complexity
    -   **Coverage:** Variation of code coverage percentage relative to the parent commit
{% else %}
    -   **Security issues:** Number of new or fixed security issues
    -   **Coverage variation:** Variation of code coverage percentage relative to the target branch
    -   **Diff coverage:** Code coverage of the coverable lines added or changed by the pull request, or `∅` (not applicable) if there aren't any coverable lines added or changed
{% endif %}

    Depending on the languages being analyzed or if you haven't [set up coverage for your repository](../coverage-reporter/index.md), some metrics **may not be calculated** (represented by `-`).

    !!! note
        Learn how Codacy calculates the code quality metrics in more detail:

        -   [Which code quality metrics does Codacy calculate?](../faq/code-analysis/which-metrics-does-codacy-calculate.md)
        -   [Why does Codacy show unexpected coverage changes?](../faq/code-analysis/why-does-codacy-show-unexpected-coverage-changes.md)

-   The **colors** depend on the [quality gate rules](../repositories-configure/adjusting-quality-gates.md) for your repository:

    -   **Green:** The metric passes the quality gate
    -   **Red:** The metric fails the quality gate
    -   **Gray:** There aren't quality gate rules configured for the metric or the value doesn't impact the quality gate

    !!! note
        If you change the quality gate rules you must reanalyze the {{ page.meta.page_name }} to update the color of the metrics, except for coverage which updates immediately after you save your changes on the Quality Settings page.
<!--quality-overview-end-->

<!--tabs-start-->
## Issues tab {: id="issues-tabs"}

The **Issues** tab displays the lists of issues that the {{ page.meta.page_name }} creates or fixes.

<!-- TODO ALA-643 Document filters: new issues, fixed issues, potentially fixed issues, severity, category, file -->

{%
    include-markdown "./issues.md"
    start="<!--issue-details-start-->"
    end="<!--issue-details-end-->"
%}

To [ignore or manage an issue](issues.md#ignoring-and-managing-issues), click the associated options menu.

![Issues tab](images/{{ page.meta.file_name }}-tab-issues.png)

### Possible issues

In some situations, Codacy may report either new or fixed **possible** issues on a {{ page.meta.page_name }}, which means that the code analysis detected these issues in lines of code that weren't changed by that {{ page.meta.page_name }}. This gives you awareness to how your changes may be affecting other parts of your code.

The following are example situations that can lead to possible issues:

-   The issue was either created or fixed in the current {{ page.meta.page_name }}, but the static code analysis tools reported the issue on a line that didn't change in the {{ page.meta.page_name }}. For example, if you remove the line containing the declaration of a variable you may get an "undeclared variable" issue in other lines that use that variable.

-   If a file had [more than 50 issues reported by the same tool](../faq/code-analysis/does-codacy-place-limits-on-the-code-analysis.md) and you push a new commit that fixes some of these issues, Codacy will report more issues until the limit of 50 issues. These issues will be possible issues if they're outside the lines of code changed in the new commit.

!!! note
    **If you're using GitHub** you may see [annotations](../repositories-configure/integrations/github-integration.md#issue-annotations)  for possible issues reported under **Unchanged files with check annotations** on the **Files changed** tab of your pull requests.

    This happens when Codacy reports possible issues in files that weren't changed in your pull request. [Read more about this GitHub feature](https://developer.github.com/changes/2019-09-06-more-check-annotations-shown-in-files-changed-tab/).

## Duplication tab {: id="duplication-tabs"}

The **Duplication** tab displays the lists of duplicated blocks that the {{ page.meta.page_name }} creates or fixes.

![New Duplication and Fixed Duplication tabs](./images/{{ page.meta.file_name }}-tab-duplication.png)<!-- TODO ALA-643 Screenshot -->

## Complexity tab
<!-- TODO ALA-643 Review section -->

The **Complexity** tab displays the complexity changes introduced by the {{ page.meta.page_name }}.

<!-- TODO ALA-643 Document filters: increase level, decrease -->

![Complexity tab](./images/{{ page.meta.file_name }}-tab-complexity.png)<!-- TODO ALA-643 Screenshot -->

## Coverage tab
<!-- TODO ALA-643 Draft section -->

![Coverage tab](./images/{{ page.meta.file_name }}-tab-coverage.png)<!-- TODO ALA-643 Screenshot -->

<!-- TODO ALA-643 Confirm tab colors are kept -->
## Diff tab

The **Diff** tab displays the differences in each file that was changed in the {{ page.meta.page_name }}. The background of the changed lines depends on the change:

-   **Red**: Deleted line
-   **Yellow**: Old version of a changed line with deleted characters highlighted in red
-   **Green**: New version of a changed line with added characters highlighted in bright green
-   **Bright green**: New line

<!-- vale off -->
![Diff tab](images/{{ page.meta.file_name }}-tab-diff.png)
<!-- vale on -->

## Files tab

The **Files** tab displays the variation of the following [code quality metrics](../faq/code-analysis/which-metrics-does-codacy-calculate.md) that the {{ page.meta.page_name }} introduces to the files in your repository, displayed either as a **positive or negative variation**, or **no variation** (represented by `=`):

-   **Issues:** Number of new or fixed issues
-   **Duplication:** Variation of the number of duplicated code blocks
-   **Complexity:** Variation of complexity
-   **Coverage variation:** Variation of code coverage percentage relative to the {% if page.meta.page_name == "commit" %}parent commit{% else %}target branch{% endif %}

Depending on the languages being analyzed or if you haven't [set up coverage for your repository](../coverage-reporter/index.md), some metrics **may not be calculated** (represented by `-`).

<!-- vale off -->
![Files tab](images/{{ page.meta.file_name }}-tab-files.png)
<!-- vale on -->
<!--tabs-end-->

## See also

-   [Which metrics does Codacy calculate?](../faq/code-analysis/which-metrics-does-codacy-calculate.md)
