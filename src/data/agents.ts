/** AI agent catalogue for the Clics AI → AI Agents tab. */

export type AgentCategory = 'Search' | 'Task' | 'Productivity' | 'Team'

export interface AgentField {
  name: string
  label: string
  type: 'text' | 'textarea'
  placeholder: string
  required?: boolean
}

export interface Agent {
  id: string
  name: string
  description: string
  icon: string
  category: AgentCategory
  fields: AgentField[]
}

export const AGENTS: Agent[] = [
  {
    id: 'project-planner',
    name: 'Project Planner',
    description: 'Create a full project plan from a simple goal. Generates project name, tasks, priorities and timelines.',
    icon: '/icons/agents/Projectplanner.svg',
    category: 'Search',
    fields: [
      { name: 'goal',     label: 'Project Goal',       type: 'textarea', placeholder: 'e.g. Launch marketing campaign for new product', required: true },
      { name: 'deadline', label: 'Deadline',            type: 'text',     placeholder: 'e.g. 30 days, March 2026' },
      { name: 'teamSize', label: 'Team Size',           type: 'text',     placeholder: 'e.g. 5 People' },
      { name: 'context',  label: 'Additional Context',  type: 'textarea', placeholder: 'Anything else the agent should know' },
    ],
  },
  {
    id: 'task-creator',
    name: 'Task Creator',
    description: 'Turn a description into a clear, structured task with title, owner and due date.',
    icon: '/icons/agents/Taskcreater.svg',
    category: 'Task',
    fields: [
      { name: 'description', label: 'Task Description', type: 'textarea', placeholder: 'Describe what needs to be done', required: true },
      { name: 'space',       label: 'Space',            type: 'text',     placeholder: 'Which space?' },
    ],
  },
  {
    id: 'subtask-generated',
    name: 'Subtask Generated',
    description: 'Break a task into smaller, actionable subtasks that are easy to assign and track.',
    icon: '/icons/agents/Subtask Generated.svg',
    category: 'Task',
    fields: [
      { name: 'task', label: 'Parent Task', type: 'textarea', placeholder: 'Paste the task to break down', required: true },
    ],
  },
  {
    id: 'status-reporter',
    name: 'Status Reporter',
    description: 'Generates a project progress summary with completed work, blockers and next step.',
    icon: '/icons/agents/Status Reporter.svg',
    category: 'Productivity',
    fields: [
      { name: 'project', label: 'Project', type: 'text', placeholder: 'Which project to report on', required: true },
      { name: 'period',  label: 'Period',  type: 'text', placeholder: 'e.g. This week' },
    ],
  },
  {
    id: 'meeting-summarizer',
    name: 'Meeting Summarizer',
    description: 'Summarises meeting notes into key points, decisions and action items.',
    icon: '/icons/agents/Meeting Summarizer.svg',
    category: 'Productivity',
    fields: [
      { name: 'notes', label: 'Meeting Notes', type: 'textarea', placeholder: 'Paste the raw meeting notes', required: true },
    ],
  },
  {
    id: 'follow-up-agent',
    name: 'Follow-up Agent',
    description: 'Drafts follow-up messages and reminders for stalled tasks and pending replies.',
    icon: '/icons/agents/Follow-up-Agent.svg',
    category: 'Team',
    fields: [
      { name: 'context', label: 'Context', type: 'textarea', placeholder: 'What is the follow-up about?', required: true },
    ],
  },
  {
    id: 'workload-analyzer',
    name: 'Workload Analyzer',
    description: 'Analyses team workload and highlights who is overloaded or has spare capacity.',
    icon: '/icons/agents/Workload Analyzer.svg',
    category: 'Team',
    fields: [
      { name: 'team', label: 'Team', type: 'text', placeholder: 'Which team to analyze', required: true },
    ],
  },
  {
    id: 'executive-brief',
    name: 'Executive Brief',
    description: 'Produces a concise leadership-ready brief from project and task data.',
    icon: '/icons/agents/Executive Brief.svg',
    category: 'Productivity',
    fields: [
      { name: 'scope', label: 'Scope', type: 'textarea', placeholder: 'What should the brief cover?', required: true },
    ],
  },
]

export const AGENT_FILTERS: ('All' | AgentCategory)[] = ['All', 'Search', 'Task', 'Productivity', 'Team']

export const CHAT_SUGGESTIONS = [
  { title: 'Summarize Task',   description: 'Create a short summary of a task.' },
  { title: 'Explain Task',     description: 'Provide a clear explanation of a task.' },
  { title: 'Generate Subtasks', description: 'Break a task into smaller steps.' },
  { title: 'Identify Risks',   description: 'List possible risks related to a task.' },
]

export const CHAT_FILTERS = ['Task', 'Team', 'Search', 'Productivity']
