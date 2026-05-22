import type { Metadata } from 'next'
import { DashboardsView } from '@/components/app/dashboards/DashboardsView'

export const metadata: Metadata = { title: 'Dashboards' }

export default function DashboardsPage() {
  return <DashboardsView />
}
