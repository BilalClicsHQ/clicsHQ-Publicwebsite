import * as React from 'react'
import Image from 'next/image'
import { LayoutDashboard, LayoutGrid, List, Calendar, FileBarChart } from 'lucide-react'
import { ProductHero } from './ProductHero'
import { BenefitTrio, type Benefit } from './BenefitTrio'
import { SectionHeader } from './SectionHeader'
import { FeatureSplitRow } from './FeatureSplitRow'
import { FeatureShowcase, type ShowcaseTile } from './FeatureShowcase'
import { WorkflowCanvasMockup } from './ProductMockups'
import { FinalCTAMountain } from './FinalCTAMountain'
import { SolutionDarkBanner, type DarkBannerTile } from './SolutionDarkBanner'
import { SolutionGradientBanner } from './SolutionGradientBanner'
import { WorkflowCardRow, type WorkflowCard } from './WorkflowCardRow'
import { Footer } from '../Footer'
import type { HighlightColor } from './Highlight'

export interface SolutionPageConfig {
  hero: {
    eyebrow?: string
    eyebrowColor?: string
    eyebrowUppercase?: boolean
    title: React.ReactNode
    subtitle?: string
    primaryLabel?: string
    secondaryLabel?: string
    mockupSrc?: string
    background?: 'light' | 'soft-pink' | 'soft-violet'
  }
  /**
   * Full-width purple→teal gradient banner with a framed illustration — renders
   * immediately after the hero (matches the nonprofits cross-sell banner).
   */
  gradientBanner?: {
    eyebrow?: string
    title: React.ReactNode
    body?: string
    ctaLabel?: string
    ctaHref?: string
    image?: string
    imageAlt?: string
  }
  benefits?: {
    eyebrow?: string
    title: React.ReactNode
    subtitle?: string
    items: Benefit[]
    columns?: 3 | 4
  }
  /**
   * Full-width black cross-sell banner — eyebrow + headline + body on the left,
   * a cluster of bordered feature tiles on the right. Renders after `benefits`.
   */
  darkBanner?: {
    eyebrow?: string
    title: React.ReactNode
    body?: string
    tiles: DarkBannerTile[]
  }
  intro?: {
    eyebrow?: string
    title: React.ReactNode
    subtitle?: string
    /** Optional large product screenshot centered below the intro headline. */
    image?: string
    imageAlt?: string
  }
  splitRows?: Array<{
    eyebrow?: string
    title: React.ReactNode
    body?: string
    bullets?: string[]
    imageSrc?: string
    reverse?: boolean
  }>
  /**
   * "Simple workflows for <X> teams" — centered header + a row of light recipe
   * cards (title + internal WHEN/THEN step stack). Renders after `splitRows`.
   */
  workflowCards?: {
    eyebrow?: string
    title: React.ReactNode
    subtitle?: string
    cards: WorkflowCard[]
    columns?: 2 | 3
  }
  /** "Meet your AI <X> assistant" — centered header + 4 agent benefit cards. */
  aiAssistant?: {
    eyebrow?: string
    title: React.ReactNode
    subtitle?: string
    items: Benefit[]
  }
  /**
   * "Built for the work <X> teams manage every day" — centered header + a
   * central product screenshot framed by four dark corner cards.
   * Expects exactly four tiles: [topLeft, topRight, bottomLeft, bottomRight].
   */
  useCases?: {
    eyebrow?: string
    title: React.ReactNode
    subtitle?: string
    image: string
    imageAlt?: string
    tiles: ShowcaseTile[]
  }
  /**
   * "Automate <X> handoffs" — a split row with the in-code WHEN/THEN workflow
   * builder mockup on one side and copy on the other.
   */
  workflowAutomation?: {
    eyebrow?: string
    title: React.ReactNode
    body?: string
    bullets?: string[]
    /** Visual on the left, copy on the right (matches the Figma). Default true. */
    reverse?: boolean
    /** Custom mockup. Defaults to the generic WHEN/THEN canvas. */
    visual?: React.ReactNode
  }
  /** "Organize <X> your way" — centered header + a row of view-tab pills. */
  spaces?: {
    eyebrow?: string
    title: React.ReactNode
    subtitle?: string
    tabs: string[]
  }
  /** "Connect your <X> stack" — centered header + a row of partner logos. */
  integrations?: {
    eyebrow?: string
    title: React.ReactNode
    subtitle?: string
    logos: { src: string; alt: string }[]
  }
  finalCTA?: {
    title?: string
    subtitle?: string
    primaryLabel?: string
    secondaryLabel?: string
  }
  /** Background-color accent on the highlighted word in the cross grid section */
  accentColor?: HighlightColor
}

/** Icon for each known "Spaces" view tab (matched by label). */
const SPACE_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Overview: LayoutDashboard,
  List: List,
  Kanban: LayoutGrid,
  Calendar: Calendar,
  Gantt: FileBarChart,
}

/**
 * SolutionPage composer — Hero → Benefit trio → Intro → Splits → AI assistant →
 * Use cases → Workflow automation → Integrations → Spaces → FinalCTA → Footer.
 */
export function SolutionPage({ config }: { config: SolutionPageConfig }) {
  return (
    <>
      <ProductHero
        eyebrow={config.hero.eyebrow}
        eyebrowColor={config.hero.eyebrowColor}
        eyebrowUppercase={config.hero.eyebrowUppercase}
        title={config.hero.title}
        subtitle={config.hero.subtitle}
        primaryLabel={config.hero.primaryLabel}
        secondaryLabel={config.hero.secondaryLabel}
        mockupSrc={config.hero.mockupSrc}
        background={config.hero.background}
      />

      {config.gradientBanner && (
        <SolutionGradientBanner
          eyebrow={config.gradientBanner.eyebrow}
          title={config.gradientBanner.title}
          body={config.gradientBanner.body}
          ctaLabel={config.gradientBanner.ctaLabel}
          ctaHref={config.gradientBanner.ctaHref}
          image={config.gradientBanner.image}
          imageAlt={config.gradientBanner.imageAlt}
        />
      )}

      {config.benefits && (
        <section className="container-app py-16 sm:py-20">
          <SectionHeader
            eyebrow={config.benefits.eyebrow}
            title={config.benefits.title}
            subtitle={config.benefits.subtitle}
            className="mb-10"
          />
          <BenefitTrio items={config.benefits.items} columns={config.benefits.columns} />
        </section>
      )}

      {config.darkBanner && (
        <SolutionDarkBanner
          eyebrow={config.darkBanner.eyebrow}
          title={config.darkBanner.title}
          body={config.darkBanner.body}
          tiles={config.darkBanner.tiles}
        />
      )}

      {config.intro && (
        <section className="container-app py-12 sm:py-16">
          <SectionHeader
            eyebrow={config.intro.eyebrow}
            title={config.intro.title}
            subtitle={config.intro.subtitle}
            size={config.intro.image ? 'lg' : 'default'}
          />
          {config.intro.image && (
            <div className="mx-auto mt-10 max-w-5xl sm:mt-12">
              <Image
                src={config.intro.image}
                alt={config.intro.imageAlt ?? ''}
                width={1200}
                height={760}
                className="h-auto w-full rounded-2xl shadow-2xl ring-1 ring-gray-200/70"
              />
            </div>
          )}
        </section>
      )}

      {config.splitRows && config.splitRows.length > 0 && (
        <section className="container-app space-y-20 py-16 sm:py-20">
          {config.splitRows.map((row, i) => (
            <FeatureSplitRow key={i} {...row} />
          ))}
        </section>
      )}

      {config.workflowCards && (
        <section className="container-app py-16 sm:py-20">
          <SectionHeader
            eyebrow={config.workflowCards.eyebrow}
            title={config.workflowCards.title}
            subtitle={config.workflowCards.subtitle}
            size="lg"
            className="mb-10 sm:mb-12"
          />
          <WorkflowCardRow cards={config.workflowCards.cards} columns={config.workflowCards.columns} />
        </section>
      )}

      {config.aiAssistant && (
        <section className="relative overflow-hidden py-16 sm:py-20">
          {/* Soft violet glow behind the AI section (matches the Figma). */}
          <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-ai-glow" />
          <div className="container-app relative">
            <SectionHeader
              eyebrow={config.aiAssistant.eyebrow}
              title={config.aiAssistant.title}
              subtitle={config.aiAssistant.subtitle}
              size="lg"
              className="mb-10"
            />
            <BenefitTrio items={config.aiAssistant.items} columns={4} />
          </div>
        </section>
      )}

      {config.useCases && (
        <section className="container-app py-16 sm:py-20">
          <SectionHeader
            eyebrow={config.useCases.eyebrow}
            title={config.useCases.title}
            subtitle={config.useCases.subtitle}
            size="lg"
            className="mb-12"
          />
          <FeatureShowcase
            image={config.useCases.image}
            imageAlt={config.useCases.imageAlt}
            tiles={config.useCases.tiles}
          />
        </section>
      )}

      {config.workflowAutomation && (
        <section className="container-app py-16 sm:py-20">
          <FeatureSplitRow
            eyebrow={config.workflowAutomation.eyebrow}
            title={config.workflowAutomation.title}
            body={config.workflowAutomation.body}
            bullets={config.workflowAutomation.bullets}
            reverse={config.workflowAutomation.reverse ?? true}
            visual={config.workflowAutomation.visual ?? <WorkflowCanvasMockup />}
          />
        </section>
      )}

      {config.integrations && (
        <section className="container-app py-16 sm:py-20">
          <SectionHeader
            eyebrow={config.integrations.eyebrow}
            title={config.integrations.title}
            subtitle={config.integrations.subtitle}
            className="mb-10"
          />
          <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-x-10 gap-y-6">
            {config.integrations.logos.map((l) => (
              <Image key={l.src} src={l.src} alt={l.alt} width={120} height={48} className="h-9 w-auto" />
            ))}
          </div>
        </section>
      )}

      {config.spaces && (
        <section className="container-app py-16 sm:py-20">
          <SectionHeader
            eyebrow={config.spaces.eyebrow}
            title={config.spaces.title}
            subtitle={config.spaces.subtitle}
            className="mb-8"
          />
          <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-4">
            {config.spaces.tabs.map((t) => {
              const Icon = SPACE_ICONS[t]
              return (
                <span
                  key={t}
                  className="inline-flex items-center gap-2.5 rounded-xl bg-ink px-7 py-3.5 text-[16px] font-medium text-white"
                >
                  {Icon && <Icon className="h-[18px] w-[18px]" />}
                  {t}
                </span>
              )
            })}
          </div>
        </section>
      )}

      <FinalCTAMountain
        title={config.finalCTA?.title}
        subtitle={config.finalCTA?.subtitle}
        primaryLabel={config.finalCTA?.primaryLabel}
        secondaryLabel={config.finalCTA?.secondaryLabel}
      />

      <Footer />
    </>
  )
}
