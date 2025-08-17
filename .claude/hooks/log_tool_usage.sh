#!/usr/bin/env bash
set -euo pipefail

LOG_DIR="$(git rev-parse --show-toplevel 2>/dev/null || pwd)/.claude/logs"
mkdir -p "$LOG_DIR"

echo "[$(date -Is)] Claude performed an action: $*" >> "$LOG_DIR/actions.log"

echo "Logged to $LOG_DIR/actions.log"