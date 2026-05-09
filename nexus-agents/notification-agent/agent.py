def send_notification(payload: dict) -> dict:
    event = payload.get("event", "General update")
    recipients = payload.get("recipients", ["team@agentcloud.io"])
    summary = payload.get("summary", "Your agent workflow has completed successfully.")

    return {
        "agent": "notification-agent",
        "event": event,
        "recipients": recipients,
        "message": f"Notification queued: {summary}",
        "channels": ["dashboard", "email"],
    }
