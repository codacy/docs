# Why does Codacy show unexpected coverage changes?

You may encounter some situations where Codacy shows unexpected drops in coverage, <span class="skip-vale">potentially</span> causing your quality gates to fail. Usually, these drops in coverage happen in files that the commit or pull request didn't change.

There are multiple reasons for this, but it's important to understand that each coverage report that you upload to Codacy contains information about which lines of code in your repository are tested or not in a specific commit. In particular, each coverage report provides the following information about the lines of your source code files:

-   **Coverable lines** (lines that can be tested), by listing those lines
-   **Covered lines** (lines that were tested at least once), by marking those lines as tested or having a number of test hits
-   **Not coverable lines** (lines that can't be tested), by not listing those lines

For example, the coverage report represented below includes coverage information for two source code files:

-   File `ClassA.java` has two coverable lines and all are covered by tests
-   File `ClassB.java` has three coverable lines but only line 1 is covered by tests

<table>
  <thead>
    <tr>
      <th>File</th>
      <th>Line number</th>
      <th>Covered by tests?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="2">ClassA.java</td>
      <td>2</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td rowspan="3">ClassB.java</td>
      <td>1</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>3</td>
      <td>No</td>
    </tr>
    <tr>
      <td>11</td>
      <td>No</td>
    </tr>
  </tbody>
</table>

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

The following examples describe in more detail how specific changes in your code are reflected on the metrics that Codacy calculates.

## Example: Diff coverage is 100% but pull request coverage variation is negative

<!--TODO
Caused by removing covered lines or removing tests:
-   Removed lines don't affect diff coverage so if there are any other changes the diff coverage can be 100%
-   Removing covered lines or tests means that there are now less coverable lines covered in the repository, causing coverage variation <0%

Caused by application logic changes:
-   Modified lines are still covered - diff coverage 100%
-   Different flow of execution can mean that a different number of coverable lines are covered
-->

![Diff coverage is 100% but pull request coverage variation is negative](images/coverage-example-1.png)

<table>
  <thead>
    <tr>
      <th></th>
      <th colspan="2" style="text-align: center;">Merge base commit</th>
      <th colspan="2" style="text-align: center;">HEAD commit</th>
    </tr>
    <tr>
      <th>File</th>
      <th>Line number</th>
      <th>Covered by tests?</th>
      <th>Line number</th>
      <th>Covered by tests?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="2">ClassA.java</td>
      <td>2</td>
      <td>Yes</td>
      <td>2</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Yes</td>
      <td>4</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td rowspan="3">ClassB.java</td>
      <td>1</td>
      <td>Yes</td>
      <td>1</td>
      <td style="background-color:  salmon;">No</td>
    </tr>
    <tr>
      <td>3</td>
      <td>No</td>
      <td>3</td>
      <td>No</td>
    </tr>
    <tr>
      <td>11</td>
      <td>No</td>
      <td>11</td>
      <td>No</td>
    </tr>
  </tbody>
</table>

<table>
  <thead>
    <tr>
      <th></th>
      <th colspan="3" style="text-align: center;">Merge base commit</th>
      <th colspan="3" style="text-align: center;">HEAD commit</th>
      <th colspan="2" style="text-align: center;">Pull request results</th>
    </tr>
    <tr>
      <th>File</th>
      <th>Coverable<br/>lines</th>
      <th>Covered<br/>lines</th>
      <th>Coverage</th>
      <th>Coverable<br/>lines</th>
      <th>Covered<br/>lines</th>
      <th>Coverage</th>
      <th>Coverage variation</th>
      <th>Diff coverage</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>ClassA.java</td>
      <td>2</td>
      <td>2</td>
      <td title="2/2 x 100% = 100%">100%</td>
      <td>2</td>
      <td>2</td>
      <td title="2/2 x 100% = 100%">100%</td>
      <td title="100% - 100% = 0%">0%</td>
      <td></td>
    </tr>
    <tr>
      <td>ClassB.java</td>
      <td>3</td>
      <td>1</td>
      <td title="1/3 x 100% = 33.3(3)%">33.3(3)%</td>
      <td>3</td>
      <td>0</td>
      <td title="0/3 x 100% = 0%">0%</td>
      <td title="0% - 33.3(3)% = -33.3(3)%">-33.3(3)%</td>
      <td></td>
    </tr>
    <tr>
      <td><strong>Total</strong></td>
      <td>5</td>
      <td>3</td>
      <td title="3/5 x 100% = 60%">60%</td>
      <td>5</td>
      <td>2</td>
      <td title="2/5 x 100% = 40%">40%</td>
      <td title="40% - 60% = -20%" style="color: red;">-20%</td>
      <td>100%<br/>(Assuming that covered lines were modified)</td>
    </tr>
  </tbody>
</table>

## Example: Pull request coverage variation is negative but no files have coverage variation

<!--TODO
[Cause] Removing covered lines:
-   Removing covered lines from files that have 100% coverage continues to result in files with 100% coverage, so no change in total coverage
-   However, there may now be a lower of higher percentage of covered lines in the repository compared to the total number of coverable lines in the repository
-->

![Pull request coverage variation is negative but no files have coverage variation](images/coverage-example-2.png)

<table>
  <thead>
    <tr>
      <th></th>
      <th colspan="2" style="text-align: center;">Merge base commit</th>
      <th colspan="2" style="text-align: center;">HEAD commit</th>
    </tr>
    <tr>
      <th>File</th>
      <th>Line number</th>
      <th>Covered by tests?</th>
      <th>Line number</th>
      <th>Covered by tests?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="5">ClassA.java</td>
      <td>2</td>
      <td>Yes</td>
      <td>2</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Yes</td>
      <td>4</td>
      <td>Yes</td>
    </tr>
      <td>5</td>
      <td>Yes</td>
      <td style="background-color:  salmon;"></td>
      <td style="background-color:  salmon;"></td>
    <tr>
    </tr>
      <td>6</td>
      <td>Yes</td>
      <td style="background-color:  salmon;"></td>
      <td style="background-color:  salmon;"></td>
    <tr>
    </tr>
    <tr>
      <td rowspan="3">ClassB.java</td>
      <td>1</td>
      <td>Yes</td>
      <td>1</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>3</td>
      <td>No</td>
      <td>3</td>
      <td>No</td>
    </tr>
    <tr>
      <td>11</td>
      <td>No</td>
      <td>11</td>
      <td>No</td>
    </tr>
  </tbody>
</table>

<table>
  <thead>
    <tr>
      <th></th>
      <th colspan="3" style="text-align: center;">Merge base commit</th>
      <th colspan="3" style="text-align: center;">HEAD commit</th>
      <th style="text-align: center;">Pull request results</th>
    </tr>
    <tr>
      <th>File</th>
      <th>Coverable<br/>lines</th>
      <th>Covered<br/>lines</th>
      <th>Coverage</th>
      <th>Coverable<br/>lines</th>
      <th>Covered<br/>lines</th>
      <th>Coverage</th>
      <th>Coverage variation</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>ClassA.java</td>
      <td>4</td>
      <td>4</td>
      <td title="4/4 x 100% = 100%">100%</td>
      <td>2</td>
      <td>2</td>
      <td title="2/2 x 100% = 100%">100%</td>
      <td title="100% - 100% = 0%">0%</td>
    </tr>
    <tr>
      <td>ClassB.java</td>
      <td>3</td>
      <td>1</td>
      <td title="1/3 x 100% = 33.3(3)%">33.3(3)%</td>
      <td>3</td>
      <td>1</td>
      <td title="1/3 x 100% = 33.3(3)%">33.3(3)%</td>
      <td title="33.3(3)% - 33.3(3)% = 0%">0%</td>
    </tr>
    <tr>
      <td><strong>Total</strong></td>
      <td>7</td>
      <td>5</td>
      <td title="5/7 x 100% = 62.5%">62.5%</td>
      <td>5</td>
      <td>3</td>
      <td title="3/5 x 100% = 60%">60%</td>
      <td title="60% - 62.5% = -2.5%" style="color: red;">-2.5%</td>
    </tr>
  </tbody>
</table>

## See also

-   [Which metrics does Codacy calculate?](which-metrics-does-codacy-calculate.md#code-coverage)
