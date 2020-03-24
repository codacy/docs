# Enterprise v2.0.371

## <span style="font-weight:400">Announcement: </span>

<span style="font-weight:400">We now have a team dedicated to language
and tools improvement so we can get updates out to you faster and more
often. 🎉🎉🎉</span>

<span style="font-weight:400">This team will also be reviewing user
contributions to Codacy projects so you can expect quicker responses
moving forward.</span>

## <span style="font-weight:400">Product Enhancements</span>

<span style="font-weight:400">Removed Integration with HipChat since the
tool is now obsolete</span>

<span style="font-weight:400">Keeping in line with the Git providers,
Codacy will now ignore branches with names longer than 254 characters to
avoid issues with analysis</span>

<span style="font-weight:400">Bitbucket integration improvement:
Non-admins will no longer be able to add projects to Codacy to avoid
setting up integrations that don’t work.</span>

<span style="font-weight:400">Codacy’s Coverage Reporter now supports 
</span>[<span
style="font-weight:400">scrutinizer-ci</span>](https://scrutinizer-ci.com/docs/)<span
style="font-weight:400"> and </span>[<span
style="font-weight:400">semaphoreci</span>](https://docs.semaphoreci.com/)

<span style="font-weight:400">New tools:</span>

-   [<span style="font-weight:400">Pylint version
    2.3.1</span>](https://pypi.org/project/pylint/2.3.1/)<span
    style="font-weight:400"> to support Python 3 (up to </span>[<span
    style="font-weight:400">3.7</span>](https://www.python.org/downloads/release/python-370/)<span
    style="font-weight:400">). This version isn’t enabled by
    default</span>

<span style="font-weight:400">Updated tools:</span><span
style="font-weight:400">  
  
</span>

-   <span style="font-weight:400">SonarC\# has been updated from version
    5.10.1.1411 to </span>[<span
    style="font-weight:400">7.16.0.8981</span>](https://github.com/SonarSource/sonar-dotnet/releases/tag/7.16.0.8981)
-   <span style="font-weight:400">Pylint has been updated to
    </span>[<span style="font-weight:400">version
    1.9.5</span>](https://pypi.org/project/pylint/1.9.5/)<span
    style="font-weight:400"> with cross support for both Python 2 (up to
    2.7) and Python 3 (up to 3.6)</span>
-   <span style="font-weight:400">Stylelint has been updated to
    </span>[<span
    style="font-weight:400">10.1.0</span>](https://www.npmjs.com/package/stylelint/v/10.1.0)
-   <span style="font-weight:400">Checkstyle has been updated to
    </span>[<span
    style="font-weight:400">8.23</span>](https://checkstyle.sourceforge.io/releasenotes.html#Release_8.23)
-   <span style="font-weight:400">Added new patterns to
    ScalaStyle</span>

<span style="font-weight:400">Added support for the following
plugins:</span>

-   [<span
    style="font-weight:400">stylelint-config-css-modules</span>](https://www.npmjs.com/package/stylelint-config-css-modules)
-   [<span
    style="font-weight:400">stylelint-prettier</span>](https://github.com/prettier/stylelint-prettier)
-   [<span
    style="font-weight:400">stylelint-config-standard-scss</span>](https://www.npmjs.com/package/stylelint-config-standard-scss)
-   [<span
    style="font-weight:400">stylelint-config-recommended-scss</span>](https://github.com/kristerkari/stylelint-config-recommended-scss)
-   [<span
    style="font-weight:400">eslint-plugin-xss</span>](https://www.npmjs.com/package/eslint-plugin-xss)

## <span style="font-weight:400">Bug fixes</span>

-   <span style="font-weight:400">Fixed bug where Pull Request page
    would stop responding when a big amount of issues was
    reported</span>
-   <span style="font-weight:400">Fixed bug where the Hotspots tab would
    keep on loading forever if the PR’s diff was to large</span>
-   <span style="font-weight:400">Fixed bug that was causing FindBugs to
    sometimes give an error when it shouldn’t</span>
-   <span style="font-weight:400">Fixed a bug where Complexity reported
    by ESlint would not be displayed correctly in the dashboard</span>
