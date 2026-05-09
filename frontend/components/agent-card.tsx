interface AgentCardProps {
  title: string
  status: string
  description: string
}

export default function AgentCard({ title, status, description }: AgentCardProps) {
  return (
    <article className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-xl shadow-slate-950/20">
      <div className="flex items-center justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <p className="mt-1 text-sm text-slate-400">{description}</p>
        </div>
        <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-emerald-300">
          {status}
        </span>
      </div>
    </article>
  )
}
