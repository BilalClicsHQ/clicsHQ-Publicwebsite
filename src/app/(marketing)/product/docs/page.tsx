import type { Metadata } from 'next'
import { PageStub } from '@/components/marketing/PageStub'

export const metadata: Metadata = { title: 'Docs' }

export default function Page() {
  return <PageStub eyebrow="Product" title="Docs" body="Rich documents that live alongside your work, with AI assistance built in." />
}
