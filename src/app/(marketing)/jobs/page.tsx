import type { Metadata } from 'next'
import { PageStub } from '@/components/marketing/PageStub'

export const metadata: Metadata = { title: 'Jobs at clicsHQ' }

export default function Page() {
  return <PageStub eyebrow="Company" title="Jobs at clicsHQ" body="Join us in building the future of team productivity." />
}
