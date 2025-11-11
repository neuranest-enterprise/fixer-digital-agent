# Command: execute_prp

Argument: path to a PRP file (e.g., `prps/generated.prp.md`).

Instructions:
1) Read the PRP at `$ARGUMENTS` and restate the concrete tasks.
2) For each task:
   - Plan the minimal diff
   - Make the edit(s)
   - Run lint/typecheck/build where applicable and fix issues
   - Add/adjust tests when behavior changes
3) Keep diffs focused and commit-ready. Provide a brief summary of edits and their impact.
4) Conclude by re-running validation gates and listing follow-ups.

If blocked by missing credentials or APIs, stub safely and note TODOs.