import Image from 'next/image'

const COMPANIES = [
  { name: 'TNN',       src: '/images/companies/TNN.svg',       w: 90,  h: 40 },
  { name: 'Cyberbay',  src: '/images/companies/CyberBay.svg',  w: 130, h: 36 },
  { name: 'Nyxlab',    src: '/images/companies/nyxLab.svg',    w: 130, h: 36 },
  { name: 'Capexplan', src: '/images/companies/capexplan.svg', w: 130, h: 32 },
]

/**
 * Caption + horizontal row of partner logos with vertical pipe dividers.
 * Used on the home page and every Product / Solution page hero.
 */
export function TrustLogoStrip({ caption = 'Delivering consistent, high-quality solutions.' }: { caption?: string }) {
  return (
    <div className="container-app py-12 sm:py-14">
      <p className="text-center text-sm font-medium text-ink">{caption}</p>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 sm:gap-x-14">
        {COMPANIES.map((c, i) => (
          <div key={c.name} className="flex items-center gap-x-10 sm:gap-x-14">
            <Image
              src={c.src}
              alt={c.name}
              width={c.w}
              height={c.h}
              className="h-9 w-auto opacity-90"
            />
            {i < COMPANIES.length - 1 && (
              <span aria-hidden className="hidden h-9 w-px bg-gray-200 sm:block" />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
