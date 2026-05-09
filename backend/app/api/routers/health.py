from fastapi import APIRouter

router = APIRouter()

@router.get("/health")
async def health_check():
    return {
        "status": "healthy",
        "service": "AI Agent Cloud backend",
        "message": "Ready to orchestrate agents",
    }
