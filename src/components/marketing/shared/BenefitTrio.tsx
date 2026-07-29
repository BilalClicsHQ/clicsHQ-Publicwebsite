import * as React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/cn'

export interface Benefit {
  /** Lucide icon component (fallback when no `iconSrc`). */
  icon?: React.ElementType
  iconBg?: string
  /** Pre-designed gradient icon tile (SVG) — takes precedence over `icon`. */
  iconSrc?: string
  /** Character/avatar image that fills the whole tile (highest precedence). */
  avatarSrc?: string
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
          {b.avatarSrc ? (
            // Character avatar — image fills the rounded tile (corners clipped).
            <span className="grid h-14 w-14 place-items-center overflow-hidden rounded-2xl">
              <Image src={b.avatarSrc} alt="" aria-hidden width={56} height={56} className="h-full w-full object-cover" />
            </span>
          ) : b.iconSrc ? (
            // Glyph inside the Figma pink→violet gradient tile.
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-pink-200 via-fuchsia-200 to-violet-300">
              <Image src={b.iconSrc} alt="" aria-hidden width={30} height={30} className="h-[30px] w-[30px]" />
            </span>
          ) : b.icon ? (
            // Lucide glyph inside the Figma pink→violet gradient tile (ink icon).
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-pink-200 via-fuchsia-200 to-violet-300 text-ink">
              <b.icon className="h-6 w-6" />
            </span>
          ) : null}
          <h3
            className={cn(
              'text-[24px] font-medium leading-tight text-ink',
              (b.avatarSrc || b.iconSrc || b.icon) && 'mt-5',
            )}
          >
            {b.title}
          </h3>
          <p className="mt-3 text-[16px] leading-relaxed text-muted">{b.body}</p>
        </div>
      ))}
    </div>
  )
}
