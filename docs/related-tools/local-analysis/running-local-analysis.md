---
tool_name: the Codacy Analysis CLI
---

[//]: # (TODO global:)
[//]: # ( *This page is now pretty similar to the tool-specific ones. Should we consolidate somehow?)

# Running local analysis

[//]: # (TODO: add concepts)

## Running an analysis with the CLI

1.  Follow the [installation guide](https://github.com/codacy/codacy-analysis-cli#install) to get the `codacy-analysis-cli` executable running on your build server.

[//]: # (TODO:)
[//]: # ( *The following setup instructions are simpler and also appear to work, running Docker in the background. Could we use this simplified version here? The current ones on the README are a mess.)
[//]: # ( *Check with devs to confirm that there are no caveats using this one.)
[//]: # (```bash)
[//]: # (wget https://raw.githubusercontent.com/codacy/codacy-analysis-cli/master/bin/codacy-analysis-cli.sh)
[//]: # (chmod +x codacy-analysis-cli.sh)
[//]: # (mv codacy-analysis-cli.sh /usr/local/bin/codacy-analysis-cli)
[//]: # (```)

{%
    include "../../assets/includes/client-side-tool-instructions.md"
    start="<!--instructions-start-->"
    end="<!--instructions-end-->"
%}

1.  Run the [Codacy Analysis CLI](https://github.com/codacy/codacy-analysis-cli#install) on the root of the repository. Use the `--upload` flag to upload the analysis results to Codacy upon completion.

    ```bash
    codacy-analysis-cli analyze --upload
    ```

    **If you're using an account API token**, you must also provide the flags `--provider`, `--username`, and `--project`. You can obtain the values for these flags from the URL of your repository dashboard on Codacy:

    ```bash
    codacy-analysis-cli analyze --upload \
                                --provider <gh, ghe, gl, gle, bb, or bbe> \
                                --username <name of your Codacy organization> \
                                --project <name of your repository>
    ```

[//]: # (TODO confirm the use cases for these and whether we need them)
    **TODO insert introductory sentence here**:

    -   `--allow-network` - run the tools that require compilation like SpotBugs
    -   `--max-allowed-issues` - return a non-zero exit code when the specified number of issues is exceeded
    -   `--fail-if-incomplete` - return a non-zero exit code when any tool fails to run successfully

The Codacy Analysis CLI analyzes your repository and uploads the results to Codacy, so you can use them in your workflow.

## Running an analysis using a specific tool

To obtain results for a particular tool, follow the same procedure as above, specifying the tool you wish to use with the `--tool` option.

Using a project API token:

```bash
codacy-analysis-cli analyze --upload \
                            --allow-network \
                            --tool <tool short name>
```

Using an account API token:

```bash
codacy-analysis-cli analyze --upload \
                            --provider <gh, ghe, gl, gle, bb, or bbe> \
                            --username <name of your Codacy organization> \
                            --project <name of your repository>
                            --tool <tool short name>
```

For an end-to-end example, see [how to run a local analysis with SpotBugs](running-spotbugs.md).

{%
    include-markdown "../../assets/includes/client-side-tool-instructions.md"
    start="<!--advanced-start-->"
    end="<!--advanced-end-->"
%}
