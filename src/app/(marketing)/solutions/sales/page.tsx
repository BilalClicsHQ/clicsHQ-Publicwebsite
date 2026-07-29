 import type { Metadata } from 'next'
import Image from 'next/image'
import { SolutionPage, type SolutionPageConfig } from '@/components/marketing/shared/SolutionPage'
import { Highlight } from '@/components/marketing/shared/Highlight'
import { HeroOverlayCard } from '@/components/marketing/shared/HeroOverlayCard'

const TOOL = '/images/tools'
const SOL = '/images/solutions/Sales'
const AI = '/images/ai'

export const metadata: Metadata = { title: 'For Sales teams' }

const config: SolutionPageConfig = {
  hero: {
    eyebrow: 'clicsHQ for Sales',
    eyebrowColor: 'text-ink',
    eyebrowUppercase: false,
    title: (
      <>
        Turn every lead<br className="hidden lg:block" /> into clear next<br className="hidden lg:block" /> steps
      </>
    ),
    subtitle:
      'Manage pipeline tasks, follow-ups, proposals, approvals, customer handoffs, and sales team coordination from one AI-powered workspace.',
    primaryLabel: 'Get Started',
    secondaryLabel: 'Book a demo',
    mockupSrc: `${SOL}/hero1.svg`,
    mockupOverlay: (
      <HeroOverlayCard
        title="9 follow-ups due"
        body="Follow-up Agent found overdue deal tasks and pending proposal approvals."
        className="bottom-6 right-3 sm:right-6"
      />
    ),
    background: 'light',
  },
  benefits: {
    eyebrow: 'Why Sales Teams Choose clicsHQ',
    title: (
      <>
        Everything your <Highlight color="blue">sales team</Highlight> needs to<br className="hidden lg:block" /> keep deals moving
      </>
    ),
    subtitle:
      'Bring work, visibility, workflows, docs, and AI assistance into one simple workspace.',
    items: [
      { iconSrc: `${SOL}/icon-a.svg`, title: 'Pipeline visibility',         body: 'Track leads, deal tasks, proposals, approvals, owners, and follow-ups from one place.' },
      { iconSrc: `${SOL}/icon-b.svg`, title: 'AI-powered follow-ups',       body: 'Use clics One to summarize meetings, generate updates, break down tasks, and remind owners.' },
      { iconSrc: `${SOL}/icon-c.svg`, title: 'Connected sales workflows',   body: 'Automate lead assignment, proposal approvals, follow-up reminders, and customer handoffs.' },
    ],
  },
  intro: {
    eyebrow: 'Sales Visibility',
    title: (
      <>
        Stay on top of every deal without<br className="hidden lg:block" /> chasing updates
      </>
    ),
    subtitle:
      'Give your sales team a clear view of pipeline progress, proposal approvals, overdue follow-ups, and customer handoffs.',
  },
  splitRows: [
    { title: (<>Lead and pipeline task<br className="hidden lg:block" /> tracking</>),     body: 'Inbound leads, calls, emails — auto-logged into the right deal.', imageSrc: `${SOL}/split-1.svg` },
    { title: (<>Proposal and approval<br className="hidden lg:block" /> visibility</>),     body: 'Generate proposal docs from call notes. Reviewers approve in clicsHQ.', imageSrc: `${SOL}/split-2.svg`, reverse: true },
    { title: (<>Follow-up reminders<br className="hidden lg:block" /> by owner</>),         body: 'AI suggests follow-ups based on prospect engagement and deal stage.', imageSrc: `${SOL}/split-3.svg` },
  ],
  aiAssistant: {
    eyebrow: 'clics AI',
    title: (
      <>
        Meet your <Highlight color="violet">AI sales</Highlight> assistant
      </>
    ),
    subtitle:
      'Use built-in AI agents to summarize calls, generate updates, break down tasks, track follow-ups, and keep sales work moving.',
    items: [
      { avatarSrc: `${AI}/avatar-project-planner.png`,   title: 'Meeting Summarizer', body: 'Turns discovery calls, demos, and internal sales meetings into clear summaries and action items.' },
      { avatarSrc: `${AI}/avatar-meeting-summarizer.png`, title: 'Status Reporter',    body: 'Generates quick deal and pipeline updates with completed work and next steps.' },
      { avatarSrc: `${AI}/avatar-status-reporter.png`,   title: 'Follow-up Agent',    body: 'Reminds reps about inactive leads, pending follow-ups, and stale sales tasks.' },
      { avatarSrc: `${AI}/avatar-follow-up.png`,         title: 'Executive Brief',    body: 'Creates a high-level sales summary for leadership with risks, updates, and sales highlights.' },
    ],
  },
  useCases: {
    eyebrow: 'Sales Use Cases',
    title: (
      <>
        Built for the work sales<br className="hidden lg:block" /> teams manage every day
      </>
    ),
    // NOTE (review): best-guess asset — `chart 1.svg` is the largest dashboard export
    // and matches the Figma Sales Pipeline stats/charts screenshot. Alt: `Group 1171275314.svg`.
    image: `${SOL}/chart 1.svg`,
    imageAlt: 'clicsHQ sales pipeline dashboard',
    tiles: [
      { title: 'Lead follow-ups',   body: 'Track every lead, next step, owner, and follow-up deadline in one shared workspace.' },
      { title: 'Deal tracking',     body: 'Manage pipeline tasks, deal stages, approvals, and customer conversations without losing context.' },
      { title: 'Proposal approvals', body: 'Coordinate pricing, legal review, discounts, and stakeholder approvals before proposals go out.' },
      { title: 'Customer handoffs',  body: 'Move closed deals to onboarding with clear notes, tasks, owners, and next actions.' },
    ],
  },
  workflowAutomation: {
    eyebrow: 'Workflow Automation',
    title: (
      <>
        Automate sales<br className="hidden lg:block" /> handoffs
      </>
    ),
    body:
      'Build simple When → Then workflows to reduce manual follow-ups, missed reminders, and deal handoff gaps.',
    visual: (
      <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <Image
          src={`${SOL}/Frame 2147205965.svg`}
          alt="When → Then sales workflow automation example"
          width={493}
          height={325}
          className="h-auto w-full"
        />
      </div>
    ),
  },
  spaces: {
    eyebrow: 'Spaces',
    title: 'Organize sales your way',
    subtitle: 'Use flexible spaces and multiple views to manage work the way your team prefers.',
    tabs: ['Overview', 'List', 'Kanban', 'Calendar', 'Gantt'],
  },
  integrations: {
    eyebrow: 'Integrations',
    title: 'Connect your sales stack',
    subtitle: 'Bring sales tools closer to the leads, deals, and customer handoffs your team manages in clicsHQ.',
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

export default function SalesPage() {
  return <SolutionPage config={config} />
}
