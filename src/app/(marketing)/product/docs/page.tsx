import type { Metadata } from 'next'
import Image from 'next/image'
import { ProductPage, type ProductPageConfig } from '@/components/marketing/shared/ProductPage'
import { Highlight } from '@/components/marketing/shared/Highlight'

export const metadata: Metadata = { title: 'Docs' }

const IMG = '/images/docs'

/** Floating product screenshot — rounded + soft drop shadow (matches Figma). */
function Shot({
  src,
  alt,
  priority = false,
}: {
  src: string
  alt: string
  priority?: boolean
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={1000}
      height={720}
      priority={priority}
      className="h-auto w-full rounded-2xl drop-shadow-2xl"
    />
  )
}

const config: ProductPageConfig = {
  hero: {
    eyebrow: 'Docs',
    eyebrowColor: 'text-muted',
    eyebrowUppercase: false,
    title: 'Docs that turn into action',
    subtitle:
      'Write, plan, and collaborate in real time — then turn any line into a task without leaving the page.',
    primaryLabel: 'Start for free',
    secondaryLabel: 'Get a demo',
    mockup: <Shot src={`${IMG}/docs-hero.png`} alt="clicsHQ Docs editor" priority />,
    background: 'light',
  },
  intro: {
    eyebrow: 'More than documents',
    title: (
      <>
        A <Highlight color="sky">connected workspace</Highlight> for ideas, plans, and execution
      </>
    ),
    subtitle:
      'clicsHQ Docs live next to your tasks, boards, and people — so writing and doing stay in sync.',
  },
  splitRows: [
    {
      eyebrow: 'Collaborative editing',
      title: 'Write together in real time',
      body:
        'Co-edit with comments, mentions, inline replies, and live cursors across your whole team — no version conflicts.',
      visual: <Shot src={`${IMG}/docs-write.png`} alt="Co-editing a clicsHQ doc in real time" />,
    },
    {
      eyebrow: 'Docs → Tasks',
      title: 'Turn ideas into actionable work',
      body:
        'Highlight any line and create a task with owners and due dates — it stays linked back to the doc that spawned it.',
      visual: <Shot src={`${IMG}/docs-ideas.png`} alt="Turning doc ideas into linked tasks and templates" />,
      reverse: true,
    },
    {
      eyebrow: 'AI assistance',
      title: 'Get quick answers with AI',
      body:
        'Press Ask AI inside any document to summarize, rewrite, or generate a draft using your real workspace context.',
      visual: <Shot src={`${IMG}/docs-answers.png`} alt="Asking clicsHQ AI questions about a doc" />,
    },
  ],
  darkTilesSection: {
    title: 'Every Docs feature, built in from day one',
    layout: 'showcase',
    image: `${IMG}/docs-feature.png`,
    imageAlt: 'clicsHQ Docs dashboard with templates and document list',
    tiles: [
      {
        title: 'Recent pages',
        body: 'Jump back into what you were working on in one click — your latest docs always within reach.',
      },
      {
        title: 'Templates',
        body: 'Start from RFCs, briefs, meeting notes, and more instead of a blank page.',
      },
      {
        title: 'Permissions',
        body: 'Granular sharing — view, comment, or edit per person or team, down to a single page.',
      },
      {
        title: 'Version history',
        body: 'Every change is saved. Restore any previous version instantly, with no lost work.',
      },
    ],
  },
  crossGridAccentColor: 'sky',
  faqTitle: 'Docs FAQs',
  faqToggle: 'plusminus',
  faqs: [
    { q: 'Can multiple people edit a doc together?', a: 'Yes — clicsHQ Docs support real-time co-editing, comments, and mentions.' },
    { q: 'Can docs connect with tasks?',             a: 'Highlight any text to create a linked task with owners and due dates.' },
    { q: 'Does clicsHQ Docs support AI writing?',    a: 'Ask AI inside any doc to draft, summarize, rewrite, or generate updates.' },
  ],
  finalCTA: {
    title: 'Build docs your team will actually use',
    subtitle: 'Bring knowledge, plans, and execution into one connected place — powered by AI.',
    align: 'center',
    secondaryLabel: '',
  },
}

export default function DocsPage() {
  return <ProductPage config={config} />
}
