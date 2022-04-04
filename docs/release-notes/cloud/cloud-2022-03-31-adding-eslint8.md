---
rss_title: Codacy release notes RSS feed
rss_href: /feed_rss_created.xml
---

# Adding ESLint 8 as a supported tool March 31, 2022

On March 31, 2022 Codacy is adding ESLint 8 as a new supported tool and deprecating ESLint 7:

-   ESLint 8 will be enabled by default on new repositories and Codacy recommends that you migrate to this version of the tool to benefit from the new features and fixes of ESLint

-   ESLint 7 will still be available but Codacy will stop providing updates for this version of the tool, and will remove it completely on April 4, 2023.

[See this post on the Codacy Community](https://community.codacy.com/) for more details on this update.

## Migrating your configuration files to use ESLint 8

ESLint 8 [introduces breaking changes](https://eslint.org/docs/8.0.0/user-guide/migrating-to-8.0.0){: target="_blank"} that may affect the analysis of your repositories.

**If you're using an [ESLint configuration file](https://eslint.org/docs/user-guide/configuring/configuration-files){: target="_blank"} with the parser `babel-eslint`** you must update your configuration file before enabling ESLint 8 on Codacy:

-   The `babel-eslint` parser was deprecated on February 26, 2020 in favor of `@babel/eslint-parser` and removed in ESLint 8. `@babel/eslint-parser` has stricter requirements compared to its predecessor. If you're using `babel-eslint` you must update it and relax the requirements:

    ```diff
    -  parser: "babel-eslint",
    +  parser: "@babel/eslint-parser",
    +  parserOptions: {
    +    requireConfigFile: false,
    +  },
    ```

-   Additionally, if you have `.jsx` files in your repository you must select the Babel React preset:

    ```diff
      parser: "@babel/eslint-parser",
      parserOptions: {
        requireConfigFile: false,
    +    babelOptions: {
    +      presets: ["@babel/preset-react"],
    +    },
      },
    ```

If you have any questions or need help, please contact <mailto:support@codacy.com>.
