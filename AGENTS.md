# AGENTS.md — Avul ASPM Development Guide & Instructions

This file serves as the unified context and instruction guide for any AI assistant (Antigravity / Gemini, OpenAI Codex, Claude Code, Cursor, Copilot, etc.) working on this repository.

---

## 1. Project Overview & Identity
* **Project Name**: Avul ASPM (formerly FoxNode ASPM)
* **Description**: Open-source Application Security Posture Management (ASPM) platform tailored for unified application security, vulnerability deduplication, and posture analytics.
* **Core Capabilities**:
  - Aggregates findings from 16+ security scanners (Trivy, Semgrep, Snyk, ZAP, Nuclei, Gitleaks, Bandit, Checkov, SonarQube, etc.).
  - AI finding triage, false positive detection, contextual risk scoring.
  - Security scorecards (grades A–F per product), SLA trackers, compliance mapping (OWASP Top 10, PCI-DSS, SOC 2, ISO 27001, CIS Benchmarks).
  - Integrations: Jira issue creation, Slack alerts, CI/CD pipelines.

---

## 2. Git & Repository Context
* **Owner / Fork Account**: `diegoteste93` (Diego Teste)
* **Fork Repository**: `https://github.com/diegoteste93/avul-aspm.git` (`origin`)
* **Upstream Repository**: `https://github.com/valinorintelligence/foxnode-aspm.git` (`upstream`)
* **Default Branch**: `main`
* **Local Workspace**: `C:\Users\diego\.gemini\antigravity\scratch\avul-aspm`

---

## 3. Technology Stack & Directory Structure
```
foxnode-aspm/
├── backend/          # Python 3.12+ async FastAPI, SQLAlchemy, Celery/Redis, PostgreSQL
│   ├── app/          # Core application logic, routers, models, parsers
│   └── tests/        # Pytest test suite
├── frontend/         # React 18, Vite, TailwindCSS (Dark/Light mode support)
│   ├── src/          # Components, pages, hooks, API client
├── arcanum-core/     # Core security analysis and intelligence engine
├── docker/           # Dockerfiles & container configs
├── docs/             # Documentation and assets
└── docker-compose.yml # Full stack local orchestration (Postgres, Redis, Backend, Frontend)
```

---

## 4. Key Development Commands

### Backend (Python / FastAPI)
```bash
cd backend
python -m venv .venv
# Windows PowerShell:
.venv\Scripts\Activate.ps1
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
pytest
```

### Frontend (React / Vite)
```bash
cd frontend
npm install
npm run dev
npm run build
```

### Docker Compose
```bash
docker compose up -d
docker compose logs -f backend
```

---

## 5. Agent Workflow Rules & Guidelines
1. **Language**: Interact with the user in Portuguese (PT-BR) unless requested otherwise. Code, comments, and commit messages can remain in English.
2. **Non-destructive & Modular**: Avoid breaking existing parsers or routes. Maintain backwards compatibility with supported scanner formats.
3. **Preserve Documentation**: Retain existing docstrings and comments.
4. **Git Operations**: Push always to `origin` (`diegoteste93/foxnode-aspm`), create clean feature branches when appropriate.
