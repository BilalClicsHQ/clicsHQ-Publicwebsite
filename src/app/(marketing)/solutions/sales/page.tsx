 import type { Metadata } from 'next'
import { Eye, Sparkles, Workflow } from 'lucide-react'
import { SolutionPage, type SolutionPageConfig } from '@/components/marketing/shared/SolutionPage'
import { Highlight } from '@/components/marketing/shared/Highlight'

export const metadata: Metadata = { title: 'For Sales teams' }

const config: SolutionPageConfig = {
  hero: {
    eyebrow: 'clicsHQ for Sales',
    eyebrowColor: 'text-violet-600',
    title: (
      <>
        Close more deals with <Highlight color="violet">AI-powered</Highlight> follow-ups
      </>
    ),
    subtitle:
      'Pipeline visibility, automated follow-ups, and AI agents that draft proposals and recap meetings.',
    primaryLabel: 'Get Started',
    mockupSrc: '/images/dashboards/ClicshqPage.svg',
    background: 'soft-violet',
  },
  benefits: {
    title: (
      <>
        Everything your <Highlight color="violet">sales team</Highlight> needs to win
      </>
    ),
    items: [
      { icon: Eye,      iconBg: 'bg-violet-100 text-violet-600',  title: 'Pipeline visibility',         body: 'Live view of every deal, stage, and owner.' },
      { icon: Sparkles, iconBg: 'bg-pink-100 text-pink-600',       title: 'AI follow-ups',               body: 'AI drafts follow-ups, summaries, and proposals using your real call data.' },
      { icon: Workflow, iconBg: 'bg-emerald-100 text-emerald-600', title: 'Connected sales workflows',   body: 'Two-way sync with Salesforce, HubSpot, Gmail, Outlook.' },
    ],
  },
  splitRows: [
    { eyebrow: 'Lead tracking',     title: 'A pipeline that updates itself',     body: 'Inbound leads, calls, emails — auto-logged into the right deal.', imageSrc: '/images/dashboards/ClicshqPage.svg' },
    { eyebrow: 'Proposals',          title: 'AI drafts your proposals',           body: 'Generate proposal docs from call notes. Reviewers approve in clicsHQ.', imageSrc: '/images/dashboards/ClicshqPage.svg', reverse: true },
    { eyebrow: 'Follow-up reminders', title: 'Never lose a deal to a missed touch', body: 'AI suggests follow-ups based on prospect engagement and deal stage.', imageSrc: '/images/dashboards/ClicshqPage.svg' },
  ],
  finalCTA: { title: 'Close more deals with clicsHQ', subtitle: 'A single source of truth across your pipeline.' },
}

export default function SalesPage() {
  return <SolutionPage config={config} />
}
