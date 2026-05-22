'use client'

import * as React from 'react'
import { ArrowUpRight, Plus, MoreHorizontal, Pencil, Trash2 } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/DropdownMenu'
import { useComingSoon } from '@/components/app/ComingSoon'

type Invoice = {
  id: string
  date: string
  plan: string
  amount: string
  status: 'Paid' | 'Unpaid'
}

const INVOICES: Invoice[] = [
  { id: 'inv-1', date: 'Apr 3, 2026', plan: 'Team',        amount: '$50.00', status: 'Unpaid' },
  { id: 'inv-2', date: 'Mar 3, 2026', plan: 'Team',        amount: '$50.00', status: 'Paid' },
  { id: 'inv-3', date: 'Feb 3, 2026', plan: 'Enterprises', amount: '$50.00', status: 'Paid' },
  { id: 'inv-4', date: 'Jan 3, 2026', plan: 'Enterprises', amount: '$50.00', status: 'Paid' },
  { id: 'inv-5', date: 'Dec 3, 2025', plan: 'Enterprises', amount: '$50.00', status: 'Paid' },
]

export function InvoicesTab() {
  const comingSoon = useComingSoon()
  return (
    <div className="max-w-2xl space-y-10">
      {/* Billing Information */}
      <section>
        <h2 className="text-lg font-bold text-ink">Billing Information</h2>
        <dl className="mt-4 space-y-3">
          <div className="flex gap-12 text-sm">
            <dt className="w-28 text-muted">Name</dt>
            <dd className="font-medium text-ink">Muhammad Bilal</dd>
          </div>
          <div className="flex gap-12 text-sm">
            <dt className="w-28 text-muted">Phone Number</dt>
            <dd className="font-medium text-ink">+92 123 1251544</dd>
          </div>
        </dl>
        <button
          onClick={() => comingSoon('Update billing info')}
          className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-ai-600 hover:underline"
        >
          Update Information <ArrowUpRight className="h-3.5 w-3.5" />
        </button>
      </section>

      {/* Payment Method */}
      <section>
        <h2 className="text-lg font-bold text-ink">Payment Method</h2>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="grid h-12 w-12 place-items-center rounded-full bg-gray-100">
              <span className="text-[11px] font-extrabold italic tracking-tight text-[#1A1F71]">VISA</span>
            </div>
            <div>
              <p className="text-sm font-semibold text-ink">Visa **** 2919</p>
              <p className="text-xs text-muted">Expires 11/2029</p>
            </div>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="grid h-8 w-8 place-items-center rounded-md text-muted hover:bg-gray-100">
                <MoreHorizontal className="h-4 w-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onSelect={() => comingSoon('Edit payment method')}>
                <Pencil className="h-4 w-4" /> Edit
              </DropdownMenuItem>
              <DropdownMenuItem
                className="text-danger-fg focus:text-danger-fg"
                onSelect={() => comingSoon('Delete payment method')}
              >
                <Trash2 className="h-4 w-4" /> Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <button
          onClick={() => comingSoon('Add payment method')}
          className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-ink hover:text-ai-600"
        >
          <Plus className="h-3.5 w-3.5" /> Add another payment
        </button>
      </section>

      {/* Invoice History */}
      <section className="rounded-2xl bg-white p-5 ring-1 ring-gray-100 shadow-card">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-bold text-ink">Invoice History</h2>
          <button
            onClick={() => comingSoon('View invoices')}
            className="text-sm font-medium text-ai-600 hover:underline"
          >
            View Invoices
          </button>
        </div>

        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100 text-left text-xs text-muted">
                <th className="pb-2 font-medium">Date</th>
                <th className="pb-2 font-medium">Plan Type</th>
                <th className="pb-2 font-medium">Payment</th>
                <th className="pb-2 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {INVOICES.map((inv) => (
                <tr key={inv.id} className="border-b border-gray-50 last:border-0">
                  <td className="py-3 text-ink">{inv.date}</td>
                  <td className="py-3 text-muted">{inv.plan}</td>
                  <td className="py-3 text-ink">{inv.amount}</td>
                  <td className="py-3">
                    <Badge variant={inv.status === 'Paid' ? 'success' : 'danger'} size="sm">
                      {inv.status}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
