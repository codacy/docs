# Cloud Release Notes | October 19, 2018

## Product enhancements

-   Improved the coverage UI on the project dashboard:
    -   The value in the graph for coverage is now also displayed below, in the coverage issues breakdown.
    -   Added color scheme dependent on project quality settings: from red to green depending on your settings, and blue if your coverage is set to be ignored.
    -   Added tooltip explanations for issues related to coverage.

-  We updated the following tools:
    -   Scalameta now supports Scala 2.12
    -   Credo version [0.10.2](https://github.com/rrrene/credo/blob/master/CHANGELOG.md#0102)
    -   Checkstyle version [8.13](http://checkstyle.sourceforge.net/releasenotes.html#Release_8.13) 
    -   Bandit version [1.5.1](https://github.com/PyCQA/bandit/releases/tag/1.5.1)
    -   PHP Code Sniffer version [3.1](https://pear.php.net/package/PHP_CodeSniffer/download/3.1.0)

## Bugs

-   Fixed a bug on <https://security.codacy.com/> that highlighted the wrong section on the sidebar when scrolling
    down.
-   Fixed Pylint broken build.
-   Fixed a bug preventing new commits from showing on a branch.
