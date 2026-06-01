'use client'

import * as React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/cn'

type TabId = 'analytics' | 'task' | 'docs' | 'calendar' | 'integrations' | 'ai-chat' | 'workflow'

interface Tab {
  id: TabId
  label: string
  /** Preview image — falls back to the main dashboard SVG until per-tab assets land. */
  preview: string
}

const TABS: Tab[] = [
  { id: 'analytics',    label: 'Analytics',    preview: '/images/dashboards/ClicshqPage.svg' },
  { id: 'task',         label: 'Task',         preview: '/images/dashboards/ClicshqPage.svg' },
  { id: 'docs',         label: 'Docs',         preview: '/images/dashboards/ClicshqPage.svg' },
  { id: 'calendar',     label: 'Calendar',     preview: '/images/dashboards/ClicshqPage.svg' },
  { id: 'integrations', label: 'Integrations', preview: '/images/dashboards/ClicshqPage.svg' },
  { id: 'ai-chat',      label: 'AI Chat',      preview: '/images/dashboards/ClicshqPage.svg' },
  { id: 'workflow',     label: 'Workflow',     preview: '/images/dashboards/ClicshqPage.svg' },
]

export function ExploreTabs() {
  const [active, setActive] = React.useState<TabId>('analytics')
  const current = TABS.find((t) => t.id === active) ?? TABS[0]

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="container-app">
        <h2 className="heading-lg text-center text-balance">
          What would you like to{' '}
          <span className="text-pink-500">explore?</span>
        </h2>

        {/* Tabs */}
        <div className="mt-10 overflow-x-auto">
          <div className="mx-auto flex w-fit min-w-full justify-center border-b border-gray-100">
            {TABS.map((t) => (
              <button
                key={t.id}
                onClick={() => setActive(t.id)}
                className={cn(
                  '-mb-px whitespace-nowrap border-b-2 px-5 py-3 text-sm font-medium transition-colors',
                  active === t.id
                    ? 'border-ink text-ink'
                    : 'border-transparent text-muted hover:text-ink',
                )}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Preview */}
        <div className="mt-12 relative mx-auto max-w-4xl">
          {/* Decorative crosshair guides */}
          <span aria-hidden className="pointer-events-none absolute -left-6 top-1/2 hidden h-px w-12 bg-gray-200 lg:block" />
          <span aria-hidden className="pointer-events-none absolute -right-6 top-1/2 hidden h-px w-12 bg-gray-200 lg:block" />
          <span aria-hidden className="pointer-events-none absolute left-1/2 -top-6 hidden h-12 w-px bg-gray-200 lg:block" />
          <span aria-hidden className="pointer-events-none absolute left-1/2 -bottom-6 hidden h-12 w-px bg-gray-200 lg:block" />

          <div className="overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-gray-200">
            <Image
              src={current.preview}
              alt={`${current.label} preview`}
              width={1580}
              height={910}
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
