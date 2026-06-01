import type { Metadata } from 'next'
import { PageStub } from '@/components/marketing/PageStub'

export const metadata: Metadata = { title: 'Log in to clicsHQ' }

export default function Page() {
  return <PageStub eyebrow="Welcome back" title="Log in to clicsHQ" body="Sign in to continue managing your projects." />
}
