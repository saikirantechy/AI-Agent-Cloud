from fastapi import FastAPI
from pydantic import BaseModel
from src.agent import mentor_advice

app = FastAPI(title="Mentor Agent", version="0.1.0")

class MentorRequest(BaseModel):
    challenge: str

@app.get("/health")
def health():
    return {"status": "healthy", "agent": "mentor-agent"}

@app.post("/execute")
def execute(payload: MentorRequest):
    return mentor_advice(payload.challenge)
