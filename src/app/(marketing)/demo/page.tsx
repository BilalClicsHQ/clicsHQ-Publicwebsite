import type { Metadata } from 'next'
import { PageStub } from '@/components/marketing/PageStub'

export const metadata: Metadata = { title: 'See clicsHQ in action' }

export default function Page() {
  return <PageStub eyebrow="Demo" title="See clicsHQ in action" body="Book a live demo with our team to see how clicsHQ fits your workflow." />
}
