# Command: generate_prp

Argument: path to the initial brief markdown (e.g., `prps/initial.md`).

Instructions:
1) Read the initial brief at `$ARGUMENTS`.
2) Perform minimal targeted research only if essential (prefer local docs first).
3) Generate a Product Requirements Prompt (PRP) that includes:
   - Objective and success criteria
   - Scope and non-goals
   - Architecture summary and file impact map
   - Step-by-step implementation plan
   - Validation gates (tests, lint, typecheck, smoke steps)
   - Final checklist
4) Save it to `prps/generated.prp.md` (overwrite if exists) and print a short summary with key decisions and open questions.

Keep it actionable and repo-aware. Avoid generic fluff.