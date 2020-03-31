# Cloud Release Notes | 05 Set 2019

## <span style="font-weight: 400;">Product Enhancements</span>

-   <span style="font-weight: 400;">Bitbucket integration improvement:
    Non-admins will no longer be able to add projects to Codacy to avoid
    setting up integrations that don’t work.</span>
-   <span style="font-weight: 400;">Codacy’s Coverage Reporter now
    supports  [scrutinizer-ci](https://scrutinizer-ci.com/docs/) and
    [semaphoreci](https://docs.semaphoreci.com/)</span>
-   <span style="font-weight: 400;">New tools:</span>
    -   <span style="font-weight: 400;">[Pylint version
        2.3.1](https://pypi.org/project/pylint/2.3.1/) to support Python
        3 (up to
        [3.7](https://www.python.org/downloads/release/python-370/)).
        This version isn’t enabled by default</span>

<!-- -->

-   <span style="font-weight: 400;">Updated tools:</span>  
    -   <span style="font-weight: 400;">SonarC# has been updated from
        version 5.10.1.1411 to
        [7.16.0.8981](https://github.com/SonarSource/sonar-dotnet/releases/tag/7.16.0.8981)</span>
    -   <span style="font-weight: 400;">Pylint has been updated to
        [version 1.9.5](https://pypi.org/project/pylint/1.9.5/) with
        cross support for both Python 2 (up to 2.7) and Python 3 (up to
        3.6)</span>
    -   <span style="font-weight: 400;">Stylelint has been updated to
        [10.1.0](https://www.npmjs.com/package/stylelint/v/10.1.0)</span>
    -   <span style="font-weight: 400;">Checkstyle has been updated to
        [8.23](https://checkstyle.sourceforge.io/releasenotes.html#Release_8.23)</span>
    -   <span style="font-weight: 400;">Added new patterns to
        ScalaStyle</span>
-   <span style="font-weight: 400;">Added support for the following
    plugins:</span>
    -   <span
        style="font-weight: 400;">[stylelint-config-css-modules](https://www.npmjs.com/package/stylelint-config-css-modules)</span>
    -   <span
        style="font-weight: 400;">[stylelint-prettier](https://github.com/prettier/stylelint-prettier)</span>
    -   <span
        style="font-weight: 400;">[stylelint-config-standard-scss](https://www.npmjs.com/package/stylelint-config-standard-scss)</span>
    -   <span
        style="font-weight: 400;">[stylelint-config-recommended-scss](https://github.com/kristerkari/stylelint-config-recommended-scss)</span>
    -   <span
        style="font-weight: 400;">[eslint-plugin-xss](https://www.npmjs.com/package/eslint-plugin-xss)</span>

## <span style="font-weight: 400;">Bug fixes</span>

-   <span style="font-weight: 400;">Fixed a bug that stopped users from
    copying the API token while using Firefox</span>
-   <span style="font-weight: 400;">Fixed a bug that kept PR page from
    loading at times</span>
-   <span style="font-weight: 400;">Fixed a bug that stopped Hotspots
    from loading on the PR screen if there were too many changes</span>
-   <span style="font-weight: 400;">Fixed a bug that caused the coverage
    upload to sometimes give a timeout error</span>
-   <span style="font-weight: 400;">Fixed a bug where Complexity
    reported by ESlint would not be displayed correctly in the
    dashboard</span>
