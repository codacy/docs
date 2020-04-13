# Codacy documentation

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/5e8bce49e0df4be8a880f2df02759d88)](https://www.codacy.com?utm_source=github.com&utm_medium=referral&utm_content=codacy/docs&utm_campaign=Badge_Grade) [![build](https://github.com/codacy/docs/workflows/mkdocs/badge.svg)](https://github.com/codacy/docs/actions)

<http://docs.dev.codacy.org>

## Preview docs locally

[Build and preview](https://www.mkdocs.org/#getting-started) the generated HTML on your machine to validate your changes:

1.  Clone the codacy/docs repository, including the submodules:

    ```bash
    git clone --recursive git@github.com:codacy/docs.git
    ```

2.  Check that you have [Python 3](https://www.python.org/downloads/) and [pip](https://pip.pypa.io/en/stable/) installed and install them if you don’t:

    ```bash
    python3 --version
    pip3 --version
    ```

3.  Change to the docs directory and install the requirements for building the static HTML pages using MkDocs:

    ```bash
    cd docs
    pip3 install -r requirements.txt
    ```

4.  Build the static HTML pages and launch a local web server that allows you to easily see the results in as soon as you save any changes:

    ```bash
    mkdocs serve
    ```

## Manually publish to GitHub Pages

A [GitHub workflow](https://github.com/codacy/docs/blob/master/.github/workflows/mkdocs.yml) automatically deploys the generated HTML to GitHub Pages on every push to `master`.

However, you can also [manually deploy](http://www.mkdocs.org/user-guide/deploying-your-docs/) the pages if needed:

```bash
mkdocs gh-deploy
```

## What is Codacy

[Codacy](https://www.codacy.com/) is an automated code review tool that monitors your technical debt, helps you improve your code quality, teaches best practices to your developers, and helps you save time in code reviews.

### Among Codacy’s features

-   Identify new static analysis issues
-   Commit and pull request analysis with GitHub, BitBucket, GitLab (and also direct Git repositories)
-   Auto-comments on commits and pull requests
-   Integrations with Slack, Jira
-   Track issues in code style, security, error proneness, performance, unused code and other categories

Codacy also helps keep track of code coverage, code duplication, and code complexity.

Codacy supports PHP, Python, Ruby, Java, JavaScript, and Scala, among others.

### Free for Open Source

Codacy is free for Open Source projects.
