#!/usr/bin/env bash
set -euo pipefail
if [ "$#" -lt 2 ]; then
  echo "Usage: $0 <prompt-md> <agent-md> [agent-md ...]"
  exit 1
fi
PROMPT_FILE="$1"
shift
TMP_DIR="ai-workflow/.tmp"
mkdir -p "$TMP_DIR"
SYS_PROMPT_FILE="$TMP_DIR/system-prompt.txt"
: > "$SYS_PROMPT_FILE"
for agent in "$@"; do
  cat "$agent" >> "$SYS_PROMPT_FILE"
  echo -e "\n\n" >> "$SYS_PROMPT_FILE"
fi
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
"$SCRIPT_DIR/claude.sh" \
  --append-system-prompt "$(cat "$SYS_PROMPT_FILE")" \
  --permission-mode bypassPermissions \
  --ide \
  --print \
  --output-format text \
  "$(cat "$PROMPT_FILE")"