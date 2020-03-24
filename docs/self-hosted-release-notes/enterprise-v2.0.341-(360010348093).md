# Enterprise v2.0.341

<span style="font-weight: 400;">These updates won’t be available if you
are still using Codacy Legacy version. If you want to update Codacy to
the newest version, please contact us at </span>[<span
style="font-weight: 400;">support@codacy.com</span>](mailto:support@codacy.com)<span
style="font-weight: 400;">, and we will schedule a call to assist you
with the migration. </span><span style="font-weight: 400;">Below is the
list of enhancements and bug fixes available with this update.</span>

<span style="font-weight: 400;">Note: All tools Codacy runs are now
containerized in preparation for our CLI release. When you update Codacy
to the newest version, the tools will need to be downloaded, which may
cause the update to take longer than usual.</span>

**Product Enhancements:**

-   <span style="font-weight: 400;">Created default patterns for PMD JS.
    PMD will now also analyze Javascript files by default</span>
-   <span style="font-weight: 400;"><span
    sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Fixed issued that prevent Add project view from loading when user has substancial amount of repositories&quot;}"
    sheets-userformat="{&quot;2&quot;:513,&quot;3&quot;:[null,0],&quot;12&quot;:0}">Added
    ability to filter the list of projects by Team.</span></span>
-   <span style="font-weight: 400;"><span
    sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Fixed issued that prevent Add project view from loading when user has substancial amount of repositories&quot;}"
    sheets-userformat="{&quot;2&quot;:513,&quot;3&quot;:[null,0],&quot;12&quot;:0}">Improved
    logs error messages when uploading the API endpoints results for
    CLI</span></span>
-   We have updated the following tools to newer versions:  
    -   <span style="font-weight: 400;"><span
        sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Fixed issued that prevent Add project view from loading when user has substancial amount of repositories&quot;}"
        sheets-userformat="{&quot;2&quot;:513,&quot;3&quot;:[null,0],&quot;12&quot;:0}">Checkstyle
        version
        [8.12](http://checkstyle.sourceforge.net/releasenotes.html#Release_8.12)</span></span>
    -   <span style="font-weight: 400;"><span
        sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Fixed issued that prevent Add project view from loading when user has substancial amount of repositories&quot;}"
        sheets-userformat="{&quot;2&quot;:513,&quot;3&quot;:[null,0],&quot;12&quot;:0}">ESLint
        - eslint-plugin-promise to version
        [4.0.1](https://www.npmjs.com/package/eslint-plugin-promise)</span></span>
    -   <span style="font-weight: 400;"><span
        sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Fixed issued that prevent Add project view from loading when user has substancial amount of repositories&quot;}"
        sheets-userformat="{&quot;2&quot;:513,&quot;3&quot;:[null,0],&quot;12&quot;:0}">PMD
        version
        [6.4.0](https://github.com/pmd/pmd/releases/tag/pmd_releases%2F6.4.0)</span></span>
    -   <span style="font-weight: 400;"><span
        sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Fixed issued that prevent Add project view from loading when user has substancial amount of repositories&quot;}"
        sheets-userformat="{&quot;2&quot;:513,&quot;3&quot;:[null,0],&quot;12&quot;:0}">Brakeman
        version
        [4.3.1](https://brakemanscanner.org/blog/2018/06/06/brakeman-4-dot-3-1-released)</span></span>
    -   <span style="font-weight: 400;"><span
        sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Fixed issued that prevent Add project view from loading when user has substancial amount of repositories&quot;}"
        sheets-userformat="{&quot;2&quot;:513,&quot;3&quot;:[null,0],&quot;12&quot;:0}">Rubocop version
        [0.58.2](https://rubygems.org/gems/rubocop/versions/0.58.2)</span></span>
    -   <span style="font-weight: 400;"><span
        sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Fixed issued that prevent Add project view from loading when user has substancial amount of repositories&quot;}"
        sheets-userformat="{&quot;2&quot;:513,&quot;3&quot;:[null,0],&quot;12&quot;:0}">Tailor
        version
        [0.12.0](https://github.com/sleekbyte/tailor/releases)</span></span>
    -   <span style="font-weight: 400;"><span
        sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Fixed issued that prevent Add project view from loading when user has substancial amount of repositories&quot;}"
        sheets-userformat="{&quot;2&quot;:513,&quot;3&quot;:[null,0],&quot;12&quot;:0}">Shellcheck version
        [0.5.0](https://github.com/koalaman/shellcheck/releases/tag/v0.5.0)</span></span>
    -   <span style="font-weight: 400;"><span
        sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Fixed issued that prevent Add project view from loading when user has substancial amount of repositories&quot;}"
        sheets-userformat="{&quot;2&quot;:513,&quot;3&quot;:[null,0],&quot;12&quot;:0}">PHP
        Codesniffer
        version [2.9.1](https://pear.php.net/package/PHP_CodeSniffer/download/2.9.1)</span></span>
    -   <span style="font-weight: 400;"><span
        sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Fixed issued that prevent Add project view from loading when user has substancial amount of repositories&quot;}"
        sheets-userformat="{&quot;2&quot;:513,&quot;3&quot;:[null,0],&quot;12&quot;:0}">Hadolint
        version
        [1.13.0](http://hackage.haskell.org/package/hadolint-1.13.0)</span></span>
    -   <span style="font-weight: 400;"><span
        sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Fixed issued that prevent Add project view from loading when user has substancial amount of repositories&quot;}"
        sheets-userformat="{&quot;2&quot;:513,&quot;3&quot;:[null,0],&quot;12&quot;:0}">SQLint version [0.1.8](https://rubygems.org/gems/sqlint/versions/0.1.8)</span></span>
    -   <span style="font-weight: 400;"><span
        sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Fixed issued that prevent Add project view from loading when user has substancial amount of repositories&quot;}"
        sheets-userformat="{&quot;2&quot;:513,&quot;3&quot;:[null,0],&quot;12&quot;:0}">Stylelint version [9.4.0](https://stylelint.io/CHANGELOG/#940)</span></span>
    -   Credo
        version [0.10.1](https://github.com/rrrene/credo/blob/master/CHANGELOG.md#0101)
-   And added the below new tools:
    -   [Flawfinder](https://github.com/codacy/codacy-flawfinder) for
        C/C++.
    -   <span style="font-weight: 400;"><span
        sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Fixed issued that prevent Add project view from loading when user has substancial amount of repositories&quot;}"
        sheets-userformat="{&quot;2&quot;:513,&quot;3&quot;:[null,0],&quot;12&quot;:0}">[RemarkLint](https://github.com/codacy/codacy-remark-lint) for
        Markdown. Configuration filenames can be found
        [here](https://support.codacy.com/hc/en-us/articles/207994335-Code-Patterns#5-existing-tools).</span></span>

**Bug fixes:**

-   <span style="font-weight: 400;"><span
    sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Fixed issued that prevent Add project view from loading when user has substancial amount of repositories&quot;}"
    sheets-userformat="{&quot;2&quot;:513,&quot;3&quot;:[null,0],&quot;12&quot;:0}">Fixed
    an issue that prevented the "Add project" view from loading at
    times.</span></span>
-   <span style="font-weight: 400;"><span
    sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Fixed issued that prevent Add project view from loading when user has substancial amount of repositories&quot;}"
    sheets-userformat="{&quot;2&quot;:513,&quot;3&quot;:[null,0],&quot;12&quot;:0}">Added
    additional information to the new badges to maintain compatibility
    with shields.io badges.</span></span>
-   <span style="font-weight: 400;"><span
    sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Fixed issued that prevent Add project view from loading when user has substancial amount of repositories&quot;}"
    sheets-userformat="{&quot;2&quot;:513,&quot;3&quot;:[null,0],&quot;12&quot;:0}">Fixed
    the bug that prevented projects from being added due to timeout when
    creating git hooks</span></span>
-   <span style="font-weight: 400;"><span
    sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Fixed issued that prevent Add project view from loading when user has substancial amount of repositories&quot;}"
    sheets-userformat="{&quot;2&quot;:513,&quot;3&quot;:[null,0],&quot;12&quot;:0}">Fixed
    the bug that prevented projects from analyzing when a file had too
    long text lines</span></span>
-   <span style="font-weight: 400;"><span
    sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Fixed issued that prevent Add project view from loading when user has substancial amount of repositories&quot;}"
    sheets-userformat="{&quot;2&quot;:513,&quot;3&quot;:[null,0],&quot;12&quot;:0}">Fixed
    a bug that prevented comments from getting created in the git
    provider</span></span>
