# Self-hosted v2.0.366

## Product Enhancements

-   <span style="font-weight: 400;">We updated TSLint to version
    </span>[<span
    style="font-weight: 400;">5.14.0</span>](https://www.npmjs.com/package/tslint/v/5.14.0)

## Bug fixes

-   <span style="font-weight: 400;">Fixed a bug that allowed users who
    weren’t logged in to access public projects. Despite projects being
    public, as long as they require authentication in the git provider
    (GitHub or Gitlab), they are now all treated as private in Codacy,
    and only logged in users may access them. </span>
-   <span style="font-weight: 400;">Fixed a bug where it wasn’t possible
    to remove a user from an organization if the user had a special
    character in the name</span>
-   <span style="font-weight: 400;">Fixed a bug in the setup of Gitlab
    integration</span>
