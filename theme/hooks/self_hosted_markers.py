"""Check the Codacy Self-hosted version markers.

A version marker is a `self-hosted` admonition whose title is one of the two forms in
_INLINE_TITLE. The syntax is in .claude/reference/formatting.md.

A marker at or below `extra.codacy_self_hosted_min_version` is true for every supported
version, so it says nothing. Those are reported as warnings, which fail the strict
build: raising the support floor then lists every marker to remove.
"""

from __future__ import annotations

import logging
import re

# WARNING on purpose: strict mode turns these into build failures, which is the point.
_log = logging.getLogger("mkdocs.hooks.self_hosted_markers")

_VERSION = re.compile(r"^(\d+)\.(\d+)(?:\.\d+)?$")
_INLINE_MARKER = re.compile(r'^[ \t]*(?:!!!|\?\?\?\+?)[ \t]+self-hosted\b(.*)$', re.MULTILINE)
_INLINE_TITLE = re.compile(
    r'^[ \t]+"(?:Codacy Self-hosted v(?P<version>\d+\.\d+) and later|Not available on Codacy Self-hosted)"[ \t]*$'
)

_min_version: tuple[int, int] = (0, 0)


def _parse_version(value: str) -> tuple[int, int] | None:
    match = _VERSION.match(value)
    return (int(match.group(1)), int(match.group(2))) if match else None


def on_config(config):
    global _min_version
    value = str(config["extra"].get("codacy_self_hosted_min_version", ""))
    parsed = _parse_version(value)
    if parsed is None:
        raise ValueError(f"extra.codacy_self_hosted_min_version must look like 10.0.0, got {value!r}")
    _min_version = parsed
    return config


def on_page_markdown(markdown, page, config, files):
    for match in _INLINE_MARKER.finditer(markdown):
        where = f"'{page.file.src_uri}'"
        title = _INLINE_TITLE.match(match.group(1))
        if title is None:
            _log.warning(
                '%s has a self-hosted admonition titled %s. Use "Codacy Self-hosted vX.Y and later" '
                'or "Not available on Codacy Self-hosted".',
                where,
                match.group(1).strip() or "(none)",
            )
            continue
        version = title.group("version")
        if version and _parse_version(version) <= _min_version:
            _log.warning(
                "%s marks Codacy Self-hosted v%s, which is at or below the support floor "
                "(extra.codacy_self_hosted_min_version). Remove the marker.",
                where,
                version,
            )
    return markdown
