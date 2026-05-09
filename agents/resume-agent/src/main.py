from fastapi import FastAPI
from pydantic import BaseModel
from src.agent import analyze_resume

app = FastAPI(title="Resume Agent", version="0.1.0")

class ResumeRequest(BaseModel):
    text: str

@app.get("/health")
def health():
    return {"status": "healthy", "agent": "resume-agent"}

@app.post("/execute")
def execute(payload: ResumeRequest):
    return analyze_resume(payload.text)
