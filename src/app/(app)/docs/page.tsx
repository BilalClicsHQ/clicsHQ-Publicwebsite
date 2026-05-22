import type { Metadata } from 'next'
import { DocsView } from '@/components/app/docs/DocsView'

export const metadata: Metadata = { title: 'Docs' }

export default function DocsPage() {
  return <DocsView />
}
