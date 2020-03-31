# Enterprise v2.0.372

<span style="font-weight: 400;">Includes **critical fix**</span><span
style="font-weight: 400;">** for Auto-comments not working** for all
repositories and providers.</span>

## Product Enhancements

-   Added support to configuration file for Sonar C#
-   Updated tools:
    -   Cppcheck has been updated to
        [1.89](https://sourceforge.net/p/cppcheck/news/2019/09/cppcheck-189/)
    -   Checkstyle has been updated to
        [8.25](https://checkstyle.org/releasenotes.html#Release_8.25)
    -   PMD has been updated to
        [6.18.0](https://pmd.github.io/2019/09/15/PMD-6.18.0/)
    -   Stylelint has been updated to
        [11.0.0](https://github.com/stylelint/stylelint/releases/tag/11.0.0)
    -   Sonar C# has been updated to
        [7.17.0.9346](https://github.com/SonarSource/sonar-dotnet/releases/tag/7.17.0.9346)
    -   Detekt has been updated to
        [1.1.0](https://github.com/arturbosch/detekt/releases/tag/1.1.0)
    -   Shellcheck has been updated to
        [0.7.0](https://github.com/koalaman/shellcheck/releases/tag/v0.7.0)
-   Added support for the following plugins:
    -   <span style="font-weight: 400;">ESLint:
        [vue-eslint-parser](https://github.com/mysticatea/vue-eslint-parser)</span>
    -   <span style="font-weight: 400;">ESLint:
        [eslint-plugin-lwc](https://github.com/salesforce/eslint-plugin-lwc)</span>
    -   <span style="font-weight: 400;">ESLint:
        [eslint-import-resolver-babel-module](https://github.com/tleunen/eslint-import-resolver-babel-module)</span>
    -   <span style="font-weight: 400;">RuboCop:
        [rubocop-rails](https://github.com/rubocop-hq/rubocop-rails)</span>

## Bug fixes

-   Fixed the issue with auto-comments not working for all repositories
    and providers
-   Fixed Checkstyle not reporting results or errors when the tool
    failed
-   Fixed Codacy Scalameta Pro broken links in patterns descriptions
-   Fixed timeouts on PMD due to OutOfMemory exception when analysing
    large files
-   Disabled Spotbugs by default since it requires extra setup
-   Fixed Pylint and Pylint (Python 3) Django project not being analyzed
