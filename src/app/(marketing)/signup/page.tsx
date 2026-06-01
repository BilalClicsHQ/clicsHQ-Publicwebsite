import type { Metadata } from 'next'
import { PageStub } from '@/components/marketing/PageStub'

export const metadata: Metadata = { title: 'Sign up for clicsHQ' }

export default function Page() {
  return <PageStub eyebrow="Get started" title="Sign up for clicsHQ" body="Create your free clicsHQ workspace in less than a minute." />
}
