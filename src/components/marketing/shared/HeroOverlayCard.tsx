import { cn } from '@/lib/cn'

/**
 * Floating dark "clicsAI" card overlaid on a hero dashboard mockup (e.g. the
 * Operations hero's "3 blockers found" agent callout). Positioned by the caller
 * via `className` — it renders inside ProductHero's un-clipped mockup wrapper.
 */
export function HeroOverlayCard({
  label = 'clicsAI',
  title,
  body,
  className,
}: {
  label?: string
  title: string
  body: string
  className?: string
}) {
  return (
    <div
      className={cn(
        'absolute z-10 w-[240px] rounded-2xl bg-ink p-5 text-white shadow-[0_24px_50px_-12px_rgba(0,0,0,0.5)] ring-1 ring-white/10 sm:w-[300px]',
        className,
      )}
    >
      <p className="text-[13px] font-medium text-violet-300">{label}</p>
      <p className="mt-2 text-[19px] font-semibold leading-tight text-white">{title}</p>
      <p className="mt-2 text-[13px] leading-relaxed text-white/55">{body}</p>
    </div>
  )
}
