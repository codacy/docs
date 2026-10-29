"""Render and check the Codacy Self-hosted availability markers.

Two markers say which Self-hosted versions a piece of content applies to. The syntax
for each is in .claude/reference/formatting.md:

- Page level: an `availability` mapping in the front matter, rendered as a line under
  the page title.
- Section level: a `self-hosted` admonition whose title is one of the two forms in
  _INLINE_TITLE.

A marker at or below `extra.codacy_self_hosted_min_version` is true for every supported
version, so it says nothing. Those are reported as warnings, which fail the strict
build: raising the support floor then lists every marker to remove.
"""

from __future__ import annotations

import html
import logging
import re

# WARNING on purpose: strict mode turns these into build failures, which is the point.
_log = logging.getLogger("mkdocs.hooks.self_hosted_markers")

_VERSION = re.compile(r"^(\d+)\.(\d+)(?:\.\d+)?$")
_INLINE_MARKER = re.compile(r'^[ \t]*(?:!!!|\?\?\?\+?)[ \t]+self-hosted\b(.*)$', re.MULTILINE)
_INLINE_TITLE = re.compile(
    r'^[ \t]+"(?:Codacy Self-hosted v(?P<version>\d+\.\d+) and later|Not available on Codacy Self-hosted)"[ \t]*$'
)
_FIRST_H1_END = re.compile(r"</h1>", re.IGNORECASE)

_min_version: tuple[int, int] = (0, 0)
_availability_by_page: dict[str, tuple[bool, bool | str] | None] = {}


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


def _check_version(version: str, where: str) -> None:
    parsed = _parse_version(version)
    if parsed is not None and parsed <= _min_version:
        _log.warning(
            "%s marks Codacy Self-hosted v%s, which is at or below the support floor "
            "(extra.codacy_self_hosted_min_version). Remove the marker.",
            where,
            version,
        )


def _availability(page) -> tuple[bool, bool | str] | None:
    """Return (cloud, self_hosted) from the front matter, or None when not set."""

    value = page.meta.get("availability")
    if value is None:
        return None
    where = f"Front matter of '{page.file.src_uri}'"
    if not isinstance(value, dict) or set(value) - {"cloud", "self_hosted"}:
        _log.warning("%s: 'availability' only takes the keys 'cloud' and 'self_hosted'.", where)
        return None
    cloud = value.get("cloud", True)
    self_hosted = value.get("self_hosted", True)
    if not isinstance(cloud, bool):
        _log.warning("%s: 'availability.cloud' must be true or false.", where)
        return None
    if not isinstance(self_hosted, bool):
        # Quoted in YAML on purpose: an unquoted 13.0 is a float and 13.10 becomes 13.1.
        if not isinstance(self_hosted, str) or _parse_version(self_hosted) is None:
            _log.warning("%s: 'availability.self_hosted' must be true, false, or a quoted version such as \"13.0\".", where)
            return None
        _check_version(self_hosted, where)
    if not cloud and self_hosted is False:
        _log.warning("%s: the page is marked as available on neither Codacy Cloud nor Codacy Self-hosted.", where)
        return None
    return cloud, self_hosted


def on_page_markdown(markdown, page, config, files):
    _availability_by_page[page.file.src_uri] = _availability(page)
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
        elif title.group("version"):
            _check_version(title.group("version"), where)
    return markdown


def _render(cloud: bool, self_hosted: bool | str) -> str:
    items = []
    if cloud:
        items.append('<span class="docs-availability__item">Codacy Cloud</span>')
    if self_hosted is True:
        items.append('<span class="docs-availability__item">Codacy Self-hosted</span>')
    elif self_hosted:
        items.append(f'<span class="docs-availability__item">Codacy Self-hosted v{html.escape(self_hosted)} and later</span>')
    unavailable = (
        '<span class="docs-availability__item docs-availability__item--unavailable">Not available on Codacy Self-hosted</span>'
        if self_hosted is False
        else ""
    )
    return (
        '<p class="docs-availability"><span class="docs-availability__label">Available on</span>'
        + "".join(items)
        + unavailable
        + "</p>"
    )


def on_page_content(content, page, config, files):
    availability = _availability_by_page.get(page.file.src_uri)
    # Both true is the default for every page, so there is nothing to say.
    if availability is None or availability == (True, True):
        return content
    block = _render(*availability)
    match = _FIRST_H1_END.search(content)
    if match is None:
        return block + content
    return content[: match.end()] + block + content[match.end() :]
