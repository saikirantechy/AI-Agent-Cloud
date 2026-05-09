from fastapi import FastAPI
from pydantic import BaseModel
from src.agent import send_notification

app = FastAPI(title="Notification Agent", version="0.1.0")

class NotificationRequest(BaseModel):
    event: str
    recipients: list[str]
    summary: str

@app.get("/health")
def health():
    return {"status": "healthy", "agent": "notification-agent"}

@app.post("/execute")
def execute(payload: NotificationRequest):
    return send_notification(payload.dict())
