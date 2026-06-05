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
          <AiChatMockup />
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
