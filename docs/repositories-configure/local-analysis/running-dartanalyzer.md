---
description: Instructions on how to run Dart Analyzer as a client-side tool on Codacy.
tool_name: Dart Analyzer
---

# Running Dart Analyzer

To run Dart Analyzer as a [client-side tool](client-side-tools.md):


<!-- NOTE
     include-markdown breaks the final list in two, use include instead. -->
{%
    include "../../assets/includes/client-side-tool-instructions.md"
    start="<!--instructions-start-->"
    end="<!--instructions-end-->"
%}

## Dart SDK and dependencies

The [Codacy Analysis CLI](../../codacy-analysis-cli/index.md) runs `dart analyze` from a Dart SDK. It uses the SDK that Codacy manages for you, if you have installed it, and otherwise the `dart` command on your `PATH`:

-   **Codacy-managed SDK:** Add `--install-dependencies` to `analyze` and the CLI downloads the pinned Dart SDK, about 210 MB, into `~/.codacy/tools/dartanalyzer/`.
-   **Your own SDK:** Install [Dart](https://dart.dev/get-dart), or Flutter, which bundles Dart, and make sure `dart` is on your `PATH`.

Before analyzing, resolve your project's packages with `dart pub get`, or `flutter pub get` for a Flutter project. The CLI never runs it for you. Without the resolved packages, every `package:` import is unresolvable: the CLI warns and skips the checks that depend on them for that run.

## Manual configuration

Install the Codacy Analysis CLI and initialize the repository. Initialization writes `.codacy/codacy.config.json`, which `analyze` requires: pulling it from Codacy Cloud with `init --remote` means the local run uses the same Dart Analyzer patterns as your repository's **Code patterns** page.

```bash
npm i -g @codacy/analysis-cli
codacy-analysis init --remote <gh|gl|bb> <ORGANIZATION> <REPOSITORY>
```

Then resolve your packages, run the analysis, and upload the results:

```bash
dart pub get
codacy-analysis analyze --tool dartanalyzer --output-format sarif --output dartanalyzer.sarif
codacy-analysis upload dartanalyzer.sarif --commit $COMMIT_SHA
```

 **If you're using an account API token**, you must also provide the `--repository` flag with your provider, organization, and repository name. You can obtain these values from the URL of your repository dashboard on Codacy:

```bash
dart pub get
codacy-analysis analyze --tool dartanalyzer --output-format sarif --output dartanalyzer.sarif
codacy-analysis upload dartanalyzer.sarif --commit $COMMIT_SHA --repository <gh|gl|bb> <ORGANIZATION> <REPOSITORY>
```

!!! note
    `--tool` matches against the tool IDs in your `.codacy/codacy.config.json`, and only tools listed there run. If `--tool dartanalyzer` doesn't match your setup, check that file for the ID it recorded.

## GitHub Action

The [Codacy Analysis CLI GitHub Action](https://github.com/codacy/analysis-cli-action) runs the same `codacy-analysis` CLI as the manual configuration above. If your repository has no committed `.codacy/codacy.config.json`, the action fetches the repository's configuration from Codacy with your token.

On `pull_request` events, the action uploads the results for the pull request's head commit. Check out that commit with `ref:` as in the examples below, otherwise line numbers can point at the wrong lines.

The examples set up Dart and resolve the packages before running the action. For a Flutter project, use a Flutter setup action and `flutter pub get` instead.

### Using a project token

{% raw %}
```yml
- uses: actions/checkout@v4
  with:
    ref: ${{ github.event.pull_request.head.sha || github.sha }}

- uses: dart-lang/setup-dart@v1

- run: dart pub get

- name: Run Codacy Analysis CLI
  uses: codacy/analysis-cli-action@v1
  with:
    project-token: ${{ secrets.CODACY_PROJECT_TOKEN }}
    tool: dartanalyzer
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

- uses: dart-lang/setup-dart@v1

- run: dart pub get

- name: Run Codacy Analysis CLI
  uses: codacy/analysis-cli-action@v1
  with:
    api-token: ${{ secrets.CODACY_API_TOKEN }}
    tool: dartanalyzer
    upload: true
```
{% endraw %}

!!! warning "Tokens should be stored in the repository secrets."
