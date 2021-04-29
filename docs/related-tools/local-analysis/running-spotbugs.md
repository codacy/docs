---
description: Instructions on how to run SpotBugs as a client-side tool on Codacy.
---

# Running SpotBugs

To run SpotBugs as a [client-side tool](client-side-tools.md):

<!-- NOTE
     include-markdown breaks the final list in two, use include instead. -->
{% include "../../assets/includes/client-side-tool-instructions.md" %}

1.  Compile your Java or Scala repository on your build server, as you would normally do.

1.  Download and run the [Codacy Analysis CLI](https://github.com/codacy/codacy-analysis-cli#install){: target="_blank"} on the root of the repository, specifying the tool SpotBugs.

    ```bash
    codacy-analysis-cli analyze --tool spotbugs \
                                --allow-network \
                                --upload \
                                --verbose
    ```

    **If you're using an account API token**, you must also provide the flags `--provider`, `--username`, and `--project`. You can obtain the values for these flags from the URL of your repository dashboard on Codacy:

    ```bash
    codacy-analysis-cli analyze --provider <gh, ghe, gl, gle, bb, or bbe> \
                                --username <name of your Codacy organization> \
                                --project <name of your repository> \
                                --tool spotbugs \
                                --allow-network \
                                --upload \
                                --verbose
    ```

The Codacy Analysis CLI runs SpotBugs on the compiled classes of your repository and uploads the results to Codacy so you can use them in your workflow.

## Detecting sources and compiled classes

The Codacy Analysis CLI tries to find the compiled classes and map results to the source files automatically. If you use Maven, Gradle, or sbt the Codacy Analysis CLI also detects the default layouts automatically.

If there is an issue with detection, you can configure these paths manually by adding a `.codacy.yml` [Codacy configuration file](../../repositories-configure/codacy-configuration-file.md) to the root of the repository:

```yml
---
engines:
  spotbugs:
    modules:
      - classesDirectories: [ "core/target/classes" ]
        sourceDirectories:  [ "core/src/main" ]
      - classesDirectories: [ "api/target/classes" ]
        sourceDirectories:  [ "api/src/main" ]
```

## Increasing the timeout to run SpotBugs

When running SpotBugs on the compiled classes of larger projects, the [default execution timeout of 15 minutes](https://github.com/codacy/codacy-analysis-cli#commands-and-configuration){: target="_blank"} may not be enough for SpotBugs to complete the analysis.

To increase the timeout that SpotBugs has to execute, use the option `--tool-timeout` when running the Codacy Analysis CLI. For example, use `--tool-timeout 1hour` to set the timeout to one hour.
