'use client'

import * as React from 'react'
import Image from 'next/image'
import { AGENTS, AGENT_FILTERS, type Agent, type AgentCategory } from '@/data/agents'
import { AgentModal } from './AgentModal'
import { cn } from '@/lib/cn'

export function AgentsView() {
  const [filter, setFilter] = React.useState<'All' | AgentCategory>('All')
  const [selected, setSelected] = React.useState<Agent | null>(null)
  const [modalOpen, setModalOpen] = React.useState(false)

  const visible = filter === 'All' ? AGENTS : AGENTS.filter((a) => a.category === filter)

  const openAgent = (a: Agent) => {
    setSelected(a)
    setModalOpen(true)
  }

  return (
    <div className="relative">
      {/* Soft AI glow */}
      <div className="pointer-events-none absolute inset-x-0 -top-6 h-64 bg-ai-glow" />

      <div className="relative pt-14 pb-12">
        {/* Heading */}
        <div className="text-center max-w-xl mx-auto">
          <h1 className="text-2xl sm:text-3xl font-bold text-ink">Build your own</h1>
          <h1 className="text-2xl sm:text-3xl font-bold text-ink">
            <span className="text-ai-600">workforce</span> in minutes
          </h1>
          <p className="mt-3 text-sm text-muted">
            Expand what you can achieve, get faster, better results — all managed from one place, with
            full control and visibility.
          </p>
        </div>

        {/* Filter pills */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
          {AGENT_FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={cn(
                'px-4 py-1.5 rounded-full text-xs font-medium ring-1 transition-colors',
                filter === f
                  ? 'bg-ink text-white ring-ink'
                  : 'bg-white text-muted ring-gray-200 hover:bg-gray-50',
              )}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Agent cards grid */}
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {visible.map((agent) => (
            <button
              key={agent.id}
              onClick={() => openAgent(agent)}
              className={cn(
                'group relative rounded-2xl bg-white p-6 text-left ring-1 ring-gray-100 shadow-card',
                'hover:ring-ai-300 hover:shadow-lg transition-all',
              )}
            >
              <div className="absolute inset-x-0 -top-px h-24 bg-gradient-to-b from-ai-50/70 to-transparent rounded-t-2xl pointer-events-none" />
              <Image src={agent.icon} alt="" width={48} height={48} className="relative h-12 w-12 rounded-xl" />
              <h3 className="relative mt-4 text-base font-bold text-ink">{agent.name}</h3>
              <p className="relative mt-1.5 text-xs text-muted leading-snug line-clamp-3">{agent.description}</p>
              <span className="relative mt-4 inline-flex items-center px-3 py-1.5 rounded-lg bg-ink text-white text-xs font-medium group-hover:bg-black transition-colors">
                {agent.category}
              </span>
            </button>
          ))}
        </div>
      </div>

      <AgentModal agent={selected} open={modalOpen} onOpenChange={setModalOpen} />
    </div>
  )
}
