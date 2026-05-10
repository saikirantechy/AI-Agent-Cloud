from fastapi import APIRouter
from ...services.logs import get_logs

router = APIRouter()

@router.get("/logs")
async def read_logs():
    return {"logs": get_logs()}
