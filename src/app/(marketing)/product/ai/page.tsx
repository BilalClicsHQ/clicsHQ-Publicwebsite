import type { Metadata } from 'next'
import { PageStub } from '@/components/marketing/PageStub'

export const metadata: Metadata = { title: 'AI assists' }

export default function Page() {
  return <PageStub eyebrow="Product" title="AI assists" body="Let AI supercharge your projects with summaries, plans, and insights." />
}
