from pathlib import Path
from pydantic import BaseSettings

ROOT_DIR = Path(__file__).resolve().parents[3]
ENV_FILE = ROOT_DIR / ".env"

class Settings(BaseSettings):
    OPENAI_API_KEY: str | None = None
    POSTGRES_USER: str = "agentcloud"
    POSTGRES_PASSWORD: str = "agentcloudpass"
    POSTGRES_DB: str = "agentcloud"
    POSTGRES_PORT: int = 5432
    BACKEND_HOST: str = "0.0.0.0"
    BACKEND_PORT: int = 8000
    LOG_LEVEL: str = "INFO"
    NEXT_PUBLIC_API_URL: str = "http://localhost:8000"

    class Config:
        env_file = str(ENV_FILE)
        env_file_encoding = "utf-8"

settings = Settings()
