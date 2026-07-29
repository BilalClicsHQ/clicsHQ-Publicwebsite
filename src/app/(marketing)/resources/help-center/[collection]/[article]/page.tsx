import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ChevronRight, Play, Volume2, Settings, Maximize } from 'lucide-react'
import { Footer } from '@/components/marketing/Footer'
import { HelpCenterHero } from '@/components/marketing/help-center/Hero'
import { HelpCenterSidebar } from '@/components/marketing/help-center/Sidebar'
import { AuthorByline } from '@/components/marketing/help-center/Bylines'
import { COLLECTIONS, getArticle } from '@/components/marketing/help-center/data'

type Params = { params: Promise<{ collection: string; article: string }> }

export function generateStaticParams() {
  return COLLECTIONS.flatMap((c) => c.articles.map((a) => ({ collection: c.slug, article: a.slug })))
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { collection, article } = await params
  const found = getArticle(collection, article)
  return { title: found ? `${found.article.title} — Help Center` : 'Help Center' }
}

export default async function ArticlePage({ params }: Params) {
  const { collection: collectionSlug, article: articleSlug } = await params
  const found = getArticle(collectionSlug, articleSlug)
  if (!found) notFound()
  const { collection, article } = found

  return (
    <>
      <main>
        <HelpCenterHero />

        <section className="container-app py-12 sm:py-16">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-2 text-[15px]">
            <Link href="/resources/help-center" className="font-semibold text-ink hover:underline">
              All Collections
            </Link>
            <ChevronRight className="h-4 w-4 text-muted" />
            <Link href={`/resources/help-center/${collection.slug}`} className="text-ink hover:underline">
              {collection.title}
            </Link>
            <ChevronRight className="h-4 w-4 text-muted" />
            <span className="text-muted">{article.title}</span>
          </nav>

          <div className="grid gap-8 lg:grid-cols-[300px_1fr]">
            <HelpCenterSidebar activeCollection={collection.slug} activeArticle={article.slug} />

            <article className="min-w-0 max-w-3xl">
              <h1 className="text-[28px] font-semibold leading-tight text-ink sm:text-[32px]">{article.title}</h1>
              <p className="mt-2 text-[16px] text-muted">
                {article.subtitle ?? `Learn more about ${article.title} in clicsHQ.`}
              </p>
              <div className="mt-4">
                <AuthorByline />
              </div>

              <div className="mt-8 space-y-5 text-[16px] leading-relaxed text-ink/80">
                <p>
                  clicsHQ is a next-gen helpdesk—built on a single platform that maximizes team efficiency and
                  delivers superior service. clicsHQ has every feature your team needs to resolve queries faster,
                  deliver personalized service, engage proactively, and continuously improve your customer
                  experience.
                </p>
                <ul className="list-disc space-y-3 pl-6 marker:text-ink/40">
                  <li>
                    <strong className="font-semibold text-ink">Agents</strong> work smarter and faster, reducing
                    time to resolution and increasing their service quality.
                  </li>
                  <li>
                    <strong className="font-semibold text-ink">Support leaders</strong> see increased scale,
                    efficiency, and operational savings—cutting hundreds of hours and thousands of dollars in
                    support costs each month.
                  </li>
                  <li>
                    <strong className="font-semibold text-ink">Customers</strong> receive faster, smoother, more
                    personalized service—ultimately leading to increased customer satisfaction and loyalty.
                  </li>
                </ul>
              </div>

              {/* Video placeholder */}
              <div className="mt-8 overflow-hidden rounded-xl border border-gray-200 bg-gray-200">
                <div className="relative flex aspect-video items-center justify-center">
                  <span className="grid h-16 w-16 place-items-center rounded-full bg-black/30 text-white">
                    <Play className="h-7 w-7 translate-x-0.5 fill-current" />
                  </span>
                </div>
                {/* Mock control bar */}
                <div className="flex items-center gap-3 bg-ink px-3 py-2 text-white">
                  <Play className="h-4 w-4 fill-current" />
                  <span className="text-xs tabular-nums">0:00</span>
                  <div className="relative mx-1 h-1 flex-1 rounded-full bg-white/30">
                    <span className="absolute left-0 top-1/2 h-1 w-1/4 -translate-y-1/2 rounded-full bg-white" />
                    <span className="absolute left-1/4 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
                  </div>
                  <span className="rounded border border-white/60 px-1 text-[10px] font-semibold leading-tight">CC</span>
                  <Volume2 className="h-4 w-4" />
                  <Settings className="h-4 w-4" />
                  <Maximize className="h-4 w-4" />
                </div>
              </div>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
