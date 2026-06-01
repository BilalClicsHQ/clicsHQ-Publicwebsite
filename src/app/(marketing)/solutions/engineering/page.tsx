import type { Metadata } from 'next'
import { PageStub } from '@/components/marketing/PageStub'

export const metadata: Metadata = { title: 'Engineering' }

export default function Page() {
  return <PageStub eyebrow="Solutions" title="Engineering" body="Connect specs, sprints, and incidents on one platform." />
}
