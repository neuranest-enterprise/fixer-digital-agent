# Command: fix_github_issue

Argument: GitHub issue number (e.g., `123`). Requires `gh` CLI auth if pushing/PR.

Flow:
1) If `gh` is available, run: `gh issue view $ARGUMENTS --json number,title,body,labels,url` and summarize the issue.
   - If `gh` is not available, ask for the issue details or proceed with local context only.
2) Plan the minimal fix and impacted files. Confirm assumptions against the codebase.
3) Implement the fix with focused edits. Add/update tests as needed.
4) If `gh` is available:
   - Create a branch `fix/issue-$ARGUMENTS`
   - Commit changes with a descriptive message referencing the issue
   - Push and create PR: `gh pr create -t "Fix: #$ARGUMENTS" -b "Automated fix for #$ARGUMENTS"`
5) Output a summary with links (if any), risks, and follow-ups.