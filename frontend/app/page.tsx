import AgentCard from '../components/agent-card'
import ResumeUpload from '../components/resume-upload'
import ActivityPanel from '../components/activity-panel'

const AGENT_CARDS = [
  { title: 'Resume Agent', status: 'Active', description: 'Parse resumes, extract skills, and score fit.' },
  { title: 'Career Agent', status: 'Active', description: 'Recommend career pathways and internship plans.' },
  { title: 'Mentor Agent', status: 'Active', description: 'Give startup guidance, learning, and hackathon advice.' },
  { title: 'Analytics Agent', status: 'Active', description: 'Track flows, runs, and usage metrics.' },
  { title: 'Notification Agent', status: 'Active', description: 'Send summary alerts and campus notifications.' },
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <header className="mb-8 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">AI Agent Cloud</p>
            <h1 className="mt-3 text-4xl font-semibold text-white">Student and Startup AI Operations</h1>
            <p className="mt-2 max-w-2xl text-slate-300">
              Modular multi-agent orchestration for careers, placements, mentoring, notifications, and analytics.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-800 bg-slate-900/80 px-6 py-5 shadow-xl shadow-slate-950/20">
            <p className="text-sm text-slate-400">Live status</p>
            <p className="mt-2 text-2xl font-semibold text-emerald-400">All systems nominal</p>
          </div>
        </header>

        <section className="grid gap-6 lg:grid-cols-[1.4fr_0.9fr]">
          <div className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              {AGENT_CARDS.map((agent) => (
                <AgentCard key={agent.title} title={agent.title} status={agent.status} description={agent.description} />
              ))}
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-xl shadow-slate-950/20">
              <h2 className="text-xl font-semibold text-white">Resume Intelligence</h2>
              <p className="mt-2 text-slate-400">Upload student resumes and generate skill insights, ATS analysis, and career suggestions.</p>
              <ResumeUpload />
            </div>
          </div>

          <div className="space-y-6">
            <ActivityPanel />
          </div>
        </section>
      </div>
    </main>
  )
}
