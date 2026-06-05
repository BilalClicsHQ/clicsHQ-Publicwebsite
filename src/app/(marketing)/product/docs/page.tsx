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
      'clicsHQ Docs connect knowledge with tasks, workflows, comments, AI agents, and projects so your team never works in silos.',
  },
  splitRows: [
    {
      eyebrow: 'Collaborative editing',
      title: 'Write together in real time',
      body:
        'Collaborate live with comments, mentions, shared editing, and instant updates across your team.',
      visual: <Shot src={`${IMG}/docs-write.png`} alt="Co-editing a clicsHQ doc in real time" />,
    },
    {
      eyebrow: 'Docs + Tasks',
      title: 'Turn ideas into actionable work',
      body:
        'Convert text into tasks, assign owners, add due dates, and link work directly from your docs.',
      visual: <Shot src={`${IMG}/docs-ideas.png`} alt="Turning doc ideas into linked tasks and templates" />,
      reverse: true,
    },
    {
      eyebrow: 'AI assistance',
      title: 'Get Quick Answers with AI',
      body:
        'Generate summaries, improve writing, brainstorm ideas, and create documentation instantly with AI.',
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
        title: 'Nested pages',
        body: 'Create structured documentation hierarchies for teams and projects.',
      },
      {
        title: 'Templates',
        body: 'Start quickly with meeting notes, SOPs, PRDs, wikis, and playbooks.',
      },
      {
        title: 'Permissions',
        body: 'Control who can view, comment, or edit every document.',
      },
      {
        title: 'Version history',
        body: 'Track changes and restore previous versions anytime.',
      },
    ],
  },
  crossGridAccentColor: 'lime',
  faqTitle: 'Docs FAQs',
  faqToggle: 'plusminus',
  faqs: [
    { q: 'Can multiple people edit a doc together?', a: 'Yes — clicsHQ Docs support real-time co-editing, comments, and mentions.' },
    { q: 'Can docs connect with tasks?',             a: 'Highlight any text to create a linked task with owners and due dates.' },
    { q: 'Does clicsHQ Docs support AI writing?',    a: 'Ask AI inside any doc to draft, summarize, rewrite, or generate updates.' },
  ],
  finalCTA: {
    title: 'Build docs your team will actually use',
    subtitle: 'Bring knowledge, collaboration, and execution into one connected workspace.',
    align: 'center',
    secondaryLabel: '',
  },
}

export default function DocsPage() {
  return <ProductPage config={config} />
}
