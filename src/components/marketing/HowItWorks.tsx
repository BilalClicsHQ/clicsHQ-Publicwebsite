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
        <h2 className="mt-2 heading-lg text-center text-balance">
          From planning to execution, everything stays{' '}
          <span className="text-emerald-500">connected.</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-base text-muted">
          clicsHQ brings tasks, docs, workflows, AI agents, and integrations into one simple
          operating system for your team.
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {STEPS.map((s) => (
            <div
              key={s.n}
              className="rounded-2xl bg-gray-100 p-7 transition-shadow hover:shadow-md"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-ink text-sm font-bold text-white">
                {s.n}
              </span>
              <h3 className="mt-5 text-lg font-bold text-ink">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
