import type { Metadata } from 'next'
import { PageStub } from '@/components/marketing/PageStub'

export const metadata: Metadata = { title: 'Operations' }

export default function Page() {
  return <PageStub eyebrow="Solutions" title="Operations" body="Coordinate complex operations across teams with confidence." />
}
