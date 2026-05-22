'use client'

import * as React from 'react'
import {
  Plus,
  Type,
  Sparkles,
  MoreHorizontal,
  X,
  FileText,
  Table2,
  StickyNote,
  LayoutList,
} from 'lucide-react'
import { DOC_PAGES, type DocPage, type DocBlock } from '@/data/docs'
import { cn } from '@/lib/cn'

type DocScope = 'all' | 'my' | 'meeting-notes' | 'trash'

const SCOPE_PAGES: Record<DocScope, typeof DOC_PAGES> = {
  all: DOC_PAGES,
  my: DOC_PAGES,
  'meeting-notes': DOC_PAGES.filter((p) => p.id === 'meeting-notes'),
  trash: [],
}

export function DocsView({ scope = 'all' }: { scope?: DocScope }) {
  const pages = SCOPE_PAGES[scope]
  const [activeId, setActiveId] = React.useState(pages[0]?.id ?? '')
  const active = pages.find((p) => p.id === activeId) ?? pages[0]

  if (pages.length === 0) {
    return (
      <div className="-mx-4 -my-6 flex h-[calc(100vh-4rem)] flex-col sm:-mx-6 lg:-mx-8">
        <div className="flex items-center justify-between border-b border-gray-100 px-6 py-3">
          <h1 className="text-lg font-bold text-ink">Doc</h1>
        </div>
        <div className="flex flex-1 flex-col items-center justify-center text-center">
          <div className="grid h-20 w-20 place-items-center rounded-full bg-gray-50 text-3xl">
            🗑️
          </div>
          <p className="mt-5 text-sm font-semibold text-ink">Trash is empty</p>
          <p className="mt-1 text-sm text-muted">Deleted documents will appear here.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="-mx-4 -my-6 flex h-[calc(100vh-4rem)] flex-col sm:-mx-6 lg:-mx-8">
      {/* Doc header */}
      <div className="flex items-center justify-between border-b border-gray-100 px-6 py-3">
        <h1 className="text-lg font-bold text-ink">Doc</h1>
        <div className="flex items-center gap-1">
          <HeaderButton icon={Type} label="Aa" />
          <HeaderButton icon={Sparkles} label="Ask AI" accent />
          <IconButton icon={MoreHorizontal} />
          <IconButton icon={X} />
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Page list sidebar */}
        <aside className="hidden w-56 shrink-0 border-r border-gray-100 p-3 md:block">
          <button className="flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm text-muted hover:bg-gray-100">
            <Plus className="h-4 w-4" /> Add page
          </button>
          <nav className="mt-2 space-y-0.5">
            {pages.map((page) => (
              <button
                key={page.id}
                onClick={() => setActiveId(page.id)}
                className={cn(
                  'flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-sm transition-colors',
                  page.id === activeId
                    ? 'bg-gray-100 font-medium text-ink'
                    : 'text-muted hover:bg-gray-50',
                )}
              >
                <span className="text-base leading-none">{page.emoji}</span>
                <span className="truncate">{page.title}</span>
              </button>
            ))}
          </nav>
        </aside>

        {/* Document body */}
        <div className="flex-1 overflow-y-auto">
          <Document page={active} />
        </div>
      </div>
    </div>
  )
}

function Document({ page }: { page: DocPage }) {
  return (
    <article className="mx-auto max-w-2xl px-6 py-12">
      <h2 className="text-3xl font-bold text-ink/80">{page.title}</h2>

      <div className="mt-3 flex items-center gap-2 text-xs text-muted">
        <span className="grid h-5 w-5 place-items-center rounded-full bg-ink text-2xs font-semibold text-white">
          {page.author.charAt(0)}
        </span>
        <span>{page.author}</span>
        <span className="text-subtle">·</span>
        <span>{page.updatedLabel}</span>
      </div>

      <div className="mt-6 space-y-4">
        {page.blocks.map((block, i) => (
          <BlockRenderer key={i} block={block} />
        ))}
      </div>

      {/* Empty block prompt */}
      <p className="mt-6 text-sm text-subtle">
        Write, press <kbd className="rounded bg-gray-100 px-1 text-2xs">space</kbd> for AI,{' '}
        <kbd className="rounded bg-gray-100 px-1 text-2xs">/</kbd> for commands
      </p>

      {/* Quick insert chips */}
      <div className="mt-3 flex flex-wrap gap-2">
        <InsertChip icon={Sparkles} label="Write with AI" />
        <InsertChip icon={Table2} label="Table" />
        <InsertChip icon={FileText} label="Project Overview" />
        <InsertChip icon={StickyNote} label="Meeting Notes" />
      </div>
    </article>
  )
}

function BlockRenderer({ block }: { block: DocBlock }) {
  if (block.type === 'heading') {
    return <h3 className="text-lg font-semibold text-ink">{block.text}</h3>
  }
  if (block.type === 'bullet') {
    return (
      <ul className="space-y-1.5">
        {block.items.map((item, i) => (
          <li key={i} className="flex gap-2 text-sm leading-relaxed text-muted">
            <LayoutList className="mt-0.5 h-3.5 w-3.5 shrink-0 text-subtle" />
            {item}
          </li>
        ))}
      </ul>
    )
  }
  return <p className="text-sm leading-relaxed text-muted">{block.text}</p>
}

function HeaderButton({
  icon: Icon,
  label,
  accent,
}: {
  icon: React.ElementType
  label: string
  accent?: boolean
}) {
  return (
    <button
      className={cn(
        'inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs font-medium transition-colors',
        accent ? 'text-ai-600 hover:bg-ai-50' : 'text-muted hover:bg-gray-100',
      )}
    >
      <Icon className="h-3.5 w-3.5" /> {label}
    </button>
  )
}

function IconButton({ icon: Icon }: { icon: React.ElementType }) {
  return (
    <button className="grid h-8 w-8 place-items-center rounded-md text-muted hover:bg-gray-100">
      <Icon className="h-4 w-4" />
    </button>
  )
}

function InsertChip({ icon: Icon, label }: { icon: React.ElementType; label: string }) {
  return (
    <button className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium text-muted ring-1 ring-gray-200 hover:bg-gray-50">
      <Icon className="h-3.5 w-3.5" /> {label}
    </button>
  )
}
