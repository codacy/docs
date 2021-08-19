# Skipping an analysis

By default, Codacy automatically analyzes a repository whenever you push changes. However, you can override this behavior by adding the tag `[ci skip]` or `[skip ci]` anywhere in the subject or body of the commit message. For example:

```bash
$ git commit -a -m "Add eslint-plugin-chai-expect version 1.1.1 [ci skip]"
```

If you later decide to analyze a skipped commit, you can override any skip tags by [reanalyzing the commit](../repositories/how-do-i-reanalyze-my-repository.md).

!!! note
    This feature isn't supported for pull requests.
