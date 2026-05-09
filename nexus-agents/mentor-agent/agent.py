def mentor_advice(payload: dict) -> dict:
    challenge = payload.get("challenge", "")
    advice = [
        "Frame your challenge with a clear goal and define success metrics.",
        "Break the work into weekly milestones and review progress regularly.",
        "Seek constructive feedback from peers or a mentor after each milestone.",
    ]
    if "hackathon" in challenge.lower():
        advice.insert(0, "Focus on a workable MVP that showcases a clear value proposition.")
    if "startup" in challenge.lower():
        advice.insert(0, "Validate the problem before scaling the solution.")

    return {
        "agent": "mentor-agent",
        "challenge": challenge,
        "advice": advice,
        "next_steps": [
            "Define the user persona.",
            "Prioritize three high-impact features.",
            "Run one customer interview or peer test.",
        ],
    }
