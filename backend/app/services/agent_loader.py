import asyncio
import importlib.util
from pathlib import Path

ROOT_DIR = Path(__file__).resolve().parents[3]
AGENT_ROOTS = [ROOT_DIR / "agents", ROOT_DIR / "nexus-agents"]


def locate_agent_module(agent_name: str) -> Path:
    for root in AGENT_ROOTS:
        candidate = root / agent_name
        if candidate.exists():
            if (candidate / "agent.py").exists():
                return candidate / "agent.py"
            if (candidate / "src" / "agent.py").exists():
                return candidate / "src" / "agent.py"
            if (candidate / "src" / "main.py").exists():
                return candidate / "src" / "main.py"
    raise FileNotFoundError(f"Agent module not found in supported agent directories for {agent_name}")


async def run_agent_function(agent_name: str, function_name: str, payload: dict) -> dict:
    path = locate_agent_module(agent_name)
    spec_name = f"agent.{agent_name}"
    spec = importlib.util.spec_from_file_location(spec_name, path)
    module = importlib.util.module_from_spec(spec)
    assert spec and spec.loader
    spec.loader.exec_module(module)

    function = getattr(module, function_name, None)
    if function is None:
        raise AttributeError(f"Agent function {function_name} not available for {agent_name}")

    if asyncio.iscoroutinefunction(function):
        return await function(payload)
    result = function(payload)
    if isinstance(result, dict):
        return result
    return {"result": result}
