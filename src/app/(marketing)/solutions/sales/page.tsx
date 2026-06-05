 import type { Metadata } from 'next'
import { Eye, Sparkles, Workflow } from 'lucide-react'
import { SolutionPage, type SolutionPageConfig } from '@/components/marketing/shared/SolutionPage'
import { Highlight } from '@/components/marketing/shared/Highlight'

export const metadata: Metadata = { title: 'For Sales teams' }

const config: SolutionPageConfig = {
  hero: {
    eyebrow: 'clicsHQ for Sales',
    eyebrowColor: 'text-ink',
    eyebrowUppercase: false,
    title: (
      <>
        Turn every lead<br className="hidden lg:block" /> into clear next<br className="hidden lg:block" /> steps
      </>
    ),
    subtitle:
      'Manage pipeline tasks, follow-ups, proposals, approvals, customer handoffs, and sales team coordination from one AI-powered workspace.',
    primaryLabel: 'Get Started',
    secondaryLabel: 'Book a demo',
    mockupSrc: '/images/dashboards/ClicshqPage.svg',
    background: 'soft-violet',
  },
  benefits: {
    eyebrow: 'Why Sales Teams Choose clicsHQ',
    title: (
      <>
        Everything your <Highlight color="blue">sales team</Highlight> needs to<br className="hidden lg:block" /> keep deals moving
      </>
    ),
    subtitle:
      'Bring work, visibility, workflows, docs, and AI assistance into one simple workspace.',
    items: [
      { icon: Eye,      iconBg: 'bg-violet-100 text-violet-600',  title: 'Pipeline visibility',         body: 'Track leads, deal tasks, proposals, approvals, owners, and follow-ups from one place.' },
      { icon: Sparkles, iconBg: 'bg-pink-100 text-pink-600',       title: 'AI-powered follow-ups',       body: 'Use clics One to summarize meetings, generate updates, break down tasks, and remind owners.' },
      { icon: Workflow, iconBg: 'bg-emerald-100 text-emerald-600', title: 'Connected sales workflows',   body: 'Automate lead assignment, proposal approvals, follow-up reminders, and customer handoffs.' },
    ],
  },
  intro: {
    eyebrow: 'Sales Visibility',
    title: (
      <>
        Stay on top of every deal without<br className="hidden lg:block" /> chasing updates
      </>
    ),
    subtitle:
      'Give your sales team a clear view of pipeline progress, proposal approvals, overdue follow-ups, and customer handoffs.',
  },
  splitRows: [
    { title: (<>Lead and pipeline task<br className="hidden lg:block" /> tracking</>),     body: 'Inbound leads, calls, emails — auto-logged into the right deal.', imageSrc: '/images/dashboards/ClicshqPage.svg' },
    { title: (<>Proposal and approval<br className="hidden lg:block" /> visibility</>),     body: 'Generate proposal docs from call notes. Reviewers approve in clicsHQ.', imageSrc: '/images/dashboards/ClicshqPage.svg', reverse: true },
    { title: (<>Follow-up reminders<br className="hidden lg:block" /> by owner</>),         body: 'AI suggests follow-ups based on prospect engagement and deal stage.', imageSrc: '/images/dashboards/ClicshqPage.svg' },
  ],
  finalCTA: { title: 'Close more deals with clicsHQ', subtitle: 'A single source of truth across your pipeline.' },
}

export default function SalesPage() {
  return <SolutionPage config={config} />
}
