'use client'

import { useState } from 'react'

export default function ResumeUpload() {
  const [resumeText, setResumeText] = useState('')
  const [feedback, setFeedback] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const submitResume = async () => {
    setFeedback(null)
    setLoading(true)
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/resume/analyze`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: resumeText }),
      })
      const data = await response.json()
      setFeedback(JSON.stringify(data, null, 2))
    } catch (error) {
      setFeedback('Unable to connect to the backend. Check your environment and run the API.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="mt-6 space-y-4">
      <textarea
        value={resumeText}
        onChange={(event) => setResumeText(event.target.value)}
        rows={8}
        className="w-full rounded-3xl border border-slate-800 bg-slate-950 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400"
        placeholder="Paste resume text or career profile here"
      />
      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          onClick={submitResume}
          disabled={loading || resumeText.length === 0}
          className="inline-flex items-center justify-center rounded-3xl bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? 'Analyzing...' : 'Analyze Resume'}
        </button>
      </div>
      {feedback ? (
        <pre className="rounded-3xl border border-slate-800 bg-slate-950/90 p-4 text-xs text-slate-200">
          {feedback}
        </pre>
      ) : null}
    </div>
  )
}
