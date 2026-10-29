"""Render per-version Codacy Self-hosted facts from data/self-hosted-versions.yml.

Loaded by the macros plugin (`module_name` in mkdocs.yml). The data file is the single
source; pages never repeat its values by hand. Usage is in
.claude/reference/formatting.md, under "Codacy Self-hosted versions".
"""

from __future__ import annotations

import posixpath
import re
import textwrap
from pathlib import Path

import yaml

_DATA_FILE = "data/self-hosted-versions.yml"
_RELEASE_NOTE = "release-notes/self-hosted/self-hosted-v{version}.md"
_VERSION = re.compile(r"^\d+\.\d+\.\d+$")
# Only lowercase names count as placeholders, so shell variables such as ${HOME} pass through.
_PLACEHOLDER = re.compile(r"\{([a-z_]+)\}")


def _version_key(version: str) -> tuple[int, ...]:
    return tuple(int(part) for part in version.split("."))


def _load(config_dir: Path) -> dict:
    path = config_dir / _DATA_FILE
    data = yaml.safe_load(path.read_text(encoding="utf-8"))
    fields = data.get("fields")
    versions = data.get("versions")
    if not isinstance(fields, dict) or not fields:
        raise ValueError(f"{_DATA_FILE}: 'fields' must map each field name to its column heading.")
    if not isinstance(versions, list) or not versions:
        raise ValueError(f"{_DATA_FILE}: 'versions' must list at least one version.")
    expected = {"version", *fields}
    for row in versions:
        version = str(row.get("version", ""))
        if not _VERSION.match(version):
            raise ValueError(f"{_DATA_FILE}: version {version!r} must be quoted and look like \"16.0.0\".")
        if set(row) != expected:
            missing = ", ".join(sorted(expected - set(row))) or "none"
            extra = ", ".join(sorted(set(row) - expected)) or "none"
            raise ValueError(f"{_DATA_FILE}: v{version} has missing fields ({missing}) or unknown fields ({extra}).")
    order = [_version_key(row["version"]) for row in versions]
    if order != sorted(order, reverse=True) or len(set(order)) != len(order):
        raise ValueError(f"{_DATA_FILE}: list each version once, newest first.")
    return data


def _tab(label: str, body: str, code: str | None) -> str:
    body = body.strip("\n")
    if code:
        body = f"```{code}\n{body}\n```"
    return f'=== "{label}"\n\n' + textwrap.indent(body, "    ")


def define_env(env):
    data = _load(Path(env.conf["config_file_path"]).parent)
    fields: dict[str, str] = data["fields"]
    versions: list[dict] = data["versions"]

    # Not "self_hosted": extra.self_hosted is already a variable (the Self-hosted build flag).
    env.variables["self_hosted_versions"] = versions
    env.variables["self_hosted_latest"] = versions[0]
    env.variables["self_hosted_oldest"] = versions[-1]

    def label(row: dict) -> str:
        return f"Codacy Self-hosted v{row['version']}"

    def fill(template: str, row: dict) -> str:
        def replace(match: re.Match) -> str:
            name = match.group(1)
            if name not in row:
                raise ValueError(f"Unknown placeholder {{{name}}}. Use version or one of: {', '.join(fields)}.")
            return str(row[name])

        return _PLACEHOLDER.sub(replace, template)

    def release_note(row: dict) -> str:
        target = _RELEASE_NOTE.format(version=row["version"])
        return posixpath.relpath(target, posixpath.dirname(env.page.file.src_uri) or ".")

    @env.macro
    def self_hosted_table(*columns: str) -> str:
        """A table with one row per supported version and one column per field."""

        columns = columns or tuple(fields)
        unknown = [name for name in columns if name not in fields]
        if unknown:
            raise ValueError(f"Unknown field {', '.join(unknown)}. Use one of: {', '.join(fields)}.")
        lines = [
            "| Codacy Self-hosted | " + " | ".join(fields[name] for name in columns) + " |",
            "|" + "---|" * (len(columns) + 1),
        ]
        for row in versions:
            cells = [f"[v{row['version']}]({release_note(row)})", *(str(row[name]) for name in columns)]
            lines.append("| " + " | ".join(cells) + " |")
        return "\n".join(lines)

    @env.macro
    def self_hosted_tabs(template: str, code: str | None = None, cloud: str | None = None) -> str:
        """Content tabs, one per supported version, filling {field} placeholders from the data.

        `code` wraps each tab in a fenced code block of that language. `cloud` adds a
        first "Codacy Cloud" tab with that text, which takes no placeholders.
        """

        tabs = [_tab("Codacy Cloud", cloud, code)] if cloud is not None else []
        tabs += [_tab(label(row), fill(template, row), code) for row in versions]
        return "\n\n".join(tabs)
