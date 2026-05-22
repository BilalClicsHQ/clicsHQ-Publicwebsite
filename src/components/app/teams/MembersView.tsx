'use client'

import * as React from 'react'
import { ChevronLeft, ChevronRight, MoreHorizontal, UserPlus, Trash2, Users } from 'lucide-react'
import { MEMBER_ROSTER } from '@/data/mock'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/DropdownMenu'
import { cn } from '@/lib/cn'

const PAGE_SIZE = 10

export function MembersView() {
  const [page, setPage] = React.useState(1)
  const total = MEMBER_ROSTER.length
  const pageCount = Math.ceil(total / PAGE_SIZE)

  if (total === 0) return <MembersEmpty />

  const start = (page - 1) * PAGE_SIZE
  const rows = MEMBER_ROSTER.slice(start, start + PAGE_SIZE)

  // Window of page numbers around the current page (max 4 shown).
  const pages = Array.from({ length: Math.min(4, pageCount) }, (_, i) => {
    const base = Math.min(Math.max(1, page - 1), Math.max(1, pageCount - 3))
    return base + i
  })

  return (
    <>
      <div className="flex items-center justify-end">
        <Button size="sm">Create Member</Button>
      </div>

      <div className="mt-5 overflow-x-auto rounded-xl bg-white ring-1 ring-gray-100">
        <table className="w-full min-w-[760px] text-sm">
          <thead>
            <tr className="border-b border-gray-100 text-left text-xs text-muted">
              <th className="px-5 py-3 font-medium">Name</th>
              <th className="px-5 py-3 font-medium">Email</th>
              <th className="px-5 py-3 font-medium">Role</th>
              <th className="px-5 py-3 font-medium">User Status</th>
              <th className="px-5 py-3 font-medium">Team</th>
              <th className="px-5 py-3 font-medium text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((m) => (
              <tr key={m.id} className="border-b border-gray-50 last:border-0 hover:bg-gray-50/60">
                <td className="px-5 py-3">
                  <div className="flex items-center gap-3">
                    <span className="h-8 w-8 rounded-full bg-gray-200" />
                    <span className="font-medium text-ink">{m.name}</span>
                  </div>
                </td>
                <td className="px-5 py-3 text-muted">{m.email}</td>
                <td className="px-5 py-3 text-ink">{m.role}</td>
                <td className="px-5 py-3">
                  <Badge variant={m.status === 'Active' ? 'success' : 'warning'} size="sm">
                    {m.status}
                  </Badge>
                </td>
                <td className="px-5 py-3">
                  <UserPlus className="h-4 w-4 text-muted" />
                </td>
                <td className="px-5 py-3">
                  <div className="flex justify-end">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <button className="grid h-7 w-7 place-items-center rounded-md text-muted hover:bg-gray-100">
                          <MoreHorizontal className="h-4 w-4" />
                        </button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem className="text-danger-fg focus:text-danger-fg">
                          <Trash2 className="h-4 w-4" /> Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <p className="text-xs text-muted">
          Showing {rows.length} from {total} data
        </p>
        <div className="flex items-center gap-1">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-medium text-muted ring-1 ring-gray-200 hover:bg-gray-50 disabled:opacity-40"
          >
            <ChevronLeft className="h-3.5 w-3.5" /> Previous
          </button>
          {pages.map((p) => (
            <button
              key={p}
              onClick={() => setPage(p)}
              className={cn(
                'h-7 w-7 rounded-full text-xs font-medium transition-colors',
                p === page ? 'bg-ink text-white' : 'text-muted hover:bg-gray-100',
              )}
            >
              {p}
            </button>
          ))}
          <button
            onClick={() => setPage((p) => Math.min(pageCount, p + 1))}
            disabled={page === pageCount}
            className="inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-medium text-muted ring-1 ring-gray-200 hover:bg-gray-50 disabled:opacity-40"
          >
            Next <ChevronRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </>
  )
}

function MembersEmpty() {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      <div className="grid h-28 w-28 place-items-center rounded-full bg-gray-50 text-subtle">
        <Users className="h-12 w-12" strokeWidth={1.25} />
      </div>
      <p className="mt-6 max-w-xs text-base font-bold text-ink">
        Bring member together and make their work easy to visualize!
      </p>
      <Button className="mt-4">
        <UserPlus className="h-4 w-4" /> Invite member
      </Button>
    </div>
  )
}
