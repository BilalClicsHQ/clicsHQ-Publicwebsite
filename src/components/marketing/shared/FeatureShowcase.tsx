import * as React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/cn'

export interface ShowcaseTile {
  title: string
  body: string
}

/**
 * Central product screenshot framed by four dark feature cards.
 * On lg+ the cards sit absolutely at the board's four corners (overlapping
 * its edges, as in the Figma); on smaller screens they stack in a 2-col grid
 * below the board. Expects exactly four tiles: [topLeft, topRight, bottomLeft,
 * bottomRight].
 */
export function FeatureShowcase({
  image,
  imageAlt = '',
  tiles,
}: {
  image: string
  imageAlt?: string
  tiles: ShowcaseTile[]
}) {
  const [tl, tr, bl, br] = tiles
  return (
    <div className="relative mx-auto max-w-6xl">
      {/* Center board */}
      <div className="mx-auto max-w-2xl lg:max-w-3xl">
        <Image
          src={image}
          alt={imageAlt}
          width={1100}
          height={720}
          className="h-auto w-full rounded-2xl shadow-2xl ring-1 ring-gray-200/70"
        />
      </div>

      {/* Corner cards */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:mt-0 lg:block">
        <Card className="lg:absolute lg:left-0 lg:top-2 lg:w-[23rem]" {...tl} />
        <Card className="lg:absolute lg:right-0 lg:top-2 lg:w-[23rem]" {...tr} />
        <Card className="lg:absolute lg:bottom-2 lg:left-0 lg:w-[23rem]" {...bl} />
        <Card className="lg:absolute lg:bottom-2 lg:right-0 lg:w-[23rem]" {...br} />
      </div>
    </div>
  )
}

function Card({
  title,
  body,
  className,
}: ShowcaseTile & { className?: string }) {
  return (
    <div className={cn('rounded-2xl bg-ink p-5 text-white shadow-xl ring-1 ring-white/5', className)}>
      <h3 className="text-sm font-bold leading-tight">{title}</h3>
      <p className="mt-2 text-xs leading-relaxed text-white/60">{body}</p>
    </div>
  )
}
