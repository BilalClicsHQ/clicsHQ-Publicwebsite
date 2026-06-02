import type { Metadata } from 'next'
import { ProductPage, type ProductPageConfig } from '@/components/marketing/shared/ProductPage'
import { Highlight } from '@/components/marketing/shared/Highlight'

export const metadata: Metadata = { title: 'Kanban Board' }

const config: ProductPageConfig = {
  hero: {
    eyebrow: 'Kanban Board',
    eyebrowColor: 'text-violet-600',
    title: 'Kanban boards that keep work moving',
    subtitle:
      'Plan, track, automate, and collaborate across teams without switching between tools — all in one connected workspace.',
    primaryLabel: 'Get Started',
    secondaryLabel: 'Watch demo',
    mockupSrc: '/images/dashboards/ClicshqPage.svg',
    background: 'soft-violet',
  },
  intro: {
    title: (
      <>
        A <Highlight color="blue">visual workflow</Highlight>, connected to everything
      </>
    ),
    subtitle:
      'clicsHQ Kanban boards connect tasks, docs, automations, and AI agents so your team always knows what to do next.',
  },
  splitRows: [
    {
      eyebrow: 'Visual tracking',
      title: 'See every stage of work clearly',
      body:
        'clicsHQ Kanban boards show columns that match your real workflow. Easily move work across stages and keep momentum every day.',
      imageSrc: '/images/dashboards/ClicshqPage.svg',
    },
    {
      eyebrow: 'Real-time updates',
      title: 'Do the work right from the card',
      body:
        'Assign owners, drop in comments, attach docs, and update statuses without leaving the board.',
      imageSrc: '/images/dashboards/ClicshqPage.svg',
      reverse: true,
    },
    {
      eyebrow: 'Automation',
      title: 'Automate repetitive board actions',
      body:
        'Reduce manual updates by letting clicsHQ move cards, notify teammates, and update statuses automatically when things change.',
      imageSrc: '/images/dashboards/ClicshqPage.svg',
    },
  ],
  darkTilesSection: {
    title: 'Every Kanban feature, built in from day one',
    tiles: [
      { chipLabel: 'Custom', chipColor: 'pink',    title: 'Custom fields on cards', body: 'Add fields that match how your team works — text, dropdowns, dates, numbers.' },
      { chipLabel: 'Tags',   chipColor: 'amber',   title: 'Board filters',          body: 'Slice the board by tag, assignee, or due date in one click.' },
      { chipLabel: 'Drag',   chipColor: 'emerald', title: 'Multi-drag',             body: 'Select and move multiple cards at once — bulk updates in seconds.' },
      { chipLabel: 'Views',  chipColor: 'sky',     title: 'Shared board views',     body: 'Save personalized views and share them with the rest of your team.' },
    ],
  },
  crossGridAccentColor: 'lime',
  faqTitle: 'Kanban board FAQs',
  faqs: [
    { q: 'Can I customize board statuses?',     a: 'Yes — clicsHQ lets you create custom statuses to match your workflow.' },
    { q: 'Can AI help manage my board?',         a: 'clicsHQ AI can auto-update statuses, surface blockers, summarize columns, and trigger workflows.' },
    { q: 'Can boards connect with integrations?', a: 'Boards integrate with Slack, Google Drive, GitHub, Jira, and 100+ tools.' },
  ],
}

export default function KanbanPage() {
  return <ProductPage config={config} />
}
