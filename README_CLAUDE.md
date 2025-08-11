## Claude Code: Power Setup

What's included:
- `claude.md`: global rules to steer behavior
- `.claude/commands/*`: reusable slash commands (primer, PRP, GitHub fix, parallel)
- `.claude/agents/*`: a validation gates sub-agent
- `.claude/hooks/*`: example hook script + example JSON
- `prps/`: placeholders for initial brief and plan

Quick start:
1) Authenticate: run `claude` then `/login` in the prompt.
2) Prime context: `/primer`
3) PRP flow:
   - Put your brief in `prps/initial.md`
   - `/generate_prp prps/initial.md`
   - Review `prps/generated.prp.md`
   - `/execute_prp prps/generated.prp.md`
4) GitHub automation (optional):
   - Install and login to GitHub CLI: `gh auth login`
   - `/fix_github_issue <number>`
5) Parallel attempts:
   - `/prep_parallel <feature> <n>`
   - Write plan to `prps/plan.md`
   - `/execute_parallel <feature> prps/plan.md <n>`

Notes:
- Hooks and permissions can be enabled later via `.claude/settings.local.json` once schema is finalized.
- For YOLO mode, run inside a devcontainer/sandbox and start `claude` with `--dangerously-skip-permissions`.