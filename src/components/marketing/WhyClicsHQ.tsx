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
          {/* Figma: medium weight. */}
          <h2 className="mt-3 text-balance text-[28px] font-medium leading-[1.2] tracking-normal text-ink sm:text-[34px] lg:text-[40px]">
            Built for how modern
            <br className="hidden lg:block" /> teams actually work.
          </h2>

          <ul className="mt-10 space-y-7">
            {POINTS.map((p) => (
              <li key={p.n} className="flex gap-5">
                <span className="grid h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-ink text-lg font-bold text-white">
                  {p.n}
                </span>
                <div>
                  <h3 className="text-base font-semibold text-ink sm:text-lg">{p.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{p.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right preview — Figma "01. Home" dashboard export (chrome-less panel
            with its own fade baked in). */}
        <div className="relative">
          {/* unoptimized: the Next image optimizer 500s on this exported SVG. */}
          <Image
            src="/images/icons/svg2.svg"
            alt="clicsHQ home preview"
            width={1280}
            height={1080}
            unoptimized
            loading="eager"
            className="h-auto w-full"
          />
          {/* Figma: soft white fog over the bottom edge (96px gradient, blur 43)
              so the dashboard fades out instead of cutting off hard. */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 -bottom-1 h-24 bg-gradient-to-t from-white via-white/70 to-transparent blur-[6px]"
          />
        </div>
      </div>
    </section>
  )
}
