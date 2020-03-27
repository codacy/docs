# Ignore files from Codacy analysis

<span class="wysiwyg-font-size-medium">In some situations, you may want
to exclude files from Codacy's analyses and there are few ways you can
achieve this.</span>

# Repository Settings

You can exclude files from your repository analysis on your Repository
Settings -&gt; Ignored files and select the files you want to ignore.
This view only shows the files on your main branch.

 

![Screen\_Shot\_2018-05-29\_at\_13.51.51.png](/images/Screen_Shot_2018-05-29_at_13.51.51.png)

 

# <span class="wysiwyg-font-size-large">Codacy configuration file</span>

If you want to ignore files in a certain category (duplication,
metrics or coverage) or in a specific tool (e.g. rubocop), <span
class="s1">you can create a file similar to the one below and add it to
the root of the repository with the files you want to ignore. This will
ignore files in all branches</span>

<span class="s1">The file name must
be **"**</span>**.codacy.yaml" **or** <span
class="s1">"</span>.codacy.yml"**.

[<span
class="ng-scope ng-binding">.codacy.yaml</span>](https://support.codacy.com/knowledge/articles/115000566729/en-us?brand_id=549689)

    ---
    engines:
     rubocop:
       enabled: true
       exclude_paths:
         - config/engines.yml
     duplication:
       enabled: true
       exclude_paths:
         - config/engines.yml
     metric:
       enabled: true
       exclude_paths:
         - config/engines.yml
     coverage:
       enabled: true
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
      - '*.min.js'
      - '**/tests/**'

If you wish to, you should use the following syntax:

 

'\*\*.extension' ignores all files with the same extension across all
your repository

'test/\*' ignores all files in the root of test
'test/\*\*' ignores everything inside test
'test/\*\*/\*' ignores all files inside sub-folder of test
'\*\*/\*.resource' Ignores all .resource in all folders and sub-folders

Please note that if the Codacy configuration file exists in the repo and
if you have 'exclude paths' the settings defined in the UI (shown
above), will not apply.

 

# <span class="wysiwyg-font-size-large">Other considerations about ignored files</span>

In some cases, you can also ignore some files using your own
configuration files although this depends on this option being supported
by the tool itself.

Also there are few files that Codacy ignores by default, matching the
following regular exceptions:

.\*\[\\.-\]min\\.css
.\*\[\\.-\]min\\.js
.\*node\_modules/.\*
.\*bower\_components
.\*vendor/.\*
.\*third\[\_-\]?\[Pp\]arty
.\*docs?/.\*
.\*samples
.\*releases?/.\*
.\*builds
.\*dist/.\*
.\*external
.\*libs/.\*
.\*d3\\.js
.\*angular(-resource|)?\\.js
.\*select2(-resource|)?\\.js
.\*-ace\\.js
.\*typeahead\\.js
.\*jquery-ui\\.js
.\*reveal\\.js
.\*three\\.js
.\*chart\\.js
.\*jquery\\.js
.\*underscore\\.js
.\*lodash\\.js
.\*bootstrap\\.js
.\*bootstrap\\.css
.\*font-awesome\\.css
