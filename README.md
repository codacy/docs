# Codacy documentation

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/5e8bce49e0df4be8a880f2df02759d88)](https://app.codacy.com/gh/codacy/docs/dashboard?utm_source=github.com&utm_medium=referral&utm_content=codacy/docs&utm_campaign=Badge_Grade) [![build](https://github.com/codacy/docs/workflows/mkdocs/badge.svg)](https://github.com/codacy/docs/actions)

<https://docs.codacy.com> (🚧 Work in progress)

## Previewing docs locally

[Build and preview](https://www.mkdocs.org/#getting-started) the generated HTML on your machine to validate your changes:

1.  Clone the codacy/docs repository, including the submodules, and change into the local copy directory:

    ```bash
    git clone --recursive git@github.com:codacy/docs.git
    cd docs
    ```

2.  Check that you have [Python 3](https://www.python.org/downloads/) and [pip](https://pip.pypa.io/en/stable/) installed and install them if you don't:

    ```bash
    python3 --version
    pip3 --version
    ```

3.  Install the requirements for building the static HTML pages using MkDocs:

    ```bash
    pip3 install -r requirements.txt
    ```

4.  Build the static HTML pages and launch a local web server that allows you to easily see the generated pages as soon as you make any changes to the Markdown files:

    ```bash
    mkdocs serve
    ```

## Deploying to GitHub Pages

A [GitHub workflow](https://github.com/codacy/docs/blob/master/.github/workflows/mkdocs.yml) automatically deploys the generated HTML to GitHub Pages on every push to `master` or to the release branches `release/v.*`.

## What is Codacy

[Codacy](https://www.codacy.com/) is an automated code review tool that monitors your technical debt, helps you improve your code quality, teaches best practices to your developers, and helps you save time in code reviews.

### Among Codacy's features

-   Identify new static analysis issues
-   Commit and pull request analysis with GitHub, Bitbucket, and GitLab
-   Auto-comments on commits and pull requests
-   Integrations with Slack, Jira
-   Track issues in code style, security, error proneness, performance, unused code and other categories

Codacy also helps keep track of code coverage, code duplication, and code complexity.

Codacy supports PHP, Python, Ruby, Java, JavaScript, and Scala, among others.

### Free for Open Source

Codacy is free for Open Source projects.
