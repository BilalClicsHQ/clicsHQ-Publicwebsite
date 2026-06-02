import type { Metadata } from 'next'
import { Eye, Sparkles, Workflow, Zap } from 'lucide-react'
import { SolutionPage, type SolutionPageConfig } from '@/components/marketing/shared/SolutionPage'
import { Highlight } from '@/components/marketing/shared/Highlight'

export const metadata: Metadata = { title: 'For Startups' }

const config: SolutionPageConfig = {
  hero: {
    eyebrow: 'clicsHQ for Startups',
    eyebrowColor: 'text-violet-600',
    title: (
      <>
        Move <Highlight color="violet">faster</Highlight> with one workspace for everything
      </>
    ),
    subtitle:
      'Replace 5 tools. Plan sprints, write docs, run hires, ship campaigns — all in one place, with AI doing the busywork.',
    primaryLabel: 'Get Started',
    mockupSrc: '/images/dashboards/ClicshqPage.svg',
    background: 'soft-violet',
  },
  benefits: {
    columns: 4,
    title: (
      <>
        Built for the way <Highlight color="violet">startups</Highlight> actually work
      </>
    ),
    items: [
      { icon: Eye,      iconBg: 'bg-violet-100 text-violet-600',   title: 'Capture work',        body: 'One place to log every task, idea, and decision.' },
      { icon: Zap,      iconBg: 'bg-amber-100 text-amber-600',     title: 'Organize in spaces',  body: 'Spaces per team or project keep things tidy.' },
      { icon: Workflow, iconBg: 'bg-emerald-100 text-emerald-600', title: 'Track execution',     body: 'Status, owners, and deadlines visible across teams.' },
      { icon: Sparkles, iconBg: 'bg-pink-100 text-pink-600',       title: 'Use AI support',      body: 'AI summarizes, drafts, and nudges teams forward.' },
    ],
  },
  splitRows: [
    { eyebrow: 'All-in-one',  title: 'Replace 5 tools with clicsHQ',          body: 'Docs, tasks, sprints, integrations, dashboards. One subscription, no glue code.', imageSrc: '/images/dashboards/ClicshqPage.svg' },
    { eyebrow: 'AI by default', title: 'Let AI handle the recurring work',     body: 'Standup digests, status reports, follow-ups — done before you sit down.',           imageSrc: '/images/dashboards/ClicshqPage.svg', reverse: true },
  ],
  finalCTA: { title: 'Ship like a 10x team from day one', subtitle: 'Get every team aligned without adding tools.' },
}

export default function StartupSolutionPage() {
  return <SolutionPage config={config} />
}
