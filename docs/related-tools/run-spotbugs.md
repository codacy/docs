# Run SpotBugs

[SpotBugs](https://spotbugs.github.io/) is available for Codacy Cloud and Codacy Self-hosted, with the following plugins:

-   [Find Security Bugs](https://find-sec-bugs.github.io/)
-   [FBContrib](https://github.com/mebigfatguy/fb-contrib)

To run this tool:

1.  Enable the setting **Run analysis through build server** in your repository **Settings**, tab **General**, **Repository analysis**.
1.  Compile your Java or Scala repository on your build server, as you would normally do.
1.  Run the [Codacy Analysis CLI](run-local-analysis.md) on the root of the repository specifying the tool SpotBugs. Obtain the [project API Token](../repositories-configure/integrations/project-api.md) from the page **Integrations** in your Codacy repository settings.

    !!! important
        **If you're using Codacy Self-hosted** you must also specify the endpoint where the Codacy instance is running either by using the flag `--codacy-api-base-url` or the environment variable `CODACY_API_BASE_URL`.

    ```bash
    codacy-analysis-cli analyze --tool spotbugs \
                                --directory <SOURCE-CODE-PATH> \
                                --project-token <PROJECT-TOKEN> \
                                --allow-network \
                                --upload \
                                --verbose
    ```

The Codacy CLI will then run SpotBugs on the compiled classes of your repository and upload these results to Codacy to be used in your workflow.

## Detecting sources and compiled classes

Codacy tries to find the classes and map results to the files automatically. If you use Maven, Gradle, and SBT then the default layouts are detected automatically as well.

If there is an issue with detection, you can configure these paths manually by adding a [Codacy configuration file](../repositories-configure/codacy-configuration-file.md) `.codacy.yml` to the repository root:

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

## Increasing the timeout to run SpotBugs

When running SpotBugs on the compiled classes of larger projects, the [default execution timeout of 15 minutes](https://github.com/codacy/codacy-analysis-cli/blob/master/README.md#commands-and-configuration) may not be enough for SpotBugs to complete the analysis.

To increase the timeout that each tool has to execute, use the option `--tool-timeout` when running the Codacy Analysis CLI. For example, use `--tool-timeout 1hour` to set the timeout to one hour.
