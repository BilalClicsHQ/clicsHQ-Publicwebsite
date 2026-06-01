import type { Metadata } from 'next'
import { PageStub } from '@/components/marketing/PageStub'

export const metadata: Metadata = { title: 'Gantt Chart' }

export default function Page() {
  return <PageStub eyebrow="Product" title="Gantt Chart" body="Plan timelines and track dependencies in a clean Gantt view." />
}
