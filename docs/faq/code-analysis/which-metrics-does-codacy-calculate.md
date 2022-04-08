---
description: Codacy scans your code for issues and calculates the metrics code complexity, duplication, and coverage. Besides this, Codacy also calculates a grade for your repository and files based on all calculated code quality metrics.
---

# Which metrics does Codacy calculate?

<!--TODO
    Include link to https://docs.codacy.com/getting-started/supported-languages-and-tools/ since Codacy doesn't calculate all metrics for all languages-->

## Grade

<!--TODO
    Improve this information to make it more useful and compact, and move it to a single section at the end of the page "Repository Dashboard". -->

<!--
### What are the different grades and how are they calculated?

#### 1. Overall Grade

Codacy gives an overall grade to help you better understand the quality of your repository.
Grades range from **A** to **F**, **A** being the highest grade.

Note the grading is performed on a branch level, to give a better understanding of the code quality on a branch basis.

#### 2. Category Grades

Issue classification is as follows:

-   Code Style
-   Compatibility
-   Error Prone
-   Performance
-   Security
-   Unused Code

Every issue impacts the grade of its category. Category grading ranges from 0% - 100%, 100% being the highest grade.

#### 3. File Grades

File grades range from **A** to **F**, **A** being the highest grade.

Grading every file occurs according to the weighted average of the following categories:

-   issues
-   clones
-   complexity
-   coverage (optional)

-->

## Issues

Codacy calculates both the number of issues and the percentage of issues in your repository when compared to an industry average, taking into account the severity of each issue:

-   Each issue has a cost depending on its severity: error = 10, warning = 5, info = 1

-   Codacy expects 100 issues with an average cost of 10 per 1000 lines of code (KLOC) in your repository, based on the following industry average mentioned in Steve McConnell's book [Code Complete](https://en.wikipedia.org/wiki/Code_Complete){: target="_blank"}:

    > Industry Average: about <span class="skip-vale">15 – 50</span> errors per 1000 lines of delivered code.
    
    The author further states that this is usually representative of code that has some level of structured programming but probably includes a mix of coding techniques.

Codacy displays issues on the following pages:

-   [**Commits page**](../../repositories/commits.md) and [**Pull requests page**](../../repositories/pull-requests.md): display the variation in the number of issues introduced by the commit or pull request
-   [**Files page**](../../repositories/files.md): displays the number of issues in each file
-   [**Repository Dashboard**](../../repositories/repository-dashboard.md): displays the percentage of issues compared to the industry average and how the percentage of issues is evolving over time
-   [**Organization Overview**](../../organizations/organization-overview.md): displays the repositories in intervals of issue percentages

## Complexity

Codacy uses [cyclomatic complexity](https://en.wikipedia.org/wiki/Cyclomatic_complexity){: target="_blank"} to identify files with complex methods in your repository. Cyclomatic complexity is the number of linearly independent paths through the source code of a method: the more control flow statements used in a method, the higher the value. Methods with a high cyclomatic complexity are more difficult to test and more likely to have defects.

Codacy calculates complexity as follows:

-   The complexity value for each file is the highest complexity of the methods in the file
-   A file is considered complex if its complexity value is higher than the threshold [**File is complex when over**](../../repositories-configure/adjusting-quality-settings.md#goals)
-   The complexity value of a commit or pull request is the sum of the complexity of the files that were changed in the commit or pull request and that have complexity higher than 4

Codacy displays complexity on the following pages:

-   [**Commits page**](../../repositories/commits.md) and [**Pull requests page**](../../repositories/pull-requests.md): display the variation of the complexity value introduced by the commit or pull request
-   [**Files page**](../../repositories/files.md): displays the complexity value of each file
-   [**Repository Dashboard**](../../repositories/repository-dashboard.md): displays the percentage of complex files in your repository and how the percentage of complex files is evolving over time
-   [**Organization Overview**](../../organizations/organization-overview.md): displays the repositories in intervals of complex file percentages

## Duplication

Codacy identifies clones or [sequences of duplicate code](https://en.wikipedia.org/wiki/Duplicate_code){: target="_blank"} that exist in at least two different places of the source code of your repository. Clones typically indicate deeper code quality issues and should be eliminated through abstraction when possible.

Codacy calculates duplication as follows:

-   The duplication value for each file is the number of clones in the file
-   A file is considered duplicated if the number of clones in the file is higher than the threshold [**File is duplicated when over**](../../repositories-configure/adjusting-quality-settings.md#goals)
-   The duplication value of a commit or pull request is the number of clones introduced by the commit or pull request

!!! note
    You can [customize the rules for identifying duplicated blocks of code](../../repositories-configure/codacy-configuration-file.md#pmd-cpd-duplication) when using PMD CPD to analyze the source code of your repository.

Codacy displays duplication on the following pages:

-   [**Commits page**](../../repositories/commits.md) and [**Pull requests page**](../../repositories/pull-requests.md): display the number of clones and the actual sequences of duplicated code introduced or fixed by the commit or pull request
-   [**Files page**](../../repositories/files.md): displays the duplication value of each file
-   [**Repository Dashboard**](../../repositories/repository-dashboard.md): displays the percentage of duplicated files in your repository and how the percentage of duplicated files is evolving over time
-   [**Organization Overview**](../../organizations/organization-overview.md): displays the repositories in intervals of duplicated file percentages

## Code coverage

You must set up your CI/CD pipeline to [upload code coverage data to Codacy](../../coverage-reporter/index.md). Because of this, the tool that you use to generate the coverage reports is responsible for creating the data that Codacy then uses to calculate code coverage.

Codacy calculates code coverage as follows:

-   The coverage value for each file is the percentage of coverable lines that are covered by tests in the file
-   A repository is considered to have acceptable coverage if the average coverage value for the files in the repository is higher than the threshold [**Coverage is under**](../../repositories-configure/adjusting-quality-settings.md#goals)
-   The coverage variation value of a commit or pull request is the number of percentage points that the coverage value for the file increased or dropped in the commit or pull request
-   The diff coverage of a pull request is the percentage of coverable lines that were added or modified in the pull request that are covered by tests

Once the coverage setup is complete, Codacy displays coverage data on the following pages:

-   [**Commits page**](../../repositories/commits.md) and [**Pull requests page**](../../repositories/pull-requests.md): display the variation in percentage points of the coverage value for all files in the corresponding branch, and pull requests also display the diff coverage
-   [**Files page**](../../repositories/files.md): displays the coverage percentage of each file
-   [**Repository Dashboard**](../../repositories/repository-dashboard.md): displays the average coverage value for the files in the repository and how coverage is evolving over time
-   [**Organization Overview**](../../organizations/organization-overview.md): displays the repositories in intervals of coverage percentages
