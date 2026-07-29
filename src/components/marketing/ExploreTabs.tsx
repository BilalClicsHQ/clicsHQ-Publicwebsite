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

// Real product screenshots per tab (the Figma "Analytics" preview is the same
// dashboard as the operations hero export). Calendar/Integrations still await
// dedicated exports — they fall back to the generic dashboard.
const TABS: Tab[] = [
  { id: 'analytics',    label: 'Analytics',    preview: '/images/solutions/operations/hero1.svg' },
  { id: 'task',         label: 'Task',         preview: '/images/tasks/task-hero.svg' },
  { id: 'docs',         label: 'Docs',         preview: '/images/docs/docs-hero.png' },
  { id: 'calendar',     label: 'Calendar',     preview: '/images/dashboards/ClicshqPage.svg' },
  { id: 'integrations', label: 'Integrations', preview: '/images/dashboards/ClicshqPage.svg' },
  { id: 'ai-chat',      label: 'AI Chat',      preview: '/images/ai/ai-hero1.svg' },
  { id: 'workflow',     label: 'Workflow',     preview: '/images/workflows/workflow-hero.svg' },
]

export function ExploreTabs() {
  const [active, setActive] = React.useState<TabId>('analytics')
  const current = TABS.find((t) => t.id === active) ?? TABS[0]

  return (
    <section className="bg-white pb-16 pt-10 sm:pb-20 sm:pt-12">
      <div className="container-app">
        {/* Figma: medium weight, two lines, "explore?" is a pink→purple gradient. */}
        <h2 className="text-center text-[28px] font-medium leading-[1.3] tracking-normal text-ink sm:text-[36px] lg:text-[40px]">
          What would you like to
          <br />
          <span className="bg-gradient-to-r from-[#CC3591] to-[#A85CBE] bg-clip-text text-transparent">
            explore?
          </span>
        </h2>

        {/* Tabs */}
        <div className="mt-8 overflow-x-auto">
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
        <div className="mt-10 relative mx-auto max-w-4xl">
          {/* Blueprint grid guides — horizontal lines along the mockup's top/bottom
              edges and vertical lines along its left/right edges (open #-grid, as in
              the Figma), plus the center drop line from the tabs. */}
          <span aria-hidden className="pointer-events-none absolute -left-[12vw] -right-[12vw] top-0 hidden h-px bg-gray-200 lg:block" />
          <span aria-hidden className="pointer-events-none absolute -left-[12vw] -right-[12vw] bottom-0 hidden h-px bg-gray-200 lg:block" />
          <span aria-hidden className="pointer-events-none absolute -bottom-10 -top-10 left-0 hidden w-px bg-gray-200 lg:block" />
          <span aria-hidden className="pointer-events-none absolute -bottom-10 -top-10 right-0 hidden w-px bg-gray-200 lg:block" />
          <span aria-hidden className="pointer-events-none absolute left-1/2 -top-10 hidden h-10 w-px bg-gray-200 lg:block" />

          {/* Figma: the dashboard floats as its own panel (no outer card ring). */}
          <Image
            src={current.preview}
            alt={`${current.label} preview`}
            width={1580}
            height={910}
            loading="eager"
            className="h-auto w-full"
          />
        </div>
      </div>
    </section>
  )
}
