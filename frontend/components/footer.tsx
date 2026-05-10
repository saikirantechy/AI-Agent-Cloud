import { Github, Zap } from 'lucide-react'

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
            <p className="text-sm text-slate-400">Enterprise-grade multi-agent orchestration platform</p>
          </div>

          {/* Product */}
          <div>
            <h3 className="mb-4 font-semibold text-white">Product</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#" className="transition-colors hover:text-cyan-300">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-cyan-300">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-cyan-300">
                  Documentation
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 font-semibold text-white">Company</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#" className="transition-colors hover:text-cyan-300">
                  Nasiko Buildathon
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-cyan-300">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-cyan-300">
                  Contributors
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-4 font-semibold text-white">Connect</h3>
            <div className="flex gap-3">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700 text-slate-400 transition-all hover:border-cyan-400/50 hover:text-cyan-300 hover:shadow-[0_0_10px_rgba(34,211,238,0.2)]">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-slate-800/50 pt-8 text-center text-sm text-slate-500">
          <p>
            Built for Nasiko Buildathon Bengaluru • Powered by <span className="text-cyan-300">OpenAI</span> & <span className="text-cyan-300">LLMs</span>
          </p>
          <p className="mt-2">© 2026 Startup AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
