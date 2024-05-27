---
description: If your repository has source files with unrecognized extensions, you can configure Codacy to include them in the next analysis.
---

# Configuring languages

{% include-markdown "../assets/includes/admin-access-control-info.md" %}

Codacy automatically detects and analyzes languages in your repository based on a list of supported file extensions. On the repository **Settings**, tab **Languages**, you can see the list of languages that Codacy has detected and will include in the next analysis.

By default, the analysis is enabled for all languages that Codacy detects in you repository, and you can adapt them to your needs as follows:

-   If your repository has source files with unrecognized extensions, you can [configure Codacy to include those extensions in the next analysis](#configuring-file-extensions)
-   You can [disable the analysis of specific languages](#disable-language)

## Configuring file extensions

If you are using file extensions different from those Codacy supports, associate them with their languages to ensure that Codacy also analyzes those files in the next analysis:

1.  Go to your repository's **Settings**, **Languages**.

    ![Configuring file extensions](images/file-extensions.png)

1.  Add the extensions you want to be recognized for each language.

1.  Click **Save changes** to update your file extension settings.

    The updated settings will be used on the next analysis, but you can click **reanalyze the latest commit of your branches now** on the notification that appears at the bottom of the page to trigger an analysis immediately.

    ![Analyze now](images/file-extensions-analyze.png)

!!! note
    Currently, the [Semgrep](https://github.com/codacy/codacy-semgrep) static analysis tool doesn't support custom file extensions.

## Disabling analysis of a language {: id="disable-language"}

By default, Codacy analysis all languages detected in your repository. To disable the analysis of a specific language, do the following:

1.  Go to your repository's **Settings**, **Languages**.

    ![Configuring file extensions](images/file-extensions.png)

1.  Use the toggle next to the language to disable its analysis.

1.  Click **Save changes** to update your settings.

    The updated settings will be used on the next analysis, but you can click **reanalyze the latest commit of your branches now** on the notification that appears at the bottom of the page to trigger an analysis immediately.

    ![Analyze now](images/file-extensions-analyze.png)
