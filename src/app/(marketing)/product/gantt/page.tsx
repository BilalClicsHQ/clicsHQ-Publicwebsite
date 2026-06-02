import type { Metadata } from 'next'
import { ProductPage, type ProductPageConfig } from '@/components/marketing/shared/ProductPage'
import { Highlight } from '@/components/marketing/shared/Highlight'

export const metadata: Metadata = { title: 'Gantt Chart' }

const config: ProductPageConfig = {
  hero: {
    eyebrow: 'Gantt Chart',
    eyebrowColor: 'text-rose-600',
    title: 'See the whole roadmap on one timeline',
    subtitle:
      'Plan dependencies, schedule milestones, and adjust dates with drag-and-drop. clicsHQ Gantt makes complex plans simple.',
    primaryLabel: 'Get Started',
    mockupSrc: '/images/dashboards/ClicshqPage.svg',
    background: 'light',
  },
  intro: {
    title: (
      <>
        Plan with <Highlight color="orange">confidence</Highlight>, adjust with ease
      </>
    ),
    subtitle: 'Drag bars to reschedule. Link dependencies. Save baselines. Compare actuals.',
  },
  splitRows: [
    {
      eyebrow: 'Timeline',
      title: 'Drag-and-drop scheduling',
      body: 'Move bars and dependencies adjust automatically. Critical path is highlighted in real time.',
      imageSrc: '/images/dashboards/ClicshqPage.svg',
    },
    {
      eyebrow: 'Dependencies',
      title: 'Four dependency types out of the box',
      body: 'Finish-to-start, start-to-start, finish-to-finish, start-to-finish — same as MS Project.',
      imageSrc: '/images/dashboards/ClicshqPage.svg',
      reverse: true,
    },
    {
      eyebrow: 'Baselines',
      title: 'Save baselines and track variance',
      body: 'Capture today’s plan, then watch how reality compares week-over-week.',
      imageSrc: '/images/dashboards/ClicshqPage.svg',
    },
  ],
  crossGridAccentColor: 'orange',
  faqs: [
    { q: 'Can I export the Gantt as PDF?',  a: 'Yes — export to PDF or PNG for board reviews and stakeholder updates.' },
    { q: 'Does Gantt sync with sprints?',    a: 'Sprint dates auto-create Gantt bars; updates flow both ways.' },
    { q: 'Can multiple Gantts share a plan?', a: 'Yes — combine multiple projects into a single portfolio Gantt.' },
  ],
}

export default function GanttPage() {
  return <ProductPage config={config} />
}
