#!/bin/bash

curl -s -X GET https://api.codacy.com/api/v3/tools | jq '.data|=sort_by(.shortName|ascii_downcase)|.data[].shortName' | sed 's/"//g'
