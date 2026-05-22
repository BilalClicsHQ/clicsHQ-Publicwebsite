'use client'

import * as React from 'react'
import Image from 'next/image'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

type Integration = {
  id: string
  name: string
  description: string
  icon: string
}

const INTEGRATIONS: Integration[] = [
  { id: 'slack',     name: 'Slack',           description: 'Make slack actionable by integrating with Clics',   icon: '/images/tools/Slack.svg' },
  { id: 'teams',     name: 'Microsoft Team',  description: 'Make team actionable by integrating with Clics',    icon: '/images/tools/msTeams.svg' },
  { id: 'gcal',      name: 'Google Calendar', description: 'Meet deadlines faster by integrating with Clics',   icon: '/images/tools/g-calendar.svg' },
  { id: 'dropbox',   name: 'Dropbox',         description: 'Make dropbox functional by integrating with Clics', icon: '/images/tools/dropbox.svg' },
  { id: 'jira',      name: 'Jira',            description: 'Make jira actionable by integrating with Clics',    icon: '/images/tools/Jira.svg' },
  { id: 'gdrive',    name: 'Google Drive',    description: 'Make drive actionable by integrating with Clics',   icon: '/images/tools/g-drive.svg' },
]

export default function IntegrationsPage() {
  const [connected, setConnected] = React.useState<Set<string>>(new Set())

  const toggle = (id: string) =>
    setConnected((s) => {
      const next = new Set(s)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })

  return (
    <div className="space-y-5">
      <h1 className="text-xl font-semibold text-ink">Integrations</h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {INTEGRATIONS.map((it) => {
          const isConnected = connected.has(it.id)
          return (
            <Card key={it.id} className="p-5">
              <div className="flex items-center gap-3">
                <Image src={it.icon} alt={it.name} width={32} height={32} className="h-8 w-8" />
                <h3 className="text-base font-semibold text-ink">{it.name}</h3>
              </div>
              <p className="mt-3 text-sm text-muted leading-relaxed min-h-[40px]">{it.description}</p>
              <Button
                variant={isConnected ? 'secondary' : 'primary'}
                size="md"
                className="mt-4 w-full"
                onClick={() => toggle(it.id)}
              >
                {isConnected ? 'Connected' : 'Connect'}
              </Button>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
