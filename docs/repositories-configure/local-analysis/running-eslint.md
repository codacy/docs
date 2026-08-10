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

## Important Concepts

- **`.codacy/codacy.yaml`**: Configuration file to specify `node` and `eslint` versions for the CLI.

```yaml
runtimes:
    - node@22.2.0
tools:
    - eslint@9.3.0
```
## Manual configuration

```bash
codacy-analysis analyze --tool eslint9 --output-format sarif --output eslint.sarif
codacy-analysis upload eslint.sarif --commit $COMMIT_SHA
```

 **If you're using an account API token**, you must also provide the `--repository` flag with your provider, organization, and repository name. You can obtain these values from the URL of your repository dashboard on Codacy:

```bash
codacy-analysis analyze --tool eslint9 --output-format sarif --output eslint.sarif
codacy-analysis upload eslint.sarif --commit $COMMIT_SHA --repository <gh|gl|bb> ORGANIZATION REPOSITORY
```

!!! note
    Use `codacy-analysis info` to confirm the exact tool ID registered in your `.codacy/codacy.config.json` (for example, `ESLint9` for ESLint 9.x or `ESLint8` for ESLint 8.x) if `--tool eslint9` doesn't match your setup.

## GitHub Action


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

