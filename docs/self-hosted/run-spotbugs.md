# Run SpotBugs

<table>
  <tbody>
    <tr>
      <td style="background-color: #ffc4ad;">
        <p>
          Codacy Self-hosted running on Docker is deprecated since April 2020 and will <strong>stop being supported on February 16, 2021</strong>.<br/>
          Codacy will continue to provide critical bug fixes and tool updates for this version (but no more feature enhancements) until the end of support.
        </p>
        <p>
          <a href="/chart/" target="_self">Click here for updated documentation on how to install and configure Codacy Self-hosted on Kubernetes or MicroK8s.</a>
        </p>
        <p>
          If you are a current customer and have any questions regarding the migration process, please reach out to your CSM or <a href="mailto:success@codacy.com" target="_blank">success@codacy.com</a> for more information.
        </p>
      </td>
    </tr>
  </tbody>
</table>

[SpotBugs](https://spotbugs.github.io/) is available for Codacy Self-hosted, with the following plugins: [Find Security Bugs](https://find-sec-bugs.github.io/) and
[FBContrib](https://github.com/mebigfatguy/fb-contrib).

To run this tool, you simply need to compile your Java or Scala repository on your build server, as you would normally do, and then invoke the [codacy-analysis-cli](/hc/en-us/articles/360008254833-Run-local-analysis-and-Push-results) on the root of the repository specifying the tool SpotBugs.

```sh
codacy-analysis-cli analyse --tool spotbugs \
                            --directory <SOURCE-CODE-PATH> \
                            --project-token <PROJECT-TOKEN> \
                            --allow-network \
                            --codacy-api-base-url <API-BASE-URL> \
                            --upload \
                            --verbose
```

The Codacy CLI will then run SpotBugs on the compiled classes of your repository, parse the results and if you set up the [push results](/hc/en-us/articles/360008254833-Run-local-analysis-and-Push-results#push-results) options, these results can be sent to Codacy and used in the analysis for the Self-hosted version.

## Detecting Sources and Compiled Classes

Codacy tries to find the classes and map results to the files automatically. If you use Maven, Gradle and SBT then the default layouts are detected automatically as well.

You have the option to configure these paths manually if there is an issue with detection. To do so, add [Codacy configuration file](/hc/en-us/articles/115002130625-Codacy-Configuration-File)  to the repository root - **.codacy.yml**:

```yaml
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

To increase the timeout that each tool has to execute, use the option --tool-timeout when invoking the codacy-analysis-cli command.

For example, to set the timeout to 1 hour, run:

```sh
codacy-analysis-cli analyse --tool spotbugs \
                            --tool-timeout 1hour \
                            --directory <SOURCE-CODE-PATH> \
                            --project-token <PROJECT-TOKEN> \
                            --allow-network \
                            --codacy-api-base-url <API-BASE-URL> \
                            --upload \
                            --verbose
```

Please reach out if you need help with anything.
