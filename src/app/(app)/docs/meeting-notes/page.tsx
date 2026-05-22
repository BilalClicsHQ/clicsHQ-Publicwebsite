import type { Metadata } from 'next'
import { DocsView } from '@/components/app/docs/DocsView'

export const metadata: Metadata = { title: 'Meeting Notes' }

export default function MeetingNotesPage() {
  return <DocsView scope="meeting-notes" />
}
