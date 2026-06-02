import * as React from 'react'
import { cn } from '@/lib/cn'

export type HighlightColor = 'blue' | 'lime' | 'magenta' | 'orange' | 'green' | 'pink' | 'violet' | 'sky'

const COLORS: Record<HighlightColor, string> = {
  blue:    'text-sky-500',
  lime:    'text-lime-500',
  magenta: 'text-fuchsia-500',
  orange:  'text-orange-500',
  green:   'text-emerald-500',
  pink:    'text-pink-500',
  violet:  'text-violet-500',
  sky:     'text-blue-500',
}

/**
 * Inline color-accent span used inside section headlines.
 * <Highlight color="blue">connected</Highlight>
 */
export function Highlight({
  color = 'violet',
  children,
  className,
}: {
  color?: HighlightColor
  children: React.ReactNode
  className?: string
}) {
  return <span className={cn(COLORS[color], className)}>{children}</span>
}
