import type { Metadata } from 'next'
import { Heart, Sparkles, Workflow, Bot, FileBarChart, AlertTriangle, FileText } from 'lucide-react'
import { SolutionPage, type SolutionPageConfig } from '@/components/marketing/shared/SolutionPage'
import { Highlight } from '@/components/marketing/shared/Highlight'

const TOOL = '/images/tools'

export const metadata: Metadata = { title: 'For Non-Profits' }

const config: SolutionPageConfig = {
  hero: {
    eyebrow: 'clicsHQ for Nonprofits',
    eyebrowColor: 'text-ink',
    eyebrowUppercase: false,
    title: (
      <>
        Run your nonprofit<br className="hidden lg:block" /> work with more<br className="hidden lg:block" /> clarity
      </>
    ),
    subtitle:
      'Plan programs, manage volunteers, track campaigns, organize docs, and keep your team aligned in one simple workspace.',
    primaryLabel: 'Get Started',
    secondaryLabel: 'Book a demo',
    mockupSrc: '/images/dashboards/ClicshqPage.svg',
    background: 'light',
  },
  benefits: {
    eyebrow: 'Nonprofit Use Cases',
    title: (
      <>
        Built for the everyday work <Highlight color="blue">nonprofits</Highlight> manage
      </>
    ),
    subtitle: 'Keep your team focused on mission delivery, not scattered updates.',
    items: [
      { icon: Heart,    iconBg: 'bg-rose-100 text-rose-600',       title: 'Volunteer coordination', body: 'Assign work, track shifts, and keep volunteer tasks visible.' },
      { icon: Workflow, iconBg: 'bg-emerald-100 text-emerald-600', title: 'Program management',     body: 'Manage initiatives, timelines, ownership, and progress updates.' },
      { icon: Sparkles, iconBg: 'bg-violet-100 text-violet-600',   title: 'Donor and campaign work', body: 'Organize reports, communications, events, and approvals.' },
    ],
  },
  splitRows: [
    { eyebrow: 'Program Tracking', title: 'Track your programs and impact work',     body: 'Organize program tasks, owners, deadlines, updates, and supporting docs so nothing falls through the cracks.', imageSrc: '/images/dashboards/ClicshqPage.svg' },
    { eyebrow: 'Planning',          title: 'Schedule and manage tasks or events',    body: 'Create event checklists, assign volunteer tasks, track approvals, and keep every team member clear on what needs to happen next.', imageSrc: '/images/dashboards/ClicshqPage.svg', reverse: true },
    { eyebrow: 'Impact',            title: 'Tell your impact story',                 body: 'AI summarizes program data into reports your donors will read.', imageSrc: '/images/dashboards/ClicshqPage.svg' },
  ],
  aiAssistant: {
    eyebrow: 'clics AI',
    title: (
      <>
        Meet your <Highlight color="violet">AI nonprofit</Highlight> assistant
      </>
    ),
    subtitle:
      'Ask questions, create updates, summarize work, and let AI agents help your team stay focused on the mission.',
    items: [
      { icon: Bot,           iconBg: 'bg-violet-100 text-violet-600', title: 'Program Agent',     body: 'Monitors program tasks, volunteers, and pending work.' },
      { icon: FileBarChart,  iconBg: 'bg-pink-100 text-pink-600',     title: 'Reporting Agent',   body: 'Generates donor updates and impact summaries.' },
      { icon: AlertTriangle, iconBg: 'bg-amber-100 text-amber-600',   title: 'Escalation Agent',  body: 'Flags overdue or high-priority tasks automatically.' },
      { icon: FileText,      iconBg: 'bg-sky-100 text-sky-600',       title: 'Docs Assistant',    body: 'Helps teams find answers from internal docs.' },
    ],
  },
  spaces: {
    eyebrow: 'Spaces',
    title: 'Organize nonprofit work your way',
    subtitle: 'Use flexible spaces and multiple views to manage work the way your team prefers.',
    tabs: ['Overview', 'List', 'Kanban', 'Calendar', 'Gantt'],
  },
  integrations: {
    eyebrow: 'Integrations',
    title: 'Connect your nonprofit stack',
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
  finalCTA: { title: 'Grow your nonprofit with less operational noise', subtitle: 'Bring tasks, docs, events, volunteers, and workflows into one connected workspace.', primaryLabel: 'Get started', secondaryLabel: 'Book Demo' },
}

export default function NonprofitsPage() {
  return <SolutionPage config={config} />
}
