# Running client-side tools

Client-side tools enable you to run any linter either locally or as part of your CI process and integrating the results into your Codacy workflow. This way, Codacy presents the analysis information reported by your linters alongside all other code quality information on the dashboards.

Codacy supports client-side in two ways:

-   [Standalone](#standalone-tools)
-   ["Wrapped"](#wrapped-tools)

## Standalone tools

For **standalone tools**, Codacy provides converters that:

1.  Parse the analysis output from tools that you configure and run yourself

    !!! important
        You can't configure the standalone tools on the Codacy UI, since you manage their configuration locally.

1.  Convert the analysis output to the Codacy format

1.  Send the analysis information to Codacy via an API

Follow the links to set up the supported "standalone" client-side tools with Codacy:

<!-- TODO Make this into a table so that we can have both the link to the original tool and the instructions? -->

-   [Clang-Tidy](https://github.com/codacy/codacy-clang-tidy#usage){: target="_blank"}
-   [Gosec](https://github.com/codacy/codacy-gosec#usage){: target="_blank"}
-   [Staticcheck](https://github.com/codacy/codacy-staticcheck#usage){: target="_blank"}

## Wrapped tools

For **"wrapped" tools**, Codacy provides a wrapper that runs directly on the Codacy Analysis CLI. The Codacy Analysis CLI applies the code pattern settings that you define on the Codacy UI together with the command-line options you specify to run the tools in a Docker container.

See the next section to set up the supported "wrapped" client-side tools with Codacy Analysis CLI:

-   [aligncheck](https://gitlab.com/opennota/check){: target="_blank"}
-   [deadcode](https://github.com/tsenart/deadcode){: target="_blank"}
-   [SpotBugs](https://spotbugs.github.io/){: target="_blank"}, including the plugins [FBContrib](https://github.com/mebigfatguy/fb-contrib){: target="_blank"} and [Find Security Bugs](https://find-sec-bugs.github.io/){: target="_blank"}

## Setting up "wrapped" client-side tools

To set up "wrapped" client-side tools with Codacy:

1.  Download and install the [Codacy Analysis CLI](running-local-analysis.md).

1.  Enable the setting **Run analysis through build server** in your repository **Settings**, tab **General**, **Repository analysis**.
    
    This enables Codacy to wait for the results of the local analysis before resuming the analysis of your commits.

1.  Obtain a [project API Token](../repositories-configure/integrations/project-api.md) from the page **Integrations** in your Codacy repository settings.

1.  Run the Codacy Analysis CLI on the root of your repository and specify the name of the client-side tool with the option `--tool`. For example:

    ```bash
    codacy-analysis-cli analyze --tool spotbugs \
                                --directory <SOURCE-CODE-PATH> \
                                --project-token <PROJECT-TOKEN> \
                                --allow-network \
                                --upload \
                                --verbose
    ```

The Codacy Analysis CLI will run the tool on your repository and upload the results to Codacy so you can use them in your workflow.

The following sections include specific information for the client-side tools that require it.

## Running SpotBugs

Before running SpotBugs with the Codacy Analysis CLI, you must compile your Java or Scala repository on your build server as you would normally do.

### Detecting sources and compiled classes

The Codacy Analysis CLI tries to find the compiled classes and map results to the source files automatically. If you use Maven, Gradle, or sbt the Codacy Analysis CLI also detects the default layouts automatically.

If there is an issue with detection, you can configure these paths manually by adding a `.codacy.yml` [Codacy configuration file](../repositories-configure/codacy-configuration-file.md) to the root of the repository:

```yml
---
engines:
  spotbugs:
    enabled: true
    modules:
      - classesDirectories: [ "core/target/classes" ]
        sourceDirectories:  [ "core/src/main" ]
      - classesDirectories: [ "api/target/classes" ]
        sourceDirectories:  [ "api/src/main" ]
```

### Increasing the timeout to run SpotBugs

When running SpotBugs on the compiled classes of larger projects, the [default execution timeout of 15 minutes](https://github.com/codacy/codacy-analysis-cli/blob/master/README.md#commands-and-configuration){: target="_blank"} may not be enough for SpotBugs to complete the analysis.

To increase the timeout that SpotBugs has to execute, use the option `--tool-timeout` when running the Codacy Analysis CLI. For example, use `--tool-timeout 1hour` to set the timeout to one hour.
