# Run SpotBugs

[SpotBugs](https://spotbugs.github.io/) is available for Codacy Cloud
and Codacy Self-hosted, with the following plugins: [Find Security
Bugs](https://find-sec-bugs.github.io/) and
[FBContrib](https://github.com/mebigfatguy/fb-contrib).

To run this tool:

1.  Enable the setting “Run analysis through build server” under your
    repository Settings &gt; General &gt; Repository analysis.
2.  Compile your Java or Scala repository on your build server, as you
    would normally do;
3.  Invoke the
    [codacy-analysis-cli](/hc/en-us/articles/360008254833-Run-local-analysis-and-Push-results)
    on the root of the repository specifying the tool SpotBugs.

<!-- -->

    codacy-analysis-cli analyse --tool spotbugs \
                                --directory <SOURCE-CODE-PATH> \
                                --project-token <PROJECT-TOKEN> \
                                --allow-network \
                                --codacy-api-base-url <API-BASE-URL> \
                                --upload \
                                --verbose

The Codacy CLI will then run SpotBugs on the compiled classes of your
repository and upload these results to Codacy to be used in your
workflow.

<span class="wysiwyg-font-size-large">Detecting Sources and Compiled
Classes</span>

Codacy tries to find the classes and map results to the files
automatically. If you use Maven, Gradle and SBT then the default layouts
are detected automatically as well.

You have the option to configure these paths manually if there is an
issue with detection. To do so, add [Codacy configuration
file](/hc/en-us/articles/115002130625-Codacy-Configuration-File) 
to the repository root - **.codacy.yml**:

    ---
    engines:
     spotbugs:
       enabled: true
       modules:
         - classesDirectories: [ "core/target/classes" ]
           sourceDirectories:  [ "core/src/main" ]
         - classesDirectories: [ "api/target/classes" ]
           sourceDirectories:  [ "api/src/main" ]

<span class="wysiwyg-font-size-large">Increasing the timeout to run
SpotBugs</span>

When running SpotBugs on the compiled classes of larger projects, the
[default execution timeout of 15
minutes](https://github.com/codacy/codacy-analysis-cli/blob/master/README.md#commands-and-configuration)
may not be enough for SpotBugs to complete the analysis.

To increase the timeout that each tool has to execute, use the option
--tool-timeout when invoking the codacy-analysis-cli command.

For example, to set the timeout to 1 hour, run:

    codacy-analysis-cli analyse --tool spotbugs \
                                --tool-timeout 1hour \
                                --directory <SOURCE-CODE-PATH> \
                                --project-token <PROJECT-TOKEN> \
                                --allow-network \
                                --codacy-api-base-url <API-BASE-URL> \
                                --upload \
                                --verbose
