import type { Metadata } from 'next'
import { Heart, Sparkles, Workflow } from 'lucide-react'
import { SolutionPage, type SolutionPageConfig } from '@/components/marketing/shared/SolutionPage'
import { Highlight } from '@/components/marketing/shared/Highlight'

export const metadata: Metadata = { title: 'For Non-Profits' }

const config: SolutionPageConfig = {
  hero: {
    eyebrow: 'clicsHQ for Non-Profits',
    eyebrowColor: 'text-emerald-600',
    title: (
      <>
        Coordinate <Highlight color="green">mission-driven</Highlight> work, one workspace
      </>
    ),
    subtitle:
      'Programs, volunteers, donors, impact tracking — bring it all together so your team can spend more time on the mission.',
    primaryLabel: 'Get Started',
    mockupSrc: '/images/dashboards/ClicshqPage.svg',
    background: 'light',
  },
  benefits: {
    title: (
      <>
        Built for the way <Highlight color="green">nonprofits</Highlight> manage programs
      </>
    ),
    items: [
      { icon: Heart,    iconBg: 'bg-rose-100 text-rose-600',       title: 'Volunteer coordination', body: 'Schedule, assign, and recognize volunteers in one place.' },
      { icon: Workflow, iconBg: 'bg-emerald-100 text-emerald-600', title: 'Program management',     body: 'Track every program initiative, milestone, and outcome.' },
      { icon: Sparkles, iconBg: 'bg-violet-100 text-violet-600',   title: 'Donor reports',          body: 'AI drafts impact reports from your own program data.' },
    ],
  },
  splitRows: [
    { eyebrow: 'Programs',   title: 'Run programs end-to-end',           body: 'Plan, execute, and measure outcomes from one workspace.',           imageSrc: '/images/dashboards/ClicshqPage.svg' },
    { eyebrow: 'Volunteers', title: 'Volunteer coordination, simplified', body: 'Onboard volunteers, schedule shifts, track contributions.',          imageSrc: '/images/dashboards/ClicshqPage.svg', reverse: true },
    { eyebrow: 'Impact',      title: 'Tell your impact story',            body: 'AI summarizes program data into reports your donors will read.',     imageSrc: '/images/dashboards/ClicshqPage.svg' },
  ],
  finalCTA: { title: 'Focus on the mission, not the paperwork', subtitle: 'clicsHQ keeps your programs, people, and impact connected.' },
}

export default function NonprofitsPage() {
  return <SolutionPage config={config} />
}
