# Enterprise v2.0.348

These updates won’t be available if you are still using Codacy Legacy
version. If you want to update Codacy to the newest version, please
contact us,
and we will schedule a call to assist you with the migration. Below is
the list of enhancements and bug fixes available with this update.

## <span style="font-weight: 400;">Product Enhancements</span>

-   We now support the Powershell language using
    [PSScriptAnalyzer](https://github.com/PowerShell/PSScriptAnalyzer)
-   We have updated the following tools to newest versions:
    -   <span class="s1">Rubocop to [<span
        class="s2">v0.60.0</span>](https://github.com/rubocop-hq/rubocop/blob/master/relnotes/v0.60.0.md)</span>
    -   <span class="s4">ESlint to [<span
        class="s2">v5.8.0</span>](https://eslint.org/blog/2018/10/eslint-v5.8.0-released)</span>
    -   ESLint eslint-config-react-app to
        [v.3.0.5](https://www.npmjs.com/package/eslint-config-react-app/v/3.0.5-next.c662dfb0)
    -   <span class="s4">Eslint plugin airbnb-eslint-config to [<span
        class="s2">v17.1.0</span>](https://www.npmjs.com/package/eslint-config-airbnb/v/17.1.0)</span>
    -   <span class="s4">ESlint plugin babel-eslint to [<span
        class="s2">v10.0.1</span>](https://www.npmjs.com/package/babel-eslint/v/10.0.1)</span>
    -   <span class="s4">ESLint plugin jsx-a11y to [<span
        class="s2">v.6.1.2</span>](https://www.npmjs.com/package/eslint-plugin-jsx-a11y/v/6.1.2)</span>
-   <span class="s4">And added the below new plugins for ESLint:</span>
    -   <span class="s4">Eslint-config-standard-react</span>
    -   <span class="s4">.prettierrc.js extension</span>
    -   <span class="s1">prodigy eslint profile</span>
-   Commit page now allows sending an invitation to the commit author
    email if the user does not belong to the organization
-   Improved UI message when a file is ignored to clarify that the
    changes will only be applied in the next analysis

## Bug fixes

-   <span
    sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Fixed error getting pull request from Bitbucket Server if author had no email&quot;}"
    sheets-userformat="{&quot;2&quot;:513,&quot;3&quot;:{&quot;1&quot;:0},&quot;12&quot;:0}">Fixed
    a bug where Codacy wouldn't pick up a new pull request from
    Bitbucket Server if the PR had no email associated</span>
-   Fixed a bug where the last line of a duplicated block would not
    appear highlighted
-   Fixed a bug that didn't allow to select some projects in the team
    dashboards 
-   Fixed a bug where Codacy's configuration file was not ignoring files
    with 'exclude\_paths' 
