import { CTAButton } from './CTAButton'

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300">
      {/* Decorative landscape SVG — mountains, forest, tree */}
      <svg
        viewBox="0 0 1440 520"
        aria-hidden
        preserveAspectRatio="xMidYMax slice"
        className="pointer-events-none absolute inset-0 h-full w-full select-none"
      >
        {/* Sky tone is from the gradient bg */}
        {/* Far mountains */}
        <path
          d="M0 380 L120 260 L260 320 L420 220 L560 300 L720 240 L900 320 L1080 250 L1260 310 L1440 270 L1440 520 L0 520 Z"
          fill="#C9CDD3"
          opacity="0.7"
        />
        {/* Mid hills */}
        <path
          d="M0 430 L160 360 L320 410 L480 340 L640 400 L800 360 L960 420 L1120 370 L1280 410 L1440 380 L1440 520 L0 520 Z"
          fill="#9CA3AF"
          opacity="0.8"
        />
        {/* Forest line (tiny triangles) */}
        <g fill="#4B5563">
          {Array.from({ length: 80 }).map((_, i) => {
            const x = i * 18
            const h = 12 + ((i * 37) % 14)
            return (
              <polygon
                key={i}
                points={`${x},460 ${x + 9},${460 - h} ${x + 18},460`}
              />
            )
          })}
        </g>
        {/* Near hills */}
        <path
          d="M0 480 L240 440 L480 470 L720 430 L960 470 L1200 440 L1440 470 L1440 520 L0 520 Z"
          fill="#374151"
        />
        {/* Big tree silhouette on the right */}
        <g fill="#1F2937">
          <rect x="1180" y="320" width="14" height="180" />
          <path d="M1187 100 C 1100 180, 1080 280, 1100 340 C 1140 360, 1230 360, 1280 340 C 1300 280, 1280 180, 1187 100 Z" />
        </g>
      </svg>

      {/* Content */}
      <div className="container-app relative py-20 sm:py-24 lg:py-28">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold leading-tight text-ink sm:text-4xl text-balance">
            Bring your team’s work into one connected place.
          </h2>
          <p className="mt-4 max-w-md text-sm text-ink/70">
            Plan projects, manage tasks, collaborate with your team, and automate the
            busywork with AI-powered workflows.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <CTAButton href="/signup">Start for free</CTAButton>
            <CTAButton variant="secondary" href="/demo">Get a demo</CTAButton>
          </div>
        </div>
      </div>
    </section>
  )
}
