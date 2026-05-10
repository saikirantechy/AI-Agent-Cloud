from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from ...services.agent_loader import run_agent_function
from ...services.analytics import track_agent_event

router = APIRouter()

class ResumeRequest(BaseModel):
    text: str

@router.post("/resume/analyze")
async def analyze_resume(payload: ResumeRequest):
    try:
        result = await run_agent_function("resume-agent", "analyze_resume", payload.dict())
        track_agent_event("resume-agent")
        return result
    except FileNotFoundError:
        raise HTTPException(status_code=404, detail="Resume agent not found")
    except Exception as exc:
        raise HTTPException(status_code=500, detail=str(exc))
