'use client'

import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Highlight } from './Highlight'

const NAV_ICON = '/images/navbar'

const ITEMS = [
  { iconSrc: `${NAV_ICON}/integrations.svg`, title: 'Integrations', desc: 'Connect with 100+ tools you already use.',  href: '/product/integrations' },
  { iconSrc: `${NAV_ICON}/kanban.svg`,       title: 'Kanban Board', desc: 'Visual boards that keep work moving.',      href: '/product/kanban'       },
  { iconSrc: `${NAV_ICON}/gantt.svg`,        title: 'Gantt Chart',  desc: 'Plan timelines and track dependencies.',    href: '/product/gantt'        },
  { iconSrc: `${NAV_ICON}/task.svg`,         title: 'Tasks',        desc: 'Assign, prioritize, and track every task.', href: '/product/tasks'        },
  { iconSrc: `${NAV_ICON}/ai-assists.svg`,   title: 'AI Agents',    desc: 'Let AI handle the busywork for you.',       href: '/product/ai'           },
  { iconSrc: `${NAV_ICON}/docs.svg`,         title: 'Docs',         desc: 'Write, share, and link docs to your work.', href: '/product/docs'         },
  { iconSrc: `${NAV_ICON}/calender.svg`,     title: 'Calendar',     desc: 'See deadlines and schedules at a glance.',  href: '/product/calendar'     },
  { iconSrc: `${NAV_ICON}/workflows.svg`,    title: 'Workflows',    desc: 'Automate repetitive steps end to end.',     href: '/product/workflows'    },
] as const

/**
 * "Board view is just the beginning" — sibling-product navigation cards with
 * the product's navbar icon, title, and one-line description. The accent color
 * of the highlighted headline word varies by source page.
 */
export function CrossProductGrid({
  eyebrow = 'Part of the clicsHQ platform',
  title = (
    <>
      Board view is just the <Highlight color="blue">beginning</Highlight>
    </>
  ),
  subtitle = 'Board view is your visual entry point into the clicsHQ platform. Tasks, Docs, Chat, Calendar, Dashboards, and more in a single, converged app — explore everything you unlock when your work lives in one place.',
}: {
  eyebrow?: string
  title?: React.ReactNode
  subtitle?: string
}) {
  return (
    <section className="container-app py-16 sm:py-20">
      <div className="text-center">
        {eyebrow && <p className="text-[15px] font-medium text-ink">{eyebrow}</p>}
        <h2 className="mx-auto mt-3 max-w-3xl text-balance text-[26px] font-bold leading-[1.12] tracking-tight text-ink sm:text-[32px] lg:text-[36px]">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-[16px] leading-relaxed text-muted sm:text-[17px]">{subtitle}</p>
      </div>

      <ul className="mx-auto mt-14 grid max-w-4xl gap-x-8 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
        {ITEMS.map((it) => (
          <li key={it.title}>
            <Link
              href={it.href}
              className="group flex items-start gap-3 rounded-lg p-2 transition-colors hover:bg-gray-50"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center">
                <Image src={it.iconSrc} alt="" aria-hidden width={40} height={40} className="h-10 w-10" />
              </span>
              <span className="min-w-0">
                <span className="block text-[17px] font-semibold text-ink">{it.title}</span>
                <span className="mt-1 block text-[14px] leading-relaxed text-muted">{it.desc}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
