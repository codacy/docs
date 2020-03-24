# Run local analysis and Push results

 

# Setup the Codacy Analysis CLI

Follow the [installation
guide](https://github.com/codacy/codacy-analysis-cli#install) to get
the *codacy-analysis-cli* executable running on your build server.

# Running an analysis with the CLI

At the moment, the CLI still requires to retrieve the configuration from
Codacy to perform an analysis. In order to access the repository, you
will have to obtain a *Project Token* as explained in the [CLI
documentation](https://github.com/codacy/codacy-analysis-cli#project-token).
Then, you can invoke the CLI to get a report with all the issues:

    codacy-analysis-cli analyse --directory <SOURCE-CODE-PATH> --project-token <PROJECT-TOKEN> --allow-network --codacy-api-base-url <API-BASE-URL> --verbose --upload

If you don't specify the tool, the analysis will run as Codacy does in
the backend. For specific results, you can pass it with *--tool*.

You can see the available tools with:  
codacy-analysis-cli analyse --help

<span class="wysiwyg-font-size-x-large">Codacy Self-hosted</span>

<span class="wysiwyg-font-size-medium">There is an additional step to go
through if you are using Codacy Self-hosted</span><span
class="wysiwyg-font-size-medium">.  
</span>Please configure the endpoint where Codacy Self-hosted is running
either by using the flag*`--codacy-api-base-url`* or the environment
variable *`CODACY_API_BASE_URL`*

# Docs

For advanced configuration details, check all the CLI flags in the [CLI
documentation](https://github.com/codacy/codacy-analysis-cli#cli-parameters).

Some flags you might be interested in:  
*--allow-network* - to run the tools that require compilation like
SpotBugs, FindBugs, FindSecBugs  
*--max-allowed-issues* - returns a non-zero exit code when a certain
number of issues is exceeded  
*--fail-if-incomplete* - to return a non-zero exit code when any tool
fails to run successfully

# Push results

Since end of June 2019, starting with SpotBugs, Codacy Self-hosted
version will allow the user to compile the code in their build server,
then run the tool over the compilation results and send these results to
Codacy.

The pushing results feature need several changes:

1.  <span style="font-weight: 300;">Enable </span><span
    class="wysiwyg-underline">***Run analysis through build
    server***</span><span style="font-weight: 300;"> in the repository
    settings in tab </span><span class="wysiwyg-underline">*<span
    style="font-weight: 300;">General</span>*</span><span
    style="font-weight: 300;"> section </span><span
    class="wysiwyg-underline">*<span
    style="font-weight: 300;">Repository analysis</span>*</span><span
    style="font-weight: 300;">.</span>
2.  <span style="font-weight: 300;">Generate a Project API token
    </span><span style="font-weight: 300;">in the project settings in
    tab </span><span class="wysiwyg-underline">*<span
    style="font-weight: 300;">Integrations</span>*</span><span
    style="font-weight: 300;">.</span>
3.  <span style="font-weight: 300;">Add \`--upload\` flag,
    \`</span><span style="font-weight: 300;">--project-token
    &lt;PROJECT-TOKEN&gt;\` and \`--codacy-api-base-url
    &lt;API-BASE-URL&gt;\` to the codacy-analysis-cli command.  
    </span>

# Notes

### **Ignored Issues**

If you have ignored issues on Codacy be aware that the CLI will not
respect those ignores when printing the results locally.

When uploading results for Codacy Self-hosted the ignores will be
reflected on Codacy after the analysis is complete.

# Disclaimer:

Please keep in mind the CLI is still in ongoing development and the APIs
it uses might be broken without notice.

 

If you run into issues or have any questions, please don't hesitate to
reach out at <support@codacy.com>.
