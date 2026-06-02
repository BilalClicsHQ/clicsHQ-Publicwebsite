import type { Metadata } from 'next'
import { ProductPage, type ProductPageConfig } from '@/components/marketing/shared/ProductPage'
import { Highlight } from '@/components/marketing/shared/Highlight'

export const metadata: Metadata = { title: 'Tasks' }

const config: ProductPageConfig = {
  hero: {
    eyebrow: 'Tasks',
    eyebrowColor: 'text-emerald-600',
    title: 'Tasks that actually get done',
    subtitle:
      'Create, assign, and track tasks with priorities, due dates, dependencies, and AI-powered status updates.',
    primaryLabel: 'Get Started',
    mockupSrc: '/images/dashboards/ClicshqPage.svg',
    background: 'light',
  },
  intro: {
    title: (
      <>
        Built for <Highlight color="green">real teamwork</Highlight>, not micromanagement
      </>
    ),
    subtitle:
      'Capture the full context of a task — owners, deadlines, dependencies, related docs — without slowing your team down.',
  },
  splitRows: [
    {
      eyebrow: 'Capture',
      title: 'Create tasks faster than you can type them',
      body: 'Quick-add from anywhere. Keyboard shortcuts for power users. AI suggests owners and due dates.',
      bullets: ['Inline quick-add from any view', 'Templates for repeating work', 'AI auto-suggests owners and due dates'],
      imageSrc: '/images/dashboards/ClicshqPage.svg',
    },
    {
      eyebrow: 'Organize',
      title: 'Group, sort, filter — your way',
      body: 'Build personal and team views in seconds. Save filters. Share with one click.',
      bullets: ['Custom statuses and priorities', 'Subtasks and dependencies', 'Bulk edit + multi-select'],
      imageSrc: '/images/dashboards/ClicshqPage.svg',
      reverse: true,
    },
    {
      eyebrow: 'Stay aligned',
      title: 'Comments, mentions, and automatic updates',
      body: 'Activity threads on every task. @mentions go to inbox. Status changes notify watchers.',
      imageSrc: '/images/dashboards/ClicshqPage.svg',
    },
  ],
  crossGridAccentColor: 'green',
  faqTitle: 'Tasks FAQs',
  faqs: [
    { q: 'Can I link tasks to docs and projects?', a: 'Yes — every task can be linked to docs, sprints, customers, and more.' },
    { q: 'Can AI help triage my task list?',        a: 'clicsHQ AI ranks tasks by priority, flags overdue items, and suggests next actions.' },
    { q: 'How do recurring tasks work?',            a: 'Set any task to repeat daily/weekly/monthly. New instances appear automatically on the due date.' },
  ],
}

export default function TasksPage() {
  return <ProductPage config={config} />
}
