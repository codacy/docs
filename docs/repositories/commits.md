---
page_name: "commit"
file_name: "commits"
---

# Commits page

The **Commits page** displays an overview of the commits in your repository, such as the analysis status and the number of new and fixed issues for each commit. This allows you to monitor the evolution of the code quality in your repository per commit.

By default, the page lists the commits on the main branch of your repository but if you have [more than one branch enabled](../repositories-configure/managing-branches.md) you can use the drop-down list at the top of the page to display issues on other branches.

![Commits page](images/commits.png)<!--TODO Review screenshot, highlight branch selector-->

Click a specific commit to see detailed information about the code quality changes introduced by that commit.

![Commit detail](images/commits-detail.png)<!--TODO Replace screenshot to use one of the commits from the list above-->

The next sections describe each area of the commit detail page.

## Commit status

This area displays the information that identifies the commit (SHA hash, date, and commit message), as well as:

-   The analysis status and a button to re-analyze the commit
-   A link to the analysis logs
-   A link to the commit on your Git provider

![Commit status](images/commits-detail-status.png)<!--TODO Replace screenshot with crop from screenshot above-->

<!--quality-overview-start-->
## {{ page.meta.page_name.capitalize() }} quality overview

This area displays the overview of the code quality metrics for the {{ page.meta.page_name }}:

-   The changes to the following code quality metrics introduced by the {{ page.meta.page_name }} are displayed either as a **positive or negative variation**, or **no variation** (represented by `=`):

    -   **Issues:** Number of new or fixed issues
    -   **Duplication:** Number of new or fixed duplicated code blocks
    -   **Complexity:** Variation of complexity
{% if page.meta.page_name == "commit" %}
    -   **Coverage:** Variation of code coverage percentage relative to the parent commit
{% endif %}
{% if page.meta.page_name == "pull request" %}
    -   **Coverage variation:** Variation of code coverage relative to the target branch
    -   **Diff coverage:** Code coverage of the lines added or changed by the pull request
{% endif %}

    Depending on the languages being analyzed or if you haven't [set up coverage for your repository](../coverage-reporter/index.md), some metrics **may not be calculated** (represented by `-`).

-   The **colors** depend on the [quality gate rules](../repositories-configure/adjusting-quality-settings.md) that are configured on your repository quality settings:

    -   **Green:** The metric passes the quality gate
    -   **Red:** The metric fails the quality gate
    -   **Gray:** There aren't quality gate rules configured for the metric

    !!! notes
        If you make change the quality gate rules you must reanalyze the {{ page.meta.page_name }} to update the color of the **Issues**, while the color of the remaining metrics update as soon as you save the quality gate rules.

![{{ page.meta.page_name.capitalize() }} quality overview](images/{{ page.meta.file_name }}-detail-quality-overview.png)<!--TODO Replace screenshot with crop from screenshot above-->
<!--quality-overview-end-->

<!--tabs-start-->
## Issues tabs

The **New Issues** and **Fixed Issues** tabs display the list of issues that the commit created or fixed.

{%
    include-markdown "issues.md"
    start="<!--issue-detail-start-->"
    end="<!--issue-detail-end-->"
%}

Use the options in the cogwheel menu of each issue to [ignore and manage issues](issues.md#ignoring-and-managing-issues).

![New Issues and Fixed Issues tabs](images/{{ page.meta.file_name }}-tab-issues.png)<!--TODO Review screenshot, include expanded issue view and highlight cogwheel-->

### Possible issues

In some situations, Codacy may report either new or fixed **possible** issues on a {{ page.meta.page_name }}, which means that the code analysis detected these issues in lines of code that weren't changed by that {{ page.meta.page_name }}. This gives you awareness to how your changes may be affecting other parts of your code.

The following are example situations that can lead to possible issues:

-   The issue was either created or fixed in the current {{ page.meta.page_name }}, but the static code analysis tools reported the issue on a line that didn't change in the {{ page.meta.page_name }}. For example, if you remove the line containing the declaration of a variable you may get an "undeclared variable" issue in other lines that use that variable.

-   If a file had [more than 50 issues reported by the same tool](../faq/code-analysis/does-codacy-place-limits-on-the-code-analysis.md) and you push a new commit that fixes some of these issues, Codacy will report more issues until the limit of 50 issues. These issues will be possible issues if they're outside the lines of code changed in the new commit.

!!! note
    **If you're using GitHub** you may see [annotations](../repositories-configure/integrations/github-integration.md#annotations)  for possible issues reported under **Unchanged files with check annotations** on the **Files changed** tab of your pull requests.

    This happens when Codacy reports possible issues in files that weren't changed in your pull request. [Read more about this GitHub feature](https://developer.github.com/changes/2019-09-06-more-check-annotations-shown-in-files-changed-tab/){: target="_blank"}.

## Duplication tabs

The **New Duplication** and **Fixed Duplication** tabs display the list of duplicated blocks that the {{ page.meta.page_name }} created or fixed.

![New Duplication and Fixed Duplication tabs](images/{{ page.meta.file_name }}-tab-duplication.png)<!--TODO Review screenshot, specific screenshot for pull requests-->

## Files tab

The **Files** tab displays an overview of the code quality changes introduced by each file that was changed in the {{ page.meta.page_name }}.

![Files tab](images/{{ page.meta.file_name }}-tab-files.png)<!--TODO Review screenshot-->

## Diff tab

The **Diff** tab displays the line differences in each file that was changed in the {{ page.meta.page_name }}.

![Diff tab](images/{{ page.meta.file_name }}-tab-diff.png)<!--TODO Review screenshot-->
<!--tabs-end-->
