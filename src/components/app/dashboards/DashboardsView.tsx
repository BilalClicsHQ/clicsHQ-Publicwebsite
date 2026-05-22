'use client'

import * as React from 'react'
import {
  ChevronRight,
  ListTodo,
  CheckCircle2,
  Clock,
  AlertTriangle,
  TrendingUp,
} from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { SPACES, TEAMS } from '@/data/mock'

const WEEKLY_BARS = [
  { day: 'Mon', value: 42 },
  { day: 'Tue', value: 68 },
  { day: 'Wed', value: 55 },
  { day: 'Thu', value: 80 },
  { day: 'Fri', value: 72 },
  { day: 'Sat', value: 38 },
  { day: 'Sun', value: 24 },
]

const STATUS = [
  { color: 'bg-ai-600',    label: 'In-Progress', value: 1124, pct: 40 },
  { color: 'bg-brand-lime', label: 'To-Do',      value: 986,  pct: 25 },
  { color: 'bg-amber-500', label: 'Review',      value: 510,  pct: 20 },
  { color: 'bg-rose-500',  label: 'Completed',   value: 3007, pct: 15 },
]

export function DashboardsView() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-xl font-bold text-ink">Dashboards</h1>
          <p className="mt-0.5 text-sm text-muted">
            A snapshot of everything happening across your workspace.
          </p>
        </div>
        <Button variant="secondary" size="sm">Last 7 days</Button>
      </div>

      {/* Stat cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard icon={ListTodo}     label="Total Tasks" value="6,049" delta="+8%"  tone="default" />
        <StatCard icon={CheckCircle2} label="Completed"   value="3,007" delta="+5%"  tone="success" />
        <StatCard icon={Clock}        label="In-Progress" value="1,124" delta="+12%" tone="info" />
        <StatCard icon={AlertTriangle} label="Overdue"    value="84"    delta="-2%"  tone="danger" />
      </div>

      {/* Charts row */}
      <div className="grid gap-4 lg:grid-cols-3">
        {/* Weekly activity bar chart */}
        <Card className="p-5 lg:col-span-2">
          <div className="flex items-center justify-between">
            <h3 className="h-card">Task activity this week</h3>
            <span className="inline-flex items-center gap-1 text-xs font-medium text-success-fg">
              <TrendingUp className="h-3.5 w-3.5" /> +14%
            </span>
          </div>
          <div className="mt-6 flex h-48 items-end justify-between gap-3">
            {WEEKLY_BARS.map((bar) => (
              <div key={bar.day} className="flex flex-1 flex-col items-center gap-2">
                <div className="flex w-full flex-1 items-end">
                  <div
                    className="w-full rounded-t-md bg-ai-500/90 transition-all hover:bg-ai-600"
                    style={{ height: `${bar.value}%` }}
                  />
                </div>
                <span className="text-2xs text-muted">{bar.day}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Status donut */}
        <Card className="p-5">
          <h3 className="h-card">Status overview</h3>
          <div className="mt-4 flex flex-col items-center gap-5">
            <div className="relative h-32 w-32">
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    'conic-gradient(#7C3AED 0% 40%, #A3E635 40% 65%, #F59E0B 65% 85%, #EF4444 85% 100%)',
                }}
              />
              <div className="absolute inset-3 grid place-items-center rounded-full bg-white">
                <div className="text-center">
                  <p className="text-2xl font-bold text-ink">5,627</p>
                  <p className="text-2xs uppercase tracking-wider text-muted">Total</p>
                </div>
              </div>
            </div>
            <ul className="w-full space-y-2 text-sm">
              {STATUS.map((r) => (
                <li key={r.label} className="flex items-center gap-2">
                  <span className={`h-2 w-2 rounded-full ${r.color}`} />
                  <span className="text-ink">{r.label}</span>
                  <span className="ml-auto text-muted">{r.value.toLocaleString()}</span>
                </li>
              ))}
            </ul>
          </div>
        </Card>
      </div>

      {/* Bottom row */}
      <div className="grid gap-4 lg:grid-cols-2">
        {/* Active spaces */}
        <Card className="p-5">
          <div className="flex items-center justify-between">
            <h3 className="h-card">Active spaces</h3>
            <Button variant="ghost" size="sm">View all</Button>
          </div>
          <ul className="mt-4 divide-y divide-gray-50">
            {SPACES.map((space) => {
              const pct = Math.round((space.stats.completed / space.stats.total) * 100)
              return (
                <li key={space.id} className="flex items-center gap-3 py-3">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-gray-100 text-sm font-semibold text-ink">
                    {space.name.charAt(0)}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-ink">{space.name}</p>
                    <p className="text-2xs text-muted">{space.team}</p>
                  </div>
                  <div className="hidden w-28 sm:block">
                    <div className="h-1.5 overflow-hidden rounded-full bg-gray-100">
                      <div className="h-full rounded-full bg-ai-500" style={{ width: `${pct}%` }} />
                    </div>
                  </div>
                  <span className="w-10 text-right text-xs text-muted">{pct}%</span>
                </li>
              )
            })}
          </ul>
        </Card>

        {/* Team performance */}
        <Card className="p-5">
          <div className="flex items-center justify-between">
            <h3 className="h-card">Team performance</h3>
            <Button variant="ghost" size="sm">View all</Button>
          </div>
          <ul className="mt-4 space-y-3">
            {TEAMS.slice(0, 5).map((team, i) => {
              const score = 88 - i * 11
              return (
                <li key={team.id} className="flex items-center gap-3">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gray-200 text-2xs font-semibold text-ink">
                    {team.name.charAt(0)}
                  </span>
                  <span className="w-24 truncate text-sm text-ink">{team.name}</span>
                  <div className="h-2 flex-1 overflow-hidden rounded-full bg-gray-100">
                    <div className="h-full rounded-full bg-success-fg" style={{ width: `${score}%` }} />
                  </div>
                  <Badge variant="success" size="sm">{score}%</Badge>
                </li>
              )
            })}
          </ul>
          <button className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-ink hover:underline">
            See details <ChevronRight className="h-3 w-3" />
          </button>
        </Card>
      </div>
    </div>
  )
}

function StatCard({
  icon: Icon,
  label,
  value,
  delta,
  tone,
}: {
  icon: React.ElementType
  label: string
  value: string
  delta: string
  tone: 'default' | 'success' | 'info' | 'danger'
}) {
  const toneCls = {
    default: 'bg-gray-100      text-ink',
    success: 'bg-success-soft  text-success-fg',
    info:    'bg-info-soft     text-info-fg',
    danger:  'bg-danger-soft   text-danger-fg',
  }[tone]
  const deltaCls = delta.startsWith('-') ? 'text-danger-fg' : 'text-success-fg'

  return (
    <Card className="p-5">
      <div className={`inline-flex h-9 w-9 items-center justify-center rounded-lg ${toneCls}`}>
        <Icon className="h-4 w-4" />
      </div>
      <p className="mt-3 text-2xl font-bold leading-none text-ink">{value}</p>
      <div className="mt-1 flex items-center justify-between">
        <p className="text-sm text-muted">{label}</p>
        <p className={`text-xs ${deltaCls}`}>{delta}</p>
      </div>
    </Card>
  )
}
