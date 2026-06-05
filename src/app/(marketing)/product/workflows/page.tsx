import type { Metadata } from 'next'
import { ProductPage, type ProductPageConfig } from '@/components/marketing/shared/ProductPage'
import { Highlight } from '@/components/marketing/shared/Highlight'
import {
  WorkflowCanvasMockup,
  KanbanBoardMockup,
} from '@/components/marketing/shared/ProductMockups'

export const metadata: Metadata = { title: 'Workflow automation' }

const config: ProductPageConfig = {
  hero: {
    eyebrow: 'Workflow automation',
    eyebrowColor: 'text-emerald-600',
    title: 'Automate work without the complexity',
    subtitle:
      'Create simple workflows that trigger actions automatically when tasks are created, updated, assigned, commented on, or moved.',
    primaryLabel: 'Get Started',
    secondaryLabel: 'Explore Workflows',
    mockup: <WorkflowCanvasMockup />,
    background: 'light',
  },
  intro: {
    title: (
      <>
        A simple <Highlight color="blue">visual workflow</Highlight>, connected to your work
      </>
    ),
    subtitle:
      'No code, no clutter — just clear, automated rules that keep your projects moving on their own.',
  },
  splitRows: [
    {
      eyebrow: 'Build',
      title: 'Build automations in a clean, guided flow',
      body:
        'Compose triggers, conditions, and actions on a simple visual canvas. Test every step before you publish.',
      bullets: ['No-code builder with branching logic', 'Test runs with sample data', 'Per-step error handling and retries'],
      visual: <WorkflowCanvasMockup />,
    },
    {
      eyebrow: 'Run',
      title: 'Automate repetitive board actions',
      body:
        'Let clicsHQ move cards, notify teammates, and update statuses automatically when things change — so your team stays focused on real work.',
      visual: <KanbanBoardMockup />,
      reverse: true,
    },
  ],
  darkTilesSection: {
    title: 'Popular workflow ideas',
    columns: 4,
    tiles: [
      { chipLabel: 'When → Then', chipColor: 'emerald', title: 'Task moves to Done', body: 'Then notify the owner in Slack and create a follow-up task.' },
      { chipLabel: 'When → Then', chipColor: 'sky',     title: 'A PR is merged',      body: 'Then auto-close the linked task and post in #releases.' },
      { chipLabel: 'When → Then', chipColor: 'amber',   title: 'It’s 9am daily',      body: 'Then have AI summarize yesterday’s activity into a digest.' },
      { chipLabel: 'When → Then', chipColor: 'pink',    title: 'A task is overdue',   body: 'Then ping the owner and reschedule automatically.' },
    ],
  },
  crossGridAccentColor: 'green',
  faqTitle: 'Workflows FAQs',
  faqs: [
    { q: 'Can I create workflows without coding?',          a: 'Yes — clicsHQ Workflows are no-code by design. Power users can also drop into custom steps.' },
    { q: 'Can workflows update task status automatically?', a: 'Workflows can move cards, change statuses, assign owners, and update fields on their own.' },
    { q: 'Can workflows send notifications or emails?',     a: 'Workflows can email, Slack DM, post in channels, and call any webhook.' },
  ],
  finalCTA: {
    title: 'Let clicsHQ handle repetitive work',
    subtitle: 'Create simple workflows that keep projects moving without manual busywork.',
  },
}

export default function WorkflowsPage() {
  return <ProductPage config={config} />
}
