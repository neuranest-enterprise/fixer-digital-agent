Phase 1: UX and Planning

Goal: Produce UX research and a practical implementation plan constrained to the current app scope.

Steps:
1) Activate Sub Agent: UX Researcher
   - Use `ai-workflow/agents/ux-researcher.md`
   - Save outputs to `ai-workflow/docs/ux/*`
2) Activate Sub Agent: Sprint Prioritizer
   - Use `ai-workflow/agents/sprint-prioritizer.md`
   - Consume `ai-workflow/docs/ux/*`
   - Save outputs to `ai-workflow/docs/planning/*`

Main Controller:
- After both complete, write a brief summary to `ai-workflow/docs/planning/summary.md` with links to the produced files.