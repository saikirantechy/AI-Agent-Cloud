export interface AgentInfo {
  id: string
  name: string
  description: string
  status: string
  executions: number
}

export interface AgentsResponse {
  agents: AgentInfo[]
}

export interface AnalyticsSummary {
  active_agents: number
  total_runs: number
}

export interface AnalyticsSnapshot {
  summary: AnalyticsSummary
  agents: Record<string, { count: number; last_run: string | null }>
}

export interface LogsResponse {
  logs: LogEntry[]
}

export interface LogEntry {
  timestamp: string
  level: string
  message: string
}

export interface HealthResponse {
  status: string
  service: string
  message: string
}
