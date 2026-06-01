import type { Metadata } from 'next'
import { PageStub } from '@/components/marketing/PageStub'

export const metadata: Metadata = { title: 'Terms & Conditions' }

export default function Page() {
  return <PageStub eyebrow="Legal" title="Terms & Conditions" body="The agreement that governs your use of clicsHQ." />
}
