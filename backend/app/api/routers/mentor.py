from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from ...services.agent_loader import run_agent_function
from ...services.analytics import track_agent_event

router = APIRouter()

class MentorRequest(BaseModel):
    challenge: str

@router.post("/mentor/advice")
async def mentor_advice(payload: MentorRequest):
    try:
        result = await run_agent_function("mentor-agent", "mentor_advice", payload.dict())
        track_agent_event("mentor-agent")
        return result
    except FileNotFoundError:
        raise HTTPException(status_code=404, detail="Mentor agent not found")
    except Exception as exc:
        raise HTTPException(status_code=500, detail=str(exc))
