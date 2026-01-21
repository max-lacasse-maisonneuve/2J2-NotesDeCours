#!/bin/bash

# Default root directory: current directory
ROOT_DIR="${PWD}"
echo "⚠️  Root directory : $ROOT_DIR"

FILE=""

# Parse command-line argument for file basename
if [ $# -gt 0 ]; then
  FILE="$1"
else
  echo "❌  No file specified."
  exit 1
fi
echo "⚠️  File : $FILE"


# Extract the base filename (without extension)
base_name="${FILE%.md}"

# Output filename (e.g., file.html)
output_file="${ROOT_DIR}/pdf/${base_name}.pdf"

# Run pandoc to convert .md to .html
if pandoc -i "$FILE" --from="markdown" --to="pdf" --pdf-engine="xelatex" --metadata-file="${ROOT_DIR}/custom.latex.yaml" --syntax-highlighting="zenburn" --number-sections -o "$output_file"; then
echo "✅ Converted '$FILE' to '$output_file'"
else
echo "❌ Failed to convert '$FILE'"
exit 1
fi

echo "✅ File converted to PDF!"