import type { Metadata } from 'next'
import { PageStub } from '@/components/marketing/PageStub'

export const metadata: Metadata = { title: 'For Startups' }

export default function Page() {
  return (
    <PageStub
      eyebrow="Solutions"
      title="Built for fast-moving startups"
      body="Plan sprints, ship faster, and keep every team aligned without adding tools."
    />
  )
}
