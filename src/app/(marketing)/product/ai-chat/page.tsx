import type { Metadata } from 'next'
import { PageStub } from '@/components/marketing/PageStub'

export const metadata: Metadata = { title: 'AI Chat' }

export default function Page() {
  return <PageStub eyebrow="Product" title="AI Chat" body="Ask Clics AI questions about your projects and get instant answers." />
}
