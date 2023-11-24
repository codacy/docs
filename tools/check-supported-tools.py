#!/usr/bin/env python3
import argh
import emoji
import requests

DOCUMENTATION_PATH = "../docs/getting-started/supported-languages-and-tools.md"
ENDPOINT_URL = "https://api.codacy.com/api/v3/tools"
IGNORED_TOOL_UUIDS = ["34225275-f79e-4b85-8126-c7512c987c0d",  # Pylint 1.9 (legacy)
                      "cf05f3aa-fd23-4586-8cce-5368917ec3e5",  # ESLint 7 (deprecated)
                      "0c5f0040-53b7-11e3-8f96-0800200c9a66",  # JSHint (deprecated)
                      "38794ba2-94d8-4178-ab99-1f5c1d12760c",  # bundler-audit (deprecated)
                      "612c22f7-663d-429c-ac02-e5cb3d1eb020",  # TSLint (deprecated)
                      "997201eb-0907-4823-87c0-a8f7703531e7",  # CSSLint (deprecated)
                      "cd6c01c6-7ff8-4a35-aaac-bbb0859564a1",  # Faux Pas (deprecated)
                      "ea1f5906-d2fc-4f84-926f-848273f5cf94"]  # tailor (deprecated)


def check_supported_tools():
    print("Checking if each tool is included in the documentation.\n")
    with open(DOCUMENTATION_PATH, "r") as file:
        documentation = file.read().lower()
    tools = requests.get(ENDPOINT_URL).json()["data"]
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
        if tool_name.lower() in documentation or tool_short_name.lower() in documentation:
            print(emoji.emojize(f":check_mark_button: {tool_name} is included "
                                f"({', '.join(map(str, tool_languages))})"))
        else:
            print(emoji.emojize(f":cross_mark: {tool_name} ISN'T included "
                                f"({', '.join(map(str, tool_languages))})"))
            count += 1
    if count:
        print(f"\nFound {count} tools that aren't included in the documentation.")
        exit(1)
    else:
        print(emoji.emojize("\nAll tools are included in the documentation! :party_popper:"))
        exit(0)


argh.dispatch_command(check_supported_tools)
