import type { Metadata } from 'next'
import { Eye, Sparkles, Workflow } from 'lucide-react'
import { SolutionPage, type SolutionPageConfig } from '@/components/marketing/shared/SolutionPage'
import { Highlight } from '@/components/marketing/shared/Highlight'

export const metadata: Metadata = { title: 'For Marketing teams' }

const config: SolutionPageConfig = {
  hero: {
    eyebrow: 'clicsHQ for Marketing',
    eyebrowColor: 'text-ink',
    eyebrowUppercase: false,
    title: (
      <>
        Scale campaigns<br className="hidden lg:block" /> without scaling<br className="hidden lg:block" /> chaos
      </>
    ),
    subtitle:
      'Plan campaigns, manage content, track creative requests, coordinate approvals, and launch faster from one AI-powered workspace.',
    primaryLabel: 'Get Started',
    secondaryLabel: 'Book a demo',
    mockupSrc: '/images/dashboards/ClicshqPage.svg',
    background: 'light',
  },
  benefits: {
    eyebrow: 'Why Marketing Teams Choose clicsHQ',
    title: (
      <>
        Everything your <Highlight color="blue">marketing team</Highlight> needs<br className="hidden lg:block" /> to launch faster
      </>
    ),
    subtitle: 'Bring work, visibility, workflows, docs, and AI assistance into one simple workspace.',
    items: [
      { icon: Eye,      iconBg: 'bg-violet-100 text-violet-600', title: 'Campaign visibility',         body: 'Track campaigns, content progress, approvals, owners, deadlines, and launch readiness from one place.' },
      { icon: Sparkles, iconBg: 'bg-pink-100 text-pink-600',     title: 'AI-powered coordination',     body: 'Use clics One to summarize updates, create briefs, find blockers, and generate marketing task lists.' },
      { icon: Workflow, iconBg: 'bg-emerald-100 text-emerald-600', title: 'Flexible marketing workflows', body: 'Automate creative requests, approvals, launch reminders, and campaign handoffs without complexity.' },
    ],
  },
  intro: {
    eyebrow: 'Campaign Visibility',
    title: 'Stay on top of every campaign without chasing updates',
    subtitle:
      'Space Overview gives marketing teams a clear view of campaign progress, creative workload, approvals, and priority items.',
  },
  splitRows: [
    { title: 'Campaign progress tracking',           body: 'A live portfolio of campaigns with status, owners, and dependencies.',                  imageSrc: '/images/dashboards/ClicshqPage.svg' },
    { title: 'Creative and content task visibility', body: 'Brief, assign, review, and ship — without a single screen change.',                      imageSrc: '/images/dashboards/ClicshqPage.svg', reverse: true },
    { title: 'Workload by team member',              body: 'Don’t over-book your designers or writers — capacity views show real bandwidth.',     imageSrc: '/images/dashboards/ClicshqPage.svg' },
    { title: 'Approval and overdue insights',        body: 'See pending approvals and overdue work at a glance so nothing slips before launch.',  imageSrc: '/images/dashboards/ClicshqPage.svg', reverse: true },
  ],
  finalCTA: {
    title: 'Launch campaigns faster with clicsHQ',
    subtitle: 'Bring campaign planning, execution, approvals, and AI assistance into one connected workspace.',
    primaryLabel: 'Get started',
    secondaryLabel: 'Book Demo',
  },
}

export default function MarketingPage() {
  return <SolutionPage config={config} />
}
