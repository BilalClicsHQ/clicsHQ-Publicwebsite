'use client'

import * as React from 'react'
import Image from 'next/image'
import { Sparkles } from 'lucide-react'
import type { Agent } from '@/data/agents'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/Dialog'
import { Input, Textarea } from '@/components/ui/Input'
import { Label } from '@/components/ui/Label'
import { Button } from '@/components/ui/Button'

export function AgentModal({
  agent,
  open,
  onOpenChange,
}: {
  agent: Agent | null
  open: boolean
  onOpenChange: (v: boolean) => void
}) {
  const [values, setValues] = React.useState<Record<string, string>>({})
  const [running, setRunning] = React.useState(false)

  React.useEffect(() => {
    if (!open) {
      setValues({})
      setRunning(false)
    }
  }, [open])

  if (!agent) return null

  const handleRun = () => {
    setRunning(true)
    // Placeholder — wire to the AI backend later.
    setTimeout(() => setRunning(false), 1200)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-xl">
        <DialogHeader>
          <div className="flex items-start gap-3">
            <Image src={agent.icon} alt="" width={40} height={40} className="h-10 w-10 rounded-lg" />
            <div>
              <DialogTitle>{agent.name}</DialogTitle>
              <DialogDescription>{agent.description}</DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-4 mt-2">
          {agent.fields.map((f) => (
            <div key={f.name} className="space-y-1.5">
              <Label htmlFor={f.name}>
                {f.label}
                {f.required && <span className="text-danger-fg ml-0.5">*</span>}
              </Label>
              {f.type === 'textarea' ? (
                <Textarea
                  id={f.name}
                  placeholder={f.placeholder}
                  value={values[f.name] || ''}
                  onChange={(e) => setValues((v) => ({ ...v, [f.name]: e.target.value }))}
                />
              ) : (
                <Input
                  id={f.name}
                  placeholder={f.placeholder}
                  value={values[f.name] || ''}
                  onChange={(e) => setValues((v) => ({ ...v, [f.name]: e.target.value }))}
                />
              )}
            </div>
          ))}
        </div>

        <div className="mt-2">
          <Button variant="ai" onClick={handleRun} disabled={running} className="gap-2">
            <Sparkles className="h-4 w-4" />
            {running ? 'Running…' : 'Run Agent'}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
