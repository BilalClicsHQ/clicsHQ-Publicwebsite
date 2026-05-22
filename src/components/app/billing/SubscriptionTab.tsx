'use client'

import * as React from 'react'
import { Minus, Plus, Check, Star } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/cn'
import { useComingSoon } from '@/components/app/ComingSoon'

type Cycle = 'monthly' | 'yearly'

interface Plan {
  id: string
  name: string
  monthly: string
  yearly: string
  period: string
  tagline: string
  cta: string
  highlighted?: boolean
  featuresTitle: string
  features: string[]
}

const PLANS: Plan[] = [
  {
    id: 'individuals',
    name: 'Individuals',
    monthly: '$0', yearly: '$0', period: 'per month/user',
    tagline: 'Good for individuals who are just starting out and simply want the essentials.',
    cta: 'Choose Plan',
    featuresTitle: 'Free, forever:',
    features: ['1 user', 'Unlimited calendars', 'Unlimited event types', 'Workflows', 'Integrate with your favorite apps', 'Accept payments via Stripe'],
  },
  {
    id: 'teams',
    name: 'Teams',
    monthly: '$12', yearly: '$115', period: 'per month/user',
    tagline: 'Highly recommended for small teams who seek to upgrade their time & perform.',
    cta: 'Get Started',
    highlighted: true,
    featuresTitle: 'Free plan features, plus:',
    features: ['1 team', 'Schedule meetings as a team', 'Round-Robin, Fixed Round-Robin', 'Collective Events', 'Advance Routing Forms', 'Team Workflows'],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    monthly: '$15k', yearly: '$150k', period: 'per year',
    tagline: 'Robust scheduling for larger teams looking to have more control, privacy & security.',
    cta: 'Choose Plan',
    featuresTitle: 'Organization plan features, plus:',
    features: ['1 parent team and unlimited sub-teams', 'Organization workflows', 'Insights — analyze your booking data', 'Active directory sync', '24/7 Email, Chat and Phone support', 'Sync your HRIS tools'],
  },
]

export function SubscriptionTab() {
  const comingSoon = useComingSoon()
  const [cycle, setCycle] = React.useState<Cycle>('monthly')
  const [seats, setSeats] = React.useState(2)

  return (
    <div>
      <div className="text-center max-w-xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold text-ink">Simple and affordable pricing</h1>
        <p className="mt-2 text-sm text-muted">Affordable plans for organization of every stage, shape, and size.</p>
      </div>

      {/* Seats + cycle */}
      <div className="mt-6 flex flex-wrap items-center justify-center gap-6">
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-ink">Seats:</span>
          <div className="flex items-center rounded-lg ring-1 ring-gray-200">
            <button onClick={() => setSeats((s) => Math.max(1, s - 1))} className="h-8 w-8 grid place-items-center hover:bg-gray-50 rounded-l-lg">
              <Minus className="h-3.5 w-3.5 text-ink" />
            </button>
            <span className="w-8 text-center text-sm text-ink">{seats}</span>
            <button onClick={() => setSeats((s) => s + 1)} className="h-8 w-8 grid place-items-center hover:bg-gray-50 rounded-r-lg">
              <Plus className="h-3.5 w-3.5 text-ink" />
            </button>
          </div>
        </div>

        <div className="inline-flex items-center rounded-full bg-gray-100 p-1">
          {(['monthly', 'yearly'] as Cycle[]).map((c) => (
            <button
              key={c}
              onClick={() => setCycle(c)}
              className={cn(
                'px-4 py-1.5 rounded-full text-xs font-medium capitalize transition-colors',
                cycle === c ? 'bg-ink text-white' : 'text-muted hover:text-ink',
              )}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Plans */}
      <div className="mt-10 grid lg:grid-cols-3 gap-5 max-w-5xl mx-auto items-start">
        {PLANS.map((plan) => (
          <div
            key={plan.id}
            className={cn(
              'relative rounded-2xl p-6 ring-1',
              plan.highlighted ? 'bg-white ring-gray-200 shadow-xl lg:-mt-3 lg:mb-3' : 'bg-white ring-gray-100',
            )}
          >
            {plan.highlighted && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-ink px-3 py-1 text-2xs font-bold text-white">
                <Star className="h-3 w-3 fill-amber-400 text-amber-400" /> Most Popular
              </span>
            )}
            <h3 className="text-base font-semibold text-ink">{plan.name}</h3>
            <p className="mt-3 text-xs text-muted">Starts at</p>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-bold text-ink">{cycle === 'monthly' ? plan.monthly : plan.yearly}</span>
              <span className="text-xs text-muted">{plan.period}</span>
            </div>
            <p className="mt-2 text-xs text-muted leading-relaxed">{plan.tagline}</p>

            <Button
              variant={plan.highlighted ? 'primary' : 'secondary'}
              className="mt-4 w-full"
              onClick={() => comingSoon(`${plan.name} plan`)}
            >
              {plan.cta}
            </Button>

            <p className="mt-5 text-xs font-medium text-ink">{plan.featuresTitle}</p>
            <ul className="mt-3 space-y-2.5">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-xs text-muted">
                  <Check className="h-3.5 w-3.5 text-ink shrink-0 mt-0.5" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
