import type { Metadata } from 'next'
import { Eye, Sparkles, Workflow } from 'lucide-react'
import { SolutionPage, type SolutionPageConfig } from '@/components/marketing/shared/SolutionPage'
import { Highlight } from '@/components/marketing/shared/Highlight'

export const metadata: Metadata = { title: 'For Product teams' }

const config: SolutionPageConfig = {
  hero: {
    eyebrow: 'clicsHQ for Product',
    eyebrowColor: 'text-ink',
    eyebrowUppercase: false,
    title: (
      <>
        From discovery to launch on <Highlight color="orange">one</Highlight> platform
      </>
    ),
    subtitle: 'Specs, roadmaps, research, sprints, and launches — connected end-to-end.',
    primaryLabel: 'Get Started',
    mockupSrc: '/images/dashboards/ClicshqPage.svg',
    background: 'light',
  },
  benefits: {
    title: (
      <>
        Everything your <Highlight color="orange">product team</Highlight> needs to ship
      </>
    ),
    items: [
      { icon: Eye,      iconBg: 'bg-violet-100 text-violet-600',  title: 'Roadmap visibility',  body: 'Every initiative, owner, and milestone — across teams.' },
      { icon: Sparkles, iconBg: 'bg-pink-100 text-pink-600',       title: 'AI-powered research', body: 'Synthesize feedback, generate specs, draft PRDs in seconds.' },
      { icon: Workflow, iconBg: 'bg-emerald-100 text-emerald-600', title: 'Connected workflows', body: 'GitHub, Figma, Linear, Sentry — all wired into your sprint.' },
    ],
  },
  splitRows: [
    { eyebrow: 'Discovery', title: 'Centralize research, feedback, and ideas', body: 'AI groups feedback themes from interviews, surveys, and support tickets.', imageSrc: '/images/dashboards/ClicshqPage.svg' },
    { eyebrow: 'Specs',     title: 'Specs that live with the work',            body: 'PRDs, decision docs, and acceptance criteria all in clicsHQ Docs.',       imageSrc: '/images/dashboards/ClicshqPage.svg', reverse: true },
    { eyebrow: 'Launch',    title: 'Cross-team launch coordination',           body: 'Marketing, sales, support, and engineering aligned on launch checklists.', imageSrc: '/images/dashboards/ClicshqPage.svg' },
  ],
  finalCTA: { title: 'Bring product teams onto one platform', subtitle: 'Plan, build, and launch from one connected workspace.' },
}

export default function ProductSolutionPage() {
  return <SolutionPage config={config} />
}
