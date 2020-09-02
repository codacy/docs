# Self-hosted v2.0.362

These updates won’t be available if you are still using Codacy Legacy
version. If you want to update Codacy to the newest version, please
contact us,
and we will schedule a call to assist you with the migration. Below is
the list of enhancements and bug fixes available with this update.

## Product Enhancements

<span style="font-weight: 400;">We now support Crystal language using
</span>[<span
style="font-weight: 400;">Ameba</span>](https://github.com/codacy/codacy-ameba)

<span style="font-weight: 400;">As a way to improve performance we’ve
implemented an upper bound limit for file sizes that should be
considered for analysis of 150 kb. This means that: </span>

-   <span style="font-weight: 400;">Some projects that weren’t analysing
    before will now be able to analyse</span>
-   <span style="font-weight: 400;">Some projects will take less time to
    analyse</span>
-   <span style="font-weight: 400;">Some projects will have less issues
    as third party libraries issues covered by this limit will not
    show</span>
-   <span style="font-weight: 400;">Some projects will have more issues
    because the analysis batch in which they are inserted will not
    fail</span>
-   <span style="font-weight: 400;">These files will not show in the UI
    as ignored</span>
-   <span style="font-weight: 400;">Although most of the files that are
    now being ignored will be third-party dependencies and generated
    files, there is still the chance that some files that are actually
    development code and should be analysed won’t be. If you have any
    files over this limit and consider necessary to analyze them, please
    reach out to us

<span style="font-weight: 400;">Another measure taken to improve
performance was to remove the ability to add projects using Git url,
however, any projects that were manually added prior to this release
should continue to analyse as usual</span>

<span style="font-weight: 400;">We added several additional configurable
options to the control panel, so Codacy can be more easily adaptable to
specific use cases:</span>

-   <span style="font-weight: 400;">Public monitoring: you can now give
    Crow visibility to all users, instead of only Codacy Admins. This
    can be configured through the Control Panel -> Configure ->
    Monitoring </span>
-   <span style="font-weight: 400;">Polling time; analysis inactivity
    timeout and Analysis tool timeout are now configurable values on the
    Control Panel: this may be useful, particularly if you have very
    large projects that take a long time to analyse, which may cause
    some tools to time out. If you’re experiencing any troubles with
    your analysis, you should reach out and we’ll assist with any necessary
    changes;</span>

## Bug fixes

-   <span style="font-weight: 400;">Fixed a bug that was showing
    non-existent Stylelint patterns in the UI</span>
-   <span style="font-weight: 400;">Fixed a bug where the default
    patterns 'Active' filter wasn’t working in the Admin view</span>
-   <span style="font-weight: 400;">Fixed a bug where the “Unignore
    issue” button wasn’t working</span>
-   <span style="font-weight: 400;">Fixed a bug related with duplicated
    ignored files which was slowing down the start of the
    analysis</span>
-   <span style="font-weight: 400;">Fixed a bug where Codacy was making
    inconsistent comments to Gitlab, as in some occasions this would
    show as a list of issues and in other situations there would be
    comments in the actual line of code</span>
-   <span style="font-weight: 400;">Fixed a bug that prevented users to
    save changes in project Settings when using Firefox 61</span>
-   <span style="font-weight: 400;">Fixed a bug in the project dashboard
    that where the link to “See all issues” was broken</span>
-   <span style="font-weight: 400;">Fixed a bug in Admin settings where
    the option to "Allow all users to add projects" behaviour was
    reversed</span>
-   <span style="font-weight: 400;">Fixed a bug with analysis priorities
    that caused some projects ending up with negative priorities</span>
-   <span style="font-weight: 400;">Fixed a bug with
    Cppcheck</span><span style="font-weight: 400;"> that was causing
    some analysis to fail, by adding a multithreaded flag to disable
    \`unusedFunction\` checking </span>
