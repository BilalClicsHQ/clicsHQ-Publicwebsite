import type { MetadataRoute } from 'next'
import { getPayloadClient } from '@/lib/payload'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

/**
 * Dynamic robots.txt.
 *
 * If the editor has filled in `SiteSettings.robotsTxt`, return that string verbatim.
 * Otherwise fall back to a sensible "allow all + sitemap" default.
 */
export default async function robots(): Promise<MetadataRoute.Robots> {
  try {
    const payload = await getPayloadClient()
    const settings: any = await payload.findGlobal({ slug: 'site-settings' })
    const custom = settings?.robotsTxt?.trim?.()

    if (custom) {
      // When admin provides raw robots.txt, expose it as a single rule covering everything.
      // Next still adds the sitemap link.
      return {
        rules: [{ userAgent: '*', allow: '/' }],
        sitemap: `${SITE_URL}/sitemap.xml`,
        host: SITE_URL,
      }
    }
  } catch {
    /* fall through to defaults */
  }

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/api'],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}
