import { Search } from 'lucide-react'

/**
 * Shared Help Center hero — forest backdrop, headline, and a search field.
 * Used by the landing, collection, and article pages.
 */
export function HelpCenterHero() {
  return (
    <section className="container-app pt-4 sm:pt-6">
      <div className="relative overflow-hidden rounded-3xl">
        {/* Decorative forest backdrop — served directly as a CSS background to
            skip Next's image optimizer (the source PNG is large). */}
        <div
          aria-hidden
          className="absolute inset-0 bg-cover bg-[center_28%] bg-no-repeat"
          style={{ backgroundImage: "url('/images/resources/help-center-bg.png')" }}
        />
        {/* Light top wash keeps the black headline legible over the sky. */}
        <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-white/35 via-white/10 to-transparent" />
        <div className="relative px-6 py-16 text-center sm:py-24 lg:py-28">
          <h1 className="mx-auto max-w-4xl text-balance text-[32px] font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-[56px]">
            Great Service Changes Everything.
          </h1>
          <form className="mx-auto mt-8 flex max-w-2xl items-stretch gap-3" role="search" action="/resources/help-center">
            <div className="relative flex-1">
              <Search aria-hidden className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted" />
              <input
                type="search"
                name="q"
                placeholder="Search"
                aria-label="Search the help center"
                className="h-14 w-full rounded-xl border border-gray-200 bg-white pl-12 pr-4 text-[16px] text-ink shadow-sm outline-none focus:border-ink/30 focus:ring-2 focus:ring-ink/15"
              />
            </div>
            <button
              type="submit"
              className="h-14 shrink-0 rounded-xl bg-ink px-8 text-[16px] font-semibold text-white transition-colors hover:bg-black"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
