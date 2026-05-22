/**
 * Mock docs data — swap for a Payload `docs` collection later.
 */

export interface DocPage {
  id: string
  title: string
  emoji: string
  author: string
  updatedLabel: string
  blocks: DocBlock[]
}

export type DocBlock =
  | { type: 'heading'; text: string }
  | { type: 'paragraph'; text: string }
  | { type: 'bullet'; items: string[] }

export const DOC_PAGES: DocPage[] = [
  {
    id: 'getting-started',
    title: 'Streamline Your Projects with ClicsHQ',
    emoji: '🚀',
    author: 'Afshan Waseem',
    updatedLabel: 'Last updated today at 12:00PM',
    blocks: [
      {
        type: 'paragraph',
        text: 'At ClicsHQ, we help businesses simplify project management, improve team collaboration, and increase productivity through smart digital solutions. Our platform is designed to organize tasks, manage deadlines, track progress, and keep every team member aligned in one centralized workspace. Whether you are handling small business operations or large-scale enterprise projects, ClicsHQ provides the tools needed to plan, execute, and deliver projects efficiently.',
      },
      {
        type: 'paragraph',
        text: 'Create structured workflows, assign responsibilities, and manage timelines with ease. ClicsHQ allows teams to stay focused on priorities while maintaining complete visibility over project performance and progress.',
      },
    ],
  },
  {
    id: 'product-overview',
    title: 'Product Overview',
    emoji: '📦',
    author: 'Afshan Waseem',
    updatedLabel: 'Last updated yesterday at 4:20PM',
    blocks: [
      { type: 'heading', text: 'What you get' },
      {
        type: 'bullet',
        items: [
          'Spaces with Kanban, Calendar, List and Gantt views',
          'Clics AI agents for planning and reporting',
          'Automated workflows and integrations',
        ],
      },
    ],
  },
  {
    id: 'meeting-notes',
    title: 'Meeting Notes',
    emoji: '📝',
    author: 'Afshan Waseem',
    updatedLabel: 'Last updated 3 days ago',
    blocks: [
      { type: 'heading', text: 'Weekly sync' },
      { type: 'paragraph', text: 'Notes captured from the weekly product sync.' },
    ],
  },
]
