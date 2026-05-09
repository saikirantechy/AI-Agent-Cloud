from typing import List


def send_notification(payload: dict) -> dict:
    event = payload.get("event", "General update")
    recipients = payload.get("recipients", ["team@ai-agent-cloud.com"])
    summary = payload.get("summary", "Your workflow completed successfully.")

    return {
        "agent": "notification-agent",
        "event": event,
        "recipients": recipients,
        "message": f"Notification queued: {summary}",
        "channels": ["dashboard", "email"],
    }
