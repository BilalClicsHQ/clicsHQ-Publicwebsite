import type { Metadata } from 'next'
import { PageStub } from '@/components/marketing/PageStub'

export const metadata: Metadata = { title: 'Marketing' }

export default function Page() {
  return <PageStub eyebrow="Solutions" title="Marketing" body="Launch campaigns faster with a connected creative workspace." />
}
