# Client-side tools

Client-side tools enable you to run any linter either locally or as part of your CI process and integrating the results into your Codacy workflow. This way, Codacy presents the analysis information reported by your linters alongside all other code quality information on the dashboards.

Codacy provides two types of client-side tools: "standalone" and "wrapped".
<!-- TODO Improve these concept names and add descriptions -->

Codacy supports the "standalone" client-side tools below. Follow the links to set up "standalone" client-side tools with Codacy:

-   [Clang Tidy](https://github.com/codacy/codacy-clang-tidy#usage){: target="_blank"}
-   [Gosec](https://github.com/codacy/codacy-gosec#how-it-works){: target="_blank"}
-   [Staticcheck](https://github.com/codacy/codacy-staticcheck#usage){: target="_blank"}

Codacy supports the "wrapped" client-side tools below.

-   aligncheck
-   deadcode
-   [SpotBugs](https://spotbugs.github.io/){: target="_blank"}, available with the plugins [Find Security Bugs](https://find-sec-bugs.github.io/){: target="_blank"} and [FBContrib](https://github.com/mebigfatguy/fb-contrib){: target="_blank"}

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

See the following sections for specific information about the supported client-side tools.

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
