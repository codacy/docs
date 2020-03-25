# Quality Settings

Here you can define quality settings for your repository, giving you control over the build status and success/fail of commits and pull requests. This feature enables you to turn off metrics like duplication or complexity.

To access the quality settings, please browse to **Settings &gt; Quality Settings**. Here you find three sections where you can set specific values on commit, pull request, and repository levels. Below we explain what these settings do and how they
work.

![](https://support.codacy.com/hc/article_attachments/360012252314/image-0.png)



## **1. Commits**
 

![](https://support.codacy.com/hc/article_attachments/360012280513/image-1.png)

To change the settings for commits, click on **Customize**:

-   **New issues are over** - Codacy marks the commit not up to standards if the number of issues introduced is bigger than the set value. The default value is 0.
-   **Complexity is over** - The commit is marked not up to standards if the introduced complexity is bigger than the set value. By default, this setting is off.
-   **Duplication is over** - The commit is marked not up to standards if the number of clones introduced is bigger than the set value. By default, this setting is off.
-   **Coverage variation is under** - The commit is marked not up to standards if the coverage introduced is smaller than the set value. By default, this setting is off.

## **2. Pull Requests**


![](https://support.codacy.com/hc/article_attachments/360012252294/image-2.png)

Upon clicking the pull request **Customize** button, the following settings appear:

-   **New issues are over** - Codacy marks the pull request not up to standards if the number of issues introduced is bigger than the set value. The default value is 0.
-   **Complexity is over** - The pull request is marked not up to standards pull request if the introduced complexity is bigger than the set value. By default, this setting is off.
-   **Duplication is over** - The pull request is marked not up to standards if the number of clones introduced is bigger than the set value. By default, this setting is off.
-   **Coverage variation is under** - The pull request is marked not up to standards if the coverage introduced is smaller than the value set here. This value refers to the variation of coverage on your PR, for example, if your repository has 90% coverage and you want to make sure this value doesn't decrease this you should set this to 0%. By default, this setting is off.


## **3. Repository**

 
![](https://support.codacy.com/hc/article_attachments/360012280493/image-3.png)


When you click on the Repository’s **Customize** button, Codacy presents you with:

-   **Issues are over** - This defines the threshold displayed in the dashboard.
-   **File complexity is over** - This defines the threshold represented on the complexity dashboard.
-   **File is complex when over** - A file is considered complex when its complexity is over this value.
-   **File duplication is over** - This defines the threshold shown on the duplication dashboard.
-   **File is duplicate when over** - A file is considered duplicated when it has more clones than this value.
-   **Coverage is under** - This defines the threshold represented on the coverage dashboard.
