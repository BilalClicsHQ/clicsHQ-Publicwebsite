import type { ComponentType } from 'react'
import {
  Telescope,
  Settings,
  Bot,
  SatelliteDish,
  Inbox,
  Workflow,
  BookOpen,
  FileBarChart,
  Send,
  Contact,
  LayoutGrid,
  Smartphone,
} from 'lucide-react'

export interface HCArticle {
  slug: string
  title: string
  subtitle?: string
}

export interface HCCollection {
  slug: string
  title: string
  /** Shorter label used in the sidebar where it differs from the card title. */
  sidebarTitle?: string
  icon: ComponentType<{ className?: string }>
  tile: string
  articles: HCArticle[]
}

export const HELP_DESC = 'Sync Clics and Dropbox to attach files to actions and projects.'
export const ARTICLE_COUNT_LABEL = '26 articles'

// Generic article set reused by collections without bespoke content.
const DEFAULT_ARTICLES: HCArticle[] = [
  { slug: 'getting-started',  title: 'Getting started' },
  { slug: 'key-concepts',     title: 'Key concepts' },
  { slug: 'how-it-works',     title: 'How it works' },
  { slug: 'best-practices',   title: 'Best practices' },
  { slug: 'faqs',             title: 'Frequently asked questions' },
  { slug: 'troubleshooting',  title: 'Troubleshooting' },
]

export const COLLECTIONS: HCCollection[] = [
  {
    slug: 'overview',
    title: 'Overview',
    icon: Telescope,
    tile: 'bg-blue-100 text-blue-600',
    articles: [
      { slug: 'our-products-explained', title: 'Our products explained' },
      { slug: 'what-is-fin',            title: 'What is Fin?',     subtitle: 'Learn about Fin, our AI agent.' },
      { slug: 'what-is-clicshq',        title: 'What is clicsHQ?', subtitle: 'Learn about our helpdesk, clicsHQ.' },
      { slug: 'helpdesk-glossary',      title: 'Helpdesk glossary' },
      { slug: 'account-and-billing',    title: 'Account & billing' },
      { slug: 'security-and-privacy',   title: 'Security & privacy' },
      { slug: 'data-and-exports',       title: 'Data & exports' },
      { slug: 'notifications',          title: 'Notifications' },
    ],
  },
  { slug: 'getting-started',   title: 'Getting Started',     sidebarTitle: 'Getting started', icon: Settings,      tile: 'bg-green-100 text-green-600',   articles: DEFAULT_ARTICLES },
  { slug: 'fin-ai-agent',      title: 'Fin AI Agent',                                          icon: Bot,           tile: 'bg-sky-100 text-sky-600',       articles: DEFAULT_ARTICLES },
  { slug: 'channels',          title: 'Channels',            sidebarTitle: 'Channel',         icon: SatelliteDish, tile: 'bg-violet-100 text-violet-600', articles: DEFAULT_ARTICLES },
  { slug: 'inbox',             title: 'Inbox',                                                 icon: Inbox,         tile: 'bg-blue-100 text-blue-600',     articles: DEFAULT_ARTICLES },
  { slug: 'workflows',         title: 'Workflows',           sidebarTitle: 'Workflow',        icon: Workflow,      tile: 'bg-pink-100 text-pink-600',     articles: DEFAULT_ARTICLES },
  { slug: 'knowledge',         title: 'Knowledge',                                             icon: BookOpen,      tile: 'bg-blue-100 text-blue-600',     articles: DEFAULT_ARTICLES },
  { slug: 'reports',           title: 'Reports',                                               icon: FileBarChart,  tile: 'bg-red-100 text-red-500',       articles: DEFAULT_ARTICLES },
  { slug: 'outbound',          title: 'Outbound',                                              icon: Send,          tile: 'bg-amber-100 text-amber-600',   articles: DEFAULT_ARTICLES },
  { slug: 'contacts',          title: 'Contacts',                                              icon: Contact,       tile: 'bg-blue-100 text-blue-600',     articles: DEFAULT_ARTICLES },
  { slug: 'apps-integrations', title: 'Apps & Integrations',                                   icon: LayoutGrid,    tile: 'bg-gray-200 text-gray-700',     articles: DEFAULT_ARTICLES },
  { slug: 'mobile-sdks',       title: 'Mobile SDKs',                                           icon: Smartphone,    tile: 'bg-cyan-100 text-cyan-500',     articles: DEFAULT_ARTICLES },
]

export function getCollection(slug: string): HCCollection | undefined {
  return COLLECTIONS.find((c) => c.slug === slug)
}

export function getArticle(collectionSlug: string, articleSlug: string) {
  const collection = getCollection(collectionSlug)
  const article = collection?.articles.find((a) => a.slug === articleSlug)
  return collection && article ? { collection, article } : null
}
