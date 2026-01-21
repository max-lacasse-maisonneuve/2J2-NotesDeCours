#!/bin/bash

# Default root directory: current directory
ROOT_DIR="${PWD}"
echo "⚠️  Root directory : $ROOT_DIR"

# Loop through all .md files in the current directory (no subfolders)
for md_file in *.md; do
  # Skip if not a .md file
  [[ ! "$md_file" =~ \.md$ ]] && continue

  # Extract the base filename (without extension)
  base_name="${md_file%.md}"

  # Output filename (e.g., file.html)
  output_file="${ROOT_DIR}/pdf/${base_name}.pdf"

  # Run pandoc to convert .md to .html
  if pandoc -i "$md_file" --from="markdown" --to="pdf" --pdf-engine="xelatex" --metadata-file="${ROOT_DIR}/custom.latex.yaml" --syntax-highlighting="zenburn" --number-sections -o "$output_file"; then
    echo "✅ Converted '$md_file' to '$output_file'"
  else
    echo "❌ Failed to convert '$md_file'"
    exit 1
  fi
done

echo "✅ All Markdown files have been converted to PDF!"