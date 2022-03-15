---
description: Codacy scans your code for issues and calculates the metrics code complexity, duplication, and coverage. Besides this, Codacy also calculates a grade for your repository and files based on all calculated code quality metrics.
---

# Which metrics does Codacy calculate?

## Issues

<!--NOTE https://codacy.atlassian.net/browse/CY-2086?focusedCommentId=42198

We compare the number of issues with the industry average. File size and severity of the issues are two relevant concepts here

-   Issue cost - depends on the severity of issue: Error = 10, Warning = 5, Info = 1
    -   Per tool we attribute a severity per issue category - when we don’t have any attribution defined we attribute “Info” level.
-   Per 1000 lines of code, we expect 100 errors, with an cost of 10.
-->

## Complexity

### How does Codacy measure complexity in my repository?

Codacy uses [cyclomatic complexity](https://en.wikipedia.org/wiki/Cyclomatic_complexity) to identify complex files in your repository.

Cyclomatic complexity is a software metric used to indicate the complexity of a program. It's a quantitative measure of the number of linearly independent paths through a program's source code.

A complex file is a file with a complexity value bigger than the threshold defined on the [repository quality settings](../../repositories-configure/adjusting-quality-settings.md).

Code complexity is calculated based on the maximum number of complex methods in a file.

In your [Repository Dashboard](../../repositories/repository-dashboard.md) you can see how complexity is evolving for your repository.

<!--NOTE https://codacy.atlassian.net/browse/CY-2086?focusedCommentId=42198

We calculate cyclomatic complexity - this concept doesn’t exit at file level, only at method level.

-   We attribute the highest level of complexity of a method to the file itself.
-   We sum the complexity of the files to define the complexity of the commit.
    -   Here we have a rule that we only files with absolute values higher than 4 are accounted for that sum.
-   On the quality settings the user can define at repository level how much complexity is allowed - a file is complex if the complexity is above the value of the quality settings.
-   At repository level we display the % of files that are complex within that repository.
-   At organization level we display the repositories organized per intervals of complexity.
-->

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
