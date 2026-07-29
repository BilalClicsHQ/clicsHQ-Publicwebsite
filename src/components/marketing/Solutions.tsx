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
    <section className="bg-white py-14 sm:py-16">
      <div className="container-app">
        {/* Heading — Figma: medium weight, ~40px. */}
        <h2 className="text-center text-balance text-[28px] font-medium tracking-normal text-ink sm:text-[36px] lg:text-[40px]">
          Solutions for every team, powered by{' '}
          {/* Figma-measured blue-violet (#6464FF), not violet-500. */}
          <span className="text-[#6464FF]">AI</span>
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
            {/* Figma: medium weight, ~30px. */}
            <h3 className="mt-3 text-2xl font-medium leading-[1.25] text-ink sm:text-[30px]">
              {current.title}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-muted">{current.body}</p>
            <div className="mt-7">
              <CTAButton href={`/solutions/${current.id === 'pmo' ? 'operations' : current.id}`}>
                Get started
              </CTAButton>
            </div>
          </div>

          {/* Right — pre-composed "resource management" banner (blue card +
              annotation chips + dashboard, exported from Figma) */}
          <div className="relative flex items-center justify-center">
            <Image
              src="/images/hero/banner.svg"
              alt="clicsHQ resource management dashboard"
              width={615}
              height={612}
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
