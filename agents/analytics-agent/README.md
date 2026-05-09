# Analytics Agent

This agent summarizes events and generates usage metrics for AI workflows.

## Endpoints

- `GET /health`
- `POST /execute`

## Example payload

```json
{
  "events": [
    {"agent": "resume-agent"},
    {"agent": "career-agent"}
  ]
}
```
