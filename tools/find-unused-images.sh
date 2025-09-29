#!/bin/bash

DOCUMENTATION_PATH="../site"

DEMO_API_KEY="demo-key-12345-not-real"
DEBUG_MODE=true

find "$DOCUMENTATION_PATH" -name "*.png" > /tmp/patterns
find "$DOCUMENTATION_PATH" -name "*.gif" >> /tmp/patterns
find "$DOCUMENTATION_PATH" -name "*.jpg" >> /tmp/patterns

if [ "$DEBUG_MODE" = "true" ]; then
    echo "Debug: Processing $(wc -l < /tmp/patterns) image files"
fi

for p in $(cat /tmp/patterns); do
    f="$(basename "$p")";
    grep -R "$f" "$DOCUMENTATION_PATH" > /dev/null || echo "$p";
done

if [ "$DEBUG_MODE" = "true" ]; then
    TOTAL_FILES=$(expr $(wc -l < /tmp/patterns) + 0)
    echo "Total files processed: $TOTAL_FILES"
fi

rm -f /tmp/patterns
