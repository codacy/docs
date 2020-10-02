# How to contribute

You're welcome to make fixes and changes to the documentation. Here are a few steps to get you going.

## Authoring documentation pages

### Previewing docs locally

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

### Markdown conventions

Follow these Markdown conventions when editing the documentation:

-   Name new Markdown files based on the title of the page, in lowercase and substituting spaces with hyphens. For example, `getting-started-with-codacy.md` for the page "Getting started with Codacy".

    When you create a new markdown file, you must also add it to the `nav` section of the [`mkdocs.yml`](mkdocs.yml) file. This is what places the new page in the correct place of the table of contents of the documentation.

    If you're renaming an existing page, be sure to add a redirect to the `redirect_maps` section of the [`mkdocs.yml`](mkdocs.yml) file. This helps avoid broken links to the documentation.

-   Place images in a folder `images` next to your Markdown files and give them a descriptive name, also in lowercase and substituting spaces with hyphens. When referencing the images don't forget to write a descriptive alternative text:

    ```markdown
    ![Adding an organization](images/organization-add.png)
    ```

-   Use hyphens to generate unordered lists and `1.` to generate ordered lists. Always use 4 spaces to indent list items. For example:

    ```markdown
    This is an unordered list:

    -   Item 1
    -   Item 2

        Nested content under Item 2

    -   Item 3

    This is an ordered list:

    1.  Item 1
    1.  Item 2
    
        1. Item 2.1
    ```

-   When adding links to pages outside the documentation, add the attribute `target="_blank"` to open the linked page in a new window. For example:

    ```markdown
    See our [public roadmap](https://roadmap.codacy.com/){: target="_blank"}.
    ```

-   Use the [Admonitions syntax](https://squidfunk.github.io/mkdocs-material/reference/admonitions/#usage) to include notes and warnings, or to highlight important information. For example:

    ```markdown
    !!! note
        This feature is not supported for pull requests.
    ```

If you are unsure about the best syntax or way to convey information in Markdown, search for similar examples on the existing Markdown files.

### Making changes to the documentation

Create pull requests to make changes to the documentation:

1.  Create a topic branch from where you want to base your work. Typically, this will be the branch `master`, which contains the latest version of the documentation.

1.  Make commits of logical and atomic changes.

1.  When you're ready to ask for a review on your work, open a pull request.

    It really helps if you can provide all the context necessary for the review, or pointers to more information, on the description of the pull request.

1.  Make sure that the documentation pages build successfully and that you have an approval from relevant stakeholders.

1.  Merge the pull request using the "merge commit" strategy.

### Deploying the documentation to GitHub Pages

A [GitHub workflow](https://github.com/codacy/docs/blob/master/.github/workflows/mkdocs.yml) automatically deploys the generated HTML to GitHub Pages on every push to `master` or to the release branches `release/v*`.

**Never use mkdocs directly to deploy the documentation**, since that would overwrite the contents of the `gh-pages` branch and we would lose the multiple versions of the documentation.

## Releasing a new version of the documentation

We must release a new version of the documentation when there is a new **major or minor** release of the [Codacy Self-hosted chart](https://github.com/codacy/chart). This involves updating the documentation of the chart on the Latest version of the documentation as well as creating a dedicated documentation version for the new release.

### Updating the Latest documentation version

First, update the Latest documentation version with the new chart documentation:

1.  Create a new branch to update the Latest documentation version.

1.  Edit the file [`.gitmodules`](.gitmodules) and update the branch of the chart submodule to the correct release branch. For example:

    ```text
    [submodule "submodules/chart"]
        path = submodules/chart
        url = https://github.com/codacy/chart
        branch = release-2.0.0
    ```

1.  Make sure that you pull the latest changes from this branch of the chart submodule.

    ```bash
    cd submodules/chart
    git checkout release-2.0.0
    git pull
    cd ../..
    ```

1.  Edit the file [`mkdocs.yml`](mkdocs.yml) and update the value of the variable `extra.version` to the correct version of the chart.

1.  Build the documentation and make sure that the changes for the new release of the chart are correct.

1.  Open a pull request with this changes and merge the branch into `master`.

### Creating a new documentation version

After updating the Latest documentation version, we're ready to create a new documentation version:

1.  Create a new release branch with the name `release/v<MAJOR>.<MINOR>` from the now updated `master` branch.

1.  Delete the release notes from the release branch, since we're only publishing the release notes on the Latest or main version of the documentation.

    Delete the folder `docs/release-notes` and all references to the files in this folder from the file `mkdocs.yml`.

1.  Delete the existing redirects, since it does not make sense to repeat them under each Codacy Self-hosted version.

    Delete the YAML block `plugins.redirects` from the file `mkdocs.yml`.

1.  Build the documentation and make sure that the changes for the new release of the chart are correct.

1.  Push the new branch and wait until the GitHub workflow deploys the new documentation version under `https://docs.codacy.com/v<MAJOR>.<MINOR>`.

## Updating an existing version of the documentation

We must update an existing version of the documentation when there is a new **patch release** of the [Codacy Self-hosted chart](https://github.com/codacy/chart).

To do this, you must update the documentation of the chart on the:

-   [Latest version of the documentation](#updating-the-latest-documentation-version)
-   Corresponding version of the documentation (for example, v2.0)

    Follow the instructions on [updating the Latest documentation version](#updating-the-latest-documentation-version), but when updating the corresponding version of the documentation commit the changes to that release branch instead of `master`. For example, `release/v2.0`.

### Applying documentation hotfixes to existing chart releases

Sometimes it may be necessary to apply important documentation fixes to existing chart releases. This is typically done on the latest chart release, but depending on the fix, it may be necessary to apply it to older versions as well.

To apply an hotfix to an existing chart release:

1.  Use a pull request to apply the changes to the `master` branch of the chart. This ensures that the fixes will also be available on the next chart version.

1.  Checkout the chart branch to apply the hotfix and cherry-pick one or more changes:

    ```bash
    git checkout release-x.x.x
    git cherry-pick --no-commit -m 1 <commit UUID 1>
    git cherry-pick --no-commit -m 1 <commit UUID 2>

1.  Build the docs and validate the changes locally to ensure everything is OK.

1.  Commit the changes to the release branch but **skip triggering the CircleCI workflow**:

    ```bash
    git add .
    git commit -m "Cherry-pick pull request #xxx and #yyy [ci skip]"

    ```

1.  Update the git tag to point to the new commit:

    ```bash
    git tag -f x.x.x
    git push --force origin --tags
    ```

    This ensures that if we perform a bugfix release to the chart, the branch will be sourced from the tag pointing to the most recent commit and all hotfixes are included in the new bugfix release.

1.  Finally, follow the instructions to deploy the updated documentation for the chart version that received the hotfix:

    -   [Updating an existing version of the documentation](#updating-an-existing-version-of-the-documentation)
    -   [Updating the Latest documentation version](#updating-the-latest-documentation-version)
