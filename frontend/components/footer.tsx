import { Github, Zap, BookOpen, Puzzle } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/50 bg-gradient-to-t from-slate-950 to-slate-900/50 py-8 mt-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Platform */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Zap className="h-5 w-5 text-cyan-400" />
              <span className="font-bold text-white">Startup AI</span>
            </div>
            <p className="text-sm text-slate-400">Open-source AI operations platform for developer-first automation.</p>
          </div>

          {/* Platform */}
          <div>
            <h3 className="mb-4 font-semibold text-white">Platform</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="/docs/index.html#platform-overview" className="transition-colors hover:text-cyan-300">
                  Platform Overview
                </a>
              </li>
              <li>
                <a href="/docs/index.html#developer-experience" className="transition-colors hover:text-cyan-300">
                  Developer Experience
                </a>
              </li>
              <li>
                <a href="/docs/index.html#deployment-options" className="transition-colors hover:text-cyan-300">
                  Deployment Options
                </a>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="mb-4 font-semibold text-white">Community</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="/CONTRIBUTING.md" className="transition-colors hover:text-cyan-300">
                  Contributing
                </a>
              </li>
              <li>
                <a href="/docs/index.html#community-contributions" className="transition-colors hover:text-cyan-300">
                  Community Support
                </a>
              </li>
              <li>
                <a href="/docs/index.html#open-source-vision" className="transition-colors hover:text-cyan-300">
                  Open Source Vision
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-4 font-semibold text-white">Resources</h3>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-cyan-300" />
                <a href="/docs/index.html" className="transition-colors hover:text-cyan-300">
                  Docs
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Puzzle className="h-4 w-4 text-cyan-300" />
                <a href="https://github.com/saikirantechy/AI-Agent-Cloud" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-cyan-300">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-slate-800/50 pt-8 text-center text-sm text-slate-500">
          <p>
            Built as an open-source platform for AI operations and developer automation. Powered by community collaboration and extensible AI architecture.
          </p>
          <p className="mt-2">© 2026 AI-Agent-Cloud. MIT License.</p>
        </div>
      </div>
    </footer>
  )
}
