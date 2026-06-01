import type { Metadata } from 'next'
import { PageStub } from '@/components/marketing/PageStub'

export const metadata: Metadata = { title: 'Privacy Policy' }

export default function Page() {
  return <PageStub eyebrow="Legal" title="Privacy Policy" body="How we collect, use, and protect your data." />
}
