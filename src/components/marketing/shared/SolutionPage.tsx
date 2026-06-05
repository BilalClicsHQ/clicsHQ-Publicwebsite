import * as React from 'react'
import Image from 'next/image'
import { ProductHero } from './ProductHero'
import { BenefitTrio, type Benefit } from './BenefitTrio'
import { SectionHeader } from './SectionHeader'
import { FeatureSplitRow } from './FeatureSplitRow'
import { FinalCTAMountain } from './FinalCTAMountain'
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
  benefits?: {
    eyebrow?: string
    title: React.ReactNode
    subtitle?: string
    items: Benefit[]
    columns?: 3 | 4
  }
  intro?: {
    eyebrow?: string
    title: React.ReactNode
    subtitle?: string
  }
  splitRows?: Array<{
    eyebrow?: string
    title: React.ReactNode
    body?: string
    bullets?: string[]
    imageSrc?: string
    reverse?: boolean
  }>
  /** "Meet your AI <X> assistant" — centered header + 4 agent benefit cards. */
  aiAssistant?: {
    eyebrow?: string
    title: React.ReactNode
    subtitle?: string
    items: Benefit[]
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

/**
 * SolutionPage composer — Hero → Benefit trio → Intro → Splits → FinalCTA → Footer.
 * Lighter than ProductPage since solution audits emphasised industry framing
 * rather than feature grids.
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

      {config.intro && (
        <section className="container-app py-8">
          <SectionHeader eyebrow={config.intro.eyebrow} title={config.intro.title} subtitle={config.intro.subtitle} />
        </section>
      )}

      {config.splitRows && config.splitRows.length > 0 && (
        <section className="container-app space-y-20 py-16 sm:py-20">
          {config.splitRows.map((row, i) => (
            <FeatureSplitRow key={i} {...row} />
          ))}
        </section>
      )}

      {config.aiAssistant && (
        <section className="container-app py-16 sm:py-20">
          <SectionHeader
            eyebrow={config.aiAssistant.eyebrow}
            title={config.aiAssistant.title}
            subtitle={config.aiAssistant.subtitle}
            size="lg"
            className="mb-10"
          />
          <BenefitTrio items={config.aiAssistant.items} columns={4} />
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
          <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-3">
            {config.spaces.tabs.map((t) => (
              <span key={t} className="rounded-full bg-ink px-5 py-2.5 text-[15px] font-medium text-white">
                {t}
              </span>
            ))}
          </div>
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
