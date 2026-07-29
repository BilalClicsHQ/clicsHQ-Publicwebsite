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
import { AiWayTile, AskAiDocsMockup } from './shared/ProductMockups'

const IMG = '/images/ai'

// ponytail: `avatar` null → gradient tile only. Workload Analyzer has no exported avatar yet.
const AGENTS = [
  { avatar: 'avatar-project-planner.png',    name: 'Project Planner',    tag: 'Planning',   desc: 'Create full project plans, milestones, goals, timelines, and task breakdowns.' },
  { avatar: 'avatar-meeting-summarizer.png', name: 'Meeting Summarizer', tag: 'Meetings',   desc: 'Turn meetings into clean summaries, decisions, and action items.' },
  { avatar: 'avatar-status-reporter.png',    name: 'Status Reporter',    tag: 'Reporting',  desc: 'Generate project updates, progress reports, and leadership summaries.' },
  { avatar: 'avatar-follow-up.png',          name: 'Follow-up Agent',    tag: 'Team',       desc: 'Track blockers, pending tasks, inactive work, and delayed updates.' },
  { avatar: null,                            name: 'Workload Analyzer',  tag: 'Capacity',   desc: 'Identify overloaded team members and suggest reassignment opportunities.' },
  { avatar: 'avatar-executive-brief.png',    name: 'Executive Brief',    tag: 'Leadership', desc: 'Create leadership-ready summaries with progress, blockers, and key highlights.' },
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
      <section className="relative overflow-hidden bg-white">
        {/* Figma: linear #EC4899 → #4F46E5, ~94deg (handle runs full width, tilted 4° down). Mask fades it into white. */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-[440px] opacity-20 blur-2xl bg-[linear-gradient(94deg,#EC4899_0%,#4F46E5_100%)] [mask-image:linear-gradient(to_bottom,black,transparent)]"
        />
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
          {/* ponytail: PNG ships its own corners/shadow — no ring/Shot wrapper. Bleeds past the container on lg, clipped by section overflow-hidden (matches Figma). */}
          <Image
            src={`${IMG}/hero-ai.png`}
            alt="clicsHQ AI chat and agents"
            width={846}
            height={646}
            priority
            className="h-auto w-full lg:w-[128%] lg:max-w-none"
          />
        </div>
      </section>

      <TrustLogoStrip />

      {/* One AI. Three ways to work. */}
      <section className="container-app py-16 sm:py-20">
        <SectionHeader
          title="One AI. Three ways to work."
          subtitle="Tasks in clicsHQ are designed to give teams a simple and structured way to manage execution without jumping between tools."
          className="mb-10"
        />
        <div className="grid gap-7 sm:grid-cols-3">
          <AiWayTile icon={<MessageSquare className="h-5 w-5" />} title="Chat with AI" desc="Ask questions, summarize tasks, create action items, brainstorm ideas, and search workspace knowledge instantly." />
          <AiWayTile icon={<Bot className="h-5 w-5" />} title="AI Agents" desc="Deploy specialized agents for planning, reporting, meetings, follow-ups, workload analysis, and execution." />
          <AiWayTile icon={<FileText className="h-5 w-5" />} title="Ask AI in Docs" desc="Understand documents faster with summaries, decisions, action items, and contextual answers inside Docs." />
        </div>
      </section>

      {/* Deploy AI agents for every team */}
      <section className="relative overflow-hidden py-16 sm:py-20">
        {/* Figma: 847×110 bar rotated -90° (→ 110w × 847h), #EC4899 → #4F46E5, progressive blur 50. Mirrored on both edges. */}
        {['-left-16', '-right-16'].map((side) => (
          <div
            key={side}
            aria-hidden
            className={`pointer-events-none absolute ${side} top-1/2 h-[847px] w-[110px] -translate-y-1/2 opacity-40 blur-[50px] bg-[linear-gradient(180deg,#EC4899_0%,#4F46E5_100%)] [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]`}
          />
        ))}
        <div className="container-app relative">
          <SectionHeader
            title="Deploy AI agents for every team"
            subtitle="Build your own workforce in minutes with agents designed to handle repeatable project work."
            className="mb-10"
          />
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {AGENTS.map((a) => (
              <div
                key={a.name}
                className="rounded-2xl bg-white p-6 shadow-[0_1px_2px_rgba(16,24,40,0.05),0_12px_28px_-16px_rgba(16,24,40,0.18)] ring-1 ring-gray-100"
              >
                <span className="block h-12 w-12 overflow-hidden rounded-xl bg-gradient-to-br from-fuchsia-200 to-violet-200">
                  {a.avatar && (
                    <Image src={`${IMG}/${a.avatar}`} alt="" width={48} height={48} className="h-full w-full object-cover" />
                  )}
                </span>
                <p className="mt-6 text-[20px] font-medium leading-tight text-ink">{a.name}</p>
                <p className="mt-2 text-[14px] leading-[1.6] text-muted">{a.desc}</p>
                <span className="mt-4 inline-block rounded-md bg-violet-100 px-2 py-[3px] text-[11px] font-medium text-violet-700">
                  {a.tag}
                </span>
              </div>
            ))}
          </div>
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
          eyebrow="Ask AI in Docs"
          title="Understand documents without reading everything"
          body="Ask questions about any document, generate summaries, find decisions, extract action items, and let AI suggest what to do next."
          visual={<AskAiDocsMockup className="lg:ml-auto" />}
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
