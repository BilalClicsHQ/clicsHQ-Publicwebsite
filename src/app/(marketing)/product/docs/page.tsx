import type { Metadata } from 'next'
import { ProductPage, type ProductPageConfig } from '@/components/marketing/shared/ProductPage'
import { Highlight } from '@/components/marketing/shared/Highlight'

export const metadata: Metadata = { title: 'Docs' }

const config: ProductPageConfig = {
  hero: {
    eyebrow: 'Docs',
    eyebrowColor: 'text-sky-600',
    title: 'Docs that live next to your work',
    subtitle:
      'Write rich documents, embed tasks, and collaborate in real time. clicsHQ Docs connect to every project, sprint, and conversation.',
    primaryLabel: 'Get Started',
    mockupSrc: '/images/dashboards/ClicshqPage.svg',
    background: 'light',
  },
  intro: {
    title: (
      <>
        Docs <Highlight color="sky">connected</Highlight> to everything
      </>
    ),
    subtitle:
      'No more copy-pasting between Notion, Slack, and your project tool. Write where the work happens.',
  },
  splitRows: [
    {
      eyebrow: 'Write',
      title: 'Beautiful rich text, on every device',
      body: 'Headings, tables, embeds, code blocks, callouts. Keyboard-first commands so writing feels fast.',
      imageSrc: '/images/dashboards/ClicshqPage.svg',
    },
    {
      eyebrow: 'Connect',
      title: 'Embed tasks, docs, and dashboards inline',
      body: 'Drop a live task list inside a doc. Pull in a chart. Reference another doc with @mention.',
      imageSrc: '/images/dashboards/ClicshqPage.svg',
      reverse: true,
    },
    {
      eyebrow: 'AI assist',
      title: 'AI helps you draft, summarize, and translate',
      body: 'Press Space inside any doc to invoke clicsHQ AI — generate a brief, summarize a thread, translate to any language.',
      imageSrc: '/images/dashboards/ClicshqPage.svg',
    },
  ],
  darkTilesSection: {
    title: 'Everything you expect from a modern doc editor',
    columns: 4,
    tiles: [
      { chipLabel: 'Nesting', chipColor: 'pink',    title: 'Nested pages',     body: 'Build a wiki structure that grows with your team.' },
      { chipLabel: 'Templates', chipColor: 'amber', title: 'Doc templates',    body: 'Start from a meeting note, RFC, or 1:1 template.' },
      { chipLabel: 'Permissions', chipColor: 'emerald', title: 'Granular permissions', body: 'Share at workspace, team, or doc level.' },
      { chipLabel: 'History', chipColor: 'sky',     title: 'Version history',  body: 'Restore any earlier version with one click.' },
    ],
  },
  crossGridAccentColor: 'sky',
  faqTitle: 'Docs FAQs',
  faqs: [
    { q: 'Can I import existing docs from Notion or Google Docs?', a: 'Yes — clicsHQ imports Markdown, .docx, and direct exports from Notion.' },
    { q: 'Can docs be private to me?',                              a: 'Every doc has its own permissions — private to you, shared with a team, or workspace-wide.' },
    { q: 'Is real-time collaboration supported?',                   a: 'Yes — clicsHQ Docs support live cursors and conflict-free editing for unlimited collaborators.' },
  ],
}

export default function DocsPage() {
  return <ProductPage config={config} />
}
