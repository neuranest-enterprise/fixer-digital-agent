# Command: execute_parallel

Arguments:
- Feature name (e.g., `cli-ui-updates`)
- Plan path (e.g., `prps/plan.md`)
- Number of parallel worktrees (e.g., `3`)

Instructions:
1) Read the plan at `$ARG2` and restate concrete acceptance criteria.
2) For each i in `1..N` (concurrently when possible):
   - Change directory into `trees/$ARG1-$i`
   - Implement the feature per the plan with a slightly different strategy (diversity helps)
   - Keep diffs small and focused; ensure build/lint/tests pass
   - Write a short `RESULTS.md` summarizing the approach, tradeoffs, and any TODOs
3) Return a table summarizing each attempt and where to review.

Prefer safe, deterministic changes. Flag external dependencies or API credentials if required.