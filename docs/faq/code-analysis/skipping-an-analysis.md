# Skipping an analysis

By default, Codacy automatically analyzes a repository whenever you push changes. You can override this behavior by adding a `[ci skip]` or `[skip ci]` tag anywhere in a commit's title or message.

If you later decide to build a skipped commit, you can override any skip tags by reanalyzing the commit.

!!! note
    This feature is not supported for pull requests.

### Example commit message

```bash
$ git log origin/master..HEAD

commit 96121bec2f36b406d694ed4e03126483ad1baad6
Author: Rodrigo Fernandes
Date:   Wed Jan 31 10:01:47 2019 +0000

    Add eslint-plugin-chai-expect version 1.1.1 [ci skip]
```

When pushed, this commit will not be analyzed by Codacy because of the `[ci skip]` in the commit message.
