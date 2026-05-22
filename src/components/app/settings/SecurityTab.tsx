'use client'

import * as React from 'react'
import { Input } from '@/components/ui/Input'
import { Label } from '@/components/ui/Label'
import { Button } from '@/components/ui/Button'
import { Switch } from '@/components/ui/Switch'

export function SecurityTab() {
  const [emailOtp, setEmailOtp] = React.useState(true)
  const [totp, setTotp] = React.useState(false)

  return (
    <div className="max-w-3xl">
      <h2 className="text-xl font-bold text-ink">Security</h2>
      <p className="mt-1 text-sm text-muted">Manage your password and account protection.</p>

      {/* Change password */}
      <h3 className="mt-8 text-base font-semibold text-ink">Change Password</h3>
      <div className="mt-4 grid sm:grid-cols-2 gap-5">
        <div className="space-y-1.5">
          <Label>Current password</Label>
          <Input type="password" placeholder="Enter current password" />
        </div>
        <div className="space-y-1.5">
          <Label>New password</Label>
          <Input type="password" placeholder="Enter new password" />
        </div>
        <div className="space-y-1.5">
          <Label>Confirm new password</Label>
          <Input type="password" placeholder="Confirm new password" />
        </div>
      </div>

      {/* 2FA */}
      <h3 className="mt-8 text-base font-semibold text-ink">Two-factor authentication (2FA)</h3>
      <div className="mt-4 grid sm:grid-cols-2 gap-5">
        <div className="flex items-center justify-between gap-4">
          <p className="text-sm font-medium text-ink">Send your email</p>
          <Switch checked={emailOtp} onCheckedChange={setEmailOtp} />
        </div>
        <div className="flex items-center justify-between gap-4">
          <p className="text-sm font-medium text-ink">Authenticator app (TOTP)</p>
          <Switch checked={totp} onCheckedChange={setTotp} />
        </div>
      </div>

      <Button className="mt-6">Save Changes</Button>
    </div>
  )
}
