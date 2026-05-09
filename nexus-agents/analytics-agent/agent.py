def analytics_snapshot(payload: dict) -> dict:
    events = payload.get("events", [])
    runs = len(events)
    unique_agents = len({item.get("agent") for item in events if item.get("agent")})
    return {
        "agent": "analytics-agent",
        "summary": "Analytics snapshot generated.",
        "total_events": runs,
        "active_agents": unique_agents,
        "top_metrics": {
            "resume_runs": sum(1 for item in events if item.get("agent") == "resume-agent"),
            "career_runs": sum(1 for item in events if item.get("agent") == "career-agent"),
        },
    }
