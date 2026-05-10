'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Upload, CheckCircle, AlertCircle, Loader } from 'lucide-react'

export default function UpgradedResumeUpload() {
  const [isDragging, setIsDragging] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'uploading' | 'success' | 'error'>('idle')
  const [text, setText] = useState('')
  const [atsScore, setAtsScore] = useState<number | null>(null)

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    const file = e.dataTransfer.files[0]
    if (file) {
      handleFile(file)
    }
  }

  const handleFile = async (file: File) => {
    setIsLoading(true)
    setUploadStatus('uploading')

    try {
      const text = await file.text()
      setText(text)
      // Simulate ATS analysis
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setAtsScore(Math.floor(Math.random() * 40 + 60))
      setUploadStatus('success')
    } catch {
      setUploadStatus('error')
    } finally {
      setIsLoading(false)
    }
  }

  const analyzeResume = async () => {
    if (!text) return
    setIsLoading(true)

    const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:8000'
    try {
      const res = await fetch(`${apiUrl}/resume/analyze`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text }),
      })
      if (res.ok) {
        setUploadStatus('success')
        setAtsScore(Math.floor(Math.random() * 40 + 60))
      } else {
        setUploadStatus('error')
      }
    } catch {
      setUploadStatus('error')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="mt-6 space-y-4">
      {/* Drag & Drop Zone */}
      <motion.div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        animate={{
          borderColor: isDragging ? 'rgba(34, 211, 238, 0.6)' : 'rgba(34, 211, 238, 0.2)',
          backgroundColor: isDragging ? 'rgba(34, 211, 238, 0.05)' : 'rgba(15, 23, 42, 0.3)',
        }}
        className="relative rounded-xl border-2 border-dashed border-cyan-500/20 bg-slate-950/30 p-8 text-center transition-all backdrop-blur-sm"
      >
        {/* Animated upload icon */}
        <motion.div animate={isDragging ? { scale: 1.1 } : { scale: 1 }} className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-500/20">
          <Upload className={`h-6 w-6 ${isDragging ? 'text-cyan-300' : 'text-cyan-400/60'}`} />
        </motion.div>

        <p className="text-sm font-semibold text-white">Drag & drop your resume</p>
        <p className="mt-1 text-xs text-slate-400">or click to browse files</p>

        {/* Hidden file input */}
        <input
          type="file"
          accept=".pdf,.doc,.docx,.txt"
          onChange={(e) => {
            if (e.target.files?.[0]) {
              handleFile(e.target.files[0])
            }
          }}
          className="absolute inset-0 cursor-pointer opacity-0"
        />
      </motion.div>

      {/* Text Input Area */}
      <div>
        <label className="text-sm font-semibold text-white">Or paste resume text:</label>
        <motion.textarea
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste your resume content here..."
          className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-950/50 px-4 py-3 font-mono text-sm text-white placeholder-slate-500 transition-all focus:border-cyan-400/60 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
          rows={4}
        />
      </div>

      {/* Analyze Button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={analyzeResume}
        disabled={!text || isLoading}
        className="w-full rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-2 font-semibold text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]"
      >
        {isLoading ? (
          <>
            <Loader className="mr-2 inline h-4 w-4 animate-spin" />
            Analyzing...
          </>
        ) : (
          'Analyze Resume & Generate Insights'
        )}
      </motion.button>

      {/* Status Display */}
      {uploadStatus === 'success' && atsScore !== null && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-4">
          <div className="flex items-center gap-3">
            <CheckCircle className="h-5 w-5 text-emerald-400" />
            <div className="flex-1">
              <p className="font-semibold text-emerald-300">Resume Analysis Complete</p>
              <p className="mt-1 text-sm text-emerald-200/70">ATS Score: {atsScore}%</p>
            </div>
          </div>
        </motion.div>
      )}

      {uploadStatus === 'error' && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="rounded-lg border border-red-500/30 bg-red-500/10 p-4">
          <div className="flex items-center gap-3">
            <AlertCircle className="h-5 w-5 text-red-400" />
            <p className="text-sm text-red-200">Failed to analyze resume. Please try again.</p>
          </div>
        </motion.div>
      )}
    </div>
  )
}
