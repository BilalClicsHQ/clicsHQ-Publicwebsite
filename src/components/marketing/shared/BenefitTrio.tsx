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
          className="rounded-2xl bg-white p-7 shadow-card ring-1 ring-gray-100/80 transition-shadow hover:shadow-md"
        >
          {b.iconSrc ? (
            // Glyph inside the Figma pink→violet gradient tile.
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-pink-200 via-fuchsia-200 to-violet-300">
              <Image src={b.iconSrc} alt="" aria-hidden width={30} height={30} className="h-[30px] w-[30px]" />
            </span>
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
          <h3 className="mt-5 text-[24px] font-medium leading-tight text-ink">{b.title}</h3>
          <p className="mt-3 text-[16px] leading-relaxed text-muted">{b.body}</p>
        </div>
      ))}
    </div>
  )
}
