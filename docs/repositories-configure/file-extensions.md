---
description: If your repository has source files with unrecognized extensions, you can configure Codacy to include them in the next analysis.
---

# Configuring file extensions

{% include-markdown "../assets/includes/admin-access-control-info.md" %}

If your repository has source files with unrecognized extensions, you can configure Codacy to include them in the next analysis:

1.  Go to your repository's **Settings**, **File Extensions**.

    ![Configuring file extensions](images/file-extensions.png)

1.  Add the extensions you want to be recognized for each language.

1.  Click **Save** to update your file extension settings.

    The updated settings will be used on the next analysis, but you can click **reanalyze the latest commit of your branches now** on the notification that appears at the bottom of the page to trigger an analysis immediately.

    ![Analyze now](images/file-extensions-analyze.png)

!!! note
    Currently, the [Semgrep](https://github.com/codacy/codacy-semgrep) static analysis tool doesn't support custom file extensions.
