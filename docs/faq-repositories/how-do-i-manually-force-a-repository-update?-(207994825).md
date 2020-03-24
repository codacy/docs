# How do I manually force a repository update?

Codacy relies on post-commit hooks to trigger analysis<span
style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;">.
To re-trigger the analysis you can re send the hook on the git
provider.</span>

For instant updates, configure [post-commit
hooks](https://support.codacy.com/hc/en-us/articles/214085885-Post-Commit-Hooks).
