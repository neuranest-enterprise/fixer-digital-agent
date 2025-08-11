Phase 2: UI Design and Micro-interactions

Goal: Translate UX into a concrete UI plan and define micro-interactions and motion.

Steps:
1) Activate Sub Agent: UI Designer
   - Use `ai-workflow/agents/ui-designer.md`
   - Consume `ai-workflow/docs/ux/*` and `ai-workflow/docs/planning/*`
   - Save to `ai-workflow/docs/ui/*`
2) Activate Sub Agent: Whimsy Injector
   - Use `ai-workflow/agents/whimsy-injector.md`
   - Consume `ai-workflow/docs/ui/*`
   - Save to `ai-workflow/docs/ui/*`

Main Controller:
- Summarize design decisions in `ai-workflow/docs/ui/summary.md`.