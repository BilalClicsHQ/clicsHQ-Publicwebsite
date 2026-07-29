import type { Metadata } from 'next'
import Image from 'next/image'
import { SolutionPage, type SolutionPageConfig } from '@/components/marketing/shared/SolutionPage'
import { Highlight } from '@/components/marketing/shared/Highlight'
import { HeroOverlayCard } from '@/components/marketing/shared/HeroOverlayCard'

const TOOL = '/images/tools'
const SOL = '/images/solutions/Engineering'
const AI = '/images/ai'

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
    mockupSrc: `${SOL}/hero1.svg`,
    mockupOverlay: (
      <HeroOverlayCard
        title="5 blockers detected"
        body="Your Sprint Agent found blocked tasks, high-priority bugs, and pending PR reviews."
        className="bottom-6 right-3 sm:right-6"
      />
    ),
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
      { iconSrc: `${SOL}/icon-a.svg`, title: 'Sprint visibility',  body: 'Track sprints, blockers, PRs, owners, deadlines, and release readiness from one place.' },
      { iconSrc: `${SOL}/icon-b.svg`, title: 'AI-powered execution', body: 'Use clics One to summarize updates, create briefs, find blockers, and generate engineering task lists.' },
      { iconSrc: `${SOL}/icon-c.svg`, title: 'Connected engineering workflows', body: 'Automate engineering requests, approvals, release reminders, and team handoffs without complexity.' },
    ],
  },
  intro: {
    eyebrow: 'Engineering Visibility',
    title: 'Stay on top of sprints without chasing updates',
    subtitle:
      'Space Overview gives engineering teams a clear view of sprint progress, workload, priority tasks, blocked work, and overdue items.',
  },
  splitRows: [
    // NOTE: split-3 (Sprint Board list) is reused for both "Sprint progress tracking"
    // and "Priority and overdue insights" — there is no distinct list asset for the
    // former. split-4 (a bird illustration) was the wrong asset and is no longer used.
    { title: 'Sprint progress tracking',     body: 'Collaborate live with comments, mentions, shared editing, and instant updates across your team.', imageSrc: `${SOL}/split-3.svg` },
    { title: 'Bug and blocker visibility',   body: 'Collaborate live with comments, mentions, shared editing, and instant updates across your team.', imageSrc: `${SOL}/split-2.svg`, reverse: true },
    { title: 'Workload by engineer',         body: 'Collaborate live with comments, mentions, shared editing, and instant updates across your team.', imageSrc: `${SOL}/split-1.svg` },
    { title: 'Priority and overdue insights', body: 'Collaborate live with comments, mentions, shared editing, and instant updates across your team.', imageSrc: `${SOL}/split-3.svg`, reverse: true },
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
      { avatarSrc: `${AI}/avatar-project-planner.png`,   title: 'Sprint Agent',     body: 'Tracks sprint health, blockers, overdue tasks, and workload.' },
      { avatarSrc: `${AI}/avatar-meeting-summarizer.png`, title: 'Bug Triage Agent', body: 'Organizes bugs by severity, priority, owner, and status.' },
      { avatarSrc: `${AI}/avatar-status-reporter.png`,   title: 'Release Agent',    body: 'Creates release checklists and monitors launch readiness.' },
      { avatarSrc: `${AI}/avatar-follow-up.png`,         title: 'Standup Agent',    body: 'Summarizes updates, blockers, and next steps for the team.' },
    ],
  },
  useCases: {
    eyebrow: 'Engineering Use Cases',
    title: (
      <>
        Built for the work engineering<br className="hidden lg:block" /> teams manage every day
      </>
    ),
    image: '/images/solutions/Sales/Display-name-Login-2 1.svg',
    imageAlt: 'clicsHQ engineering sprint dashboard',
    tiles: [
      { title: 'Sprint planning',       body: 'Plan sprint scope, priorities, owners, and timelines in one shared workspace.' },
      { title: 'Bug tracking',          body: 'Capture bugs, assign severity, track progress, and keep QA and engineering aligned.' },
      { title: 'Release coordination',  body: 'Manage release tasks, QA checklists, approvals, and launch readiness across teams.' },
      { title: 'Engineering requests',  body: 'Collect requests from product, support, design, and leadership without losing context.' },
    ],
  },
  workflowAutomation: {
    eyebrow: 'Workflow Automation',
    title: (
      <>
        Automate engineering<br className="hidden lg:block" /> handoffs
      </>
    ),
    body:
      'Build simple When → Then workflows to reduce manual status updates, bug escalations, and release follow-ups.',
    visual: (
      <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <Image
          src={`${SOL}/Frame 2147205964.svg`}
          alt="When → Then engineering workflow automation example"
          width={493}
          height={325}
          className="h-auto w-full"
        />
      </div>
    ),
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
  finalCTA: { title: 'Launch campaigns faster with clicsHQ', subtitle: 'Bring campaign planning, execution, approvals, and AI assistance into one connected workspace.', primaryLabel: 'Get started', secondaryLabel: 'Book Demo', image: '/images/solutions/footer/footer2.png' },
}

export default function EngineeringPage() {
  return <SolutionPage config={config} />
}
