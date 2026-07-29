import Image from 'next/image'
import { CTAButton } from '../CTAButton'

/**
 * Final CTA for the nested /solutions/* pages — a light-grey rounded banner with
 * the headline, subtitle, and CTAs on the left and a framed line-art
 * illustration on the right.
 *
 * Replaces the landscape `FinalCTAMountain` used on the home and product pages.
 */
export function SolutionFinalCTA({
  title = 'Bring your team’s work into one connected place.',
  subtitle = 'Plan projects, manage tasks, collaborate with your team, and automate the busywork with AI-powered workflows.',
  primaryLabel = 'Get started',
  primaryHref = '/signup',
  secondaryLabel = 'Book Demo',
  secondaryHref = '/demo',
  image = '/images/solutions/footer/footer1.png',
  imageAlt = '',
}: {
  title?: string
  subtitle?: string
  primaryLabel?: string
  primaryHref?: string
  secondaryLabel?: string
  secondaryHref?: string
  image?: string
  imageAlt?: string
}) {
  // Horizontal insets match <Footer> (px-3 sm:px-4 lg:px-6) so the banner card
  // and the footer card share the same width and align edge-to-edge. Extra
  // bottom padding offsets the footer's negative top margin.
  return (
    <section className="px-3 pb-16 pt-12 sm:px-4 sm:pb-20 sm:pt-16 lg:px-6">
      <div className="overflow-hidden rounded-[2rem] bg-gray-100 px-6 py-10 sm:px-10 sm:py-12 lg:px-16 lg:py-16">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Copy */}
          <div>
            <h2 className="text-balance text-[30px] font-semibold leading-[1.12] tracking-tight text-ink sm:text-[38px] lg:text-[44px]">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-5 max-w-md text-[16px] leading-relaxed text-ink/60 sm:text-[17px]">
                {subtitle}
              </p>
            )}
            <div className="mt-8 flex flex-wrap gap-3">
              {primaryLabel && <CTAButton href={primaryHref}>{primaryLabel}</CTAButton>}
              {secondaryLabel && (
                <CTAButton variant="secondary" href={secondaryHref}>
                  {secondaryLabel}
                </CTAButton>
              )}
            </div>
          </div>

          {/* Framed line-art illustration */}
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200/70 sm:p-8 lg:p-10">
            <Image
              src={image}
              alt={imageAlt}
              width={540}
              height={384}
              className="mx-auto h-auto w-full max-w-md"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
