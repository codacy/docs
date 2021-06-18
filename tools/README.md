# Tools

This directory includes auxiliary tools to support authoring and maintaining the Codacy documentation.

Install the Python requirements before using the tools:

```bash
pip3 install -r requirements.txt
```

## check-supported-tools

Validates if the source file for the page [Supported languages and tools](https://docs.codacy.com/getting-started/supported-languages-and-tools/) mentions the tools returned by the Codacy API endpoint [listTools](https://api.codacy.com/api/api-docs#codacy-api-tools).

```text
$ ./check-supported-tools.py -h
usage: check-supported-tools.py [-h] [-v]

optional arguments:
  -h, --help     show this help message and exit
  -v, --verbose  False
```

## list-tool-short-names.sh

Outputs the list of short names for all supported tools as returned by the Codacy API endpoint [tools](https://api.codacy.com/api/v3/tools). Useful to update and synchronize the list of tools in [Which tools can be configured and which name should I use?](https://docs.codacy.com/repositories-configure/codacy-configuration-file/#which-tools-can-be-configured-and-which-name-should-i-use).

```bash
$ ./list-tool-short-names.sh
aligncheck
ameba
bandit
brakeman
bundleraudit
checkov
checkstyle
clang-tidy
...
```
