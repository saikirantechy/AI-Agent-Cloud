from fastapi import APIRouter
from ...services.analytics import get_analytics_snapshot

router = APIRouter()

@router.get("/analytics")
async def analytics_dashboard():
    return get_analytics_snapshot()
