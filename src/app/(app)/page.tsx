import type { Metadata } from 'next'
import { HomeView } from '@/components/app/home/HomeView'

export const metadata: Metadata = { title: 'Home' }

export default function HomePage() {
  return <HomeView />
}
