---
description: Codacy scans your code for issues and calculates the metrics code complexity, duplication, and coverage. Besides this, Codacy also calculates a grade for your repository and files based on all calculated code quality metrics.
---

# Which metrics does Codacy calculate?

<!--TODO
    Include link to https://docs.codacy.com/getting-started/supported-languages-and-tools/ since Codacy doesn't calculate all metrics for all languages-->

## Issues

<!--NOTE https://codacy.atlassian.net/browse/CY-2086?focusedCommentId=42198

We compare the number of issues with the industry average. File size and severity of the issues are two relevant concepts here

-   Issue cost - depends on the severity of issue: Error = 10, Warning = 5, Info = 1
    -   Per tool we attribute a severity per issue category - when we don’t have any attribution defined we attribute “Info” level.
-   Per 1000 lines of code, we expect 100 errors, with an cost of 10.
-->

## Complexity

Codacy uses [cyclomatic complexity](https://en.wikipedia.org/wiki/Cyclomatic_complexity){: target="_blank"} to identify files with complex methods in your repository. Cyclomatic complexity is the number of linearly independent paths through the source code of a method: the more control flow statements used in a method, the higher the value. Methods with a high cyclomatic complexity are harder to test and are more likely to have defects.

Codacy calculates complexity as follows:

-   **The complexity value for each file** is the highest complexity of the methods in that file
-   **A file is considered complex** if its complexity value is higher than the threshold [**File is complex when over**](../../repositories-configure/adjusting-quality-settings.md#goals)
-   **The complexity of a commit or pull request** is the sum of the complexity of the files that were changed in the commit or pull request and that have complexity higher than 4

Codacy displays complexity on the following pages:

-   [Commits page](../../repositories/commits.md) and [Pull requests page](../../repositories/pull-requests.md): display the variation of the complexity value introduced by the commit or pull request
-   [Files page](../../repositories/files.md): displays the complexity value of each file
-   [Repository Dashboard](../../repositories/repository-dashboard.md): displays the percentage of complex files in your repository and how the percentage of complex files is evolving over time
-   [Organization Overview](../../organizations/organization-overview.md): displays the repositories in intervals of complex file percentages

## Duplication

<!--NOTE https://codacy.atlassian.net/browse/CY-2086?focusedCommentId=42198

Duplication unit is a block of duplicated code in 2 or more places. We check for duplicated units.

-   On the quality settings the user can define at repository level how many cloned blocks he wants to accept before saying if the file has duplication.
-   At commit level we check the number of clones and the delta of number of clones.
-   At repository level we check the % of files that have duplicated code.
-   At organization level we display the repositories organized per intervals of duplication.

-->

## Coverage

<!--NOTE https://codacy.atlassian.net/browse/CY-2086?focusedCommentId=42198

We display the % of lines of code covered, out of those that can be covered.

-   On the quality settings the user can define what is the coverage threshold acceptable for that repository.
-   At commit level we display he % of lines of code that are indeed covered, and the delta of that percentage.
-   At repository level we display the % of lines of code that are indeed covered.
-   At organization level we display the repositories organized per intervals of coverage.
-->

## Grade

### What are the different grades and how are they calculated?

<!-- TODO
     Improve this information to make it more useful and compact, and move it to a single section at the end of the page "Repository Dashboard". -->

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

#### 4. Grade Calculation

Codacy calculates grades based on the number of issues for every thousand lines of code (KLOC). Steve McConnell, in his book 'Code Complete,' wrote about average bugs per LOC:

(a) Industry Average: "about 15–50 errors per 1000 lines of delivered code." He further states this is usually representative of code that has some level of structured programming behind it but probably includes a mix of coding techniques.
