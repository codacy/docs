# Enterprise v2.0.339

<span style="font-weight: 400;">These updates won’t be available if you
are still using Codacy Legacy version. If you want to update Codacy to
the newest version, please contact us, and we will schedule a call to assist you
with the migration. </span><span style="font-weight: 400;">Below is the
list of enhancements and bug fixes available with this update.</span>

<span style="font-weight: 400;">Improvements
</span>

-   <span style="font-weight: 400;"><span
    sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Update grade and coverage badges look. Example: https://github.com/codacy/node-codacy-coverage#node-codacy-coverage&quot;}"
    sheets-userformat="{&quot;2&quot;:513,&quot;3&quot;:[null,0],&quot;12&quot;:0}">Updated
    look and feel of grade and coverage badges. Example:
    <https://github.com/codacy/node-codacy-coverage#node-codacy-coverage></span></span>
-   <span style="font-weight: 400;"><span
    sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Update grade and coverage badges look. Example: https://github.com/codacy/node-codacy-coverage#node-codacy-coverage&quot;}"
    sheets-userformat="{&quot;2&quot;:513,&quot;3&quot;:[null,0],&quot;12&quot;:0}">Introduced
    new optimization when cloning repositories reducing disk space
    usage. This may affect initial analysis performance after the update
    as the system recaches.</span></span>
-   <span style="font-weight: 400;"><span
    sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Update grade and coverage badges look. Example: https://github.com/codacy/node-codacy-coverage#node-codacy-coverage&quot;}"
    sheets-userformat="{&quot;2&quot;:513,&quot;3&quot;:[null,0],&quot;12&quot;:0}">Changed
    the behavior of "Generate a new SSH key" to also queue the project
    for analysis afterward.</span></span>
-   <span style="font-weight: 400;"><span
    sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Update grade and coverage badges look. Example: https://github.com/codacy/node-codacy-coverage#node-codacy-coverage&quot;}"
    sheets-userformat="{&quot;2&quot;:513,&quot;3&quot;:[null,0],&quot;12&quot;:0}">Fixed
    issue allowing duplicate accounts to be created and removed existing
    duplicate accounts.</span></span>

<span style="font-weight: 400;">Bug fixes</span>

-   <span style="font-weight: 400;"><span
    sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;website blocks requests with too many cookies&quot;}"
    sheets-userformat="{&quot;2&quot;:515,&quot;3&quot;:[null,0],&quot;4&quot;:[null,2,14281427],&quot;12&quot;:0}">Fixed
    an issue causing Codacy to reject web page requests after visiting
    many organizations.</span></span>
-   <span style="font-weight: 400;"><span
    sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;website blocks requests with too many cookies&quot;}"
    sheets-userformat="{&quot;2&quot;:515,&quot;3&quot;:[null,0],&quot;4&quot;:[null,2,14281427],&quot;12&quot;:0}">Fixed
    an issue where changing the team filter in project list redirected
    users to the organization dashboard.</span></span>
-   <span style="font-weight: 400;"><span
    sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;website blocks requests with too many cookies&quot;}"
    sheets-userformat="{&quot;2&quot;:515,&quot;3&quot;:[null,0],&quot;4&quot;:[null,2,14281427],&quot;12&quot;:0}">Fixed
    issue where the number of files covered reported in the project
    dashboard could be related to a different branch.</span></span>
-   <span style="font-weight: 400;"><span
    sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Update grade and coverage badges look. Example: https://github.com/codacy/node-codacy-coverage#node-codacy-coverage&quot;}"
    sheets-userformat="{&quot;2&quot;:513,&quot;3&quot;:[null,0],&quot;12&quot;:0}">Fixed
    an issue causing some application to hang if Datadog wasn't
    started.</span></span>
