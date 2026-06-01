import type { Metadata } from 'next'
import { PageStub } from '@/components/marketing/PageStub'

export const metadata: Metadata = { title: 'Workflows' }

export default function Page() {
  return <PageStub eyebrow="Product" title="Workflows" body="Automate the busywork with triggers, conditions, and actions across your stack." />
}
