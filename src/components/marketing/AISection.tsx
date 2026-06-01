import Image from 'next/image'
import { Sparkles, AlertTriangle, Workflow } from 'lucide-react'

const CARDS = [
  {
    icon: Sparkles,
    title: 'Create project plans',
    body: 'Turn rough ideas into tasks, milestones, owners, and timelines.',
  },
  {
    icon: AlertTriangle,
    title: 'Surface blockers early',
    body: 'Spot overdue tasks, missing owners, and stalled work before it becomes a problem.',
  },
  {
    icon: Workflow,
    title: 'Trigger workflows',
    body: 'Connect AI with workflows so the system can take action, not just give advice.',
  },
]

export function AISection() {
  return (
    <section className="relative px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl rounded-[2rem] bg-ink px-6 py-16 text-white sm:px-10 sm:py-20 lg:px-14">
        <h2 className="mx-auto max-w-3xl text-center text-3xl font-bold leading-tight text-white text-balance sm:text-4xl">
          AI that does more than write summaries.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-base text-white/70">
          Let AI help create tasks, summarize project updates, detect blockers, and trigger
          workflows across the tools your team already uses.
        </p>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-stretch">
          {/* Preview */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-violet-600 via-violet-500 to-fuchsia-500 p-6 sm:p-8">
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

          {/* Cards */}
          <div className="grid gap-4 sm:gap-5">
            {CARDS.map((c) => (
              <div
                key={c.title}
                className="rounded-2xl bg-white/[0.04] p-6 ring-1 ring-white/10 transition-colors hover:bg-white/[0.07]"
              >
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-white/10 text-white">
                  <c.icon className="h-4 w-4" />
                </span>
                <h3 className="mt-4 text-lg font-bold text-white">{c.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white/60">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
