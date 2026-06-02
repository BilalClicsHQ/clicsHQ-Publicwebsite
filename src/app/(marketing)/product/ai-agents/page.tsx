import type { Metadata } from 'next'
import { ProductPage, type ProductPageConfig } from '@/components/marketing/shared/ProductPage'
import { Highlight } from '@/components/marketing/shared/Highlight'

export const metadata: Metadata = { title: 'AI Agents' }

const config: ProductPageConfig = {
  hero: {
    eyebrow: 'AI Agents',
    eyebrowColor: 'text-fuchsia-600',
    title: (
      <>
        AI agents that <Highlight color="magenta">take action</Highlight>
      </>
    ),
    subtitle:
      'Project Planner, Meeting Summarizer, Status Reporter, Follow-up, Workload Analyzer, Executive Brief — and more.',
    primaryLabel: 'Get Started',
    mockupSrc: '/images/dashboards/ClicshqPage.svg',
    background: 'soft-pink',
  },
  intro: {
    title: (
      <>
        Deploy <Highlight color="magenta">AI agents</Highlight> for every team
      </>
    ),
    subtitle: 'Each agent is purpose-built for a job your team actually does every week.',
  },
  splitRows: [
    {
      eyebrow: 'Project Planner',
      title: 'Plans your next sprint in minutes',
      body: 'Reads existing work, owners, and capacity. Drafts a sprint plan you can edit and approve.',
      imageSrc: '/images/dashboards/ClicshqPage.svg',
    },
    {
      eyebrow: 'Status Reporter',
      title: 'Writes the status update for you',
      body: 'Summarizes the week, flags risks, calls out wins. Posts to your stakeholders on a schedule.',
      imageSrc: '/images/dashboards/ClicshqPage.svg',
      reverse: true,
    },
  ],
  crossGridAccentColor: 'magenta',
  faqs: [
    { q: 'Can I build my own agents?', a: 'Yes — clicsHQ supports custom agents with your own prompts, tools, and integrations.' },
    { q: 'Do agents respect permissions?', a: 'Every agent only sees what the invoking user can see. Admins can disable agents per workspace.' },
  ],
}

export default function AIAgentsPage() {
  return <ProductPage config={config} />
}
