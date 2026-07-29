import Link from 'next/link'
import { FileText } from 'lucide-react'
import { cn } from '@/lib/cn'
import { COLLECTIONS, ARTICLE_COUNT_LABEL, type HCCollection } from './data'

/**
 * Collections rail shown on the collection and article pages. The active
 * collection is highlighted and expanded to reveal its articles.
 */
export function HelpCenterSidebar({
  activeCollection,
  activeArticle,
}: {
  activeCollection: string
  activeArticle?: string
}) {
  return (
    <aside className="lg:sticky lg:top-24 lg:self-start">
      <div className="max-h-[680px] overflow-y-auto rounded-2xl border border-gray-200 bg-white p-2">
        <ul className="space-y-0.5">
          {COLLECTIONS.map((c) => (
            <CollectionNav
              key={c.slug}
              c={c}
              active={c.slug === activeCollection}
              activeArticle={activeArticle}
            />
          ))}
        </ul>
      </div>
    </aside>
  )
}

function CollectionNav({
  c,
  active,
  activeArticle,
}: {
  c: HCCollection
  active: boolean
  activeArticle?: string
}) {
  const Icon = c.icon
  return (
    <li>
      <Link
        href={`/resources/help-center/${c.slug}`}
        className={cn(
          'flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors',
          active ? 'bg-blue-50' : 'hover:bg-gray-50',
        )}
        aria-current={active ? 'true' : undefined}
      >
        <span className={cn('grid h-9 w-9 shrink-0 place-items-center rounded-lg', c.tile)}>
          <Icon className="h-[18px] w-[18px]" />
        </span>
        <span className="min-w-0">
          <span className="block text-[15px] font-semibold leading-tight text-ink">{c.sidebarTitle ?? c.title}</span>
          <span className="block text-[12px] text-subtle">{ARTICLE_COUNT_LABEL}</span>
        </span>
      </Link>

      {active && (
        <ul className="mb-1 mt-0.5 space-y-0.5 pl-3">
          {c.articles.map((a) => (
            <li key={a.slug}>
              <Link
                href={`/resources/help-center/${c.slug}/${a.slug}`}
                className={cn(
                  'flex items-center gap-2.5 rounded-lg px-3 py-2 text-[14px] transition-colors',
                  a.slug === activeArticle
                    ? 'bg-gray-100 font-medium text-ink'
                    : 'text-ink/70 hover:bg-gray-50 hover:text-ink',
                )}
                aria-current={a.slug === activeArticle ? 'page' : undefined}
              >
                <FileText className="h-4 w-4 shrink-0 text-muted" />
                <span className="truncate">{a.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  )
}
