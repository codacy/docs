#!/bin/bash

DOCUMENTATION_PATH="../docs"

find "$DOCUMENTATION_PATH" -name "*.png" > /tmp/patterns
find "$DOCUMENTATION_PATH" -name "*.gif" >> /tmp/patterns
find "$DOCUMENTATION_PATH" -name "*.jpg" >> /tmp/patterns

for p in $(cat /tmp/patterns); do
    f="$(basename "$p")";
    grep -R "$f" "$DOCUMENTATION_PATH" > /dev/null || echo "$p";
done
