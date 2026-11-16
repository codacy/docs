---
description: Instructions on how to use the Codacy Coverage Reporter to upload coverage data in advanced scenarios such as when running parallel tests, using monorepos, or testing source code in multiple or unsupported languages.
---

# Uploading coverage in advanced scenarios

The following sections include instructions on how to use the Codacy Coverage Reporter to upload coverage data in more advanced scenarios.

## Uploading multiple coverage reports for the same language {: id="multiple-reports"}

If your test suite is split into different modules or runs in parallel, you must upload multiple coverage reports for the same language either at once or in sequence.

Alternatively, consider merging multiple coverage reports before uploading them to Codacy. Most coverage tools support merging or aggregating coverage data. For example, use the [merge mojo for JaCoCo](http://www.eclemma.org/jacoco/trunk/doc/merge-mojo.html).

!!! note
    If one or more coverage reports mark a line as covered multiple times, Codacy counts it as a single covered line when calculating coverage.

### Uploading all reports at once {: id="multiple-reports-once"}

Upload multiple partial coverage reports with a single command by specifying each report with the flag `-r`. For example:

```bash
bash <(curl -Ls https://coverage.codacy.com/get.sh) report \
    -l Java -r report1.xml -r report2.xml -r report3.xml
```

You can also upload all your reports dynamically using the command `find`. For example:

```bash
bash <(curl -Ls https://coverage.codacy.com/get.sh) report \
    -l Java $(find . -name 'jacoco*.xml' | sed 's,^, -r ,' | xargs echo)
```

### Uploading reports in sequence {: id="multiple-reports-sequence"}

Upload multiple partial coverage reports in sequence:

1.  Upload each report <span class="skip-vale">separately</span> with the flag `--partial`.

    If you're sending reports for a language with the flag `--partial`, you must use the flag in all reports for that language to ensure the correct calculation of the coverage.

1.  Notify Codacy with the `final` command after uploading all reports.

For example:

```bash
bash <(curl -Ls https://coverage.codacy.com/get.sh) report \
    --partial -l Java -r report1.xml
bash <(curl -Ls https://coverage.codacy.com/get.sh) report \
    --partial -l Java -r report2.xml
bash <(curl -Ls https://coverage.codacy.com/get.sh) final
```

## Uploading coverage when you only test the modules that changed {: id="changed-modules"}

In a monorepo, your CI/CD workflow may run tests and generate coverage only for the modules that each commit changed. However, Codacy needs coverage data for [all tested files in your repository on every commit](index.md#uploading-coverage), and doesn't reuse coverage data from previous commits. If you only upload the reports of the modules that changed, Codacy calculates the coverage of the commit from those reports alone, causing [unexpected coverage changes](../faq/code-analysis/why-does-codacy-show-unexpected-coverage-changes.md).

To work around this, store the coverage report of each module after testing it, and upload the most recent report of every module on each commit:

1.  Detect which modules the commit changed.
1.  Run the tests only for the modules that changed, and store the coverage report of each module as a build artifact.
1.  Download one report for every module: the report from the current run for the modules that changed, and the most recent report from the default branch for all other modules.
1.  Upload each report with the flag `--partial`, and then send the `final` notification.

The following example implements this workaround on GitHub Actions for a repository with two modules: `modules/billing`, tested with pytest and Coverage.py, and `modules/gateway`, tested with Go. You can adapt the same approach to other CI/CD platforms that store build artifacts.

1.  Add the following script to your repository as `scripts/fetch-coverage.sh`, and make it executable with `chmod +x scripts/fetch-coverage.sh`.

    The script downloads the coverage report of one module, preferring the report from the current workflow run. If there's no report for the module, the script fails so that missing coverage data doesn't go unnoticed.

    ```bash
    #!/usr/bin/env bash
    # Downloads the most recent coverage report for one module.
    # Usage: fetch-coverage.sh <artifact name> <output directory>
    set -euo pipefail

    artifact_name=$1
    out_dir=$2

    # Prefer the report from the current run. Otherwise, use the most recent
    # report from the default branch of this repository.
    artifact_id=$(
      gh api "repos/$GITHUB_REPOSITORY/actions/artifacts?name=$artifact_name&per_page=100" |
      jq -r --arg branch "$DEFAULT_BRANCH" --argjson run "$GITHUB_RUN_ID" '
        [.artifacts[] | select(.expired == false)] as $all
        | [$all[] | select(.workflow_run.id == $run)]
          + ([$all[]
              | select(.workflow_run.head_branch == $branch)
              | select(.workflow_run.head_repository_id == .workflow_run.repository_id)]
             | sort_by(.created_at) | reverse)
        | first | .id // empty'
    )

    if [ -z "$artifact_id" ]; then
      echo "No coverage report found for $artifact_name. Run the workflow manually to test all modules." >&2
      exit 1
    fi

    mkdir -p "$out_dir"
    gh api "repos/$GITHUB_REPOSITORY/actions/artifacts/$artifact_id/zip" > "$out_dir/report.zip"
    unzip -o -q "$out_dir/report.zip" -d "$out_dir"
    rm "$out_dir/report.zip"
    ```

1.  Store your [repository API token](index.md#authenticate) as a GitHub Actions secret named `CODACY_PROJECT_TOKEN`.

1.  Create the workflow file `.github/workflows/coverage.yml`, with one filter and one test job for each module, and one fetch and upload line for each module in the job `upload-coverage`:

    {% raw %}
    ```yaml
    name: Coverage

    on:
      push:
        branches: [main]
      pull_request:
      workflow_dispatch:

    jobs:
      detect-changes:
        runs-on: ubuntu-latest
        outputs:
          billing: ${{ steps.filter.outputs.billing }}
          gateway: ${{ steps.filter.outputs.gateway }}
        steps:
          - uses: actions/checkout@v4
          - uses: dorny/paths-filter@v3
            id: filter
            with:
              filters: |
                billing:
                  - 'modules/billing/**'
                gateway:
                  - 'modules/gateway/**'

      test-billing:
        needs: detect-changes
        if: github.event_name == 'workflow_dispatch' || needs.detect-changes.outputs.billing == 'true'
        runs-on: ubuntu-latest
        steps:
          - uses: actions/checkout@v4
          - uses: actions/setup-python@v5
            with:
              python-version: '3.12'
          - run: pip install pytest coverage
          - run: coverage run --source=modules/billing -m pytest modules/billing
          - run: coverage xml -o coverage-billing.xml
          - uses: actions/upload-artifact@v4
            with:
              name: coverage-billing
              path: coverage-billing.xml
              retention-days: 90
              overwrite: true

      test-gateway:
        needs: detect-changes
        if: github.event_name == 'workflow_dispatch' || needs.detect-changes.outputs.gateway == 'true'
        runs-on: ubuntu-latest
        defaults:
          run:
            working-directory: modules/gateway
        steps:
          - uses: actions/checkout@v4
          - uses: actions/setup-go@v5
            with:
              go-version: '1.21'
          - run: go test ./... -coverprofile=coverage.out
          - uses: actions/upload-artifact@v4
            with:
              name: coverage-gateway
              path: modules/gateway/coverage.out
              retention-days: 90
              overwrite: true

      upload-coverage:
        needs: [test-billing, test-gateway]
        if: always()
        runs-on: ubuntu-latest
        permissions:
          actions: read
          contents: read
        env:
          GH_TOKEN: ${{ github.token }}
          DEFAULT_BRANCH: ${{ github.event.repository.default_branch }}
          CODACY_PROJECT_TOKEN: ${{ secrets.CODACY_PROJECT_TOKEN }}
        steps:
          - uses: actions/checkout@v4
          - name: Fetch the coverage report of every module
            run: |
              ./scripts/fetch-coverage.sh coverage-billing coverage/billing
              ./scripts/fetch-coverage.sh coverage-gateway coverage/gateway
          - name: Upload coverage to Codacy
            run: |
              reporter() { bash <(curl -Ls https://coverage.codacy.com/get.sh) "$@"; }
              reporter report --partial -r coverage/billing/coverage-billing.xml
              reporter report --partial --force-coverage-parser go -r coverage/gateway/coverage.out
              reporter final
    ```
    {% endraw %}

    The workflow works as follows:

    -   **On pushes to `main` and on pull requests,** the job `detect-changes` uses the action [`dorny/paths-filter`](https://github.com/dorny/paths-filter) to check which modules changed, and only the test jobs of those modules run. On manual runs, every test job runs.
    -   **Each test job** stores the coverage report of its module as an artifact named `coverage-<module>`.
    -   **The job `upload-coverage` always runs,** even when no module changed, because Codacy needs coverage data for every commit. It needs the permission `actions: read` to download artifacts from other workflow runs.
    -   **Each report is uploaded separately** with the flag `--partial`, so that each upload can use its own options. For example, Go reports need the flag `--force-coverage-parser go`, as described in [Uploading coverage for Golang](#golang).

1.  Run the workflow manually once to store a coverage report for every module:

    ```bash
    gh workflow run coverage.yml --ref main
    ```

    Until every module has a stored report, the job `upload-coverage` fails for the commits that don't test all modules.

### Limitations of this workaround {: id="changed-modules-limitations"}

Because the workflow reuses coverage reports instead of running all tests, consider the following:

-   **Dependencies between modules:** The workflow only tests a module when files inside the module change. If the tests of a module also depend on code outside the module, such as a shared library, add those paths to the filter of the module in the job `detect-changes`.
-   **Expired reports:** GitHub deletes artifacts after their retention period, set with `retention-days`. If a module isn't tested during that period, the job `upload-coverage` fails because there's no report for that module. Run the workflow manually more often than the retention period to refresh the reports of all modules.
-   **Failed tests:** If the tests of a module fail, the test job doesn't store a new report, and the workflow uploads the previous report of that module instead.
-   **Pull requests:** For the modules that a pull request didn't change, the workflow uploads the most recent reports from the default branch. If those modules changed on the default branch after the pull request branch was created, Codacy may show coverage changes in files that the pull request didn't change. To avoid this, keep pull request branches up to date with the default branch. The same can happen on pull requests that target a branch other than the default branch.

## Uploading the same coverage report for multiple languages {: id="multiple-languages"}

If your test suite generates a single coverage report for more than one language, you must upload the same coverage report for each language.

To do this, upload the same report multiple times, specifying each different language with the flag `-l`. For example:

```bash
bash <(curl -Ls https://coverage.codacy.com/get.sh) report \
    --partial -l Javascript -r report.xml
bash <(curl -Ls https://coverage.codacy.com/get.sh) report \
    --partial -l TypeScript -r report.xml
bash <(curl -Ls https://coverage.codacy.com/get.sh) final
```

## Uploading coverage for Golang {: id="golang"}

Codacy can't automatically detect Golang coverage report files because they don't have specific file names.

If you're uploading a Golang coverage report, you must also specify the report type:

```bash
go test -coverprofile=unit.coverage.out ./...
bash <(curl -Ls https://coverage.codacy.com/get.sh) report \
    --force-coverage-parser go -r unit.coverage.out
```

## Uploading coverage for unsupported languages {: id="unsupported-languages"}

If your language isn't in the [list of supported languages](index.md#generating-coverage), you can still send coverage to Codacy.

To do this, provide the correct language with the flag `-l`, together with `--force-language`. For example:

```bash
bash <(curl -Ls https://coverage.codacy.com/get.sh) report \
  -l Kotlin --force-language -r <coverage report file name>
```

See the [list of languages](https://github.com/codacy/codacy-plugins-api/blob/master/codacy-plugins-api/src/main/scala/com/codacy/plugins/api/languages/Language.scala#L41) that you can specify using the flag `-l`.
