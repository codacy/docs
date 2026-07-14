"""Add stable, lightweight image metadata to rendered documentation content."""

from __future__ import annotations

import logging
import posixpath
import re
import struct
from pathlib import Path
from urllib.parse import unquote, urlsplit
from defusedxml import ElementTree as SafeElementTree
from defusedxml.common import DefusedXmlException


# Deliberately linear: match up to the first ">". A quote-aware pattern would
# need a nested quantifier that static analysis flags as ReDoS-prone, and it is
# unnecessary here because attributes are inserted right after the "<img" token
# (see _add_attributes), which stays valid even if a ">" inside an attribute
# value ends the match early.
_IMAGE_TAG = re.compile(r"<img\b[^>]*>", re.IGNORECASE)
_SOURCE = re.compile(r"\bsrc\s*=\s*([\"'])(.*?)\1", re.IGNORECASE | re.DOTALL)
_DIMENSION = re.compile(r"^\s*([0-9]+(?:\.[0-9]+)?)\s*(?:px)?\s*$", re.IGNORECASE)
_STYLE = re.compile(r"\bstyle\s*=\s*([\"'])(.*?)\1", re.IGNORECASE | re.DOTALL)
_WIDE_SCREENSHOT_MINIMUM = 280

# Logged at DEBUG on purpose: MkDocs' strict mode promotes WARNING-level records
# to build failures, and an unreadable image must never break the docs build.
_log = logging.getLogger("mkdocs.hooks.image_metadata")

_files_identity = None
_files_by_destination: dict[str, Path] = {}
_dimensions_by_path: dict[Path, tuple[str, str] | None] = {}


def _has_attribute(tag: str, name: str) -> bool:
    return re.search(rf"\s{name}\s*=", tag, re.IGNORECASE) is not None


def _has_inline_dimension(tag: str) -> bool:
    """Return whether author CSS already controls either image dimension."""

    match = _STYLE.search(tag)
    return bool(
        match
        and re.search(r"(?:^|;)\s*(?:width|height)\s*:", match.group(2), re.IGNORECASE)
    )


def _format_dimension(value: float) -> str:
    return str(int(value)) if value.is_integer() else f"{value:g}"


def _svg_dimension(value: str | None) -> float | None:
    if not value:
        return None
    match = _DIMENSION.match(value)
    if not match:
        return None
    number = float(match.group(1))
    return number if number > 0 else None


def _image_dimensions(path: Path) -> tuple[str, str] | None:
    cached = _dimensions_by_path.get(path)
    if cached is not None or path in _dimensions_by_path:
        return cached

    dimensions = None
    try:
        suffix = path.suffix.lower()
        if suffix == ".png":
            with path.open("rb") as image:
                header = image.read(24)
            if header[:8] == b"\x89PNG\r\n\x1a\n" and len(header) == 24:
                width, height = struct.unpack(">II", header[16:24])
                if width and height:
                    dimensions = (str(width), str(height))
        elif suffix == ".gif":
            with path.open("rb") as image:
                header = image.read(10)
            if header[:6] in (b"GIF87a", b"GIF89a") and len(header) == 10:
                width, height = struct.unpack("<HH", header[6:10])
                if width and height:
                    dimensions = (str(width), str(height))
        elif suffix == ".svg":
            with path.open("rb") as svg_file:
                _, root = next(SafeElementTree.iterparse(svg_file, events=("start",)))
            width = _svg_dimension(root.get("width"))
            height = _svg_dimension(root.get("height"))
            if not width or not height:
                view_box = root.get("viewBox", "").replace(",", " ").split()
                if len(view_box) == 4:
                    view_width = _svg_dimension(view_box[2])
                    view_height = _svg_dimension(view_box[3])
                    width = width or view_width
                    height = height or view_height
            if width and height:
                dimensions = (_format_dimension(width), _format_dimension(height))
    except (
        OSError,
        SafeElementTree.ParseError,
        DefusedXmlException,
        StopIteration,
        struct.error,
        ValueError,
    ):
        # An unreadable or unusual image must never make the docs build fail.
        _log.debug("Could not read image dimensions for %s", path, exc_info=True)
        dimensions = None

    _dimensions_by_path[path] = dimensions
    return dimensions


def _destination_files(files) -> dict[str, Path]:
    global _files_identity, _files_by_destination
    if files is not _files_identity:
        _files_identity = files
        _files_by_destination = {
            posixpath.normpath(file.dest_uri): Path(file.abs_src_path)
            for file in files
            if file.abs_src_path
        }
    return _files_by_destination


def _local_image(source: str, page, files) -> Path | None:
    parsed = urlsplit(source)
    if parsed.scheme or parsed.netloc or parsed.path.startswith("data:"):
        return None

    source_path = unquote(parsed.path)
    if not source_path or "{{" in source_path or "}}" in source_path:
        return None

    if source_path.startswith("/"):
        destination = posixpath.normpath(source_path.lstrip("/"))
    else:
        destination = posixpath.normpath(
            posixpath.join(posixpath.dirname(page.file.dest_uri), source_path)
        )
    return _destination_files(files).get(destination)


def _add_attributes(tag: str, attributes: list[tuple[str, str]]) -> str:
    if not attributes:
        return tag
    insertion = "".join(f' {name}="{value}"' for name, value in attributes)
    # Insert right after the "<img" token rather than before the closing ">".
    # This keeps the output valid even when a later attribute value contains a
    # ">" that ended the tag match early — the attributes still land inside the
    # tag, before any author attributes.
    return f"{tag[:4]}{insertion}{tag[4:]}"


def on_page_content(html, page, config, files):
    """Reserve image space and defer non-leading screenshots in article HTML."""

    eligible_images = 0

    def enhance(match: re.Match[str]) -> str:
        nonlocal eligible_images
        tag = match.group(0)
        source = _SOURCE.search(tag)
        if not source:
            return tag

        path = _local_image(source.group(2), page, files)
        dimensions = _image_dimensions(path) if path else None
        if not dimensions:
            return tag

        width, height = dimensions
        attributes = []
        has_explicit_dimensions = (
            _has_attribute(tag, "width")
            or _has_attribute(tag, "height")
            or _has_inline_dimension(tag)
        )
        if not has_explicit_dimensions:
            attributes.append(("width", width))
            attributes.append(("height", height))
        if not _has_attribute(tag, "decoding"):
            attributes.append(("decoding", "async"))

        if float(width) >= _WIDE_SCREENSHOT_MINIMUM:
            eligible_images += 1
            if eligible_images > 1 and not _has_attribute(tag, "loading"):
                attributes.append(("loading", "lazy"))

        return _add_attributes(tag, attributes)

    return _IMAGE_TAG.sub(enhance, html)
