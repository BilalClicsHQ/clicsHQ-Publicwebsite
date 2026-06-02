import * as React from 'react'
import { cn } from '@/lib/cn'

export interface Benefit {
  icon: React.ElementType
  iconBg?: string
  title: string
  body: string
}

/**
 * 3-card (or 4-card) grid of pastel-tile icon cards with a title + description.
 * Used on solution pages and various home variants.
 */
export function BenefitTrio({
  items,
  columns = 3,
}: {
  items: Benefit[]
  columns?: 3 | 4
}) {
  const gridCols = columns === 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'
  return (
    <div className={cn('grid gap-5 sm:grid-cols-2', gridCols)}>
      {items.map((b, i) => (
        <div
          key={i}
          className="rounded-2xl bg-white p-6 ring-1 ring-gray-100 transition-shadow hover:shadow-card"
        >
          <span
            className={cn(
              'grid h-11 w-11 place-items-center rounded-xl',
              b.iconBg ?? 'bg-violet-100 text-violet-600',
            )}
          >
            <b.icon className="h-5 w-5" />
          </span>
          <h3 className="mt-4 text-base font-bold text-ink">{b.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">{b.body}</p>
        </div>
      ))}
    </div>
  )
}
