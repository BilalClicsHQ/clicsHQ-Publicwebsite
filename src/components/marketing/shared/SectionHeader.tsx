import * as React from 'react'
import { cn } from '@/lib/cn'

/**
 * Eyebrow + centered headline + optional subhead — used at the top of most
 * marketing sections. Pass the headline as a node so callers can embed a
 * <Highlight> for the colored-word accent.
 */
export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className,
}: {
  eyebrow?: string
  title: React.ReactNode
  subtitle?: string
  align?: 'center' | 'left'
  className?: string
}) {
  const alignCls = align === 'center' ? 'text-center mx-auto' : 'text-left'
  return (
    <div className={cn(alignCls, 'max-w-3xl', className)}>
      {eyebrow && <p className="text-xs font-medium text-muted sm:text-sm">{eyebrow}</p>}
      <h2 className="mt-1.5 text-balance text-2xl font-bold leading-tight tracking-tight text-ink sm:text-3xl lg:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className={cn('mt-3 text-sm text-muted sm:text-base', align === 'center' && 'mx-auto max-w-2xl')}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
