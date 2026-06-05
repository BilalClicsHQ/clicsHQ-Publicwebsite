import type { Metadata } from 'next'
import { ProductPage, type ProductPageConfig } from '@/components/marketing/shared/ProductPage'
import { Highlight } from '@/components/marketing/shared/Highlight'
import {
  TasksTableMockup,
  KanbanCardMockup,
  KanbanBoardMockup,
} from '@/components/marketing/shared/ProductMockups'

export const metadata: Metadata = { title: 'Tasks' }

const config: ProductPageConfig = {
  hero: {
    eyebrow: 'Task management',
    eyebrowColor: 'text-emerald-600',
    title: 'Tasks that keep every project moving',
    subtitle:
      'Plan, assign, track, and complete work in one clean, fast workspace. Stop priorities, due dates, owners, comments, and progress visible for every team.',
    primaryLabel: 'Get Started',
    secondaryLabel: 'Explore tasks',
    mockup: <TasksTableMockup />,
    background: 'light',
  },
  intro: {
    title: (
      <>
        A <Highlight color="green">complete place</Highlight> to manage daily work
      </>
    ),
    subtitle:
      'Capture the full context of a task — owners, deadlines, dependencies, related docs — without slowing your team down.',
  },
  splitRows: [
    {
      eyebrow: 'Visual tracking',
      title: 'See every stage of work clearly',
      body:
        'Track priorities, statuses, owners, and due dates at a glance. Sort, filter, and group your task list any way your team works.',
      bullets: ['Custom statuses and priorities', 'Subtasks and dependencies', 'Bulk edit + multi-select'],
      visual: <TasksTableMockup />,
    },
    {
      eyebrow: 'Full context',
      title: 'Open a task and get the full picture',
      body:
        'Every task carries comments, attachments, linked docs, and a complete activity history — so nothing gets lost.',
      visual: <KanbanCardMockup />,
      reverse: true,
    },
    {
      eyebrow: 'Flexible views',
      title: 'Work the way your team prefers',
      body:
        'Switch between list, board, and calendar in one click. Save personalized views and share them across the team.',
      visual: <KanbanBoardMockup />,
    },
  ],
  crossGridAccentColor: 'green',
  faqTitle: 'Tasks FAQs',
  faqs: [
    { q: 'Can I assign tasks to team members?',  a: 'Yes — assign owners, add watchers, @mention teammates, and route work automatically.' },
    { q: 'Can I track due dates and priorities?', a: 'Set due dates, priorities, and dependencies. clicsHQ flags overdue and at-risk work.' },
    { q: 'Can tasks be viewed as a board?',        a: 'Yes — switch any task list to a Kanban board, calendar, or timeline instantly.' },
  ],
  finalCTA: {
    title: 'Turn every idea into trackable work',
    subtitle: 'Create, assign, and track tasks across projects — and keep every team aligned start to finish.',
  },
}

export default function TasksPage() {
  return <ProductPage config={config} />
}
