import * as React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/cn'

export interface DarkBannerTile {
  /** Pre-designed gradient icon tile (SVG). */
  iconSrc?: string
  /** Lucide icon fallback when no `iconSrc`. */
  icon?: React.ElementType
  title: string
  body: string
}

/**
 * Full-width black rounded banner — eyebrow + headline + body on the left, a
 * cluster of bordered feature tiles on the right (matches the Figma "One
 * workspace for startup work" / dark cross-sell banner).
 *
 * The tile cluster lays out as: first tile spans the full width, the rest sit
 * in a 2-col grid below it.
 */
export function SolutionDarkBanner({
  eyebrow,
  title,
  body,
  tiles,
}: {
  eyebrow?: string
  title: React.ReactNode
  body?: string
  tiles: DarkBannerTile[]
}) {
  const [first, ...rest] = tiles
  return (
    <section className="container-app py-12 sm:py-16">
      <div className="rounded-3xl bg-ink p-8 text-white sm:p-12 lg:p-14">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          {/* Left — copy */}
          <div>
            {eyebrow && <p className="text-[15px] font-normal text-white/50">{eyebrow}</p>}
            <h2 className="mt-3 text-balance text-[32px] font-medium leading-[1.12] tracking-normal sm:text-[40px] lg:text-[46px]">
              {title}
            </h2>
            {body && <p className="mt-5 max-w-md text-[15px] leading-relaxed text-white/50">{body}</p>}
          </div>

          {/* Right — tile cluster */}
          <div className="grid gap-4 sm:grid-cols-2">
            {first && <Tile {...first} className="sm:col-span-2" />}
            {rest.map((t, i) => (
              <Tile key={i} {...t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Tile({
  iconSrc,
  icon: Icon,
  title,
  body,
  className,
}: DarkBannerTile & { className?: string }) {
  return (
    <div className={cn('rounded-2xl p-6 ring-1 ring-white/10', className)}>
      {iconSrc ? (
        <Image src={iconSrc} alt="" aria-hidden width={44} height={44} className="h-11 w-11" />
      ) : Icon ? (
        <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-fuchsia-200 to-violet-300 text-ink">
          <Icon className="h-5 w-5" />
        </span>
      ) : null}
      <h3 className="mt-4 text-[20px] font-medium leading-tight text-white">{title}</h3>
      <p className="mt-2 text-[14px] leading-relaxed text-white/45">{body}</p>
    </div>
  )
}
