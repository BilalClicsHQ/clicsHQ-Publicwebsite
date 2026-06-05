import type { Metadata } from 'next'
import { Eye, Sparkles, Workflow } from 'lucide-react'
import { SolutionPage, type SolutionPageConfig } from '@/components/marketing/shared/SolutionPage'
import { Highlight } from '@/components/marketing/shared/Highlight'

export const metadata: Metadata = { title: 'For HR teams' }

const config: SolutionPageConfig = {
  hero: {
    eyebrow: 'clicsHQ for HR',
    eyebrowColor: 'text-ink',
    eyebrowUppercase: false,
    title: (
      <>
        Hire, onboard, and grow on <Highlight color="green">one</Highlight> workspace
      </>
    ),
    subtitle: 'Interview pipelines, onboarding checklists, perf reviews, and engagement — all in one place.',
    primaryLabel: 'Get Started',
    mockupSrc: '/images/dashboards/ClicshqPage.svg',
    background: 'light',
  },
  benefits: {
    title: (
      <>
        Everything your <Highlight color="green">HR team</Highlight> needs to scale people ops
      </>
    ),
    items: [
      { icon: Eye,      iconBg: 'bg-violet-100 text-violet-600',  title: 'People visibility', body: 'Track every hire, onboarding, and review in one place.' },
      { icon: Sparkles, iconBg: 'bg-pink-100 text-pink-600',       title: 'AI assistance',     body: 'Draft job descriptions, summarize 1:1s, generate review templates.' },
      { icon: Workflow, iconBg: 'bg-emerald-100 text-emerald-600', title: 'Connected workflows', body: 'Sync with your ATS, payroll, and IT provisioning systems.' },
    ],
  },
  splitRows: [
    { eyebrow: 'Hiring',     title: 'Run a structured hiring pipeline',  body: 'Stages, scorecards, and panel feedback in clicsHQ — wired to your ATS.', imageSrc: '/images/dashboards/ClicshqPage.svg' },
    { eyebrow: 'Onboarding', title: 'Onboarding that actually finishes', body: 'Every new hire gets a personalized 30/60/90 plan with owners and reminders.', imageSrc: '/images/dashboards/ClicshqPage.svg', reverse: true },
    { eyebrow: 'Reviews',    title: 'Performance reviews without spreadsheets', body: 'Calibration, 360s, and growth plans run end-to-end in clicsHQ.', imageSrc: '/images/dashboards/ClicshqPage.svg' },
  ],
  finalCTA: { title: 'Build a people operations engine', subtitle: 'Scale your team and culture with structured workflows.' },
}

export default function HRPage() {
  return <SolutionPage config={config} />
}
