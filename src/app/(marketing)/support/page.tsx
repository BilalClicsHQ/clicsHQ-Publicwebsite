import type { Metadata } from 'next'
import { PageStub } from '@/components/marketing/PageStub'

export const metadata: Metadata = { title: 'Support' }

export default function Page() {
  return <PageStub eyebrow="Help" title="Support" body="Need a hand? Our team is here to help." />
}
