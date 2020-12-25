# Adding a Codacy badge

You can add a Codacy badge to the README of your repository to display the current code quality grade or code coverage.

To obtain your Codacy badge, open your repository **Settings**, tab **General**, select the markup language, and copy the generated code to your README file. If you have set up code coverage for your repository, you can also add a badge for your coverage.

![](images/codacy-badge.png)

If you want the Codacy badge to display information for a different branch, specify the name of the branch by appending the query parameter `branch=<branch_name>` to the URL of the badge. For example:

```text
https://app.codacy.com/project/badge/Grade/cba8fd0874ac4f569f4f880e473cbac9?branch=dev
```
