# Why does Codacy show unexpected coverage changes?

You may encounter some situations where Codacy shows unexpected drops in coverage, <span class="skip-vale">potentially</span> causing your quality gates to fail. Usually, these drops in coverage happen in files that the commit or pull request didn't change.

There are multiple reasons for this, but it's important to understand that each coverage report that you upload to Codacy contains information about which lines of code in your repository are tested or not in a specific commit. In particular, each coverage report provides the following information about the lines of your source code files:

-   **Coverable lines** (lines that can be tested), by listing those lines
-   **Covered lines** (lines that were tested at least once), by marking those lines as tested or having a number of test hits
-   **Not coverable lines** (lines that can't be tested), by not listing those lines

Based on the information obtained from the coverage reports, Codacy calculates code coverage as follows:

-   The **coverage** for a file, commit, or pull request is the percentage of covered lines in the universe of coverable lines for that file, commit, or pull request. For example, a commit with 85 covered lines out of a total of 100 coverable lines has 85% coverage.

{%
    include-markdown "which-metrics-does-codacy-calculate.md"
    start="<!--start-code-coverage-metrics-->"
    end="<!--end-code-coverage-metrics-->"
%}

!!! important
    Note that changes external to a source code file can affect the lines that are or aren't covered in that file.

## Common reasons for unexpected coverage changes

There are several reasons that could cause Codacy to report unexpected coverage results, from changes to your source code to external factors. The following is a non-exhaustive list of the most common reasons:

-   Adding new tests or removing existing tests from your project.

    Even small and localized changes to your tests can have an impact on the amount of covered lines across your repository.

-   Changing the logic of your application or tests.

    Changing the control flow of your application or tests can mean that different areas of your code start or stop being covered by tests. For example, inverting the result of the Boolean expression of an if statement means that a different branch of your code could now be tested.

-   Failing to upload coverage reports, or uploading a different number of reports between commits.

    This can be caused by a failed step in your CI/CD pipeline, for example. In the case of pull requests, you should make sure that you upload all relevant coverage reports for both the merge base commit and the HEAD commit of the pull request branch.

-   External factors affecting the execution of tests.

    A variety of factors that are external to your code can affect the execution of tests and, consequently, the results contained in the coverage reports. A few examples of these external factors are:

    -   Updates to dependencies of your project that could result in different test execution paths
    -   Misconfiguration of repository secrets that could prevent some test execution paths
    -   Tests that are dependent on time, such as running test cases only on specific dates or times of the day
    -   "Flaky" tests caused by any inconsistent or unreliable behavior of your code, infrastructure, or third-party services

## See also

-   [Which metrics does Codacy calculate?](which-metrics-does-codacy-calculate.md#code-coverage)
