import type { Metadata } from 'next'
import Image from 'next/image'
import { ProductPage, type ProductPageConfig } from '@/components/marketing/shared/ProductPage'
import { Highlight } from '@/components/marketing/shared/Highlight'
import { WorkflowCanvasMockup } from '@/components/marketing/shared/ProductMockups'

export const metadata: Metadata = { title: 'Kanban Board' }

const IMG = '/images/kanban-board'

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
      className="h-auto w-full rounded-2xl shadow-2xl ring-1 ring-gray-200/60"
    />
  )
}

const config: ProductPageConfig = {
  hero: {
    eyebrow: 'Kanban Boards',
    eyebrowColor: 'text-muted',
    eyebrowUppercase: false,
    title: (
      <>
        Kanban boards <br className="hidden lg:block" />
        that keep work <br className="hidden lg:block" />
        moving
      </>
    ),
    subtitle:
      'Plan, track, automate, and collaborate across tasks without switching between tools.',
    primaryLabel: 'Start for free',
    secondaryLabel: 'Get a demo',
    mockup: <Shot src={`${IMG}/kanban-board-hero.png`} alt="clicsHQ Kanban board" priority />,
    background: 'light',
  },
  intro: {
    eyebrow: 'More than boards',
    title: (
      <>
        A <Highlight color="sky">visual workflow,</Highlight> connected to everything
      </>
    ),
    subtitle:
      'clicsHQ boards connect tasks, docs, comments, workflows, and AI so every card becomes a complete work hub.',
  },
  splitRows: [
    {
      eyebrow: 'Visual tracking',
      title: 'See every stage of work clearly',
      body:
        'clicsHQ boards connect tasks, docs, comments, workflows, and AI so every card becomes a complete work hub.',
      visual: <Shot src={`${IMG}/kanban-board-stage.png`} alt="Kanban columns showing each stage of work" />,
    },
    {
      eyebrow: 'Never lose context',
      title: 'Do the work right from the card',
      body:
        "Assign owners, drop in comments, and attach files without leaving the board. When a task needs a doc, it's already linked. One surface for every action.",
      visual: <Shot src={`${IMG}/kanban-board-never.png`} alt="Working directly from a Kanban card" />,
      reverse: true,
    },
    {
      eyebrow: 'Automation',
      title: 'Automate repetitive board actions',
      body:
        'Reduce manual updates by turning common board movements into simple workflows your team can trust.',
      visual: <WorkflowCanvasMockup />,
    },
  ],
  darkTilesSection: {
    title: 'Every Kanban feature, built in from day one',
    layout: 'showcase',
    image: `${IMG}/kanban-board-feature-main.png`,
    imageAlt: 'clicsHQ Kanban board with To-Do, In Progress, Review, and Completed columns',
    tiles: [
      {
        title: 'Custom fields on cards',
        body: 'Add priority access, time estimates, client names, or any data your workflow needs right on the card. Your board reflects exactly how your team works.',
      },
      {
        title: 'Board filters',
        body: 'Filter by assignee, priority, tag, or any custom field to zero in on what matters right now. Fewer distractions, faster decisions.',
      },
      {
        title: 'Multi-card drag',
        body: "Select multiple cards and bulk move them to a new column. Update a sprint's worth of tasks at once instead of card by card.",
      },
      {
        title: 'Shared board views',
        body: 'Share a filtered board view with clients or stakeholders without giving them access to your full Workspace. The right view, for the right person.',
      },
    ],
  },
  crossGridAccentColor: 'lime',
  crossGridEyebrow: 'Part of the clicsHQ platform',
  crossGridSubtitle:
    'Board view is your visual entry point into the clicsHQ platform. Tasks, Docs, Chat, Calendar, Dashboards, and more in a single, converged app — explore everything you unlock when your work lives in one place.',
  faqTitle: 'Kanban board FAQs',
  faqToggle: 'plusminus',
  faqs: [
    { q: 'Can I customize board statuses?',       a: "Yes. Create statuses that match your team's workflow." },
    { q: 'Can AI help manage my board?',           a: 'clicsHQ AI can auto-update statuses, surface blockers, summarize columns, and trigger workflows across your integrations.' },
    { q: 'Can boards connect with integrations?',  a: 'Boards integrate with Slack, Google Drive, GitHub, Jira, Figma, and 100+ tools so updates flow both ways.' },
  ],
  finalCTA: {
    title: 'Give your team a board that keeps up',
    subtitle: 'Plan work, automate updates, and keep every project moving inside clicsHQ.',
    align: 'center',
    secondaryLabel: '',
  },
}

export default function KanbanPage() {
  return <ProductPage config={config} />
}
