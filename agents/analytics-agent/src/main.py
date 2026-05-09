from fastapi import FastAPI
from pydantic import BaseModel
from src.agent import analytics_snapshot

app = FastAPI(title="Analytics Agent", version="0.1.0")

class AnalyticsRequest(BaseModel):
    events: list[dict] = []

@app.get("/health")
def health():
    return {"status": "healthy", "agent": "analytics-agent"}

@app.post("/execute")
def execute(payload: AnalyticsRequest):
    return analytics_snapshot({"events": payload.events})
