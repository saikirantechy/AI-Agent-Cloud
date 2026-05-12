# Quick Reference Guide

Common commands and workflows for AI-Agent-Cloud development and deployment.

## Development Setup

### First Time Setup
```bash
git clone https://github.com/saikirantechy/AI-Agent-Cloud.git
cd AI-Agent-Cloud
cp .env.example .env
docker compose up --build
```

### Daily Development
```bash
# Start services
docker compose up

# View logs
docker compose logs -f

# Stop services
docker compose down

# Rebuild after dependency changes
docker compose up --build
```

## API Testing

### Health Check
```bash
curl http://localhost:8000/health
```

### Get Agents
```bash
curl http://localhost:8000/agents
```

### Analyze Resume
```bash
curl -X POST http://localhost:8000/resume/analyze \
  -H "Content-Type: application/json" \
  -d '{
    "resume_text": "Your resume content here",
    "job_description": "Job description here"
  }'
```

### View API Documentation
Open: `http://localhost:8000/docs`

## Git Workflow

### Create a Feature Branch
```bash
git checkout -b feature/your-feature-name
```

### Commit Changes
```bash
git add .
git commit -m "Add your feature description"
```

### Push and Create PR
```bash
git push origin feature/your-feature-name
# Then create a PR on GitHub
```

### Sync with Main
```bash
git fetch origin
git rebase origin/main
```

## Docker Commands

### Build Images
```bash
docker compose build
```

### View Running Containers
```bash
docker compose ps
```

### View Container Logs
```bash
docker compose logs [service_name]
docker compose logs -f  # Follow logs
```

### Enter Container Shell
```bash
docker compose exec backend bash
docker compose exec frontend sh
```

### Clean Up
```bash
docker compose down
docker system prune
```

## Frontend Development

### Install Dependencies
```bash
cd frontend
npm install
```

### Run Dev Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
npm start
```

### Linting and Formatting
```bash
npm run lint
npm run format
```

## Backend Development

### Create Virtual Environment
```bash
python -m venv .venv
source .venv/bin/activate  # On Windows: .venv\Scripts\activate
```

### Install Dependencies
```bash
pip install -r backend/requirements.txt
```

### Run Development Server
```bash
cd backend
uvicorn main:app --reload
```

### Run Tests
```bash
pytest
pytest -v  # Verbose output
pytest tests/test_resume.py  # Specific test
```

### Database Migrations
```bash
alembic upgrade head
alembic downgrade -1
```

## Common Issues & Fixes

### Port Already in Use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Kill process on port 8000
lsof -ti:8000 | xargs kill -9
```

### Docker Container Won't Start
```bash
docker compose down
docker system prune
docker compose up --build
```

### Python Dependencies Issues
```bash
pip install --upgrade pip
pip install --force-reinstall -r backend/requirements.txt
```

### Node Dependencies Issues
```bash
rm -rf node_modules package-lock.json
npm install
```

## Deployment Commands

### Local Production Simulation
```bash
cd docker/prod
cp .env.prod.example .env.prod
docker compose -f docker-compose.yml up -d
```

### Check Production Health
```bash
curl http://localhost/health
curl http://localhost:80/api/health
```

### View Production Logs
```bash
cd docker/prod
docker compose logs -f
```

## Useful Links

- **Repository:** https://github.com/saikirantechy/AI-Agent-Cloud
- **Documentation:** https://saikirantechy.github.io/AI-Agent-Cloud/
- **API Docs:** http://localhost:8000/docs (when running locally)
- **GitHub Issues:** https://github.com/saikirantechy/AI-Agent-Cloud/issues
- **Discussions:** https://github.com/saikirantechy/AI-Agent-Cloud/discussions

## Pro Tips

1. **Use Docker Compose** for consistent development environments
2. **Check logs early** when troubleshooting issues
3. **Keep .env file local** and never commit secrets
4. **Write tests** for new features
5. **Review CONTRIBUTING.md** before submitting PRs
6. **Use issue templates** when creating GitHub issues
7. **Reference PR #XYZ** in commit messages for traceability
