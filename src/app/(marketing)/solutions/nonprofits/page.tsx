import type { Metadata } from 'next'
import { PageStub } from '@/components/marketing/PageStub'

export const metadata: Metadata = { title: 'For Non-Profits' }

export default function Page() {
  return (
    <PageStub
      eyebrow="Solutions"
      title="Mission-driven work, one connected workspace"
      body="Coordinate programs, volunteers, and impact tracking in one place."
    />
  )
}
