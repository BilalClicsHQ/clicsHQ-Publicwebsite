import type { Metadata } from 'next'
import { DemoView } from '@/components/marketing/DemoView'

export const metadata: Metadata = { title: 'Request a demo' }

export default function DemoPage() {
  return <DemoView />
}
