'use client'

import * as React from 'react'
import { Switch } from '@/components/ui/Switch'
import { Button } from '@/components/ui/Button'
import { useComingSoon } from '@/components/app/ComingSoon'

type Row = { id: string; title: string; description: string; defaultOn: boolean }

const CHANNELS: Row[] = [
  { id: 'email',  title: 'Email notifications',  description: 'Receive updates in your inbox.',      defaultOn: true  },
  { id: 'in-app', title: 'In-app notifications', description: 'Receive updates inside clicsHQ.',     defaultOn: false },
]

const ALERTS: Row[] = [
  { id: 'assigned', title: 'Task assigned to me', description: 'Notify me when a task is assigned to me.', defaultOn: false },
  { id: 'mentions', title: 'Mentions',            description: 'Notify me when someone mentions me in comments.', defaultOn: true },
  { id: 'comments', title: 'Comments',            description: 'Notify me when someone comments on my tasks.', defaultOn: false },
  { id: 'due',      title: 'Due date reminders',  description: 'Notify me before tasks are due.',     defaultOn: true },
]

export function NotificationsTab() {
  const comingSoon = useComingSoon()
  return (
    <div className="max-w-3xl">
      <h2 className="text-xl font-bold text-ink">Notifications</h2>
      <p className="mt-1 text-sm text-muted">Choose when and how you want to be notified.</p>

      <h3 className="mt-8 text-base font-semibold text-ink">Channels</h3>
      <div className="mt-3 divide-y divide-gray-100">
        {CHANNELS.map((r) => <ToggleRow key={r.id} row={r} />)}
      </div>

      <h3 className="mt-8 text-base font-semibold text-ink">Activity Alerts</h3>
      <div className="mt-3 divide-y divide-gray-100">
        {ALERTS.map((r) => <ToggleRow key={r.id} row={r} />)}
      </div>

      <Button className="mt-6" onClick={() => comingSoon('Save notifications')}>Save Changes</Button>
    </div>
  )
}

function ToggleRow({ row }: { row: Row }) {
  const [on, setOn] = React.useState(row.defaultOn)
  return (
    <div className="flex items-center justify-between gap-6 py-4">
      <div>
        <p className="text-sm font-semibold text-ink">{row.title}</p>
        <p className="text-sm text-muted">{row.description}</p>
      </div>
      <Switch checked={on} onCheckedChange={setOn} />
    </div>
  )
}
