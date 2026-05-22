import type { Metadata } from 'next'
import { DocsView } from '@/components/app/docs/DocsView'

export const metadata: Metadata = { title: 'Trash' }

export default function DocsTrashPage() {
  return <DocsView scope="trash" />
}
