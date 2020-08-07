# Removal of Findbugs and Findbugs Security

On the week of May 9th 2020, we'll be removing Findbugs and Findbugs Security from Codacy.

These tools have become deprecated and stopped being updated by their maintainers. They provide a bad experience for Codacy users either by reporting false positives or causing other unexpected issues.

We've been working on an alternative: **Spotbugs** support. SpotBugs is the successor of FindBugs and picks up from the point FindBugs leaves off. At the same time, it maintains the support of the Findbugs’ community, specifically the **Find Security Bugs** and **FBContrib** plugins.

Spotbugs on Codacy now supports both Java and Scala. And you can now run Spotbugs regardless of the build tool you are using.

Read more about [enabling support for Spotbugs](/hc/en-us/articles/360023916013) or find out [why you should be using Spotbugs for your security compliance](https://blog.codacy.com/further-enterprise-security-analysis-for-scala/).
