# Run local analysis and Push results

## Setup the Codacy Analysis CLI

Follow the [installation guide](https://github.com/codacy/codacy-analysis-cli#install) to get the *codacy-analysis-cli* executable running on your build server.

## Running an analysis with the CLI

At the moment, the CLI still requires to retrieve the configuration from Codacy to perform an analysis. In order to access the repository, you will have to obtain a *Project Token* as explained in the [CLI documentation](https://github.com/codacy/codacy-analysis-cli#project-token). Then, you can invoke the CLI to get a report with all the issues:

```sh
codacy-analysis-cli analyse --directory <SOURCE-CODE-PATH> --project-token <PROJECT-TOKEN> --allow-network --codacy-api-base-url <API-BASE-URL> --verbose --upload
```

If you don't specify the tool, the analysis will run as Codacy does in the backend. For specific results, you can pass it with *--tool*.

You can see the available tools with: `codacy-analysis-cli analyse --help`

### Codacy Self-hosted

There is an additional step to go through if you are using Codacy Self-hosted.
Please configure the endpoint where Codacy Self-hosted is running either by using the flag `--codacy-api-base-url` or the environment variable `CODACY_API_BASE_URL`.

## Docs

For advanced configuration details, check all the CLI flags in the [CLI documentation](https://github.com/codacy/codacy-analysis-cli#cli-parameters).

Some flags you might be interested in: `--allow-network` - to run the tools that require compilation like SpotBugs, FindBugs, FindSecBugs `--max-allowed-issues` - returns a non-zero exit code when a certain number of issues is exceeded `--fail-if-incomplete` - to return a non-zero exit code when any tool fails to run successfully.

## Push results

Since end of June 2019, starting with SpotBugs, Codacy Self-hosted version will allow the user to compile the code in their build server, then run the tool over the compilation results and send these results to Codacy.

The pushing results feature need several changes:

1. Enable **Run analysis through build server** in the repository settings in tab *General* section *Repository analysis*.
2. Generate a Project API token in the project settings in tab *Integrations*.
3. Add `--upload` flag, `--project-token "PROJECT-TOKEN"` and `--codacy-api-base-url "API-BASE-URL"` to the codacy-analysis-cli command.


## Notes

### Ignored Issues

If you have ignored issues on Codacy be aware that the CLI will not respect those ignores when printing the results locally.

When uploading results for Codacy Self-hosted the ignores will be reflected on Codacy after the analysis is complete.



If you run into issues or have any questions, please don't hesitate to reach out.
