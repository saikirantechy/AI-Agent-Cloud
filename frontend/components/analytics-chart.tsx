'use client'

import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { time: '00:00', executions: 24, success: 22 },
  { time: '04:00', executions: 32, success: 29 },
  { time: '08:00', executions: 45, success: 42 },
  { time: '12:00', executions: 58, success: 55 },
  { time: '16:00', executions: 72, success: 69 },
  { time: '20:00', executions: 82, success: 79 },
]

export default function AnalyticsChart() {
  return (
    <section className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-slate-900/50 via-slate-900/30 to-slate-950/50 p-6 backdrop-blur-md">
      <h2 className="mb-2 text-xl font-bold text-white">Execution Analytics</h2>
      <p className="mb-6 text-sm text-slate-400">24-hour agent execution trends and success metrics</p>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorExec" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#22d3ee" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#22d3ee" stopOpacity={0.1} />
            </linearGradient>
            <linearGradient id="colorSuccess" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#10b981" stopOpacity={0.1} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(148, 163, 184, 0.1)" />
          <XAxis dataKey="time" stroke="#94a3b8" />
          <YAxis stroke="#94a3b8" />
          <Tooltip
            contentStyle={{
              backgroundColor: 'rgba(15, 23, 42, 0.95)',
              border: '1px solid rgba(34, 211, 238, 0.2)',
              borderRadius: '8px',
            }}
            labelStyle={{ color: '#22d3ee' }}
          />
          <Bar dataKey="executions" fill="url(#colorExec)" radius={[8, 8, 0, 0]} />
          <Bar dataKey="success" fill="url(#colorSuccess)" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </section>
  )
}
