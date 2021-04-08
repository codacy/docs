---
rss_title: Codacy release notes RSS feed
rss_href: /feed_rss_created.xml
---

# Removal of NodeSecurity, GoLint, and SCSSLint

On the week of March 9th 2020, we'll be removing some tools from Codacy.

Those tools are NodeSecurity, GoLint, and SCSSLint.

These tools have become deprecated or stopped being updated by their maintainers and started providing a bad experience for Codacy users either by reporting false positives or causing other unexpected issues.

We've been working on alternatives for each tool. Continue reading to find out how you can replace each of the removed tools:

-   **NodeSecurity**: This tool detects outdated NPM dependencies. It stopped being maintained two years ago when [it was acquired and replaced by NPM](https://github.com/nodesecurity/nsp#the-node-security-platform-has-been-acquired-by-npm-inc) itself. Since it stopped being updated it will no longer find new vulnerabilities, thus becoming useless and only providing a false sense of security. _Recommendation: If you have an NPM repository you now have this functionality out-of-the-box._
-   **GoLint**: Last month we launched a new Go tool - [Revive](https://github.com/mgechev/revive) - which is a drop-in replacement for GoLint supporting all of its rules and even more. _Recommendation: Revive was enabled by default for your Go repositories with GoLint's. Check that the default patterns make sense for your team._
-   **SCSSLint**: [This tool is now unmaintained](https://github.com/sds/scss-lint#notice-consider-other-tools-before-adopting-scss-lint) for four years with the old maintainers suggesting that users migrate to Stylelint which is already supported by Codacy for quite some time. _Recommendation: Check that the Stylelint is enabled and its default patterns make sense for your team._
