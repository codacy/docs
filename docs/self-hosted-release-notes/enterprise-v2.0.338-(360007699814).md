# Enterprise v2.0.338

<span style="font-weight: 400;">These updates won’t be available if you
are still using Codacy Legacy version. If you want to update Codacy to
the newest version please contact us, and we will schedule a call to assist you
with the migration. </span><span style="font-weight: 400;">Below is the
list of enhancements and bug fixes available with this update.</span>

<span style="font-weight: 400;">Improvements</span>

-   <span style="font-weight: 400;">We now Support [Git
    submodules](https://support.codacy.com/hc/en-us/articles/360005239394-Submodules-How-to-enable-them)
    for Bitbucket Stash: These allow you to keep a git repository as a
    subdirectory within another git repository. They are helpful in
    maintaining a shared configuration file for your team, which can
    then be applied to multiple git repositories. </span><span
    style="font-weight: 400;">Submodules allow you to address two main
    problems:
    </span>
    -   <span style="font-weight: 400;">Shared configuration for an
        organization while keeping your style guide consistent,
        versioned, and auditable.</span>
    -   <span style="font-weight: 400;">Reproducible configuration
        allowing you to run Codacy with the same analysis parameters
        locally and in Codacy. </span>
-   <span style="font-weight: 400;">Option to remove projects in Admin
    view: We’ve added a new button under </span>**Project details**<span
    style="font-weight: 400;"> that removes the viewed project.</span>
-   <span style="font-weight: 400;">Updated cppcheck to version
    </span>[<span
    style="font-weight: 400;">v1.84</span>](https://github.com/danmar/cppcheck/releases)<span
    style="font-weight: 400;">.</span>
-   <span style="font-weight: 400;">Updated Bundler Audit to version
    </span>[<span
    style="font-weight: 400;">v0.6.0</span>](https://github.com/rubysec/bundler-audit/blob/master/ChangeLog.md)<span
    style="font-weight: 400;">.</span>
-   <span style="font-weight: 400;">Updated SQLint to version
    [v0.1.7](https://rubygems.org/gems/sqlint/versions/0.1.7)</span>
-   <span style="font-weight: 400;">Improvement search bar on Admin -
    Enterprise: Search results are now displayed grouped by
    organization.</span>
-   <span style="font-weight: 400;">View on Codacy - at project list on
    Organization level: Now the link takes you directly to the admin
    view of the project.</span>
-   <span style="font-weight: 400;">Improved our error messages.  For
    example, under Open Pull requests, you’ll now get a clearer message
    as to why there are no pull requests when a project has been added
    through Git URL.</span>

<span style="font-weight: 400;">Bug fixes</span>

-   <span style="font-weight: 400;">npm modules are now available for
    ESLint: when running eslint, you can use the plugins from the
    configuration file listed </span>[<span
    style="font-weight: 400;">here</span>](https://github.com/codacy/codacy-eslint/blob/master/build.sbt#L44)<span
    style="font-weight: 400;">.</span>
-   <span style="font-weight: 400;">Wizard - GitURL SSH the key copy
    button now works as expected.</span>
