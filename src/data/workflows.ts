/** Workflows mock data — list rows + trigger/action catalogues for the builder. */

export type WorkflowStatus = 'live' | 'paused'

export interface Workflow {
  id: string
  name: string
  status: WorkflowStatus
  createdBy: string
  lastPublished: string
}

export const WORKFLOWS: Workflow[] = [
  { id: 'w1', name: 'LinkedIn Source Leads-Prod', status: 'live',   createdBy: 'Afshan Waseem', lastPublished: '3 Day ago' },
  { id: 'w2', name: 'LinkedIn Source Leads-Prod', status: 'paused', createdBy: 'Afshan Waseem', lastPublished: '3 Day ago' },
  { id: 'w3', name: 'LinkedIn Source Leads-Prod', status: 'paused', createdBy: 'Afshan Waseem', lastPublished: '3 Day ago' },
  { id: 'w4', name: 'LinkedIn Source Leads-Prod', status: 'paused', createdBy: 'Afshan Waseem', lastPublished: '3 Day ago' },
]

export type WorkflowFilter = 'Featured' | 'Task' | 'Status' | 'Date & Time' | 'Sprint' | 'Integration'

export const WORKFLOW_FILTERS: WorkflowFilter[] = ['Featured', 'Task', 'Status', 'Date & Time', 'Sprint', 'Integration']

export interface CatalogItem {
  id: string
  title: string
  description: string
  group: WorkflowFilter
}

export const TRIGGERS: CatalogItem[] = [
  { id: 'task-created',     title: 'Task created',     description: 'When a new task created',      group: 'Featured' },
  { id: 'task-updated',     title: 'Task updated',     description: 'When a Previous task Updated',  group: 'Featured' },
  { id: 'assignee-changed', title: 'Assignee changed', description: 'When a Previous task Updated',  group: 'Task' },
  { id: 'label-added',      title: 'Label added',      description: 'When a Previous task Updated',  group: 'Task' },
  { id: 'comment-added',    title: 'Comment added',    description: 'When a Previous task Updated',  group: 'Featured' },
  { id: 'status-changed',   title: 'Status changed',   description: 'When task status changes',      group: 'Status' },
  { id: 'sprint-started',   title: 'Sprint started',   description: 'When a sprint begins',          group: 'Sprint' },
  { id: 'due-date',         title: 'Due date reached', description: 'When a task due date hits',     group: 'Date & Time' },
]

export const ACTIONS: CatalogItem[] = [
  { id: 'change-status',  title: 'Change Status',      description: 'When a Previous task Updated', group: 'Featured' },
  { id: 'assign-user',    title: 'Assign user',        description: 'When a Previous task Updated', group: 'Task' },
  { id: 'add-label',      title: 'Add Label',          description: 'When a new task created',      group: 'Task' },
  { id: 'move-project',   title: 'Move to project/list', description: 'When a Previous task Updated', group: 'Featured' },
  { id: 'send-notif',     title: 'Send notification',  description: 'When a Previous task Updated', group: 'Featured' },
  { id: 'send-email',     title: 'Send email',         description: 'When a Previous task Updated', group: 'Integration' },
  { id: 'add-follower',   title: 'Add follower',       description: 'When a Previous task Updated', group: 'Task' },
  { id: 'create-comment', title: 'Create comment',     description: 'When a Previous task Updated', group: 'Featured' },
]
