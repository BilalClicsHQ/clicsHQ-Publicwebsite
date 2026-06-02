import Image from 'next/image'

const POINTS = [
  {
    n: 1,
    title: 'Simple without feeling basic',
    body: 'Clean enough for everyday users, powerful enough for teams managing real projects, deadlines, and cross-functional work.',
  },
  {
    n: 2,
    title: 'AI that takes action',
    body: 'Not just content generation, clicsHQ AI helps with tasks, updates, workflows, blockers, and team coordination.',
  },
  {
    n: 3,
    title: 'Your tools stay connected',
    body: 'Bring together Slack, Google Drive, Calendar, GitHub, Figma, Microsoft tools, and more without switching context all day.',
  },
]

export function WhyClicsHQ() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="container-app grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left */}
        <div>
          <p className="text-sm font-medium text-muted">Why clicsHQ</p>
          <h2 className="mt-3 text-balance text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl lg:text-[44px]">
            Built for how modern teams actually work.
          </h2>

          <ul className="mt-10 space-y-7">
            {POINTS.map((p) => (
              <li key={p.n} className="flex gap-5">
                <span className="grid h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-ink text-base font-bold text-white">
                  {p.n}
                </span>
                <div>
                  <h3 className="text-base font-bold text-ink sm:text-lg">{p.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{p.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right preview */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-gray-200">
            <Image
              src="/images/dashboards/ClicshqPage.svg"
              alt="clicsHQ home preview"
              width={1580}
              height={910}
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
