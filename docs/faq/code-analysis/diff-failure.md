# Error while generating or parsing your diff

Codacy executes the `git diff` command when analyzing new commits and pull requests to identify the lines of code that were changed. Codacy then uses this information to display the issues that were caused by the changes introduced by the commits or pull requests.

If you have files in your repository that use the carriage return (CR) as the line end control character, the command `git diff` does not correctly identify line breaks in the changed files. Because of this, Codacy is unable to use the output of the command and you will see the following error in the your commit or pull request analysis logs:

```text
<final error message here>
```

![View analysis logs](images/diff-failure-view-logs.png)

The CR line end control character was used by older Mac OS systems, and for the sake of interoperability it is recommended that you update your source code files to use either the control characters CRLF (if primarily using Microsoft Windows) or LF (if primarily using Unix-like systems such as Linux or the newer macOS operating system).

See the following external resources for help on standardizing the line endings on your projects and how to configure Git to correctly handle line endings:

-   [Configuring Git to handle line endings](https://docs.github.com/en/github/using-git/configuring-git-to-handle-line-endings)
-   [Mind the End of Your Line](https://adaptivepatchwork.com/2012/03/01/mind-the-end-of-your-line/)
