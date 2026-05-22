'use client'

import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  Plus,
  ChevronDown,
  ChevronUp,
  ArrowUpRight,
  Search,
  Keyboard,
  LayoutGrid,
  Workflow,
  Puzzle,
  Zap,
  AlertCircle,
  CheckCircle2,
} from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { cn } from '@/lib/cn'

// ── Data (mock — swap for backend later) ────────────────────────────────────

const SPACES = [
  { id: 's1', name: 'GTM Launch',      category: 'Software project', tagline: 'Popular with marketing team' },
  { id: 's2', name: 'Product Roadmap', category: 'Product board',    tagline: 'Popular with marketing team' },
  { id: 's3', name: 'Design System',   category: 'Design project',   tagline: 'Popular with marketing team' },
  { id: 's4', name: 'Backend API',     category: 'Software project', tagline: 'Popular with marketing team' },
  { id: 's5', name: 'GTM Launch',      category: 'Software project', tagline: 'Popular with marketing team' },
  { id: 's6', name: 'GTM Launch',      category: 'Software project', tagline: 'Popular with marketing team' },
]

type TaskTab = 'assigned' | 'due' | 'overdue' | 'completed'
type TaskTone = 'progress' | 'review' | 'todo'

interface HomeTask {
  id: string
  lead: string
  project: string
  suffix?: string
  date: string
  badge: string
  tone: TaskTone
}

const TASKS: Record<TaskTab, HomeTask[]> = {
  assigned: [
    { id: 't1', lead: 'Jackie Kun mentioned you at', project: 'Kleon Projects', date: 'Monday, June 21 2020', badge: 'IN PROGRESS', tone: 'progress' },
    { id: 't2', lead: '[REMINDER] Due date of', project: 'Highspeed Studios Projects', suffix: ' te task will be coming', date: 'Monday, June 21 2020', badge: 'REVIEW', tone: 'review' },
    { id: 't3', lead: 'Olivia Johanna has created new task at', project: 'Kleon Projects', date: 'Monday, June 21 2020', badge: 'TO DO', tone: 'todo' },
    { id: 't4', lead: 'Jackie Kun mentioned you at', project: 'Kleon Projects', date: 'Monday, June 21 2020', badge: 'IN PROGRESS', tone: 'progress' },
    { id: 't5', lead: '[REMINDER] Due date of', project: 'Highspeed Studios Projects', suffix: ' te task will be coming', date: 'Monday, June 21 2020', badge: 'REVIEW', tone: 'review' },
  ],
  due: [],
  overdue: [],
  completed: [],
}

const PEOPLE = [
  { id: 'p1', name: 'Bilal Ahmed',    initial: 'B', dot: 'bg-emerald-500' },
  { id: 'p2', name: 'Sarah Chen',     initial: 'S', dot: 'bg-rose-500' },
  { id: 'p3', name: 'Marcus Johnson', initial: 'M', dot: 'bg-amber-500' },
]

const TASK_BADGE: Record<TaskTone, string> = {
  progress: 'bg-sky-50    text-sky-600',
  review:   'bg-amber-50  text-amber-600',
  todo:     'bg-yellow-50 text-yellow-700',
}

type FeedTone = 'progress' | 'review' | 'completed'

const ACTIVITY_TONE: Record<FeedTone, { icon: typeof Zap; bg: string; fg: string; label: string; chip: string }> = {
  progress:  { icon: Zap,          bg: 'bg-sky-100',     fg: 'text-sky-600',     label: 'In Progress', chip: 'bg-sky-50    text-sky-600' },
  review:    { icon: AlertCircle,  bg: 'bg-amber-100',   fg: 'text-amber-600',   label: 'Review',      chip: 'bg-amber-50  text-amber-600' },
  completed: { icon: CheckCircle2, bg: 'bg-emerald-100', fg: 'text-emerald-600', label: 'Completed',   chip: 'bg-emerald-50 text-emerald-600' },
}

const ACTIVITY = {
  today: [
    { id: 'a1', actor: 'Jackie Kun',     text: 'mentioned you at Kleon Projects', date: 'Monday, June 27 2020', time: '2m ago',  tone: 'progress' as FeedTone },
    { id: 'a2', actor: '[REMINDER]',     text: 'Due date of Highspeed Studios Projects te task will be coming', date: 'Monday, June 27 2020', time: '6m ago',  tone: 'review' as FeedTone },
    { id: 'a3', actor: 'Olivia Johanna', text: 'has created new task at Kleon Projects', date: 'Monday, June 27 2020', time: '16m ago', tone: 'progress' as FeedTone },
  ],
  yesterday: [
    { id: 'a4', actor: 'Jackie Kun', text: 'mentioned you at Kleon Projects', date: 'Monday, June 27 2020', time: '2m ago', tone: 'completed' as FeedTone },
  ],
}

const NOTES = [
  { id: 'n1', title: 'Discuss Meeting Agenda', body: 'Project plan and team responsibilities for the sprint.' },
  { id: 'n2', title: 'Discuss Meeting Agenda', body: 'Roadmap review, blockers and next milestone dates.' },
]

const TIPS = [
  { id: 'tip1', icon: Keyboard,   title: 'Keyboard shortcuts', desc: 'Press Ctrl+K to quickly search across all your spaces and tasks.' },
  { id: 'tip2', icon: LayoutGrid, title: 'Custom views',       desc: 'Create filtered views to see the tasks that matter most to you.' },
  { id: 'tip3', icon: Workflow,   title: 'Automation rules',   desc: 'Set up rules to auto-assign tasks and update statuses.' },
  { id: 'tip4', icon: Puzzle,     title: 'Integrations',       desc: 'Connect your favorite tools like Slack, GitHub and Figma.' },
]

const TASK_TABS: { id: TaskTab; label: string }[] = [
  { id: 'assigned',  label: 'Assigned to me' },
  { id: 'due',       label: 'Due soon' },
  { id: 'overdue',   label: 'Overdue' },
  { id: 'completed', label: 'Completed' },
]

// ── View ────────────────────────────────────────────────────────────────────

export function HomeView() {
  const [taskTab, setTaskTab] = React.useState<TaskTab>('assigned')
  const [spaceFilter, setSpaceFilter] = React.useState<'recent' | 'created'>('recent')

  return (
    <div className="relative mx-auto max-w-6xl">
      {/* Decorative leaves — top-left near greeting */}
      <Image
        src="/images/hero/leaves.svg"
        alt=""
        aria-hidden
        width={200}
        height={200}
        priority
        className="pointer-events-none absolute -top-3 left-0 hidden select-none opacity-90 lg:block"
      />
      {/* Decorative stars — top-right near greeting */}
      <Image
        src="/images/hero/stars.svg"
        alt=""
        aria-hidden
        width={150}
        height={150}
        priority
        className="pointer-events-none absolute -top-3 right-0 hidden select-none opacity-90 lg:block"
      />

      {/* Greeting */}
      <div className="relative pb-9 pt-10 text-center">
        <h1 className="text-[28px] font-bold tracking-tight text-ink sm:text-[32px]">
          Good evening, Bilal!
        </h1>
        <p className="mt-1.5 text-sm text-muted">Welcome back to clicsHQ</p>
      </div>

      {/* Recommended spaces */}
      <section className="relative">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-sm font-semibold text-ink">Recommended spaces:</h2>

          <div className="flex items-center gap-3">
            {/* Segmented filter */}
            <div className="flex items-center rounded-lg bg-gray-100 p-0.5">
              <button
                onClick={() => setSpaceFilter('created')}
                className={cn(
                  'inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-colors',
                  spaceFilter === 'created'
                    ? 'bg-ink text-white shadow-sm'
                    : 'text-muted hover:text-ink',
                )}
              >
                <Plus className="h-3.5 w-3.5" /> Create member
              </button>
              <button
                onClick={() => setSpaceFilter('recent')}
                className={cn(
                  'inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-colors',
                  spaceFilter === 'recent'
                    ? 'bg-white text-ink shadow-sm ring-1 ring-gray-200'
                    : 'text-muted hover:text-ink',
                )}
              >
                Recent <ChevronDown className="h-3.5 w-3.5" />
              </button>
            </div>

            <Link href="/spaces" className="text-sm font-medium text-ink hover:underline">
              View all spaces
            </Link>
          </div>
        </div>

        {/* Space cards */}
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {SPACES.map((s) => (
            <Link
              key={s.id}
              href="/spaces"
              className="group rounded-xl bg-white p-4 ring-1 ring-gray-100 transition-shadow hover:shadow-card"
            >
              <div className="relative inline-flex">
                <Image
                  src="/images/hero/recommendedSpacesblackBgBox.svg"
                  alt=""
                  aria-hidden
                  width={36}
                  height={36}
                  className="h-9 w-9"
                />
                <Image
                  src="/images/hero/recommendedSpacesIcon.svg"
                  alt=""
                  aria-hidden
                  width={18}
                  height={18}
                  className="absolute inset-0 m-auto h-[18px] w-[18px]"
                />
              </div>
              <p className="mt-3 truncate text-sm font-semibold text-ink">{s.name}</p>
              <p className="mt-0.5 truncate text-[10px] uppercase tracking-wide text-subtle">
                {s.category}
              </p>
              <p className="mt-1.5 text-xs text-muted">{s.tagline}</p>
            </Link>
          ))}
        </div>

        {/* Pagination dots */}
        <div className="mt-5 flex items-center justify-center gap-1.5">
          {[0, 1, 2, 3, 4].map((i) => (
            <span
              key={i}
              className={cn(
                'rounded-full transition-all',
                i === 0 ? 'h-1.5 w-5 bg-ink' : 'h-1.5 w-1.5 bg-gray-300',
              )}
            />
          ))}
        </div>
      </section>

      {/* My Task + People */}
      <section className="mt-8 grid gap-4 lg:grid-cols-[1fr_320px]">
        {/* My Task */}
        <Card className="p-5">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-semibold text-ink">My Task</h2>
            <button className="inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-ink">
              Show more <ChevronUp className="h-3.5 w-3.5" />
            </button>
          </div>

          {/* Tabs */}
          <div className="mt-4 flex gap-6 border-b border-gray-100">
            {TASK_TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setTaskTab(tab.id)}
                className={cn(
                  '-mb-px border-b-2 pb-2.5 text-sm font-medium transition-colors',
                  taskTab === tab.id
                    ? 'border-ink text-ink'
                    : 'border-transparent text-muted hover:text-ink',
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Task list */}
          {TASKS[taskTab].length === 0 ? (
            <p className="py-12 text-center text-sm text-muted">Nothing here yet.</p>
          ) : (
            <div className="mt-2 divide-y divide-gray-50">
              {TASKS[taskTab].map((t) => (
                <div
                  key={t.id}
                  className="group flex items-center justify-between gap-4 rounded-lg px-2 py-3.5 transition-colors hover:bg-gray-50"
                >
                  <div className="flex min-w-0 items-center gap-3">
                    <input
                      type="checkbox"
                      className="h-[18px] w-[18px] shrink-0 rounded-full border-2 border-gray-300 accent-ink"
                    />
                    <div className="min-w-0">
                      <p className="truncate text-sm text-muted">
                        {t.lead} <span className="font-semibold text-ink">{t.project}</span>
                        {t.suffix}
                      </p>
                      <p className="mt-0.5 text-xs text-subtle">{t.date}</p>
                    </div>
                  </div>
                  <span
                    className={cn(
                      'shrink-0 rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-wide',
                      TASK_BADGE[t.tone],
                    )}
                  >
                    {t.badge}
                  </span>
                </div>
              ))}
            </div>
          )}
        </Card>

        {/* People */}
        <Card className="p-5">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-semibold text-ink">People</h2>
            <button className="text-sm font-medium text-muted transition-colors hover:text-ink">
              View All
            </button>
          </div>
          <ul className="mt-5 space-y-5">
            {PEOPLE.map((p) => (
              <li key={p.id} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-gray-200 text-xs font-semibold text-ink">
                    {p.initial}
                  </span>
                  <p className="text-sm font-medium text-ink">{p.name}</p>
                </div>
                <span className={cn('h-2.5 w-2.5 rounded-full', p.dot)} />
              </li>
            ))}
          </ul>
        </Card>
      </section>

      {/* Activity Feed + Scratch Pad */}
      <section className="mt-4 grid gap-4 lg:grid-cols-[1fr_320px]">
        {/* Activity Feed */}
        <Card className="p-5">
          <h2 className="text-base font-semibold text-ink">Activity Feed</h2>
          <FeedGroup label="Today" items={ACTIVITY.today} />
          <FeedGroup label="Yesterday" items={ACTIVITY.yesterday} />
        </Card>

        {/* Scratch Pad */}
        <div className="relative rounded-2xl bg-amber-100 p-5 ring-1 ring-amber-200/70">
          <span className="absolute -top-2 left-6 h-4 w-4 rounded-full bg-rose-500 ring-2 ring-white" />

          <div className="flex items-center justify-between">
            <h2 className="text-base font-semibold text-ink">Scratch Pad</h2>
            <button className="inline-flex items-center gap-1 text-xs font-medium text-ink hover:underline">
              <Plus className="h-3.5 w-3.5" /> New Note
            </button>
          </div>

          <div className="mt-4 flex items-center gap-2 rounded-lg bg-white/70 px-3 py-2 ring-1 ring-amber-200/60">
            <Search className="h-3.5 w-3.5 text-amber-700/60" />
            <input
              placeholder="Search note"
              className="w-full bg-transparent text-xs text-ink placeholder:text-amber-700/50 focus:outline-none"
            />
          </div>

          <div className="mt-3 space-y-2.5">
            {NOTES.map((n) => (
              <div key={n.id} className="rounded-lg bg-amber-50/80 p-3 ring-1 ring-amber-200/60">
                <p className="text-sm font-semibold text-ink">{n.title}</p>
                <p className="mt-1 text-xs leading-relaxed text-amber-900/70">{n.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips & tricks */}
      <section className="mt-8 pb-2">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-semibold text-ink">Tips &amp; tricks</h2>
          <button className="text-sm font-medium text-muted transition-colors hover:text-ink">
            View all
          </button>
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {TIPS.map((tip) => (
            <Card key={tip.id} className="group p-4 transition-shadow hover:shadow-card">
              <div className="flex items-start justify-between">
                <div className="grid h-9 w-9 place-items-center rounded-lg bg-gray-100 text-ink">
                  <tip.icon className="h-4 w-4" />
                </div>
                <button className="grid h-7 w-7 place-items-center rounded-full bg-gray-100 text-ink transition-colors group-hover:bg-ink group-hover:text-white">
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </button>
              </div>
              <p className="mt-3 text-sm font-semibold text-ink">{tip.title}</p>
              <p className="mt-1 text-xs leading-relaxed text-muted">{tip.desc}</p>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}

// ── Activity feed group ─────────────────────────────────────────────────────

function FeedGroup({
  label,
  items,
}: {
  label: string
  items: { id: string; actor: string; text: string; date: string; time: string; tone: FeedTone }[]
}) {
  return (
    <div className="mt-4">
      <p className="text-xs font-medium text-subtle">{label}</p>
      <div className="mt-2 space-y-3">
        {items.map((item) => {
          const tone = ACTIVITY_TONE[item.tone]
          const Icon = tone.icon
          return (
            <div key={item.id} className="flex items-start gap-3">
              <span className="w-12 shrink-0 pt-0.5 text-[10px] text-subtle">{item.time}</span>
              <div className={cn('grid h-7 w-7 shrink-0 place-items-center rounded-full', tone.bg, tone.fg)}>
                <Icon className="h-3.5 w-3.5" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm text-ink">
                  <span className="font-semibold">{item.actor}</span>{' '}
                  <span className="text-muted">{item.text}</span>
                </p>
                <p className="text-[10px] text-subtle">{item.date}</p>
              </div>
              <span className={cn('shrink-0 rounded-full px-2.5 py-1 text-[10px] font-medium', tone.chip)}>
                {tone.label}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
