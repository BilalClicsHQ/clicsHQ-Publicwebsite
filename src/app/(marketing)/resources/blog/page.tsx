import type { Metadata } from 'next'
import { PageStub } from '@/components/marketing/PageStub'

export const metadata: Metadata = { title: 'Blog' }

export default function Page() {
  return <PageStub eyebrow="Resources" title="Blog" body="Articles, product updates, and team stories." />
}
