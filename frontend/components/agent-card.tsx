import { motion } from 'framer-motion'
import { Zap, Activity } from 'lucide-react'

interface AgentCardProps {
  title: string
  status: string
  description: string
  executions?: number
  latency?: number
  uptime?: number
}

export default function AgentCard({ title, status, description, executions = 0, latency = 245, uptime = 99.8 }: AgentCardProps) {
  return (
    <motion.article
      whileHover={{ scale: 1.02, y: -5 }}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      className="group relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-slate-900/50 via-slate-900/30 to-slate-950/50 p-6 backdrop-blur-md shadow-xl transition-all hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]"
    >
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-purple-500/5 to-pink-500/0 opacity-0 transition-opacity group-hover:opacity-100" />

      {/* Glow effect */}
      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{ repeat: Infinity, duration: 4 }}
        className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-cyan-500/20 blur-3xl"
      />

      {/* Status indicator pulse */}
      <motion.div
        animate={{ scale: [0.8, 1.2, 0.8] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute right-6 top-6 h-3 w-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 shadow-lg"
      />

      <div className="relative space-y-4">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-bold text-white">{title}</h3>
            <p className="mt-2 text-sm text-slate-400">{description}</p>
          </div>
          <motion.div whileHover={{ rotate: 12 }} className="text-cyan-400/60 transition-colors group-hover:text-cyan-300">
            <Zap className="h-5 w-5" />
          </motion.div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-3 gap-2 pt-4 border-t border-slate-800/50">
          <motion.div whileHover={{ scale: 1.05 }} className="text-center">
            <div className="text-xs uppercase tracking-[0.1em] text-cyan-300/60">Executions</div>
            <div className="mt-1 text-lg font-bold text-white">{executions}</div>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="text-center">
            <div className="text-xs uppercase tracking-[0.1em] text-purple-300/60">Latency</div>
            <div className="mt-1 text-lg font-bold text-white">{latency}ms</div>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="text-center">
            <div className="text-xs uppercase tracking-[0.1em] text-emerald-300/60">Uptime</div>
            <div className="mt-1 text-lg font-bold text-white">{uptime}%</div>
          </motion.div>
        </div>

        {/* Status Badge */}
        <motion.div
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="mt-4 flex items-center gap-2 rounded-lg bg-emerald-500/10 px-3 py-2"
        >
          <Activity className="h-4 w-4 text-emerald-400" />
          <span className="text-xs font-semibold uppercase tracking-[0.1em] text-emerald-300">{status}</span>
        </motion.div>
      </div>
    </motion.article>
  )
}
