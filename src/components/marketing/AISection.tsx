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
        <h2 className="mx-auto max-w-3xl text-center text-balance text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[44px]">
          AI that does more than write summaries.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-white/70 sm:text-base">
          Let AI help create tasks, summarize project updates, detect blockers, and trigger
          workflows across the tools your team already uses.
        </p>

        <div className="mt-12 grid gap-5 lg:grid-cols-[1.25fr_1fr] lg:items-stretch">
          {/* Left — violet gradient preview card */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-violet-700 via-violet-500 to-fuchsia-500 p-6 sm:p-8">
            {/* Soft glow */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background: 'radial-gradient(ellipse at top, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0) 60%)',
              }}
            />
            <div className="relative mx-auto max-w-md overflow-hidden rounded-xl bg-white shadow-2xl">
              <Image
                src="/images/dashboards/ClicshqPage.svg"
                alt="clicsHQ AI agents"
                width={1580}
                height={910}
                className="h-auto w-full"
              />
            </div>
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
