import type { Metadata } from 'next'
import Link from 'next/link'
import { Footer } from '@/components/marketing/Footer'
import { HelpCenterHero } from '@/components/marketing/help-center/Hero'
import { COLLECTIONS, HELP_DESC, ARTICLE_COUNT_LABEL } from '@/components/marketing/help-center/data'
import { cn } from '@/lib/cn'

export const metadata: Metadata = { title: 'Help Center' }

export default function HelpCenterPage() {
  return (
    <>
      <main>
        <HelpCenterHero />

        {/* Service Providers grid */}
        <section className="container-app py-16 sm:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-[32px] font-semibold tracking-tight text-ink sm:text-[40px]">Service Providers</h2>
            <p className="mt-4 text-[16px] leading-relaxed text-muted sm:text-[17px]">
              Expertly Curated Selections Tailored for Your Needs. Handpicked and scrutinized by the
              dedicated clicsHQ team to ensure you receive only the top-tier recommendations.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {COLLECTIONS.map((c) => {
              const Icon = c.icon
              return (
                <Link
                  key={c.slug}
                  href={`/resources/help-center/${c.slug}`}
                  className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="flex items-start gap-4">
                    <span className={cn('grid h-12 w-12 shrink-0 place-items-center rounded-xl', c.tile)}>
                      <Icon className="h-6 w-6" />
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-[18px] font-semibold leading-tight text-ink">{c.title}</h3>
                      <p className="mt-1.5 text-[13px] leading-snug text-muted">{HELP_DESC}</p>
                      <p className="mt-3 text-[12px] text-subtle">7 authors | {ARTICLE_COUNT_LABEL}</p>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
