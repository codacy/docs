---
rss_title: Codacy release notes RSS feed
rss_href: /feed_rss_created.xml
---

# Major Update of ESLint April 4th, 2022

On April 4th 2022 we'll be updating the tool **ESLint** to version 8.10.0.

ESLint 8 introduces some breaking changes that may affect your repositories, especially if you use a configuration file.

## If you were using the `babel-eslint` parser

The `babel-eslint` parser was renamed to `@babel/eslint-parser`.
`@babel/eslint-parser` has stricter requirements compared to its predecessor.
To relax these requirements you'll need to add `requireConfigFile: false` to your `parserOptions` like:

```diff
-  parser: "babel-eslint",
+  parser: "@babel/eslint-parser",
+  parserOptions: {
+    requireConfigFile: false,
+  },
```

### If you're using React's `jsx`

If you have jsx files in your repository, you will need to select the babel react preset:
```diff
   parser: "@babel/eslint-parser",
   parserOptions: {
     requireConfigFile: false,
+    babelOptions: {
+      presets: ["@babel/preset-react"],
+    },
   },
```

## If you were using `m6web-i18n`

The `m6web-i18n` plugin was renamed to `@m6web/i18n`.

You need to update it in `plugins` in your `.eslintrc` like:
```diff
     plugins: [
-        "m6web-i18n"
+        "@m6web/i18n"
     ],
     rules: {
-        "m6web-i18n/no-unknown-key": "error",
+        "@m6web/i18n/no-unknown-key": "error",
     },
```

## Still need help?

If you have any questions or need help, please contact <mailto:support@codacy.com>.
