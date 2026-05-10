'use client'

import { motion } from 'framer-motion'
import type { LogEntry } from '../types/api'

interface TimelineEvent {
  id: string
  timestamp: string
  agent: string
  action: string
  status: 'success' | 'pending' | 'error'
  duration?: string
}

interface ActivityTimelineProps {
  logs?: LogEntry[]
}

export default function ActivityTimeline({ logs }: ActivityTimelineProps) {
  const events: TimelineEvent[] = logs
    ?.slice(0, 8)
    .map((log) => ({
      id: log.timestamp,
      timestamp: new Date(log.timestamp).toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      }),
      agent: log.level,
      action: log.message.substring(0, 50),
      status: log.level === 'error' ? 'error' : log.level === 'warning' ? 'pending' : 'success',
      duration: '42ms',
    })) ?? []

  const statusColor = {
    success: 'from-emerald-500 to-emerald-600',
    pending: 'from-amber-500 to-amber-600',
    error: 'from-red-500 to-red-600',
  }

  const statusBg = {
    success: 'bg-emerald-500/20 text-emerald-300',
    pending: 'bg-amber-500/20 text-amber-300',
    error: 'bg-red-500/20 text-red-300',
  }

  return (
    <section className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-slate-900/50 via-slate-900/30 to-slate-950/50 p-6 backdrop-blur-md">
      <h2 className="mb-2 text-xl font-bold text-white">AI Activity Timeline</h2>
      <p className="mb-6 text-sm text-slate-400">Real-time orchestration events and agent executions</p>

      <div className="space-y-4">
        {events.length === 0 ? (
          <p className="text-center text-sm text-slate-500">No activity yet. Start by analyzing a resume.</p>
        ) : (
          events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative flex gap-4 rounded-lg border border-slate-800/50 bg-slate-950/30 p-4 transition-all hover:border-cyan-400/30 hover:bg-slate-900/40"
            >
              {/* Timeline dot */}
              <div className="flex flex-col items-center">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: event.status === 'pending' ? Infinity : 0, duration: 2 }}
                  className={`h-3 w-3 rounded-full bg-gradient-to-r ${statusColor[event.status]} shadow-lg`}
                />
                {index < events.length - 1 && <div className="mt-2 h-8 w-0.5 bg-gradient-to-b from-slate-700 to-transparent" />}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-white">{event.action}</p>
                    <p className="mt-1 text-xs text-slate-400">
                      Agent: <span className="text-cyan-300">{event.agent}</span>
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <span className={`rounded-full px-2 py-1 text-xs font-semibold capitalize ${statusBg[event.status]}`}>
                      {event.status}
                    </span>
                    <span className="text-xs text-slate-500">{event.timestamp}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))
        )}
      </div>
    </section>
  )
}
