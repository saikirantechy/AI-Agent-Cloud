from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from app.services.agent_loader import run_agent_function
from app.services.analytics import track_agent_event

router = APIRouter()

class CareerRequest(BaseModel):
    profile: str

@router.post("/career/recommend")
async def recommend_career(payload: CareerRequest):
    try:
        result = await run_agent_function("career-agent", "recommend_career", payload.dict())
        track_agent_event("career-agent")
        return result
    except FileNotFoundError:
        raise HTTPException(status_code=404, detail="Career agent not found")
    except Exception as exc:
        raise HTTPException(status_code=500, detail=str(exc))
