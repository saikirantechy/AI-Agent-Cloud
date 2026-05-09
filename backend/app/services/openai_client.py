import os
import logging

try:
    import openai
except ImportError:
    openai = None

logger = logging.getLogger("backend.services.openai_client")

OPENAI_MODEL = "gpt-3.5-turbo"


def create_prompt(messages: list[dict[str, str]]) -> str:
    return "\n".join(f"{item['role']}: {item['content']}" for item in messages)


async def generate_completion(messages: list[dict[str, str]]) -> str:
    api_key = os.getenv("OPENAI_API_KEY")
    if not api_key or openai is None:
        logger.warning("OpenAI API key not configured or library missing; using local fallback response")
        return "[AI placeholder] This is a generated response stemming from the AI Agent Cloud logic."

    openai.api_key = api_key
    response = openai.ChatCompletion.create(
        model=OPENAI_MODEL,
        messages=messages,
        max_tokens=450,
        temperature=0.6,
    )
    text = response.choices[0].message.content.strip()
    return text
