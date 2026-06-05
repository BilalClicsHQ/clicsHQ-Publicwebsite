import type { Metadata } from 'next'
import { Eye, Sparkles, Workflow, Zap, Bot, FileBarChart, ListChecks, FileText } from 'lucide-react'
import { SolutionPage, type SolutionPageConfig } from '@/components/marketing/shared/SolutionPage'
import { Highlight } from '@/components/marketing/shared/Highlight'

const TOOL = '/images/tools'

export const metadata: Metadata = { title: 'For Startups' }

const config: SolutionPageConfig = {
  hero: {
    eyebrow: 'clicsHQ for Startups',
    eyebrowColor: 'text-ink',
    eyebrowUppercase: false,
    title: (
      <>
        A simple<br className="hidden lg:block" /> workspace for<br className="hidden lg:block" /> startups that move<br className="hidden lg:block" /> fast
      </>
    ),
    subtitle:
      'Bring tasks, docs, workflows, spaces, integrations, and clics One into one place so your team can stay aligned while moving fast.',
    primaryLabel: 'Get Started',
    secondaryLabel: 'Book a demo',
    mockupSrc: '/images/dashboards/ClicshqPage.svg',
    background: 'soft-violet',
  },
  benefits: {
    columns: 4,
    eyebrow: 'From idea to execution',
    title: (
      <>
        Keep work moving without adding tool<br className="hidden lg:block" /> chaos
      </>
    ),
    subtitle: 'Startups need one simple place to plan, assign, discuss, and track work.',
    items: [
      { icon: Eye,      iconBg: 'bg-violet-100 text-violet-600',   title: 'Capture work',        body: 'Turn ideas, requests, and notes into tasks.' },
      { icon: Zap,      iconBg: 'bg-amber-100 text-amber-600',     title: 'Organize in spaces',  body: 'Group work by project, team, or initiative.' },
      { icon: Workflow, iconBg: 'bg-emerald-100 text-emerald-600', title: 'Track execution',     body: 'Use List, Kanban, Calendar, and Gantt views to manage progress.' },
      { icon: Sparkles, iconBg: 'bg-pink-100 text-pink-600',       title: 'Use AI support',      body: 'Ask clics One to summarize work and create clearer updates.' },
    ],
  },
  intro: {
    eyebrow: 'Startup visibility',
    title: 'See what is moving, stuck, or waiting',
    subtitle: 'Give your team a clear view of progress, ownership, overdue items, and blocked tasks without chasing updates.',
  },
  splitRows: [
    { title: 'Task progress and blockers',           body: 'See active work, what is on track, and what is stuck across every project.',         imageSrc: '/images/dashboards/ClicshqPage.svg' },
    { title: 'Ownership and workload visibility',     body: 'Know who owns what and how work is balanced across the team.',                       imageSrc: '/images/dashboards/ClicshqPage.svg', reverse: true },
    { title: 'AI-generated task summaries',           body: 'Let clics One recap progress, blockers, and next steps so updates write themselves.', imageSrc: '/images/dashboards/ClicshqPage.svg' },
  ],
  aiAssistant: {
    eyebrow: 'clics AI',
    title: (
      <>
        Meet your <Highlight color="violet">AI startup</Highlight> assistant
      </>
    ),
    subtitle:
      'Ask questions, create updates, break down work, and let AI agents help your small team move faster without extra overhead.',
    items: [
      { icon: Bot,          iconBg: 'bg-violet-100 text-violet-600', title: 'Startup Agent',     body: 'Tracks tasks, blockers, and what needs attention next.' },
      { icon: ListChecks,   iconBg: 'bg-pink-100 text-pink-600',     title: 'Planning Agent',    body: 'Breaks big ideas into clear subtasks your team can run with.' },
      { icon: FileBarChart, iconBg: 'bg-amber-100 text-amber-600',   title: 'Reporting Agent',   body: 'Generates status updates and progress summaries automatically.' },
      { icon: FileText,     iconBg: 'bg-sky-100 text-sky-600',       title: 'Docs Assistant',    body: 'Helps your team find answers from notes and internal docs.' },
    ],
  },
  spaces: {
    eyebrow: 'Spaces',
    title: 'Organize startup work your way',
    subtitle: 'Use flexible spaces and multiple views to manage work the way your team prefers.',
    tabs: ['Overview', 'List', 'Kanban', 'Calendar', 'Gantt'],
  },
  integrations: {
    eyebrow: 'Integrations',
    title: 'Connect your startup stack',
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
  finalCTA: { title: 'Ship like a 10x team from day one', subtitle: 'Get every team aligned without adding tools.', primaryLabel: 'Get started', secondaryLabel: 'Book Demo' },
}

export default function StartupSolutionPage() {
  return <SolutionPage config={config} />
}
