import type { Metadata } from 'next'
import { AiAssistsView } from '@/components/marketing/AiAssistsView'

export const metadata: Metadata = { title: 'AI assists' }

export default function AIAssistsPage() {
  return <AiAssistsView />
}
