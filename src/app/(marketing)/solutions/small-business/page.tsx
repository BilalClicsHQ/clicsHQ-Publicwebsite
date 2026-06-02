import type { Metadata } from 'next'
import { PageStub } from '@/components/marketing/PageStub'

export const metadata: Metadata = { title: 'For Small Business' }

export default function Page() {
  return (
    <PageStub
      eyebrow="Solutions"
      title="Run your small business on one platform"
      body="Manage projects, customers, and operations in one connected workspace."
    />
  )
}
