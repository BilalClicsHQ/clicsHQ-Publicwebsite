import * as React from 'react'
import { CTAButton } from './CTAButton'
import { TrustLogoStrip } from './shared/TrustLogoStrip'
import { SectionHeader } from './shared/SectionHeader'
import { FAQAccordion } from './shared/FAQAccordion'
import { FinalCTAMountain } from './shared/FinalCTAMountain'
import { Footer } from './Footer'
import { Highlight } from './shared/Highlight'
import {
  IntegrationOrbitMockup,
  IntegrationCardGrid,
  type IntegrationItem,
} from './shared/ProductMockups'

const INTEGRATIONS: IntegrationItem[] = [
  { name: 'Dropbox',            desc: 'Sync Clics and Dropbox to attach files to actions and projects, share them in messages, and anywhere else file attachment is supported.', logo: '/images/tools/dropbox.svg' },
  { name: 'Google Drive',       desc: 'Seamlessly upload and attach files to actions, projects, action templates, and share them in messages.',                                  logo: '/images/tools/g-drive.svg' },
  { name: 'Microsoft OneDrive', desc: 'Seamlessly upload your files through OneDrive Integration. Attach your files directly as attachments in Clics.',                          logo: '/images/tools/One drive.svg' },
  { name: 'Microsoft Teams',    desc: 'Access all features of Clics directly from Microsoft Teams.',                                                                            logo: '/images/tools/msTeams.svg' },
  { name: 'Jira',               desc: "Clics's integration to Jira allows you to connect Hive projects to selected Jira projects/boards.",                                       logo: '/images/tools/Jira.svg' },
  { name: 'Slack',              desc: 'Easily share Clics actions in Slack and quickly create actions using slash commands.',                                                   logo: '/images/tools/Slack.svg' },
  { name: 'GitHub',             desc: 'Associate Clics actions with Github Branches and automatically capture branch activity.',                                                logo: '/images/tools/Github.svg' },
  { name: 'Figma',              desc: 'Easily share Clics actions in Slack and quickly create actions using slash commands.',                                                   logo: '/images/tools/Figma.svg' },
  { name: 'Google Calendar',    desc: 'Associate Clics actions with Github Branches and automatically capture branch activity.',                                                logo: '/images/tools/g-calendar.svg' },
  { name: 'One Drive',          desc: 'Easily share Clics actions in Slack and quickly create actions using slash commands.',                                                   logo: '/images/tools/Outlook.svg' },
]

const FAQS = [
  { q: 'Can I customize board statuses?',       a: "Yes. Create statuses that match your team's workflow." },
  { q: 'Can AI help manage my board?',           a: 'clicsHQ AI can auto-update statuses, surface blockers, and suggest the next action on every card so nothing stalls.' },
  { q: 'Can boards connect with integrations?',  a: 'Boards connect with Slack, Google Drive, GitHub, Jira, Figma, and 100+ tools — so updates flow both ways without leaving clicsHQ.' },
]

export function IntegrationsView() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-white">
        <div className="container-app grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1fr_1fr] lg:gap-16 lg:py-24">
          <div>
            <p className="text-[20px] font-normal text-muted">Integrations</p>
            <h1 className="mt-6 text-balance text-[36px] font-medium leading-[1.17] tracking-normal text-ink sm:text-[48px] lg:text-[62px]">
              All your work tools, connected in one place
            </h1>
            <p className="mt-5 max-w-lg text-[18px] font-normal leading-[1.5] text-muted sm:text-[22px] lg:text-[25px]">
              Bring tasks, conversations, files, calendars, and workflows together without
              switching between apps.
            </p>
            <div className="mt-8 flex flex-wrap gap-[10px]">
              <CTAButton href="/signup" className="h-[45px] rounded-[10px] px-[15px] text-base font-medium">Get Started</CTAButton>
              <CTAButton variant="secondary" href="/product/integrations" className="h-[45px] rounded-[10px] px-[15px] text-base font-medium">Explore integrations</CTAButton>
            </div>
          </div>
          <IntegrationOrbitMockup />
        </div>
      </section>

      <TrustLogoStrip />

      {/* Native integrations grid */}
      <section className="container-app py-16 sm:py-20">
        <SectionHeader
          size="lg"
          title={
            <>
              Native <Highlight color="violet">integrations</Highlight>
            </>
          }
          subtitle="clicsHQ boards connect tasks, docs, comments, workflows, and AI so every card becomes a complete work hub."
          className="mb-10"
        />
        <IntegrationCardGrid items={INTEGRATIONS} />
      </section>

      <FAQAccordion title="Kanban board FAQs" items={FAQS} toggle="plusminus" />

      <FinalCTAMountain
        align="center"
        title="Give your team a board that keeps up"
        subtitle="Plan work, automate updates, and keep every project moving inside clicsHQ."
        primaryLabel="Start for free"
        secondaryLabel=""
      />

      <Footer />
    </main>
  )
}
