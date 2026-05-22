'use client'

import * as React from 'react'
import { X, Search, Zap, Plus } from 'lucide-react'
import { WORKFLOW_FILTERS, type CatalogItem, type WorkflowFilter } from '@/data/workflows'
import { cn } from '@/lib/cn'

/**
 * Slide-in panel used to pick a workflow Trigger or Action.
 * `kind` swaps the heading + accent icon; `items` is the catalogue to show.
 */
export function CatalogPanel({
  kind,
  items,
  onPick,
  onClose,
}: {
  kind: 'trigger' | 'action'
  items: CatalogItem[]
  onPick: (item: CatalogItem) => void
  onClose: () => void
}) {
  const [query, setQuery] = React.useState('')
  const [filter, setFilter] = React.useState<WorkflowFilter>('Featured')

  const filtered = items.filter((i) => {
    const matchesQuery = i.title.toLowerCase().includes(query.toLowerCase())
    const matchesFilter = filter === 'Featured' ? true : i.group === filter
    return matchesQuery && matchesFilter
  })

  return (
    <aside className="w-[340px] shrink-0 border-l border-gray-100 bg-white flex flex-col">
      {/* Header */}
      <div className="flex items-start justify-between p-5">
        <div className="flex items-start gap-3">
          <div className={cn('grid h-9 w-9 place-items-center rounded-lg', kind === 'trigger' ? 'bg-info-soft text-info-fg' : 'bg-gray-100 text-ink')}>
            {kind === 'trigger' ? <Zap className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
          </div>
          <div>
            <p className="text-sm font-semibold text-ink">{kind === 'trigger' ? 'Choose Trigger' : 'Add Action'}</p>
            <p className="text-xs text-muted">When Start this workflow?</p>
          </div>
        </div>
        <button onClick={onClose} className="h-7 w-7 grid place-items-center rounded-full hover:bg-gray-100">
          <X className="h-4 w-4 text-muted" />
        </button>
      </div>

      {/* Search */}
      <div className="px-5">
        <div className="relative">
          <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={`What happens to ${kind === 'trigger' ? 'trigger' : 'continue'} this workflow?`}
            className="h-10 w-full rounded-lg border border-gray-200 bg-white pl-9 pr-3 text-sm text-ink placeholder:text-subtle focus:outline-none focus:ring-2 focus:ring-ink/20"
          />
        </div>
      </div>

      {/* Filter pills */}
      <div className="px-5 mt-3 flex flex-wrap gap-1.5">
        {WORKFLOW_FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={cn(
              'px-2.5 py-1 rounded-full text-xs font-medium ring-1 transition-colors',
              filter === f ? 'bg-ink text-white ring-ink' : 'bg-white text-muted ring-gray-200 hover:bg-gray-50',
            )}
          >
            {f}
          </button>
        ))}
      </div>

      {/* List */}
      <div className="flex-1 overflow-y-auto px-3 mt-3 pb-5">
        <p className="px-2 py-2 text-xs font-medium text-muted">{filter}</p>
        {filtered.map((item) => (
          <button
            key={item.id}
            onClick={() => onPick(item)}
            className="w-full flex items-start gap-3 rounded-lg p-3 text-left hover:bg-surface-alt transition-colors"
          >
            <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-gray-100 text-ink">
              {kind === 'trigger' ? <Zap className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
            </div>
            <div className="min-w-0">
              <p className="text-sm font-medium text-ink">{item.title}</p>
              <p className="text-xs text-muted truncate">{item.description}</p>
            </div>
          </button>
        ))}
        {filtered.length === 0 && <p className="px-2 py-6 text-sm text-muted text-center">No matches.</p>}
      </div>
    </aside>
  )
}
