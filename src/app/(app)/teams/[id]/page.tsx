import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getTeam } from '@/data/mock'
import { TeamDetail } from '@/components/app/teams/TeamDetail'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params
  const team = getTeam(id)
  return { title: team ? team.name : 'Team' }
}

export default async function TeamDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const team = getTeam(id)
  if (!team) notFound()

  return <TeamDetail team={team} />
}
