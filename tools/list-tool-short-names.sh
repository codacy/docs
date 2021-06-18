#!/bin/bash

curl -s -X GET https://api.codacy.com/api/v3/tools | jq '.data|=sort_by(.shortName|ascii_downcase) | .data[] | select(.clientSide == false) | .shortName' | sed 's/"//g'
