import Image from 'next/image'

const CARDS = [
  {
    title: 'Create project plans',
    body: 'Turn rough ideas into tasks, milestones, owners, and timelines.',
  },
  {
    title: 'Surface blockers early',
    body: 'Spot overdue tasks, missing owners, and stalled work before it becomes a problem.',
  },
  {
    title: 'Trigger workflows',
    body: 'Connect AI with workflows so the system can take action, not just give advice.',
  },
]

export function AISection() {
  return (
    <section className="relative px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl rounded-[2rem] bg-ink px-6 py-16 text-white sm:px-10 sm:py-20 lg:px-14">
        {/* Figma: medium weight, two lines. */}
        <h2 className="mx-auto max-w-3xl text-center text-[28px] font-medium leading-[1.25] text-white sm:text-[34px] lg:text-[40px]">
          AI that does more than write
          <br className="hidden sm:block" /> summaries.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-white/70 sm:text-base">
          Let AI help create tasks, summarize project updates, detect blockers, and trigger
          workflows across the tools your team already uses.
        </p>

        <div className="mt-12 grid gap-5 lg:grid-cols-[1.25fr_1fr] lg:items-stretch">
          {/* Left — Figma "Build your own workforce" composition (gradient + popup
              baked into the exported SVG). */}
          <div className="relative overflow-hidden rounded-2xl">
            {/* unoptimized: the Next image optimizer 500s on this large exported SVG. */}
            <Image
              src="/images/icons/svg1.svg"
              alt="Build your own AI workforce in minutes"
              width={1400}
              height={900}
              unoptimized
              loading="eager"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Right — three dark cards */}
          <div className="grid gap-4">
            {CARDS.map((c) => (
              <div
                key={c.title}
                className="rounded-2xl bg-white/[0.05] px-7 py-7 ring-1 ring-white/10 transition-colors hover:bg-white/[0.08]"
              >
                <h3 className="text-xl font-bold text-white sm:text-2xl">{c.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-white/60 sm:text-sm">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
