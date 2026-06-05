import * as React from 'react'
import Image from 'next/image'
import {
  Check,
  Circle,
  Plus,
  MoreHorizontal,
  Sparkles,
  FileText,
  Bold,
  Italic,
  Link2,
  List,
  Bot,
  Calendar as CalendarIcon,
  Flag,
  Zap,
  ArrowRight,
} from 'lucide-react'
import { cn } from '@/lib/cn'

/**
 * In-code product "screen" mockups.
 *
 * Each product page renders its OWN distinct UI (instead of every page reusing
 * the same dashboard screenshot). These are pure Tailwind/SVG — no image files —
 * so they stay crisp at any size and match the figma/website/Product references.
 *
 * Reusable shells:
 *   <MockFrame>        — browser-chrome card (light)
 *   <MockFrameDark>    — dark app-window card (used in heroes)
 */

// ── Shells ────────────────────────────────────────────────────────────────────

export function MockFrame({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        'overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-gray-200/80',
        className,
      )}
    >
      {/* Title bar */}
      <div className="flex items-center gap-1.5 border-b border-gray-100 bg-gray-50/80 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
        <span className="ml-3 h-4 w-40 rounded bg-gray-200/70" />
      </div>
      <div className="p-4 sm:p-5">{children}</div>
    </div>
  )
}

export function MockFrameDark({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        'overflow-hidden rounded-2xl bg-[#161616] shadow-2xl ring-1 ring-black/40',
        className,
      )}
    >
      <div className="flex items-center gap-1.5 border-b border-white/5 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
      </div>
      <div className="p-4 sm:p-5">{children}</div>
    </div>
  )
}

// ── Kanban ──────────────────────────────────────────────────────────────────

const KANBAN_COLUMNS = [
  {
    name: 'To do',
    dot: 'bg-gray-400',
    cards: [
      { title: 'Research competitor pricing', tag: 'Research', tagCls: 'bg-sky-100 text-sky-700' },
      { title: 'Draft Q3 launch brief', tag: 'Marketing', tagCls: 'bg-pink-100 text-pink-700' },
    ],
  },
  {
    name: 'In progress',
    dot: 'bg-violet-500',
    cards: [
      { title: 'Build pricing page', tag: 'Design', tagCls: 'bg-violet-100 text-violet-700' },
      { title: 'API rate limiting', tag: 'Eng', tagCls: 'bg-amber-100 text-amber-700' },
    ],
  },
  {
    name: 'Done',
    dot: 'bg-emerald-500',
    cards: [{ title: 'Onboarding flow QA', tag: 'QA', tagCls: 'bg-emerald-100 text-emerald-700' }],
  },
]

export function KanbanBoardMockup({ className }: { className?: string }) {
  return (
    <MockFrame className={className}>
      <div className="grid grid-cols-3 gap-3">
        {KANBAN_COLUMNS.map((col) => (
          <div key={col.name} className="rounded-xl bg-gray-50/80 p-2.5">
            <div className="mb-2.5 flex items-center justify-between px-1">
              <span className="flex items-center gap-1.5 text-[11px] font-semibold text-ink">
                <span className={cn('h-2 w-2 rounded-full', col.dot)} />
                {col.name}
              </span>
              <Plus className="h-3 w-3 text-gray-400" />
            </div>
            <div className="space-y-2">
              {col.cards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-lg bg-white p-2.5 shadow-sm ring-1 ring-gray-100"
                >
                  <span
                    className={cn(
                      'mb-1.5 inline-block rounded-full px-1.5 py-0.5 text-[9px] font-semibold',
                      card.tagCls,
                    )}
                  >
                    {card.tag}
                  </span>
                  <p className="text-[11px] font-medium leading-snug text-ink">{card.title}</p>
                  <div className="mt-2 flex items-center justify-between">
                    <div className="flex -space-x-1.5">
                      <span className="h-4 w-4 rounded-full bg-violet-300 ring-2 ring-white" />
                      <span className="h-4 w-4 rounded-full bg-pink-300 ring-2 ring-white" />
                    </div>
                    <MoreHorizontal className="h-3 w-3 text-gray-300" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </MockFrame>
  )
}

/** Compact single-card preview for split-rows / dark tiles. */
export function KanbanCardMockup({ className }: { className?: string }) {
  return (
    <MockFrame className={className}>
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="rounded-full bg-violet-100 px-2 py-0.5 text-[10px] font-semibold text-violet-700">
            In progress
          </span>
          <MoreHorizontal className="h-4 w-4 text-gray-300" />
        </div>
        <p className="text-sm font-semibold text-ink">Build pricing page</p>
        <p className="text-xs leading-relaxed text-muted">
          Implement the three-tier pricing cards with monthly/yearly toggle.
        </p>
        <div className="flex items-center gap-2 border-t border-gray-100 pt-3">
          <span className="flex items-center gap-1 rounded-md bg-gray-50 px-2 py-1 text-[10px] text-muted">
            <CalendarIcon className="h-3 w-3" /> Jun 12
          </span>
          <span className="flex items-center gap-1 rounded-md bg-gray-50 px-2 py-1 text-[10px] text-muted">
            <Flag className="h-3 w-3 text-amber-500" /> High
          </span>
          <span className="ml-auto h-6 w-6 rounded-full bg-pink-300 ring-2 ring-white" />
        </div>
      </div>
    </MockFrame>
  )
}

// ── Docs ──────────────────────────────────────────────────────────────────────

export function DocsEditorMockup({ className }: { className?: string }) {
  return (
    <MockFrame className={className}>
      {/* Toolbar */}
      <div className="mb-4 flex items-center gap-1 rounded-lg bg-gray-50 p-1.5">
        {[Bold, Italic, Link2, List].map((Icon, i) => (
          <span key={i} className="grid h-6 w-6 place-items-center rounded text-gray-500 hover:bg-white">
            <Icon className="h-3.5 w-3.5" />
          </span>
        ))}
        <span className="ml-auto flex items-center gap-1 rounded-md bg-ink px-2 py-1 text-[10px] font-semibold text-white">
          <Sparkles className="h-3 w-3" /> Ask AI
        </span>
      </div>
      <div className="space-y-2.5">
        <div className="h-5 w-2/3 rounded bg-gray-800/90" />
        <div className="h-2.5 w-full rounded bg-gray-200" />
        <div className="h-2.5 w-11/12 rounded bg-gray-200" />
        <div className="h-2.5 w-4/5 rounded bg-gray-200" />
        <div className="my-3 flex items-start gap-2 rounded-lg bg-violet-50 p-2.5 ring-1 ring-violet-100">
          <Sparkles className="mt-0.5 h-3.5 w-3.5 shrink-0 text-violet-500" />
          <div className="space-y-1.5">
            <div className="h-2 w-40 rounded bg-violet-200" />
            <div className="h-2 w-28 rounded bg-violet-200/70" />
          </div>
        </div>
        <div className="h-2.5 w-full rounded bg-gray-200" />
        <div className="h-2.5 w-3/4 rounded bg-gray-200" />
      </div>
    </MockFrame>
  )
}

// ── Tasks ─────────────────────────────────────────────────────────────────────

const TASK_ROWS = [
  { title: 'Finalize launch checklist', who: 'bg-violet-300', status: 'Done', cls: 'bg-emerald-100 text-emerald-700', done: true },
  { title: 'Review design handoff', who: 'bg-pink-300', status: 'In progress', cls: 'bg-amber-100 text-amber-700', done: false },
  { title: 'Set up analytics events', who: 'bg-sky-300', status: 'In progress', cls: 'bg-amber-100 text-amber-700', done: false },
  { title: 'Write release notes', who: 'bg-emerald-300', status: 'To do', cls: 'bg-gray-100 text-gray-600', done: false },
]

export function TasksTableMockup({ className }: { className?: string }) {
  return (
    <MockFrame className={className}>
      <div className="mb-3 flex items-center gap-2">
        <span className="rounded-md bg-ink px-2 py-1 text-[10px] font-semibold text-white">List</span>
        <span className="rounded-md px-2 py-1 text-[10px] font-medium text-muted">Board</span>
        <span className="rounded-md px-2 py-1 text-[10px] font-medium text-muted">Calendar</span>
        <span className="ml-auto flex items-center gap-1 text-[10px] text-muted">
          <Plus className="h-3 w-3" /> New task
        </span>
      </div>
      <div className="overflow-hidden rounded-lg ring-1 ring-gray-100">
        <div className="grid grid-cols-[1.6fr_0.7fr_0.5fr] border-b border-gray-100 bg-gray-50/80 px-3 py-2 text-[10px] font-semibold text-muted">
          <span>Task</span>
          <span>Status</span>
          <span>Owner</span>
        </div>
        {TASK_ROWS.map((r) => (
          <div
            key={r.title}
            className="grid grid-cols-[1.6fr_0.7fr_0.5fr] items-center border-b border-gray-50 px-3 py-2.5 last:border-0"
          >
            <span className="flex items-center gap-2 text-[11px] text-ink">
              {r.done ? (
                <span className="grid h-3.5 w-3.5 place-items-center rounded-full bg-emerald-500 text-white">
                  <Check className="h-2.5 w-2.5" />
                </span>
              ) : (
                <Circle className="h-3.5 w-3.5 text-gray-300" />
              )}
              <span className={cn(r.done && 'text-muted line-through')}>{r.title}</span>
            </span>
            <span>
              <span className={cn('rounded-full px-1.5 py-0.5 text-[9px] font-semibold', r.cls)}>
                {r.status}
              </span>
            </span>
            <span className={cn('h-5 w-5 rounded-full', r.who)} />
          </div>
        ))}
      </div>
    </MockFrame>
  )
}

// ── Workflow automation ─────────────────────────────────────────────────────

export function WorkflowCanvasMockup({ className }: { className?: string }) {
  return (
    <MockFrame className={className}>
      <div className="flex flex-col items-center gap-0">
        <WfNode tone="trigger" label="WHEN" sub="Task moves to Done" icon={<Zap className="h-3.5 w-3.5" />} />
        <WfConnector />
        <WfNode tone="action" label="THEN" sub="Notify #team in Slack" icon={<Check className="h-3.5 w-3.5" />} />
        <WfConnector />
        <WfNode tone="action" label="THEN" sub="Create follow-up task" icon={<Plus className="h-3.5 w-3.5" />} />
      </div>
    </MockFrame>
  )
}

function WfNode({
  tone,
  label,
  sub,
  icon,
}: {
  tone: 'trigger' | 'action'
  label: string
  sub: string
  icon: React.ReactNode
}) {
  return (
    <div
      className={cn(
        'flex w-full max-w-xs items-center gap-3 rounded-xl px-3.5 py-3 ring-1',
        tone === 'trigger'
          ? 'bg-violet-50 ring-violet-200'
          : 'bg-white shadow-sm ring-gray-200',
      )}
    >
      <span
        className={cn(
          'grid h-7 w-7 shrink-0 place-items-center rounded-lg text-white',
          tone === 'trigger' ? 'bg-violet-500' : 'bg-ink',
        )}
      >
        {icon}
      </span>
      <div>
        <p className="text-[10px] font-bold uppercase tracking-wide text-muted">{label}</p>
        <p className="text-xs font-semibold text-ink">{sub}</p>
      </div>
    </div>
  )
}

function WfConnector() {
  return <span className="my-1 h-5 w-px bg-gray-200" />
}

/** Dark "WHEN / THEN" recipe card for the workflow dark-tiles section. */
export function WorkflowRecipeTile({
  when,
  then,
}: {
  when: string
  then: string
}) {
  return (
    <div className="flex flex-col gap-3 rounded-2xl bg-ink p-5 text-white">
      <div>
        <p className="text-[10px] font-bold uppercase tracking-wide text-violet-300">When</p>
        <p className="text-sm font-semibold">{when}</p>
      </div>
      <span className="h-px w-full bg-white/10" />
      <div>
        <p className="text-[10px] font-bold uppercase tracking-wide text-emerald-300">Then</p>
        <p className="text-sm font-semibold">{then}</p>
      </div>
    </div>
  )
}

// ── Integrations ──────────────────────────────────────────────────────────────

/**
 * Hero cluster — circular brand badges scattered around the clicsHQ lockup.
 * Each badge is a pastel circle (`bg`) with the brand mark (`logo`) on top.
 * Positions are percentage-based so the whole arrangement scales fluidly.
 */
const ORBIT_LOGOS = [
  { logo: '/images/tools/msTeams.svg',    bg: '/images/tools/msteambgCircle.svg',    alt: 'Microsoft Teams', pos: 'left-[19%] top-[18%]',                  size: 'h-12 w-12 sm:h-14 sm:w-14' },
  { logo: '/images/tools/dropbox.svg',    bg: '/images/tools/dropboxbgCircle.svg',   alt: 'Dropbox',         pos: 'left-[48%] top-[3%] -translate-x-1/2',   size: 'h-14 w-14 sm:h-[4.25rem] sm:w-[4.25rem]' },
  { logo: '/images/tools/Outlook.svg',    bg: '/images/tools/outlookbgCircle.svg',   alt: 'Outlook',         pos: 'right-[13%] top-[18%]',                 size: 'h-12 w-12 sm:h-14 sm:w-14' },
  { logo: '/images/tools/g-calendar.svg', bg: '/images/tools/gCallendarbgCircle.svg', alt: 'Google Calendar', pos: 'left-[6%] top-[44%]',                  size: 'h-11 w-11 sm:h-12 sm:w-12' },
  { logo: '/images/tools/Figma.svg',      bg: '/images/tools/figmabgCircle.svg',     alt: 'Figma',           pos: 'right-[5%] top-[40%]',                  size: 'h-12 w-12 sm:h-14 sm:w-14' },
  { logo: '/images/tools/g-drive.svg',    bg: '/images/tools/gDrivebgCircle.svg',    alt: 'Google Drive',    pos: 'left-[19%] bottom-[15%]',               size: 'h-12 w-12 sm:h-14 sm:w-14' },
  { logo: '/images/tools/Jira.svg',       bg: '/images/tools/jirabgCircle.svg',      alt: 'Jira',            pos: 'left-[48%] bottom-[4%] -translate-x-1/2', size: 'h-14 w-14 sm:h-[4.25rem] sm:w-[4.25rem]' },
  { logo: '/images/tools/Slack.svg',      bg: '/images/tools/slackbgCircle.svg',     alt: 'Slack',           pos: 'right-[13%] bottom-[16%]',              size: 'h-12 w-12 sm:h-14 sm:w-14' },
]

export function IntegrationOrbitMockup({ className }: { className?: string }) {
  return (
    <div className={cn('relative mx-auto aspect-square w-full max-w-md sm:max-w-lg', className)}>
      {/* Center clicsHQ lockup (icon + wordmark) */}
      <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
        <Image
          src="/images/logo/ClicsHQ_logo.svg"
          alt="clicsHQ"
          width={197}
          height={68}
          className="h-9 w-auto sm:h-11"
          priority
        />
      </div>
      {/* Floating brand badges — pastel circle + brand mark */}
      {ORBIT_LOGOS.map((l) => (
        <span
          key={l.alt}
          className={cn(
            'absolute grid place-items-center rounded-full drop-shadow-[0_10px_22px_rgba(0,0,0,0.10)]',
            l.pos,
            l.size,
          )}
        >
          <Image src={l.bg} alt="" aria-hidden fill sizes="72px" className="object-contain" />
          <Image
            src={l.logo}
            alt={l.alt}
            width={40}
            height={40}
            className="relative z-10 h-[52%] w-[52%] object-contain"
          />
        </span>
      ))}
    </div>
  )
}

export interface IntegrationItem {
  name: string
  desc: string
  logo: string
}

/** "Native integrations" 2-column card grid. */
export function IntegrationCardGrid({ items }: { items: IntegrationItem[] }) {
  return (
    <div className="mx-auto grid max-w-4xl gap-5 sm:grid-cols-2">
      {items.map((it) => (
        <div
          key={it.name}
          className="flex flex-col rounded-2xl bg-white p-5 ring-1 ring-gray-200/70 transition-shadow hover:shadow-card"
        >
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gray-50 ring-1 ring-gray-100">
              <Image src={it.logo} alt={it.name} width={28} height={28} className="h-6 w-6" />
            </span>
            <p className="text-[0.9375rem] font-semibold text-ink">{it.name}</p>
          </div>
          <p className="mt-3 text-[0.8125rem] leading-relaxed text-muted">{it.desc}</p>
          <span className="mt-3 inline-flex items-center gap-1.5 text-[0.8125rem] font-semibold text-ink">
            Learn More <ArrowRight className="h-[0.875rem] w-[0.875rem]" />
          </span>
        </div>
      ))}
    </div>
  )
}

// ── AI assists ────────────────────────────────────────────────────────────────

export function AiChatMockup({ className }: { className?: string }) {
  return (
    <MockFrameDark className={className}>
      <div className="space-y-3">
        {/* user bubble */}
        <div className="ml-auto w-3/4 rounded-2xl rounded-tr-sm bg-white/10 px-3 py-2 text-[11px] text-white/80">
          Summarize what shipped this week across the team.
        </div>
        {/* AI bubble */}
        <div className="flex gap-2">
          <span className="grid h-6 w-6 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-fuchsia-500 to-violet-500">
            <Sparkles className="h-3.5 w-3.5 text-white" />
          </span>
          <div className="w-4/5 space-y-1.5 rounded-2xl rounded-tl-sm bg-white/5 px-3 py-2.5">
            <div className="h-2 w-full rounded bg-white/20" />
            <div className="h-2 w-11/12 rounded bg-white/15" />
            <div className="h-2 w-3/5 rounded bg-white/15" />
            <div className="mt-2 flex gap-1.5">
              <span className="rounded-full bg-violet-500/30 px-2 py-0.5 text-[9px] text-violet-200">3 docs</span>
              <span className="rounded-full bg-emerald-500/30 px-2 py-0.5 text-[9px] text-emerald-200">5 tasks</span>
            </div>
          </div>
        </div>
        <div className="mt-2 flex items-center gap-2 rounded-xl bg-white/5 px-3 py-2">
          <span className="h-2 w-32 rounded bg-white/20" />
          <span className="ml-auto grid h-6 w-6 place-items-center rounded-lg bg-white/10">
            <Sparkles className="h-3 w-3 text-white/60" />
          </span>
        </div>
      </div>
    </MockFrameDark>
  )
}

export interface AiAgent {
  name: string
  desc: string
  tone: 'violet' | 'pink' | 'sky' | 'amber' | 'emerald' | 'fuchsia'
}

const AGENT_TONES = {
  violet: 'bg-violet-100 text-violet-600',
  pink: 'bg-pink-100 text-pink-600',
  sky: 'bg-sky-100 text-sky-600',
  amber: 'bg-amber-100 text-amber-600',
  emerald: 'bg-emerald-100 text-emerald-600',
  fuchsia: 'bg-fuchsia-100 text-fuchsia-600',
} as const

/** "Deploy AI agents for every team" — 6-card grid. */
export function AiAgentGrid({ agents }: { agents: AiAgent[] }) {
  return (
    <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {agents.map((a) => (
        <div
          key={a.name}
          className="rounded-2xl bg-white p-4 ring-1 ring-gray-100 transition-shadow hover:shadow-card"
        >
          <span className={cn('grid h-10 w-10 place-items-center rounded-xl', AGENT_TONES[a.tone])}>
            <Bot className="h-5 w-5" />
          </span>
          <p className="mt-3 text-sm font-semibold text-ink">{a.name}</p>
          <p className="mt-1 text-xs leading-relaxed text-muted">{a.desc}</p>
        </div>
      ))}
    </div>
  )
}

/** Small "three ways to work" tile used in the AI intro trio. */
export function AiWayTile({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode
  title: string
  desc: string
}) {
  return (
    <div className="rounded-2xl bg-white p-5 text-center ring-1 ring-gray-100">
      <span className="mx-auto grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-fuchsia-100 to-violet-100 text-violet-600">
        {icon}
      </span>
      <p className="mt-3 text-sm font-semibold text-ink">{title}</p>
      <p className="mt-1 text-xs leading-relaxed text-muted">{desc}</p>
    </div>
  )
}

// Re-export icons commonly used by AI page tiles so pages don't re-import.
export { Sparkles as AiChatIcon, Bot as AiAgentIcon, FileText as AiDocIcon }
