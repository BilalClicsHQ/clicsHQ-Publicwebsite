import Image from 'next/image'
import { cn } from '@/lib/cn'
import { CTAButton } from './CTAButton'

const COMPANIES = [
  { name: 'TNN',       src: '/images/companies/TNN.svg',       w: 90,  h: 40 },
  { name: 'Cyberbay',  src: '/images/companies/CyberBay.svg',  w: 130, h: 36 },
  { name: 'Nyxlab',    src: '/images/companies/nyxLab.svg',    w: 130, h: 36 },
  { name: 'Capexplan', src: '/images/companies/capexplan.svg', w: 130, h: 32 },
]

/**
 * Tool entries are layered: bg circle behind, brand icon in front.
 * `bgSrc` is the colored pastel circle (`*bgCircle.svg`), `iconSrc` is the
 * plain brand mark with no background.
 */
const TOOLS = [
  { name: 'GitHub',          bgSrc: '/images/tools/githubbgCircle.svg',     iconSrc: '/images/tools/Github.svg' },
  { name: 'Google Drive',    bgSrc: '/images/tools/gDrivebgCircle.svg',     iconSrc: '/images/tools/g-drive.svg' },
  { name: 'Google Calendar', bgSrc: '/images/tools/gCallendarbgCircle.svg', iconSrc: '/images/tools/g-calendar.svg' },
  { name: 'Jira',            bgSrc: '/images/tools/jirabgCircle.svg',       iconSrc: '/images/tools/Jira.svg' },
  { name: 'Dropbox',         bgSrc: '/images/tools/dropboxbgCircle.svg',    iconSrc: '/images/tools/dropbox.svg' },
  { name: 'Slack',           bgSrc: '/images/tools/slackbgCircle.svg',      iconSrc: '/images/tools/Slack.svg' },
  { name: 'Microsoft Teams', bgSrc: '/images/tools/msteambgCircle.svg',     iconSrc: '/images/tools/msTeams.svg' },
  { name: 'Figma',           bgSrc: '/images/tools/figmabgCircle.svg',      iconSrc: '/images/tools/Figma.svg' },
  { name: 'OneDrive',        bgSrc: '/images/tools/onedrivebgCircle.svg',   iconSrc: '/images/tools/One drive.svg' },
  { name: 'Outlook',         bgSrc: '/images/tools/outlookbgCircle.svg',    iconSrc: '/images/tools/Outlook.svg' },
]

// In Figma the center icons render largest and gradually scale down toward
// the edges. Build a symmetric scale ladder for `TOOLS.length` items:
//   indices 0..9 → tier values that peak in the middle.
function tierFor(index: number, total: number): 'sm' | 'md' | 'lg' | 'xl' {
  // distance from center, normalised 0..1
  const center = (total - 1) / 2
  const d = Math.abs(index - center) / center
  if (d <= 0.2) return 'xl'
  if (d <= 0.5) return 'lg'
  if (d <= 0.8) return 'md'
  return 'sm'
}

const TIER_SIZE = {
  sm: { box: 'h-12 w-12 sm:h-14 sm:w-14', icon: 'h-6  w-6  sm:h-7  sm:w-7'  },
  md: { box: 'h-14 w-14 sm:h-16 sm:w-16', icon: 'h-7  w-7  sm:h-8  sm:w-8'  },
  lg: { box: 'h-16 w-16 sm:h-20 sm:w-20', icon: 'h-8  w-8  sm:h-10 sm:w-10' },
  xl: { box: 'h-20 w-20 sm:h-24 sm:w-24', icon: 'h-10 w-10 sm:h-12 sm:w-12' },
}

export function TrustAndTools() {
  return (
    <section className="bg-white">
      {/* Trust strip */}
      <div className="container-app py-12 sm:py-14">
        <p className="text-center text-sm font-medium text-ink">
          Delivering consistent, high-quality solutions.
        </p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 sm:gap-x-14">
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

      {/* Tools strip */}
      <div className="container-app pb-20 sm:pb-24">
        <h2 className="heading-lg text-center text-balance">
          Works With 200+ Tools You Already Use
        </h2>

        <ul className="mx-auto mt-10 flex items-center justify-center">
          {TOOLS.map((t, i) => {
            const tier = tierFor(i, TOOLS.length)
            const sz = TIER_SIZE[tier]
            const z = { sm: 10, md: 20, lg: 30, xl: 40 }[tier]
            return (
              <li
                key={t.name}
                className="group relative -ml-3 first:ml-0 sm:-ml-4"
                style={{ zIndex: z }}
              >
                {/* Background pastel circle */}
                <div className={cn('relative grid place-items-center', sz.box)}>
                  <Image
                    src={t.bgSrc}
                    alt=""
                    aria-hidden
                    fill
                    sizes="120px"
                    className="object-contain transition-transform duration-200 group-hover:-translate-y-1"
                  />
                  {/* Foreground brand icon */}
                  <Image
                    src={t.iconSrc}
                    alt={t.name}
                    width={64}
                    height={64}
                    title={t.name}
                    className={cn(
                      'relative z-10 object-contain transition-transform duration-200 group-hover:-translate-y-1',
                      sz.icon,
                    )}
                  />
                </div>
              </li>
            )
          })}
        </ul>

        <div className="mt-10 flex justify-center">
          <CTAButton href="/product/integrations">Learn More</CTAButton>
        </div>
      </div>
    </section>
  )
}
