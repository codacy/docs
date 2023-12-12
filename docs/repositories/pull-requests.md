---
page_name: "pull request"
file_name: "pull-requests"
---

# Quality Pull Requests page

The **Quality Pull Requests page** displays an overview of the pull requests in your repository, such as the analysis status and the code quality metrics for each pull request. This allows you to monitor the code quality of the work in progress in your repository.

By default, the page lists open pull requests but you can click the **Closed** tab at the top of the list to display the closed pull requests.

![Pull Requests page](images/pull-requests.png)

Click a specific pull request to see detailed information about the code quality changes introduced by that pull request.

![Pull request detail](images/pull-requests-detail.png)<!-- TODO ALA-643 Screenshot -->

The next sections describe each area of the pull request detail page.

## Pull request status {: id="status"}
<!-- TODO ALA-643 Review section -->

This area displays the information that identifies the pull request (head and base branches, date, and name), as well as:

-   The analysis status and a [button to reanalyze the last commit on the pull request branch](../faq/repositories/how-do-i-reanalyze-my-repository.md) (enabled when the committer [is part of your organization](../organizations/managing-people.md))
-   A link to the analysis logs
-   A link to the pull request on your Git provider

![Pull request status](images/pull-requests-detail-status.png)<!-- TODO ALA-643 Screenshot -->

{%
    include-markdown "./commits.md"
    start="<!--quality-overview-start-->"
    end="<!--quality-overview-end-->"
%}

## Issues tabs
<!-- TODO ALA-643 Review section -->

The **New Issues** and **Fixed Issues** tabs display the list of issues that the commit created or fixed.

Click the title of an issue to see the following information:

-   The committer and date of the commit that introduced the issue
-   The [tool that reported the issue](../getting-started/supported-languages-and-tools.md) and the estimated time to fix it
-   What's the issue and how to solve it
-   The programming language and category of the issue

Use the options in the cogwheel menu of each issue to [ignore and manage issues](issues.md#ignoring-and-managing-issues).

![New Issues and Fixed Issues tabs](./images/{{ page.meta.file_name }}-tab-issues.png)<!-- TODO ALA-643 Screenshot -->

### Possible issues
<!-- TODO ALA-643 Review section -->

In some situations, Codacy may report either new or fixed **possible** issues on a {{ page.meta.page_name }}, which means that the code analysis detected these issues in lines of code that weren't changed by that {{ page.meta.page_name }}. This gives you awareness to how your changes may be affecting other parts of your code.

The following are example situations that can lead to possible issues:

-   The issue was either created or fixed in the current {{ page.meta.page_name }}, but the static code analysis tools reported the issue on a line that didn't change in the {{ page.meta.page_name }}. For example, if you remove the line containing the declaration of a variable you may get an "undeclared variable" issue in other lines that use that variable.

-   If a file had [more than 50 issues reported by the same tool](../faq/code-analysis/does-codacy-place-limits-on-the-code-analysis.md) and you push a new commit that fixes some of these issues, Codacy will report more issues until the limit of 50 issues. These issues will be possible issues if they're outside the lines of code changed in the new commit.

!!! note
    **If you're using GitHub** you may see [annotations](../repositories-configure/integrations/github-integration.md#issue-annotations)  for possible issues reported under **Unchanged files with check annotations** on the **Files changed** tab of your pull requests.

    This happens when Codacy reports possible issues in files that weren't changed in your pull request. [Read more about this GitHub feature](https://developer.github.com/changes/2019-09-06-more-check-annotations-shown-in-files-changed-tab/).

## Duplication tabs
<!-- TODO ALA-643 Review section -->

The **New Duplication** and **Fixed Duplication** tabs display the list of duplicated blocks that the {{ page.meta.page_name }} created or fixed.

![New Duplication and Fixed Duplication tabs](./images/{{ page.meta.file_name }}-tab-duplication.png)<!-- TODO ALA-643 Screenshot -->

## Complexity tab
<!-- TODO ALA-643 Draft section -->

![New Issues and Fixed Issues tabs](./images/{{ page.meta.file_name }}-tab-complexity.png)<!-- TODO ALA-643 Screenshot -->

## Coverage tab
<!-- TODO ALA-643 Draft section -->

![New Issues and Fixed Issues tabs](./images/{{ page.meta.file_name }}-tab-coverage.png)<!-- TODO ALA-643 Screenshot -->

## Diff tab
<!-- TODO ALA-643 Review section -->

The **Diff** tab displays the differences in each file that was changed in the {{ page.meta.page_name }}. The background of the changed lines depends on the change:

-   **Red**: Deleted line
-   **Yellow**: Old version of a changed line with deleted characters highlighted in red
-   **Green**: New version of a changed line with added characters highlighted in bright green
-   **Bright green**: New line

<!-- vale off -->
![Diff tab](./images/{{ page.meta.file_name }}-tab-diff.png)<!-- TODO ALA-643 Screenshot -->
<!-- vale on -->

## Files tab
<!-- TODO ALA-643 Review section -->

The **Files** tab displays the variation of the following [code quality metrics](../faq/code-analysis/which-metrics-does-codacy-calculate.md) that the {{ page.meta.page_name }} introduces to the files in your repository, displayed either as a **positive or negative variation**, or **no variation** (represented by `=`):

-   **Issues:** Number of new or fixed issues
-   **Duplication:** Variation of the number of duplicated code blocks
-   **Complexity:** Variation of complexity
-   **Coverage variation:** Variation of code coverage percentage relative to the {% if page.meta.page_name == "commit" %}parent commit{% else %}target branch{% endif %}

Depending on the languages being analyzed or if you haven't [set up coverage for your repository](../coverage-reporter/index.md), some metrics **may not be calculated** (represented by `-`).

The option **Show files without code quality changes** allows you to list all files that the {{ page.meta.page_name }} updates, even if their code quality metrics don't change.

<!-- vale off -->
![Files tab](./images/{{ page.meta.file_name }}-tab-files.png)<!-- TODO ALA-643 Screenshot -->
<!-- vale on -->

## Commits tab
<!-- TODO ALA-643 Review section -->

The **Commits** tab displays an overview of each commit included in the pull request, such as the analysis status and the number of new and fixed issues for each commit.

Click a specific commit to see [detailed information about that commit](commits.md#status).

![Commits tab](images/pull-requests-tab-commits.png)<!-- TODO ALA-643 Screenshot -->

## See also

-   [Which metrics does Codacy calculate?](../faq/code-analysis/which-metrics-does-codacy-calculate.md)
