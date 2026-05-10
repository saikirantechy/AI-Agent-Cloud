import { motion } from 'framer-motion'
import { AnalyticsSnapshot, LogEntry } from '../types/api'

interface ActivityPanelProps {
  healthStatus: string
  analytics?: AnalyticsSnapshot
  logs?: LogEntry[]
  error?: string
}

export default function ActivityPanel({ healthStatus, analytics, logs, error }: ActivityPanelProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-slate-900/50 via-slate-900/30 to-slate-950/50 p-6 shadow-xl backdrop-blur-md space-y-4"
    >
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-white">Live Activity</h2>
          <p className="mt-1 text-sm text-slate-400">Real-time orchestration metrics</p>
        </div>
        <motion.div
          animate={{ scale: [0.8, 1.2, 0.8] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className={`rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] ${
            healthStatus === 'healthy' ? 'bg-emerald-500/20 text-emerald-300' : 'bg-amber-500/20 text-amber-300'
          }`}
        >
          {healthStatus}
        </motion.div>
      </div>

      <div className="space-y-3">
        <motion.div whileHover={{ scale: 1.02 }} className="rounded-lg bg-slate-950/50 p-4 border border-slate-800/30">
          <p className="text-xs uppercase tracking-[0.15em] text-cyan-300/60">Total Executions</p>
          <p className="mt-2 text-2xl font-bold text-white">{analytics?.summary.total_runs ?? '—'}</p>
        </motion.div>

        <motion.div whileHover={{ scale: 1.02 }} className="rounded-lg bg-slate-950/50 p-4 border border-slate-800/30">
          <p className="text-xs uppercase tracking-[0.15em] text-purple-300/60">Active Agents</p>
          <p className="mt-2 text-2xl font-bold text-white">{analytics?.summary.active_agents ?? '—'}</p>
        </motion.div>

        <motion.div whileHover={{ scale: 1.02 }} className="rounded-lg bg-slate-950/50 p-4 border border-slate-800/30">
          <p className="text-xs uppercase tracking-[0.15em] text-emerald-300/60">Recent Activity</p>
          <div className="mt-3 space-y-2 text-xs text-slate-300 max-h-32 overflow-y-auto">
            {error ? (
              <p className="text-amber-300">{error}</p>
            ) : logs?.length ? (
              logs.slice(0, 3).map((log) => (
                <motion.p key={log.timestamp} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="truncate">
                  <span className="text-slate-500">[{log.level}]</span> {log.message}
                </motion.p>
              ))
            ) : (
              <p className="text-slate-500">No recent activity yet.</p>
            )}
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
