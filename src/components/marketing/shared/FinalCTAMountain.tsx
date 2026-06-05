import Image from 'next/image'
import { CTAButton } from '../CTAButton'
import { cn } from '@/lib/cn'

/**
 * Off-white landscape illustration + headline + CTA(s).
 * Used as the final CTA on the home page and every product page.
 *
 * `align="center"` centers the copy over the illustration (Integrations page).
 * Pass a falsy `secondaryLabel` to render a single primary CTA.
 */
export function FinalCTAMountain({
  title = 'Bring your team’s work into one connected place.',
  subtitle = 'Plan projects, manage tasks, collaborate with your team, and automate the busywork with AI-powered workflows.',
  primaryLabel = 'Start for free',
  primaryHref = '/signup',
  secondaryLabel = 'Get a demo',
  secondaryHref = '/demo',
  align = 'left',
}: {
  title?: string
  subtitle?: string
  primaryLabel?: string
  primaryHref?: string
  secondaryLabel?: string
  secondaryHref?: string
  align?: 'left' | 'center'
}) {
  const centered = align === 'center'
  return (
    <section className="relative overflow-hidden">
      <Image
        src="/images/footer/footer-2.svg"
        alt=""
        aria-hidden
        width={1440}
        height={539}
        className="pointer-events-none absolute inset-0 h-full w-full select-none object-cover"
      />
      {/* Soft white wash for text legibility (left layout only — the centered
          layout sits over the light sky of the illustration, like the Figma). */}
      {!centered && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/75 via-white/35 to-transparent"
        />
      )}

      <div className={cn('container-app relative', centered ? 'py-20 sm:py-24 lg:py-28' : 'py-24 sm:py-28 lg:py-32')}>
        <div className={cn('max-w-xl', centered && 'mx-auto max-w-2xl text-center')}>
          <h2
            className={cn(
              'font-medium tracking-normal text-ink',
              centered
                ? 'mx-auto max-w-[28ch] text-[2rem] leading-[1.17] sm:text-[2.75rem] lg:text-[3.5rem]'
                : 'text-balance text-3xl leading-[1.17] sm:text-4xl lg:text-5xl',
            )}
          >
            {title}
          </h2>
          <p
            className={cn(
              'mt-5 text-[16px] text-ink/90 sm:text-[18px] lg:text-[19px]',
              centered ? 'mx-auto max-w-[34rem]' : 'max-w-md',
            )}
          >
            {subtitle}
          </p>
          <div className={cn('mt-8 flex flex-wrap gap-3', centered && 'justify-center')}>
            <CTAButton href={primaryHref} size="md">
              {primaryLabel}
            </CTAButton>
            {secondaryLabel && (
              <CTAButton variant="secondary" href={secondaryHref}>
                {secondaryLabel}
              </CTAButton>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
