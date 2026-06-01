import type { Metadata } from 'next'
import { PageStub } from '@/components/marketing/PageStub'

export const metadata: Metadata = { title: 'Guides' }

export default function Page() {
  return <PageStub eyebrow="Resources" title="Guides" body="Step-by-step playbooks for getting the most out of clicsHQ." />
}
