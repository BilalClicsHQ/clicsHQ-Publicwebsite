import * as React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/cn'

export interface Benefit {
  /** Lucide icon component (fallback when no `iconSrc`). */
  icon?: React.ElementType
  iconBg?: string
  /** Pre-designed gradient icon tile (SVG) — takes precedence over `icon`. */
  iconSrc?: string
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
          {b.iconSrc ? (
            <Image src={b.iconSrc} alt="" aria-hidden width={56} height={56} className="h-14 w-14" />
          ) : (
            <span
              className={cn(
                'grid h-11 w-11 place-items-center rounded-xl',
                b.iconBg ?? 'bg-violet-100 text-violet-600',
              )}
            >
              {b.icon && <b.icon className="h-5 w-5" />}
            </span>
          )}
          <h3 className="mt-4 text-[18px] font-bold text-ink">{b.title}</h3>
          <p className="mt-2 text-[15px] leading-relaxed text-muted">{b.body}</p>
        </div>
      ))}
    </div>
  )
}
