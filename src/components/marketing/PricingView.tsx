'use client'

import * as React from 'react'
import { Check } from 'lucide-react'
import { cn } from '@/lib/cn'
import { FinalCTAMountain } from './shared/FinalCTAMountain'
import { Footer } from './Footer'

// ── Types & data ──────────────────────────────────────────────────────────────

type Cycle = 'monthly' | 'yearly'
type CtaStyle = 'filled' | 'outlined'

interface Plan {
  id: 'individual' | 'teams' | 'enterprise'
  name: string
  price: string
  period: string
  description: string
  cta: string
  ctaStyle: CtaStyle
  popular: boolean
  headerLabel: string
  features: string[]
  /** SVG card-background asset (lives in /public/icons/). */
  bg: string
}

const PLANS: Plan[] = [
  {
    id: 'individual',
    name: 'Individuals',
    price: '$0',
    period: 'per month/user',
    description:
      'Good for individuals who are just starting out and simply want the essentials.',
    cta: 'Choose Plan',
    ctaStyle: 'outlined',
    popular: false,
    headerLabel: 'Free, forever:',
    features: [
      '1 user',
      'Unlimited calendars',
      'Unlimited event types',
      'Workflows',
      'Integrate with your favorite apps',
      'Accept payments via Stripe',
    ],
    bg: '/icons/indivisual.svg',
  },
  {
    id: 'teams',
    name: 'Teams',
    price: '$12',
    period: 'per month/user',
    description:
      'Highly recommended for small teams who seek to upgrade their time & perform.',
    cta: 'Get Started',
    ctaStyle: 'filled',
    popular: true,
    headerLabel: 'Free plan features, plus:',
    features: [
      '1 team',
      'Schedule meetings as a team',
      'Round-Robin, Fixed Round-Robin',
      'Collective Events',
      'Advance Routing Forms',
      'Team Workflows',
    ],
    bg: '/icons/teamsBilling.svg',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: '$15k',
    period: 'per year',
    description:
      'Robust scheduling for larger teams looking to have more control, privacy & security.',
    cta: 'Choose Plan',
    ctaStyle: 'outlined',
    popular: false,
    headerLabel: 'Organization plan features, plus:',
    features: [
      '1 parent team and unlimited sub-teams',
      'Organization workflows',
      'Insights - analyze your booking data',
      'Active directory sync',
      '24/7 Email, Chat and Phone support',
      'Sync your HRIS tools',
    ],
    bg: '/icons/enterprise.svg',
  },
]

interface FAQ {
  q: string
  a: string
}

const FAQS: FAQ[] = [
  {
    q: 'Who is this for?',
    a: 'This is designed for individuals and teams who want a clean, simple way to manage work and track progress without extra complexity.',
  },
  {
    q: 'What does this help with?',
    a: 'It helps you organize tasks, manage projects, automate workflows, and collaborate with your team efficiently.',
  },
  {
    q: 'Can I switch between monthly and yearly billing?',
    a: 'Yes, you can switch between monthly and yearly billing at any time from your subscription settings.',
  },
  {
    q: 'Do you offer support?',
    a: 'Yes, we offer email support for all plans and priority support for Teams and Enterprise plans.',
  },
]

// ── View ────────────────────────────────────────────────────────────────────

export function PricingView() {
  const [billingCycle, setBillingCycle] = React.useState<Cycle>('monthly')
  const [seats, setSeats] = React.useState(2)
  const [openFaq, setOpenFaq] = React.useState<number | null>(null)
  const [selectedPlan, setSelectedPlan] = React.useState<string>('')

  return (
    <main className="bg-white">
      <div className="mx-auto w-full max-w-[1300px] px-6 py-8">
        {/* ── Heading ── */}
        <div className="text-center">
          <h1
            className="text-balance"
            style={{
              fontFamily: 'Satoshi, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(32px, 5vw, 48px)',
              lineHeight: '100%',
              letterSpacing: '0.02em',
              color: '#000',
            }}
          >
            Simple and affordable pricing
          </h1>
          <p
            className="mx-auto max-w-xl"
            style={{
              fontFamily: 'Manrope, Satoshi, sans-serif',
              fontWeight: 400,
              fontSize: '18px',
              color: '#000',
              opacity: 0.6,
              marginTop: '16px',
            }}
          >
            Affordable plans for organization of every stage, shape, and size
          </p>
        </div>

        {/* ── Controls row: Seats (left) + Toggle (center) + arrow callout ── */}
        <div className="relative mb-6 mt-10 flex w-full flex-col items-center justify-center gap-6 lg:flex-row">
          {/* Seats counter — absolute-left on desktop, inline on mobile */}
          <div className="flex items-center gap-3 lg:absolute lg:left-0">
            <span style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: '20px' }}>
              Seats:
            </span>
            <div className="flex items-center overflow-hidden rounded-lg border" style={{ borderColor: '#E5E7EB' }}>
              <button
                type="button"
                onClick={() => setSeats((s) => Math.max(1, s - 1))}
                aria-label="Decrease seats"
                className="grid place-items-center transition-colors hover:bg-[#FAFAFA]"
                style={{ width: 40, height: 40, fontSize: 18, color: '#666' }}
              >
                −
              </button>
              <span
                className="grid place-items-center border-x"
                style={{
                  width: 44,
                  height: 40,
                  borderColor: '#E5E7EB',
                  fontFamily: 'Satoshi, sans-serif',
                  fontWeight: 500,
                  fontSize: 16,
                  color: '#222',
                }}
              >
                {seats}
              </span>
              <button
                type="button"
                onClick={() => setSeats((s) => Math.min(100, s + 1))}
                aria-label="Increase seats"
                className="grid place-items-center transition-colors hover:bg-[#FAFAFA]"
                style={{ width: 40, height: 40, fontSize: 18, color: '#666' }}
              >
                +
              </button>
            </div>
          </div>

          {/* Toggle pill — nudged right on desktop so it sits over the middle card */}
          <div className="flex items-start lg:ml-[300px]">
            <div
              className="flex items-center"
              style={{
                width: 244,
                height: 63,
                borderRadius: 40,
                padding: 8,
                background: '#EFEFEF',
              }}
            >
              {(['monthly', 'yearly'] as Cycle[]).map((c) => {
                const active = billingCycle === c
                return (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setBillingCycle(c)}
                    className="h-full flex-1 capitalize transition-colors"
                    style={{
                      borderRadius: 32,
                      fontFamily: 'Satoshi, sans-serif',
                      fontWeight: 500,
                      fontSize: 16,
                      background: active ? '#000' : 'transparent',
                      color: active ? '#fff' : '#666',
                    }}
                  >
                    {c}
                  </button>
                )
              })}
            </div>

            {/* Arrow + "great choice" callout — hidden on small screens.
                Arrow on the left, handwriting to its RIGHT on the same line
                (the arrow points → toward the text). */}
            <div className="pointer-events-none ml-3 hidden flex-row items-center lg:flex">
              <img
                src="/icons/arow.svg"
                alt=""
                aria-hidden
                style={{
                  width: 101,
                  height: 38,
                  transform: 'rotate(-15.26deg)',
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontFamily: '"Caveat", cursive',
                  fontStyle: 'italic',
                  fontWeight: 400,
                  fontSize: 32,
                  color: '#000',
                  transform: 'rotate(-14.52deg)',
                  transformOrigin: 'left center',
                  // Sit just to the right of the arrow tip, same line.
                  marginLeft: 12,
                  whiteSpace: 'nowrap',
                }}
              >
                -20
              </span>
            </div>
          </div>
        </div>

        {/* ── Pricing cards ── */}
        <div className="mt-6 flex flex-col items-center justify-center gap-8 lg:flex-row lg:items-center lg:gap-0">
          {PLANS.map((plan) => (
            <PlanCard
              key={plan.id}
              plan={plan}
              selected={selectedPlan === plan.id}
              onSelect={() => setSelectedPlan(plan.id)}
            />
          ))}
        </div>

        {/* ── FAQ ── */}
        <div className="mx-auto mb-12 mt-20 w-full">
          <h2
            className="text-center"
            style={{
              fontFamily: 'Satoshi, sans-serif',
              fontWeight: 700,
              fontSize: 32,
              color: '#000',
              marginBottom: 32,
            }}
          >
            Frequently Asked Questions
          </h2>
          <div className="mx-auto max-w-3xl space-y-4">
            {FAQS.map((faq, i) => {
              const open = openFaq === i
              return (
                <div
                  key={i}
                  className="overflow-hidden"
                  style={{ border: '1px solid #E5E7EB', borderRadius: 16 }}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(open ? null : i)}
                    aria-expanded={open}
                    className="flex w-full items-center justify-between gap-4 text-left"
                    style={{ padding: '20px 24px' }}
                  >
                    <span
                      style={{
                        fontFamily: 'Satoshi, sans-serif',
                        fontWeight: 600,
                        fontSize: 18,
                        color: '#111',
                      }}
                    >
                      {faq.q}
                    </span>
                    <span
                      aria-hidden
                      style={{ fontSize: 24, color: '#666', fontWeight: 300, lineHeight: 1 }}
                    >
                      {open ? '−' : '+'}
                    </span>
                  </button>
                  {open && (
                    <div
                      className="animate-fade-up"
                      style={{
                        padding: '0 24px 20px',
                        fontFamily: 'Satoshi, sans-serif',
                        fontWeight: 400,
                        fontSize: 15,
                        color: '#666',
                        lineHeight: 1.7,
                      }}
                    >
                      {faq.a}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <FinalCTAMountain
        align="center"
        title="Turn your growth ideas into reality today"
        subtitle="Start your 14-day Pro trial today. No credit card required."
        primaryLabel="Start for free"
        secondaryLabel="Get a demo"
      />

      <Footer />
    </main>
  )
}

// SVG inset ratios — position the content overlay over the inner white card
// area of each background SVG (the SVG already draws the rounded card + tint +
// pattern + shadow; content is laid over its inner region).
const INSET = {
  popular: { top: 31 / 922, side: 41 / 590, bottom: 51 / 922 },
  normal: { top: 21 / 724, side: 31 / 462, bottom: 41 / 724 },
}

// ── Plan card ─────────────────────────────────────────────────────────────────

function PlanCard({
  plan,
  selected,
  onSelect,
}: {
  plan: Plan
  selected: boolean
  onSelect: () => void
}) {
  const isPopular = plan.popular
  const inset = isPopular ? INSET.popular : INSET.normal
  const width = isPopular ? 470 : 370

  return (
    <div
      onClick={onSelect}
      className={cn('relative w-full', isPopular && 'z-10 lg:-mx-4')}
      style={{ maxWidth: width }}
    >
      {/* The SVG is the full card art (rounded card + tint + grid + shadow). */}
      <img
        src={plan.bg}
        alt=""
        aria-hidden
        className="block w-full select-none"
        style={{ borderRadius: 24, boxShadow: selected ? '0 0 0 2px #000' : undefined }}
      />

      {/* "Most Popular" badge — straddles the top edge of the Teams card */}
      {isPopular && (
        <img
          src="/icons/mostpopular.svg"
          alt="Most Popular"
          className="pointer-events-none absolute select-none"
          style={{ left: '50%', top: `${inset.top * 100}%`, transform: 'translate(-50%, -50%)', zIndex: 10, width: 230, height: 'auto' }}
        />
      )}

      {/* Content overlay — inset to the SVG's inner white card area */}
      <div
        className="absolute flex flex-col"
        style={{
          top: `${inset.top * 100}%`,
          left: `${inset.side * 100}%`,
          right: `${inset.side * 100}%`,
          bottom: `${inset.bottom * 100}%`,
          padding: isPopular ? '58px 26px 22px' : '20px 20px 16px',
        }}
      >
        {/* Plan name */}
        <h3 style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: isPopular ? 26 : 22, color: '#1a1a1a' }}>
          {plan.name}
        </h3>

        {/* "Starts at" caption */}
        <p style={{ fontSize: 13, color: '#555', marginTop: 4 }}>Starts at</p>

        {/* Price + period */}
        <div className="flex items-baseline gap-1.5" style={{ marginTop: 2 }}>
          <span style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: isPopular ? 48 : 40, color: '#111', lineHeight: 1 }}>
            {plan.price}
          </span>
          <span style={{ fontSize: isPopular ? 15 : 14, color: '#555' }}>{plan.period}</span>
        </div>

        {/* Description */}
        <p className="text-left" style={{ fontSize: isPopular ? 14 : 13, color: '#555', lineHeight: 1.5, marginTop: 10, marginBottom: isPopular ? 18 : 14 }}>
          {plan.description}
        </p>

        {/* CTA */}
        <button
          type="button"
          className={cn(
            'w-full transition-colors',
            plan.ctaStyle === 'filled'
              ? 'bg-black text-white hover:bg-gray-800'
              : 'border border-gray-300 bg-white/70 text-gray-800 hover:bg-white',
          )}
          style={{ padding: `${isPopular ? 13 : 11}px 0`, borderRadius: 12, fontSize: isPopular ? 15 : 14, fontWeight: 600 }}
        >
          {plan.cta}
        </button>

        {/* Features */}
        <div style={{ borderTop: '1px solid #E5E7EB', marginTop: isPopular ? 20 : 16, paddingTop: isPopular ? 18 : 14 }}>
          <p style={{ fontSize: isPopular ? 15 : 13, fontWeight: 600, color: '#222', marginBottom: isPopular ? 14 : 10 }}>{plan.headerLabel}</p>
          <ul className="flex flex-col" style={{ gap: isPopular ? 12 : 9 }}>
            {plan.features.map((f) => (
              <li key={f} className="flex items-start" style={{ gap: 10 }}>
                <Check className="shrink-0 text-green-500" style={{ width: isPopular ? 18 : 16, height: isPopular ? 18 : 16, marginTop: 1 }} />
                <span style={{ fontSize: isPopular ? 15 : 13, color: '#333', lineHeight: 1.4 }}>{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
