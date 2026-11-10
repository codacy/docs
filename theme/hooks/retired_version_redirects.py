"""Write redirect pages for the retired, versioned Self-hosted docs URLs.

The site used to publish one copy of the docs per Self-hosted version under
/vX.Y/. Those versions are retired, but search results and old installs still
link to them. data/retired-version-redirects.tsv maps each old path to its
current page, and this hook writes a redirect page for every version that
published it, in the same format mkdocs-redirects uses.

The list is too long for redirect_maps in mkdocs.yml (one entry per version and
page), so it lives in a data file instead.
"""

from __future__ import annotations

import html
import logging
from pathlib import Path

_DATA = Path(__file__).resolve().parents[2] / "data" / "retired-version-redirects.tsv"

_log = logging.getLogger("mkdocs.hooks.retired_version_redirects")

_TEMPLATE = """<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Redirecting...</title>
    <link rel="canonical" href="{url}">
    <meta name="robots" content="noindex">
    <script>var anchor=window.location.hash.substr(1);location.href="{url}"+(anchor?"#"+anchor:"")</script>
    <meta http-equiv="refresh" content="0; url={url}">
</head>
<body>
Redirecting...
</body>
</html>
"""


def _redirects():
    for line in _DATA.read_text(encoding="utf-8").splitlines():
        if not line or line.startswith("#"):
            continue
        path, target, versions = line.split("\t")
        for version in versions.split(","):
            yield f"{version}/{path}", target


def on_post_build(config, **kwargs):
    site_dir = Path(config["site_dir"])
    written: set[str] = set()
    count = 0
    for old_path, target in _redirects():
        destination = site_dir / old_path / "index.html"
        # Old versions published both /Chart/ and /chart/. On a case-insensitive
        # file system (macOS) they are one file, so the second write is skipped.
        if old_path.lower() in written:
            continue
        if destination.exists():
            raise RuntimeError(f"Retired version redirect would overwrite a built page: {destination}")
        written.add(old_path.lower())
        destination.parent.mkdir(parents=True, exist_ok=True)
        destination.write_text(_TEMPLATE.format(url=html.escape(target)), encoding="utf-8")
        count += 1
    _log.info("Wrote %d redirects for retired docs versions", count)
