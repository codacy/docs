# Cloud Release Notes | 30 Oct 2019

## <span style="font-weight: 400;">Product Enhancements</span>

<span style="font-weight: 400;">Improved Coverage support for C# by
adding a [dedicated tool to upload
coverage](https://github.com/codacy/csharp-codacy-coverage)</span>

<span style="font-weight: 400;">[Our Coverage
reporter](https://github.com/codacy/codacy-coverage-reporter) now
supports [Lcov](https://wiki.documentfoundation.org/Development/Lcov)
making it easier to upload coverage for Javascript, Typescript and
C.</span>

<span style="font-weight: 400;">Updated tools:</span>

-   <span style="font-weight: 400;">Remark-lint has been updated to
    [6.0.4](https://libraries.io/npm/remark-lint/6.0.4)</span>
-   <span style="font-weight: 400;">Shellcheck has been updated to
    [0.7.0](https://github.com/koalaman/shellcheck/releases/tag/v0.7.0)</span>
-   <span style="font-weight: 400;">Stylelint has been updated to
    </span>[<span
    style="font-weight: 400;">11.1.1</span>](https://www.npmjs.com/package/stylelint/v/11.1.1)
-   <span style="font-weight: 400;">Detekt</span><span
    style="font-weight: 400;"> has been updated to </span>[<span
    style="font-weight: 400;">1.0.1</span>](https://github.com/arturbosch/detekt/releases/tag/1.0.1)
-   <span style="font-weight: 400;">Sonar C#</span><span
    style="font-weight: 400;"> has been updated to </span>[<span
    style="font-weight: 400;">7.17</span>](https://github.com/SonarSource/sonar-dotnet/releases/tag/7.17.0.9346)
-   <span style="font-weight: 400;">PMD</span><span
    style="font-weight: 400;"> has been updated to </span>[<span
    style="font-weight: 400;">6.18.0</span>](https://pmd.github.io/2019/09/15/PMD-6.18.0/)
-   <span style="font-weight: 400;">Default patterns for PMD</span>

<span style="font-weight: 400;">Added support for the following
plugins:</span>

-   [<span
    style="font-weight: 400;">Rubocop-rails</span>](https://github.com/rubocop-hq/rubocop-rails)
-   [eslint-plugin-wdio](https://www.npmjs.com/package/eslint-plugin-wdio)
-   [<span
    style="font-weight: 400;">vue-eslint-parser</span>](https://github.com/mysticatea/vue-eslint-parser)

## <span style="font-weight: 400;">Bug fixes</span>

-   <span style="font-weight: 400;">Fixed patterns that were causing
    false positives for ScalaMeta Pro</span>
-   <span style="font-weight: 400;">Fixed broken links in patterns
    descriptions </span>
-   <span style="font-weight: 400;">Fixed a bug causing an intermittent
    error screen when users tried to log out</span>
-   <span style="font-weight: 400;">Fixed several vulnerabilities
    related to Cross-site Scripting</span>
-   <span style="font-weight: 400;">Fixed bug causing “Error dividing by
    Zero” error when trying to upload a coverage report</span>
-   <span style="font-weight: 400;">Fixed a bug that was stopping
    Checkstyle from returning results if certain patterns were
    enabled</span>
-   <span style="font-weight: 400;">Fixed bug where Pylint would not
    analyse Django projects </span>
