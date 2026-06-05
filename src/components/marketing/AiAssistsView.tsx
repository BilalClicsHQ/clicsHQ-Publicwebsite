import * as React from 'react'
import Image from 'next/image'
import { MessageSquare, Bot, FileText } from 'lucide-react'
import { CTAButton } from './CTAButton'
import { TrustLogoStrip } from './shared/TrustLogoStrip'
import { SectionHeader } from './shared/SectionHeader'
import { FeatureSplitRow } from './shared/FeatureSplitRow'
import { CrossProductGrid } from './shared/CrossProductGrid'
import { FAQAccordion } from './shared/FAQAccordion'
import { FinalCTAMountain } from './shared/FinalCTAMountain'
import { Footer } from './Footer'
import { Highlight } from './shared/Highlight'
import { Shot, AiWayTile } from './shared/ProductMockups'

const IMG = '/images/ai'

// Pre-designed agent cards (SVG screenshots from Figma).
const AGENT_SHOTS = [
  { src: `${IMG}/ai-agent-projectplanner.svg`,   alt: 'Project Planner agent' },
  { src: `${IMG}/ai-agent-meetingsummarize.svg`, alt: 'Meeting Summarizer agent' },
  { src: `${IMG}/ai-agent-status-reporter.svg`,  alt: 'Status Reporter agent' },
  { src: `${IMG}/ai-agent-follow-up-agent.svg`,  alt: 'Follow-up agent' },
  { src: `${IMG}/ai-agent-executive-brief.svg`,  alt: 'Executive Brief agent' },
]

// Floating dark callout cards for the "Secure AI" section.
const SECURE_BOXES = [
  { src: `${IMG}/ai-secure-blackbox-left-top.svg`,     pos: 'lg:absolute lg:left-0 lg:top-2' },
  { src: `${IMG}/ai-secure-blackbox-right-top.svg`,    pos: 'lg:absolute lg:right-0 lg:top-2' },
  { src: `${IMG}/ai-secure-blackbox-left-bottom.svg`,  pos: 'lg:absolute lg:bottom-2 lg:left-0' },
  { src: `${IMG}/ai-secure-blackbox-right-bottom.svg`, pos: 'lg:absolute lg:bottom-2 lg:right-0' },
]

const FAQS = [
  { q: 'What model powers clicsHQ AI?',                a: 'clicsHQ AI uses the latest Claude and OpenAI models, chosen per task automatically.' },
  { q: 'Can AI agents update task statuses?',          a: 'Yes — when authorized, agents can move cards, change statuses, and create follow-ups.' },
  { q: 'Can AI send notifications or emails?',         a: 'AI agents can post in Slack, email, and trigger workflows on your behalf.' },
]

export function AiAssistsView() {
  return (
    <main className="bg-white">
      {/* Hero — light, with a soft pink/lavender wash (matches Figma) */}
      <section className="relative overflow-hidden bg-gradient-to-b from-violet-50/60 via-pink-50/30 to-white">
        <div className="container-app relative grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:py-24">
          <div>
            <p className="text-[20px] font-normal text-ink">
              ✨ AI-powered workspace intelligence
            </p>
            <h1 className="mt-6 text-balance text-[36px] font-medium leading-[1.17] tracking-normal text-ink sm:text-[48px] lg:text-[62px]">
              Build your{' '}
              <span className="text-fuchsia-500">AI</span>{' '}
              <span className="text-violet-500">workforce</span>{' '}
              inside clicsHQ
            </h1>
            <p className="mt-5 max-w-[520px] text-[18px] font-normal leading-[1.5] text-muted sm:text-[22px] lg:text-[25px]">
              Chat with AI, deploy smart agents, summarize docs, create tasks, and automate everyday
              work across your entire workspace.
            </p>
            <div className="mt-8 flex flex-wrap gap-[10px]">
              <CTAButton href="/signup" className="h-[45px] rounded-[10px] px-[15px] text-base font-medium">Get Started</CTAButton>
              <CTAButton
                variant="secondary"
                href="/demo"
                className="h-[45px] rounded-[10px] px-[15px] text-base font-medium"
              >
                Watch Demo
              </CTAButton>
            </div>
          </div>
          <Shot src={`${IMG}/ai-hero1.svg`} alt="clicsHQ AI chat" w={787} h={562} priority />
        </div>
      </section>

      <TrustLogoStrip />

      {/* One AI. Three ways to work. */}
      <section className="container-app py-16 sm:py-20">
        <SectionHeader
          title="One AI. Three ways to work."
          subtitle="Chat. Agents. Inline assistance. clicsHQ AI lives where the work is."
          className="mb-10"
        />
        <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-3">
          <AiWayTile icon={<MessageSquare className="h-5 w-5" />} title="Chat with AI" desc="Ask anything about your projects, docs, and people — answered with sources." />
          <AiWayTile icon={<Bot className="h-5 w-5" />} title="AI Agents" desc="Deploy specialised agents that take real actions across your workspace." />
          <AiWayTile icon={<FileText className="h-5 w-5" />} title="Ask AI in Docs" desc="Draft, summarize, and generate updates inside any document." />
        </div>
      </section>

      {/* Deploy AI agents for every team */}
      <section className="container-app py-16 sm:py-20">
        <SectionHeader
          title="Deploy AI agents for every team"
          subtitle="Specialised agents that plan, summarize, report, and follow up — so your team focuses on the work that matters."
          className="mb-10"
        />
        <div className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {AGENT_SHOTS.map((a) => (
            <Image
              key={a.src}
              src={a.src}
              alt={a.alt}
              width={451}
              height={318}
              className="h-auto w-full rounded-2xl ring-1 ring-gray-200/70"
            />
          ))}
        </div>
      </section>

      {/* Turn work into action automatically — centered 3-step flow */}
      <section className="container-app py-16 sm:py-20">
        <SectionHeader
          title="Turn work into action automatically"
          subtitle="When a meeting ends, clicsHQ AI summarizes the discussion and turns decisions into tasks — no manual entry."
          className="mb-10"
        />
        <ul className="mx-auto flex max-w-3xl flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
          {['Meeting ends', 'AI summarizes discussion', 'Tasks are created'].map((step, i) => (
            <React.Fragment key={step}>
              <li className="rounded-2xl bg-white px-6 py-4 text-center text-[16px] font-medium text-ink ring-1 ring-gray-200 sm:text-left">
                {step}
              </li>
              {i < 2 && <span aria-hidden className="hidden text-2xl text-subtle sm:block">→</span>}
            </React.Fragment>
          ))}
        </ul>
      </section>

      {/* Understand documents without reading everything */}
      <section className="container-app py-12 sm:py-16">
        <FeatureSplitRow
          eyebrow="In docs"
          title="Understand documents without reading everything"
          body="Ask AI to summarize long docs, extract decisions, or answer a question — grounded in your real workspace content, with links back to the source."
          visual={<Shot src={`${IMG}/ai-document.svg`} alt="Asking AI about a document" w={267} h={474} />}
          reverse
        />
      </section>

      {/* Secure AI for your workspace — center mockup framed by 4 dark callout cards */}
      <section className="container-app py-16 sm:py-20">
        <SectionHeader
          title="Secure AI for your workspace"
          subtitle="clicsHQ AI is designed with workspace permissions, privacy, and enterprise controls in mind."
          className="mb-10"
        />
        <div className="relative mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl lg:max-w-3xl">
            <Image
              src={`${IMG}/ai-secure.svg`}
              alt="Secure clicsHQ AI"
              width={678}
              height={529}
              className="h-auto w-full rounded-2xl shadow-2xl ring-1 ring-gray-200/60"
            />
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:mt-0 lg:block">
            {SECURE_BOXES.map((b) => (
              <Image
                key={b.src}
                src={b.src}
                alt=""
                aria-hidden
                width={422}
                height={180}
                className={`h-auto w-full rounded-2xl lg:w-[22rem] ${b.pos}`}
              />
            ))}
          </div>
        </div>
      </section>

      <CrossProductGrid
        title={
          <>
            AI is just the <Highlight color="lime">beginning</Highlight>
          </>
        }
      />

      <FAQAccordion title="AI Assists FAQs" items={FAQS} toggle="plusminus" />

      <FinalCTAMountain
        align="center"
        title="Stop managing busywork. Start finishing it."
        subtitle="Give your team an AI workforce built directly into clicsHQ."
        primaryLabel="Get Started"
        secondaryLabel=""
      />

      <Footer />
    </main>
  )
}
