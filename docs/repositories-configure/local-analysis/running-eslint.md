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
codacy-cli install
codacy-cli analyze -t eslint -o eslint.sarif
codacy-cli upload -s eslint.sarif -c $COMMIT_SHA -t CODACY_PROJECT_TOKEN
```

 **If you're using an account API token**, you must also provide the flags `-p`, `-o`, and `-r`. You can obtain the values for these flags from the URL of your repository dashboard on Codacy:

```bash
codacy-cli install
codacy-cli analyze -t eslint -o eslint.sarif
codacy-cli analyze -t eslint -o eslint.sarif -c $COMMIT_SHA -a CODACY_API_TOKEN -p provider (gh|gl|bb) -o ORGANIZATION -r REPOSITORY
```

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

