# API Reference

## Overview
AI-Agent-Cloud exposes backend API endpoints for orchestration, agent status, analytics, and workflow operations.

## GET /health
Returns the current health state of the platform.

### Request
```http
GET /health HTTP/1.1
Host: localhost:8000
```

### Response
```json
{
  "status": "ok",
  "timestamp": "2026-05-11T00:00:00Z"
}
```

## GET /agents
Retrieve the catalog of available agents and their current status.

### Request
```http
GET /agents HTTP/1.1
Host: localhost:8000
```

### Response
```json
{
  "agents": [
    {"id": "resume", "status": "ready"},
    {"id": "career", "status": "ready"}
  ]
}
```

## GET /analytics
Retrieve platform analytics and usage metrics.

### POST /resume/analyze
Submit resume text for analysis and ATS-style scoring.

### Request
```http
POST /resume/analyze HTTP/1.1
Host: localhost:8000
Content-Type: application/json

{
  "text": "Experienced AI product manager"
}
```

### Response
```json
{
  "skills": ["AI", "product management"],
  "score": 86,
  "summary": "Strong AI product experience with workflow focus."
}
```

## POST /career/recommend
Request career path recommendations.

## POST /mentor/advice
Request mentorship guidance or startup advice.

## Authentication
Placeholder for future auth support: API key, OAuth, or team access tokens.

## Future API plans
- Add secure auth and role-based access
- Expose agent execution and trial workflows
- Add webhook integrations and event callbacks
- Provide SDK-compatible API wrappers
