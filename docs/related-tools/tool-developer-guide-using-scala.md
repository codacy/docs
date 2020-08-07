# Tool Developer Guide - Using Scala

## Scala template to integrate an external tool on Codacy

We use external tools at Codacy, in this tutorial we provide our own template written in Scala to help you integrate the tool of your choice.

You can also fork the code of one of our tools, and modify it; here are some examples:

-   [codacy-phpmd](https://github.com/codacy/codacy-phpmd)
-   [codacy-jshint](https://github.com/codacy/codacy-jshint)
-   [codacy-pmdJava](https://github.com/codacy/codacy-pmdJava).

This tutorial covers only the template code to write the engine; if you didn't check the full tutorial, please refer to the [Tool Developer Guide](tool-developer-guide.md).

## Scala Engine Template

We use Scala to integrate our tools at Codacy. In this template, you only need to do a couple of things to integrate your tool:

-   Configure the **build.sbt** so it generates the docker to run your tool
-   Extend the **codacy.dockerApi.Tool** trait

## Configuring build.sbt

Our Scala template is built using sbt, which already has a great plugin to generate dockers, [sbt-native-packager](https://github.com/sbt/sbt-native-packager).

To configure a docker, you should edit the build.sbt in the root directory of our template.

One thing you probably want to change is the _installAll_ value, which contains the commands to install the tools and all necessary dependencies.

## Implementing Tool trait

When extending the **Tool** trait, you have to implement the **apply** method.

When a client runs your tool, the **apply** method of our template is invoked. Here you have everything you need to invoke the tool. After you have your results from the tool, put them in our **Result** format, and then just return them.

[Scala](https://docs.codacy.com/docs/tool-developer-guide-using-scala)

```scala
package codacy.mytool

import scala.sys.process._
import codacy.dockerApi._

object MyTool extends Tool{

    override def apply(path: Path, conf: Option[Seq[PatternDef]], files: Option[Set[Path]])(implicit spec: Spec): Try[Iterable[Result]] = {

        //TODO: Your code goes here

    }
}
```

-   **path:** The root path where the files to test are located (usually `/src`)
-   **conf:** Patterns to run (optional)
-   **files:** Files to test (optional), their path is relative to the
-   **path** received
-   **spec:** Tool configuration based on your patterns.json

The behavior of your application method should vary depending on the optional parameters. If you receive no **files**, you should invoke the tool for all files from **path** (path is the root directory, files are searched recursively for all folders in **path**). If you receive no **conf**, you should test with the default patterns.

When receiving **conf** or **files**, you should only run your tool for the subset of patterns in **conf** and files in **files**.

You must put each result in our **Result** type.

The used types like **PatternDef** and **Result** are defined as case classes. These and the other types are defined in **dockerApi/package.scala**.

[dockerApi/package.scala](https://docs.codacy.com/docs/tool-developer-guide-using-scala)

```scala
case class PatternDef(patternId: PatternId, parameters: Option[Set[ParameterDef]])

case class Result(filename: SourcePath, message: ResultMessage, patternId: PatternId, line: ResultLine)

//...
```

## Code details of our template

The entry point of our template for you is the **Engine** object. In the **codacy.Engine**, you can see the object **Engine** extends a DockerEngine that receives a **Tool**.

[Engine.scala](/hc/en-us/articles/207280379-Tool-Developer-Guide-Using-Scala)

```scala
object Engine extends DockerEngine(MyTool)
```

Your tool must extend **Tool**, (as shown before, MyTemplate already extends it), and override the **apply** method.

When you want to execute a command, we recommend you generate the sequence you want to run and use the process API provided by `scala.sys.process._` to run it and pick up the result.

[Scala](/hc/en-us/articles/207280379-Tool-Developer-Guide-Using-Scala)

```scala
import scala.sys.process._

//...

//The sequence of strings to run
val cmd = Seq("pmd", "-d", "/src/", "-f", "xml")

//run the command > pmd -d /src/ -f xml
val cmdResponse = cmd.!

//...
```

As a final note, you may write the code to run the tool in any way you want. Simply return the results from the external tool at the end of the **apply** method, and our code will take care of the rest.

If you have any doubts about the template please contact us.
