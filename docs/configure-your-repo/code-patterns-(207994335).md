# Code Patterns

As a wise man once said, "You can't please everyone", and that is true
for code patterns. But don't you worry! You can choose from a range of
patterns to fit your needs.

 

## 1. Pattern details and filters

------------------------------------------------------------------------

 

Each pattern has a title and a short description. To see a detailed
explanation you can click on Show Details in the top right corner (mouse
over the pattern and the Show Details option will appear):

 

![](https://support.codacy.com/hc/en-us/article_attachments/203969219/pattern-explanation.png)

 

<span id="selectionBoundary_1538191356003_1969562107266174"
class="rangySelectionBoundary"
style="line-height: 0; display: none;"></span>The pattern explanation
shows more detail about the issues it can detect and how to fix them.

You can filter the patterns by category using the side menu:<span
id="selectionBoundary_1538191356003_6378308482427995"
class="rangySelectionBoundary"
style="line-height: 0; display: none;"></span>

 

<img src="https://support.codacy.com/hc/en-us/article_attachments/115004092189/c14f895e0f57610b7fd706e27b31925e785e1a184549e765daf9f1e69ad54602.png" width="693" height="177" />

  

### <span class="ng-binding"><span id="selectionBoundary_1538191371968_6307191414366646" class="rangySelectionBoundary" style="line-height: 0; display: none;"></span>The issues detected by Codacy belong to one of the following categories:</span>

**Code Style** - Code formatting and syntax problems. Ex: variable name
style, enforce the use of brackets and quotation marks

**Error Prone** - Code that may hide bugs and language keywords that
should be used with caution. Ex: == in Javascript or Option.get in Scala

**Code Complexity** - Highly complex methods and classes that should be
refactored

**Performance** - Code that could have performance problems

**Compatibility** - Used mainly for frontend code, detects compatibility
problems across different browser versions

**Unused Code** - Unused variables and methods, code that can't be
reached

**Security** - All security problems

**Documentation** - Detects methods and classes that do not have the
correct comment annotations

##  

## 2. Configure your repository patterns

------------------------------------------------------------------------

 

To configure the patterns used to analyse your repository simply click
on the checkbox on the left of the title:

 

![](https://support.codacy.com/hc/en-us/article_attachments/203969269/enabled.png)

 

<span id="selectionBoundary_1538191427574_7703923586671284"
class="rangySelectionBoundary"
style="line-height: 0; display: none;"></span>When you change the
enabled patterns you can reanalyse your repository. To do that, just
enter the latest commit from your list on the **Commit** view and click
to
[reanalyse](https://support.codacy.com/hc/en-us/articles/213840489-How-do-I-reanalyse-my-commit-). <span
id="selectionBoundary_1538191427574_9720132835185136"
class="rangySelectionBoundary"
style="line-height: 0; display: none;"></span>

 

<figure>
<img src="https://support.codacy.com/hc/en-us/article_attachments/115004092209/b76fc1f9e8dab5a1db65856b0dd09ce79a156a013573cdef5a700e823dc53547.png" width="637" height="450" alt="" />
</figure>

 

## 3. Account vs Repository Patterns

------------------------------------------------------------------------

###  Account<span class="ng-binding"> Patterns</span>

Here you can change the default selection of patterns by enabling /
disabling  them for all future repositories added by you.  <span
style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;">Just
go to </span>**Account Settings**<span
style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;">
-&gt; </span>**Default Patterns:**

![<span class="wysiwyg-font-size-small wysiwyg-color-black60">Account
Patterns</span>](https://support.codacy.com/hc/article_attachments/115005881393/Screen_Shot_2018-01-12_at_11.21.22.png)

### <span class="ng-binding"><span id="selectionBoundary_1538191496580_4422751245661616" class="rangySelectionBoundary" style="line-height: 0; display: none;"></span>Repository Patterns</span>

Here you can specify the patterns you want to use for each repository.
When you change your account patterns it doesn't affect pattern
selection for repositories already added. You can go to **Code
patterns:**

![<span class="wysiwyg-font-size-small wysiwyg-color-black60">Repository
Patterns</span>](https://support.codacy.com/hc/article_attachments/360038394674/Screen_Shot_2019-06-18_at_17.57.58.png)

  

## <span id="selectionBoundary_1538191518205_1935486925386296" class="rangySelectionBoundary" style="line-height: 0; display: none;"></span>4. I have my own tool configuration file

------------------------------------------------------------------------

If you have configuration files for your static analysis tool of choice,
just add it to the root of your repository and Codacy will pick it up
automatically.

**<span class="wysiwyg-font-size-large">Supported Configuration
files</span>**

Codacy currently supports configuration files for several tools. To have
results accordingly to your configuration file, you need to go to the
Code Patterns view and select "Configuration file" for the respective
tool and select the option as shown in the example below.

![Screen\_Shot\_2017-10-09\_at\_18.54.12.png](https://support.codacy.com/hc/article_attachments/115003197494/Screen_Shot_2017-10-09_at_18.54.12.png)

<span id="selectionBoundary_1538191573076_4069043064518669"
class="rangySelectionBoundary"
style="line-height: 0; display: none;"></span>The known file names for
each tool are the following:<span
id="selectionBoundary_1538191796948_0474495644883528"
class="rangySelectionBoundary"
style="line-height: 0; display: none;"></span><span
id="selectionBoundary_1538191845233_767848177534157"
class="rangySelectionBoundary"
style="line-height: 0; display: none;"></span><span
id="selectionBoundary_1538191848555_5182808786680806"
class="rangySelectionBoundary"
style="line-height: 0; display: none;"></span>

 

<table>
<colgroup>
<col style="width: 25%" />
<col style="width: 25%" />
<col style="width: 25%" />
<col style="width: 25%" />
</colgroup>
<tbody>
<tr class="odd">
<td><span id="selectionBoundary_1538191594655_9531402557826543" class="rangySelectionBoundary" style="line-height: 0; display: none;"></span><span id="selectionBoundary_1538191596622_9399755710550892" class="rangySelectionBoundary" style="line-height: 0; display: none;"></span><span id="selectionBoundary_1538191602543_986850480797725" class="rangySelectionBoundary" style="line-height: 0; display: none;"></span><span id="selectionBoundary_1538191605322_04150090510517268" class="rangySelectionBoundary" style="line-height: 0; display: none;"></span><span id="selectionBoundary_1538191607587_3638251844232845" class="rangySelectionBoundary" style="line-height: 0; display: none;"></span><span id="selectionBoundary_1538191622258_7577388418725017" class="rangySelectionBoundary" style="line-height: 0; display: none;"></span><span id="selectionBoundary_1538191628101_054388022887029486" class="rangySelectionBoundary" style="line-height: 0; display: none;"></span><span id="selectionBoundary_1538191631170_2031374925243694" class="rangySelectionBoundary" style="line-height: 0; display: none;"></span><span id="selectionBoundary_1538191632998_6537871194237608" class="rangySelectionBoundary" style="line-height: 0; display: none;"></span><span id="selectionBoundary_1538191754163_39771160118183047" class="rangySelectionBoundary" style="line-height: 0; display: none;"></span><span id="selectionBoundary_1538191756831_5335760161718051" class="rangySelectionBoundary" style="line-height: 0; display: none;"></span><span id="selectionBoundary_1538191759723_6413535721948176" class="rangySelectionBoundary" style="line-height: 0; display: none;"></span>Tool name</td>
<td>Language</td>
<td>Files detected</td>
<td><span id="selectionBoundary_1537192041084_09661430381414005" class="rangySelectionBoundary" style="line-height: 0; display: none;"></span><span id="selectionBoundary_1537192044635_2976836866483388" class="rangySelectionBoundary" style="line-height: 0; display: none;"></span><span id="selectionBoundary_1537192047521_699379000965554" class="rangySelectionBoundary" style="line-height: 0; display: none;"></span><span id="selectionBoundary_1537192054308_2287598253023564" class="rangySelectionBoundary" style="line-height: 0; display: none;"></span><span id="selectionBoundary_1537192088715_3359587881980426" class="rangySelectionBoundary" style="line-height: 0; display: none;"></span><span id="selectionBoundary_1537192090707_43558619385723296" class="rangySelectionBoundary" style="line-height: 0; display: none;"></span><span id="selectionBoundary_1537192092858_15455059126129722" class="rangySelectionBoundary" style="line-height: 0; display: none;"></span><span id="selectionBoundary_1537192096277_2497599218303561" class="rangySelectionBoundary" style="line-height: 0; display: none;"></span><span id="selectionBoundary_1538191725137_5996967334028676" class="rangySelectionBoundary" style="line-height: 0; display: none;"></span>Other info<span id="selectionBoundary_1538191725137_8452836979702854" class="rangySelectionBoundary" style="line-height: 0; display: none;"></span><span id="selectionBoundary_1537192096277_22592837756120843" class="rangySelectionBoundary" style="line-height: 0; display: none;"></span><span id="selectionBoundary_1537192092857_5660218423279004" class="rangySelectionBoundary" style="line-height: 0; display: none;"></span><span id="selectionBoundary_1537192090707_6204336962558596" class="rangySelectionBoundary" style="line-height: 0; display: none;"></span><span id="selectionBoundary_1537192088715_641440957894754" class="rangySelectionBoundary" style="line-height: 0; display: none;"></span><span id="selectionBoundary_1537192054308_7430491630497769" class="rangySelectionBoundary" style="line-height: 0; display: none;"></span><span id="selectionBoundary_1537192047521_9695335322622092" class="rangySelectionBoundary" style="line-height: 0; display: none;"></span><span id="selectionBoundary_1537192044634_7070900331226875" class="rangySelectionBoundary" style="line-height: 0; display: none;"></span><span id="selectionBoundary_1537192041084_2990392543751743" class="rangySelectionBoundary" style="line-height: 0; display: none;"></span></td>
</tr>
<tr class="even">
<td>Ameba</td>
<td>Crystal</td>
<td>.ameba.yml</td>
<td> </td>
</tr>
<tr class="odd">
<td><a href="https://docs.openstack.org/bandit/latest/config.html">Bandit</a></td>
<td> Python</td>
<td>bandit.yml, .bandit </td>
<td> To solve flagged valid Python "assert" statements, create a bandit.yml in the root of the repo containing: skips: ['B101']</td>
</tr>
<tr class="even">
<td>Brakeman</td>
<td>Ruby</td>
<td>config/brakeman.yml</td>
<td> </td>
</tr>
<tr class="odd">
<td>Checkstyle</td>
<td> Java</td>
<td>checkstyle.xml </td>
<td>Supports config file in other dirs<span id="selectionBoundary_1537191768403_14002236472279983" class="rangySelectionBoundary" style="line-height: 0; display: none;"></span> than root and can search up to 5 dirs into the repository. </td>
</tr>
<tr class="even">
<td>Codenarc</td>
<td>Groovy</td>
<td>.codenarcrc</td>
<td> </td>
</tr>
<tr class="odd">
<td>credo</td>
<td>Elixir</td>
<td>.credo.exs</td>
<td> </td>
</tr>
<tr class="even">
<td>CSSLint</td>
<td>CSS</td>
<td>.csslintrc<span id="selectionBoundary_1538191632998_0837612447570022" class="rangySelectionBoundary" style="line-height: 0; display: none;"></span><span id="selectionBoundary_1538191631170_280877690783089" class="rangySelectionBoundary" style="line-height: 0; display: none;"></span></td>
<td> </td>
</tr>
<tr class="odd">
<td>detekt</td>
<td>Kotlin</td>
<td><p>default-detekt-config.yml, detekt.yml</p></td>
<td>Supports config file in other dirs<span id="selectionBoundary_1537191768403_14002236472279983" class="rangySelectionBoundary" style="line-height: 0; display: none;"></span> than root and can search up to 5 dirs into the repository.<span id="selectionBoundary_1537191974431_03227171965184672" class="rangySelectionBoundary" style="line-height: 0; display: none;"></span><span id="selectionBoundary_1537191985455_5722839372807735" class="rangySelectionBoundary" style="line-height: 0; display: none;"></span> </td>
</tr>
<tr class="even">
<td><a href="https://eslint.org/docs/user-guide/configuring">ESLint</a></td>
<td>JavaScript, Typescript, JSON</td>
<td><p> .eslintrc.js, .eslintrc.yaml,.eslintrc.yml, .eslintrc.json,<br />
.eslintrc</p></td>
<td> <a href="https://github.com/codacy/codacy-eslint/blob/master/src/eslintDefaultOptions.ts#L26">Plugins in the UI</a><br />
 <a href="https://github.com/codacy/codacy-eslint/blob/master/package.json#L119">Other Plugins</a></td>
</tr>
<tr class="odd">
<td>Hadolint</td>
<td>Docker </td>
<td><p>.hadolint.yaml </p></td>
<td> </td>
</tr>
<tr class="even">
<td>JSHint</td>
<td>JavaScript </td>
<td><p>.jshintrc </p></td>
<td> </td>
</tr>
<tr class="odd">
<td><a href="https://github.com/squizlabs/PHP_CodeSniffer/wiki/Advanced-Usage">PHP CodeSniffer</a></td>
<td>PHP </td>
<td><span id="selectionBoundary_1538191852116_9494978257132454" class="rangySelectionBoundary" style="line-height: 0; display: none;"></span><span id="selectionBoundary_1538191854350_080220818219914" class="rangySelectionBoundary" style="line-height: 0; display: none;"></span><span id="selectionBoundary_1538191856185_6366666403953458" class="rangySelectionBoundary" style="line-height: 0; display: none;"></span><span id="selectionBoundary_1538191858583_4512479204074096" class="rangySelectionBoundary" style="line-height: 0; display: none;"></span><span id="selectionBoundary_1538191862983_45117833095202187" class="rangySelectionBoundary" style="line-height: 0; display: none;"></span><span id="selectionBoundary_1538191864974_34980740763760565" class="rangySelectionBoundary" style="line-height: 0; display: none;"></span><span id="selectionBoundary_1538191900311_895110841940091" class="rangySelectionBoundary" style="line-height: 0; display: none;"></span><span id="selectionBoundary_1538191902407_6861874056581532" class="rangySelectionBoundary" style="line-height: 0; display: none;"></span><span id="selectionBoundary_1538191904401_3225531304630238" class="rangySelectionBoundary" style="line-height: 0; display: none;"></span><span id="selectionBoundary_1538191923663_4654059144672422" class="rangySelectionBoundary" style="line-height: 0; display: none;"></span><span id="selectionBoundary_1538191937711_20726810352743974" class="rangySelectionBoundary" style="line-height: 0; display: none;"></span><span id="selectionBoundary_1538191942184_39276866440192193" class="rangySelectionBoundary" style="line-height: 0; display: none;"></span><span id="selectionBoundary_1538191944095_261890343541616" class="rangySelectionBoundary" style="line-height: 0; display: none;"></span>phpcs.xml, phpcs.xml.dist</td>
<td> </td>
</tr>
<tr class="even">
<td>PHPMD</td>
<td>PHP </td>
<td>codesize.xml</td>
<td> </td>
</tr>
<tr class="odd">
<td>PMD</td>
<td> Apex, Java, Javascript, JSP, XML, Velocity and Visualforce</td>
<td>ruleset.xml, apex-ruleset.xml </td>
<td>Supports config file in other dirs<span id="selectionBoundary_1537191768403_14002236472279983" class="rangySelectionBoundary" style="line-height: 0; display: none;"></span> than root and can search up to 5 dirs into the repository. </td>
</tr>
<tr class="even">
<td>Prospector</td>
<td> Python</td>
<td> .landscape.yml, .landscape.yaml, landscape.yml, landscape.yaml,<br />
.prospector.yml, .prospector.yaml, prospector.yml, prospector.yaml</td>
<td> </td>
</tr>
<tr class="odd">
<td>Pylint</td>
<td>Python</td>
<td>pylintrc, .pylintrc </td>
<td><a href="https://github.com/codacy/codacy-pylint/blob/master/build.sbt#L39">Plugins</a> </td>
</tr>
<tr class="even">
<td>RemarkLint</td>
<td>Markdown</td>
<td>.remarkrc, .remarkrc.json, .remarkrc.yaml, .remarkrc.yml, .remarkrc.js</td>
<td> </td>
</tr>
<tr class="odd">
<td>Rubocop</td>
<td>Ruby </td>
<td>.rubocop.yml</td>
<td> </td>
</tr>
<tr class="even">
<td>ScalaStyle</td>
<td>Scala </td>
<td>scalastyle_config.xml, scalastyle-config.xml </td>
<td> </td>
</tr>
<tr class="odd">
<td>SCSSLint</td>
<td>SASS </td>
<td>.scss-lint.yml </td>
<td> </td>
</tr>
<tr class="even">
<td>Sonar C#</td>
<td> C#</td>
<td>SonarLint.xml </td>
<td> </td>
</tr>
<tr class="odd">
<td>Spotbugs</td>
<td> Java, Scala</td>
<td> findbugs.xml, findbugs-includes.xml, findbugs-excludes.xml</td>
<td> Supports config file in other dirs than root and can search up to 5 dirs into the repository.</td>
</tr>
<tr class="even">
<td>Stylelint</td>
<td>LESS, SASS, CSS</td>
<td>.stylelintrc, stylelint.config.js, .stylelintrc.json, .stylelintrc.yaml, .stylelintrc.js, stylelintrc.yml </td>
<td>Supports config file in other dirs<span id="selectionBoundary_1537191768403_14002236472279983" class="rangySelectionBoundary" style="line-height: 0; display: none;"></span> than root and can search up to 5 dirs into the repository. </td>
</tr>
<tr class="odd">
<td>SwiftLint</td>
<td>Swift </td>
<td>.swiftlint.yml </td>
<td> </td>
</tr>
<tr class="even">
<td>Tailor</td>
<td>Swift </td>
<td> .tailor.yml</td>
<td> </td>
</tr>
<tr class="odd">
<td>TSLint</td>
<td>TypeScript </td>
<td> tslint.json</td>
<td> </td>
</tr>
<tr class="even">
<td>tsqllint</td>
<td>SQL</td>
<td> .tsqllintrc</td>
<td> </td>
</tr>
</tbody>
</table>

<span id="selectionBoundary_1538191848555_9254831644917261"
class="rangySelectionBoundary"
style="line-height: 0; display: none;"><span
id="selectionBoundary_1538996811503_5292384332827462"
class="rangySelectionBoundary"
style="line-height: 0; display: none;"></span></span><span
id="selectionBoundary_1538191845233_04105249065952066"
class="rangySelectionBoundary"
style="line-height: 0; display: none;"></span><span
id="selectionBoundary_1538191796948_8664569103347228"
class="rangySelectionBoundary"
style="line-height: 0; display: none;"></span><span
class="wysiwyg-font-size-large">**<span
id="selectionBoundary_1538191763831_7690786196870356"
class="rangySelectionBoundary"
style="line-height: 0; display: none;"></span> **</span>

## <span id="selectionBoundary_1538191962428_5632002160073428" class="rangySelectionBoundary" style="line-height: 0; display: none;"></span>5. Configuring the repository root directory for analysis

<span class="s1">By default, Codacy starts the analysis on the
repository's root. However, you can set up a different repository folder
on which to start the analysis using a [<span class="s2">Codacy
configuration
file</span>](https://support.codacy.com/hc/en-us/articles/115002130625-Codacy-Configuration-File).
This file needs to be named **".codacy.yaml"** or **".codacy.yml"** and
must be placed in the repository's root.</span>

<span class="s1">See example below:</span>

[<span
class="ng-scope ng-binding">.codacy.yaml</span>](https://support.codacy.com/knowledge/articles/115000566729/en-us?brand_id=549689)

    ---
    engines:
     rubocop:
     enabled: true
     exclude_paths:
     - config/engines.yml
     base_sub_dir: test/baseDir
      
