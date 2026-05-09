from datetime import datetime
from typing import Dict

analytics_state: dict[str, dict[str, object]] = {}


def track_agent_event(agent_id: str) -> None:
    entry = analytics_state.setdefault(agent_id, {"count": 0, "last_run": None})
    entry["count"] = entry.get("count", 0) + 1
    entry["last_run"] = datetime.utcnow().isoformat() + "Z"


def get_analytics_snapshot() -> dict[str, object]:
    return {
        "summary": {
            "active_agents": len(analytics_state),
            "total_runs": sum(item.get("count", 0) for item in analytics_state.values()),
        },
        "agents": analytics_state,
    }
