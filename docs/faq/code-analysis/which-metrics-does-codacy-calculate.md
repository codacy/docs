---
description: Codacy scans your code for issues and calculates code complexity, duplication, and coverage metrics. Besides this, Codacy also calculates a grade for your repository and files based on all calculated code quality metrics.
---

# Which metrics does Codacy calculate?

Codacy performs static code analysis and calculates code duplication, code complexity, and code coverage metrics for [most supported programming languages](../../getting-started/supported-languages-and-tools.md).

The following sections describe how Codacy calculates each supported metric and where you can see each metric on the Codacy UI:

-   [Grade](#grade)
-   [Issues](#issues)
-   [Complexity](#complexity)
-   [Duplication](#duplication)
-   [Code coverage](#code-coverage)

!!! note
    Depending on certain characteristics of your repository, such as the number of source code files and their size, Codacy may [apply limits to the code analysis](does-codacy-place-limits-on-the-code-analysis.md) that impact the calculation of the supported metrics.

## Grade

Codacy assigns an overall grade to your repository branches and to individual files to help you assess the code quality of your repository. Grades represent a weighted average of the available code quality metrics (issues, complexity, duplication, and coverage), and range from **A** to **F**:

<table>
  <tr>
    <td>Highest grade</td>
    <td><img src="../images/grade_a.png" alt="Grade A"></td>
    <td><img src="../images/grade_b.png" alt="Grade B"></td>
    <td><img src="../images/grade_c.png" alt="Grade C"></td>
    <td><img src="../images/grade_d.png" alt="Grade D"></td>
    <td><img src="../images/grade_e.png" alt="Grade E"></td>
    <td><img src="../images/grade_f.png" alt="Grade F"></td>
    <td>Lowest grade</td>
  </tr>
</table>

Codacy displays grades on the following places:

|Place|Metric|
|-----|------|
|[Files page](../../repositories/files.md)|Grade for each file in your repository|
|[Repository Dashboard](../../repositories/repository-dashboard.md)<br/>[Branches page](../../repositories-configure/managing-branches.md)<br/>[Codacy badge](../../getting-started/adding-a-codacy-badge.md)|Grade of each analyzed branch in your repository|
|[Email notifications](../../account/emails.md#managing-your-email-notifications)|Grade of your repository|
|[Organization Overview](../../organizations/organization-overview.md)|Average grade of the repositories in your organization and grade of each repository|
|[Repositories list](../../organizations/managing-repositories.md)|Grade of each repository in your organization|

## Issues

Codacy calculates the number of issues in the following static code analysis categories:

<!--issue-categories-start-->
-   **Code Style:** Code formatting and syntax problems, such as variable names style and enforcing the use of brackets and quotation marks
-   **Error Prone:** Code that may hide bugs and language keywords that should be used with caution, such as the operator `==` in JavaScript or `Option.get` in Scala
-   **Code Complexity:** High complexity methods and classes that should be refactored
-   **Performance:** Code that can have performance problems
-   **Compatibility:** Mainly for frontend code, compatibility problems across different browser versions
-   **Unused Code:** Unused variables and methods, code that can't be reached
-   **Security:** All security problems
-   **Documentation:** Methods and classes that don't have the correct comment annotations
<!--issue-categories-end-->

Besides this, Codacy also allows you to compare issues across repositories with different sizes by calculating the **percentage of issues relative to an expected baseline** of 100 issues with an average cost of 10 per 1000 lines of code, where the cost of each issue depends on its severity: Critical = 10, Medium = 5, Minor = 1.

Codacy displays issues on the following places:

|Place|Metric|
|-----|------|
|[Commit page](../../repositories/commits.md)<br/>[Pull request page](../../repositories/pull-requests.md)<br/>[Email notifications](../../account/emails.md#managing-your-email-notifications)|Number of new and fixed issues introduced by the commit or pull request|
|[Files page](../../repositories/files.md)|Number of issues in each file|
|[Issues page](../../repositories/issues.md)|List of all issues detected in each branch|
|[Repository Dashboard](../../repositories/repository-dashboard.md)|Issue percentage and how the metric is evolving over time|
|[Organization Overview](../../organizations/organization-overview.md)|Average issue percentage of the repositories in your organization and issue percentage of each repository|
|[Repositories list page](../../organizations/managing-repositories.md)|Issue percentage in each repository in your organization|

## Complexity

Codacy uses [cyclomatic complexity](https://en.wikipedia.org/wiki/Cyclomatic_complexity) to identify files with complex methods in your repository. Cyclomatic complexity is the number of linearly independent paths through the source code of a method: the more control flow statements used in a method, the higher the value. Methods with a high cyclomatic complexity are more difficult to test and more likely to have defects. [Learn more about code complexity](https://blog.codacy.com/an-in-depth-explanation-of-code-complexity/) on Codacy's blog.

Codacy calculates complexity as follows:

-   The complexity value for each file is the highest cyclomatic complexity of the methods in the file.
-   A file is considered complex if its cyclomatic complexity value is higher than the threshold [**File is complex when over**](../../repositories-configure/adjusting-quality-settings.md#goals).
-   The complexity value of a commit or pull request is the sum of the cyclomatic complexity of the files that were changed in the commit or pull request and that have complexity higher than 4.

Codacy displays complexity on the following places:

|Place|Metric|
|-----|------|
|[Commit page](../../repositories/commits.md)<br/>[Pull request page](../../repositories/pull-requests.md)<br/>[Email notifications](../../account/emails.md#managing-your-email-notifications)|Variation of the complexity value introduced by the commit or pull request|
|[Files page](../../repositories/files.md)|Complexity value of each file|
|[Repository Dashboard](../../repositories/repository-dashboard.md)|Percentage of complex files in your repository and how the metric is evolving over time|
|[Organization Overview](../../organizations/organization-overview.md)|Average percentage of complex files in the repositories in your organization and percentage of complex files in each repository|
|[Repositories list page](../../organizations/managing-repositories.md)|Percentage of complex files in each repository in your organization|

## Duplication

Codacy identifies clones or [sequences of duplicate code](https://en.wikipedia.org/wiki/Duplicate_code) that exist in at least two different places of the source code of your repository. Clones typically indicate deeper code quality issues and should be eliminated through abstraction when possible.

Codacy calculates duplication as follows:

-   The duplication value for each file is the number of clones in the file.
-   A file is considered duplicated if the number of clones in the file is higher than the threshold [**File is duplicated when over**](../../repositories-configure/adjusting-quality-settings.md#goals).
-   The duplication value of a commit or pull request is the number of clones introduced by the commit or pull request.

!!! note
    You can [customize the rules for identifying duplicated blocks of code](../../repositories-configure/codacy-configuration-file.md#pmd-cpd-duplication) when using PMD CPD to analyze the source code of your repository.

Codacy displays duplication on the following places:

|Place|Metric|
|-----|------|
|[Commit page](../../repositories/commits.md)<br/>[Pull request page](../../repositories/pull-requests.md)<br/>[Email notifications](../../account/emails.md#managing-your-email-notifications)|Number of clones added or fixed by a commit or pull request|
|[Files page](../../repositories/files.md)|Duplication value of each file|
|[Repository Dashboard](../../repositories/repository-dashboard.md)|Percentage of duplicated files in your repository and how the metric is evolving over time|
|[Organization Overview](../../organizations/organization-overview.md)|Average percentage of duplicated files in the repositories in your organization and percentage of complex files in each repository|
|[Repositories list page](../../organizations/managing-repositories.md)|Percentage of duplicated files in each repository in your organization|

## Code coverage

Code coverage describes the degree to which the source code of a program is tested. There are several types of coverage, but Codacy uses line coverage, which measures the percentage of coverable lines of code that are covered by automated tests. [Learn more about code coverage](https://blog.codacy.com/a-guide-to-code-coverage-part-1-code-coverage-explained/) on Codacy's blog.

You must set up your CI/CD pipeline to [upload code coverage data to Codacy](../../coverage-reporter/index.md). Because of this, the tool that you use to generate the coverage reports is responsible for creating the data that Codacy then uses to calculate code coverage.

Codacy calculates code coverage as follows:

-   The coverage value for each file is the percentage of coverable lines that are covered by tests in the file.
-   A repository is considered to have acceptable coverage if the average coverage value for the files in the repository is higher than the threshold [**Coverage is under**](../../repositories-configure/adjusting-quality-settings.md#goals).
<!--code-coverage-metrics-start-->
-   The **coverage variation** of a commit or pull request is the number of percentage points that the coverage value for the file increased or dropped in the commit or pull request.
-   The **diff coverage** of a pull request is the percentage of **coverable lines** that the pull request **added or modified** that are covered by tests.

    If a pull request doesn't add or modify any coverable lines, the diff coverage is `∅` (not applicable). This scenario happens when the only changes in a pull request are:

    -   Deleted lines
    -   Added or modified lines that aren't coverable
<!--code-coverage-metrics-end-->

!!! note
    If you encounter a situation where Codacy shows an unexpected drop in coverage, learn about [the most common reasons causing those scenarios](why-does-codacy-show-unexpected-coverage-changes.md).

Once the coverage setup is complete, Codacy displays coverage data on the following places:

|Place|Metric|
|-----|------|
|[Commit page](../../repositories/commits.md)<br/>[Pull request page](../../repositories/pull-requests.md)<br/>[Email notifications](../../account/emails.md#managing-your-email-notifications)|Variation in percentage points of the coverage value for all files in the commit or pull request|
|[Pull request page](../../repositories/pull-requests.md)|Diff coverage for the changes included in the pull request|
|[Files page](../../repositories/files.md)|Coverage percentage of each file|
|[Repository Dashboard](../../repositories/repository-dashboard.md)|Average coverage value for the files in the repository and how the metric is evolving over time|
|[Codacy badge](../../getting-started/adding-a-codacy-badge.md)|Average coverage value for the files in your repository|
|[Organization Overview](../../organizations/organization-overview.md)|Average coverage of the repositories in your organization and coverage of each repository|
|[Repositories list page](../../organizations/managing-repositories.md)|Coverage of each repository in your organization|

## See also

-   [Diff coverage: <span class="skip-vale">we have</span> a new metric and quality gate rule for PRs](https://blog.codacy.com/diff-coverage/)
-   [Why does Codacy show unexpected coverage changes?](why-does-codacy-show-unexpected-coverage-changes.md)
-   [Does Codacy place limits on the code analysis?](does-codacy-place-limits-on-the-code-analysis.md)
