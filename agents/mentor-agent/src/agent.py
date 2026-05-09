from typing import List


def mentor_advice(challenge: str) -> dict:
    normalized = challenge.lower()
    advice: List[str] = [
        "Frame your challenge with a clear goal and define success metrics.",
        "Break the work into weekly milestones and review progress regularly.",
        "Seek feedback from peers or mentors after each milestone.",
    ]

    if "hackathon" in normalized:
        advice.insert(0, "Build a strong MVP that clearly demonstrates the value proposition.")
    if "startup" in normalized:
        advice.insert(0, "Validate the problem before you scale and focus on customer feedback.")

    return {
        "agent": "mentor-agent",
        "challenge": challenge,
        "advice": advice,
        "next_steps": [
            "Define the core user persona.",
            "Prioritize a small list of high-impact features.",
            "Run one customer or peer test per week.",
        ],
    }
