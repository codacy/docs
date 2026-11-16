"""Rank Codacy Self-hosted pages below Cloud pages in site search.

Most readers are on Codacy Cloud, but Self-hosted pages often share a Cloud
page's title (for example, "Slack integration"), so they can outrank the page
the reader needs. Material's search plugin reads a per-page boost from
`search.boost` in the page metadata; this sets it for every page under
`chart/` (the Self-hosted section) instead of repeating it in each page's
front matter. A page that sets its own `search.boost` keeps it.
"""

from __future__ import annotations

SELF_HOSTED_PREFIX = "chart/"
SELF_HOSTED_BOOST = 0.5


def on_page_markdown(markdown, page, **kwargs):
    if page.file.src_uri.startswith(SELF_HOSTED_PREFIX):
        search = page.meta.get("search") or {}
        search.setdefault("boost", SELF_HOSTED_BOOST)
        page.meta["search"] = search
    return markdown
