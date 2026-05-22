'use client'

import * as React from 'react'
import { Sun, Moon, Monitor } from 'lucide-react'
import { Label } from '@/components/ui/Label'
import { Button } from '@/components/ui/Button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/Select'
import { cn } from '@/lib/cn'

const THEMES = [
  { id: 'light', label: 'Light', icon: Sun },
  { id: 'dark',  label: 'Dark',  icon: Moon },
  { id: 'auto',  label: 'Auto',  icon: Monitor },
]

export function PreferencesTab() {
  const [theme, setTheme] = React.useState('light')

  return (
    <div className="max-w-3xl">
      <h2 className="text-xl font-bold text-ink">Preferences</h2>
      <p className="mt-1 text-sm text-muted">Customize how clicsHQ looks and behaves for you.</p>

      {/* Appearance */}
      <h3 className="mt-8 text-base font-semibold text-ink">Appearance</h3>
      <div className="mt-4 flex items-center justify-between gap-6">
        <div>
          <p className="text-sm font-semibold text-ink">Theme</p>
          <p className="text-sm text-muted">Choose between Light, Dark, or System mode.</p>
        </div>
        <div className="flex items-center gap-2">
          {THEMES.map((t) => {
            const Icon = t.icon
            const active = theme === t.id
            return (
              <button
                key={t.id}
                onClick={() => setTheme(t.id)}
                className={cn(
                  'flex flex-col items-center gap-1.5 rounded-xl p-2 ring-1 transition-colors',
                  active ? 'ring-ink bg-surface-alt' : 'ring-gray-200 hover:bg-gray-50',
                )}
              >
                <span className={cn('grid h-12 w-16 place-items-center rounded-lg', t.id === 'dark' ? 'bg-ink' : 'bg-gray-100')}>
                  <Icon className={cn('h-4 w-4', t.id === 'dark' ? 'text-white' : 'text-ink')} />
                </span>
                <span className="text-xs text-ink">{t.label}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Regional */}
      <h3 className="mt-8 text-base font-semibold text-ink">Regional</h3>
      <div className="mt-4 grid sm:grid-cols-2 gap-5">
        <RegionalSelect label="Language" options={['English', 'Urdu', 'Arabic', 'Spanish']} />
        <RegionalSelect label="Date format" options={['MM/DD/YYYY', 'DD/MM/YYYY', 'YYYY-MM-DD']} />
        <RegionalSelect label="Time format" options={['12-hour', '24-hour']} />
        <RegionalSelect label="Week starts on" options={['Sunday', 'Monday']} />
      </div>

      <Button className="mt-6">Save Changes</Button>
    </div>
  )
}

function RegionalSelect({ label, options }: { label: string; options: string[] }) {
  return (
    <div className="space-y-1.5">
      <Label>{label}</Label>
      <Select defaultValue={options[0]}>
        <SelectTrigger><SelectValue /></SelectTrigger>
        <SelectContent>
          {options.map((o) => (
            <SelectItem key={o} value={o}>{o}</SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
