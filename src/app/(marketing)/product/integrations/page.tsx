import type { Metadata } from 'next'
import { PageStub } from '@/components/marketing/PageStub'

export const metadata: Metadata = { title: 'Integrations' }

export default function Page() {
  return <PageStub eyebrow="Product" title="Integrations" body="Connect with 200+ tools your team already uses every day." />
}
