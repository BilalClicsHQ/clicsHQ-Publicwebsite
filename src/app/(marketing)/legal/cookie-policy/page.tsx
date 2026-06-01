import type { Metadata } from 'next'
import { PageStub } from '@/components/marketing/PageStub'

export const metadata: Metadata = { title: 'Cookie Policy' }

export default function Page() {
  return <PageStub eyebrow="Legal" title="Cookie Policy" body="How clicsHQ uses cookies and similar technologies." />
}
