import type { Metadata } from 'next'
import { PageStub } from '@/components/marketing/PageStub'

export const metadata: Metadata = { title: 'HR' }

export default function Page() {
  return <PageStub eyebrow="Solutions" title="HR" body="Onboard, manage, and grow your team with structured workflows." />
}
