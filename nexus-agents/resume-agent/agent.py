import re
from collections import Counter

SKILL_KEYWORDS = [
    "python",
    "javascript",
    "react",
    "fastapi",
    "sql",
    "machine learning",
    "data science",
    "ai",
    "project management",
    "leadership",
    "cloud",
    "docker",
]


def extract_skills(text: str) -> list[str]:
    normalized = text.lower()
    detected = [skill for skill in SKILL_KEYWORDS if skill in normalized]
    return sorted(set(detected), key=lambda x: normalized.index(x))


def ats_score(text: str) -> int:
    word_count = len(re.findall(r"\w+", text))
    skills = extract_skills(text)
    score = min(100, 30 + len(skills) * 12 + min(40, word_count // 40))
    return score


def analyze_resume(payload: dict) -> dict:
    text = payload.get("text", "")
    skills = extract_skills(text)
    missing = [skill for skill in SKILL_KEYWORDS if skill not in skills][:5]
    return {
        "agent": "resume-agent",
        "summary": "Resume analyzed successfully.",
        "skills": skills,
        "ats_score": ats_score(text),
        "recommendations": [
            "Add quantified achievements.",
            "Highlight technical skills near the top.",
            "Include relevant internships and projects.",
        ],
        "gaps": missing,
    }
