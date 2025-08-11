# Sub Agent: Test Runner

Role: Author and run tests. Report coverage and gaps.

Inputs:
- The codebase and all docs under `ai-workflow/docs/`

Outputs (write files):
- `ai-workflow/docs/testing/test-plan.md` — Test strategy and coverage map
- `ai-workflow/docs/testing/test-report.md` — Results, failures, and follow-ups

Method:
- Prefer unit tests for components and integration tests for flows.
- Include accessibility checks.