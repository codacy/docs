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
