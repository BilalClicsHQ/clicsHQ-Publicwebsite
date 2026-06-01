import { CTAButton } from './CTAButton'

interface PageStubProps {
  eyebrow?: string
  title: string
  body?: string
  primaryCTA?: { label: string; href: string }
  secondaryCTA?: { label: string; href: string }
}

/**
 * Lightweight "coming soon" landing template for routes that are part of the
 * sitemap but whose full marketing copy is still being written / pulled from
 * Payload. Keeps URLs valid (no 404s) and consistent with the brand.
 */
export function PageStub({
  eyebrow,
  title,
  body = 'This page is being prepared. Detailed content is on its way.',
  primaryCTA = { label: 'Get Started Now', href: '/signup' },
  secondaryCTA = { label: 'Back to home', href: '/' },
}: PageStubProps) {
  return (
    <main className="container-app py-24 sm:py-32 text-center">
      {eyebrow && <p className="text-sm font-medium text-muted">{eyebrow}</p>}
      <h1 className="mt-2 heading-lg mx-auto max-w-3xl text-balance">{title}</h1>
      <p className="mx-auto mt-4 max-w-2xl text-base text-muted">{body}</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <CTAButton href={primaryCTA.href}>{primaryCTA.label}</CTAButton>
        <CTAButton variant="secondary" href={secondaryCTA.href}>{secondaryCTA.label}</CTAButton>
      </div>
    </main>
  )
}
