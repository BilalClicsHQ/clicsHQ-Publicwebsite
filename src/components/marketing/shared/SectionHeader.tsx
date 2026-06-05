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
      ? 'text-[34px] sm:text-[44px] lg:text-[50px]'
      : 'text-[28px] sm:text-[36px] lg:text-[42px]'
  return (
    <div className={cn(alignCls, 'max-w-3xl', className)}>
      {eyebrow && <p className="text-[20px] font-normal text-ink">{eyebrow}</p>}
      <h2 className={cn('mt-4 text-balance font-medium leading-[1.17] tracking-normal text-ink', headingSize)}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn('mt-4 text-[18px] leading-[1.5] text-muted sm:text-[20px]', align === 'center' && 'mx-auto max-w-2xl')}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
