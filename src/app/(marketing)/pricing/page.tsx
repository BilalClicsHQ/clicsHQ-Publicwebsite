import type { Metadata } from 'next'
import { PricingView } from '@/components/marketing/PricingView'

export const metadata: Metadata = { title: 'Pricing' }

export default function PricingPage() {
  return <PricingView />
}
