import type { Metadata } from 'next'
import { Eye, Sparkles, Workflow, Bot, Bug, Rocket, FileText } from 'lucide-react'
import { SolutionPage, type SolutionPageConfig } from '@/components/marketing/shared/SolutionPage'
import { Highlight } from '@/components/marketing/shared/Highlight'

const TOOL = '/images/tools'

export const metadata: Metadata = { title: 'For Engineering teams' }

const config: SolutionPageConfig = {
  hero: {
    eyebrow: 'clicsHQ for Engineering',
    eyebrowColor: 'text-ink',
    eyebrowUppercase: false,
    title: (
      <>
        Ship faster with <br className="hidden lg:block" />less engineering <br className="hidden lg:block" />chaos
      </>
    ),
    subtitle:
      'Plan sprints, track bugs, coordinate releases, manage engineering requests, and keep product, design, and development teams aligned.',
    primaryLabel: 'Get Started',
    secondaryLabel: 'Book a demo',
    mockupSrc: '/images/dashboards/ClicshqPage.svg',
    background: 'light',
  },
  benefits: {
    eyebrow: 'Why Engineering Teams Choose clicsHQ',
    title: (
      <>
        Everything your <Highlight color="blue">engineering team</Highlight> <br className="hidden lg:block" />needs to stay focused
      </>
    ),
    subtitle: 'Bring work, visibility, workflows, docs, and AI assistance into one simple workspace.',
    items: [
      { icon: Eye,      iconBg: 'bg-violet-100 text-violet-600',  title: 'Sprint visibility',  body: 'See every sprint, blocker, and PR — across squads.' },
      { icon: Sparkles, iconBg: 'bg-pink-100 text-pink-600',      title: 'AI-powered execution', body: 'Bug Triage Agent, Standup Agent, Sprint Agent — built in.' },
      { icon: Workflow, iconBg: 'bg-emerald-100 text-emerald-600', title: 'Connected engineering workflows', body: 'Two-way sync with GitHub, Linear, Jira, PagerDuty.' },
    ],
  },
  intro: {
    eyebrow: 'Engineering Visibility',
    title: 'Stay on top of sprints without chasing updates',
    subtitle:
      'Space Overview gives engineering teams a clear view of sprint progress, workload, priority tasks, blocked work, and overdue items.',
  },
  splitRows: [
    { title: 'Sprint progress tracking',     body: 'Burndown, velocity, scope changes — automatically tracked.', imageSrc: '/images/dashboards/ClicshqPage.svg' },
    { title: 'Bug and blocker visibility',   body: 'AI scores severity, suggests owners, and routes to the right team.', imageSrc: '/images/dashboards/ClicshqPage.svg', reverse: true },
    { title: 'Workload by engineer',         body: 'Capacity-aware sprint planning. Reassign with one drag.', imageSrc: '/images/dashboards/ClicshqPage.svg' },
    { title: 'Priority and overdue insights', body: 'See overdue tasks and at-risk work before they block a release.', imageSrc: '/images/dashboards/ClicshqPage.svg', reverse: true },
  ],
  aiAssistant: {
    eyebrow: 'clics AI',
    title: (
      <>
        Meet your <Highlight color="violet">AI engineering</Highlight> assistant
      </>
    ),
    subtitle:
      'Ask questions, summarize standups, detect blockers, triage bugs, and let AI agents help your team move from backlog to release faster.',
    items: [
      { icon: Bot,      iconBg: 'bg-violet-100 text-violet-600', title: 'Sprint Agent',     body: 'Tracks sprint health, blockers, overdue tasks, and workload.' },
      { icon: Bug,      iconBg: 'bg-pink-100 text-pink-600',     title: 'Bug Triage Agent', body: 'Organizes bugs by severity, priority, owner, and status.' },
      { icon: Rocket,   iconBg: 'bg-amber-100 text-amber-600',   title: 'Release Agent',    body: 'Creates release checklists and monitors launch readiness.' },
      { icon: FileText, iconBg: 'bg-sky-100 text-sky-600',       title: 'Standup Agent',    body: 'Summarizes updates, blockers, and next steps for the team.' },
    ],
  },
  spaces: {
    eyebrow: 'Spaces',
    title: 'Organize engineering work your way',
    subtitle: 'Use flexible spaces and multiple views to manage the work the way your team prefers.',
    tabs: ['Overview', 'List', 'Kanban', 'Calendar', 'Gantt'],
  },
  integrations: {
    eyebrow: 'Integrations',
    title: 'Connect your engineering stack',
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
  finalCTA: { title: 'Ship more with clicsHQ', subtitle: 'Connect specs, sprints, and incidents on one platform.', primaryLabel: 'Get started', secondaryLabel: 'Book Demo' },
}

export default function EngineeringPage() {
  return <SolutionPage config={config} />
}
