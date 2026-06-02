import * as React from 'react'
import { ProductHero } from './ProductHero'
import { TrustLogoStrip } from './TrustLogoStrip'
import { SectionHeader } from './SectionHeader'
import { FeatureSplitRow } from './FeatureSplitRow'
import { DarkFeatureTileGrid, type DarkTile } from './DarkFeatureTileGrid'
import { CrossProductGrid } from './CrossProductGrid'
import { FAQAccordion, type FAQItem } from './FAQAccordion'
import { FinalCTAMountain } from './FinalCTAMountain'
import { Footer } from '../Footer'
import { Highlight } from './Highlight'
import type { HighlightColor } from './Highlight'

export interface ProductPageConfig {
  hero: {
    eyebrow?: string
    eyebrowColor?: string
    title: React.ReactNode
    subtitle?: string
    primaryLabel?: string
    secondaryLabel?: string
    mockupSrc?: string
    mockupAlt?: string
    background?: 'light' | 'soft-pink' | 'soft-violet'
  }
  intro?: {
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
  darkTilesSection?: {
    title: React.ReactNode
    subtitle?: string
    tiles: DarkTile[]
    columns?: 2 | 4
  }
  crossGridAccentColor?: HighlightColor
  faqs?: FAQItem[]
  faqTitle?: string
}

/**
 * Product page composer — every product page is built by passing a config to
 * this component. Renders in fixed order: Hero → Trust → Intro → Splits →
 * DarkTiles → CrossGrid → FAQ → FinalCTA → Footer.
 */
export function ProductPage({ config }: { config: ProductPageConfig }) {
  return (
    <>
      <ProductHero
        eyebrow={config.hero.eyebrow}
        eyebrowColor={config.hero.eyebrowColor}
        title={config.hero.title}
        subtitle={config.hero.subtitle}
        primaryLabel={config.hero.primaryLabel}
        secondaryLabel={config.hero.secondaryLabel}
        mockupSrc={config.hero.mockupSrc}
        mockupAlt={config.hero.mockupAlt}
        background={config.hero.background}
      />

      <TrustLogoStrip />

      {config.intro && (
        <section className="container-app py-12 sm:py-16">
          <SectionHeader title={config.intro.title} subtitle={config.intro.subtitle} />
        </section>
      )}

      {config.splitRows && config.splitRows.length > 0 && (
        <section className="container-app space-y-20 pb-16 sm:pb-20">
          {config.splitRows.map((row, i) => (
            <FeatureSplitRow key={i} {...row} />
          ))}
        </section>
      )}

      {config.darkTilesSection && (
        <section className="container-app py-16 sm:py-20">
          <SectionHeader
            title={config.darkTilesSection.title}
            subtitle={config.darkTilesSection.subtitle}
            className="mb-10"
          />
          <DarkFeatureTileGrid
            tiles={config.darkTilesSection.tiles}
            columns={config.darkTilesSection.columns}
          />
        </section>
      )}

      <CrossProductGrid
        title={
          <>
            Board view is just the <Highlight color={config.crossGridAccentColor ?? 'blue'}>beginning</Highlight>
          </>
        }
      />

      {config.faqs && config.faqs.length > 0 && (
        <FAQAccordion title={config.faqTitle ?? 'Frequently Asked Questions'} items={config.faqs} />
      )}

      <FinalCTAMountain />

      <Footer />
    </>
  )
}
