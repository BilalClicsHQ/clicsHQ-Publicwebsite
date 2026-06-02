import * as React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/cn'

export interface DarkTile {
  chipLabel?: string
  chipColor?: 'pink' | 'amber' | 'emerald' | 'sky' | 'violet'
  title: string
  body?: string
  imageSrc?: string
}

const CHIP_COLORS = {
  pink:    'bg-pink-500/20    text-pink-200',
  amber:   'bg-amber-500/20   text-amber-200',
  emerald: 'bg-emerald-500/20 text-emerald-200',
  sky:     'bg-sky-500/20     text-sky-200',
  violet:  'bg-violet-500/20  text-violet-200',
} as const

/**
 * 2x2 (or larger) grid of dark feature tiles with optional colored chip
 * labels + tiny screenshot preview. Used on Kanban, Docs, Calendar, Gantt.
 */
export function DarkFeatureTileGrid({
  tiles,
  columns = 4,
}: {
  tiles: DarkTile[]
  columns?: 2 | 4
}) {
  const cols = columns === 2 ? 'sm:grid-cols-2' : 'sm:grid-cols-2 lg:grid-cols-4'
  return (
    <div className={cn('grid gap-4', cols)}>
      {tiles.map((t, i) => (
        <div key={i} className="flex flex-col gap-3 rounded-2xl bg-ink p-5 text-white">
          {t.chipLabel && (
            <span
              className={cn(
                'inline-flex w-fit items-center rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide',
                CHIP_COLORS[t.chipColor ?? 'violet'],
              )}
            >
              {t.chipLabel}
            </span>
          )}
          <h3 className="text-base font-bold leading-tight text-white">{t.title}</h3>
          {t.body && <p className="text-xs leading-relaxed text-white/60">{t.body}</p>}
          {t.imageSrc && (
            <div className="mt-2 overflow-hidden rounded-lg ring-1 ring-white/10">
              <Image src={t.imageSrc} alt="" width={400} height={240} className="h-auto w-full" />
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
