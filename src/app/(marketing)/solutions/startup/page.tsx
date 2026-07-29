import type { Metadata } from 'next'
import { Focus, Layers, Waypoints, BotMessageSquare, LayoutGrid, FileText, Workflow } from 'lucide-react'
import { SolutionPage, type SolutionPageConfig } from '@/components/marketing/shared/SolutionPage'
import { Highlight } from '@/components/marketing/shared/Highlight'
import { HeroOverlayCard } from '@/components/marketing/shared/HeroOverlayCard'

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
    mockupOverlay: (
      <HeroOverlayCard
        title="Status update summarized"
        body="clics AI summarized recent task updates, blockers, and next steps."
        className="bottom-6 right-3 sm:right-6"
      />
    ),
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
      { icon: Focus,            title: 'Capture work',       body: 'Turn ideas, requests, and notes into tasks.' },
      { icon: Layers,           title: 'Organize in spaces', body: 'Group work by project, team, or initiative.' },
      { icon: Waypoints,        title: 'Track execution',    body: 'Use List, Kanban, Calendar, and Gantt views to manage progress.' },
      { icon: BotMessageSquare, title: 'Use AI support',     body: 'Ask clics One to summarize work and create clearer updates.' },
    ],
  },
  darkBanner: {
    eyebrow: 'Startup workspace',
    title: (
      <>
        One workspace for startup work<br className="hidden lg:block" /> that changes every week
      </>
    ),
    body: 'clicsHQ keeps tasks, docs, workflows, spaces, integrations, and AI assistance connected in one place.',
    tiles: [
      { icon: LayoutGrid, title: 'Tasks and project views', body: 'Manage task lists, Kanban boards, calendars, and project timelines.' },
      { icon: FileText,   title: 'Docs and Ask AI',         body: 'Create docs, keep notes with the work, and use Ask AI when you need answers faster.' },
      { icon: Workflow,   title: 'Workflow automation',     body: 'Use simple When → Then workflows for notifications, labels, comments, and task updates.' },
    ],
  },
  intro: {
    eyebrow: 'Startup visibility',
    title: 'See what is moving, stuck, or waiting',
    subtitle: 'Give your team a clear view of progress, ownership, overdue items, and blocked tasks without chasing updates.',
  },
  splitRows: [
    { title: 'Task progress and blockers',       body: 'Collaborate live with comments, mentions, shared editing, and instant updates across your team.', imageSrc: '/images/solutions/Sales/05. Kanban Board-2 1 (1).svg' },
    { title: 'Ownership and workload visibility', body: 'Collaborate live with comments, mentions, shared editing, and instant updates across your team.', imageSrc: '/images/solutions/Sales/05. Kanban Board-3 1 (1).svg', reverse: true },
    { title: 'AI-generated task summaries',       body: 'Collaborate live with comments, mentions, shared editing, and instant updates across your team.', imageSrc: '/images/solutions/Sales/Group 1171275314.svg' },
  ],
  workflowCards: {
    eyebrow: 'Workflow automation',
    title: 'Simple workflows for startup teams',
    subtitle: 'Automate common task updates without creating complex logic.',
    cards: [
      {
        title: 'Task review workflow',
        steps: [
          { label: 'When', sub: 'Task status changes to Ready' },
          { label: 'Then', sub: 'Assign reviewer' },
          { label: 'Then', sub: 'Notify the task owner' },
        ],
      },
      {
        title: 'Overdue task workflow',
        steps: [
          { label: 'When', sub: 'Task becomes overdue' },
          { label: 'Then', sub: 'Notify task owner' },
          { label: 'Then', sub: 'Flag as high priority' },
        ],
      },
      {
        title: 'Comment notification workflow',
        steps: [
          { label: 'When', sub: 'Comment is added' },
          { label: 'Then', sub: 'Notify mentioned members' },
          { label: 'Then', sub: 'Add to the activity feed' },
        ],
      },
    ],
  },
  aiAssistant: {
    eyebrow: 'clics AI',
    title: (
      <>
        <Highlight color="violet">AI assistance</Highlight> for daily startup work
      </>
    ),
    subtitle:
      'Use clics One to summarize work, create subtasks, generate status updates, and help your team find context faster.',
    items: [
      { title: 'Prompt',    body: '“Summarize updates from this project.”' },
      { title: 'AI output', body: 'Summary of completed work, blockers, and next steps.' },
      { title: 'Prompt',    body: '“Break this task into subtasks.”' },
      { title: 'AI output', body: 'Suggested subtasks that the team can review and assign.' },
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
  finalCTA: { title: 'Launch campaigns faster with clicsHQ', subtitle: 'Bring campaign planning, execution, approvals, and AI assistance into one connected workspace.', primaryLabel: 'Get started', secondaryLabel: 'Book Demo', image: '/images/solutions/footer/footer2.png' },
}

export default function StartupSolutionPage() {
  return <SolutionPage config={config} />
}
