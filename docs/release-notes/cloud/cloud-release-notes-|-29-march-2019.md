# Cloud Release Notes | 29 March 2019

**Product Enhancements**

<span style="font-weight: 400;">We now integrate with </span>[<span
style="font-weight: 400;">Bitbucket using
OAuth2</span>](/hc/en-us/articles/360018049713)<span
style="font-weight: 400;">. This has allowed us to reduce the level of
permissions we require when you integrate Codacy with your Bitbucket
account</span>

<span style="font-weight: 400;">We updated TSLint to version
[5.14.0](https://www.npmjs.com/package/tslint/v/5.14.0)</span>

<span style="font-weight: 400;">As a way of improving performance, we’ve
stopped analysis for inactive, free and open source accounts and we’ve
communicated to those impacted by this measure. This was done so we
could allocate more resources to people that are actively using
Codacy.</span>

<span style="font-weight: 400;">We removed the option to add projects
using git URL. Projects that were added before the 12th Feb 2019 will
continue to be analyzed as usual.</span>

<span style="font-weight: 400;">As part of our performance improvement
measures, we’ve implemented an upper limit of 150 kb for file sizes that
should be considered for analysis. This means that:</span>

-   <span style="font-weight: 400;">These files will not show in the UI
    as ignored</span>
-   <span style="font-weight: 400;">Some projects that weren’t analysing
    before will now be able to analyse</span>
-   <span style="font-weight: 400;">Some projects will take less time to
    analyse</span>
-   <span style="font-weight: 400;">Some projects will have fewer issues
    as third party libraries issues covered by this limit will not
    show</span>
-   <span style="font-weight: 400;">Some projects will have more issues
    because the analysis batch in which they are inserted will not
    fail</span>
-   <span style="font-weight: 400;">Although most of the files that are
    now being ignored will be third-party dependencies and generated
    files, there is still the chance that some files that are actually
    development code and should be analysed won’t be. This is a global
    setting and is currently not customizable per client (that option is
    only available for Self-hosted customers)</span>
-   <span style="font-weight: 400;">We removed the option to add
    projects using git URL. Projects that were added before the 12th Feb
    2019 will continue to be analyzed as usual.</span>

**Bug fixes**

-   <span style="font-weight: 400;">Fixed a bug where it wasn’t possible
    to unignore a file </span>
-   <span style="font-weight: 400;">Fixed a bug where it wasn’t possible
    to add Bitbucket integration in the project Settings ->
    Integrations page</span>
-   <span style="font-weight: 400;">Fixed a bug where pull requests
    weren’t analysing when a branch was renamed </span>
-   <span style="font-weight: 400;">Fixed a bug where the “Unignore
    issue” button wasn’t working</span>
-   <span style="font-weight: 400;">Fixed a bug where webhook
    notifications were being sent with incomplete information</span>
-   <span style="font-weight: 400;">Fixed a bug that prevented users to
    save changes in project Settings when using Firefox 61</span>
-   <span style="font-weight: 400;">Fixed a bug with PHP Code Sniffer
    “PHPCS_Internal” pattern that was generating false positives</span>
-   <span style="font-weight: 400;">Fixed a bug with PHP Code Sniffer
    deprecated parameters “customSanitizingFunctions property” and
    “WordPress.CSRF.NonceVerification" that were generating false
    positives </span>
-   <span style="font-weight: 400;">Fixed a bug that was causing
    CppCheck to fail analysis</span>
-   <span style="font-weight: 400;">Fixed a bug where the Merged Pull
    Requests view was showing a blank page</span>
-   <span style="font-weight: 400;">Fixed a bug where it wasn’t possible
    to invite new team members from the Commit page</span>
-   <span style="font-weight: 400;">Fixed a bug where Codacy status page
    link was broken</span>
-   <span style="font-weight: 400;">Fixed a bug where it wasn’t possible
    to remove a user from an organization if the user had a special
    character in the name</span>
-   <span style="font-weight: 400;">Fixed a bug where some links in the
    </span>[<span
    style="font-weight: 400;">https://security.codacy.com/</span>](https://security.codacy.com/)<span
    style="font-weight: 400;"> page were broken</span>
-   <span style="font-weight: 400;">Fixed a bug where a user was having
    to confirm access to their Bitbucket account every time they logged
    in to Codacy</span>
-   <span style="font-weight: 400;">Fixed a bug where the link to "See
    all files" on the coverage applet in the project dashboard wasn’t
    clickable</span>
-   <span style="font-weight: 400;">Fixed a typo in Pull Requests page
    in the “possible fixed issues” message</span>
