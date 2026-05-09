from datetime import datetime
from collections import deque

MAX_LOGS = 200
_log_store = deque(maxlen=MAX_LOGS)


def log_event(message: str, level: str = "INFO") -> None:
    _log_store.appendleft({
        "timestamp": datetime.utcnow().isoformat() + "Z",
        "level": level,
        "message": message,
    })


def get_logs() -> list[dict[str, str]]:
    return list(_log_store)
