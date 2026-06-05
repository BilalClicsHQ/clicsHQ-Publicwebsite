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
  size = 'default',
  className,
}: {
  eyebrow?: string
  title: React.ReactNode
  subtitle?: string
  align?: 'center' | 'left'
  /** 'lg' = large showcase headline (~48px); 'default' = section headline (~38px). */
  size?: 'default' | 'lg'
  className?: string
}) {
  const alignCls = align === 'center' ? 'text-center mx-auto' : 'text-left'
  const headingSize =
    size === 'lg'
      ? 'text-[32px] sm:text-[42px] lg:text-[48px]'
      : 'text-[26px] sm:text-[32px] lg:text-[38px]'
  return (
    <div className={cn(alignCls, 'max-w-3xl', className)}>
      {eyebrow && <p className="text-[15px] font-medium text-ink">{eyebrow}</p>}
      <h2 className={cn('mt-4 text-balance font-bold leading-[1.12] tracking-tight text-ink', headingSize)}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn('mt-4 text-[16px] leading-relaxed text-muted sm:text-[17px]', align === 'center' && 'mx-auto max-w-2xl')}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
