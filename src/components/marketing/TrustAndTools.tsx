import Image from 'next/image'
import { CTAButton } from './CTAButton'

const COMPANIES = [
  { name: 'TNN',       src: '/images/companies/TNN.svg',       w: 90, h: 40 },
  { name: 'Cyberbay',  src: '/images/companies/CyberBay.svg',  w: 130, h: 36 },
  { name: 'Nyxlab',    src: '/images/companies/nyxLab.svg',    w: 130, h: 36 },
  { name: 'Capexplan', src: '/images/companies/capexplan.svg', w: 130, h: 32 },
]

const TOOLS = [
  { name: 'GitHub',           src: '/images/tools/githubbgCircle.svg' },
  { name: 'Google Drive',     src: '/images/tools/gDrivebgCircle.svg' },
  { name: 'Google Calendar',  src: '/images/tools/gCallendarbgCircle.svg' },
  { name: 'OneDrive',         src: '/images/tools/onedrivebgCircle.svg' },
  { name: 'Jira',             src: '/images/tools/jirabgCircle.svg' },
  { name: 'Dropbox',          src: '/images/tools/dropboxbgCircle.svg' },
  { name: 'Slack',            src: '/images/tools/slackbgCircle.svg' },
  { name: 'Microsoft Teams',  src: '/images/tools/msteambgCircle.svg' },
  { name: 'Figma',            src: '/images/tools/figmabgCircle.svg' },
  { name: 'Outlook',          src: '/images/tools/outlookbgCircle.svg' },
]

export function TrustAndTools() {
  return (
    <section className="bg-white">
      {/* Trust strip */}
      <div className="container-app py-14 sm:py-16">
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

        <ul className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          {TOOLS.map((t) => (
            <li key={t.name} className="group">
              <Image
                src={t.src}
                alt={t.name}
                width={64}
                height={64}
                title={t.name}
                className="h-12 w-12 transition-transform duration-200 group-hover:-translate-y-1 sm:h-14 sm:w-14"
              />
            </li>
          ))}
        </ul>

        <div className="mt-10 flex justify-center">
          <CTAButton href="/product/integrations">Learn More</CTAButton>
        </div>
      </div>
    </section>
  )
}
