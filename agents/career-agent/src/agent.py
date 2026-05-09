from typing import List

CAREER_INSIGHTS = {
    "data": [
        "Build a portfolio project with data pipelines.",
        "Document cloud architecture and ETL workflows.",
        "Prepare for SQL and system design interviews.",
    ],
    "startup": [
        "Validate the problem with customer interviews.",
        "Build a minimal MVP and test user value quickly.",
        "Focus on traction signals rather than features.",
    ],
}


def recommend_career(profile: str) -> dict:
    normalized = profile.lower()
    path = "general"
    if "data" in normalized or "analytics" in normalized:
        path = "data"
    elif "startup" in normalized or "founder" in normalized:
        path = "startup"

    recommendations: List[str] = CAREER_INSIGHTS.get(path, CAREER_INSIGHTS["data"])
    roadmap = [
        "Week 1: audit your current skills and define a target role.",
        "Week 2: build a targeted portfolio project.",
        "Week 3: practice interviews and network actively.",
        "Week 4: apply to relevant roles and collect feedback.",
    ]

    if path == "startup":
        roadmap.insert(1, "Validate the core customer problem with interviews.")

    return {
        "agent": "career-agent",
        "profile": profile,
        "recommendations": recommendations,
        "roadmap": roadmap,
        "next_steps": [
            "Identify 3 companies or programs to apply to.",
            "Refine your pitch with a one-page summary.",
            "Track progress with weekly milestones.",
        ],
    }
