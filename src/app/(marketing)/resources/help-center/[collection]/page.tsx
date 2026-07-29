import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ChevronRight } from 'lucide-react'
import { Footer } from '@/components/marketing/Footer'
import { HelpCenterHero } from '@/components/marketing/help-center/Hero'
import { HelpCenterSidebar } from '@/components/marketing/help-center/Sidebar'
import { AvatarStack } from '@/components/marketing/help-center/Bylines'
import { COLLECTIONS, getCollection, HELP_DESC, ARTICLE_COUNT_LABEL } from '@/components/marketing/help-center/data'
import { cn } from '@/lib/cn'

type Params = { params: Promise<{ collection: string }> }

export function generateStaticParams() {
  return COLLECTIONS.map((c) => ({ collection: c.slug }))
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const c = getCollection((await params).collection)
  return { title: c ? `${c.title} — Help Center` : 'Help Center' }
}

export default async function CollectionPage({ params }: Params) {
  const { collection: slug } = await params
  const collection = getCollection(slug)
  if (!collection) notFound()
  const Icon = collection.icon

  return (
    <>
      <main>
        <HelpCenterHero />

        <section className="container-app py-12 sm:py-16">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-[15px]">
            <Link href="/resources/help-center" className="font-semibold text-ink hover:underline">
              All Collections
            </Link>
            <ChevronRight className="h-4 w-4 text-muted" />
            <span className="text-muted">{collection.title}</span>
          </nav>

          <div className="grid gap-8 lg:grid-cols-[300px_1fr]">
            <HelpCenterSidebar activeCollection={collection.slug} />

            <div className="min-w-0">
              {/* Collection header */}
              <div className="flex items-start gap-4">
                <span className={cn('grid h-12 w-12 shrink-0 place-items-center rounded-xl', collection.tile)}>
                  <Icon className="h-6 w-6" />
                </span>
                <div className="min-w-0">
                  <h1 className="text-[26px] font-semibold leading-tight text-ink">{collection.title}</h1>
                  <p className="mt-1 text-[15px] text-muted">{HELP_DESC}</p>
                  <div className="mt-3 flex items-center gap-3">
                    <AvatarStack />
                    <span className="text-[13px] text-subtle">By Emmet and 6 others | {ARTICLE_COUNT_LABEL}</span>
                  </div>
                </div>
              </div>

              {/* Article list */}
              <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-2 shadow-sm">
                <ul>
                  {collection.articles.map((a) => (
                    <li key={a.slug}>
                      <Link
                        href={`/resources/help-center/${collection.slug}/${a.slug}`}
                        className="group flex items-center justify-between gap-4 rounded-xl px-5 py-4 text-[16px] text-ink transition-colors hover:bg-ink hover:text-white"
                      >
                        <span>{a.title}</span>
                        <ChevronRight className="h-5 w-5 shrink-0 text-muted transition-colors group-hover:text-white" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
