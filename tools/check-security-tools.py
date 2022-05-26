#!/usr/bin/env python3
import argh
import emoji
import requests

from string import Template

DOCUMENTATION_PATH = "../docs/repositories/security-monitor.md"
ENDPOINT_URL_TOOLS = "https://api.codacy.com/api/v3/tools"
ENDPOINT_URL_CODE_PATTERNS = Template("https://api.codacy.com/api/v3/tools/${toolUuid}/patterns")
IGNORED_TOOL_UUIDS = ["34225275-f79e-4b85-8126-c7512c987c0d",  # Pylint 1.9 (legacy)
                      "cf05f3aa-fd23-4586-8cce-5368917ec3e5"]  # ESLint 7 (deprecated)


def check_security_tools():
    print("Checking if each tool that detects security issues is included in the documentation:\n")
    with open(DOCUMENTATION_PATH, "r") as file:
        documentation = file.read().lower()
    tools = requests.get(ENDPOINT_URL_TOOLS).json()["data"]
    count = 0
    for tool in tools:
        if tool["uuid"] in IGNORED_TOOL_UUIDS:
            continue
        tool_name = tool["name"]
        tool_short_name = tool["shortName"]
        # Hack to ensure that Pylint is detected
        if tool_short_name == "pylintpython3":
            tool_name = "Pylint"
        tool_languages = tool["languages"]
        r = requests.get(ENDPOINT_URL_CODE_PATTERNS.substitute(toolUuid=tool["uuid"]))
        code_patterns = r.json()["data"]
        cursor = r.json()["pagination"].get("cursor", False)
        while cursor:
            r = requests.get(ENDPOINT_URL_CODE_PATTERNS.substitute(toolUuid=tool["uuid"]) + f"?cursor={cursor}")
            code_patterns += r.json()["data"]
            cursor = r.json()["pagination"].get("cursor", False)
        for code_pattern in code_patterns:
            if code_pattern["category"] == "Security":
                if tool_name.lower() in documentation or tool_short_name.lower() in documentation:
                    print(emoji.emojize(f":check_mark_button: {tool_name} ({', '.join(map(str, tool_languages))}) "
                                        f"is included, checked {len(code_patterns)} patterns"))
                else:
                    print(emoji.emojize(f":cross_mark: {tool_name} ({', '.join(map(str, tool_languages))}) "
                                        f"ISN'T included, checked {len(code_patterns)} patterns"))
                    count += 1
                break
    if count:
        print(f"\nFound {count} tools that aren't included in the documentation.")
        exit(1)
    else:
        print(emoji.emojize("\nAll tools are included in the documentation! :party_popper:"))
        exit(0)


argh.dispatch_command(check_security_tools)
