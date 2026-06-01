import { getPayloadClient } from '@/lib/payload'

/**
 * Reads SiteSettings from Payload and injects head/body scripts.
 *
 * Use:
 *   <InjectScripts placement="head" />
 *   <InjectScripts placement="bodyStart" />
 *   <InjectScripts placement="bodyEnd" />
 */
export async function InjectScripts({
  placement,
}: {
  placement: 'head' | 'bodyStart' | 'bodyEnd'
}) {
  let html = ''
  try {
    const payload = await getPayloadClient()
    const s: any = await payload.findGlobal({ slug: 'site-settings' })
    if (placement === 'head')       html = s?.headScripts ?? ''
    if (placement === 'bodyStart')  html = s?.bodyStartScripts ?? ''
    if (placement === 'bodyEnd')    html = s?.bodyEndScripts ?? ''
  } catch {
    /* best-effort — return nothing if DB unreachable */
  }

  if (!html) return null
  // Editor-controlled HTML — render verbatim. Restricted to admin-only field.
  return <div dangerouslySetInnerHTML={{ __html: html }} />
}
