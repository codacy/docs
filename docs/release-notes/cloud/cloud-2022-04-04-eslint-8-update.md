---
rss_title: Codacy release notes RSS feed
rss_href: /feed_rss_created.xml
---

# Update of ESLint to version 8 with breaking changes April 4, 2022

On April 4, 2022 Codacy will be updating the tool ESLint to version 8.10.0. ESLint 8 [introduces breaking changes](https://github.com/eslint/eslint/releases/tag/v8.0.0){: target="_blank"} that may affect the analysis of your repositories if you use an [ESLint configuration file](https://eslint.org/docs/user-guide/configuring/configuration-files){: target="_blank"}.

**If you're using ESLint with a configuration file in the scenario described below** you must update your ESLint configuration file after April 4, 2022 for Codacy to continue analyzing your code using this tool.

## If you're using the deprecated `babel-eslint` parser

The `babel-eslint` parser was deprecated in the 26/2/2020 in favor of `@babel/eslint-parser` and removed in ESLint 8.
`@babel/eslint-parser` has stricter requirements compared to its predecessor.

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
