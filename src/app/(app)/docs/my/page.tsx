import type { Metadata } from 'next'
import { DocsView } from '@/components/app/docs/DocsView'

export const metadata: Metadata = { title: 'Created by me' }

export default function MyDocsPage() {
  return <DocsView scope="my" />
}
