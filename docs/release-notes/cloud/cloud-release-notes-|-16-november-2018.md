# Cloud Release Notes | November 16, 2018

## <span style="font-weight: 400;">Product Enhancements</span>

<span style="font-weight: 400;">We now support PowerShell language using
</span>[<span
style="font-weight: 400;">PSScriptAnalyzer</span>](https://github.com/PowerShell/PSScriptAnalyzer)

<span style="font-weight: 400;">Created default patterns for
Flawfinder</span>

-   <span style="font-weight: 400;">Now when you add a project to
    Codacy, Flawfinder will run by default.</span>

<span style="font-weight: 400;">We updated the following tools to
newer versions:</span>

-   <span style="font-weight: 400;">Rubocop to </span>[<span
    style="font-weight: 400;">v0.60.0</span>](https://github.com/rubocop-hq/rubocop/blob/master/relnotes/v0.60.0.md)
-   <span style="font-weight: 400;">ESLint to </span>[<span
    style="font-weight: 400;">v5.8.0</span>](https://eslint.org/blog/2018/10/eslint-v5.8.0-released)
-   <span style="font-weight: 400;">ESLint plugin airbnb-eslint-config
    to </span>[<span
    style="font-weight: 400;">v17.1.0</span>](https://www.npmjs.com/package/eslint-config-airbnb/v/17.1.0)
-   <span style="font-weight: 400;">ESLint plugin babel-eslint to
    </span>[<span
    style="font-weight: 400;">v10.0.1</span>](https://www.npmjs.com/package/babel-eslint/v/10.0.1)
-   <span style="font-weight: 400;">ESLint plugin jsx-a11y to
    </span>[<span
    style="font-weight: 400;">v.6.1.2</span>](https://www.npmjs.com/package/eslint-plugin-jsx-a11y/v/6.1.2)

<!-- -->

-   <span style="font-weight: 400;">And added the below new plugins for
    ESLint</span>
    -   <span
        style="font-weight: 400;">Eslint-config-standard-react</span>
    -   <span style="font-weight: 400;">.prettierrc.js extension</span>
    -   <span style="font-weight: 400;">prodigy eslint profile</span>

## <span style="font-weight: 400;">Bug fixes</span>

-   <span style="font-weight: 400;">Fixed a bug in which GitHub login
    button was trying to use Bitbucket credentials and vice versa.
    </span>
-   <span style="font-weight: 400;">Fixed a bug that was adding projects
    from a deleted organization to an organization admin. Now all
    projects associated with a deleted organization will also be
    permanently deleted</span>
