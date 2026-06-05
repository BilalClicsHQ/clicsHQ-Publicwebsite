import type { Metadata } from 'next'
import { Bot, FileBarChart, AlertTriangle, FileText } from 'lucide-react'
import { SolutionPage, type SolutionPageConfig } from '@/components/marketing/shared/SolutionPage'
import { Highlight } from '@/components/marketing/shared/Highlight'

const TOOL = '/images/tools'
const OPS = '/images/solutions/operations'

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
    mockupSrc: `${OPS}/hero1.svg`,
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
        iconSrc: `${OPS}/icon-eye.svg`,
        title: 'Centralized visibility',
        body: 'Track progress, priorities, workloads, and blockers from one operational overview.',
      },
      {
        iconSrc: `${OPS}/icon-ai.svg`,
        title: 'AI-powered coordination',
        body: 'Use clics One to summarize work, find blockers, generate updates, and reduce manual follow-ups.',
      },
      {
        iconSrc: `${OPS}/icon-process.svg`,
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
      imageSrc: `${OPS}/totaltask-visibility.svg`,
    },
    {
      title: 'Status and progress tracking',
      body: 'Status flows from tasks → projects → portfolio. No spreadsheets, no manual rollups.',
      imageSrc: `${OPS}/status-progress.svg`,
      reverse: true,
    },
    {
      title: 'Workload by team member',
      body: 'Capacity views show who is overcommitted before deadlines slip.',
      imageSrc: `${OPS}/workteam.svg`,
    },
    {
      title: 'Priority and overdue insights',
      body: 'AI sorts your portfolio by risk and ranks priorities for your standup.',
      imageSrc: `${OPS}/priority.svg`,
      reverse: true,
    },
  ],
  aiAssistant: {
    eyebrow: 'clics AI',
    title: (
      <>
        Meet your <Highlight color="violet">AI operations</Highlight> assistant
      </>
    ),
    subtitle:
      'Ask questions, create updates, summarize work, and let AI agents help your team stay ahead of operational blockers.',
    items: [
      { icon: Bot,           iconBg: 'bg-violet-100 text-violet-600', title: 'Operations Agent', body: 'Monitors tasks, blockers, and pending work.' },
      { icon: FileBarChart,  iconBg: 'bg-pink-100 text-pink-600',     title: 'Reporting Agent',  body: 'Generates weekly updates and progress summaries.' },
      { icon: AlertTriangle, iconBg: 'bg-amber-100 text-amber-600',   title: 'Escalation Agent', body: 'Flags overdue or high-priority tasks automatically.' },
      { icon: FileText,      iconBg: 'bg-sky-100 text-sky-600',       title: 'Docs Assistant',   body: 'Helps teams find answers from internal docs.' },
    ],
  },
  spaces: {
    eyebrow: 'Spaces',
    title: 'Organize operations your way',
    subtitle: 'Use flexible spaces and multiple views to manage work the way your team prefers.',
    tabs: ['Overview', 'List', 'Kanban', 'Calendar', 'Gantt'],
  },
  integrations: {
    eyebrow: 'Integrations',
    title: 'Connect your operational stack',
    subtitle: 'Bring your tools closer to the work your team manages in clicsHQ.',
    logos: [
      { src: `${TOOL}/dropbox.svg`, alt: 'Dropbox' },
      { src: `${TOOL}/msTeams.svg`, alt: 'Microsoft Teams' },
      { src: `${TOOL}/g-drive.svg`, alt: 'Google Drive' },
      { src: `${TOOL}/Jira.svg`,    alt: 'Jira' },
      { src: `${TOOL}/Github.svg`,  alt: 'GitHub' },
      { src: `${TOOL}/Figma.svg`,   alt: 'Figma' },
      { src: `${TOOL}/Slack.svg`,   alt: 'Slack' },
    ],
  },
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
