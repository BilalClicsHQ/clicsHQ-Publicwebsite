'use client'

import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown, Plug, LayoutGrid, GanttChart, ListChecks, Sparkles, FileText, Calendar, Workflow } from 'lucide-react'
import { cn } from '@/lib/cn'

interface FeatureItem {
  id: string
  icon: React.ElementType
  title: string
  desc: string
  href: string
}

const FEATURES: FeatureItem[] = [
  { id: 'integrations', icon: Plug,       title: 'Integrations', desc: 'Connect with 100+ tools you already use.',  href: '/product/integrations' },
  { id: 'kanban',       icon: LayoutGrid, title: 'Kanban Board', desc: 'Visualize your team’s work in columns.', href: '/product/kanban' },
  { id: 'gantt',        icon: GanttChart, title: 'Gantt Chart',  desc: 'Plan timelines and track dependencies.',     href: '/product/gantt' },
  { id: 'tasks',        icon: ListChecks, title: 'Tasks',        desc: 'Create and assign tasks to your team.',      href: '/product/tasks' },
  { id: 'ai',           icon: Sparkles,   title: 'AI assists',   desc: 'Let AI plan and report on your projects.',   href: '/product/ai' },
  { id: 'docs',         icon: FileText,   title: 'Docs',         desc: 'Write rich documents alongside your work.',  href: '/product/docs' },
  { id: 'calendar',     icon: Calendar,   title: 'Calendar',     desc: 'See deadlines and events on a calendar.',    href: '/product/calendar' },
  { id: 'workflows',    icon: Workflow,   title: 'Workflows',    desc: 'Automate the boring parts of project ops.',  href: '/product/workflows' },
]

const NAV_LINKS = [
  { label: 'Solutions', href: '/solutions' },
  { label: 'Resources', href: '/resources' },
  { label: 'Pricing',   href: '/pricing' },
]

export function Navbar() {
  const [openProduct, setOpenProduct] = React.useState(false)
  const closeTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setOpenProduct(true)
  }
  const handleLeave = () => {
    closeTimer.current = setTimeout(() => setOpenProduct(false), 120)
  }

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-gray-100">
      <div className="container-app flex h-16 items-center justify-between gap-6">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/images/logo/ClicsHQ_logo.svg"
            alt="clicsHQ"
            width={120}
            height={40}
            priority
            className="h-9 w-auto"
          />
        </Link>

        {/* Center nav */}
        <nav className="hidden md:flex items-center gap-1">
          {/* Product (with dropdown) */}
          <div
            className="relative"
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
          >
            <button
              onClick={() => setOpenProduct((v) => !v)}
              className={cn(
                'inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                openProduct ? 'text-ink bg-gray-50' : 'text-ink/80 hover:text-ink',
              )}
              aria-expanded={openProduct}
            >
              Product
              <ChevronDown className={cn('h-3.5 w-3.5 transition-transform', openProduct && 'rotate-180')} />
            </button>

            {openProduct && (
              <div className="absolute left-1/2 top-full mt-2 -translate-x-1/2 w-[560px] rounded-2xl bg-white p-5 shadow-2xl ring-1 ring-gray-100 animate-fade-up">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted">Features</p>
                <div className="mt-3 grid grid-cols-2 gap-x-6 gap-y-1">
                  {FEATURES.map((f) => (
                    <Link
                      key={f.id}
                      href={f.href}
                      className="group flex items-start gap-3 rounded-lg p-2.5 transition-colors hover:bg-gray-50"
                    >
                      <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-gray-100 text-ink transition-colors group-hover:bg-ink group-hover:text-white">
                        <f.icon className="h-4 w-4" />
                      </span>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-ink">{f.title}</p>
                        <p className="truncate text-xs text-muted">{f.desc}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-ink/80 transition-colors hover:text-ink"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          <Link
            href="/demo"
            className="hidden sm:inline-flex h-9 items-center rounded-lg px-3 text-sm font-medium text-ink/80 transition-colors hover:text-ink"
          >
            Demo
          </Link>
          <Link
            href="/login"
            className="hidden sm:inline-flex h-9 items-center rounded-lg border border-gray-200 bg-white px-4 text-sm font-medium text-ink transition-colors hover:bg-gray-50"
          >
            Log in
          </Link>
          <Link
            href="/signup"
            className="inline-flex h-9 items-center rounded-lg bg-ink px-4 text-sm font-semibold text-white transition-colors hover:bg-black"
          >
            Sign up
          </Link>
        </div>
      </div>
    </header>
  )
}
