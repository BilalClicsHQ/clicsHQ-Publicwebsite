import type { Metadata } from 'next'
import { Eye, Sparkles, Workflow } from 'lucide-react'
import { SolutionPage, type SolutionPageConfig } from '@/components/marketing/shared/SolutionPage'
import { Highlight } from '@/components/marketing/shared/Highlight'

export const metadata: Metadata = { title: 'For Operations teams' }

const config: SolutionPageConfig = {
  hero: {
    eyebrow: 'clicsHQ for Operations',
    eyebrowColor: 'text-ink',
    eyebrowUppercase: false,
    title: <>Run operations from one connected workspace</>,
    subtitle:
      'Manage tasks, approvals, workflows, team coordination, and operational visibility with an AI-powered workspace built for fast-moving teams.',
    primaryLabel: 'Get Started',
    secondaryLabel: 'Book a demo',
    mockupSrc: '/images/dashboards/ClicshqPage.svg',
    background: 'light',
  },
  benefits: {
    eyebrow: 'Why Operations Teams Choose clicsHQ',
    title: (
      <>
        Everything your <Highlight color="blue">operations team</Highlight> needs
        <br className="hidden lg:block" /> to stay aligned
      </>
    ),
    subtitle: 'Bring work, visibility, workflows, docs, and AI assistance into one simple workspace.',
    items: [
      {
        icon: Eye,
        iconBg: 'bg-violet-100 text-violet-600',
        title: 'Centralized visibility',
        body: 'Track progress, priorities, workloads, and blockers from one operational overview.',
      },
      {
        icon: Sparkles,
        iconBg: 'bg-pink-100 text-pink-600',
        title: 'AI-powered coordination',
        body: 'Use clics One to summarize work, find blockers, generate updates, and reduce manual follow-ups.',
      },
      {
        icon: Workflow,
        iconBg: 'bg-emerald-100 text-emerald-600',
        title: 'Flexible workflows',
        body: 'Create simple automations that help your team move faster without adding complexity.',
      },
    ],
  },
  intro: {
    eyebrow: 'Operational Visibility',
    title: (
      <>
        Stay on top of execution without
        <br className="hidden lg:block" /> chasing updates
      </>
    ),
    subtitle:
      'Space Overview gives operations teams a clear view of total tasks, progress, priority distribution, workload, and status movement.',
  },
  splitRows: [
    {
      title: 'Total task visibility',
      body: 'See every running initiative, its owner, status, and deadline. Drill into any one with a click.',
      imageSrc: '/images/dashboards/ClicshqPage.svg',
    },
    {
      title: 'Status and progress tracking',
      body: 'Status flows from tasks → projects → portfolio. No spreadsheets, no manual rollups.',
      imageSrc: '/images/dashboards/ClicshqPage.svg',
      reverse: true,
    },
    {
      title: 'Workload by team member',
      body: 'Capacity views show who is overcommitted before deadlines slip.',
      imageSrc: '/images/dashboards/ClicshqPage.svg',
    },
    {
      title: 'Priority and overdue insights',
      body: 'AI sorts your portfolio by risk and ranks priorities for your standup.',
      imageSrc: '/images/dashboards/ClicshqPage.svg',
      reverse: true,
    },
  ],
  finalCTA: {
    title: 'Build your AI-powered operations workspace',
    subtitle: 'Manage operations, automate workflows, and align teams from one connected platform.',
    primaryLabel: 'Get started',
    secondaryLabel: 'Book Demo',
  },
}

export default function OperationsPage() {
  return <SolutionPage config={config} />
}
