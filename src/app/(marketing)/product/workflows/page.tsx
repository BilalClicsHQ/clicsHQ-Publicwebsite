import type { Metadata } from 'next'
import { ProductPage, type ProductPageConfig } from '@/components/marketing/shared/ProductPage'
import { Highlight } from '@/components/marketing/shared/Highlight'

export const metadata: Metadata = { title: 'Workflow automation' }

const config: ProductPageConfig = {
  hero: {
    eyebrow: 'Workflow automation',
    eyebrowColor: 'text-emerald-600',
    title: 'Automate the busywork, ship the real work',
    subtitle:
      'Build smart workflows with triggers, conditions, and actions across clicsHQ + your stack. No code required.',
    primaryLabel: 'Build a workflow',
    mockupSrc: '/images/dashboards/ClicshqPage.svg',
    background: 'light',
  },
  intro: {
    title: (
      <>
        A <Highlight color="blue">visual workflow</Highlight>, connected to everything
      </>
    ),
    subtitle:
      'Drag-and-drop builder. AI-suggested templates. Real-time monitoring.',
  },
  splitRows: [
    {
      eyebrow: 'Build',
      title: 'Drag-and-drop workflow builder',
      body: 'Compose triggers, conditions, and actions on a visual canvas. Test every step before publishing.',
      bullets: ['Visual builder with branching logic', 'Per-step error handling and retries', 'Test runs with sample data'],
      imageSrc: '/images/dashboards/ClicshqPage.svg',
    },
    {
      eyebrow: 'Run',
      title: 'AI-powered recipes for the busywork',
      body: 'Don’t start from scratch — pick from 100+ templates that already automate the most common team workflows.',
      imageSrc: '/images/dashboards/ClicshqPage.svg',
      reverse: true,
    },
    {
      eyebrow: 'Monitor',
      title: 'Real-time logs and audit trail',
      body: 'See every workflow run, every error, every retry. Get notified when something needs attention.',
      imageSrc: '/images/dashboards/ClicshqPage.svg',
    },
  ],
  darkTilesSection: {
    title: 'Popular workflows our customers love',
    columns: 4,
    tiles: [
      { chipLabel: 'When', chipColor: 'emerald', title: 'On task overdue',  body: 'Notify owner in Slack + reschedule.' },
      { chipLabel: 'When', chipColor: 'sky',     title: 'On PR merged',     body: 'Auto-close the related task + post in #releases.' },
      { chipLabel: 'When', chipColor: 'amber',   title: 'Daily standup',    body: 'AI summarizes yesterday’s activity into a digest.' },
      { chipLabel: 'When', chipColor: 'pink',    title: 'On status review', body: 'Move tickets and ping reviewers automatically.' },
    ],
  },
  crossGridAccentColor: 'green',
  faqTitle: 'Workflows FAQs',
  faqs: [
    { q: 'Do I need to know how to code?',      a: 'No — clicsHQ Workflows are no-code by design. Power users can also drop into custom JavaScript steps.' },
    { q: 'Can workflows update Slack or Jira?',  a: 'Yes — over 100 integrations are supported as triggers, actions, or both.' },
    { q: 'Can workflows send notifications?',   a: 'Workflows can email, Slack DM, post in channels, and call any webhook.' },
  ],
}

export default function WorkflowsPage() {
  return <ProductPage config={config} />
}
