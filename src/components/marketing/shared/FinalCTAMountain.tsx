import Image from 'next/image'
import { CTAButton } from '../CTAButton'

/**
 * Off-white landscape illustration + headline + dual CTA.
 * Used as the final CTA on the home page and every product page.
 */
export function FinalCTAMountain({
  title = 'Bring your team’s work into one connected place.',
  subtitle = 'Plan projects, manage tasks, collaborate with your team, and automate the busywork with AI-powered workflows.',
  primaryLabel = 'Start for free',
  primaryHref = '/signup',
  secondaryLabel = 'Get a demo',
  secondaryHref = '/demo',
}: {
  title?: string
  subtitle?: string
  primaryLabel?: string
  primaryHref?: string
  secondaryLabel?: string
  secondaryHref?: string
}) {
  return (
    <section className="relative overflow-hidden">
      <Image
        src="/images/footer/footerpic.svg"
        alt=""
        aria-hidden
        width={1440}
        height={607}
        className="pointer-events-none absolute inset-0 h-full w-full select-none object-cover"
      />
      {/* Soft white gradient for text legibility */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/75 via-white/35 to-transparent"
      />

      <div className="container-app relative py-24 sm:py-28 lg:py-32">
        <div className="max-w-xl">
          <h2 className="text-balance text-3xl font-bold leading-tight text-ink sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="mt-4 max-w-md text-sm text-ink/70 sm:text-base">{subtitle}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <CTAButton href={primaryHref}>{primaryLabel}</CTAButton>
            <CTAButton variant="secondary" href={secondaryHref}>{secondaryLabel}</CTAButton>
          </div>
        </div>
      </div>
    </section>
  )
}
