import type { Metadata } from 'next'
import { PageStub } from '@/components/marketing/PageStub'

export const metadata: Metadata = { title: 'Product' }

export default function Page() {
  return <PageStub eyebrow="Solutions" title="Product" body="From discovery to launch — keep product teams aligned." />
}
