import type { Metadata } from 'next'
import { IntegrationsView } from '@/components/marketing/IntegrationsView'

export const metadata: Metadata = { title: 'Integrations' }

export default function IntegrationsPage() {
  return <IntegrationsView />
}
