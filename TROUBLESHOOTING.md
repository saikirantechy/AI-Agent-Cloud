# Troubleshooting Guide

Solutions for common issues when developing with AI-Agent-Cloud.

## Setup Issues

### Docker Compose Won't Start

**Problem:** `docker compose up` fails with connection errors

**Solution:**
```bash
# Clean and rebuild
docker compose down
docker system prune -a
docker compose up --build
```

### Port Already in Use

**Problem:** Error like "Address already in use" on port 3000 or 8000

**Windows Solution:**
```powershell
# Find process on port 3000
netstat -ano | findstr :3000

# Kill the process (replace PID)
taskkill /PID <PID> /F
```

**macOS/Linux Solution:**
```bash
# Find and kill process on port 3000
lsof -i :3000 | grep LISTEN | awk '{print $2}' | xargs kill -9

# Find and kill process on port 8000
lsof -i :8000 | grep LISTEN | awk '{print $2}' | xargs kill -9
```

### Database Connection Failed

**Problem:** PostgreSQL connection errors

**Solution:**
```bash
# Reset database
docker compose down -v
docker compose up --build

# Or manually reset
docker volume rm ai-agent-cloud_postgres_data
docker compose up
```

## Development Issues

### Frontend Build Fails

**Problem:** `npm run build` or `npm run dev` fails

**Solution:**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
npm run build
```

### Backend Import Errors

**Problem:** ModuleNotFoundError or ImportError in Python

**Solution:**
```bash
# Ensure virtual environment is activated
source .venv/bin/activate  # macOS/Linux
.venv\Scripts\activate     # Windows

# Reinstall dependencies
pip install --upgrade pip
pip install --force-reinstall -r backend/requirements.txt
```

### API Endpoints Return 404

**Problem:** GET/POST requests return "Not Found"

**Solution:**
1. Verify the backend is running: `curl http://localhost:8000/health`
2. Check the endpoint path matches the API spec
3. Verify the request method (GET vs POST)
4. Check API documentation: `http://localhost:8000/docs`

## Database Issues

### Database Migrations Failed

**Problem:** Alembic migration errors

**Solution:**
```bash
cd backend
# Check migration status
alembic current

# Downgrade and try again
alembic downgrade base
alembic upgrade head
```

### Data Lost After Docker Reset

**Problem:** Database data disappeared

**Note:** This is expected behavior. Docker Compose can be configured with persistent volumes.

**Solution:**
```bash
# Add volumes section to docker-compose.yml
volumes:
  postgres_data:
    driver: local

# Then reference in service
services:
  db:
    volumes:
      - postgres_data:/var/lib/postgresql/data
```

## Deployment Issues

### Production Container Won't Start

**Problem:** Container starts but immediately exits

**Solution:**
```bash
# Check logs
docker compose logs -f

# Common causes:
# 1. Missing environment variables in .env.prod
# 2. Invalid database connection string
# 3. Port conflicts

# Fix and rebuild
docker compose down
docker compose up --build
```

### Nginx Reverse Proxy Not Working

**Problem:** Requests to nginx don't reach backend services

**Solution:**
```bash
# Verify nginx config
docker exec <nginx-container> nginx -t

# Check container connectivity
docker network ls
docker network inspect ai-agent-cloud_default

# Verify service names in nginx.conf match docker-compose.yml
```

### SSL Certificate Issues

**Problem:** HTTPS connection fails with certificate errors

**Solution:**
1. Verify certificate files exist in `docker/prod/ssl/`
2. Check certificate expiration: `openssl x509 -in cert.crt -noout -dates`
3. Use Let's Encrypt for production: https://letsencrypt.org/

## Performance Issues

### Frontend Slow to Load

**Problem:** Dashboard takes long to load or feels sluggish

**Solution:**
```bash
# Check frontend build
npm run build
npm start

# Monitor browser network tab for slow requests
# Check API response times: http://localhost:8000/docs

# Clear browser cache
# Restart frontend service
```

### Backend API Slow

**Problem:** API requests take too long

**Solution:**
```bash
# Check API logs for errors
docker compose logs backend

# Monitor resource usage
docker stats

# Check database query performance
# Verify no large operations without pagination
```

### Memory Leaks

**Problem:** Container memory usage keeps increasing

**Solution:**
```bash
# Monitor memory
docker stats

# Check for resource leaks in code
# Use profiling tools
python -m cProfile -s cumulative main.py

# Restart container
docker compose restart
```

## Git Issues

### Can't Push to Repository

**Problem:** Push fails with authentication error

**Solution:**
```bash
# Update git credentials
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# Use SSH instead of HTTPS
git remote set-url origin git@github.com:saikirantechy/AI-Agent-Cloud.git

# Or generate personal access token for HTTPS
```

### Merge Conflicts

**Problem:** Merge conflicts when pulling updates

**Solution:**
```bash
# View conflicts
git status

# Resolve conflicts in editor, then:
git add .
git commit -m "Resolve merge conflicts"
git push origin main
```

## Testing Issues

### Tests Won't Run

**Problem:** `pytest` command not found or tests fail

**Solution:**
```bash
# Install testing dependencies
pip install pytest pytest-cov

# Run tests with verbose output
pytest -v

# Run specific test file
pytest tests/test_agents.py -v

# Run with coverage
pytest --cov=backend tests/
```

## Debugging

### Enable Debug Mode

**Problem:** Need more detailed error messages

**Solution:**
```env
# In .env
DEBUG=True
LOG_LEVEL=DEBUG
```

### Inspect Container State

```bash
# Connect to running container
docker compose exec backend bash

# Check logs
docker compose logs backend -n 100

# View environment variables
docker compose exec backend env
```

### Use Browser DevTools

1. Press F12 to open Developer Tools
2. Check **Console** tab for JavaScript errors
3. Check **Network** tab for failed API calls
4. Check **Storage** tab for localStorage/cookies

## Getting Help

1. **Check logs first:** `docker compose logs -f`
2. **Search existing issues:** https://github.com/saikirantechy/AI-Agent-Cloud/issues
3. **Ask on discussions:** https://github.com/saikirantechy/AI-Agent-Cloud/discussions
4. **Read the docs:** https://saikirantechy.github.io/AI-Agent-Cloud/
5. **Reference QUICK_REFERENCE.md:** [Quick Reference Guide](QUICK_REFERENCE.md)

## Still Stuck?

If you can't solve the issue:

1. Gather diagnostic information:
   ```bash
   docker compose version
   docker version
   python --version
   node --version
   ```

2. Describe the problem clearly with:
   - Steps to reproduce
   - Expected vs actual behavior
   - Error messages (full logs)
   - System information

3. Open an issue: https://github.com/saikirantechy/AI-Agent-Cloud/issues/new
