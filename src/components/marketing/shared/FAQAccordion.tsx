'use client'

import * as React from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/cn'

export interface FAQItem {
  q: string
  a: string
}

/**
 * Outlined rounded-row accordion with +/− toggle. First item open by default.
 */
export function FAQAccordion({
  title = 'Frequently Asked Questions',
  items,
}: {
  title?: string
  items: FAQItem[]
}) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0)

  return (
    <section className="container-app py-16 sm:py-20">
      <h2 className="text-center text-2xl font-bold text-ink sm:text-3xl">{title}</h2>
      <div className="mx-auto mt-10 max-w-3xl space-y-3">
        {items.map((it, i) => {
          const isOpen = openIndex === i
          return (
            <div
              key={i}
              className="overflow-hidden rounded-xl bg-white ring-1 ring-gray-100 transition-shadow hover:shadow-card"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                aria-expanded={isOpen}
              >
                <span className="text-sm font-medium text-ink">{it.q}</span>
                <ChevronDown
                  className={cn('h-4 w-4 shrink-0 text-muted transition-transform', isOpen && 'rotate-180')}
                />
              </button>
              {isOpen && (
                <div className="px-5 pb-5 text-sm leading-relaxed text-muted animate-fade-up">
                  {it.a}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
