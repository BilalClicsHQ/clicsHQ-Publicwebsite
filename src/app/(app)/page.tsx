import type { Metadata } from 'next'
import Image from 'next/image'
import {
  Plus,
  ChevronDown,
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
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/Tabs'

export const metadata: Metadata = { title: 'Home' }

const SPACES = [
  { id: 's1', name: 'GTM Launch',     category: 'Software project', tagline: 'Popular with marketing team' },
  { id: 's2', name: 'Product Roadmap', category: 'Product board',    tagline: 'Popular with marketing team' },
  { id: 's3', name: 'Design System',  category: 'Design project',    tagline: 'Popular with marketing team' },
  { id: 's4', name: 'Backend API',    category: 'Software project',  tagline: 'Popular with marketing team' },
  { id: 's5', name: 'GTM Launch',     category: 'Software project',  tagline: 'Popular with marketing team' },
]

type TaskTab = 'assigned' | 'due' | 'overdue' | 'completed'

const TASKS = {
  assigned: [
    { id: 't1', title: 'Jackie Kun mentioned you at', project: 'Kleon Projects', date: 'Monday, June 21 2020', badge: 'IN PROGRESS', tone: 'progress' as const },
    { id: 't2', title: '[REMINDER] Due date of', project: 'Highspeed Studios Projects', suffix: ' te task will be coming', date: 'Monday, June 21 2020', badge: 'REVIEW', tone: 'review' as const },
    { id: 't3', title: 'Olivia Johanna has created new task at', project: 'Kleon Projects', date: 'Monday, June 21 2020', badge: 'TO DO', tone: 'todo' as const },
    { id: 't4', title: 'Jackie Kun mentioned you at', project: 'Kleon Projects', date: 'Monday, June 21 2020', badge: 'IN PROGRESS', tone: 'progress' as const },
    { id: 't5', title: '[REMINDER] Due date of', project: 'Highspeed Studios Projects', suffix: ' te task will be coming', date: 'Monday, June 21 2020', badge: 'REVIEW', tone: 'review' as const },
  ],
  due: [],
  overdue: [],
  completed: [],
}

const PEOPLE = [
  { id: 'p1', name: 'Bilal Ahmed',    initial: 'B', circle: '/images/hero/greenCircle.svg'  },
  { id: 'p2', name: 'Sarah Chen',     initial: 'S', circle: '/images/hero/redCircle.svg'    },
  { id: 'p3', name: 'Marcus Johnson', initial: 'M', circle: '/images/hero/yellowCircle.svg' },
]

const BADGE_TONE: Record<string, string> = {
  progress: 'bg-rose-100 text-rose-700 ring-rose-200/60',
  review:   'bg-amber-100 text-amber-700 ring-amber-200/60',
  todo:     'bg-yellow-50 text-amber-700 ring-amber-200/40',
}

type FeedTone = 'progress' | 'review' | 'completed'

const ACTIVITY_TONE: Record<FeedTone, { icon: typeof Zap; bg: string; fg: string; label: string; chip: string }> = {
  progress:  { icon: Zap,          bg: 'bg-info-soft',    fg: 'text-info-fg',    label: 'In Progress', chip: 'bg-info-soft text-info-fg' },
  review:    { icon: AlertCircle,  bg: 'bg-warning-soft', fg: 'text-warning-fg', label: 'Review',      chip: 'bg-warning-soft text-warning-fg' },
  completed: { icon: CheckCircle2, bg: 'bg-success-soft', fg: 'text-success-fg', label: 'Completed',   chip: 'bg-success-soft text-success-fg' },
}

const ACTIVITY = {
  today: [
    { id: 'a1', actor: 'Jackie Kun', text: 'mentioned you at Kleon Projects', date: 'Monday, June 27 2020', time: '2m ago',  tone: 'progress' as FeedTone },
    { id: 'a2', actor: '[REMINDER]', text: 'Due date of Highspeed Studios Projects te task will be coming', date: 'Monday, June 27 2020', time: '6m ago',  tone: 'review' as FeedTone },
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

export default function HomePage() {
  return (
    <div className="relative">
      {/* Decorative leaves — left side near greeting */}
      <Image
        src="/images/hero/leaves.svg"
        alt=""
        aria-hidden
        width={220}
        height={220}
        className="pointer-events-none select-none absolute -top-2 left-2 opacity-90 hidden md:block"
      />
      {/* Decorative stars cluster — right side near greeting */}
      <Image
        src="/images/hero/stars.svg"
        alt=""
        aria-hidden
        width={160}
        height={160}
        className="pointer-events-none select-none absolute -top-2 right-4 opacity-90 hidden md:block"
      />

      {/* Greeting */}
      <div className="relative text-center pt-8 pb-10">
        <h1 className="text-3xl sm:text-[34px] font-bold tracking-tight text-ink">Good evening, Bilal!</h1>
        <p className="mt-1 text-sm text-muted">Welcome back to clicsHQ</p>
      </div>

      {/* Recommended spaces */}
      <section>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-sm font-medium text-ink">Recommended spaces:</h2>
          <div className="flex items-center gap-2">
            <Button size="sm" className="gap-1.5"><Plus className="h-3.5 w-3.5" />Create member</Button>
            <Button size="sm" className="gap-1.5">Recent <ChevronDown className="h-3.5 w-3.5" /></Button>
            <button className="text-sm font-medium text-ink hover:underline">View all spaces</button>
          </div>
        </div>

        <div className="mt-4 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {SPACES.map((s) => (
            <Card key={s.id} className="p-4 group hover:shadow-md transition-shadow cursor-pointer">
              <div className="relative inline-block">
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
                  className="h-4 w-4 absolute inset-0 m-auto"
                />
              </div>
              <p className="mt-3 text-sm font-semibold text-ink">{s.name}</p>
              <p className="mt-0.5 text-2xs text-muted uppercase tracking-wide">{s.category}</p>
              <p className="mt-1.5 text-xs text-muted">{s.tagline}</p>
            </Card>
          ))}
        </div>

        {/* Pagination dots */}
        <div className="mt-4 flex items-center justify-center gap-1.5">
          {[0, 1, 2, 3, 4].map((i) => (
            <span key={i} className={i === 0 ? 'h-1.5 w-4 rounded-full bg-ink' : 'h-1.5 w-1.5 rounded-full bg-gray-300'} />
          ))}
        </div>
      </section>

      {/* My Task + People */}
      <section className="mt-8 grid lg:grid-cols-[1fr_320px] gap-4">
        {/* My Task */}
        <Card className="p-5">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-semibold text-ink">My Task</h2>
            <button className="inline-flex items-center gap-1 text-sm text-muted hover:text-ink">
              Show more
              <Image src="/images/hero/showMore.svg" alt="" aria-hidden width={14} height={14} />
            </button>
          </div>

          <Tabs defaultValue="assigned" className="mt-4">
            <TabsList>
              <TabsTrigger value="assigned">Assigned to me</TabsTrigger>
              <TabsTrigger value="due">Due soon</TabsTrigger>
              <TabsTrigger value="overdue">Overdue</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
            </TabsList>

            {(['assigned', 'due', 'overdue', 'completed'] as TaskTab[]).map((tab) => (
              <TabsContent key={tab} value={tab}>
                {TASKS[tab].length === 0 ? (
                  <p className="text-sm text-muted py-8 text-center">Nothing here yet.</p>
                ) : (
                  <div className="space-y-2">
                    {TASKS[tab].map((t) => (
                      <div key={t.id} className="flex items-center justify-between gap-4 rounded-xl px-4 py-3 hover:bg-surface-alt transition-colors">
                        <div className="flex items-center gap-3 min-w-0">
                          <input type="checkbox" className="h-4 w-4 rounded-full border-gray-300" />
                          <div className="min-w-0">
                            <p className="text-sm text-ink truncate">
                              {t.title} <span className="font-medium text-ink">{t.project}</span>{(t as any).suffix || ''}
                            </p>
                            <p className="text-xs text-muted mt-0.5">{t.date}</p>
                          </div>
                        </div>
                        <span className={`shrink-0 inline-flex items-center px-3 py-1 rounded-full text-2xs font-semibold ring-1 ring-inset ${BADGE_TONE[t.tone]}`}>
                          {t.badge}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </Card>

        {/* People */}
        <Card className="p-5">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-semibold text-ink">People</h2>
            <button className="text-sm font-medium text-muted hover:text-ink">View All</button>
          </div>
          <ul className="mt-5 space-y-4">
            {PEOPLE.map((p) => (
              <li key={p.id} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-gray-200 text-ink text-xs font-semibold">
                    {p.initial}
                  </span>
                  <p className="text-sm text-ink">{p.name}</p>
                </div>
                <Image src={p.circle} alt="" aria-hidden width={12} height={12} className="h-3 w-3" />
              </li>
            ))}
          </ul>
        </Card>
      </section>

      {/* Activity Feed + Scratch Pad */}
      <section className="mt-4 grid lg:grid-cols-[1fr_320px] gap-4">
        {/* Activity Feed */}
        <Card className="p-5">
          <h2 className="text-base font-semibold text-ink">Activity Feed</h2>

          <FeedGroup label="Today" items={ACTIVITY.today} />
          <FeedGroup label="Yesterday" items={ACTIVITY.yesterday} />
        </Card>

        {/* Scratch Pad */}
        <div className="relative rounded-2xl bg-amber-100 p-5 ring-1 ring-amber-200/70">
          {/* Pin */}
          <span className="absolute -top-2 left-6 h-4 w-4 rounded-full bg-rose-500 ring-2 ring-white" />

          <div className="flex items-center justify-between">
            <h2 className="text-base font-semibold text-ink">Scratch Pad</h2>
            <button className="inline-flex items-center gap-1 text-xs font-medium text-ink hover:underline">
              <Plus className="h-3.5 w-3.5" /> New Note
            </button>
          </div>

          {/* Search */}
          <div className="mt-4 flex items-center gap-2 rounded-lg bg-white/70 px-3 py-2 ring-1 ring-amber-200/60">
            <Search className="h-3.5 w-3.5 text-amber-700/60" />
            <input
              placeholder="Search note"
              className="w-full bg-transparent text-xs text-ink placeholder:text-amber-700/50 focus:outline-none"
            />
          </div>

          {/* Notes */}
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
      <section className="mt-8">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-semibold text-ink">Tips &amp; tricks</h2>
          <button className="text-sm font-medium text-muted hover:text-ink">View all</button>
        </div>

        <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {TIPS.map((tip) => (
            <Card key={tip.id} className="group p-4 hover:shadow-md transition-shadow">
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
              <span className="w-12 shrink-0 pt-0.5 text-2xs text-subtle">{item.time}</span>
              <div className={`grid h-7 w-7 shrink-0 place-items-center rounded-full ${tone.bg} ${tone.fg}`}>
                <Icon className="h-3.5 w-3.5" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm text-ink">
                  <span className="font-semibold">{item.actor}</span>{' '}
                  <span className="text-muted">{item.text}</span>
                </p>
                <p className="text-2xs text-subtle">{item.date}</p>
              </div>
              <span className={`shrink-0 rounded-full px-2.5 py-1 text-2xs font-medium ${tone.chip}`}>
                {tone.label}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
