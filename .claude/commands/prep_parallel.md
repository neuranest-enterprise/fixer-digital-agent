# Command: prep_parallel

Arguments:
- Feature name (e.g., `cli-ui-updates`)
- Number of parallel worktrees (e.g., `3`)

Instructions:
1) Ensure repo is clean and `git` is available.
2) For i in `1..N`:
   - Create branch `feat/$ARG1-$i` from current HEAD
   - Create worktree at `trees/$ARG1-$i` for that branch using `git worktree add -B feat/$ARG1-$i trees/$ARG1-$i`
3) Run `git worktree list` and print the result.
4) Provide next-step instructions for executing agents in each worktree.

If any command fails, stop and report the exact error.