import Image from 'next/image'

// Intrinsic w/h come from each SVG's viewBox so aspect ratios are correct.
// `cls` sets a per-logo display height — TNN is a square stacked mark so it
// needs more height than the wide wordmarks to look optically balanced.
const COMPANIES = [
  { name: 'TNN',       src: '/images/companies/TNN.svg',       w: 114, h: 114, cls: 'h-14' },
  { name: 'Cyberbay',  src: '/images/companies/CyberBay.svg',  w: 159, h: 32,  cls: 'h-8'  },
  { name: 'Nyxlab',    src: '/images/companies/nyxLab.svg',    w: 198, h: 71,  cls: 'h-12' },
  { name: 'Capexplan', src: '/images/companies/capexplan.svg', w: 180, h: 40,  cls: 'h-9'  },
]

/**
 * Caption + horizontal row of partner logos with vertical pipe dividers.
 * Used on the home page and every Product / Solution page hero.
 */
export function TrustLogoStrip({ caption = 'Delivering consistent, high-quality solutions.' }: { caption?: string }) {
  return (
    <div className="container-app py-12 sm:py-14">
      <p className="text-center text-[16px] font-medium text-ink">{caption}</p>
      <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-6 sm:gap-x-12">
        {COMPANIES.map((c, i) => (
          <div key={c.name} className="flex items-center gap-x-8 sm:gap-x-12">
            <Image
              src={c.src}
              alt={c.name}
              width={c.w}
              height={c.h}
              className={`${c.cls} w-auto`}
            />
            {i < COMPANIES.length - 1 && (
              <span aria-hidden className="hidden h-10 w-px bg-gray-300 sm:block" />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
