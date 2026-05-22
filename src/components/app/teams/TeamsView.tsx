'use client'

import * as React from 'react'
import Link from 'next/link'
import { MoreHorizontal, Plus, Pencil, Trash2, Users } from 'lucide-react'
import { TEAMS, type Team } from '@/data/mock'
import { Button } from '@/components/ui/Button'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/DropdownMenu'
import { CreateTeamDialog } from './CreateTeamDialog'
import { useComingSoon } from '@/components/app/ComingSoon'

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })
}

export function TeamsView() {
  const [createOpen, setCreateOpen] = React.useState(false)

  if (TEAMS.length === 0) return <TeamsEmpty onCreate={() => setCreateOpen(true)} />

  return (
    <>
      <div className="flex items-center justify-end">
        <Button size="sm" onClick={() => setCreateOpen(true)}>Create team</Button>
      </div>

      <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {TEAMS.map((team) => (
          <TeamCard key={team.id} team={team} />
        ))}
      </div>

      <CreateTeamDialog open={createOpen} onOpenChange={setCreateOpen} />
    </>
  )
}

function TeamCard({ team }: { team: Team }) {
  const comingSoon = useComingSoon()
  return (
    <div className="group relative rounded-xl bg-white p-4 ring-1 ring-gray-100 shadow-card transition-shadow hover:shadow-lg">
      <div className="flex items-start justify-between">
        <p className="text-2xs text-subtle">Created: {formatDate(team.createdAt)}</p>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="grid h-6 w-6 place-items-center rounded-md text-muted hover:bg-gray-100">
              <MoreHorizontal className="h-4 w-4" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onSelect={() => comingSoon('Edit team')}>
              <Pencil className="h-4 w-4" /> Edit
            </DropdownMenuItem>
            <DropdownMenuItem
              className="text-danger-fg focus:text-danger-fg"
              onSelect={() => comingSoon('Delete team')}
            >
              <Trash2 className="h-4 w-4" /> Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <Link href={`/teams/${team.id}`} className="mt-1 block">
        <h3 className="text-base font-semibold text-ink hover:text-ai-600">{team.name}</h3>
      </Link>

      <div className="mt-6 flex items-center justify-between">
        <div className="flex -space-x-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <span
              key={i}
              className="h-7 w-7 rounded-full bg-gray-200 ring-2 ring-white"
            />
          ))}
        </div>
        <span className="text-xs text-muted">{team.memberCount} Members</span>
      </div>
    </div>
  )
}

function TeamsEmpty({ onCreate }: { onCreate: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      <div className="grid h-28 w-28 place-items-center rounded-full bg-gray-50 text-subtle">
        <Users className="h-12 w-12" strokeWidth={1.25} />
      </div>
      <p className="mt-6 text-sm font-bold text-ink">
        It looks like you haven&apos;t added any team members yet.
      </p>
      <p className="mt-1 text-sm text-muted">
        Invite your team to collaborate and stay organized in one place.
      </p>
      <Button className="mt-4" onClick={onCreate}>
        <Plus className="h-4 w-4" /> Create Team
      </Button>
    </div>
  )
}
