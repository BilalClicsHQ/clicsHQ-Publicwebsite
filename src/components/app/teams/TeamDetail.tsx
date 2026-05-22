'use client'

import * as React from 'react'
import Link from 'next/link'
import { ArrowLeft, Zap, AlertCircle, CheckCircle2, Trophy } from 'lucide-react'
import type { Team } from '@/data/mock'
import { Badge } from '@/components/ui/Badge'
import { cn } from '@/lib/cn'

type FeedTone = 'progress' | 'review' | 'completed'

interface FeedItem {
  id: string
  actor: string
  text: string
  date: string
  time: string
  tone: FeedTone
}

const TODAY_FEED: FeedItem[] = [
  { id: 'f1', actor: 'Jackie Kun', text: 'mentioned you at Kleon Projects', date: 'Monday, June 27 2020', time: '2m ago', tone: 'progress' },
  { id: 'f2', actor: '[REMINDER]', text: 'Due date of Highspeed Studios Projects te task will be coming', date: 'Monday, June 27 2020', time: '6m ago', tone: 'review' },
  { id: 'f3', actor: 'Olivia Johanna', text: 'has created new task at Kleon Projects', date: 'Monday, June 27 2020', time: '16m ago', tone: 'progress' },
]

const YESTERDAY_FEED: FeedItem[] = [
  { id: 'f4', actor: 'Jackie Kun', text: 'mentioned you at Kleon Projects', date: 'Monday, June 27 2020', time: '2m ago', tone: 'completed' },
]

const LEADERBOARD = [
  { rank: 1, name: 'Shaharyar Asgher',  tasks: 71, hours: 56, score: 86 },
  { rank: 2, name: 'Bilal Ahmed',       tasks: 64, hours: 52, score: 80 },
  { rank: 3, name: 'Ayesha Khan',       tasks: 58, hours: 48, score: 74 },
  { rank: 4, name: 'Marcus Johnson',    tasks: 49, hours: 41, score: 66 },
]

const SPACES_PANEL = ['Marketing', 'Graphic Designer', 'Front-end']
const BOOKMARKS_PANEL = ['Design System', 'Sales', 'Project plan', 'Roadmap']

const TONE_STYLE: Record<FeedTone, { icon: React.ElementType; chip: 'info' | 'warning' | 'success'; bg: string; fg: string; label: string }> = {
  progress:  { icon: Zap,          chip: 'info',    bg: 'bg-info-soft',    fg: 'text-info-fg',    label: 'In Progress' },
  review:    { icon: AlertCircle,  chip: 'warning', bg: 'bg-warning-soft', fg: 'text-warning-fg', label: 'Review' },
  completed: { icon: CheckCircle2, chip: 'success', bg: 'bg-success-soft', fg: 'text-success-fg', label: 'Completed' },
}

export function TeamDetail({ team }: { team: Team }) {
  return (
    <div className="space-y-5">
      <Link
        href="/teams"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-ink"
      >
        <ArrowLeft className="h-4 w-4" /> Back to Teams
      </Link>

      <div className="grid gap-5 lg:grid-cols-3">
        {/* Main column */}
        <div className="space-y-5 lg:col-span-2">
          {/* Team header card */}
          <div className="rounded-xl bg-white p-5 ring-1 ring-gray-100">
            <h1 className="text-lg font-bold text-ink">{team.name}</h1>
            <p className="mt-0.5 text-xs text-subtle">
              Created: {new Date(team.createdAt).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}
            </p>
            <p className="mt-3 text-sm text-muted">{team.description}</p>
          </div>

          {/* Activity feed */}
          <div className="rounded-xl bg-white p-5 ring-1 ring-gray-100">
            <h2 className="text-base font-semibold text-ink">Activity Feed</h2>

            <FeedGroup label="Today" items={TODAY_FEED} />
            <FeedGroup label="Yesterday" items={YESTERDAY_FEED} />
          </div>

          {/* Leaderboard */}
          <div className="rounded-xl bg-white p-5 ring-1 ring-gray-100">
            <h2 className="text-base font-semibold text-ink">Leaderboard</h2>
            <div className="mt-4 space-y-2">
              {LEADERBOARD.map((row) => (
                <div
                  key={row.rank}
                  className="flex items-center gap-4 rounded-lg px-2 py-2.5 hover:bg-gray-50"
                >
                  <div className="flex w-10 items-center gap-1">
                    {row.rank <= 3 ? (
                      <Trophy
                        className={cn(
                          'h-4 w-4',
                          row.rank === 1 && 'text-amber-400',
                          row.rank === 2 && 'text-gray-400',
                          row.rank === 3 && 'text-amber-700',
                        )}
                      />
                    ) : null}
                    <span className="text-sm font-semibold text-ink">#{row.rank}</span>
                  </div>
                  <span className="h-8 w-8 shrink-0 rounded-full bg-gray-200" />
                  <span className="flex-1 truncate text-sm font-medium text-ink">{row.name}</span>
                  <Metric label="Tasks" value={`${row.tasks}%`} />
                  <Metric label="Hours" value={`${row.hours}%`} />
                  <Metric label="Score" value={`${row.score}%`} accent />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Side column */}
        <div className="space-y-5">
          <SidePanel title="Spaces" items={SPACES_PANEL} />
          <SidePanel title="Members" items={team.memberIds.map((_, i) => `Team Member ${i + 1}`)} />
          <SidePanel title="Bookmarks" items={BOOKMARKS_PANEL} />
        </div>
      </div>
    </div>
  )
}

function FeedGroup({ label, items }: { label: string; items: FeedItem[] }) {
  return (
    <div className="mt-4">
      <p className="text-xs font-medium text-subtle">{label}</p>
      <div className="mt-2 space-y-3">
        {items.map((item) => {
          const tone = TONE_STYLE[item.tone]
          const Icon = tone.icon
          return (
            <div key={item.id} className="flex items-start gap-3">
              <span className="w-12 shrink-0 pt-0.5 text-2xs text-subtle">{item.time}</span>
              <div className={cn('grid h-7 w-7 shrink-0 place-items-center rounded-full', tone.bg, tone.fg)}>
                <Icon className="h-3.5 w-3.5" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm text-ink">
                  <span className="font-semibold">{item.actor}</span>{' '}
                  <span className="text-muted">{item.text}</span>
                </p>
                <p className="text-2xs text-subtle">{item.date}</p>
              </div>
              <Badge variant={tone.chip} size="sm">{tone.label}</Badge>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function Metric({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className="hidden w-12 text-center sm:block">
      <p className="text-2xs text-subtle">{label}</p>
      <p className={cn('text-xs font-semibold', accent ? 'text-success-fg' : 'text-ink')}>{value}</p>
    </div>
  )
}

function SidePanel({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-xl bg-white p-4 ring-1 ring-gray-100">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-ink">{title}</h3>
        <span className="rounded-full bg-ink px-2 py-0.5 text-2xs font-medium text-white">See all</span>
      </div>
      <div className="mt-3 space-y-2.5">
        {items.map((item, i) => (
          <div key={`${item}-${i}`} className="flex items-center gap-3">
            <span className="h-7 w-7 shrink-0 rounded-full bg-gray-200" />
            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-ink">{item}</p>
              <p className="text-2xs text-subtle">Team</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
