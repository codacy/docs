"""Add stable, lightweight image metadata to rendered documentation content."""

from __future__ import annotations

import posixpath
import re
import struct
from pathlib import Path
from urllib.parse import unquote, urlsplit
from xml.etree import ElementTree


_IMAGE_TAG = re.compile(r"<img\b[^>]*>", re.IGNORECASE)
_SOURCE = re.compile(r"\bsrc\s*=\s*([\"'])(.*?)\1", re.IGNORECASE | re.DOTALL)
_DIMENSION = re.compile(r"^\s*([0-9]+(?:\.[0-9]+)?)\s*(?:px)?\s*$", re.IGNORECASE)
_CLASS = re.compile(r"\bclass\s*=\s*([\"'])(.*?)\1", re.IGNORECASE | re.DOTALL)
_STYLE = re.compile(r"\bstyle\s*=\s*([\"'])(.*?)\1", re.IGNORECASE | re.DOTALL)
_ADMONITION_TITLE = re.compile(
    r"(?P<container><(?P<tag>div|details)\b(?P<attributes>[^>]*)>)"
    r"(?P<space>\s*)"
    r"(?P<title><p\b(?=[^>]*\bclass\s*=\s*[\"'][^\"']*\badmonition-title\b)[^>]*>|<summary\b[^>]*>)",
    re.IGNORECASE | re.DOTALL,
)
_UNTITLED_ADMONITION = re.compile(
    r"(?P<container><(?P<tag>div|details)\b"
    r"(?=[^>]*\bclass\s*=\s*[\"'][^\"']*\badmonition\b)(?P<attributes>[^>]*)>)"
    r"(?P<space>\s*)"
    r"(?!(?:<p\b(?=[^>]*\bclass\s*=\s*[\"'][^\"']*\badmonition-title\b)[^>]*>|<summary\b))",
    re.IGNORECASE | re.DOTALL,
)
_WIDE_SCREENSHOT_MINIMUM = 280

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
            _, root = next(ElementTree.iterparse(path, events=("start",)))
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
    except (OSError, ElementTree.ParseError, StopIteration, struct.error, ValueError):
        # An unreadable or unusual image must never make the docs build fail.
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
    end = tag.rfind("/>")
    if end < 0:
        end = tag.rfind(">")
    return f"{tag[:end]}{insertion}{tag[end:]}"


def _admonition_icon(attributes: str) -> str:
    """Select a solid Ionicon that matches the generated admonition type."""

    match = _CLASS.search(attributes)
    classes = set(match.group(2).lower().split()) if match else set()
    if classes & {"danger", "failure", "bug"}:
        return "alert-circle"
    if classes & {"warning", "caution", "attention"}:
        return "warning"
    if classes & {"success"}:
        return "checkmark-circle"
    if classes & {"tip", "hint"}:
        return "bulb"
    if classes & {"abstract", "summary"}:
        return "document-text"
    if classes & {"example"}:
        return "flask"
    if classes & {"quote"}:
        return "chatbubble"
    return "information-circle"


def _add_admonition_icons(html: str) -> str:
    """Emit status icons at build time, avoiding client-side DOM mutation."""

    def enhance(match: re.Match[str]) -> str:
        icon = _admonition_icon(match.group("attributes"))
        return (
            f'{match.group("container")}{match.group("space")}{match.group("title")}'
            f'<ion-icon name="{icon}" aria-hidden="true" '
            'class="docs-ionicon docs-ionicon--admonition"></ion-icon>'
        )

    def enhance_untitled(match: re.Match[str]) -> str:
        icon = _admonition_icon(match.group("attributes"))
        return (
            f'{match.group("container")}{match.group("space")}'
            f'<ion-icon name="{icon}" aria-hidden="true" '
            'class="docs-ionicon docs-ionicon--admonition"></ion-icon>'
        )

    html = _UNTITLED_ADMONITION.sub(enhance_untitled, html)
    return _ADMONITION_TITLE.sub(enhance, html)


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

    return _add_admonition_icons(_IMAGE_TAG.sub(enhance, html))
