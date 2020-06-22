# Codacy Configuration File

Codacy supports configuring certain advanced features through a
configuration file.

You can exclude files using glob patterns and add custom extensions to
languages.

You can ignore files globally, for certain categories (duplication,
metrics or coverage) or for a specific tool (e.g.: Rubocop). The
category metrics refers to the information you find under [File
details](/hc/en-us/articles/207279849#2-file-detail)
such as Size, Structure and Complexity. 

To add custom extensions to a language you can also add an entry in this
file, but keep in mind that some tools might not work out of the box
with those extensions and might need changes.

If you want to disable an engine that needs to be done directly in the
[Code
Patterns](/hc/en-us/articles/207994335-Code-Patterns)
page.

<span class="s1">The configuration file name must be
**"**</span>**.codacy.yaml"** or **<span
class="s1">"</span>.codacy.yml"** and should be placed in the root of
your repository.

[<span
class="ng-scope ng-binding">.codacy.yaml</span>](/knowledge/articles/115000566729/en-us?brand_id=549689)

    ---
    engines:
     rubocop:
       exclude_paths:
         - config/engines.yml
     duplication:
       exclude_paths:
         - config/engines.yml
     metric:
       exclude_paths:
         - config/engines.yml
     coverage:
       exclude_paths:
         - config/engines.yml
    languages:
      css:
        extensions:
          - '-css.resource'
    exclude_paths:
      - '.bundle/**'
      - 'spec/**/*'
      - 'benchmarks/**/*'
      - '**.min.js'
      - '**/tests/**' 

 

You must use the following [Java glob
syntax](https://docs.oracle.com/javase/7/docs/api/java/nio/file/FileSystem.html#getPathMatcher%28java.lang.String%29) to
configure your 'exclude\_paths' to ignore files:

 

'\*\*.extension' ignores all files with the same extension across all
your repository

'test/\*' ignores all files in the root of test  
'test/\*\*' ignores everything inside test  
'test/\*\*/\*' ignores all files inside sub-folder of test  
'\*\*/\*.resource' ignores all .resource in all folders and sub-folders

Please note that if the configuration file exists in your repository,
any 'exclude paths' [defined on Codacy's
UI](/hc/en-us/articles/360005097654) will not
apply.

## Validating your configuration file

You can use the
[codacy-analysis-cli](https://github.com/codacy/codacy-analysis-cli#install)
to validate the contents of your configuration file. Run the following
command in the folder where the configuration file is located:

    codacy-analysis-cli validate-configuration --directory `pwd`

## Which tools can be configured and which name should I use?

All tools that Codacy supports are configurable using our configuration
file. The names that should be used for each of them are:

    ameba
    bandit
    brakeman
    bundleraudit
    checkstyle
    codacy-scalameta-pro
    codenarc
    coffeelint
    cppcheck
    credo
    csslint
    detekt
    eslint
    findbugs
    findbugssec
    flawfinder
    golint
    govet
    hadolint
    jacksonlinter
    jshint
    nsp
    phpcs
    phpmd
    pmd-legacy
    pmd
    prospector
    psscriptanalyzer
    pylint
    pylintpython3
    remark-int
    rubocop
    scalastyle
    scsslint
    shellcheck
    sonarscharp
    spotbugs
    SQLint
    stylelint
    swiftlint
    tailor
    tslint
    tsqllint

 If you have questions about Codacy configuration file, please, contact
us at support@codacy.com. 

 

 
