import * as React from 'react'
import { MessageSquare, Bot, FileText } from 'lucide-react'
import { CTAButton } from './CTAButton'
import { TrustLogoStrip } from './shared/TrustLogoStrip'
import { SectionHeader } from './shared/SectionHeader'
import { FeatureSplitRow } from './shared/FeatureSplitRow'
import { DarkFeatureTileGrid } from './shared/DarkFeatureTileGrid'
import { CrossProductGrid } from './shared/CrossProductGrid'
import { FAQAccordion } from './shared/FAQAccordion'
import { FinalCTAMountain } from './shared/FinalCTAMountain'
import { Footer } from './Footer'
import { Highlight } from './shared/Highlight'
import {
  AiChatMockup,
  AiAgentGrid,
  AiWayTile,
  WorkflowCanvasMockup,
  DocsEditorMockup,
  type AiAgent,
} from './shared/ProductMockups'

const AGENTS: AiAgent[] = [
  { name: 'Project Planner',    desc: 'Breaks goals into tasks, owners, and a realistic timeline.', tone: 'violet' },
  { name: 'Meeting Summarizer', desc: 'Turns call notes into decisions, action items, and owners.', tone: 'pink' },
  { name: 'Status Reporter',    desc: 'Drafts weekly status updates from real project activity.',   tone: 'sky' },
  { name: 'Follow-up Agent',    desc: 'Chases blockers and reminds owners about at-risk work.',      tone: 'amber' },
  { name: 'Workload Analyzer',  desc: 'Spots overloaded teammates and rebalances assignments.',      tone: 'emerald' },
  { name: 'Executive Brief',    desc: 'Rolls everything up into a leadership-ready summary.',         tone: 'fuchsia' },
]

const FAQS = [
  { q: 'What model powers clicsHQ AI?',                a: 'clicsHQ AI uses the latest Claude and OpenAI models, chosen per task automatically.' },
  { q: 'Can AI agents update task statuses?',          a: 'Yes — when authorized, agents can move cards, change statuses, and create follow-ups.' },
  { q: 'Can AI send notifications or emails?',         a: 'AI agents can post in Slack, email, and trigger workflows on your behalf.' },
]

export function AiAssistsView() {
  return (
    <main className="bg-white">
      {/* Dark hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1a1130] via-[#160d24] to-[#0c0a12] text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-fuchsia-500/20 blur-3xl"
        />
        <div className="container-app relative grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:py-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-fuchsia-400">
              ✨ AI-powered workspace intelligence
            </p>
            <h1 className="mt-3 text-balance text-[34px] font-bold leading-[1.05] tracking-tight sm:text-[44px] lg:text-[56px]">
              Build your{' '}
              <span className="bg-gradient-to-r from-fuchsia-400 to-violet-400 bg-clip-text text-transparent">
                AI workforce
              </span>{' '}
              inside clicsHQ
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/60 sm:text-base">
              Chat with AI, deploy specialised AI agents, and ask AI in any doc. clicsHQ AI turns
              plans into action.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <CTAButton variant="accent" href="/signup">Get Started</CTAButton>
              <CTAButton
                href="/demo"
                className="border border-white/20 bg-white/5 text-white hover:bg-white/10"
              >
                Watch demo
              </CTAButton>
            </div>
          </div>
          <AiChatMockup />
        </div>
      </section>

      <TrustLogoStrip />

      {/* One AI. Three ways to work. */}
      <section className="container-app py-16 sm:py-20">
        <SectionHeader
          title={
            <>
              One AI. <Highlight color="magenta">Three ways</Highlight> to work.
            </>
          }
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
        <AiAgentGrid agents={AGENTS} />
      </section>

      {/* Turn work into action automatically */}
      <section className="container-app py-12 sm:py-16">
        <FeatureSplitRow
          eyebrow="Automatic"
          title="Turn work into action automatically"
          body="When a meeting ends, clicsHQ AI summarizes the discussion and turns decisions into tasks with owners and due dates — no manual entry."
          visual={<WorkflowCanvasMockup />}
        />
      </section>

      {/* Understand documents without reading everything */}
      <section className="container-app py-12 sm:py-16">
        <FeatureSplitRow
          eyebrow="In docs"
          title="Understand documents without reading everything"
          body="Ask AI to summarize long docs, extract decisions, or answer a question — grounded in your real workspace content, with links back to the source."
          visual={<DocsEditorMockup />}
          reverse
        />
      </section>

      {/* Secure AI for your workspace */}
      <section className="container-app py-16 sm:py-20">
        <SectionHeader title="Secure AI for your workspace" className="mb-10" />
        <DarkFeatureTileGrid
          columns={4}
          tiles={[
            { chipLabel: 'Encrypted',   chipColor: 'violet', title: 'Encrypted in transit',     body: 'TLS everywhere. SOC 2 Type II.' },
            { chipLabel: 'No training', chipColor: 'pink',   title: 'Never trains on your data', body: 'Your data is never used to train shared models.' },
            { chipLabel: 'Permissions', chipColor: 'amber',  title: 'Respects permissions',      body: 'AI only sees what each user can already access.' },
            { chipLabel: 'Audit',       chipColor: 'sky',    title: 'Full audit log',            body: 'Every AI invocation is logged for admins.' },
          ]}
        />
      </section>

      <CrossProductGrid
        title={
          <>
            AI is just the <Highlight color="magenta">beginning</Highlight>
          </>
        }
      />

      <FAQAccordion title="AI Assists FAQs" items={FAQS} />

      <FinalCTAMountain
        title="Stop managing busywork. Start finishing it."
        subtitle="Let clicsHQ AI plan, summarize, and act — so your team ships the work that matters."
      />

      <Footer />
    </main>
  )
}
