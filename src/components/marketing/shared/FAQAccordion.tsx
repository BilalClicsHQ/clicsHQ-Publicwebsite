'use client'

import * as React from 'react'
import { ChevronDown, Plus, Minus } from 'lucide-react'
import { cn } from '@/lib/cn'

export interface FAQItem {
  q: string
  a: string
}

/**
 * Outlined rounded-row accordion. First item open by default.
 * `toggle` picks the affordance: a rotating chevron (default) or a +/− sign.
 */
export function FAQAccordion({
  title = 'Frequently Asked Questions',
  items,
  toggle = 'chevron',
}: {
  title?: string
  items: FAQItem[]
  toggle?: 'chevron' | 'plusminus'
}) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0)

  return (
    <section className="container-app py-16 sm:py-20">
      <h2 className="text-center text-[30px] font-medium leading-[1.17] tracking-normal text-ink sm:text-[40px] lg:text-[48px]">{title}</h2>
      <div className="mx-auto mt-12 max-w-6xl space-y-4">
        {items.map((it, i) => {
          const isOpen = openIndex === i
          return (
            <div
              key={i}
              className="overflow-hidden rounded-2xl bg-white ring-1 ring-gray-100 transition-shadow hover:shadow-card"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-7 py-5 text-left"
                aria-expanded={isOpen}
              >
                <span className="text-[26px] font-medium text-ink">{it.q}</span>
                {toggle === 'plusminus' ? (
                  isOpen ? (
                    <Minus className="h-[1.125rem] w-[1.125rem] shrink-0 text-ink" />
                  ) : (
                    <Plus className="h-[1.125rem] w-[1.125rem] shrink-0 text-ink" />
                  )
                ) : (
                  <ChevronDown
                    className={cn('h-4 w-4 shrink-0 text-muted transition-transform', isOpen && 'rotate-180')}
                  />
                )}
              </button>
              {isOpen && (
                <div className="px-7 pb-6 text-[20px] leading-relaxed text-muted animate-fade-up">
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
