'use client'

import * as React from 'react'
import Image from 'next/image'
import { Phone, PlayCircle, DollarSign } from 'lucide-react'
import { CTAButton } from './CTAButton'

const HELP_OPTIONS = [
  {
    icon: Phone,
    title: 'Schedule a call',
    body: 'Book a 15 minute discovery session with our sales team to learn more about Clics.',
    iconBg: 'bg-blue-500',
  },
  {
    icon: PlayCircle,
    title: 'Customized demo',
    body: 'We’ll help you get started in Clics with a demo session tailored to your needs.',
    iconBg: 'bg-orange-500',
  },
  {
    icon: DollarSign,
    title: 'Pricing questions',
    body: 'Need a quote or want to talk about Clics plans? We can help.',
    iconBg: 'bg-emerald-500',
  },
]

export function DemoView() {
  const [submitted, setSubmitted] = React.useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Backend not wired yet — show a success state and reset.
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <main className="min-h-[calc(100vh-4rem)] bg-white">
      <div className="grid lg:grid-cols-[1fr_1.1fr]">
        {/* Left — dark intro panel */}
        <section className="relative overflow-hidden bg-ink px-8 py-16 text-white sm:px-12 lg:px-16 lg:py-24">
          {/* Subtle dark stage pattern */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-25"
            style={{
              backgroundImage: 'url(/images/hero/dark-stage.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />

          <div className="relative">
            <h1 className="text-3xl font-bold leading-tight text-balance sm:text-4xl lg:text-5xl">
              Request a meeting with our team
            </h1>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/70">
              Fill out your information and we’ll be in touch ASAP.
              Have a question about Hive functionality? Check out
              our Help Desk.
            </p>

            <ul className="mt-10 space-y-6">
              {HELP_OPTIONS.map((opt) => (
                <li key={opt.title} className="flex items-start gap-4">
                  <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-lg ${opt.iconBg} text-white shadow-lg`}>
                    <opt.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">{opt.title}</p>
                    <p className="mt-1 max-w-sm text-xs leading-relaxed text-white/60">{opt.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Right — form */}
        <section className="px-8 py-16 sm:px-12 lg:px-16 lg:py-24">
          <form onSubmit={handleSubmit} className="mx-auto max-w-lg space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <Field label="First Name" required>
                <input type="text" placeholder="John" className={inputCls} required />
              </Field>
              <Field label="Last Name" required>
                <input type="text" placeholder="Smith" className={inputCls} required />
              </Field>
            </div>

            <Field label="Company Name" required>
              <input type="text" className={inputCls} required />
            </Field>

            <Field label="Company Size" required>
              <select className={`${inputCls} appearance-none bg-no-repeat bg-[length:16px] bg-[right_12px_center]`} style={{ backgroundImage: 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'16\' height=\'16\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%236B7280\' stroke-width=\'2\'><polyline points=\'6 9 12 15 18 9\'/></svg>")' }} required>
                <option value="">11</option>
                <option value="1-10">1-10</option>
                <option value="11-50">11-50</option>
                <option value="51-200">51-200</option>
                <option value="201-500">201-500</option>
                <option value="500+">500+</option>
              </select>
            </Field>

            <Field label="Phone Number" required>
              <div className="flex">
                <span className="inline-flex h-10 items-center gap-1 rounded-l-lg border border-r-0 border-gray-200 bg-white px-3 text-xs text-ink">
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-gradient-to-br from-emerald-500 via-white to-rose-500 text-[8px]">🇵🇰</span>
                  ▼
                </span>
                <input type="tel" defaultValue="+971" className={`${inputCls} rounded-l-none`} required />
              </div>
            </Field>

            <Field label="How can Clics help?" required>
              <textarea
                rows={4}
                placeholder="Here’s what I’m interested in using Clics for…"
                className={`${inputCls} min-h-[120px] resize-none py-2.5`}
                required
              />
            </Field>

            <div className="pt-2">
              <CTAButton type="submit">
                {submitted ? 'Sent ✓' : 'Submit'}
              </CTAButton>
            </div>

            <p className="pt-4 text-xs leading-relaxed text-muted">
              By completing and submitting this form, I confirm that I have read and
              understood the Hive{' '}
              <a href="/legal/privacy" className="underline">Privacy Policy</a>.
            </p>
          </form>
        </section>
      </div>
    </main>
  )
}

// ── Form primitives ──

const inputCls =
  'block h-10 w-full rounded-lg border border-gray-200 bg-white px-3.5 text-sm text-ink placeholder:text-subtle focus:outline-none focus:ring-2 focus:ring-ink/20 focus:border-ink/40 transition-colors'

function Field({
  label,
  required,
  children,
}: {
  label: string
  required?: boolean
  children: React.ReactNode
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium text-ink">
        {label} {required && <span className="text-rose-500">*</span>}
      </span>
      {children}
    </label>
  )
}
