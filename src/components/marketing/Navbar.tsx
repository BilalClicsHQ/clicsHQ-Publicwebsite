'use client'

import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown, ListChecks, Calendar as CalendarIcon } from 'lucide-react'
import { cn } from '@/lib/cn'

interface FeatureItem {
  id: string
  /** Path to a colored SVG icon. Falls back to `lucideIcon` if omitted. */
  iconSrc?: string
  /** Lucide icon used when no SVG asset is available yet. */
  lucideIcon?: React.ElementType
  title: string
  desc: string
  href: string
}

// Order matches the Figma dropdown grid (3 columns × 3 rows in Figma — 8 items).
const FEATURES: FeatureItem[] = [
  { id: 'integrations', iconSrc: '/images/navbar/integrations.svg', title: 'Integrations', desc: 'Connect with 100+ tools you already use',     href: '/product/integrations' },
  { id: 'kanban',       iconSrc: '/images/navbar/kanban.svg',       title: 'Kanban Board', desc: 'Workflows with smart automation',             href: '/product/kanban' },
  { id: 'gantt',        iconSrc: '/images/navbar/gantt.svg',        title: 'Gantt Chart',  desc: 'Workflows with smart automation',             href: '/product/gantt' },
  { id: 'tasks',        lucideIcon: ListChecks,                      title: 'Tasks',        desc: 'Track performance and insights in real Time', href: '/product/tasks' },
  { id: 'ai',           iconSrc: '/images/navbar/ai-assists.svg',   title: 'Ai assists',   desc: 'Leverage Ai to supercharge your pipline',     href: '/product/ai' },
  { id: 'docs',         iconSrc: '/images/navbar/docs.svg',         title: 'Docs',         desc: 'Workflows with smart automation',             href: '/product/docs' },
  { id: 'calendar',     lucideIcon: CalendarIcon,                    title: 'Calendar',     desc: 'Track performance and insights in real Time', href: '/product/calendar' },
  { id: 'workflows',    iconSrc: '/images/navbar/workflows.svg',    title: 'Workflows',    desc: 'Leverage Ai to supercharge your pipline',     href: '/product/workflows' },
]

const NAV_LINKS = [
  { label: 'Solutions', href: '/solutions' },
  { label: 'Resources', href: '/resources' },
  { label: 'Pricing',   href: '/pricing' },
]

export function Navbar() {
  const [openProduct, setOpenProduct] = React.useState(false)
  const closeTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null)
  const productRef = React.useRef<HTMLDivElement | null>(null)

  const handleEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setOpenProduct(true)
  }
  const handleLeave = () => {
    closeTimer.current = setTimeout(() => setOpenProduct(false), 120)
  }

  // Close on click-outside (keyboard nav users + tablets)
  React.useEffect(() => {
    if (!openProduct) return
    const handler = (e: MouseEvent) => {
      if (productRef.current && !productRef.current.contains(e.target as Node)) {
        setOpenProduct(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [openProduct])

  // Close on Escape key
  React.useEffect(() => {
    if (!openProduct) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenProduct(false)
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [openProduct])

  // Cleanup pending timer on unmount
  React.useEffect(() => () => { if (closeTimer.current) clearTimeout(closeTimer.current) }, [])

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-gray-100">
      <div className="container-app flex h-16 items-center justify-between gap-6">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/images/logo/clicshq-logo.png"
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
            ref={productRef}
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
              <div
                role="menu"
                className="absolute left-1/2 top-full z-50 mt-3 w-[760px] -translate-x-1/2 rounded-2xl bg-white p-3 shadow-2xl ring-1 ring-gray-100 animate-fade-up"
                onMouseEnter={handleEnter}
                onMouseLeave={handleLeave}
              >
                {/* Features banner */}
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
                        onClick={() => setOpenProduct(false)}
                        className="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-gray-50 hover:ring-1 hover:ring-gray-200 focus-visible:bg-gray-50 focus-visible:outline-none"
                      >
                        <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center">
                          {f.iconSrc ? (
                            <Image
                              src={f.iconSrc}
                              alt=""
                              aria-hidden
                              width={40}
                              height={40}
                              className="h-10 w-10"
                            />
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
