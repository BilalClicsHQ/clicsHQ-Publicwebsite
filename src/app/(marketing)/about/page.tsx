import type { Metadata } from 'next'
import { PageStub } from '@/components/marketing/PageStub'

export const metadata: Metadata = { title: 'About clicsHQ' }

export default function Page() {
  return <PageStub eyebrow="Company" title="About clicsHQ" body="Our mission, team, and the story behind clicsHQ." />
}
