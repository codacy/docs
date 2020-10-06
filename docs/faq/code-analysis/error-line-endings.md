# Error caused by incompatible line endings

Codacy executes the `git diff` command when analyzing new commits and pull requests to identify the lines of code that were changed. Codacy then uses this information to display the issues that were caused by the changes introduced by the commits or pull requests.

If you have files in your repository that use the carriage return (CR) as the line end control character, the command `git diff` does not correctly identify line endings in the changed files. Because of this, Codacy is unable to use the output of the command and you will see the following error in the your commit or pull request analysis logs:

```text
We found an error caused by incompatible line endings while comparing changes with git diff.
```

![View analysis logs](images/diff-failure-view-logs.png)

The CR line end control character was used by older Classic Mac OS systems, and for the sake of interoperability it is recommended that you [update the line endings in your source code files](https://en.wikipedia.org/wiki/Newline#Conversion_between_newline_formats) to use either the control characters:

-   LF, if primarily using Unix-like systems such as Linux or the newer macOS operating system
-   CRLF, if primarily using the Microsoft Windows operating system

## See also

After converting the line endings in your source code files, you may also want to check the following external resources for help on standardizing the line endings on your repositories and how to configure Git to correctly handle line endings:

-   [What's the recommended way to store files in Git?](https://git-scm.com/docs/gitfaq#Documentation/gitfaq.txt-What8217stherecommendedwaytostorefilesinGit)
-   [Customizing Git - Formatting and Whitespace](https://git-scm.com/book/en/Customizing-Git-Git-Configuration#_formatting_and_whitespace)
-   [Configuring Git to handle line endings](https://docs.github.com/en/github/using-git/configuring-git-to-handle-line-endings)
-   [Mind the End of Your Line](https://adaptivepatchwork.com/2012/03/01/mind-the-end-of-your-line/)
