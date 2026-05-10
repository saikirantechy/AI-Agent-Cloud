from fastapi import APIRouter
from ...services.analytics import analytics_state

router = APIRouter()

AGENTS = [
    {"id": "resume-agent", "name": "Resume Agent", "description": "Resume parsing, skills extraction, ATS scoring."},
    {"id": "career-agent", "name": "Career Agent", "description": "Career path recommendations and internships."},
    {"id": "mentor-agent", "name": "Mentor Agent", "description": "Mentoring, startup guidance, hackathon advice."},
    {"id": "notification-agent", "name": "Notification Agent", "description": "Summary notifications and event alerts."},
    {"id": "analytics-agent", "name": "Analytics Agent", "description": "Usage metrics and workflow analytics."},
]

@router.get("/agents")
async def get_agents():
    return {
        "agents": [
            {
                **agent,
                "status": "active",
                "executions": analytics_state.get(agent["id"], {}).get("count", 0),
            }
            for agent in AGENTS
        ]
    }
