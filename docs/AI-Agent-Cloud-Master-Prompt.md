# AI-Agent-Cloud Master Prompt

This file contains the full optimized execution prompt for generating the AI Agent Cloud MVP in a VS Code / Cursor / Claude Code environment.

---

You are a senior AI systems architect and full-stack engineer.

DO NOT generate placeholder documentation only.

DO NOT stop after creating README files.

DO NOT ask unnecessary questions.

I want you to FULLY BUILD a production-style MVP project with actual working files, folders, backend APIs, frontend pages, Docker setup, AI agents, and orchestration-ready architecture.

# PROJECT NAME

 AI Agent Cloud

# CORE GOAL

Build a multi-agent AI platform powered by Nasiko infrastructure for students, startups, placements, careers, hackathons, and mentoring.

The system must look and behave like a real SaaS AI operations platform.

# IMPORTANT

Generate REAL files with REAL implementations.

Create:

* frontend code
* backend code
* Docker configs
* API routes
* environment files
* FastAPI services
* Next.js frontend
* Tailwind UI
* agent services
* orchestration-ready architecture
* PostgreSQL config
* vector-ready structure
* authentication-ready structure
* observability-ready setup

DO NOT only generate markdown or pseudo code.

# TECH STACK

Frontend:

* Next.js 15
* TypeScript
* TailwindCSS
* ShadCN UI

Backend:

* FastAPI
* Python 3.11

Infrastructure:

* Docker
* Docker Compose
* Nasiko

Database:

* PostgreSQL

AI:

* OpenAI API integration

# PROJECT STRUCTURE

Create COMPLETE structure:

Nasiko-Buildathon/
│
├── frontend/
├── backend/
├── docker/
├── docs/
├── scripts/
├── nexus-agents/
│   ├── resume-agent/
│   ├── career-agent/
│   ├── mentor-agent/
│   ├── notification-agent/
│   └── analytics-agent/
│
├── .env.example
├── docker-compose.yml
└── README.md

# FRONTEND REQUIREMENTS

Build a modern dark dashboard UI.

Pages:

* Login page
* Dashboard
* Agent management
* Resume upload
* Career recommendations
* Analytics
* Live activity logs

Components:

* Sidebar
* Top navbar
* Agent cards
* Charts
* Status indicators
* Upload form
* Logs panel

Use:

* responsive layouts
* clean SaaS design
* modern cards
* loading states
* TypeScript types

# BACKEND REQUIREMENTS

Build FastAPI backend with:

* modular routes
* health checks
* OpenAI integration
* agent orchestration endpoints
* logging
* middleware
* async support

Endpoints:

* /health
* /agents
* /resume/analyze
* /career/recommend
* /mentor/advice
* /analytics
* /logs

# AI AGENTS

Create working agent modules:

1. Resume Agent

* parse resume text
* extract skills
* basic ATS scoring

2. Career Agent

* suggest career paths
* recommend internships
* generate roadmap

3. Mentor Agent

* startup guidance
* hackathon suggestions
* learning recommendations

4. Notification Agent

* event notifications
* recommendation summaries

5. Analytics Agent

* metrics
* agent execution logs
* usage summaries

# DOCKER REQUIREMENTS

Generate:

* Dockerfiles
* docker-compose.yml
* backend container
* frontend container
* postgres container

# ENVIRONMENT FILES

Generate:

* .env.example
* backend env config
* frontend env config

# OBSERVABILITY

Add:

* structured logging
* request timing middleware
* execution tracking
* agent status monitoring

# README REQUIREMENTS

README must include:

* architecture
* setup guide
* screenshots placeholders
* API documentation
* demo flow
* hackathon pitch

# IMPORTANT OUTPUT RULES

1. ACTUALLY CREATE FILES.
2. DO NOT only explain.
3. DO NOT stop midway.
4. Generate all missing code files.
5. Create complete folder structure.
6. Use production-ready naming.
7. Use clean architecture.
8. Add comments in important files.
9. Ensure code compiles.
10. Continue until MVP is fully scaffolded.

# EXECUTION MODE

Start by:

1. creating folder structure
2. initializing frontend
3. initializing backend
4. creating agents
5. configuring Docker
6. wiring APIs
7. building UI
8. generating README

Continue automatically until project scaffold is complete.

This prompt is optimized to prevent AI IDEs from wasting credits on only analysis/README generation and pushes them into actual file creation mode.

---

# NASIKO LOCAL DEVELOPMENT CONFIGURATION REQUIREMENTS

Use the following Nasiko local environment configuration and automatically wire all required services, Docker containers, backend environment loading, frontend environment usage, and orchestration setup.

Generate ALL required files automatically.

# REQUIRED ENVIRONMENT VARIABLES

```env
# Nasiko Local Development Configuration
# This file contains environment variables for local bootstrap deployment

# Database Configuration
MONGO_ROOT_USER=root
MONGO_ROOT_PASSWORD=secretpassword
MONGO_AUTH_DB=nasiko
MONGO_CHAT_DB=nasiko

# Security Configuration
JWT_SECRET=your-super-secret-jwt-key-change-in-production
USER_CREDENTIALS_ENCRYPTION_KEY=D0gJtYDesqmMeeKBuIkX_g7zO16xfoiA63x1cb0J-fE=

# Registry Configuration
NASIKO_REGISTRY_URL=nasiko
NASIKO_VERSION=latest

# Port Configuration
NASIKO_PORT_MONGODB=27017
NASIKO_PORT_REDIS=6379
NASIKO_PORT_KONG=9100
NASIKO_PORT_KONG_ADMIN=9101
NASIKO_PORT_KONG_MANAGER=9102
NASIKO_PORT_BACKEND=8000
NASIKO_PORT_WEB=4000
NASIKO_PORT_AUTH=8082
NASIKO_PORT_ROUTER=8081
NASIKO_PORT_CHAT=8083
NASIKO_PORT_SERVICE_REGISTRY=8080
NASIKO_PORT_KONGA=1337
NASIKO_PORT_PHOENIX=6006
NASIKO_PORT_PHOENIX_GRPC=4317
NASIKO_PORT_PHOENIX_HTTP=4318

# Application Configuration
AUTH_MODE=simple
K8S_ENABLED=false

# Docker Network Configuration
AGENTS_NETWORK=agents-net
APP_NETWORK=app-network
DOCKER_NETWORK=agents-net

# Superuser Configuration
SUPERUSER_EMAIL=admin@nasiko.com
SUPERUSER_USERNAME=admin
SUPERUSER_PASSWORD=password

# Optional API Keys
OPENAI_API_KEY=
GITHUB_CLIENT_ID=Ov23liyDVvZl1NaPHrMu
GITHUB_CLIENT_SECRET=cec6a8fca52ebeda45d3f708dfaa73da1b326c93
OPENROUTER_API_KEY=
MINIMAX_API_KEY=your-minimax-api-key

# Kong Database
KONG_DB_NAME=kong
KONG_DB_USER=kong
KONG_DB_PASSWORD=kong

# Phoenix Observability
PHOENIX_BASE_URL=http://phoenix-observability:6006
PHOENIX_GRPC_ENDPOINT=http://phoenix-observability:4317
PHOENIX_HTTP_ENDPOINT=http://phoenix-observability:4318
```

# REQUIRED FILE GENERATION

Generate ALL of these files with REAL implementations:

## ROOT FILES

* .env.example
* .gitignore
* docker-compose.yml
* README.md

## DOCKER FILES

* docker/backend.Dockerfile
* docker/frontend.Dockerfile
* docker/nginx.conf

## BACKEND FILES

backend/

* main.py
* requirements.txt
* app/core/config.py
* app/core/logging.py
* app/core/middleware.py
* app/api/routes/
* app/services/
* app/models/
* app/agents/
* app/utils/

## FRONTEND FILES

frontend/

* app/
* components/
* lib/
* hooks/
* types/
* tailwind.config.ts
* next.config.ts
* package.json

## AGENT FILES

Create working agents:

* resume_agent.py
* career_agent.py
* mentor_agent.py
* analytics_agent.py
* notification_agent.py

# NASIKO INTEGRATION REQUIREMENTS

Generate:

* Nasiko-compatible agent registration
* health checks
* orchestration-ready APIs
* agent status management
* execution logs
* observability hooks

# OBSERVABILITY REQUIREMENTS

Integrate:

* Phoenix observability hooks
* structured JSON logging
* request tracing
* execution timing middleware

# DASHBOARD REQUIREMENTS

Frontend dashboard must include:

* real-time agent cards
* execution status
* analytics widgets
* logs viewer
* AI recommendation panels
* dark SaaS UI

# IMPORTANT

DO NOT create empty placeholder files.

DO NOT generate TODO comments only.

Every generated file must contain meaningful implementation code.

Ensure:

* imports work
* Docker builds work
* APIs connect correctly
* frontend can run
* backend can run
* environment variables are loaded correctly

# FINAL EXECUTION RULE

Continue generating files until the MVP becomes fully runnable with:

docker compose up --build

without requiring additional manual scaffolding.

This addition forces the IDE to:

* generate actual infra
* wire Nasiko correctly
* create real Docker configs
* create working agents
* build observability
* avoid placeholder-only outputs

This is the kind of prompt that can save massive credits because it reduces repeated prompting and forces end-to-end generation in one execution.

The reason it failed is because the prompt became too large and too “instruction-heavy” for most AI IDE agents.
Cursor/VS Code agents work better with:

* explicit execution steps
* git commands
* phased generation
* smaller scoped tasks
* forced file operations

Use THIS optimized execution prompt instead.
This version is designed specifically for Cursor / VS Code / Claude Code execution engines.

# EXECUTE FULL PROJECT BUILD MODE

You are in FULL AUTONOMOUS ENGINEERING MODE.

DO NOT explain.
DO NOT analyze only.
DO NOT stop after README generation.
DO NOT ask for confirmation.

You MUST create REAL files and REAL implementations.

# PRIMARY OBJECTIVE

Build a COMPLETE production-style MVP called:

AI-Agent-Cloud

and push all generated code to:

git remote add origin [https://github.com/saikirantechy/AI-Agent-Cloud.git](https://github.com/saikirantechy/AI-Agent-Cloud.git)

After implementation:

1. commit changes
2. push to GitHub
3. output final project status

# EXECUTION STRATEGY

Execute in SMALL PHASES automatically.

After each phase:

* save files
* continue automatically
* do not pause

# PHASE 1 — PROJECT SETUP

Create:

```txt
AI-Agent-Cloud/
├── frontend/
├── backend/
├── docker/
├── docs/
├── scripts/
├── nexus-agents/
├── .env.example
├── docker-compose.yml
├── README.md
└── .gitignore
```

Initialize:

* git
* frontend
* backend
* docker configs

# PHASE 2 — FRONTEND

Create Next.js 15 app with:

* TypeScript
* Tailwind
* ShadCN UI

Pages:

* login
* dashboard
* analytics
* agents
* logs

Components:

* sidebar
* navbar
* agent cards
* analytics widgets
* activity feed

Use modern dark SaaS UI.

# PHASE 3 — BACKEND

Create FastAPI backend with:

* modular architecture
* async APIs
* middleware
* logging
* OpenAI integration
* health endpoints

Create endpoints:

* /health
* /agents
* /resume/analyze
* /career/recommend
* /mentor/advice
* /analytics
* /logs

# PHASE 4 — AGENTS

Create working agents:

* resume_agent.py
* career_agent.py
* mentor_agent.py
* analytics_agent.py
* notification_agent.py

Each must contain REAL implementation logic.

# PHASE 5 — NASIKO INTEGRATION

Wire:

* orchestration-ready architecture
* observability hooks
* agent execution tracking
* health monitoring
* structured logging

# PHASE 6 — ENVIRONMENT CONFIG

Generate:

* .env.example
* backend config
* frontend config

Use:

```env
MONGO_ROOT_USER=root
MONGO_ROOT_PASSWORD=secretpassword
JWT_SECRET=your-super-secret-jwt-key
OPENAI_API_KEY=
NASIKO_PORT_BACKEND=8000
NASIKO_PORT_WEB=4000
PHOENIX_BASE_URL=http://phoenix-observability:6006
```

# PHASE 7 — DOCKER

Generate:

* backend Dockerfile
* frontend Dockerfile
* nginx.conf
* docker-compose.yml

Ensure:
docker compose up --build

works correctly.

# PHASE 8 — GIT EXECUTION

Run automatically:

```bash
git init
git add .
git commit -m "Initial AI-Agent-Cloud MVP"
git branch -M main
git remote add origin https://github.com/saikirantechy/AI-Agent-Cloud.git
git push -u origin main
```

If remote already exists:

* update it automatically

# PHASE 9 — FINAL STATUS

Output:

* completed architecture
* generated files
* running services
* GitHub push status
* remaining improvements

# IMPORTANT RULES

1. CREATE FILES — not explanations.
2. CONTINUE automatically.
3. NEVER stop midway.
4. NEVER generate placeholder-only files.
5. Ensure imports work.
6. Ensure Docker builds work.
7. Ensure frontend runs.
8. Ensure backend runs.
9. Ensure APIs are connected.
10. Ensure project is hackathon-demo ready.

BEGIN EXECUTION NOW.

This version works better because:

* shorter execution blocks
* clearer phases
* explicit git operations
* less token overload
* more “agent executable”
* avoids analysis loops

Very important:
If GitHub push fails, it is usually because:

* GitHub auth/token missing
* VS Code not signed into GitHub
* Git credential manager not configured

Before running, ensure:

```bash
git config --global user.name "saikirantechy"
git config --global user.email "your-email@example.com"
```

and authenticate GitHub in VS Code.

---

# FORCE EXECUTION MODE — NO DOCUMENTATION ONLY

IMPORTANT:
You are NOT acting as a documentation assistant.

You are acting as:

* senior software engineer
* DevOps engineer
* AI systems architect
* autonomous repository builder

# HARD REQUIREMENTS

DO NOT:

* only explain
* only plan
* only generate markdown
* stop after creating docs
* ask for confirmation
* wait for next instructions

You MUST:

* create directories
* create files
* write implementation code
* execute terminal commands
* scaffold applications
* install dependencies
* wire imports
* configure Docker
* configure environments
* create APIs
* connect frontend/backend
* initialize git
* commit changes

# EXECUTION PRIORITY

Priority order:

1. REAL FILES
2. RUNNABLE CODE
3. DOCKER SETUP
4. API CONNECTIONS
5. FRONTEND DASHBOARD
6. NASIKO INTEGRATION
7. OBSERVABILITY
8. GITHUB PUSH
9. DOCUMENTATION

# TERMINAL EXECUTION RULE

Use terminal commands automatically.

Run commands like:

```bash id="p9lt1x"
mkdir frontend backend docker docs scripts nexus-agents
```

```bash id="o0d66d"
cd frontend
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --use-pnpm
```

```bash id="9a6wl4"
cd ../backend
pip install fastapi uvicorn python-dotenv openai
```

```bash id="6b0sdr"
git init
git add .
git commit -m "Initial MVP scaffold"
```

# FILE GENERATION RULE

Every folder must contain actual implementation files.

Never create empty directories only.

Every generated file must contain:

* imports
* logic
* configuration
* runnable code

# AUTONOMOUS CONTINUATION RULE

After completing one phase:

* continue automatically
* do not pause
* do not ask questions

# FAILURE RECOVERY RULE

If any command fails:

* retry
* fix path/config
* continue automatically

# GITHUB PUSH REQUIREMENT

After implementation:

```bash id="l0n93y"
git remote add origin https://github.com/saikirantechy/AI-Agent-Cloud.git
git branch -M main
git push -u origin main
```

If remote exists:

* update it automatically

# SUCCESS CONDITION

Task is NOT complete until:

* frontend runs
* backend runs
* docker compose works
* git push succeeds
* real files exist
* APIs are connected
* dashboard renders

# FINAL OUTPUT

At the end output ONLY:

* generated files summary
* running services
* GitHub push status
* remaining improvements

After adding this:

1. Open VS Code terminal
2. Open the master prompt file
3. Select ALL
4. Use:

   * Cursor Agent Mode OR
   * Claude Sonnet Agent Mode
5. Enable:

   * Auto-run terminal commands
   * Auto-apply edits
6. Let it run uninterrupted

This usually converts the AI IDE from:
❌ “Here’s a plan…”

into:
✅ actual project generation mode.
