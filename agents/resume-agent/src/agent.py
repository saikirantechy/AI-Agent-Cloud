import re
from typing import List

SKILL_KEYWORDS = [
    "python",
    "javascript",
    "react",
    "fastapi",
    "sql",
    "machine learning",
    "data science",
    "cloud",
    "docker",
    "leadership",
    "project management",
]


def extract_skills(text: str) -> List[str]:
    normalized = text.lower()
    return [skill for skill in SKILL_KEYWORDS if skill in normalized]


def ats_score(text: str) -> int:
    word_count = len(re.findall(r"\w+", text))
    score = 30 + min(40, word_count // 30) + len(extract_skills(text)) * 10
    return min(100, score)


def analyze_resume(text: str) -> dict:
    skills = extract_skills(text)
    return {
        "agent": "resume-agent",
        "summary": "Resume text analyzed successfully.",
        "skills": skills,
        "ats_score": ats_score(text),
        "recommendations": [
            "Highlight measurable outcomes.",
            "Use keyword-rich language for targeted roles.",
            "Keep technical and leadership strengths prominent.",
        ],
        "gaps": [skill for skill in SKILL_KEYWORDS if skill not in skills][:5],
    }
