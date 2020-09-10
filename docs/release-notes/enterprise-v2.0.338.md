# Self-hosted v2.0.338

These updates won’t be available if you
are still using Codacy Legacy version. If you want to update Codacy to
the newest version please contact us, and we will schedule a call to assist you
with the migration. Below is the
list of enhancements and bug fixes available with this update.

## Improvements

-   We now Support [Git
    submodules](../user-guide/configure-your-repo/submodules-how-to-enable-them.md)
    for Bitbucket Stash: These allow you to keep a git repository as a
    subdirectory within another git repository. They are helpful in
    maintaining a shared configuration file for your team, which can
    then be applied to multiple git repositories. Submodules allow you to address two main
    problems:
    
    -   Shared configuration for an
        organization while keeping your style guide consistent,
        versioned, and auditable.
    -   Reproducible configuration
        allowing you to run Codacy with the same analysis parameters
        locally and in Codacy. 
-   Option to remove projects in Admin
    view: We’ve added a new button under **Project details** that removes the viewed project.
-   Updated cppcheck to version
    [v1.84](https://github.com/danmar/cppcheck/releases).
-   Updated Bundler Audit to version
    [v0.6.0](https://github.com/rubysec/bundler-audit/blob/master/ChangeLog.md).
-   Updated SQLint to version
    [v0.1.7](https://rubygems.org/gems/sqlint/versions/0.1.7)
-   Improvement search bar on Admin -
    Enterprise: Search results are now displayed grouped by
    organization.
-   View on Codacy - at project list on
    Organization level: Now the link takes you directly to the admin
    view of the project.
-   Improved our error messages.  For
    example, under Open Pull requests, you’ll now get a clearer message
    as to why there are no pull requests when a project has been added
    through Git URL.

## Bug fixes

-   npm modules are now available for
    ESLint: when running eslint, you can use the plugins from the
    configuration file listed [here](https://github.com/codacy/codacy-eslint/blob/master/build.sbt#L44).
-   Wizard - GitURL SSH the key copy
    button now works as expected.
