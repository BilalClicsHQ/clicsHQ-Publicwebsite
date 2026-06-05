import Image from 'next/image'
import Link from 'next/link'
import { CTAButton } from './CTAButton'

/**
 * Hero — top of the marketing home page.
 *
 * Layout matches the Figma reference:
 *   - Huge "Manage productivity" headline (centered)
 *   - Subtitle + CTA pair (violet "Get Started Now" + white "Try It Free") with
 *     the curved arrow doodle pointing to the primary CTA
 *   - App preview rendered inside a faux browser chrome (traffic lights + URL),
 *     sat on a dark stage background with floating task card (left) and sticky
 *     note (right)
 *
 * NOTE: The "Features" dropdown panel that visually overlaps the headline in
 * the Figma reference is *not* hardcoded here — it lives in the Navbar
 * ("Product" menu) and opens on hover/click. The screenshot just captures the
 * dropdown in its open state.
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink">
      {/* Curved-lines pattern over the black stage (lower portion) */}
      <Image
        src="/images/hero/landingpages-curved-lines.svg"
        alt=""
        aria-hidden
        width={1400}
        height={920}
        priority
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-auto w-full select-none object-cover object-bottom"
      />
      {/* White shade at the top — near-white fading to transparent so the top reads
          white, blends through a soft shadow, then into the black stage below. */}
      <Image
        src="/images/hero/landingpagesshade.svg"
        alt=""
        aria-hidden
        width={1400}
        height={479}
        priority
        className="pointer-events-none absolute inset-x-0 top-0 z-0 h-auto w-full select-none"
      />

      {/* Headline area */}
      <div className="container-app relative z-10 pt-14 sm:pt-20 lg:pt-24 pb-8 text-center">
        <h1 className="relative mx-auto max-w-[1100px] text-balance font-medium tracking-[-0.01em] text-ink leading-[1.05] text-[40px] sm:text-[64px] lg:text-[84px]">
          Manage Your Task Productivity
        </h1>

        <p className="relative mx-auto mt-6 max-w-xl text-sm sm:text-base text-muted leading-relaxed">
          This is software that protects all your data, including strong security access.
          Use data as needed and provide security of all data very easily.
        </p>

        {/* CTAs */}
        <div className="relative mt-10 inline-flex items-center justify-center gap-3">
          {/* Curved arrow doodle — sits to the left of the primary CTA, curling up to point at it */}
          <Image
            src="/images/hero/arrow.svg"
            alt=""
            aria-hidden
            width={92}
            height={116}
            className="pointer-events-none absolute -left-[120px] -bottom-2 hidden h-[110px] w-auto select-none sm:block"
          />

          <CTAButton variant="accent" size="lg" href="/signup">Get Started Now</CTAButton>
          <CTAButton variant="secondary" size="lg" href="/demo">Try It Free</CTAButton>
        </div>

        <p className="relative mt-4 text-sm text-white/80">
          Try Our Demo Of Dashboard Now!{' '}
          <Link href="/demo" className="font-medium text-pink-400 hover:underline">
            – Learn More →
          </Link>
        </p>
      </div>

      {/* Stage with app preview — sits on the black section bg + curved lines */}
      <div className="relative z-10">
        <div className="container-app relative pb-20 lg:pb-24">
          <div className="relative mx-auto max-w-5xl">
            {/* Floating "24 Total Tasks" card — left, breaks out over the stage */}
            <Image
              src="/images/hero/task.svg"
              alt=""
              aria-hidden
              width={292}
              height={203}
              className="pointer-events-none absolute -left-6 top-24 z-20 hidden w-[230px] select-none drop-shadow-2xl lg:block xl:-left-16"
            />

            {/* Floating sticky note — right, breaks out over the stage */}
            <Image
              src="/images/hero/phase.svg"
              alt=""
              aria-hidden
              width={275}
              height={243}
              className="pointer-events-none absolute -right-6 top-12 z-20 hidden w-[235px] select-none drop-shadow-2xl lg:block xl:-right-16"
            />

            {/* Browser-chrome window wrapping the app preview */}
            <div className="relative z-10 overflow-hidden rounded-2xl bg-white shadow-[0_30px_60px_-15px_rgb(0_0_0_/_0.4)] ring-1 ring-black/10">
              {/* Window chrome */}
              <div className="flex items-center gap-3 border-b border-gray-100 bg-white px-4 py-2.5">
                <div className="flex items-center gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-rose-500" />
                  <span className="h-3 w-3 rounded-full bg-amber-400" />
                  <span className="h-3 w-3 rounded-full bg-emerald-500" />
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 6l6 6-6 6"/></svg>
                </div>
                <div className="flex-1">
                  <div className="mx-auto flex h-7 max-w-md items-center justify-center rounded-md bg-gray-100 px-3 text-xs text-gray-500">
                    www.clicshq.com
                  </div>
                </div>
                <span className="h-4 w-4" />
              </div>

              {/* App preview */}
              <Image
                src="/images/dashboards/ClicshqPage.svg"
                alt="clicsHQ dashboard preview"
                width={1580}
                height={910}
                priority
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

