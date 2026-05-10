# Setup Guide

## Local Development
1. Copy the example environment file:
   ```bash
   cp .env.example .env
   ```
2. Create and activate a Python virtual environment:
   ```bash
   python -m venv .venv
   .venv\Scripts\activate
   ```
3. Install backend dependencies:
   ```bash
   pip install -r backend/requirements.txt
   ```
4. Install frontend dependencies:
   ```bash
   cd frontend
   npm install
   ```
5. Start the backend and frontend services:
   ```bash
   cd ..
   docker compose up --build
   ```
6. Open the dashboard:
   - `http://localhost:3000`
7. Confirm API health:
   - `http://localhost:8000/health`

## Docker Deployment
1. Build and start containers:
   ```bash
   docker compose up --build -d
   ```
2. Validate running containers:
   ```bash
   docker ps
   ```
3. Inspect logs for errors:
   ```bash
   docker compose logs -f
   ```

## GitHub Pages Deployment
This repository supports GitHub Pages from the `docs/` folder.
1. In GitHub repository settings, select `Pages`.
2. Choose `main` branch and `docs/` folder.
3. Save and wait for the site to publish.

## GitHub Actions CI
A basic CI workflow is included at `.github/workflows/ci.yml` to validate the frontend build and backend dependencies on each push and pull request.

## Environment Variables
Populate `.env` with required values from `.env.example`.
- `OPENAI_API_KEY`
- `ENVIRONMENT`
- `LOG_LEVEL`

## Recommended Workflow
- Use `npm run dev` in `frontend/` for local UI development
- Use `docker compose up --build` for a reproducible stack
- Keep API and frontend dependencies aligned with the repository
