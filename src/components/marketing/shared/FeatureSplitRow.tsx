import * as React from 'react'
import Image from 'next/image'
import { Check } from 'lucide-react'
import { cn } from '@/lib/cn'

/**
 * Text on one side, screenshot on the other. Alternates by passing `reverse`.
 * The most-reused pattern across product and solution pages.
 */
export function FeatureSplitRow({
  eyebrow,
  title,
  body,
  bullets,
  imageSrc,
  imageAlt = '',
  reverse = false,
  ctaLabel,
  ctaHref,
}: {
  eyebrow?: string
  title: React.ReactNode
  body?: string
  bullets?: string[]
  imageSrc?: string
  imageAlt?: string
  reverse?: boolean
  ctaLabel?: string
  ctaHref?: string
}) {
  return (
    <div className={cn('grid items-center gap-10 lg:grid-cols-2 lg:gap-16', reverse && 'lg:[&>div:first-child]:order-2')}>
      <div>
        {eyebrow && <p className="text-xs font-medium uppercase tracking-wide text-muted">{eyebrow}</p>}
        <h3 className="mt-2 text-balance text-2xl font-bold leading-tight text-ink sm:text-3xl">
          {title}
        </h3>
        {body && <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">{body}</p>}
        {bullets && bullets.length > 0 && (
          <ul className="mt-5 space-y-2.5">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-2 text-sm text-ink">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-100 text-emerald-600">
                  <Check className="h-3 w-3" />
                </span>
                {b}
              </li>
            ))}
          </ul>
        )}
        {ctaLabel && ctaHref && (
          <a
            href={ctaHref}
            className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-ink hover:underline"
          >
            {ctaLabel} <span aria-hidden>→</span>
          </a>
        )}
      </div>

      {imageSrc && (
        <div className="relative overflow-hidden rounded-2xl bg-gray-50 ring-1 ring-gray-100">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={800}
            height={520}
            className="h-auto w-full"
          />
        </div>
      )}
    </div>
  )
}
