# Quality Settings

<span class="wysiwyg-color-black wysiwyg-font-size-medium">Here you can
define quality settings for your repository, giving you control over the
build status and success/fail of commits and pull requests. This feature
enables you to turn off metrics like duplication or complexity.</span>

<span class="wysiwyg-color-black"> </span>

<span class="wysiwyg-color-black">To access the quality settings, please
browse to **Settings&gt;Quality Settings**<span
class="wysiwyg-font-size-medium">. Here you find three sections where
you can set specific values on commit, pull request, and repository
levels. Below we explain what these settings do and how they
work.</span></span>

![](https://support.codacy.com/hc/article_attachments/360012252314/image-0.png)

 

## **1. Commits**

------------------------------------------------------------------------

 

![](https://support.codacy.com/hc/article_attachments/360012280513/image-1.png)

<span class="wysiwyg-color-black">To change the settings for commits,
click on **Customize**<span
class="wysiwyg-font-size-medium">:</span></span>

-   <span class="wysiwyg-color-black">**New issues are over**<span
    class="wysiwyg-font-size-medium"> - Codacy marks the commit not up
    to standards if the number of issues introduced is bigger than the
    set value. The default value is 0.</span></span>
-   <span class="wysiwyg-color-black">**Complexity is over**<span
    class="wysiwyg-font-size-medium"> - The commit is marked not up to
    standards if the introduced complexity is bigger than the set value.
    By default, this setting is off.</span></span>
-   <span class="wysiwyg-color-black">**Duplication is over**<span
    class="wysiwyg-font-size-medium"> - The commit is marked not up to
    standards if the number of clones introduced is bigger than the set
    value. By default, this setting is off.</span></span>
-   <span class="wysiwyg-color-black">**Coverage variation is
    under**<span class="wysiwyg-font-size-medium"> - The commit is
    marked not up to standards if the coverage introduced is smaller
    than the set value. By default, this setting is off.</span></span>

<span class="wysiwyg-color-black wysiwyg-font-size-medium"> </span>

## **2. Pull Requests**

------------------------------------------------------------------------

 

![](https://support.codacy.com/hc/article_attachments/360012252294/image-2.png)

<span class="wysiwyg-color-black wysiwyg-font-size-medium"> </span>

<span class="wysiwyg-color-black">Upon clicking the pull request
**Customize** button<span class="wysiwyg-font-size-medium">, the
following settings appear:</span></span>

-   <span class="wysiwyg-color-black">**New issues are over** <span
    class="wysiwyg-font-size-medium">- Codacy marks the pull request not
    up to standards if the number of issues introduced is bigger than
    the set value. The default value is 0.</span></span>
-   <span class="wysiwyg-color-black">**Complexity is over** <span
    class="wysiwyg-font-size-medium">- The pull request is marked not up
    to standards pull request if the introduced complexity is bigger
    than the set value. By default, this setting is off.</span></span>
-   <span
    class="wysiwyg-color-black wysiwyg-font-size-medium">**Duplication
    is over** - The pull request is marked not up to standards if the
    number of clones introduced is bigger than the set value. By
    default, this setting is off.</span>
-   <span class="wysiwyg-color-black">**Coverage variation is under** -
    The pull request is marked not up to standards if the coverage
    introduced is smaller than the value set here. This value refers to
    the variation of coverage on your PR, for example, if your
    repository has 90% coverage and you want to make sure this value
    doesn't decrease this you <span
    class="wysiwyg-font-size-medium">should set this to 0%. By default,
    this setting is off.</span></span>

<span class="wysiwyg-color-black wysiwyg-font-size-medium"> </span>

## **3. Repository**

------------------------------------------------------------------------

 

![](https://support.codacy.com/hc/article_attachments/360012280493/image-3.png)

<span class="wysiwyg-color-black wysiwyg-font-size-medium"> </span>

When you click on the Repository’s **Customize**<span
class="wysiwyg-color-black wysiwyg-font-size-medium"> button,
Codacy presents you with:</span>

-   <span class="wysiwyg-color-black">**Issues are over**<span
    class="wysiwyg-font-size-medium"> - This defines the threshold
    displayed in the dashboard.</span></span>
-   <span class="wysiwyg-color-black">**File complexity is over**<span
    class="wysiwyg-font-size-medium"> - This defines the threshold
    represented on the complexity dashboard.</span></span>
-   <span class="wysiwyg-color-black">**File is complex when over**<span
    class="wysiwyg-font-size-medium"> - A file is considered complex
    when its complexity is over this value.</span></span>
-   <span class="wysiwyg-color-black">**File duplication is over**<span
    class="wysiwyg-font-size-medium"> - This defines the threshold shown
    on the duplication dashboard.</span></span>
-   <span class="wysiwyg-color-black">**File is duplicate when
    over**<span class="wysiwyg-font-size-medium"> - A file is considered
    duplicated when it has more clones than this value.</span></span>
-   <span class="wysiwyg-color-black">**Coverage is under**</span><span
    class="wysiwyg-color-black wysiwyg-font-size-medium"> - This defines
    the threshold represented on the coverage dashboard.</span>
