from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .api.routers import health, agents, resume, career, mentor, analytics, logs
from .middleware.timing import RequestTimingMiddleware
from .core.logging import setup_logging
from .core.config import settings

setup_logging()

app = FastAPI(
    title="AI Agent Cloud API",
    description="FastAPI backend for Nasiko-powered agent cloud orchestration.",
    version="0.1.0",
)

app.add_middleware(RequestTimingMiddleware)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(health, prefix="", tags=["health"])
app.include_router(agents, prefix="", tags=["agents"])
app.include_router(resume, prefix="", tags=["resume"])
app.include_router(career, prefix="", tags=["career"])
app.include_router(mentor, prefix="", tags=["mentor"])
app.include_router(analytics, prefix="", tags=["analytics"])
app.include_router(logs, prefix="", tags=["logs"])

@app.on_event("startup")
async def startup_event():
    app.state.startup_message = "AI Agent Cloud backend ready"

if __name__ == "__main__":
    import uvicorn

    uvicorn.run("app.main:app", host=settings.BACKEND_HOST, port=settings.BACKEND_PORT, reload=True)
