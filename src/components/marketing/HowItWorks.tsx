const STEPS = [
  {
    n: 1,
    title: 'Plan the work',
    body: 'Create tasks, write docs, organize spaces, and turn ideas into clear action plans.',
  },
  {
    n: 2,
    title: 'Move work forward',
    body: 'Track progress across boards, lists, calendars, comments, and team updates without losing context.',
  },
  {
    n: 3,
    title: 'Automate the repeat work',
    body: 'Track progress across boards, lists, calendars, comments, and team updates without losing context.',
  },
]

export function HowItWorks() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="container-app">
        <p className="text-center text-sm font-medium text-muted">How clicsHQ works</p>
        {/* Figma: medium weight, breaks after "everything", green is #84D722. */}
        <h2 className="mt-2 text-center text-[28px] font-medium leading-[1.25] tracking-normal text-ink sm:text-[36px] lg:text-[40px]">
          From planning to execution, everything
          <br className="hidden sm:block" /> stays <span className="text-[#84D722]">connected.</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-muted sm:text-base">
          clicsHQ brings tasks, docs, workflows, AI agents, and integrations into one simple
          operating system for your team.
        </p>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {STEPS.map((s) => (
            <div
              key={s.n}
              className="rounded-2xl bg-gray-100 p-8 transition-shadow hover:shadow-md"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-ink text-lg font-bold text-white">
                {s.n}
              </span>
              <h3 className="mt-7 text-center text-[22px] font-semibold text-ink">{s.title}</h3>
              <p className="mt-3 text-center text-sm leading-relaxed text-muted">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
