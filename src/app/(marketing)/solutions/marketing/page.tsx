import type { Metadata } from 'next'
import { Eye, Sparkles, Workflow } from 'lucide-react'
import { SolutionPage, type SolutionPageConfig } from '@/components/marketing/shared/SolutionPage'
import { Highlight } from '@/components/marketing/shared/Highlight'

export const metadata: Metadata = { title: 'For Marketing teams' }

const config: SolutionPageConfig = {
  hero: {
    eyebrow: 'clicsHQ for Marketing',
    eyebrowColor: 'text-pink-600',
    title: (
      <>
        Run <Highlight color="pink">campaigns</Highlight> from one connected workspace
      </>
    ),
    subtitle:
      'Plan, brief, approve, and ship every campaign without losing context. AI keeps your team coordinated end-to-end.',
    primaryLabel: 'Get Started',
    secondaryLabel: 'Book a demo',
    mockupSrc: '/images/dashboards/ClicshqPage.svg',
    background: 'soft-pink',
  },
  benefits: {
    title: (
      <>
        Everything your <Highlight color="pink">marketing team</Highlight> needs to ship campaigns
      </>
    ),
    items: [
      { icon: Eye,      iconBg: 'bg-violet-100 text-violet-600', title: 'Campaign visibility',  body: 'Every brief, every asset, every milestone in one place.' },
      { icon: Sparkles, iconBg: 'bg-pink-100 text-pink-600',     title: 'Content coordination', body: 'Writers, designers, and reviewers stay aligned without long threads.' },
      { icon: Workflow, iconBg: 'bg-emerald-100 text-emerald-600', title: 'Flexible workflows', body: 'Build approval chains, briefs, and creative routing without code.' },
    ],
  },
  splitRows: [
    { eyebrow: 'Campaign progress', title: 'Track every campaign in one view',           body: 'A live portfolio of campaigns with status, owners, and dependencies.',                  imageSrc: '/images/dashboards/ClicshqPage.svg' },
    { eyebrow: 'Creative tasks',     title: 'Move briefs to assets faster',               body: 'Brief, assign, review, and ship — without a single screen change.',                      imageSrc: '/images/dashboards/ClicshqPage.svg', reverse: true },
    { eyebrow: 'Workload',           title: 'Workload aware scheduling',                  body: 'Don’t over-book your designers or writers — capacity views show real bandwidth.',     imageSrc: '/images/dashboards/ClicshqPage.svg' },
  ],
  finalCTA: { title: 'Ship your next campaign with clicsHQ', subtitle: 'Bring strategy, creative, and approvals into one place.' },
}

export default function MarketingPage() {
  return <SolutionPage config={config} />
}
