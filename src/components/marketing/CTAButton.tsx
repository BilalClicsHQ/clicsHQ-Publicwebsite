'use client'

import * as React from 'react'
import Link from 'next/link'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/cn'

/**
 * Single source of truth for marketing CTA buttons.
 *
 * Variants match the Figma:
 *  - `primary`   → solid black (default across the site: "Start for free", "Learn More", "Get started")
 *  - `accent`    → violet gradient with shadow (reserved for the hero "Get Started Now" hero CTA)
 *  - `secondary` → white with grey border ("Try It Free", "Get a demo")
 *  - `ghost`     → transparent text only ("Demo" nav link style)
 *
 * Use the `href` prop for navigation (renders <Link>), or `onClick` for actions (renders <button>).
 */
const ctaVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary:
          'bg-ink text-white hover:bg-black active:bg-black focus-visible:ring-ink/40',
        // Figma hero CTA: brand violet #7338F2, 9px radius. A subtle top→bottom
        // violet gradient gives depth, a *top-only* 1px white highlight border
        // (fading out by ~45%) reads as a glossy edge, and a soft violet-tinted
        // shadow lifts it off the dark hero — all via the two-background trick.
        accent:
          'rounded-[9px] border border-transparent text-white shadow-[0_10px_24px_-8px_rgba(115,56,242,0.55)] [background:linear-gradient(180deg,#7B45F5,#7338F2_45%,#6A2EE8)_padding-box,linear-gradient(180deg,rgba(255,255,255,.55),rgba(255,255,255,0)_45%)_border-box] hover:[background:linear-gradient(180deg,#7138F0,#6A2EE8_45%,#5E22DE)_padding-box,linear-gradient(180deg,rgba(255,255,255,.6),rgba(255,255,255,0)_45%)_border-box] hover:shadow-[0_12px_28px_-8px_rgba(115,56,242,0.6)] focus-visible:ring-violet-500/50',
        secondary:
          'bg-white text-ink border border-gray-200 hover:bg-gray-50 focus-visible:ring-ink/30',
        ghost:
          'bg-transparent text-ink/80 hover:text-ink focus-visible:ring-ink/30',
      },
      size: {
        sm: 'h-9  px-4 text-sm',
        md: 'h-11 px-6 text-sm',
        lg: 'h-[52px] px-8 text-base',
      },
    },
    defaultVariants: { variant: 'primary', size: 'md' },
  },
)

type CTAButtonProps = VariantProps<typeof ctaVariants> & {
  className?: string
  children: React.ReactNode
} & (
    | { href: string; onClick?: never; type?: never }
    | { href?: never; onClick?: () => void; type?: 'button' | 'submit' }
  )

export function CTAButton({ variant, size, className, children, ...rest }: CTAButtonProps) {
  const classes = cn(ctaVariants({ variant, size }), className)

  if ('href' in rest && rest.href) {
    return (
      <Link href={rest.href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button type={rest.type ?? 'button'} onClick={rest.onClick} className={classes}>
      {children}
    </button>
  )
}
