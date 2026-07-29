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
      {/* White-to-dark fade as a pure CSS gradient (always full-bleed on any
          viewport width). It ends just ABOVE the CTA buttons, so the buttons sit
          on the dark stage like the Figma. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[300px] bg-gradient-to-b from-white from-35% via-white/70 to-transparent sm:h-[360px] lg:h-[410px]"
      />

      {/* Headline area */}
      <div className="container-app relative z-10 pt-14 sm:pt-20 lg:pt-24 pb-8 text-center">
        {/* Figma: Satoshi 500, 72px, LH 120%, LS -4%, #050505. */}
        <h1 className="relative mx-auto max-w-[1000px] font-medium tracking-[-0.04em] text-[#050505] leading-[1.2] text-[38px] sm:text-[56px] lg:text-[72px]">
          Manage Your Task Productivity
        </h1>

        {/* Figma: Plus Jakarta Sans 500, 18px/32px, LS -2%, #040506 (dark, not gray). */}
        <p className="relative mx-auto mt-5 max-w-[680px] font-jakarta font-medium text-[15px] leading-[26px] tracking-[-0.02em] text-[#040506] sm:text-[18px] sm:leading-[32px]">
          This is software that protects all your data, including strong security access.
          <br className="hidden sm:block" />
          Use data as needed and provide security of all data very easily.
        </p>

        {/* CTAs */}
        <div className="relative mt-10 inline-flex items-center justify-center gap-3">
          {/* Curved arrow doodle — sits to the left of the primary CTA, curling up to point at it */}
          {/* Figma: arrowhead points at the button from the left at button height,
              tail curls DOWN toward the bottom (not above the button). */}
          <Image
            src="/images/hero/arrow.svg"
            alt=""
            aria-hidden
            width={92}
            height={116}
            className="pointer-events-none absolute -left-[155px] top-[4px] hidden h-[160px] w-auto select-none sm:block"
          />

          {/* Primary CTA + the Figma's #DCA4FF blur-30 glow underneath it */}
          <span className="relative inline-flex">
            <span
              aria-hidden
              className="pointer-events-none absolute -bottom-3 left-1/2 h-5 w-[110px] -translate-x-1/2 rounded-full bg-[#DCA4FF]/60 blur-[28px]"
            />
            <CTAButton variant="accent" size="lg" href="/signup" className="relative h-[50px] px-5 text-base">
              Get Started Now
            </CTAButton>
          </span>
          <CTAButton variant="secondary" size="lg" href="/demo" className="h-[50px] rounded-[9px] px-5 text-base">Try It Free</CTAButton>
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

            {/* App preview — ClicshqPage.svg already has the browser chrome
                (traffic lights + URL bar) baked in, so no hand-built chrome here
                (it was rendering a double chrome bar). */}
            <div className="relative z-10 overflow-hidden rounded-2xl bg-white shadow-[0_30px_60px_-15px_rgb(0_0_0_/_0.4)] ring-1 ring-black/10">
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

