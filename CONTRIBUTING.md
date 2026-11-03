# How to contribute

You're welcome to make fixes and changes to the documentation. Here are a few steps to get you going:

-   [Authoring documentation pages](#authoring-documentation-pages)
-   [Working on the documentation theme](#working-on-the-documentation-theme)
-   [Releasing a new Codacy Self-hosted documentation version](#releasing-a-new-codacy-self-hosted-documentation-version)
-   [Updating an existing Codacy Self-hosted documentation version](#updating-an-existing-codacy-self-hosted-documentation-version)

## Authoring documentation pages

### Previewing docs locally

[Build and preview](https://www.mkdocs.org/#getting-started) the generated HTML on your machine to validate your changes:

1.  Clone the `codacy/docs` repository and change into the local copy directory:

    ```bash
    git clone https://github.com/codacy/docs.git
    cd docs
    ```

1.  Check that you have [Python 3](https://www.python.org/downloads/) and [pip](https://pip.pypa.io/en/stable/) installed and install them if you don't:

    ```bash
    python3 --version
    pip3 --version
    ```

1.  Install the requirements for building the static HTML pages using MkDocs:

    ```bash
    pip3 install -r requirements.txt
    ```

1.  Build the static HTML pages and launch a local web server that allows you to conveniently see the generated pages as soon as you make any changes to the Markdown files:

    ```bash
    mkdocs serve
    ```

### Working on the documentation theme

The documentation uses the installed `mkdocs-material` package with a small,
Codacy-owned theme layer in [`theme/`](theme/). This is
the current theme source of truth.

The theme is intentionally plain CSS and minimal Jinja overrides:

-   [`theme/stylesheets/tokens.css`](theme/stylesheets/tokens.css)
    defines the Codacy color tokens and Material color mappings.
-   The visual styling lives in [`theme/stylesheets/`](theme/stylesheets/),
    split by concern (`base`, `header`, `navigation`, `content`, `home`,
    `footer`, `layout`, `responsive`) and loaded in that order via `extra_css`.
    The files are plain, comment-free CSS; keep a rule in the file that matches
    its concern, and keep `extra_css` in cascade order (it layers over the
    Material package, so order and specificity are what make an override win).
-   [`theme/main.html`](theme/main.html) and its
    [`partials/`](theme/partials/) retain only the overrides and
    integrations that Codacy needs.
-   [`mkdocs.yml`](mkdocs.yml) connects this layer through `theme.custom_dir`
    and loads the small supporting browser scripts and stylesheets.

Several partials under [`theme/partials/`](theme/partials/) (for example
`nav-item.html`, `header.html`, `search.html`, and `toc.html`) are derived from
the equivalent templates in the `mkdocs-material` version pinned in
[`requirements.txt`](requirements.txt) and then trimmed to Codacy's needs. They
are coupled to that version's markup, CSS class names, and JavaScript component
contracts, so **bumping `mkdocs-material` requires re-diffing these partials
against the new upstream templates** and re-testing search, the palette toggle,
and navigation. Pin the package to an exact version and treat an upgrade as a
deliberate task, not an incidental dependency bump.

There is no front-end build step. Edit the CSS, Jinja partials, or supporting
JavaScript directly, then use the normal MkDocs preview:

```bash
mkdocs serve
```

The theme self-hosts the Inter and Roboto Mono font files under
`theme/assets/fonts/`; it doesn't contact a third-party font service. Keep the
font license beside those assets when updating them.

Icons are provided by Ionicons, also vendored locally under
`theme/assets/vendor/ionicons/` (the runtime loader plus only the SVGs the theme
references) so the docs render fully offline and don't depend on a third-party
CDN—this matters for Self-hosted installations. When you add an
`<ion-icon name="…">` or a `sidebar_icons` entry, copy the matching
`svg/<name>.svg` from the Ionicons package into that folder; unreferenced icons
are intentionally not vendored. Keep the Ionicons license beside the assets.

The `theme/hooks/image_metadata.py` hook adds intrinsic dimensions and safe
loading hints to local documentation images at build time. Authors normally use
standard Markdown image syntax; explicit HTML image attributes are preserved
when a page needs an exception.

Before opening a pull request that changes the theme, build with warnings
treated as errors and check representative pages in the local preview:

```bash
mkdocs build --strict
```

Check a Cloud page and, when relevant, a Self-hosted page. Also check light and
dark color schemes, desktop and narrow mobile widths, search, the version
picker, and any changed content component. Preserve analytics, feedback,
preview and Self-hosted notices, source metadata, and existing URLs.

### Markdown conventions

Follow these Markdown conventions when editing the documentation:

-   Name new Markdown files based on the title of the page, in lowercase and substituting spaces with hyphens. For example, `adding-a-codacy-badge.md` for the page "Adding a Codacy badge."

    When you create a new markdown file, you must also add it to the `nav` section of the [`mkdocs.yml`](mkdocs.yml) file. This is what places the new page in the correct place of the table of contents of the documentation.

    If you're renaming an existing page, be sure to add a redirect to the `redirect_maps` section of the [`mkdocs.yml`](mkdocs.yml) file. This helps avoid broken links to the documentation.

-   Place images in a folder `images` next to your Markdown files and give them a descriptive name, also in lowercase and substituting spaces with hyphens. When referencing the images don't forget to write a descriptive alternative text:

    ```markdown
    ![Adding an organization](images/organization-add.png)
    ```

-   Use hyphens to generate unordered lists and `1.` to generate ordered lists. Always use 4 spaces to indent list items. Indent also by 4 spaces subsequent paragraphs in a list item or nested list items. For example:

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

-   Use the following structure to encode information that would fit an [HTML description list](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl):

    ```markdown
    This is the equivalent to a description list:
    
    -   **<Description term 1>:** <Description details 1>
    -   **<Description term 2>:** <Description details 2>
    ```

-   Use the [Admonitions syntax](https://squidfunk.github.io/mkdocs-material/reference/admonitions/#usage) to include **notes**, **tips**, and **warnings**, or to highlight **important** information. For example:

    ```markdown
    !!! note
        This feature is not supported for pull requests.
    ```

If you are unsure about the best syntax or way to convey information in Markdown, search for similar examples on the existing Markdown files.

### Making changes to the documentation

Create pull requests to make changes to the documentation:

1.  Create a topic branch from where you want to base your work. Typically, this will be the branch `master`, which contains the latest version of the documentation.

1.  Make commits of logical and atomic changes.

1.  When you're ready to request a review on your work, open a pull request.

    It helps if you can give all the context necessary for the review, or pointers to more information, on the description of the pull request.

1.  Make sure that the documentation pages build successfully and that you have an approval from relevant stakeholders.

1.  Merge the pull request using the "merge commit" strategy.

### Deploying the documentation to GitHub Pages

A [GitHub workflow](https://github.com/codacy/docs/blob/master/.github/workflows/mkdocs.yml) automatically deploys the generated HTML to GitHub Pages on every push to `master`.

**Never run `mkdocs gh-deploy` to deploy the documentation.** It replaces the whole `gh-pages` branch with the new build, which removes the archived Codacy Self-hosted documentation versions under `https://docs.codacy.com/v<MAJOR>.<MINOR>/`. The workflow keeps them because it deploys with `keep_files: true`.

## Documenting a new Codacy Self-hosted release

The site has one unversioned Self-hosted section, so every new release of the [Codacy Self-hosted chart](https://github.com/codacy/chart), major, minor, or patch, is documented on `master`. Don't create a `release/v*` branch or a new `/vX.Y/` documentation version.

1.  Create a new branch and update the pages under [`docs/chart/`](docs/chart/) for the new chart version.

1.  Add a row for the new chart version at the top of [`data/self-hosted-versions.yml`](data/self-hosted-versions.yml). Pages that show the latest version, such as the `helm upgrade` commands, read it from there.

1.  Build the documentation and make sure that the changes for the new chart version are correct.

1.  Open a pull request with the changes and merge the branch into `master`.
