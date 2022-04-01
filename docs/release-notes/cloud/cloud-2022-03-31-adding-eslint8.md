---
rss_title: Codacy release notes RSS feed
rss_href: /feed_rss_created.xml
---

# Adding ESLint 8 as a supported tool March 31, 2022

On March 31, 2022 Codacy is adding ESLint 8 as a new supported tool. ESLint 7 will no longer be updated and Codacy will remove version 7 of ESLint from Codacy on April 4, 2023. [See this post](https://community.codacy.com)<!--TODO Update link--> on the Codacy Community for more details on this update.

Codacy recommends that you migrate to the new version of the tool to ensure that you benefit from the new features and fixes of ESLint 8.

## Migrating to ESLint 8

Migrating to ESLint 8 is different depending 

ESLint 8 [introduces breaking changes](https://eslint.org/docs/8.0.0/user-guide/migrating-to-8.0.0){: target="_blank"} that may affect the analysis of your repositories if you use an [ESLint configuration file](https://eslint.org/docs/user-guide/configuring/configuration-files){: target="_blank"}.

**If you're using the parser `babel-eslint` using a ESLint configuration file** you must perform the changes below after April 4, 2022 for Codacy to continue analyzing your code using this tool.

### Updating your ESLint configuration file

The `babel-eslint` parser was deprecated on February 26, 2020 in favor of `@babel/eslint-parser` and removed in ESLint 8. `@babel/eslint-parser` has stricter requirements compared to its predecessor.

If you're using `babel-eslint` you must update it and relax the requirements:

```diff
-  parser: "babel-eslint",
+  parser: "@babel/eslint-parser",
+  parserOptions: {
+    requireConfigFile: false,
+  },
```

Additionally, if you have `.jsx` files in your repository you must select the Babel React preset:

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
