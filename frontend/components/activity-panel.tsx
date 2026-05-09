export default function ActivityPanel() {
  return (
    <section className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-xl shadow-slate-950/20">
      <div className="flex items-center justify-between gap-3">
        <div>
          <h2 className="text-xl font-semibold text-white">Live activity</h2>
          <p className="mt-1 text-sm text-slate-400">Real-time orchestration metrics and logs for the AI Agent Cloud.</p>
        </div>
      </div>
      <div className="mt-6 grid gap-4">
        <div className="rounded-3xl bg-slate-950/75 p-4">
          <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Pipeline status</p>
          <p className="mt-2 text-3xl font-semibold text-white">Online</p>
        </div>
        <div className="rounded-3xl bg-slate-950/75 p-4">
          <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Recent event</p>
          <p className="mt-2 text-base text-slate-300">Resume analysis completed, career recommendations queued.</p>
        </div>
        <div className="rounded-3xl bg-slate-950/75 p-4">
          <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Agent throughput</p>
          <p className="mt-2 text-2xl font-semibold text-cyan-300">42 requests / hour</p>
        </div>
      </div>
    </section>
  )
}
