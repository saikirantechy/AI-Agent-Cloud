# Notification Agent

This agent produces notification payloads, event summaries, and alert messages for workflow completion and milestone updates.

## Endpoints

- `GET /health`
- `POST /execute`

## Example payload

```json
{
  "event": "Resume analysis complete",
  "recipients": ["team@ai-agent-cloud.com"],
  "summary": "Resume analysis completed successfully with recommendations."
}
```
