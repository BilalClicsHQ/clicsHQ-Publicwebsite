'use client'

import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/cn'

const SOL = '/images/solutions'

interface FeatureItem {
  id: string
  iconSrc?: string
  lucideIcon?: React.ElementType
  title: string
  desc: string
  href: string
}

interface SolutionItem {
  id: string
  iconSrc: string
  title: string
  desc: string
  href: string
}

// Product dropdown — 3 columns × 3 rows (8 items + 1 empty slot in Figma)
const FEATURES: FeatureItem[] = [
  { id: 'integrations', iconSrc: '/images/navbar/integrations.svg', title: 'Integrations', desc: 'Connect with 100+ tools you already use',     href: '/product/integrations' },
  { id: 'kanban',       iconSrc: '/images/navbar/kanban.svg',       title: 'Kanban Board', desc: 'Workflows with smart automation',             href: '/product/kanban' },
  { id: 'gantt',        iconSrc: '/images/navbar/gantt.svg',        title: 'Gantt Chart',  desc: 'Workflows with smart automation',             href: '/product/gantt' },
  { id: 'tasks',        iconSrc: '/images/navbar/task.svg',         title: 'Tasks',        desc: 'Track performance and insights in real Time', href: '/product/tasks' },
  { id: 'ai',           iconSrc: '/images/navbar/ai-assists.svg',   title: 'Ai assists',   desc: 'Leverage Ai to supercharge your pipline',     href: '/product/ai' },
  { id: 'docs',         iconSrc: '/images/navbar/docs.svg',         title: 'Docs',         desc: 'Workflows with smart automation',             href: '/product/docs' },
  { id: 'calendar',     iconSrc: '/images/navbar/calender.svg',     title: 'Calendar',     desc: 'Track performance and insights in real Time', href: '/product/calendar' },
  { id: 'workflows',    iconSrc: '/images/navbar/workflows.svg',    title: 'Workflows',    desc: 'Leverage Ai to supercharge your pipline',     href: '/product/workflows' },
]

// Solutions dropdown — Teams column + Company type (two columns)
const SOLUTIONS_TEAMS: SolutionItem[] = [
  { id: 'operations',  iconSrc: `${SOL}/operations.svg`,     title: 'Operations',  desc: 'Connect with 100+ tools you already use',     href: '/solutions/operations'  },
  { id: 'marketing',   iconSrc: `${SOL}/marketing.svg`,      title: 'Marketing',   desc: 'Track performance and insights in real Time', href: '/solutions/marketing'   },
  { id: 'engineering', iconSrc: `${SOL}/engineering.svg`,    title: 'Engineering', desc: 'Track performance and insights in real Time', href: '/solutions/engineering' },
  { id: 'sales',       iconSrc: `${SOL}/sales.svg`,          title: 'Sales',       desc: 'Track performance and insights in real Time', href: '/solutions/sales'       },
]

const SOLUTIONS_COMPANY_A: SolutionItem[] = [
  { id: 'startup',    iconSrc: `${SOL}/startup.svg`,        title: 'Startup',        desc: 'Workflows with smart automation',         href: '/solutions/startup'        },
  { id: 'small-biz',  iconSrc: `${SOL}/small-business.svg`, title: 'Small Business', desc: 'Leverage Ai to supercharge your pipline', href: '/solutions/small-business' },
  { id: 'nonprofit',  iconSrc: `${SOL}/nonprofit.svg`,      title: 'Non profit',     desc: 'Leverage Ai to supercharge your pipline', href: '/solutions/nonprofits'     },
]

const SOLUTIONS_COMPANY_B: SolutionItem[] = [
  { id: 'gantt', iconSrc: `${SOL}/gantt.svg`, title: 'Gantt Chart', desc: 'Workflows with smart automation', href: '/product/gantt' },
  { id: 'docs',  iconSrc: `${SOL}/docs.svg`,  title: 'Docs',        desc: 'Workflows with smart automation', href: '/product/docs'  },
]

const NAV_LINKS = [
  { label: 'Resources', href: '/resources' },
  { label: 'Pricing',   href: '/pricing' },
]

type DropdownKey = 'product' | 'solutions' | null

export function Navbar() {
  const [openMenu, setOpenMenu] = React.useState<DropdownKey>(null)
  const closeTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null)
  const productRef = React.useRef<HTMLDivElement | null>(null)
  const solutionsRef = React.useRef<HTMLDivElement | null>(null)

  const openHandler = (which: DropdownKey) => () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setOpenMenu(which)
  }
  const closeHandler = () => {
    closeTimer.current = setTimeout(() => setOpenMenu(null), 120)
  }

  // Close on click-outside
  React.useEffect(() => {
    if (!openMenu) return
    const handler = (e: MouseEvent) => {
      const target = e.target as Node
      const isInProduct = productRef.current?.contains(target)
      const isInSolutions = solutionsRef.current?.contains(target)
      if (!isInProduct && !isInSolutions) setOpenMenu(null)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [openMenu])

  // Close on Escape
  React.useEffect(() => {
    if (!openMenu) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenMenu(null)
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [openMenu])

  // Cleanup pending timer on unmount
  React.useEffect(
    () => () => {
      if (closeTimer.current) clearTimeout(closeTimer.current)
    },
    [],
  )

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70">
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
        <nav className="hidden items-center gap-1 md:flex">
          {/* Product dropdown */}
          <div
            ref={productRef}
            className="relative"
            onMouseEnter={openHandler('product')}
            onMouseLeave={closeHandler}
          >
            <button
              onClick={() => setOpenMenu(openMenu === 'product' ? null : 'product')}
              className={cn(
                'inline-flex items-center gap-1 rounded-lg px-3 py-2 text-[15px] font-medium transition-colors',
                openMenu === 'product' ? 'bg-gray-50 text-ink' : 'text-ink/80 hover:text-ink',
              )}
              aria-expanded={openMenu === 'product'}
            >
              Product
              <ChevronDown
                className={cn('h-3.5 w-3.5 transition-transform', openMenu === 'product' && 'rotate-180')}
              />
            </button>

            {openMenu === 'product' && (
              <div
                role="menu"
                className="absolute left-1/2 top-full z-50 mt-3 w-[760px] -translate-x-1/2 rounded-2xl bg-white p-3 shadow-2xl ring-1 ring-gray-100 animate-fade-up"
                onMouseEnter={openHandler('product')}
                onMouseLeave={closeHandler}
              >
                <div className="rounded-lg bg-gray-100 px-3 py-2">
                  <p className="text-xs font-semibold text-ink/80">Features</p>
                </div>
                <div className="mt-1 grid grid-cols-3 gap-x-2 gap-y-1 p-2">
                  {FEATURES.map((f) => {
                    const LucideIcon = f.lucideIcon
                    return (
                      <Link
                        key={f.id}
                        href={f.href}
                        role="menuitem"
                        onClick={() => setOpenMenu(null)}
                        className="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-gray-50 hover:ring-1 hover:ring-gray-200 focus-visible:bg-gray-50 focus-visible:outline-none"
                      >
                        <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center">
                          {f.iconSrc ? (
                            <Image src={f.iconSrc} alt="" aria-hidden width={40} height={40} className="h-10 w-10" />
                          ) : LucideIcon ? (
                            <span className="grid h-10 w-10 place-items-center rounded-lg bg-gray-100 text-ink">
                              <LucideIcon className="h-5 w-5" />
                            </span>
                          ) : null}
                        </span>
                        <div className="min-w-0 pt-0.5">
                          <p className="text-sm font-semibold text-ink">{f.title}</p>
                          <p className="text-[11px] leading-snug text-muted">{f.desc}</p>
                        </div>
                      </Link>
                    )
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Solutions dropdown */}
          <div
            ref={solutionsRef}
            className="relative"
            onMouseEnter={openHandler('solutions')}
            onMouseLeave={closeHandler}
          >
            <button
              onClick={() => setOpenMenu(openMenu === 'solutions' ? null : 'solutions')}
              className={cn(
                'inline-flex items-center gap-1 rounded-lg px-3 py-2 text-[15px] font-medium transition-colors',
                openMenu === 'solutions' ? 'bg-gray-50 text-ink' : 'text-ink/80 hover:text-ink',
              )}
              aria-expanded={openMenu === 'solutions'}
            >
              Solutions
              <ChevronDown
                className={cn('h-3.5 w-3.5 transition-transform', openMenu === 'solutions' && 'rotate-180')}
              />
            </button>

            {openMenu === 'solutions' && (
              <div
                role="menu"
                className="absolute left-1/2 top-full z-50 mt-3 w-[760px] -translate-x-1/2 rounded-2xl bg-white p-3 shadow-2xl ring-1 ring-gray-100 animate-fade-up"
                onMouseEnter={openHandler('solutions')}
                onMouseLeave={closeHandler}
              >
                <div className="rounded-lg bg-gray-100 px-3 py-2">
                  <p className="text-xs font-semibold text-ink/80">Solutions</p>
                </div>
                <div className="mt-1 grid grid-cols-3 gap-x-2 p-2">
                  {/* Teams */}
                  <div>
                    <p className="px-3 pb-1 text-sm text-subtle">Teams</p>
                    <ul>
                      {SOLUTIONS_TEAMS.map((s) => (
                        <SolutionRow key={s.id} item={s} onClick={() => setOpenMenu(null)} />
                      ))}
                    </ul>
                  </div>
                  {/* Company type (spans two columns) */}
                  <div>
                    <p className="px-3 pb-1 text-sm text-subtle">Company type</p>
                    <ul>
                      {SOLUTIONS_COMPANY_A.map((s) => (
                        <SolutionRow key={s.id} item={s} onClick={() => setOpenMenu(null)} />
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="px-3 pb-1 text-sm text-transparent" aria-hidden>.</p>
                    <ul>
                      {SOLUTIONS_COMPANY_B.map((s) => (
                        <SolutionRow key={s.id} item={s} onClick={() => setOpenMenu(null)} />
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>

          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-lg px-3 py-2 text-[15px] font-medium text-ink/80 transition-colors hover:text-ink"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          <Link
            href="/demo"
            className="hidden h-10 items-center rounded-lg px-3 text-[15px] font-medium text-ink/80 transition-colors hover:text-ink sm:inline-flex"
          >
            Demo
          </Link>
          <Link
            href="/login"
            className="hidden h-10 items-center rounded-lg border border-gray-200 bg-white px-4 text-[15px] font-medium text-ink transition-colors hover:bg-gray-50 sm:inline-flex"
          >
            Log in
          </Link>
          <Link
            href="/signup"
            className="inline-flex h-10 items-center rounded-lg bg-ink px-4 text-[15px] font-semibold text-white transition-colors hover:bg-black"
          >
            Sign up
          </Link>
        </div>
      </div>
    </header>
  )
}

function SolutionRow({ item, onClick }: { item: SolutionItem; onClick: () => void }) {
  return (
    <li>
      <Link
        href={item.href}
        role="menuitem"
        onClick={onClick}
        className="group flex items-start gap-3 rounded-xl p-2.5 transition-colors hover:bg-gray-50 focus-visible:bg-gray-50 focus-visible:outline-none"
      >
        <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center">
          <Image src={item.iconSrc} alt="" aria-hidden width={36} height={36} className="h-9 w-9" />
        </span>
        <div className="min-w-0 pt-0.5">
          <p className="text-sm font-semibold text-ink">{item.title}</p>
          <p className="text-[11px] leading-snug text-muted">{item.desc}</p>
        </div>
      </Link>
    </li>
  )
}
