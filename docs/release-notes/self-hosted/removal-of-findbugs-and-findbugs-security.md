# Removal of Findbugs and Findbugs Security

On the week of May 9th 2020, <span
style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;">we'll
be removing some tools from Codacy.</span>

Those tools are Findbugs and Findbugs Security.

These tools have become deprecated and stopped being updated by their
maintainers. They provide a bad experience for Codacy users either by
reporting false positives or causing other unexpected issues.

We've been working on an alternative: **Spotbugs** support. SpotBugs is
the successor of FindBugs and<span
style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;"> picks
up from the point FindBugs leaves off. At the same time, it maintains
the support of the Findbugs’ community, specifically </span>the **Find
Security Bugs** and **FBContrib** plugins. 

<span
style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;">Spotbugs
on Codacy now supports both Java and Scala. And you</span><span
style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;"> can
now run Spotbugs regardless of the build tool you are using.</span>

<span
style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;">For
the time being, Spotbugs is only compatible with Codacy Self-hosted.
We'll be making it available for Cloud shortly.</span>

Read more about [enabling support for
Spotbugs](/hc/en-us/articles/360023916013) or
find out [why you should be using Spotbugs for your security
compliance](https://blog.codacy.com/further-enterprise-security-analysis-for-scala/).
