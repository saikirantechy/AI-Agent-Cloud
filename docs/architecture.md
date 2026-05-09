# Architecture Overview

AI Agent Cloud is built as a modular operator platform with the following layers:

- `frontend/`: Next.js dashboard for agent management, resume upload, analytics, and orchestration status.
- `backend/`: FastAPI application exposing all required service endpoints and orchestration routes.
- `nexus-agents/`: standalone agent modules for resume intelligence, career guidance, mentorship, notifications, and analytics.
- `docker/`: container build files for backend, frontend, and database.

The backend integrates agent logic through a dynamic loader that imports each agent module from `nexus-agents/`.

The system is designed to support real Nasiko deployment by separating infrastructure control from business logic agents.
