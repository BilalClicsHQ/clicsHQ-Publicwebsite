import type { Metadata } from 'next'
import { Eye, Sparkles, Workflow } from 'lucide-react'
import { SolutionPage, type SolutionPageConfig } from '@/components/marketing/shared/SolutionPage'

export const metadata: Metadata = { title: 'For Small Business' }

const config: SolutionPageConfig = {
  hero: {
    eyebrow: 'Small Business Suite',
    eyebrowColor: 'text-ink',
    eyebrowUppercase: false,
    title: (
      <>
        The simple<br className="hidden lg:block" /> workspace your<br className="hidden lg:block" /> small business<br className="hidden lg:block" /> needs
      </>
    ),
    subtitle:
      'Manage projects, tasks, docs, calendars, workflows, and AI updates in one place — without adding more tools or complexity.',
    primaryLabel: 'Get Started',
    secondaryLabel: 'Book a demo',
    mockupSrc: '/images/dashboards/ClicshqPage.svg',
    background: 'soft-pink',
  },
  benefits: {
    eyebrow: 'Why Small Businesses Choose clicsHQ',
    title: (
      <>
        Work simply, stay organized,<br className="hidden lg:block" /> and save time
      </>
    ),
    items: [
      { icon: Eye,      iconBg: 'bg-pink-100 text-pink-600', title: 'Less tool switching', body: 'Tasks, docs, calendars, and team chats in one place.' },
      { icon: Workflow, iconBg: 'bg-pink-100 text-pink-600', title: 'Clear ownership',     body: 'Everyone knows what they own and what comes next.' },
      { icon: Sparkles, iconBg: 'bg-pink-100 text-pink-600', title: 'AI that saves time',  body: 'AI drafts, summaries, and follow-ups — free up hours every week.' },
    ],
  },
  splitRows: [
    {
      eyebrow: 'Business Overview',
      title: (
        <>
          See your team&apos;s work<br className="hidden lg:block" /> without chasing every<br className="hidden lg:block" /> update
        </>
      ),
      body: 'Give owners and managers a clear view of projects, deadlines, overdue tasks, and team priorities.',
      imageSrc: '/images/dashboards/ClicshqPage.svg',
    },
    {
      eyebrow: 'Workflow Automation',
      title: (
        <>
          Automate simple<br className="hidden lg:block" /> business follow-ups
        </>
      ),
      body: 'Create simple When → Then workflows for reminders, ownership, updates, and handoffs.',
      imageSrc: '/images/dashboards/ClicshqPage.svg',
      reverse: true,
    },
  ],
  finalCTA: {
    title: 'Run your small business from one workspace',
    subtitle: 'Manage projects, tasks, docs, workflows, and AI updates with clicsHQ.',
    primaryLabel: 'Get started',
    secondaryLabel: 'Book Demo',
  },
}

export default function SmallBusinessPage() {
  return <SolutionPage config={config} />
}
