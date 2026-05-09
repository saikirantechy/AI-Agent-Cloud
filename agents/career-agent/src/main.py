from fastapi import FastAPI
from pydantic import BaseModel
from src.agent import recommend_career

app = FastAPI(title="Career Agent", version="0.1.0")

class CareerRequest(BaseModel):
    profile: str

@app.get("/health")
def health():
    return {"status": "healthy", "agent": "career-agent"}

@app.post("/execute")
def execute(payload: CareerRequest):
    return recommend_career(payload.profile)
