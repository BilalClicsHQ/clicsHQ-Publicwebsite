import type { Metadata } from 'next'
import { ProductPage, type ProductPageConfig } from '@/components/marketing/shared/ProductPage'
import { Highlight } from '@/components/marketing/shared/Highlight'

export const metadata: Metadata = { title: 'AI assists' }

const config: ProductPageConfig = {
  hero: {
    eyebrow: '✨ AI-powered workspace intelligence',
    eyebrowColor: 'text-fuchsia-600',
    title: (
      <>
        Build your <Highlight color="magenta">AI workforce</Highlight> inside clicsHQ
      </>
    ),
    subtitle:
      'Chat with AI, deploy specialised AI agents, and ask AI in any doc. clicsHQ AI turns plans into action.',
    primaryLabel: 'Get Started',
    secondaryLabel: 'Watch demo',
    mockupSrc: '/images/dashboards/ClicshqPage.svg',
    background: 'soft-pink',
  },
  intro: {
    title: (
      <>
        One AI. <Highlight color="magenta">Three ways</Highlight> to work.
      </>
    ),
    subtitle: 'Chat. Agents. Inline assistance. clicsHQ AI lives where the work is.',
  },
  splitRows: [
    {
      eyebrow: 'Chat',
      title: 'Chat with AI about your workspace',
      body:
        'Ask anything across your projects, docs, and people. clicsHQ AI uses your real workspace context to answer with sources.',
      bullets: ['Cited answers with links back to source docs', 'Project-aware — knows your team and goals', 'Available everywhere via Ctrl/⌘+K'],
      imageSrc: '/images/dashboards/ClicshqPage.svg',
    },
    {
      eyebrow: 'Agents',
      title: 'Deploy AI agents for every team',
      body:
        'Project Planner, Meeting Summarizer, Status Reporter, Follow-up Agent, Workload Analyzer, Executive Brief — and more.',
      imageSrc: '/images/dashboards/ClicshqPage.svg',
      reverse: true,
    },
    {
      eyebrow: 'In docs',
      title: 'Ask AI in any document',
      body:
        'Press Space inside any doc — draft an RFC, summarize a meeting, generate a status update. Stays inside your workspace.',
      imageSrc: '/images/dashboards/ClicshqPage.svg',
    },
  ],
  darkTilesSection: {
    title: 'Secure AI for your workspace',
    columns: 4,
    tiles: [
      { chipLabel: 'Encrypted',  chipColor: 'violet', title: 'Encrypted in transit',     body: 'TLS everywhere. SOC 2 Type II.' },
      { chipLabel: 'No training', chipColor: 'pink',   title: 'Never trains on your data', body: 'Your data is never used to train shared models.' },
      { chipLabel: 'Permissions',  chipColor: 'amber',  title: 'Respects permissions',     body: 'AI only sees what each user can already access.' },
      { chipLabel: 'Audit',       chipColor: 'sky',    title: 'Full audit log',            body: 'Every AI invocation is logged for admins.' },
    ],
  },
  crossGridAccentColor: 'magenta',
  faqTitle: 'AI Assists FAQs',
  faqs: [
    { q: 'What model powers clicsHQ AI?',           a: 'clicsHQ AI uses the latest Claude and OpenAI models. The exact model is chosen per task automatically.' },
    { q: 'Can workflows update task statuses?',     a: 'Yes — AI agents can take actions in your workspace when authorized.' },
    { q: 'Can workflows send notifications/emails?', a: 'AI agents can post in Slack, email, and trigger workflows.' },
  ],
}

export default function AIAssistsPage() {
  return <ProductPage config={config} />
}
