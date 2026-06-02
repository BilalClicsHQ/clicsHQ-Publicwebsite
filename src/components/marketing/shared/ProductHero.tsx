import * as React from 'react'
import Image from 'next/image'
import { CTAButton } from '../CTAButton'

/**
 * Product/Solution hero — eyebrow + headline + subhead + dual CTA on the left,
 * dark dashboard mockup card on the right.
 *
 * Pass a custom `mockup` slot when a page needs a special composition
 * (e.g. AI Assists' layered chat + picker, Integrations' orbit cluster).
 */
export function ProductHero({
  eyebrow,
  eyebrowColor = 'text-violet-600',
  title,
  subtitle,
  primaryLabel = 'Get Started Now',
  primaryHref = '/signup',
  secondaryLabel = 'Watch demo',
  secondaryHref = '/demo',
  mockupSrc,
  mockupAlt = '',
  mockup,
  background = 'light',
}: {
  eyebrow?: string
  eyebrowColor?: string
  title: React.ReactNode
  subtitle?: string
  primaryLabel?: string
  primaryHref?: string
  secondaryLabel?: string
  secondaryHref?: string
  mockupSrc?: string
  mockupAlt?: string
  mockup?: React.ReactNode
  background?: 'light' | 'soft-pink' | 'soft-violet'
}) {
  const bg = {
    'light':       'bg-white',
    'soft-pink':   'bg-gradient-to-br from-pink-50 via-white to-white',
    'soft-violet': 'bg-gradient-to-br from-violet-50 via-white to-white',
  }[background]

  return (
    <section className={`relative overflow-hidden ${bg}`}>
      <div className="container-app grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:py-24">
        {/* Left — copy */}
        <div>
          {eyebrow && (
            <p className={`text-xs font-semibold uppercase tracking-wide ${eyebrowColor}`}>
              {eyebrow}
            </p>
          )}
          <h1 className="mt-3 text-balance text-[34px] font-bold leading-[1.05] tracking-tight text-ink sm:text-[44px] lg:text-[56px]">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
              {subtitle}
            </p>
          )}
          <div className="mt-7 flex flex-wrap gap-3">
            <CTAButton href={primaryHref}>{primaryLabel}</CTAButton>
            <CTAButton variant="secondary" href={secondaryHref}>{secondaryLabel}</CTAButton>
          </div>
        </div>

        {/* Right — mockup */}
        <div className="relative">
          {mockup ? (
            mockup
          ) : mockupSrc ? (
            <div className="relative overflow-hidden rounded-2xl bg-ink shadow-2xl ring-1 ring-black/10">
              <Image
                src={mockupSrc}
                alt={mockupAlt}
                width={900}
                height={620}
                className="h-auto w-full"
              />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}
