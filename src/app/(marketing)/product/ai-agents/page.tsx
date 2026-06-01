import type { Metadata } from 'next'
import { PageStub } from '@/components/marketing/PageStub'

export const metadata: Metadata = { title: 'AI Agents' }

export default function Page() {
  return <PageStub eyebrow="Product" title="AI Agents" body="Purpose-built AI agents that plan, report, and take action across your tools." />
}
