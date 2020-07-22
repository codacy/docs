# Why is my file missing?

In your repository’s Files tab you can view all the files that Codacy detected in your repository:

![Screen_Shot_2019-06-26_at_19.39.19.png](/images/Screen_Shot_2019-06-26_at_19.39.19.png)

While all of the files in your repository should be displayed here, here is a list of reasons some might not:

-   You are viewing the incorrect branch - In the Files view you can pick which branch is being displayed at any given time, and sometimes not all files exist in all branches.
-   The file has an extension that is not on the list of supported extensions - Codacy has a default set of extensions that will associate to each language. Any file that has an extension that does not match any of those on the list will not appear in Codacy. You can find detailed information [here](/hc/en-us/articles/207994395-Language-Extensions) on how to configure this list.
-   The file might have been ignored - Codacy allows you to ignore files that should not be analyzed. Those files will not be displayed on the UI. You can find more details on how to ignore files [here](/hc/en-us/articles/360005097654-Ignore-files-from-Codacy-analysis).
-   The file might be too big - Codacy will only display files up to 150 KB. You can find more details on this [here](/hc/en-us/articles/360025964333).
