import type { Metadata } from 'next'
import { Eye, Sparkles, Workflow } from 'lucide-react'
import { SolutionPage, type SolutionPageConfig } from '@/components/marketing/shared/SolutionPage'
import { Highlight } from '@/components/marketing/shared/Highlight'

export const metadata: Metadata = { title: 'For Operations teams' }

const config: SolutionPageConfig = {
  hero: {
    eyebrow: 'clicsHQ for Operations',
    eyebrowColor: 'text-blue-600',
    title: (
      <>
        Run operations from one <Highlight color="blue">connected</Highlight> workspace
      </>
    ),
    subtitle:
      'Manage tasks, approvals, vendor work, and reporting in one place. Reduce manual handoffs with AI-powered workflows.',
    primaryLabel: 'Get Started',
    secondaryLabel: 'Book a demo',
    mockupSrc: '/images/dashboards/ClicshqPage.svg',
    background: 'light',
  },
  benefits: {
    title: (
      <>
        Everything your <Highlight color="blue">operations team</Highlight> needs to stay aligned
      </>
    ),
    items: [
      {
        icon: Eye,
        iconBg: 'bg-violet-100 text-violet-600',
        title: 'Centralized visibility',
        body: 'See every request, every owner, every blocker — across functions.',
      },
      {
        icon: Sparkles,
        iconBg: 'bg-pink-100 text-pink-600',
        title: 'AI-powered coordination',
        body: 'AI agents summarize updates, flag risks, and trigger follow-ups automatically.',
      },
      {
        icon: Workflow,
        iconBg: 'bg-emerald-100 text-emerald-600',
        title: 'Flexible workflows',
        body: 'Build approval chains and routing rules without writing code.',
      },
    ],
  },
  intro: {
    title: 'Stay on top of execution without chasing updates',
    subtitle: 'Track tasks, ownership, and progress in real time without manually polling teams.',
  },
  splitRows: [
    {
      eyebrow: 'Total task visibility',
      title: 'Every project, every priority',
      body: 'See every running initiative, its owner, status, and deadline. Drill into any one with a click.',
      imageSrc: '/images/dashboards/ClicshqPage.svg',
    },
    {
      eyebrow: 'Status and progress tracking',
      title: 'Live progress, automatically',
      body: 'Status flows from tasks → projects → portfolio. No spreadsheets, no manual rollups.',
      imageSrc: '/images/dashboards/ClicshqPage.svg',
      reverse: true,
    },
    {
      eyebrow: 'Workload by team member',
      title: 'Workload that actually reflects reality',
      body: 'Capacity views show who is overcommitted before deadlines slip.',
      imageSrc: '/images/dashboards/ClicshqPage.svg',
    },
    {
      eyebrow: 'Priority and overdue insights',
      title: 'Surface what needs attention first',
      body: 'AI sorts your portfolio by risk and ranks priorities for your standup.',
      imageSrc: '/images/dashboards/ClicshqPage.svg',
      reverse: true,
    },
  ],
  finalCTA: {
    title: 'Build your AI-powered operations workspace',
    subtitle: 'Manage operations, automate handoffs, and keep every team aligned in one place.',
  },
}

export default function OperationsPage() {
  return <SolutionPage config={config} />
}
