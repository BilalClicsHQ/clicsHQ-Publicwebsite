import type { Metadata } from 'next'
import { PageStub } from '@/components/marketing/PageStub'

export const metadata: Metadata = { title: 'Changelog' }

export default function Page() {
  return <PageStub eyebrow="Resources" title="Changelog" body="What's new in clicsHQ — features, fixes, and improvements." />
}
