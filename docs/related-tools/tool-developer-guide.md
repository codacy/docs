# Tool developer guide

## Integrate an external tool on Codacy

By creating a docker and writing code to handle the tool invocation and output, you can integrate the tool of your choice on Codacy!

!!! note
    To know more about dockers, and how to write a docker file please refer to <https://docs.docker.com/reference/builder/>.

We use external tools at Codacy; in this tutorial, we explain how you can integrate the tool of your choice with our platform.

You can check the code of an already implemented tool and, if you wish, fork it to start yours. You are free to modify it and use it for your integration.

We also have a [tutorial to integrate your tool using our Scala templates](tool-developer-guide-using-scala.md).

## Requirements

-   Docker definition with the tool you want to integrate
-   Define the documentation for the patterns provided by the tool

## Assumptions and behavior

-   To run the tool we provide the configuration file, **/src/.codacy.json**, with the files you should analyze and also the patterns you should check.
-   The files to analyze are located in **/src**, meaning that when provided in the configuration, the paths are relative to **/src**.

**.codacy.json**

-   **files:** Files to be analyzed (their path is relative to `/src`)
-   **tools:** Array of tools \*
    -   **name:** Unique identifier of the tool
    -   **patterns:** Array of patterns that must be checked
        -   **patternId:** Unique identifier of the pattern
        -   **parameters:** Parameters of the pattern
            -   **name:** Unique identifier of the parameter
            -   **value:** Value to be used as parameter value

```json
{
  "files" : ["foo/bar/baz.js", "foo2/bar/baz.php"],
  "tools":[
    {
      "name":"jshint",
      "patterns":[
        {
          "patternId":"latedef",
          "parameters":[
            {
              "name":"latedef",
              "value":"vars"
            }
          ]
        }
      ]
    }
  ]
}
```

!!! important
    If **/src/.codacy.json** doesn't exist or any of its contents (files or patterns) isn't available, you should invoke the tool for all files from **/src** (files should be searched recursively for all folders in **/src**) and check them with the default patterns.

    -   When receiving **/src/.codacy.json**, you should only run your tool for the subset of files in **files**, and for the patterns present on **patterns** for your tool **name**.

## Setup

1.  Write the docker file that will run the tool.

    It must have a binary entry point without any parameters.

2.  Write a _patterns.json_ with the configuration of your tool.

    This file must be located on **/docs/patterns.json**.

    -   **name:** Unique identifier of the tool (lower-case letters without
          spaces)

    -   **patterns:** The patterns that the tool provides

        -   **patternId:** Unique identifier of the pattern (lower-case
              letters without spaces)

        -   **level:** Severity level of the issue, one of **Error**, **Warning**, **Info**

        -   **category:** Category of the issue, one of **ErrorProne**, **CodeStyle**, **UnusedCode**, **Security**, **Compatibility**, **Performance**, **Documentation**

        -   **parameters:** Parameters received by the pattern

            -   **name:** Unique identifier of the parameter (lower-case
                  letters without spaces)
            -   **default:** Default value of the parameter

    ```json
        {
          "name":"jshint",
          "patterns":[
            {
              "patternId":"latedef",
              "level": "Error",
              "category": "UnusedCode",
              "parameters":[
                {
                  "name":"latedef",
                  "default":"vars"
                }
              ]
            }
          ]
        }
    ```

    !!! note
        For **level** types we have:

        -   **Error**, **Warning**, **Info**

        For **category** types we have:

        -   **ErrorProne**, **CodeStyle**, **UnusedCode**, **Security**, **Compatibility**, **Performance**, **Documentation**

3.  Write the code to run the tool.

    You are free to write this code in the language you want. Here you have to invoke the tool according to the configuration.

    After you have your results from the tool, you should print them to the standard output in our **Result** format, one result per line.

    !!! important
        The filename shouldn't include the prefix `/src/`

        Example:

        -   absolute path: `/src/folder/file.js`
        -   filename path: `folder/file.js`

    ```json
        {
          "filename":"codacy/core/test.js",
          "message":"found this in your code",
          "patternId":"latedef",
          "line":2
        }
    ```

    If you aren't able to run the analysis for any of the files requested you should return an error for each one of them to the standard output in our **Error** format.

    ```json
        {
          "filename":"codacy/core/test.js",
          "message":"could not parse the file",
        }
    ```

## Documentation

At Codacy we strive to provide the best value to our users and, to accomplish that, we document our patterns so that the user can better understand the problem and fix it.

At this point, your tool has everything it needs to run, but there is one other really important thing that you should do before submitting your docker: the documentation for your tool.

Your files for this section should be placed in `/docs/description/`.

In order to provide more details you can create:

-   A single `/docs/description/description.json`
-   Optional: A `/docs/description/<PATTERN-ID>.md` for each pattern

In the `description.json` you define the title for the pattern, brief description, time to fix (in minutes), and also a description of the parameters in the following format:

```json
[
  {
    "patternId":"latedef",
    "title":"This is a title",
    "description":"This is a description",
    "timeToFix": 5,
    "parameters":[
      {
        "name":"latedef",
        "description":"this is a param description"
      }
    ]
  }
]
```

Optional: To give a more detailed explanation about the issue, you should define the `<PATTERN-ID>.md`.

```markdown
    Fields in interfaces are automatically public static final, and methods are public abstract.
    Classes or interfaces nested in an interface are automatically public and static (all nested interfaces are automatically static).

    For historical reasons, modifiers which are implied by the context are accepted by the compiler, but are superfluous.

    Ex:

        public interface Foo {
            public abstract void bar();         // both abstract and public are ignored by the compiler
            public static final int X = 0;         // public, static, and final all ignored
            public static class Bar {}             // public, static ignored
            public static interface Baz {}         // ditto

            void foo();                            //this is correct
        }

        public class Bar {
            public static interface Baz {} // static ignored
        }

    [Source](http://pmd.sourceforge.net/pmd-5.3.2/pmd-java/rules/java/unusedcode.html#UnusedModifier)

You should explain the *what* and *why* of the issue. Adding an example
is always a nice way to help other people understand the problem. For a
more thorough explanation you can also add a link at the end referring a
more complete source.
```

## Tests

After all the docker is prepared you can now test your work.

To do it you should write test files and place them in **/docs/tests**, for example for PHP, **/docs/tests/UnusedModifier.php**.

Each test is composed by two parts.

-   Identification of the patterns on the file
-   Identification of the errors on the file

The pattern identification is placed in the beginning of the file in the following format:

-   `<LANGUAGE_COMMENT>#Patterns: <PATTERN_ID>,<PATTERN_ID>,...`

The error identification is placed in the line before the error should happen:

-   `<LANGUAGE_COMMENT>#<ERROR_LEVEL>: <PATTERN_ID>`

Instead of commenting in the line before the error, you can alternatively specify the line of the warning with this syntax:

-   `<LANGUAGE_COMMENT>#Issue: {"severity": "<ERROR_LEVEL>", "line": <LINE_NUMBER_WITH_ISSUE>, "patternId": "PATTERN_ID"}`

```php
//#Patterns: UnusedModifier
public interface Foo {
    //#Warn: UnusedModifier
    public abstract void bar();         // both abstract and public are ignored by the compiler
    //#Warn: UnusedModifier
    public static final int X = 0;      // public, static, and final all ignored
    //#Warn: UnusedModifier
    public static class Bar {}          // public, static ignored
    //#Warn: UnusedModifier
    public static interface Baz {}      // ditto

    void foo();
}

public class Bar {
    //#Warn: UnusedModifier
    public static interface Baz {} // static ignored
}
```

To run this use our test repository available [here](https://github.com/codacy/codacy-plugins-test).

You just need the docker image built in your local repository and then follow the steps to run it.

## Submit the Docker

### Running the docker

```sh
docker run -t \
--net=none \
--privileged=false \
--cap-drop=ALL \
--user=docker \
--rm=true \
-v <PATH-TO-FOLDER-WITH-FILES-TO-CHECK>:/src:ro \

<YOUR-DOCKER-NAME>:<YOUR-DOCKER-VERSION>
```

### Docker restrictions

-   Docker image size shouldn't exceed 500MB
-   Docker should contain a non-root user named docker with UID/GID 2004
-   All the source code of the docker must be public
-   The docker base must officially be supported on DockerHub
-   Your docker must be provided in a repository through a public git host (ex: GitHub, Bitbucket, ...)

### Docker submission

-   To submit the docker you should send an email to <mailto:support@codacy.com> with the link to the git repository with your docker definition.
-   The docker will then be subjected to a review by our team and we will then contact you with more details.

If you have any questions or suggestions regarding this guide please contact us at <mailto:support@codacy.com>.
