import Image from 'next/image'
import Link from 'next/link'

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Headline + subtitle + CTAs */}
      <div className="container-app pt-16 sm:pt-20 lg:pt-24 pb-12 text-center">
        <h1 className="heading-xl mx-auto max-w-5xl text-balance">
          Manage productivity
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-muted leading-relaxed">
          This is software that protects all your data, including strong security access.
          Use data as needed and provide security of all data very easily.
        </p>

        {/* CTAs with curved arrow */}
        <div className="relative mt-9 inline-flex items-center justify-center gap-3">
          {/* Curved arrow — sits to the left of the primary CTA */}
          <Image
            src="/images/hero/arrow.svg"
            alt=""
            aria-hidden
            width={92}
            height={116}
            className="pointer-events-none absolute -left-24 -top-12 hidden select-none sm:block"
          />

          <Link
            href="/signup"
            className="inline-flex h-11 items-center justify-center rounded-xl bg-gradient-to-b from-violet-500 to-violet-600 px-6 text-sm font-semibold text-white shadow-lg shadow-violet-500/30 transition-transform hover:-translate-y-0.5"
          >
            Get Started Now
          </Link>
          <Link
            href="/demo"
            className="inline-flex h-11 items-center justify-center rounded-xl border border-gray-200 bg-white px-6 text-sm font-semibold text-ink transition-colors hover:bg-gray-50"
          >
            Try It Free
          </Link>
        </div>

        <p className="mt-4 text-sm text-muted">
          Try Our Demo Of Dashboard Now!{' '}
          <Link href="/demo" className="font-medium text-ink hover:underline">
            – Learn More →
          </Link>
        </p>
      </div>

      {/* App preview frame */}
      <div className="relative">
        {/* Dark stage background with diagonal grid */}
        <div className="absolute inset-x-0 top-1/3 bottom-0 bg-gradient-to-b from-transparent via-gray-50 to-gray-100" />

        <div className="container-app relative pb-16 lg:pb-24">
          {/* Floating "Total Tasks" card — left */}
          <Image
            src="/images/hero/task.svg"
            alt=""
            aria-hidden
            width={292}
            height={203}
            className="pointer-events-none absolute left-0 top-12 hidden w-[230px] select-none lg:block xl:left-4"
          />

          {/* Floating "Create wireframe" sticky note — right */}
          <Image
            src="/images/hero/phase.svg"
            alt=""
            aria-hidden
            width={275}
            height={243}
            className="pointer-events-none absolute right-0 top-8 hidden w-[220px] select-none lg:block xl:right-4"
          />

          {/* Laptop / app preview */}
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-gray-200">
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
    </section>
  )
}
