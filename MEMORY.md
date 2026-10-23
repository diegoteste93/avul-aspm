# MEMORY.md — Avul ASPM Session Memory & Progress Log

This file tracks progress, active decisions, architectural context, and next steps for the project across different AI assistants and sessions.

---

## 📌 Session Context & History

* **Date Initialized**: 2026-10-23
* **Project Name**: **Avul ASPM** (Working title, connects with `@avul.com.br`)
* **User**: Diego Teste (`diegoteste93` / `diego@avul.com.br`)
* **Initial Setup Completed**:
  - Forked `valinorintelligence/foxnode-aspm` to `diegoteste93/foxnode-aspm`.
  - Cloned and maintained locally at `C:\Users\diego\.gemini\antigravity\scratch\avul-aspm`.
  - Renamed fork repository on GitHub to `diegoteste93/avul-aspm`.
  - Configured git remotes (`origin` -> diegoteste93/avul-aspm, `upstream` -> valinorintelligence/foxnode-aspm).
  - Configured tool approval to automatic execution (`Always Proceed`).
  - Set up dual-agent memory strategy (`AGENTS.md` and `MEMORY.md`) to allow seamless context sharing between Antigravity (Gemini Flash) and external LLMs (Codex, Cursor, etc.).
  - Set project working name to **Avul ASPM**.
  - **Avul Design System Applied**: Extracted official brand tokens from `avul.com.br` (`#06141B`, `#0A1C25`, `#12313F`, `#1F6F7A`, `#6CC3CF`, `#E0525F`, Geist typography, official SVG logos), re-skinned the frontend, verified production build, and tested locally.

---

## 💡 Key Ideas & Architectural Objectives

1. **ASPM Platform Customization & Expansion**:
   - Utilize FoxNode ASPM as the baseline for unified security posture management.
   - Evaluate existing scanner parsers in `backend/app/parsers/` and extend support for new security tools / custom pipelines.
   - Leverage `arcanum-core` and AI triage endpoints for intelligent vulnerability management.

2. **Multi-Model Strategy**:
   - **Antigravity / Gemini Flash**: Fast, high-throughput autonomous execution, local file manipulation, git workflows, and exploration.
   - **Codex / Advanced LLM**: In-depth architecture reasoning, complex code generation, and specialized security analysis.
   - Both models read `AGENTS.md` and `MEMORY.md` to preserve exact state and continuity.

---

## 📋 Current Backlog & Next Steps

- [ ] **Environment Verification**:
  - [ ] Check Python version and dependencies for `backend`.
  - [ ] Check Node.js / npm version for `frontend`.
  - [ ] Test Docker Compose startup or individual local service boot.
- [ ] **Feature Planning**:
  - [ ] Define specific customizations or new integrations desired by the user.
  - [ ] Inspect existing AI triage endpoints (`/api/v1/triage/*`) and assess enhancement points.
