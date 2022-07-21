#!/usr/bin/env python3
import argh
import csv
import emoji
import requests

from string import Template

ENDPOINT_URL_TOOLS = "https://api.codacy.com/api/v3/tools"
ENDPOINT_URL_CODE_PATTERNS = Template("https://api.codacy.com/api/v3/tools/${toolUuid}/patterns")
OUTPUT_FILE = "security-patterns.csv"


def get_security_issues():
    print("Fetching all supported security code patterns...\n")
    result = {}
    tools = requests.get(ENDPOINT_URL_TOOLS).json()["data"]
    for tool in tools:
        tool_id = tool["uuid"]
        tool_name = tool["name"]
        tool_short_name = tool["shortName"]
        tool_languages = tool["languages"]
        code_patterns = []
        cursor = True
        print(f"Fetching code patterns for {tool_name}...")
        while cursor:
            r = requests.get(ENDPOINT_URL_CODE_PATTERNS.substitute(toolUuid=tool["uuid"]) + "?limit=1000" +
                             ("" if cursor == True else f"&cursor={cursor}"))
            code_patterns += r.json()["data"]
            cursor = r.json()["pagination"].get("cursor", False)
        security_code_patterns = [cp for cp in code_patterns if cp["category"] == "Security"]
        for cp in security_code_patterns:
            pattern_id = cp["id"]
            pattern_severity_level = cp["severityLevel"]
            pattern_title = cp["title"]
            pattern_category = cp.get("subCategory", "")
            details = [tool_name, tool_short_name, tool_languages,
                       pattern_id, pattern_severity_level, pattern_title, pattern_category]
            if tool_id in result:
                result[tool_id].append(details)
            else:
                result[tool_id] = [details]
        print(f"Read {len(security_code_patterns)} code patterns.")

    # Write CSV file
    with open(OUTPUT_FILE, "w") as csv_file:
        csv_writer = csv.writer(csv_file)
        csv_writer.writerow(["Tool name",
                             "Tool short name",
                             "Tool languages",
                             "Pattern ID",
                             "Severity level",
                             "Title",
                             "Subcategory"])
        for tool in sorted(result.items()):
            for pattern in tool[1]:
                csv_writer.writerow(pattern)
    print(emoji.emojize(f"\n:check_mark_button: Wrote results to {OUTPUT_FILE}"))


argh.dispatch_command(get_security_issues)
