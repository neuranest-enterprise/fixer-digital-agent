Claude Code Multi-Agent Workflow (Sub Agents)

This repo includes a file-based workflow that lets each sub agent maintain deep context in its own documents, while the main session coordinates the phases.

Structure
- Agents: `ai-workflow/agents/*.md`
- Docs: `ai-workflow/docs/{ux,planning,ui,implementation,testing,performance}/`
- Prompts: `ai-workflow/prompts/*.md`
- Scripts: `scripts/claude.sh`, `scripts/run-phase.sh`

Run
1) Initialize folders and conventions:
   ./scripts/claude.sh --append-system-prompt "$(cat ai-workflow/agents/ux-researcher.md)" --print "$(cat ai-workflow/prompts/00_initialization.md)"

2) Phase 1 — UX + Planning:
   ./scripts/run-phase.sh ai-workflow/prompts/10_ux_and_planning.md \
     ai-workflow/agents/ux-researcher.md \
     ai-workflow/agents/sprint-prioritizer.md

3) Phase 2 — UI Design + Whimsy:
   ./scripts/run-phase.sh ai-workflow/prompts/20_ui_design.md \
     ai-workflow/agents/ui-designer.md \
     ai-workflow/agents/whimsy-injector.md

4) Phase 3 — Frontend Implementation:
   ./scripts/run-phase.sh ai-workflow/prompts/30_frontend.md \
     ai-workflow/agents/frontend-developer.md

5) Phase 4 — Testing + Performance:
   ./scripts/run-phase.sh ai-workflow/prompts/40_testing_and_performance.md \
     ai-workflow/agents/test-runner.md \
     ai-workflow/agents/performance-benchmarker.md

Options
- Add --verbose or --debug to scripts if you want detailed logs.
- To connect to a supported IDE automatically, keep --ide in the wrapper.
- To reduce prompts, the wrapper uses --permission-mode bypassPermissions. Remove if you prefer manual approvals.

Notes
- You can tailor agents or add new ones under `ai-workflow/agents/` and reference them in phase prompts.
- Each agent writes to its own docs so context accumulates across phases.