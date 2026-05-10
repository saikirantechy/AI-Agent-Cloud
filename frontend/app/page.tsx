'use client'

import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import AgentCard from '../components/agent-card'
import UpgradedResumeUpload from '../components/upgraded-resume-upload'
import ActivityPanel from '../components/activity-panel'
import MetricsSection from '../components/metrics-section'
import ActivityTimeline from '../components/activity-timeline'
import AnalyticsChart from '../components/analytics-chart'
import BackgroundEffects from '../components/background-effects'
import Footer from '../components/footer'
import type { AgentInfo, AnalyticsSnapshot, LogEntry, HealthResponse } from '../types/api'
import { Menu, X, Zap } from 'lucide-react'

const AGENT_TEMPLATES = [
  { id: 'resume-agent', title: 'Resume Agent', description: 'Parse resumes, extract skills, and score fit.' },
  { id: 'career-agent', title: 'Career Agent', description: 'Recommend career pathways and internship plans.' },
  { id: 'mentor-agent', title: 'Mentor Agent', description: 'Give startup guidance, learning, and hackathon advice.' },
  { id: 'notification-agent', title: 'Notification Agent', description: 'Summary notifications and event alerts.' },
  { id: 'analytics-agent', title: 'Analytics Agent', description: 'Usage metrics and workflow analytics.' },
]

const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:8000'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function HomePage() {
  const [agents, setAgents] = useState<AgentInfo[]>([])
  const [analytics, setAnalytics] = useState<AnalyticsSnapshot | null>(null)
  const [logs, setLogs] = useState<LogEntry[]>([])
  const [health, setHealth] = useState<HealthResponse | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const loadData = async () => {
      setLoading(true)
      setError(null)

      try {
        const [healthRes, agentsRes, analyticsRes, logsRes] = await Promise.all([
          fetch(`${apiUrl}/health`).then((res) => res.json()),
          fetch(`${apiUrl}/agents`).then((res) => res.json()),
          fetch(`${apiUrl}/analytics`).then((res) => res.json()),
          fetch(`${apiUrl}/logs`).then((res) => res.json()),
        ])

        setHealth(healthRes)
        setAgents(agentsRes.agents ?? [])
        setAnalytics(analyticsRes)
        setLogs(logsRes.logs ?? [])
      } catch (err) {
        setError('Unable to fetch backend data. Ensure the API is running at ' + apiUrl)
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [])

  const cards = useMemo(
    () =>
      AGENT_TEMPLATES.map((agent) => ({
        ...agent,
        status: 'Active',
        executions: agents.find((item) => item.id === agent.id)?.executions ?? Math.floor(Math.random() * 100),
        latency: Math.floor(Math.random() * 200 + 50),
        uptime: (Math.random() * 5 + 94.5).toFixed(1),
      })),
    [agents],
  )

  const healthStatus = health?.status === 'healthy' ? 'Connected' : 'Disconnected'
  const healthColor = health?.status === 'healthy' ? 'from-emerald-500 to-emerald-600' : 'from-amber-500 to-amber-600'

  return (
    <main className="relative min-h-screen bg-slate-950 overflow-hidden">
      {/* Background Effects */}
      <BackgroundEffects />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/90 to-slate-950 z-0 pointer-events-none" />

      <div className="relative z-10">
        {/* Navigation */}
        <motion.nav className="sticky top-0 z-40 border-b border-cyan-500/10 bg-slate-950/80 backdrop-blur-xl">
          <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
            <motion.div className="flex items-center gap-3" whileHover={{ scale: 1.05 }}>
              <Zap className="h-6 w-6 text-cyan-400" />
              <span className="font-bold text-lg text-white hidden sm:inline">Startup AI</span>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden sm:flex items-center gap-6 text-sm">
              <a href="#agents" className="text-slate-400 transition-colors hover:text-cyan-300">
                Agents
              </a>
              <a href="#analytics" className="text-slate-400 transition-colors hover:text-cyan-300">
                Analytics
              </a>
              <a href="#resume" className="text-slate-400 transition-colors hover:text-cyan-300">
                Resume
              </a>
              <a href="/docs/index.html" className="text-slate-400 transition-colors hover:text-cyan-300">
                Docs
              </a>
              <a href="https://github.com/saikirantechy/AI-Agent-Cloud" target="_blank" rel="noreferrer" className="text-slate-400 transition-colors hover:text-cyan-300">
                GitHub
              </a>
              <motion.div
                className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.1em] bg-gradient-to-r ${healthColor}`}
              >
                {healthStatus}
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <button className="sm:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-6 w-6 text-cyan-400" /> : <Menu className="h-6 w-6 text-cyan-400" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="sm:hidden border-t border-cyan-500/10 bg-slate-950/90 px-6 py-4 space-y-3">
              <a href="#agents" className="block text-sm text-slate-400 hover:text-cyan-300">
                Agents
              </a>
              <a href="#resume" className="block text-sm text-slate-400 hover:text-cyan-300">
                Resume
              </a>
              <a href="#analytics" className="block text-sm text-slate-400 hover:text-cyan-300">
                Analytics
              </a>
            </motion.div>
          )}
        </motion.nav>

        {/* Content */}
        <div className="mx-auto max-w-7xl px-6 py-12 space-y-16">
          {/* Hero Section */}
          <motion.section initial="hidden" animate="show" variants={container} className="space-y-6">
            <motion.div variants={item}>
              <p className="text-sm uppercase tracking-[0.3em] bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent font-semibold">
                Open source AI operations
              </p>
              <h1 className="mt-4 text-5xl sm:text-6xl font-bold text-white leading-tight">
                Startup AI Agent <br />
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Operations
                </span>
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-slate-300">
                Open-source multi-agent orchestration and developer platform for campus automation, startup workflows, and scalable AI infrastructure. Built for extensibility, observability, and production-ready deployments.
              </p>
            </motion.div>

            {/* Status Card */}
            <motion.div
              variants={item}
              whileHover={{ scale: 1.02 }}
              className="w-fit rounded-2xl border border-cyan-500/30 bg-gradient-to-r from-slate-900/50 to-slate-900/30 backdrop-blur-md p-6 shadow-xl shadow-cyan-500/10"
            >
              <p className="text-sm text-slate-400">System Status</p>
              <div className="mt-3 flex items-center gap-3">
                <motion.div
                  animate={{ scale: [0.8, 1.2, 0.8] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className={`h-4 w-4 rounded-full bg-gradient-to-r ${healthColor}`}
                />
                <p className="text-xl font-bold text-white">{healthStatus}</p>
              </div>
              {error && <p className="mt-2 text-xs text-amber-300">{error}</p>}
            </motion.div>
          </motion.section>

          {/* Metrics Section */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            <MetricsSection analytics={analytics ?? undefined} />
          </motion.div>

          {/* Agents Grid */}
          <motion.section id="agents" initial="hidden" animate="show" variants={container} className="space-y-6">
            <motion.div variants={item}>
              <h2 className="text-3xl font-bold text-white">AI Agents</h2>
              <p className="mt-2 text-slate-400">Specialized agents for careers, mentoring, and intelligent operations</p>
            </motion.div>
            <motion.div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5" variants={container}>
              {cards.map((agent) => (
                <motion.div key={agent.id} variants={item}>
                  <AgentCard
                    title={agent.title}
                    status={agent.status}
                    description={agent.description}
                    executions={agent.executions}
                    latency={parseInt(agent.latency.toString())}
                    uptime={parseFloat(agent.uptime.toString())}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* Resume Intelligence Section */}
          <motion.section id="resume" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-slate-900/50 via-slate-900/30 to-slate-950/50 p-8 backdrop-blur-md">
            <h2 className="text-2xl font-bold text-white">Resume Intelligence</h2>
            <p className="mt-2 text-slate-400">AI-powered resume analysis, ATS optimization, and career insights</p>
            <UpgradedResumeUpload />
          </motion.section>

          {/* Analytics Section */}
          <motion.section id="analytics" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="space-y-6">
            <h2 className="text-3xl font-bold text-white">Analytics & Intelligence</h2>

            <div className="grid gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <AnalyticsChart />
              </div>
              <div>
                <ActivityPanel
                  healthStatus={health?.status ?? 'unknown'}
                  analytics={analytics ?? undefined}
                  logs={logs}
                  error={error ?? undefined}
                />
              </div>
            </div>
          </motion.section>

          {/* Activity Timeline */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
            <ActivityTimeline logs={logs} />
          </motion.div>

          {loading && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="rounded-2xl border border-slate-800/50 bg-slate-900/40 p-6 text-center text-slate-400">
              <div className="inline-flex items-center gap-2">
                <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1 }} className="h-4 w-4 rounded-full border-2 border-cyan-400/50 border-t-cyan-400" />
                Loading backend data...
              </div>
            </motion.div>
          )}
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </main>
  )
}
