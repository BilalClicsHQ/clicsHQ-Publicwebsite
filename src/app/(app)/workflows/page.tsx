'use client'

import * as React from 'react'
import Link from 'next/link'
import { Plus, MoreHorizontal, Copy, Heart, Trash2 } from 'lucide-react'
import { WORKFLOWS } from '@/data/workflows'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/DropdownMenu'
import { useComingSoon } from '@/components/app/ComingSoon'

export default function WorkflowsPage() {
  const comingSoon = useComingSoon()
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-end">
        <Button asChild size="md" className="gap-2">
          <Link href="/workflows/builder">
            <Plus className="h-4 w-4" />
            Add Workflow
          </Link>
        </Button>
      </div>

      <div className="rounded-2xl ring-1 ring-gray-100 overflow-hidden bg-white">
        {/* Head */}
        <div className="grid grid-cols-[1.6fr_1fr_1.2fr_1fr_80px] gap-4 px-5 py-3 border-b border-gray-100 text-xs font-medium text-muted">
          <span>Workflow</span>
          <span>Status</span>
          <span>Created by</span>
          <span>Last Published</span>
          <span className="text-right">Action</span>
        </div>

        {WORKFLOWS.map((w) => (
          <div
            key={w.id}
            className="grid grid-cols-[1.6fr_1fr_1.2fr_1fr_80px] gap-4 px-5 py-4 items-center border-b border-gray-50 last:border-0 hover:bg-surface-alt transition-colors"
          >
            <span className="text-sm font-medium text-ink">{w.name}</span>
            <span>
              <Badge variant={w.status === 'live' ? 'success' : 'warning'} size="md" className="capitalize">
                {w.status === 'live' ? 'Live' : 'Paused'}
              </Badge>
            </span>
            <span className="text-sm text-muted">{w.createdBy}</span>
            <span className="text-sm text-muted">{w.lastPublished}</span>
            <div className="flex justify-end">
              <DropdownMenu>
                <DropdownMenuTrigger className="h-8 w-8 grid place-items-center rounded-lg hover:bg-gray-100 outline-none">
                  <MoreHorizontal className="h-4 w-4 text-muted" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onSelect={() => comingSoon('Duplicate workflow')}>
                    <Copy className="h-3.5 w-3.5" />Duplicate Workflow
                  </DropdownMenuItem>
                  <DropdownMenuItem onSelect={() => comingSoon('Favorite workflow')}>
                    <Heart className="h-3.5 w-3.5" />Favorite
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="text-danger-fg focus:text-danger-fg"
                    onSelect={() => comingSoon('Delete workflow')}
                  >
                    <Trash2 className="h-3.5 w-3.5" />Delete Workflow
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
