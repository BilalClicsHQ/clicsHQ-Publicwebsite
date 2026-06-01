import type { Metadata } from 'next'
import { PageStub } from '@/components/marketing/PageStub'

export const metadata: Metadata = { title: 'Kanban Board' }

export default function Page() {
  return <PageStub eyebrow="Product" title="Kanban Board" body="Visualize your team's work as it flows from To-do to Done." />
}
