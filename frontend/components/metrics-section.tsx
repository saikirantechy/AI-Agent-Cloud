import { motion } from 'framer-motion'
import { Activity, Zap, TrendingUp, Gauge } from 'lucide-react'
import type { AnalyticsSnapshot } from '../types/api'

interface MetricProps {
  icon: React.ReactNode
  label: string
  value: string | number
  unit?: string
  trend?: number
}

function MetricCard({ icon, label, value, unit, trend }: MetricProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group relative overflow-hidden rounded-xl border border-cyan-500/20 bg-gradient-to-br from-slate-900/50 via-slate-900/30 to-slate-950/50 p-6 backdrop-blur-md transition-all hover:border-cyan-400/40 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]"
    >
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-purple-500/0 to-pink-500/0 opacity-0 transition-opacity group-hover:opacity-10" />

      {/* Glow effect */}
      <div className="absolute -right-8 -top-8 h-16 w-16 rounded-full bg-cyan-500/20 blur-2xl transition-all group-hover:bg-cyan-500/40" />

      <div className="relative flex items-start justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.15em] text-cyan-300/70">{label}</p>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-3xl font-bold text-white">{value}</span>
            {unit && <span className="text-sm text-slate-400">{unit}</span>}
          </div>
          {trend !== undefined && (
            <p className={`mt-2 text-xs font-semibold ${trend >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
              {trend >= 0 ? '↑' : '↓'} {Math.abs(trend)}% from last hour
            </p>
          )}
        </div>
        <div className="text-cyan-400/60 transition-colors group-hover:text-cyan-300">{icon}</div>
      </div>
    </motion.div>
  )
}

export default function MetricsSection({ analytics }: { analytics?: AnalyticsSnapshot }) {
  const metrics = [
    {
      icon: <Activity className="h-6 w-6" />,
      label: 'Active Agents',
      value: analytics?.summary.active_agents ?? 0,
      trend: 12,
    },
    {
      icon: <Zap className="h-6 w-6" />,
      label: 'Total Executions',
      value: analytics?.summary.total_runs ?? 0,
      trend: 8,
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      label: 'Success Rate',
      value: '98.5',
      unit: '%',
      trend: 2,
    },
    {
      icon: <Gauge className="h-6 w-6" />,
      label: 'Avg Latency',
      value: '245',
      unit: 'ms',
      trend: -5,
    },
  ]

  return (
    <section>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white">Real-Time Operations Metrics</h2>
        <p className="mt-1 text-sm text-slate-400">Live system performance and orchestration statistics</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric, index) => (
          <motion.div key={metric.label} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: index * 0.1 }}>
            <MetricCard {...metric} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
