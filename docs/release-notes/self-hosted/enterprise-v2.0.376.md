# Enterprise v2.0.376

## Product Enhancements

-   <span
    style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;">**Improved
    Security Dashboard** - <span
    sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;We have improved our Security Dashboard to ensure that all security issues are displayed and so it now ensures that the status displayed on the Dashboard is correct. We have also ensured that ally a issues that have category \&quot;Security\&quot; but don't have a specified sub-category are displayed under \&quot;Others\&quot;. &quot;}"
    sheets-userformat="{&quot;2&quot;:513,&quot;3&quot;:{&quot;1&quot;:0},&quot;12&quot;:0}">We
    have improved our Security Dashboard to ensure that all security
    issues are being displayed and also to ensure that the status
    displayed on the Dashboard is correct. We have also ensured that all
    issues that have category "Security" but don't have a specified
    sub-category are displayed under "Others".</span></span>
    -   On the Security Dashboard we will be displaying a maximum of 20
        issues per sub-category, while providing you a link to the
        overall list of security issues.
-   **Added support:**
    -   Added support of [TSQLLint
        1.11.1](https://github.com/tsqllint/tsqllint/releases/tag/v1.11.1)
    -   Added [CodeNarc
        1.5](https://github.com/CodeNarc/CodeNarc/releases/tag/v1.5)
-   **<span
    style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;">Updated
    tools:</span>**  
    -   <span
        style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;">Updated
        [ESLint to
        6.8.0](https://github.com/eslint/eslint/releases/tag/v6.8.0)
        including all plugins updated</span>
        -   <span
            style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;">We
            have deprecated TSLint 5.14.0 and replaced it with
            ESLint</span>
    -   Updated [JSHint to
        2.10.2](https://github.com/jshint/jshint/releases/tag/2.10.2)
    -   Updated [Ameba to
        0.10.1](https://shardbox.org/shards/ameba/releases/0.10.1)
    -   Updated [Checkstyle to
        8.28](https://github.com/checkstyle/checkstyle/releases/tag/checkstyle-8.28)
    -   Updated [Detekt to
        1.3.1](https://github.com/arturbosch/detekt/releases/tag/1.3.1)
    -   Updated [Flawfinder to
        2.0.10](https://github.com/david-a-wheeler/flawfinder/releases/tag/2.0.10)
    -   Updated [PHP Code Sniffer to
        3.5.1](https://github.com/squizlabs/PHP_CodeSniffer/releases/tag/3.5.1)
    -   Updated [PSScriptAnalyzer to
        1.18.3](https://github.com/PowerShell/PSScriptAnalyzer/releases/tag/1.18.3)
    -   Updated [PyLint (Python 3) to
        2.4.3](https://github.com/PyCQA/pylint/releases/tag/pylint-2.4.3)
    -   Updated [SQLint to
        0.1.9](https://rubygems.org/gems/sqlint/versions/0.1.9)
    -   Updated [Sonar C\# to
        8.0](https://github.com/SonarSource/sonar-dotnet/releases/tag/8.0.0.9566)
    -   Updated [Cppcheck to
        1.90](https://sourceforge.net/p/cppcheck/news/2019/12/cppcheck-190/)
-   **Lines of code** - Improved precision of calculation of lines of
    code for some languages

## Other news

-   **Public Roadmap** - To give more visibility to what are we working
    on and the upcoming planned items we have now our [Roadmap
    public](https://roadmap.codacy.com/)! Feel free to check it and to
    give us feedback. 
-   **Barracuda case study** - We have a new published case study, this
    time with Barracuda on [How Codacy lightened the load of Barracuda
    Networks' Product team](https://www.codacy.com/case/barracuda)
-   **Terms update** - In order to ensure that we have our Contracts
    matching our terms we have performed an update to our Terms where we
    specify the cancellation notice period to be 30 days.

## Bug Fixes

-   Fixed issue related with not getting issues for Cppcheck for
    specific customers
-   Fixed an issue related with Organization Dashboard not showing
    issues for specific users
-   Fixed an issue related with Pull Requests page not being displayed
-   Fixed inconsistent coverage results being displayed for a specific
    user
-   Fixed an issue related with not being able to add repositories for a
    specific user
-   Fixed an issue related with not calculating duplication for all
    languages, we have now enabled all tools that support duplication
    regardless of language
-   Fixed a reported problem related with Comments not being written in
    GitHub for some users
-   Fixed a Cross-site Scripting (XSS) vulnerability when a filename
    contained a javascript snippet
-   Fixed a Cross-site Scripting (XSS) vulnerability when a branch name
    contained a javascript snippet
-   Fixed a Cross-site Scripting (XSS) vulnerability when a team name
    contained a javascript snippet
-   Fixed a reported issue on permissions not being properly revoked
-   Fixed and issue that prevented users from receiving their invitation
    email to join an Organization on Codacy
-   Fixed an issue that prevented navigating on the files and commits
    lists using the next and back links
-   In order to address inconsistencies in the Pull Request page, now
    when re-analyzing a pull request Codacy re-analyzes the last commit
    and then the pull request, while previously only analized the pull
    request
-   Fixed an issue that caused analysis to fail if a file had an empty
    space at the beginning or end of its name
-   Fixed issue related with displaying incorrect links on Issues'
    descriptions
-   We have changed Repository quality settings to not allow negative
    numbers as input to avoid strange calculations for new issues
-   Fixed issue that prevented the Ignored files page from loading for a
    large number of files
-   Fixed issue related with "Last 7 days" button displaying results for
    last 31 days on Repository Dashboard

 
