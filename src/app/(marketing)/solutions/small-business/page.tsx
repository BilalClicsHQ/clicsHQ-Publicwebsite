import type { Metadata } from 'next'
import { SolutionPage, type SolutionPageConfig } from '@/components/marketing/shared/SolutionPage'
import { Highlight } from '@/components/marketing/shared/Highlight'

const TOOL = '/images/tools'
const SOL = '/images/solutions/smallBussiness'
const AI = '/images/ai'

export const metadata: Metadata = { title: 'For Small Business' }

const config: SolutionPageConfig = {
  hero: {
    eyebrow: 'Small Business Suite',
    eyebrowColor: 'text-ink',
    eyebrowUppercase: false,
    title: (
      <>
        The simple<br className="hidden lg:block" /> workspace your<br className="hidden lg:block" /> small business<br className="hidden lg:block" /> needs
      </>
    ),
    subtitle:
      'Manage projects, tasks, docs, calendars, workflows, and AI updates in one place — without adding more tools or complexity.',
    primaryLabel: 'Get Started',
    secondaryLabel: 'Book a demo',
    mockupSrc: `${SOL}/hero1.svg`,
    background: 'soft-pink',
  },
  benefits: {
    eyebrow: 'Why Small Businesses Choose clicsHQ',
    title: (
      <>
        Work simply, stay organized,<br className="hidden lg:block" /> and save time
      </>
    ),
    items: [
      { iconSrc: `${SOL}/icon-a.svg`, title: 'Less tool switching', body: 'Tasks, docs, calendars, and team chats in one place.' },
      { iconSrc: `${SOL}/icon-b.svg`, title: 'Clear ownership',     body: 'Everyone knows what they own and what comes next.' },
      { iconSrc: `${SOL}/icon-c.svg`, title: 'AI that saves time',  body: 'AI drafts, summaries, and follow-ups — free up hours every week.' },
    ],
  },
  intro: {
    eyebrow: 'One place for daily work',
    title: (
      <>
        Replace scattered work with one{' '}
        <Highlight color="pink">connected workspace</Highlight>
      </>
    ),
    subtitle:
      'Keep your teams aligned and work moving with purpose-built solutions for every function, connected on one intelligent platform.',
    image: '/images/solutions/smallBussiness/daily-work.png',
    imageAlt: 'clicsHQ small business workspace',
  },
  splitRows: [
    {
      eyebrow: 'Business Overview',
      title: (
        <>
          See your team&apos;s work<br className="hidden lg:block" /> without chasing every<br className="hidden lg:block" /> update
        </>
      ),
      body: 'Give owners and managers a clear view of projects, deadlines, overdue tasks, and team priorities.',
      imageSrc: '/images/solutions/marketing/split-2.svg',
    },
    {
      eyebrow: 'Workflow Automation',
      title: (
        <>
          Automate simple<br className="hidden lg:block" /> business follow-ups
        </>
      ),
      body: 'Create simple When → Then workflows for reminders, ownership, updates, and handoffs.',
      imageSrc: `${SOL}/workflow-automation.svg`,
      reverse: true,
    },
  ],
  aiAssistant: {
    eyebrow: 'clics AI',
    title: (
      <>
        <Highlight color="violet">AI help</Highlight> for everyday business work
      </>
    ),
    subtitle:
      'Ask questions, summarize updates, draft replies, and let AI agents handle the busywork for your team.',
    items: [
      { avatarSrc: `${AI}/avatar-project-planner.png`,   title: 'Task Agent',     body: 'Creates and organizes task lists.' },
      { avatarSrc: `${AI}/avatar-meeting-summarizer.png`, title: 'Summary Agent',  body: 'Summarizes meetings and updates.' },
      { avatarSrc: `${AI}/avatar-status-reporter.png`,   title: 'Reminder Agent', body: 'Flags overdue and upcoming work.' },
      { avatarSrc: `${AI}/avatar-follow-up.png`,         title: 'Docs Assistant', body: 'Finds answers from team docs.' },
    ],
  },
  spaces: {
    eyebrow: 'Spaces',
    title: 'Organize work your way',
    subtitle: 'Use flexible spaces and multiple views to manage work the way your team prefers.',
    tabs: ['Overview', 'List', 'Kanban', 'Calendar', 'Gantt'],
  },
  integrations: {
    eyebrow: 'Integrations',
    title: 'Connect your everyday tools',
    subtitle: 'Bring the tools your team already uses closer to the projects and customers you manage in clicsHQ.',
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
    title: 'Run your small business from one workspace',
    subtitle: 'Manage projects, tasks, docs, workflows, and AI updates with clicsHQ.',
    primaryLabel: 'Get started',
    secondaryLabel: 'Book Demo',
    image: '/images/solutions/footer/footer2.png',
  },
}

export default function SmallBusinessPage() {
  return <SolutionPage config={config} />
}
