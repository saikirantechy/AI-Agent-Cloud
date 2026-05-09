def plan_event(payload: dict) -> dict:
    type_of_event = payload.get("type", "hackathon")
    audience = payload.get("audience", "students")
    recommendations = [
        f"Design the {type_of_event} around real campus and startup challenges.",
        "Provide mentorship sessions and rapid feedback loops.",
        "Use a lightweight leaderboard for engagement and prizes.",
    ]
    if "startup" in audience.lower():
        recommendations.append("Include a pitch clinic and investor-ready feedback track.")

    return {
        "agent": "event-agent",
        "event_type": type_of_event,
        "audience": audience,
        "recommendations": recommendations,
    }
