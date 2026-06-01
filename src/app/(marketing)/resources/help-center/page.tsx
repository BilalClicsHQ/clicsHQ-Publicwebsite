import type { Metadata } from 'next'
import { PageStub } from '@/components/marketing/PageStub'

export const metadata: Metadata = { title: 'Help Center' }

export default function Page() {
  return <PageStub eyebrow="Resources" title="Help Center" body="Find answers, guides, and tutorials for clicsHQ." />
}
