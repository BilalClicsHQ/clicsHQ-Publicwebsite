import type { Metadata } from 'next'
import { PageStub } from '@/components/marketing/PageStub'

export const metadata: Metadata = { title: 'Sales' }

export default function Page() {
  return <PageStub eyebrow="Solutions" title="Sales" body="Close more deals with a single source of truth across your pipeline." />
}
