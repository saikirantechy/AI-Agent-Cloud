from typing import Dict


def analytics_snapshot(payload: Dict) -> dict:
    events = payload.get("events", [])
    return {
        "agent": "analytics-agent",
        "summary": "Analytics snapshot generated.",
        "total_events": len(events),
        "unique_agents": len({item.get("agent") for item in events if item.get("agent")}),
        "top_metrics": {
            "resume_runs": sum(1 for item in events if item.get("agent") == "resume-agent"),
            "career_runs": sum(1 for item in events if item.get("agent") == "career-agent"),
            "mentor_runs": sum(1 for item in events if item.get("agent") == "mentor-agent"),
        },
    }
