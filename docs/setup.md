# Setup Guide

1. Copy the example environment file:
   ```bash
   cp .env.example .env
   ```
2. Install backend dependencies:
   ```bash
   python -m venv .venv
   .venv\Scripts\activate
   pip install -r backend/requirements.txt
   ```
3. Install frontend dependencies:
   ```bash
   cd frontend
   npm install
   ```
4. Build and start all containers:
   ```bash
   docker compose up --build -d
   ```
5. Open the frontend dashboard:
   - `http://localhost:3000`
6. Confirm backend health:
   - `http://localhost:8000/health`
