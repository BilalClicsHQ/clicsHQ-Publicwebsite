'use client'

import * as React from 'react'
import { Paperclip, ArrowRight, ChevronDown, ClipboardList, FileText, ListTree, AlertTriangle } from 'lucide-react'
import { CHAT_SUGGESTIONS, CHAT_FILTERS } from '@/data/agents'
import { cn } from '@/lib/cn'

const SUGGESTION_ICON = [ClipboardList, FileText, ListTree, AlertTriangle]

export function ChatView() {
  const [prompt, setPrompt] = React.useState('')
  const [activeFilter, setActiveFilter] = React.useState('Task')

  return (
    <div className="relative">
      {/* Soft AI glow at top */}
      <div className="pointer-events-none absolute inset-x-0 -top-6 h-56 bg-ai-glow" />

      <div className="relative max-w-3xl mx-auto pt-16 pb-10 text-center">
        <h1 className="text-2xl sm:text-3xl font-bold text-ink">Good Afternoon, Jason</h1>
        <p className="text-2xl sm:text-3xl font-bold text-ink">
          What&apos;s on <span className="text-ai-600">your mind?</span>
        </p>

        {/* Prompt box */}
        <div className="mt-8 rounded-2xl bg-white ring-1 ring-ai-200/60 shadow-lg p-4 text-left">
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Ask AI a question or make a request"
            rows={3}
            className="w-full resize-none bg-transparent text-sm text-ink placeholder:text-subtle outline-none"
          />
          <div className="mt-2 flex items-center justify-between">
            <button className="inline-flex items-center gap-1.5 text-xs text-muted hover:text-ink transition-colors">
              <Paperclip className="h-3.5 w-3.5" />
              File Upload
            </button>
            <div className="flex items-center gap-2">
              <button className="inline-flex items-center gap-1 text-xs text-muted hover:text-ink transition-colors">
                All Sources <ChevronDown className="h-3 w-3" />
              </button>
              <button
                disabled={!prompt.trim()}
                className="grid h-7 w-7 place-items-center rounded-full bg-ink text-white disabled:opacity-40 hover:bg-black transition-colors"
              >
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Filter chips */}
        <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
          {CHAT_FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={cn(
                'px-3 py-1 rounded-full text-xs font-medium ring-1 transition-colors',
                activeFilter === f
                  ? 'bg-ai-50 text-ai-700 ring-ai-200'
                  : 'bg-white text-muted ring-gray-200 hover:bg-gray-50',
              )}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Suggestion cards */}
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {CHAT_SUGGESTIONS.map((s, i) => {
            const Icon = SUGGESTION_ICON[i]
            return (
              <button
                key={s.title}
                onClick={() => setPrompt(s.description)}
                className="rounded-xl bg-white ring-1 ring-ai-100 p-4 text-left hover:ring-ai-300 hover:shadow-sm transition-all"
              >
                <p className="text-sm font-semibold text-ai-700">{s.title}</p>
                <p className="mt-1 text-xs text-muted leading-snug">{s.description}</p>
                <Icon className="mt-3 h-4 w-4 text-ai-500" />
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
