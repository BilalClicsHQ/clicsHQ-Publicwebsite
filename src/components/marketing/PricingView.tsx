'use client'

import * as React from 'react'
import Image from 'next/image'
import { Check, Minus, Plus, Star, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/cn'
import { CTAButton } from './CTAButton'

// ── Data ────────────────────────────────────────────────────────────────────

type Cycle = 'monthly' | 'yearly'

interface Plan {
  id: 'individuals' | 'teams' | 'enterprises'
  name: string
  tagline: string
  monthly: string
  yearly: string
  period: string
  highlighted?: boolean
  cta: string
  featuresTitle: string
  features: string[]
}

const PLANS: Plan[] = [
  {
    id: 'individuals',
    name: 'Individuals',
    tagline: 'Good for individuals who are just starting out and simply want the essentials.',
    monthly: '$0', yearly: '$0', period: 'per month/user',
    cta: 'Choose Plan',
    featuresTitle: 'Free, forever:',
    features: ['1 user', 'Unlimited calendars', 'Unlimited event types', 'Workflows', 'Integrate with your favorite apps', 'Accept payments via Stripe'],
  },
  {
    id: 'teams',
    name: 'Teams',
    tagline: 'Highly recommended for small teams who seek to upgrade their time & perform.',
    monthly: '$12', yearly: '$115', period: 'per month/user',
    cta: 'Get Started',
    highlighted: true,
    featuresTitle: 'Free plan features, plus:',
    features: ['1 team', 'Schedule meetings as a team', 'Round-Robin, Fixed Round-Robin', 'Collective Events', 'Advance Routing Forms', 'Team Workflows'],
  },
  {
    id: 'enterprises',
    name: 'Enterprises',
    tagline: 'Robust scheduling for larger teams looking to have more control, privacy & security.',
    monthly: '$15k', yearly: '$150k', period: 'per year',
    cta: 'Choose Plan',
    featuresTitle: 'Organization plan features, plus:',
    features: ['1 parent team and unlimited sub-teams', 'Organization workflows', 'Insights — analyze your booking data', 'Active directory sync', '24/7 Email, Chat and Phone support', 'Sync your HRIS tools'],
  },
]

// Compare-plans matrix
interface CompareRow { label: string; individuals: boolean; teams: boolean; enterprises: boolean }
interface CompareSection { title: string; rows: CompareRow[] }

const COMPARE_SECTIONS: CompareSection[] = [
  {
    title: 'Integrations',
    rows: [
      { label: 'HTTP API integrations',         individuals: false, teams: true,  enterprises: true },
      { label: 'CRM integrations',              individuals: false, teams: true,  enterprises: true },
      { label: 'Connect to data warehouses',    individuals: false, teams: true,  enterprises: true },
    ],
  },
  {
    title: 'Workflow',
    rows: [
      { label: 'HTTP API integrations',         individuals: false, teams: true,  enterprises: true },
      { label: 'CRM integrations',              individuals: false, teams: true,  enterprises: true },
      { label: 'Connect to data warehouses',    individuals: false, teams: true,  enterprises: true },
    ],
  },
  {
    title: 'Customer success',
    rows: [
      { label: 'HTTP API integrations',         individuals: false, teams: true,  enterprises: true },
      { label: 'CRM integrations',              individuals: false, teams: true,  enterprises: true },
      { label: 'Connect to data warehouses',    individuals: false, teams: true,  enterprises: true },
    ],
  },
]

interface FAQ { q: string; a: string }

const FAQS: FAQ[] = [
  {
    q: 'Who is this for?',
    a: 'It’s designed for individuals and teams who want a clean, simple way to manage work and track progress without extra complexity.',
  },
  {
    q: 'What does this help with?',
    a: 'Plan projects, track tasks, collaborate with your team, and automate repeat work — all in one place.',
  },
  {
    q: 'Can I switch between monthly and yearly billing?',
    a: 'Yes, you can change your billing cycle anytime from your account settings.',
  },
  {
    q: 'Do you offer support?',
    a: 'Yes — every plan includes support. Teams and Enterprises plans get priority and 24/7 channels.',
  },
]

// ── View ────────────────────────────────────────────────────────────────────

export function PricingView() {
  const [cycle, setCycle] = React.useState<Cycle>('monthly')
  const [seats, setSeats] = React.useState(2)

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="container-app pt-14 pb-8 text-center sm:pt-20">
        <h1 className="mx-auto max-w-3xl text-balance text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
          Simple and affordable pricing
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-sm text-muted sm:text-base">
          Affordable plans for organization of every stage, shape, and size.
        </p>

        {/* Seats + cycle */}
        <div className="mt-7 flex flex-wrap items-center justify-center gap-6">
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-ink">Seats:</span>
            <div className="flex items-center overflow-hidden rounded-lg ring-1 ring-gray-200">
              <button
                onClick={() => setSeats((s) => Math.max(1, s - 1))}
                className="grid h-8 w-8 place-items-center text-ink transition-colors hover:bg-gray-50"
              >
                <Minus className="h-3.5 w-3.5" />
              </button>
              <span className="w-8 text-center text-sm font-medium text-ink">{seats}</span>
              <button
                onClick={() => setSeats((s) => s + 1)}
                className="grid h-8 w-8 place-items-center text-ink transition-colors hover:bg-gray-50"
              >
                <Plus className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          <div className="inline-flex items-center rounded-full bg-gray-100 p-0.5">
            {(['monthly', 'yearly'] as Cycle[]).map((c) => (
              <button
                key={c}
                onClick={() => setCycle(c)}
                className={cn(
                  'rounded-full px-4 py-1.5 text-xs font-medium capitalize transition-colors',
                  cycle === c ? 'bg-ink text-white shadow' : 'text-muted hover:text-ink',
                )}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="container-app pb-12">
        <div className="mx-auto grid max-w-5xl gap-5 lg:grid-cols-3 items-start">
          {PLANS.map((plan) => (
            <PlanCard key={plan.id} plan={plan} cycle={cycle} />
          ))}
        </div>
      </section>

      {/* Compare plans */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="container-app">
          <h2 className="text-center text-2xl font-bold text-ink sm:text-3xl">Compare plans</h2>

          <div className="mx-auto mt-10 max-w-5xl overflow-hidden rounded-2xl bg-white ring-1 ring-gray-100">
            {/* Column headers */}
            <div className="grid grid-cols-[1.6fr_1fr_1fr_1fr] border-b border-gray-100 px-5 py-4 text-sm font-semibold text-ink">
              <span>Functionality</span>
              <span className="text-center">Individuals</span>
              <span className="text-center">Teams</span>
              <span className="text-center">Enterprises</span>
            </div>

            {COMPARE_SECTIONS.map((section) => (
              <React.Fragment key={section.title}>
                <div className="grid grid-cols-[1.6fr_1fr_1fr_1fr] border-b border-gray-50 bg-gray-50/60 px-5 py-2.5 text-sm font-semibold text-ink">
                  <span>{section.title}</span>
                  <span /><span /><span />
                </div>
                {section.rows.map((row, i) => (
                  <div
                    key={`${section.title}-${i}`}
                    className="grid grid-cols-[1.6fr_1fr_1fr_1fr] items-center border-b border-gray-50 px-5 py-3 text-sm last:border-0"
                  >
                    <span className="text-muted">{row.label}</span>
                    <Dot on={row.individuals} />
                    <Dot on={row.teams} />
                    <Dot on={row.enterprises} />
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-app py-16 sm:py-20">
        <h2 className="text-center text-2xl font-bold text-ink sm:text-3xl">
          Frequently Asked Questions
        </h2>

        <div className="mx-auto mt-10 max-w-3xl space-y-3">
          {FAQS.map((faq, i) => (
            <FAQItem key={i} {...faq} />
          ))}
        </div>
      </section>
    </main>
  )
}

// ── Plan card ──

function PlanCard({ plan, cycle }: { plan: Plan; cycle: Cycle }) {
  const price = cycle === 'monthly' ? plan.monthly : plan.yearly

  return (
    <div
      className={cn(
        'relative rounded-2xl p-6 ring-1 transition-shadow',
        plan.highlighted
          ? 'lg:-mt-3 lg:mb-3 bg-white ring-gray-200 shadow-xl'
          : 'bg-white ring-gray-100',
      )}
    >
      {plan.highlighted && (
        <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1 rounded-full bg-ink px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
          <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
          Most Popular
        </span>
      )}

      {/* Soft accent gradient at top of highlighted card */}
      {plan.highlighted && (
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-0 h-32 rounded-t-2xl bg-gradient-to-b from-violet-100/70 via-pink-50/40 to-transparent" />
      )}

      <h3 className="relative text-base font-semibold text-ink">{plan.name}</h3>
      <p className="relative mt-3 text-xs text-muted">Starts at</p>
      <div className="relative flex items-baseline gap-1">
        <span className="text-4xl font-bold tracking-tight text-ink">{price}</span>
        <span className="text-xs text-muted">{plan.period}</span>
      </div>
      <p className="relative mt-2 text-xs leading-relaxed text-muted">{plan.tagline}</p>

      <CTAButton
        variant={plan.highlighted ? 'primary' : 'secondary'}
        className="relative mt-4 w-full"
        href="/signup"
      >
        {plan.cta}
      </CTAButton>

      <p className="relative mt-5 text-xs font-semibold text-ink">{plan.featuresTitle}</p>
      <ul className="relative mt-3 space-y-2.5">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-xs text-muted">
            <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-ink" />
            {f}
          </li>
        ))}
      </ul>
    </div>
  )
}

// ── Compare-plans dot ──

function Dot({ on }: { on: boolean }) {
  return (
    <span className="flex items-center justify-center">
      {on ? (
        <span className="grid h-5 w-5 place-items-center rounded-full bg-ink text-white">
          <Check className="h-3 w-3" />
        </span>
      ) : (
        <span className="h-5 w-5 rounded-full bg-gray-200" />
      )}
    </span>
  )
}

// ── FAQ item ──

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = React.useState(false)
  return (
    <div className="rounded-xl bg-white ring-1 ring-gray-100 transition-shadow hover:shadow-card">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <span className="text-sm font-medium text-ink">{q}</span>
        <ChevronDown
          className={cn(
            'h-4 w-4 shrink-0 text-muted transition-transform',
            open && 'rotate-180',
          )}
        />
      </button>
      {open && (
        <div className="px-5 pb-5 text-sm leading-relaxed text-muted animate-fade-up">
          {a}
        </div>
      )}
    </div>
  )
}
