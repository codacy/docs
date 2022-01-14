# Coverage

## **How to set coverage up**

For the next steps, we assume you already have tests and coverage for your repository. If you don't have coverage and need help, take a look at our [article](/hc/en-us/articles/207312879-Generate-Coverage) on how to generate coverage.

Repositories can be configured to show code coverage reports directly in Codacy. Codacy reads the source coverage reports, converts them to a smaller JSON file and uploads them, showing all results integrated into your [repository's dashboard](/hc/en-us/articles/360003890673-Project-Dashboard-How-does-it-work-).

## Project API Token

To set up coverage reporting you'll need a Project API token. You can find it in your repository settings 'Integrations' tab.

<figure>
<img src="/v1.0/images/Jun-06-2017_14-30-02.gif" width="599" height="264" alt="" />
</figure>

### Token Security

You should keep your API token well protected, as it grants owner permissions to your repositories. If you use CircleCI or Travis CI, you should use your token as an environment variable. **Don't put your keys in your configuration files**, check your service settings on how to set environment variables.

### Setting token as environment variable

export CODACY_PROJECT_TOKEN=%Project_Token%

(replacing %Project_Token% with your token)

## Setup

Check [here](https://github.com/codacy/codacy-coverage-reporter#setup) for detailed instructions on how to set up the coverage reporter plugin.

## Submitting coverage for unsupported languages or tools

If your language or build tool isn't supported yet, you can send the coverage data directly through the Codacy API. You can check the endpoint in the [API documentation](https://api.codacy.com/swagger#savecoverage) and an example of the JSON payload below.

```json
{
  "total": 23,
  "fileReports": [
    {
      "filename": "src/Codacy/Coverage/Parser/CloverParser.php",
      "total": 54,
      "coverage": {
        "3": 3,
        "5": 0,
        "7": 1
      }
    }
  ]
}
```

!!! note
In case the token was retrieved from the Repository integrations tab, the header should be `project-token`. If it is an account token, the header should be `api-token` and you must call [this API method](https://api.codacy.com/swagger#savecoveragewithprojectname) instead.

Also, note all _coverable_ lines should be present on the "coverage" variable of the JSON payload. In the example, you can see that "5": 0, meaning that line 5 is not covered.

## See also

-   [Add Coverage to your repo](/hc/en-us/articles/207993835-Add-coverage-to-your-repo)
-   [Generate Coverage](/hc/en-us/articles/207312879-Generate-Coverage)
