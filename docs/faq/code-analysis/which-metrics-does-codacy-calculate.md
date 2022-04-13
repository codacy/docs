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

Codacy assigns an overall grade to your repository branches and to individual files to help you assess the code quality of your repository. Grades reflect a weighted average of the available code quality metrics (issues, complexity, duplication, and coverage), and range from **A** to **F**:

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

Codacy displays grades on the following pages:

-   [**Files page**](../../repositories/files.md): displays the grade for each file in your repository
-   [**Branches page**](../../repositories-configure/managing-branches.md): displays the grade for each analyzed branch in your repository
-   [**Repository Dashboard**](../../repositories/repository-dashboard.md) and [**email notifications**](../../account/emails.md#managing-your-email-notifications): display the overall grade of your repository
-   [**Organization Overview**](../../organizations/organization-overview.md): displays which repositories have each grade
-   [**Repositories list page**](../../organizations/managing-repositories.md): displays the grade of each repository in your organization

## Issues

Codacy calculates the number of issues in each static code analysis category. Besides this, Codacy also allows you to compare issues across repositories with different sizes by calculating the **percentage of issues relative to an expected baseline** of 100 issues with an average cost of 10 per 1000 lines of code, where the cost of each issue depends on its severity: Critical = 10, Medium = 5, Minor = 1.

Codacy displays issues on the following pages:

-   [**Commits page**](../../repositories/commits.md), [**Pull requests page**](../../repositories/pull-requests.md), and [**email notifications**](../../account/emails.md#managing-your-email-notifications): display the variation in the number of issues introduced by the commit or pull request
-   [**Files page**](../../repositories/files.md): displays the number of issues in each file
-   [**Repository Dashboard**](../../repositories/repository-dashboard.md): displays the percentage of issues compared to the industry average and how the percentage of issues is evolving over time
-   [**Organization Overview**](../../organizations/organization-overview.md): displays the repositories in intervals of issue percentages
-   [**Repositories list page**](../../organizations/managing-repositories.md): displays the issue percentage in each repository in your organization

## Complexity

Codacy uses [cyclomatic complexity](https://en.wikipedia.org/wiki/Cyclomatic_complexity){: target="_blank"} to identify files with complex methods in your repository. Cyclomatic complexity is the number of linearly independent paths through the source code of a method: the more control flow statements used in a method, the higher the value. Methods with a high cyclomatic complexity are more difficult to test and more likely to have defects.

Codacy calculates complexity as follows:

-   The complexity value for each file is the highest complexity of the methods in the file
-   A file is considered complex if its complexity value is higher than the threshold [**File is complex when over**](../../repositories-configure/adjusting-quality-settings.md#goals)
-   The complexity value of a commit or pull request is the sum of the complexity of the files that were changed in the commit or pull request and that have complexity higher than 4

Codacy displays complexity on the following pages:

-   [**Commits page**](../../repositories/commits.md), [**Pull requests page**](../../repositories/pull-requests.md), and [**email notifications**](../../account/emails.md#managing-your-email-notifications): display the variation of the complexity value introduced by the commit or pull request
-   [**Files page**](../../repositories/files.md): displays the complexity value of each file
-   [**Repository Dashboard**](../../repositories/repository-dashboard.md): displays the percentage of complex files in your repository and how the percentage of complex files is evolving over time
-   [**Organization Overview**](../../organizations/organization-overview.md): displays the repositories in intervals of complex file percentages
-   [**Repositories list page**](../../organizations/managing-repositories.md): displays the percentage of complex files in each repository in your organization

## Duplication

Codacy identifies clones or [sequences of duplicate code](https://en.wikipedia.org/wiki/Duplicate_code){: target="_blank"} that exist in at least two different places of the source code of your repository. Clones typically indicate deeper code quality issues and should be eliminated through abstraction when possible.

Codacy calculates duplication as follows:

-   The duplication value for each file is the number of clones in the file
-   A file is considered duplicated if the number of clones in the file is higher than the threshold [**File is duplicated when over**](../../repositories-configure/adjusting-quality-settings.md#goals)
-   The duplication value of a commit or pull request is the number of clones introduced by the commit or pull request

!!! note
    You can [customize the rules for identifying duplicated blocks of code](../../repositories-configure/codacy-configuration-file.md#pmd-cpd-duplication) when using PMD CPD to analyze the source code of your repository.

Codacy displays duplication on the following pages:

-   [**Commits page**](../../repositories/commits.md), [**Pull requests page**](../../repositories/pull-requests.md), and [**email notifications**](../../account/emails.md#managing-your-email-notifications): display the number of clones and the actual sequences of duplicated code introduced or fixed by the commit or pull request
-   [**Files page**](../../repositories/files.md): displays the duplication value of each file
-   [**Repository Dashboard**](../../repositories/repository-dashboard.md): displays the percentage of duplicated files in your repository and how the percentage of duplicated files is evolving over time
-   [**Organization Overview**](../../organizations/organization-overview.md): displays the repositories in intervals of duplicated file percentages
-   [**Repositories list page**](../../organizations/managing-repositories.md): displays the percentage of duplicated files in each repository in your organization

## Code coverage

Code coverage describes the degree to which the source code of a program is tested. There are several types of coverage, but Codacy uses line coverage, which measures the percentage of coverable lines of code that are covered by automated tests.

You must set up your CI/CD pipeline to [upload code coverage data to Codacy](../../coverage-reporter/index.md). Because of this, the tool that you use to generate the coverage reports is responsible for creating the data that Codacy then uses to calculate code coverage.

Codacy calculates code coverage as follows:

-   The coverage value for each file is the percentage of coverable lines that are covered by tests in the file
-   A repository is considered to have acceptable coverage if the average coverage value for the files in the repository is higher than the threshold [**Coverage is under**](../../repositories-configure/adjusting-quality-settings.md#goals)
-   The coverage variation value of a commit or pull request is the number of percentage points that the coverage value for the file increased or dropped in the commit or pull request
-   The diff coverage of a pull request is the percentage of coverable lines that were added or modified in the pull request that are covered by tests

Once the coverage setup is complete, Codacy displays coverage data on the following pages:

-   [**Commits page**](../../repositories/commits.md), [**Pull requests page**](../../repositories/pull-requests.md) and [**email notifications**](../../account/emails.md#managing-your-email-notifications): display the variation in percentage points of the coverage value for all files in the corresponding branch, and pull requests also display the diff coverage
-   [**Files page**](../../repositories/files.md): displays the coverage percentage of each file
-   [**Repository Dashboard**](../../repositories/repository-dashboard.md): displays the average coverage value for the files in the repository and how coverage is evolving over time
-   [**Organization Overview**](../../organizations/organization-overview.md): displays the repositories in intervals of coverage percentages
-   [**Repositories list page**](../../organizations/managing-repositories.md): displays the code coverage in each repository in your organization

## See also

-   [Does Codacy place limits on the code analysis?](does-codacy-place-limits-on-the-code-analysis.md)
-   [Diff coverage: <span class="skip-vale">we have</span> a new metric and quality gate rule for PRs](https://blog.codacy.com/diff-coverage/)
