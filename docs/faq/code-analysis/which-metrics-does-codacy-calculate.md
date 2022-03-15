---
description: Codacy scans your code for issues and calculates the metrics code complexity, duplication, and coverage. Besides this, Codacy also calculates a grade for your repository and files based on all calculated code quality metrics.
---

# Which metrics does Codacy calculate?

## Complexity

### How does Codacy measure complexity in my repository?

Codacy uses [cyclomatic complexity](https://en.wikipedia.org/wiki/Cyclomatic_complexity) to identify complex files in your repository.

Cyclomatic complexity is a software metric used to indicate the complexity of a program. It's a quantitative measure of the number of linearly independent paths through a program's source code.

A complex file is a file with a complexity value bigger than the threshold defined on the [repository quality settings](../../repositories-configure/adjusting-quality-settings.md).

Code complexity is calculated based on the maximum number of complex methods in a file.

In your [Repository Dashboard](../../repositories/repository-dashboard.md) you can see how complexity is evolving for your repository.

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
