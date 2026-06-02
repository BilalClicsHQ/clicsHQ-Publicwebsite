'use client'

import * as React from 'react'
import Image from 'next/image'
import { CTAButton } from './CTAButton'
import { cn } from '@/lib/cn'

type SolutionId = 'pmo' | 'marketing' | 'sales' | 'it' | 'product'

interface Solution {
  id: SolutionId
  tab: string
  eyebrow: string
  title: string
  body: string
}

const SOLUTIONS: Solution[] = [
  {
    id: 'pmo',
    tab: 'PMO & Ops',
    eyebrow: 'Resource management.',
    title: 'Comprehensive Resource Management and Optimization',
    body: 'Resource management is the process of pre-planning, scheduling, and allocating your resources to maximize efficiency.',
  },
  {
    id: 'marketing',
    tab: 'Marketing',
    eyebrow: 'Campaign delivery.',
    title: 'Launch campaigns faster with one connected workspace',
    body: 'Plan briefs, track creatives, align approvals, and measure outcomes — all without leaving clicsHQ.',
  },
  {
    id: 'sales',
    tab: 'Sales & Revenue',
    eyebrow: 'Pipeline visibility.',
    title: 'Close more deals with a single source of truth',
    body: 'Track opportunities, automate hand-offs, and keep your CRM in sync with the work that actually moves revenue.',
  },
  {
    id: 'it',
    tab: 'IT & Support',
    eyebrow: 'Service operations.',
    title: 'Resolve issues fast with structured workflows',
    body: 'Triage tickets, automate routing, and document fixes so your team can scale support without chaos.',
  },
  {
    id: 'product',
    tab: 'Product & Engineering',
    eyebrow: 'Build to ship.',
    title: 'Move from idea to release on one connected platform',
    body: 'Connect specs, roadmaps, sprints, and incidents so engineers spend less time switching tools.',
  },
]

export function Solutions() {
  const [active, setActive] = React.useState<SolutionId>('pmo')
  const current = SOLUTIONS.find((s) => s.id === active) ?? SOLUTIONS[0]

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="container-app">
        {/* Heading */}
        <h2 className="heading-lg text-center text-balance">
          Solutions for every team, powered by{' '}
          <span className="text-violet-500">AI</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-base text-muted">
          Keep your teams aligned and work moving with purpose-built solutions for every
          function, connected on one intelligent platform
        </p>

        {/* Tabs */}
        <div className="mt-10 overflow-x-auto">
          <div className="mx-auto flex w-fit min-w-full justify-center border-b border-gray-100">
            {SOLUTIONS.map((s) => (
              <button
                key={s.id}
                onClick={() => setActive(s.id)}
                className={cn(
                  '-mb-px whitespace-nowrap border-b-2 px-5 py-3 text-sm font-medium transition-colors',
                  active === s.id
                    ? 'border-ink text-ink'
                    : 'border-transparent text-muted hover:text-ink',
                )}
              >
                {s.tab}
              </button>
            ))}
          </div>
        </div>

        {/* Split card */}
        <div className="mt-12 grid overflow-hidden rounded-3xl bg-gray-100 lg:grid-cols-2">
          {/* Left — text */}
          <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-14">
            <p className="text-xs text-muted">{current.eyebrow}</p>
            <h3 className="mt-3 text-2xl font-bold leading-tight text-ink sm:text-3xl">
              {current.title}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-muted">{current.body}</p>
            <div className="mt-7">
              <CTAButton href={`/solutions/${current.id === 'pmo' ? 'operations' : current.id}`}>
                Get started
              </CTAButton>
            </div>
          </div>

          {/* Right — preview on vibrant blue radial-ish gradient */}
          <div className="relative overflow-hidden bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-600 p-6 sm:p-10">
            {/* Soft radial glow center */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  'radial-gradient(ellipse at center, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 60%)',
              }}
            />

            {/* Annotation chips — star + label, white pills */}
            <AnnotationChip className="left-4 top-5"    color="pink"    label="Create plan" />
            <AnnotationChip className="right-4 top-5"   color="amber"   label="Research competitors" />
            <AnnotationChip className="left-5 bottom-5" color="violet"  label="Update timeline" />
            <AnnotationChip className="right-5 bottom-5" color="emerald" label="Create Task" />
            <AnnotationChip className="left-12 top-1/2 -translate-y-1/2" color="sky" label="Summary" />
            <AnnotationChip className="right-12 top-1/2 -translate-y-1/2" color="rose" label="Check Status" />

            <div className="relative mx-auto max-w-md overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-white/30">
              <Image
                src="/images/dashboards/ClicshqPage.svg"
                alt="clicsHQ dashboard"
                width={1580}
                height={910}
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Annotation chip ──

const CHIP_STAR_COLOR: Record<string, string> = {
  pink:    'text-pink-500',
  amber:   'text-amber-500',
  violet:  'text-violet-500',
  emerald: 'text-emerald-500',
  sky:     'text-sky-500',
  rose:    'text-rose-500',
}

function AnnotationChip({
  className,
  color,
  label,
}: {
  className?: string
  color: keyof typeof CHIP_STAR_COLOR
  label: string
}) {
  return (
    <div
      className={cn(
        'pointer-events-none absolute hidden items-center gap-1.5 rounded-md bg-white px-2 py-1 text-2xs font-medium text-ink shadow-md sm:flex',
        className,
      )}
    >
      <svg viewBox="0 0 12 12" className={cn('h-3 w-3 fill-current', CHIP_STAR_COLOR[color])}>
        <path d="M6 0l1.5 4.5L12 5l-3.5 3 1 4.5L6 10l-3.5 2.5 1-4.5L0 5l4.5-.5L6 0z" />
      </svg>
      {label}
    </div>
  )
}
