import Image from 'next/image'
import { CTAButton } from './CTAButton'

/**
 * Final call-to-action sat above the footer.
 *
 * Uses the landscape illustration (`/images/footer/footerpic.svg`) as the full
 * background — it includes the layered mountains, forest line, and the large
 * tree silhouette on the right that the Figma frame shows.
 */
export function FinalCTA() {
  return (
    <section className="relative overflow-hidden">
      {/* Landscape illustration as background */}
      <Image
        src="/images/footer/footerpic.svg"
        alt=""
        aria-hidden
        width={1440}
        height={607}
        priority
        className="pointer-events-none absolute inset-0 h-full w-full select-none object-cover"
      />

      {/* Soft white gradient at the bottom-left for text legibility */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/70 via-white/30 to-transparent"
      />

      {/* Content */}
      <div className="container-app relative py-24 sm:py-28 lg:py-32">
        <div className="max-w-xl">
          <h2 className="text-3xl font-bold leading-tight text-ink text-balance sm:text-4xl lg:text-5xl">
            Bring your team’s work into one connected place.
          </h2>
          <p className="mt-4 max-w-md text-sm text-ink/70 sm:text-base">
            Plan projects, manage tasks, collaborate with your team, and automate the
            busywork with AI-powered workflows.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <CTAButton href="/signup">Start for free</CTAButton>
            <CTAButton variant="secondary" href="/demo">Get a demo</CTAButton>
          </div>
        </div>
      </div>
    </section>
  )
}
