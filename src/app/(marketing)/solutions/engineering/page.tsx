import type { Metadata } from 'next'
import { Eye, Sparkles, Workflow } from 'lucide-react'
import { SolutionPage, type SolutionPageConfig } from '@/components/marketing/shared/SolutionPage'
import { Highlight } from '@/components/marketing/shared/Highlight'

export const metadata: Metadata = { title: 'For Engineering teams' }

const config: SolutionPageConfig = {
  hero: {
    eyebrow: 'clicsHQ for Engineering',
    eyebrowColor: 'text-emerald-600',
    title: (
      <>
        Ship faster with <Highlight color="green">AI-powered</Highlight> sprints
      </>
    ),
    subtitle:
      'Specs, sprints, incidents, and handoffs in one workspace. Built for engineers, integrated with GitHub.',
    primaryLabel: 'Get Started',
    mockupSrc: '/images/dashboards/ClicshqPage.svg',
    background: 'light',
  },
  benefits: {
    title: (
      <>
        Everything <Highlight color="green">engineering teams</Highlight> need to ship more
      </>
    ),
    items: [
      { icon: Eye,      iconBg: 'bg-violet-100 text-violet-600',  title: 'Sprint visibility',  body: 'See every sprint, blocker, and PR — across squads.' },
      { icon: Sparkles, iconBg: 'bg-pink-100 text-pink-600',      title: 'AI-powered execution', body: 'Bug Triage Agent, Standup Agent, Sprint Agent — built in.' },
      { icon: Workflow, iconBg: 'bg-emerald-100 text-emerald-600', title: 'Connected tools', body: 'Two-way sync with GitHub, Linear, Jira, PagerDuty.' },
    ],
  },
  splitRows: [
    { eyebrow: 'Sprint progress',  title: 'Real-time sprint progress',     body: 'Burndown, velocity, scope changes — automatically tracked.', imageSrc: '/images/dashboards/ClicshqPage.svg' },
    { eyebrow: 'Bugs and blockers', title: 'Triage faster with AI',         body: 'AI scores severity, suggests owners, and routes to the right team.', imageSrc: '/images/dashboards/ClicshqPage.svg', reverse: true },
    { eyebrow: 'Workload',          title: 'Workload by engineer',          body: 'Capacity-aware sprint planning. Reassign with one drag.', imageSrc: '/images/dashboards/ClicshqPage.svg' },
  ],
  finalCTA: { title: 'Ship more with clicsHQ', subtitle: 'Connect specs, sprints, and incidents on one platform.' },
}

export default function EngineeringPage() {
  return <SolutionPage config={config} />
}
