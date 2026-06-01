import type { MetadataRoute } from 'next'
import { getPayloadClient } from '@/lib/payload'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

/**
 * Dynamic sitemap.xml.
 *
 * Combines:
 * - Static marketing routes (home, pricing, demo, product/*, solutions/*, …)
 * - Published pages from Payload `pages` collection (respects `sitemap.include`)
 * - Published posts from Payload `posts` collection
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    '',
    '/pricing',
    '/demo',
    '/about',
    '/jobs',
    '/support',
    '/product/tasks',
    '/product/kanban',
    '/product/docs',
    '/product/integrations',
    '/product/workflows',
    '/product/ai-chat',
    '/product/ai-agents',
    '/product/gantt',
    '/product/calendar',
    '/product/ai',
    '/solutions/operations',
    '/solutions/marketing',
    '/solutions/product',
    '/solutions/engineering',
    '/solutions/hr',
    '/solutions/sales',
    '/resources/blog',
    '/resources/help-center',
    '/resources/guides',
    '/resources/changelog',
    '/resources/community',
    '/legal/terms',
    '/legal/privacy',
    '/legal/cookie-policy',
  ].map((path) => ({
    url: `${SITE_URL}${path || '/'}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: path === '' ? 1.0 : 0.7,
  }))

  // Pull dynamic Payload entries (best-effort — if DB isn't reachable we still ship static routes).
  try {
    const payload = await getPayloadClient()

    const [pages, posts] = await Promise.all([
      payload.find({ collection: 'pages', limit: 500, where: { _status: { equals: 'published' } } }),
      payload.find({ collection: 'posts', limit: 500, where: { _status: { equals: 'published' } } }),
    ])

    const dynamicPages: MetadataRoute.Sitemap = (pages.docs as any[])
      .filter((p) => p?.sitemap?.include !== false)
      .map((p) => ({
        url: `${SITE_URL}/${p.slug === 'home' ? '' : p.slug}`,
        lastModified: p.updatedAt ? new Date(p.updatedAt) : new Date(),
        changeFrequency: (p.sitemap?.changefreq ?? 'weekly') as MetadataRoute.Sitemap[number]['changeFrequency'],
        priority: parseFloat(p.sitemap?.priority ?? '0.7'),
      }))

    const dynamicPosts: MetadataRoute.Sitemap = (posts.docs as any[]).map((p) => ({
      url: `${SITE_URL}/blog/${p.slug}`,
      lastModified: p.updatedAt ? new Date(p.updatedAt) : new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    }))

    return [...staticRoutes, ...dynamicPages, ...dynamicPosts]
  } catch {
    return staticRoutes
  }
}
