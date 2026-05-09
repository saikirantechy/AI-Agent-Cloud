# Nasiko Buildathon Bengaluru — SKT Nexus AI Platform

## Overview
This repo is built as a professional Nasiko-powered hackathon workspace for a campus intelligence / student career platform.
It demonstrates a modular multi-agent architecture, real deployment workflow, observability, and a polished project structure.

## Workspace Layout
```txt
Nasiko-Buildathon/
├── nasiko-core/              # Nasiko control plane core repo
├── nexus-agents/             # Custom modular AI agents
│   ├── career-agent/
│   ├── resume-agent/
│   ├── mentor-agent/
│   ├── analytics-agent/
│   ├── notification-agent/
│   └── event-agent/
├── frontend/                 # Next.js + TypeScript demo dashboard
├── backend/                  # FastAPI orchestration API
├── docs/                     # Architecture and setup docs
├── docker/                   # Deployment composition and helper scripts
├── scripts/                  # Startup scripts and developer tools
└── README.md
```

## Buildathon Goals
- Deploy a scalable AI agent control plane using Nasiko
- Build real multi-agent orchestration, not a single chatbot
- Surface observability, routing, and lifecycle management
- Provide a judge-friendly story and production-style architecture
- Ship a complete demo with frontend, backend, deployment, and docs

## Execution Plan
### Phase 1 — Core Infrastructure
1. Clone Nasiko into `nasiko-core`
   ```bash
   git clone https://github.com/Nasiko-Labs/nasiko.git nasiko-core
   cd nasiko-core
   ```
2. Keep Nasiko core isolated from custom agents and frontend

### Phase 2 — Environment Setup
1. Copy env template:
   ```bash
   cp .nasiko-local.env.example .nasiko-local.env
   ```
2. Configure strong local values:
   ```env
   USER_CREDENTIALS_ENCRYPTION_KEY=skt-nexus-buildathon-2026
   OPENAI_API_KEY=your-openai-key
   ENVIRONMENT=development
   LOG_LEVEL=debug
   ```

### Phase 3 — Fast, Clean Dependency Setup
1. Install `uv`
   ```bash
   pip install uv
   uv venv
   uv sync
   ```
2. Use a dedicated virtual environment to avoid dependency conflicts

### Phase 4 — Docker Deployment
1. Prune stale state before startup:
   ```bash
   docker system prune -f
   ```
2. Launch Nasiko locally:
   ```bash
   docker compose -f docker-compose.local.yml --env-file .nasiko-local.env up -d
   ```
3. Validate the stack with health checks

### Phase 5 — Validate System Health
- Containers:
  ```bash
  docker ps
  ```
- Nasiko backend:
  ```bash
  curl http://localhost:8000/api/v1/healthcheck
  ```
- Nasiko gateway:
  ```bash
  curl http://localhost:9100/health
  ```
- Dashboard:
  `http://localhost:9100/app/`

### Phase 6 — Multi-Agent Architecture
Create each agent as a distinct module with its own business logic and API:
- `resume-agent` — resume parsing, skill extraction, ATS scoring
- `career-agent` — roadmap generation, role recommendations, internship matching
- `mentor-agent` — startup feedback, hackathon guidance, coaching prompts
- `analytics-agent` — event analytics, student engagement, agent usage metrics
- `notification-agent` — summary delivery, email/push integration, dashboard updates
- `event-agent` — campus events, internships, deadlines, hackathon planning

### Phase 7 — Agent Workflow
1. User uploads a resume
2. `resume-agent` extracts skills and scores fit
3. `career-agent` produces a personalized roadmap
4. `mentor-agent` offers startup/skill advice
5. `notification-agent` pushes results back to the dashboard
6. `analytics-agent` tracks execution and performance

### Phase 8 — Frontend and UX
Use a modern stack:
- `Next.js`
- `TypeScript`
- `Tailwind CSS`
- `ShadCN UI`

Build a dashboard that includes:
- AI agent cards
- execution timeline
- live status indicators
- observability metrics
- agent routing controls

### Phase 9 — Observability
Use Nasiko’s observability capabilities to demonstrate:
- agent traces
- request/response timings
- failure and retry state
- execution graphs and routing history

### Phase 10 — Production README
Include the following sections:
- Problem Statement
- Architecture Diagram
- Multi-Agent Workflow
- Tech Stack
- Setup Instructions
- Demo Guide
- Future Scope
- Team Members

## Recommended Pitch
> We built a scalable multi-agent AI operating system for student ecosystems using Nasiko’s control plane infrastructure. Our platform orchestrates specialized agents for resume intelligence, career guidance, startup mentoring, and campus operations.

## Why This Wins
| Typical Hackathon | SKT Nexus System |
|-------------------|------------------|
| Single chatbot | Multi-agent platform |
| One API call | Agent orchestration |
| No infra | Production architecture |
| No monitoring | Full observability |
| Static UX | AI operations dashboard |

## Best Architecture
```txt
Frontend (Next.js)
       ↓
API Gateway
       ↓
Nasiko Control Plane
       ↓
-----------------------------------------
| Resume Agent | Career Agent          |
| Mentor Agent | Analytics Agent       |
| Event Agent  | Notification Agent    |
-----------------------------------------
       ↓
PostgreSQL + Redis + Vector DB
```

## Next Steps
1. Create `skt-nexus-agents/` and add modular agent packages
2. Build a `frontend/` dashboard for agent orchestration
3. Document the architecture in `docs/`
4. Ensure demo readiness with one-click local startup and live agent execution

## Notes
- Do not build another standalone chatbot.
- Do build a platform with agent routing, orchestration, and deployable services.
- Focus on judges: architecture, uniqueness, and real deployment.
