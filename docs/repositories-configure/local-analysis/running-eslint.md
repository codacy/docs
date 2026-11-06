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

Install the [Codacy Analysis CLI](../../codacy-analysis-cli/index.md) and initialize the repository. Initialization writes `.codacy/codacy.config.json`, which `analyze` requires: pulling it from Codacy Cloud with `init --remote` means the local run uses the same ESLint patterns as your repository's **Code patterns** page.

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

## GitHub Action

The [Codacy Analysis CLI GitHub Action](https://github.com/codacy/analysis-cli-action) runs the same `codacy-analysis` CLI as the manual configuration above. If your repository has no committed `.codacy/codacy.config.json`, the action fetches the repository's configuration from Codacy with your token.

On `pull_request` events, the action uploads the results for the pull request's head commit. Check out that commit with `ref:` as in the examples below, otherwise line numbers can point at the wrong lines.

### Using a project token

{% raw %}
```yml
- uses: actions/checkout@v4
  with:
    ref: ${{ github.event.pull_request.head.sha || github.sha }}

- name: Run Codacy Analysis CLI
  uses: codacy/analysis-cli-action@v1
  with:
    project-token: ${{ secrets.CODACY_PROJECT_TOKEN }}
    tool: ESLint9
    upload: true
```
{% endraw %}

### Using an account API token

The action takes the provider, organization, and repository from the workflow. Set `provider`, `owner`, and `repository` only if the repository is on Codacy under different names.

{% raw %}
```yml
- uses: actions/checkout@v4
  with:
    ref: ${{ github.event.pull_request.head.sha || github.sha }}

- name: Run Codacy Analysis CLI
  uses: codacy/analysis-cli-action@v1
  with:
    api-token: ${{ secrets.CODACY_API_TOKEN }}
    tool: ESLint9
    upload: true
```
{% endraw %}

!!! warning "Tokens should be stored in the repository secrets."

