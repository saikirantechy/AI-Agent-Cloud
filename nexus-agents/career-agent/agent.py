def recommend_career(payload: dict) -> dict:
    profile = payload.get("profile", "")
    normalized = profile.lower()
    skills = [skill for skill in ["python", "data", "ai", "cloud", "startup", "product", "design"] if skill in normalized]
    roadmap = [
        "Week 1: Identify your core strengths and define your target industry.",
        "Week 2: Build a portfolio project aligned to your goal.",
        "Week 3: Prepare a strong resume and internship pitch.",
        "Week 4: Apply to 10+ roles and collect feedback.",
    ]
    if "startup" in normalized:
        roadmap.insert(1, "Explore startup idea validation and early customer discovery.")
    return {
        "agent": "career-agent",
        "profile": profile,
        "skills_detected": skills,
        "recommendations": [
            "Focus on high-impact skills that match your target roles.",
            "Prepare a project story for every experience listed.",
            "Engage with mentors and mock interview practice.",
        ],
        "roadmap": roadmap,
    }
