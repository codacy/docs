---
description: Instructions on how to run ESLint as a client-side tool on Codacy.
tool_name: ESLint
---

# Running ESLint

To run ESLint as a [client-side tool](client-side-tools.md):


<!-- NOTE
     include-markdown breaks the final list in two, use include instead. -->
{%
    include "../../assets/includes/client-side-tool-instructions.md"
    start="<!--instructions-start-->"
    end="<!--instructions-end-->"
%}

## Manual configuration

Install the Codacy Analysis CLI and initialize the repository. Initialization writes `.codacy/codacy.config.json`, which `analyze` requires: pulling it from Codacy Cloud with `init --remote` means the local run uses the same ESLint patterns as your repository's **Code patterns** page.

```bash
npm i -g @codacy/analysis-cli
codacy-analysis init --remote <gh|gl|bb> <ORGANIZATION> <REPOSITORY>
```

Then run the analysis and upload the results:

```bash
codacy-analysis analyze --tool eslint9 --output-format sarif --output eslint.sarif
codacy-analysis upload eslint.sarif --commit $COMMIT_SHA
```

 **If you're using an account API token**, you must also provide the `--repository` flag with your provider, organization, and repository name. You can obtain these values from the URL of your repository dashboard on Codacy:

```bash
codacy-analysis analyze --tool eslint9 --output-format sarif --output eslint.sarif
codacy-analysis upload eslint.sarif --commit $COMMIT_SHA --repository <gh|gl|bb> <ORGANIZATION> <REPOSITORY>
```

!!! note
    `--tool` matches against the tool IDs in your `.codacy/codacy.config.json`, and only tools listed there run. If `--tool eslint9` doesn't match your setup, check that file for the ID it recorded, which is `ESLint9` for ESLint 9.x and `ESLint8` for ESLint 8.x.

!!! important
    On Codacy Self-hosted, `upload` sends results to a different endpoint from the rest of the CLI, and it doesn't read `CODACY_API_BASE_URL`. Point it at your instance with `CODACY_RESULTS_API_BASE_URL` as well:

    ```bash
    export CODACY_RESULTS_API_BASE_URL=<your Codacy instance results API URL>
    ```

## GitHub Action

The GitHub Action still uses [Codacy CLI v2](https://github.com/codacy/codacy-cli-v2), a separate tool from the `codacy-analysis` CLI used above. It reads its runtime and tool versions from a `.codacy/codacy.yaml` file in your repository:

```yaml
runtimes:
    - node@22.2.0
tools:
    - eslint@9.3.0
```


### Using a project token
```yml
- name: Run Codacy CLI
  uses: codacy/codacy-cli-v2-action@main
  with:
    project-token: CODACY_PROJECT_TOKEN
    tool: eslint
    upload_report: true
```

### Using an account API token

```yml
- name: Run Codacy CLI
  uses: codacy/codacy-cli-v2-action@main
  with:
    api_token: CODACY_API_TOKEN
    tool: eslint
    upload_report: true
    provider: gh
    owner: codacy-acme
    repository: sample-javascript-project
```

!!! warning "Tokens should be stored in the repository secrets."

