# Repository coverage status

Codacy classifies each repository's coverage into one of four statuses, based on whether the most recent commit on the default branch has coverage data.

## The four coverage statuses

| Status | Description | Has coverage |
|---|---|---|
| No coverage | The repository has never received a coverage report. | No |
| Up to date | The latest commit on the default branch has coverage data. | Yes |
| Waiting for coverage | The latest commit doesn't have coverage data yet, but a previous commit on the default branch did. Codacy keeps showing the last known values while it waits for new results. | Yes |
| Stopped receiving coverage | No recent commit on the default branch has coverage data, even though the repository used to report it. | No |

A repository counts as having coverage when its status is Up to date or Waiting for coverage.

!!! note
    Coverage status only considers commits on your repository's default branch. Coverage reports uploaded for other branches don't affect it.

## See also

-   [Coverage page](coverage.md)
-   [Adding coverage to your repository](../coverage-reporter/index.md)
-   [Why does Codacy show unexpected coverage changes?](../faq/code-analysis/why-does-codacy-show-unexpected-coverage-changes.md)
