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
  eyebrowUppercase = true,
  title,
  subtitle,
  primaryLabel = 'Get Started Now',
  primaryHref = '/signup',
  secondaryLabel = 'Watch demo',
  secondaryHref = '/demo',
  mockupSrc,
  mockupAlt = '',
  mockup,
  mockupOverlay,
  background = 'light',
}: {
  eyebrow?: string
  eyebrowColor?: string
  eyebrowUppercase?: boolean
  title: React.ReactNode
  subtitle?: string
  primaryLabel?: string
  primaryHref?: string
  secondaryLabel?: string
  secondaryHref?: string
  mockupSrc?: string
  mockupAlt?: string
  mockup?: React.ReactNode
  /** Floating element layered over the mockup (not clipped by its rounded frame). */
  mockupOverlay?: React.ReactNode
  background?: 'light' | 'soft-pink' | 'soft-violet'
}) {
  const bg = {
    'light':       'bg-white',
    'soft-pink':   'bg-gradient-to-br from-pink-50 via-white to-white',
    'soft-violet': 'bg-gradient-to-br from-violet-50 via-white to-white',
  }[background]

  return (
    <section className={`relative overflow-hidden ${bg}`}>
      <div className="container-app grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[0.88fr_1.13fr] lg:gap-16 lg:py-24">
        {/* Left — copy */}
        <div>
          {eyebrow && (
            <p className={`${eyebrowUppercase ? 'text-xs font-semibold uppercase tracking-wide' : 'text-[17px] font-medium'} ${eyebrowColor}`}>
              {eyebrow}
            </p>
          )}
          <h1 className="mt-6 text-balance text-[40px] font-medium leading-[1.08] tracking-[-0.01em] text-ink sm:text-[52px] lg:text-[64px]">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-5 max-w-[480px] text-[18px] font-normal leading-[1.5] text-muted sm:text-[22px] lg:text-[25px]">
              {subtitle}
            </p>
          )}
          <div className="mt-8 flex flex-wrap gap-[10px]">
            <CTAButton href={primaryHref} className="h-[45px] rounded-[10px] px-[15px] text-base font-medium">{primaryLabel}</CTAButton>
            <CTAButton variant="secondary" href={secondaryHref} className="h-[45px] rounded-[10px] px-[15px] text-base font-medium">{secondaryLabel}</CTAButton>
          </div>
        </div>

        {/* Right — mockup */}
        <div className="relative">
          {mockup ? (
            mockup
          ) : mockupSrc ? (
            // The dashboard SVGs already include their own chrome (dark sidebar +
            // light panel), so render as a clean rounded screenshot with a soft
            // shadow — no extra dark frame (matches the Figma hero).
            <div className="relative overflow-hidden rounded-2xl shadow-[0_24px_60px_-12px_rgba(0,0,0,0.18)] ring-1 ring-gray-200/60">
              <Image
                src={mockupSrc}
                alt={mockupAlt}
                width={900}
                height={620}
                className="h-auto w-full"
              />
              {/* Soft white fade along the bottom so the mockup melts into the
                  page (matches the Figma hero treatment). */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white via-white/70 to-transparent"
              />
            </div>
          ) : null}
          {/* Floating overlay (e.g. the clicsAI agent card) — sits outside the
              mockup's overflow-hidden frame so it isn't clipped. */}
          {mockupOverlay}
        </div>
      </div>
    </section>
  )
}
