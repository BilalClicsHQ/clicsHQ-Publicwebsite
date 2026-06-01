import type { Metadata } from 'next'
import { PageStub } from '@/components/marketing/PageStub'

export const metadata: Metadata = { title: 'Pricing' }

export default function Page() {
  return <PageStub eyebrow="Plans for every team" title="Pricing" body="Simple, transparent pricing that scales with your team. Detailed plans coming soon." />
}
