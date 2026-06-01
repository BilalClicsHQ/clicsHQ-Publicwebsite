import type { Metadata } from 'next'
import { PageStub } from '@/components/marketing/PageStub'

export const metadata: Metadata = { title: 'Tasks' }

export default function Page() {
  return <PageStub eyebrow="Product" title="Tasks" body="Create, assign, and track tasks with priorities, due dates, and dependencies." />
}
