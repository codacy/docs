---
description: Ignore or exclude files from the Codacy analysis and see the list of files that Codacy already ignores by default.
---

# Ignoring files

{% include-markdown "../assets/includes/admin-access-control-info.md" %}

In some situations, you may want to ignore or exclude files from the Codacy analysis.

To exclude files from your repository analysis open your repository **Settings**, tab **Ignored Files**, and select the files you want to ignore. This view only shows the files on your main branch.

![Ignored files](images/ignored-files.png)

!!! note
    -   See below the files that Codacy [ignores by default](#default-ignored-files).

    -   You can also ignore files using your own [tool configuration files](configuring-code-patterns.md#using-your-own-tool-configuration-files), although this depends on the option being supported by each tool.

    -   {% include-markdown "../assets/includes/coverage-ignore.md" %}

If you need more flexibility in ignoring files, use a Codacy configuration file to [define a custom list of file paths to exclude](codacy-configuration-file.md#syntax-for-ignoring-files).

!!! important
    If your repository has a [Codacy configuration file](codacy-configuration-file.md), the **Ignored files** settings defined on the Codacy UI don't apply and you must [ignore files using the configuration file](codacy-configuration-file.md#ignore-files) instead.

![Ignored files](images/ignored-files-configuration-file.png)

## Default ignored files

By default, Codacy ignores all the files that match the regular expressions below.

```text
.*[\.-]min\.css
.*[\.-]min\.js
.*node_modules/.*
.*bower_components/.*
.*vendor/.*
.*third[_-]?[Pp]arty/.*
.*samples?/.*
.*releases?/.*
.*builds?/.*
.*dist/.*
.*external/.*
.*libs/.*
.*d3\.js
.*angular(-resource|)?\.js
.*select2(-resource|)?\.js
.*-ace\.js
.*typeahead\.js
.*jquery-ui\.js
.*reveal\.js
.*three\.js
.*chart\.js
.*jquery\.js
.*underscore\.js
.*lodash\.js
.*bootstrap\.js
.*bootstrap\.css
.*font-awesome\.css
.*\.[Dd]esigner\.cs
```
