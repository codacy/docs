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
    count_missing = 0
    for tool in tools:
        if tool["uuid"] in IGNORED_TOOL_UUIDS:
            continue
        tool_name = tool["name"]
        tool_short_name = tool["shortName"]
        # Hack to ensure that Pylint is detected
        if tool_short_name == "pylintpython3":
            tool_name = "Pylint"
        tool_languages = tool["languages"]
        cursor = True
        code_patterns = []
        while cursor:
            r = requests.get(ENDPOINT_URL_CODE_PATTERNS.substitute(toolUuid=tool["uuid"]) + "?limit=1000" +
                             ("" if cursor == True else f"&cursor={cursor}"))
            code_patterns += r.json()["data"]
            cursor = r.json()["pagination"].get("cursor", False)
        security_code_patterns = [cp for cp in code_patterns if cp["category"] == "Security"]
        if len(security_code_patterns) > 0:
            if tool_name.lower() in documentation or tool_short_name.lower() in documentation:
                print(emoji.emojize(f":check_mark_button: {tool_name} ({', '.join(map(str, tool_languages))}) "
                                    f"is included, supports {len(security_code_patterns)} security code patterns"))
            else:
                print(emoji.emojize(f":cross_mark: {tool_name} ({', '.join(map(str, tool_languages))}) "
                                    f"ISN'T included, supports {len(security_code_patterns)} security code patterns"))
                count_missing += 1
    if count_missing:
        print(f"\nFound {count_missing} tools that aren't included in the documentation.")
        exit(1)
    else:
        print(emoji.emojize("\nAll tools are included in the documentation! :party_popper:"))
        exit(0)


argh.dispatch_command(check_security_tools)
