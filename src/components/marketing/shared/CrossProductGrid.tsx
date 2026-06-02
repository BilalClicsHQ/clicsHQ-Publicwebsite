'use client'

import * as React from 'react'
import Link from 'next/link'
import { LayoutGrid, GanttChart, ListChecks, FileText, Calendar, Workflow, Plug, Sparkles } from 'lucide-react'
import { Highlight } from './Highlight'

const ITEMS = [
  { id: 'kanban',       icon: LayoutGrid, title: 'Kanban',       href: '/product/kanban'       },
  { id: 'gantt',        icon: GanttChart, title: 'Gantt',        href: '/product/gantt'        },
  { id: 'tasks',        icon: ListChecks, title: 'Tasks',        href: '/product/tasks'        },
  { id: 'docs',         icon: FileText,   title: 'Docs',         href: '/product/docs'         },
  { id: 'calendar',     icon: Calendar,   title: 'Calendar',     href: '/product/calendar'     },
  { id: 'workflows',    icon: Workflow,   title: 'Workflows',    href: '/product/workflows'    },
  { id: 'integrations', icon: Plug,       title: 'Integrations', href: '/product/integrations' },
  { id: 'ai',           icon: Sparkles,   title: 'AI assists',   href: '/product/ai'           },
]

/**
 * "Board view is just the beginning" — 8 sibling-product navigation cards.
 * The accent color of the highlighted word varies by source page.
 */
export function CrossProductGrid({
  title = (
    <>
      Board view is just the <Highlight color="blue">beginning</Highlight>
    </>
  ),
  subtitle = 'Switch how your team sees the work and pick the right view for any moment — without leaving your workflow.',
}: {
  title?: React.ReactNode
  subtitle?: string
}) {
  return (
    <section className="container-app py-16 sm:py-20">
      <div className="text-center">
        <h2 className="mx-auto max-w-3xl text-balance text-2xl font-bold leading-tight text-ink sm:text-3xl">
          {title}
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-muted sm:text-base">{subtitle}</p>
      </div>

      <ul className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">
        {ITEMS.map((it) => (
          <li key={it.id}>
            <Link
              href={it.href}
              className="group flex items-center gap-3 rounded-xl bg-white p-3.5 ring-1 ring-gray-100 transition-shadow hover:shadow-card"
            >
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-gray-100 text-ink transition-colors group-hover:bg-ink group-hover:text-white">
                <it.icon className="h-4 w-4" />
              </span>
              <span className="text-sm font-semibold text-ink">{it.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
