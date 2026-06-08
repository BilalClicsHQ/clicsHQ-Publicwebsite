import * as React from 'react'
import { cn } from '@/lib/cn'

export interface WorkflowCard {
  title: string
  steps: { label: string; sub: string }[]
}

/**
 * A row of light "recipe" cards — each card has a title and a vertical stack of
 * WHEN/THEN step boxes joined by down-arrows (matches the Figma "Simple
 * workflows for startup teams" section). Defaults to a 3-column grid.
 */
export function WorkflowCardRow({
  cards,
  columns = 3,
  className,
}: {
  cards: WorkflowCard[]
  columns?: 2 | 3
  className?: string
}) {
  const cols = columns === 2 ? 'lg:grid-cols-2' : 'lg:grid-cols-3'
  return (
    <div className={cn('grid gap-6 sm:grid-cols-2', cols, className)}>
      {cards.map((card) => (
        <div
          key={card.title}
          className="rounded-2xl bg-white p-6 ring-1 ring-gray-200/80 transition-shadow hover:shadow-card"
        >
          <h3 className="text-[20px] font-medium text-ink">{card.title}</h3>
          <div className="mt-5">
            {card.steps.map((s, i) => (
              <React.Fragment key={i}>
                <div className="rounded-xl bg-gray-50 px-4 py-3 ring-1 ring-gray-100">
                  <p className="text-[11px] font-bold uppercase tracking-wide text-ink">{s.label}</p>
                  <p className="mt-1 text-[13px] text-muted">{s.sub}</p>
                </div>
                {i < card.steps.length - 1 && (
                  <div className="flex justify-center py-1.5 text-gray-400" aria-hidden>
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 5v14M5 12l7 7 7-7" />
                    </svg>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
