import type { Metadata } from 'next'
import { PageStub } from '@/components/marketing/PageStub'

export const metadata: Metadata = { title: 'Calendar' }

export default function Page() {
  return <PageStub eyebrow="Product" title="Calendar" body="See deadlines, events, and team schedules on a single calendar." />
}
