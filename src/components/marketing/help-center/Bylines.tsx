import { cn } from '@/lib/cn'

/** Small overlapping avatar circles (no photos — neutral gradient discs). */
export function AvatarStack({ count = 3, className }: { count?: number; className?: string }) {
  return (
    <span className={cn('flex -space-x-2', className)}>
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          aria-hidden
          className="h-7 w-7 rounded-full bg-gradient-to-br from-gray-300 to-gray-500 ring-2 ring-white"
        />
      ))}
    </span>
  )
}

/** Single-author byline used on article pages. */
export function AuthorByline({
  name = 'Beth-Ann Sher',
  updated = 'Updated over a week ago',
}: {
  name?: string
  updated?: string
}) {
  return (
    <div className="flex items-center gap-3">
      <span aria-hidden className="h-9 w-9 shrink-0 rounded-full bg-gradient-to-br from-gray-300 to-gray-500" />
      <div className="text-[13px] leading-tight text-subtle">
        <p>Written by {name}</p>
        <p>{updated}</p>
      </div>
    </div>
  )
}
