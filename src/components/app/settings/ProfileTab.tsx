'use client'

import * as React from 'react'
import { User } from 'lucide-react'
import { Input } from '@/components/ui/Input'
import { Label } from '@/components/ui/Label'
import { Button } from '@/components/ui/Button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/Select'
import { useComingSoon } from '@/components/app/ComingSoon'

export function ProfileTab() {
  const comingSoon = useComingSoon()
  return (
    <div className="max-w-3xl">
      <h2 className="text-xl font-bold text-ink">Profile</h2>
      <p className="mt-1 text-sm text-muted">Manage your personal information and account details.</p>

      <h3 className="mt-8 text-base font-semibold text-ink">Basic Information</h3>

      {/* Photo */}
      <div className="mt-4 flex items-center gap-4">
        <div className="grid h-14 w-14 place-items-center rounded-full bg-gray-200 text-ink">
          <User className="h-6 w-6" />
        </div>
        <div>
          <p className="text-sm font-medium text-ink">Profile photo</p>
          <button
            onClick={() => comingSoon('Change photo')}
            className="text-sm font-medium text-ai-600 hover:underline"
          >
            Change
          </button>
        </div>
      </div>

      {/* Fields */}
      <div className="mt-6 grid sm:grid-cols-2 gap-5">
        <Field label="First name"><Input placeholder="your name" /></Field>
        <Field label="Last name"><Input placeholder="last name" /></Field>
        <Field label="Email address"><Input type="email" placeholder="example@gmail.com" /></Field>
        <Field label="Phone number"><Input placeholder="+92 123 4567890" /></Field>
        <div className="sm:col-span-2">
          <Field label="Time zone">
            <Select defaultValue="pkt">
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="pkt">(GMT +05:00) Pakistan Standard Time</SelectItem>
                <SelectItem value="ist">(GMT +05:30) India Standard Time</SelectItem>
                <SelectItem value="utc">(GMT +00:00) UTC</SelectItem>
                <SelectItem value="est">(GMT -05:00) Eastern Time</SelectItem>
              </SelectContent>
            </Select>
          </Field>
        </div>
      </div>

      <Button className="mt-6" onClick={() => comingSoon('Save profile')}>Save Changes</Button>
    </div>
  )
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-1.5">
      <Label>{label}</Label>
      {children}
    </div>
  )
}
