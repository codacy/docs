---
title: Troubleshooting coverage CLI issues
description: Instructions or workarounds to overcome common issues while using Codacy Coverage Reporter CLI.
---


The sections below provide instructions or workarounds to overcome common issues while using Codacy Coverage Reporter CLI:

-   [Can't guess any report due to no matching](#cant-guess-any-report-due-to-no-matching)
-   [Can't validate checksum](#checksum)
-   [Commit SHA-1 hash detection](#commit-detection)
-   [Connect timed out while uploading coverage data](#connect-timed-out-while-uploading-coverage-data)
-   [coverage-xml/index.xml generated an empty result](#coverage-xmlindexxml-generated-an-empty-result)
-   [JsonParseException while uploading coverage data](#jsonparseexception-while-uploading-coverage-data)
-   [MalformedInputException while parsing report](#malformedinputexception-while-parsing-report)
-   [No coverage data was sent](#no-coverage-data-was-sent)
-   [Report generated an empty result while uploading C# coverage data](#detailedxml)
-   [SubstrateSegfaultHandler caught signal 11](#substratesegfaulthandler-caught-signal-11)

## Can't guess any report due to no matching

Codacy Coverage Reporter automatically searches for coverage reports matching the [file name conventions for supported formats](index.md#generating-coverage).

However, if Codacy Coverage Reporter doesn't find your coverage report, you can explicitly define the report file name with the flag `-r`. For example:

```bash
bash <(curl -Ls https://coverage.codacy.com/get.sh) report -r <coverage report file name>
```

## Can't validate checksum {#checksum}
Starting on version [13.0.0](https://github.com/codacy/codacy-coverage-reporter/releases/tag/13.0.0) the `get.sh` script automatically validates the checksum of the downloaded Codacy Coverage Reporter binary. This requires having either the `sha512sum` or `shasum` command on the operating system where you're running the script.

If you're getting this error while uploading your coverage data to Codacy, install the correct version of `sha512sum` or `shasum` for the operating system that you're using.

You can also skip validating the checksum of the binary by defining the following environment variable, however, Codacy doesn't recommend this:

```bash
export CODACY_REPORTER_SKIP_CHECKSUM=true
```

## Commit SHA-1 hash detection {#commit-detection}
The Codacy Coverage Reporter automatically detects the SHA-1 hash of the current commit to associate with the coverage data when you're using one of the following CI/CD platforms:

-   <span class="skip-vale">Appveyor</span>
-   Argo CD
-   AWS CodeBuild
-   Azure Pipelines
-   <span class="skip-vale">Bitrise</span>
-   <span class="skip-vale">Buildkite</span>
-   Circle CI
-   <span class="skip-vale">Codefresh</span>
-   <span class="skip-vale">Codeship</span>
-   Docker
-   GitLab
-   Greenhouse CI
-   Heroku CI
-   Jenkins
-   Magnum CI
-   Semaphore CI
-   Shippable CI
-   Solano CI
-   TeamCity CI
-   Travis CI
-   <span class="skip-vale">Wercker CI</span>

If the Codacy Coverage Reporter fails to detect the current commit from the CI workflow context, it will use the current commit from the local Git repository instead.

However, you can also force using a specific commit SHA-1 hash with the flag `--commit-uuid`. For example:

```bash
bash <(curl -Ls https://coverage.codacy.com/get.sh) report \
    -r report.xml \
    --commit-uuid cd4d000083a744cf1617d46af4ec108b79e06bed
```

## Connect timed out while uploading coverage data

If you get a `Error doing a post to <...> connect timed out` error while uploading your coverage data to Codacy it means that the Codacy Coverage Reporter is timing out while connecting to the Codacy API. This typically happens if you're uploading coverage data for larger repositories.

To increase the default timeout while connecting to the Codacy API, use the flag `--http-timeout` to set a value larger than 10000 milliseconds. For example, to set the timeout to 30 seconds:

```bash
bash <(curl -Ls https://coverage.codacy.com/get.sh) report \
    -r report.xml \
    --http-timeout 30000
```

## coverage-xml/index.xml generated an empty result

If you're using <span class="skip-vale">PHPUnit</span> version 5 or above to generate your coverage report, you must output the report using the Clover format. Codacy Coverage Reporter supports the <span class="skip-vale">PHPUnit</span> XML format only for versions 4 and older.

To change the output format replace the flag `--coverage-xml <dir>` with `--coverage-clover <file>` when executing <span class="skip-vale">`phpunit`</span>.

See [<span class="skip-vale">PHPUnit</span> command-line documentation](https://phpunit.readthedocs.io/en/11.0/textui.html) for more information.

## JsonParseException while uploading coverage data

If you get a `com.fasterxml.jackson.core.JsonParseException` error while uploading your coverage data to Codacy it means that your coverage report is too big and that Codacy Coverage Reporter hit a limit of 10 MB when uploading the coverage data to Codacy.

There are some ways you can solve this:

-   Split your coverage reports into smaller files and [upload them to Codacy one at a time](../uploading-coverage-in-advanced-scenarios/#multiple-reports).

-   **If you're using dotCover to generate coverage reports for your C# projects**, you should [exclude <span class="skip-vale">xUnit</span> files](https://www.jetbrains.com/help/dotcover/Running_Coverage_Analysis_from_the_Command_LIne.html#filters_cmd) from the coverage analysis as follows:

    ```bash
    dotCover.exe cover <...> /Filters=-:xunit*
    ```

    By default, <span class="skip-vale">dotCover</span> includes <span class="skip-vale">xUnit</span> files in the coverage analysis and this results in larger coverage reports. This filter helps ensure that the resulting coverage data doesn't exceed the size limit accepted by the Codacy API when uploading the results.

## MalformedInputException while parsing report

If you get a `java.nio.charset.MalformedInputException` when running the Codacy Coverage Reporter it means that the coverage report includes a character that's not encoded in UTF-8. The invalid character can belong to the file name of one of your source code files, or even a class or method name.

For maximum compatibility of your coverage reports with the Codacy Coverage Reporter, make sure that your coverage reports use UTF-8 encoding and that they only include UTF-8 characters.

## No coverage data was sent

You can get the `No coverage data was sent` error when running the Codacy Coverage Reporter for the following reasons:

-   The coverage report doesn't include any coverage data.
-   The coverage report only includes data for files that don't exist in the associated Git repository. In this case, you also get one or more warnings `File: [filename] will be discarded and will not be considered for coverage calculation`.

Make sure that your coverage report isn't empty and that it includes coverage data for files in the associated Git repository.

:::note
If you upload multiple coverage reports and at least one contains valid data, the Codacy Coverage Reporter uploads the valid reports and ignores the invalid ones.
:::

## Report generated an empty result while uploading C# coverage data {#detailedxml}
If you're using <span class="skip-vale">dotCover</span> to generate coverage reports for your C# projects, you must use the <span class="skip-vale">dotCover</span> detailedXML report format as follows:

```bash
dotCover.exe cover <...> --reportType=DetailedXml
```

## SubstrateSegfaultHandler caught signal 11

If you're experiencing segmentation faults when uploading the coverage results due to [<span class="skip-vale">oracle/graal#624</span>](https://github.com/oracle/graal/issues/624), execute the following command before running the reporter, as a workaround:

```sh
echo "$(dig +short api.codacy.com | tail -n1) api.codacy.com" >> /etc/hosts
```

## I received the message: "Invalid configuration: Either a project or account API token must be provided or available in an environment variable" in a build from a commit created by Dependabot (Github)

When builds are triggered by Dependabot, they run with a read-only GITHUB_TOKEN and don’t have access to any secrets stored in GitHub Actions. This can break workflows — for example, the token may be missing and coverage reports can’t be uploaded to Codacy.

[See GitHub’s documentation for details.](https://docs.github.com/en/code-security/dependabot/troubleshooting-dependabot/troubleshooting-dependabot-on-github-actions#troubleshooting-failures-when-dependabot-triggers-existing-workflows)

If you still need to upload coverage from Dependabot’s pull requests, a workaround is to add an empty commit to those PRs. Because the commit comes from a regular user account, the workflow will then have access to the repository’s secrets, allowing the upload to succeed.