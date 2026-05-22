'use client'

import * as React from 'react'
import Link from 'next/link'
import { Plus, Zap, Check } from 'lucide-react'
import { TRIGGERS, ACTIONS, type CatalogItem } from '@/data/workflows'
import { CatalogPanel } from '@/components/app/workflows/CatalogPanel'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/cn'

type PanelKind = 'trigger' | 'action' | null

export default function WorkflowBuilderPage() {
  const [trigger, setTrigger] = React.useState<CatalogItem | null>(null)
  const [actions, setActions] = React.useState<CatalogItem[]>([])
  const [panel, setPanel] = React.useState<PanelKind>(null)

  const handlePick = (item: CatalogItem) => {
    if (panel === 'trigger') setTrigger(item)
    else if (panel === 'action') setActions((a) => [...a, item])
    setPanel(null)
  }

  return (
    <div className="flex -mx-4 sm:-mx-6 lg:-mx-8 -my-6 h-[calc(100vh-4rem)]">
      {/* Canvas */}
      <div
        className="flex-1 overflow-auto relative"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgb(0 0 0 / 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgb(0 0 0 / 0.05) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      >
        {/* Top-right action */}
        <div className="absolute top-4 right-4 z-10">
          <Button asChild variant="secondary" size="sm"><Link href="/workflows">Back to list</Link></Button>
        </div>

        {/* Node stack centered */}
        <div className="min-h-full flex flex-col items-center justify-center py-16 gap-0">
          {/* Trigger node */}
          <div className="relative">
            {trigger && (
              <span className="absolute -top-7 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-md bg-info-soft px-2 py-0.5 text-2xs font-medium text-info-fg">
                <Zap className="h-3 w-3" /> Trigger
              </span>
            )}
            <button
              onClick={() => setPanel('trigger')}
              className={cn(
                'w-[260px] flex items-center gap-3 rounded-xl bg-white px-4 py-3.5 ring-1 transition-all',
                panel === 'trigger' ? 'ring-2 ring-info-fg' : trigger ? 'ring-info-fg/40' : 'ring-gray-200 hover:ring-gray-300',
              )}
            >
              <div className="grid h-8 w-8 place-items-center rounded-lg bg-info-soft text-info-fg">
                {trigger ? <Check className="h-4 w-4" /> : <Zap className="h-4 w-4" />}
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-ink">{trigger ? trigger.title : 'Choose Trigger'}</p>
                {trigger && <p className="text-2xs text-muted">{trigger.description}</p>}
              </div>
            </button>
          </div>

          {/* Connector */}
          <div className="h-10 w-px bg-gray-300" />

          {/* Action nodes already added */}
          {actions.map((a, i) => (
            <React.Fragment key={`${a.id}-${i}`}>
              <div className="w-[260px] flex items-center gap-3 rounded-xl bg-white px-4 py-3.5 ring-1 ring-gray-200">
                <div className="grid h-8 w-8 place-items-center rounded-lg bg-gray-100 text-ink">
                  <Plus className="h-4 w-4" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold text-ink">{a.title}</p>
                  <p className="text-2xs text-muted">{a.description}</p>
                </div>
              </div>
              <div className="h-10 w-px bg-gray-300" />
            </React.Fragment>
          ))}

          {/* Add Action node */}
          <button
            onClick={() => setPanel('action')}
            className={cn(
              'w-[260px] flex items-center gap-3 rounded-xl bg-white px-4 py-3.5 ring-1 transition-all',
              panel === 'action' ? 'ring-2 ring-ink' : 'ring-gray-200 hover:ring-gray-300',
            )}
          >
            <div className="grid h-8 w-8 place-items-center rounded-lg bg-gray-100 text-ink">
              <Plus className="h-4 w-4" />
            </div>
            <p className="text-sm font-semibold text-ink">Add Action</p>
          </button>
        </div>
      </div>

      {/* Catalog panel */}
      {panel === 'trigger' && (
        <CatalogPanel kind="trigger" items={TRIGGERS} onPick={handlePick} onClose={() => setPanel(null)} />
      )}
      {panel === 'action' && (
        <CatalogPanel kind="action" items={ACTIONS} onPick={handlePick} onClose={() => setPanel(null)} />
      )}
    </div>
  )
}
