import type { Metadata } from 'next'
import { PageStub } from '@/components/marketing/PageStub'

export const metadata: Metadata = { title: 'Community' }

export default function Page() {
  return <PageStub eyebrow="Resources" title="Community" body="Connect with other clicsHQ users and our team." />
}
