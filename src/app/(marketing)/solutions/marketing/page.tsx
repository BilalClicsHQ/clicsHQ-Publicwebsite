import type { Metadata } from 'next'
import Image from 'next/image'
import { SolutionPage, type SolutionPageConfig } from '@/components/marketing/shared/SolutionPage'
import { Highlight } from '@/components/marketing/shared/Highlight'
import { HeroOverlayCard } from '@/components/marketing/shared/HeroOverlayCard'

const TOOL = '/images/tools'
const SOL = '/images/solutions/marketing'
const AI = '/images/ai'

export const metadata: Metadata = { title: 'For Marketing teams' }

const config: SolutionPageConfig = {
  hero: {
    eyebrow: 'clicsHQ for Marketing',
    eyebrowColor: 'text-ink',
    eyebrowUppercase: false,
    title: (
      <>
        Scale campaigns<br className="hidden lg:block" /> without scaling<br className="hidden lg:block" /> chaos
      </>
    ),
    subtitle:
      'Plan campaigns, manage content, track creative requests, coordinate approvals, and launch faster from one AI-powered workspace.',
    primaryLabel: 'Get Started',
    secondaryLabel: 'Book a demo',
    mockupSrc: `${SOL}/hero1.svg`,
    mockupOverlay: (
      <HeroOverlayCard
        title="2 approvals pending"
        body="Your Campaign Agent found pending reviews and one launch task that needs attention."
        className="bottom-6 right-3 sm:right-6"
      />
    ),
    background: 'light',
  },
  benefits: {
    eyebrow: 'Why Marketing Teams Choose clicsHQ',
    title: (
      <>
        Everything your <Highlight color="blue">marketing team</Highlight> needs<br className="hidden lg:block" /> to launch faster
      </>
    ),
    subtitle: 'Bring work, visibility, workflows, docs, and AI assistance into one simple workspace.',
    items: [
      { iconSrc: `${SOL}/icon-a.svg`, title: 'Campaign visibility',         body: 'Track campaigns, content progress, approvals, owners, deadlines, and launch readiness from one place.' },
      { iconSrc: `${SOL}/icon-b.svg`, title: 'AI-powered coordination',     body: 'Use clics One to summarize updates, create briefs, find blockers, and generate marketing task lists.' },
      { iconSrc: `${SOL}/icon-c.svg`, title: 'Flexible marketing workflows', body: 'Automate creative requests, approvals, launch reminders, and campaign handoffs without complexity.' },
    ],
  },
  intro: {
    eyebrow: 'Campaign Visibility',
    title: 'Stay on top of every campaign without chasing updates',
    subtitle:
      'Space Overview gives marketing teams a clear view of campaign progress, creative workload, approvals, and priority items.',
  },
  splitRows: [
    { title: 'Campaign progress tracking',           body: 'A live portfolio of campaigns with status, owners, and dependencies.',                  imageSrc: `${SOL}/split-1.svg` },
    { title: 'Creative and content task visibility', body: 'Brief, assign, review, and ship — without a single screen change.',                      imageSrc: `${SOL}/split-2.svg`, reverse: true },
    { title: 'Workload by team member',              body: 'Don’t over-book your designers or writers — capacity views show real bandwidth.',     imageSrc: `${SOL}/split-3.svg` },
    { title: 'Approval and overdue insights',        body: 'See pending approvals and overdue work at a glance so nothing slips before launch.',  imageSrc: `${SOL}/split-4.svg`, reverse: true },
  ],
  aiAssistant: {
    eyebrow: 'clics AI',
    title: (
      <>
        Meet your <Highlight color="violet">AI marketing</Highlight> assistant
      </>
    ),
    subtitle:
      'Ask questions, create campaign briefs, summarize updates, and let AI agents help your team move from idea to launch faster.',
    items: [
      { avatarSrc: `${AI}/avatar-project-planner.png`,  title: 'Campaign Agent',  body: 'Creates campaign plans, launch checklists, and task lists.' },
      { avatarSrc: `${AI}/avatar-executive-brief.png`,  title: 'Content Agent',   body: 'Turns ideas into briefs, outlines, drafts, and content tasks.' },
      { avatarSrc: `${AI}/avatar-follow-up.png`,        title: 'Approval Agent',  body: 'Tracks pending reviews and reminds the right owners.' },
      { avatarSrc: `${AI}/avatar-status-reporter.png`,  title: 'Reporting Agent', body: 'Summarizes campaign progress and weekly marketing updates.' },
    ],
  },
  useCases: {
    eyebrow: 'Marketing Use Cases',
    title: (
      <>
        Built for the work marketing<br className="hidden lg:block" /> teams manage every day
      </>
    ),
    image: `${SOL}/chart 1.svg`,
    imageAlt: 'clicsHQ marketing campaign dashboard',
    tiles: [
      { title: 'Campaign planning',   body: 'Plan launches, map dependencies, and keep every campaign task, owner, and deadline in one place.' },
      { title: 'Content production',  body: 'Brief, draft, review, and ship content without losing track of approvals or revisions.' },
      { title: 'Creative requests',   body: 'Intake design and creative requests, route them to the right owner, and track them to done.' },
      { title: 'Launch coordination', body: 'Coordinate cross-team launches with clear checklists, handoffs, and go-live readiness.' },
    ],
  },
  workflowAutomation: {
    eyebrow: 'Workflow Automation',
    title: (
      <>
        Automate campaign<br className="hidden lg:block" /> handoffs
      </>
    ),
    body:
      'Build simple When → Then workflows to reduce manual follow-ups, missed approvals, and campaign handoff gaps.',
    visual: (
      <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <Image
          src="/images/solutions/smallBussiness/workflow-automation.svg"
          alt="When → Then workflow automation example"
          width={493}
          height={325}
          className="h-auto w-full"
        />
      </div>
    ),
  },
  spaces: {
    eyebrow: 'Spaces',
    title: 'Organize marketing your way',
    subtitle: 'Use flexible spaces and multiple views to manage work the way your team prefers.',
    tabs: ['Overview', 'List', 'Kanban', 'Calendar', 'Gantt'],
  },
  integrations: {
    eyebrow: 'Integrations',
    title: 'Connect your marketing stack',
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
    title: 'Launch campaigns faster with clicsHQ',
    subtitle: 'Bring campaign planning, execution, approvals, and AI assistance into one connected workspace.',
    primaryLabel: 'Get started',
    secondaryLabel: 'Book Demo',
    image: '/images/solutions/footer/footer2.png',
    imageAlt: '',
  },
}

export default function MarketingPage() {
  return <SolutionPage config={config} />
}
