import type { Metadata } from 'next'
import { Eye, Sparkles, Workflow } from 'lucide-react'
import { SolutionPage, type SolutionPageConfig } from '@/components/marketing/shared/SolutionPage'
import { Highlight } from '@/components/marketing/shared/Highlight'

export const metadata: Metadata = { title: 'For Small Business' }

const config: SolutionPageConfig = {
  hero: {
    eyebrow: 'clicsHQ for Small Business',
    eyebrowColor: 'text-pink-600',
    title: (
      <>
        One <Highlight color="pink">connected workspace</Highlight> for daily work
      </>
    ),
    subtitle:
      'Manage projects, customers, and operations in one place. Stop juggling spreadsheets and tabs — clicsHQ keeps it all aligned.',
    primaryLabel: 'Get Started',
    mockupSrc: '/images/dashboards/ClicshqPage.svg',
    background: 'soft-pink',
  },
  benefits: {
    title: (
      <>
        Built for businesses that <Highlight color="pink">just want it to work</Highlight>
      </>
    ),
    items: [
      { icon: Eye,      iconBg: 'bg-violet-100 text-violet-600',  title: 'Less tool switching', body: 'Tasks, docs, calendars, and team chats in one place.' },
      { icon: Sparkles, iconBg: 'bg-pink-100 text-pink-600',      title: 'AI saves time',       body: 'AI drafts, summaries, and follow-ups — free up hours every week.' },
      { icon: Workflow, iconBg: 'bg-emerald-100 text-emerald-600', title: 'Clear ownership',   body: 'Everyone knows what they own and what comes next.' },
    ],
  },
  splitRows: [
    { eyebrow: 'Daily ops',  title: 'Run daily operations smoothly',   body: 'A simple dashboard your whole team can use without training.', imageSrc: '/images/dashboards/ClicshqPage.svg' },
    { eyebrow: 'Automation', title: 'Automate simple business follow-ups', body: 'Send recurring invoices, schedule reminders, route requests — without code.', imageSrc: '/images/dashboards/ClicshqPage.svg', reverse: true },
  ],
  finalCTA: { title: 'Build your business on clicsHQ', subtitle: 'Run your team, your projects, and your operations on one platform.' },
}

export default function SmallBusinessPage() {
  return <SolutionPage config={config} />
}
