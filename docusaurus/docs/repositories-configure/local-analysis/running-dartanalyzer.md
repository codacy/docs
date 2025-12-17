---
title: Running Dart Analyzer
description: Instructions on how to run Dart Analyzer as a client-side tool on Codacy.
tool_name: Dart Analyzer
---


To run Dart Analyzer as a [client-side tool](client-side-tools.md):


<!-- NOTE
     include-markdown breaks the final list in two, use include instead. -->
{%
    include "../../assets/includes/client-side-tool-instructions.md"
    start="<!--instructions-start-->"
    end="<!--instructions-end-->"
%}

## Important Concepts

- **`.codacy/codacy.yaml`**: Configuration file to specify `dart`, or `flutter`, and `dartanalyzer` versions for the CLI.

```yaml
runtimes:
    - dart@3.7.2
tools:
    - dartanalyzer@3.7.20
```

or 

```yaml
runtimes:
    - flutter@3.29.3
tools:
    - dartanalyzer@3.7.20
```

## Manual configuration

```bash
codacy-cli install
codacy-cli analyze -t dartanalyzer -o dartanalyzer.sarif
codacy-cli upload -s dartanalyzer.sarif -c $COMMIT_SHA -t CODACY_PROJECT_TOKEN
```

 **If you're using an account API token**, you must also provide the flags `-p`, `-o`, and `-r`. You can obtain the values for these flags from the URL of your repository dashboard on Codacy:

```bash
codacy-cli install
codacy-cli analyze -t dartanalyzer -o dartanalyzer.sarif
codacy-cli analyze -t dartanalyzer -o dartanalyzer.sarif -c $COMMIT_SHA -a CODACY_API_TOKEN -p provider (gh|gl|bb) -o ORGANIZATION -r REPOSITORY
```

## GitHub Action


### Using a project token
```yml
- name: Run Codacy CLI
  uses: codacy/codacy-cli-v2-action@main
  with:
    project-token: CODACY_PROJECT_TOKEN
    tool: dartanalyzer
    upload_report: true
```

### Using an account API token

```yml
- name: Run Codacy CLI
  uses: codacy/codacy-cli-v2-action@main
  with:
    api_token: CODACY_API_TOKEN
    tool: dartanalyzer
    upload_report: true
    provider: gh
    owner: codacy-acme
    repository: sample-dart-project
```

:::caution[Tokens should be stored in the repository secrets.]
:::

