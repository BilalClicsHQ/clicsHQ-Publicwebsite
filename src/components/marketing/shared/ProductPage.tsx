import * as React from 'react'
import Image from 'next/image'
import { ProductHero } from './ProductHero'
import { TrustLogoStrip } from './TrustLogoStrip'
import { SectionHeader } from './SectionHeader'
import { FeatureSplitRow } from './FeatureSplitRow'
import { DarkFeatureTileGrid, type DarkTile } from './DarkFeatureTileGrid'
import { FeatureShowcase } from './FeatureShowcase'
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
    eyebrowUppercase?: boolean
    title: React.ReactNode
    subtitle?: string
    primaryLabel?: string
    secondaryLabel?: string
    mockupSrc?: string
    mockupAlt?: string
    /** In-code hero mockup — takes precedence over `mockupSrc`. */
    mockup?: React.ReactNode
    background?: 'light' | 'soft-pink' | 'soft-violet'
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
    /** In-code mockup — takes precedence over `imageSrc`. */
    visual?: React.ReactNode
    reverse?: boolean
  }>
  darkTilesSection?: {
    title: React.ReactNode
    subtitle?: string
    tiles: DarkTile[]
    columns?: 2 | 4
    /** 'grid' (default) = even tile grid; 'showcase' = center board framed by tiles. */
    layout?: 'grid' | 'showcase'
    /** Center screenshot for the 'showcase' layout. */
    image?: string
    imageAlt?: string
  }
  crossGridAccentColor?: HighlightColor
  /** Override the cross-product grid headline (defaults to the Kanban copy). */
  crossGridTitle?: React.ReactNode
  crossGridEyebrow?: string
  crossGridSubtitle?: string
  faqs?: FAQItem[]
  faqTitle?: string
  faqToggle?: 'chevron' | 'plusminus'
  /** Override the final mountain-CTA copy/layout per product. */
  finalCTA?: {
    title?: string
    subtitle?: string
    align?: 'left' | 'center'
    /** Pass '' to render a single primary CTA. */
    secondaryLabel?: string
  }
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
        eyebrowUppercase={config.hero.eyebrowUppercase}
        title={config.hero.title}
        subtitle={config.hero.subtitle}
        primaryLabel={config.hero.primaryLabel}
        secondaryLabel={config.hero.secondaryLabel}
        mockupSrc={config.hero.mockupSrc}
        mockupAlt={config.hero.mockupAlt}
        mockup={config.hero.mockup}
        background={config.hero.background}
      />

      <TrustLogoStrip />

      {config.intro && (
        <section className="container-app py-12 sm:py-16">
          <SectionHeader
            eyebrow={config.intro.eyebrow}
            title={config.intro.title}
            subtitle={config.intro.subtitle}
          />
          {config.intro.image && (
            <div className="mx-auto mt-10 max-w-5xl sm:mt-12">
              <Image
                src={config.intro.image}
                alt={config.intro.imageAlt ?? ''}
                width={1200}
                height={780}
                className="h-auto w-full rounded-2xl drop-shadow-2xl"
              />
            </div>
          )}
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
            className="mb-10 sm:mb-14"
          />
          {config.darkTilesSection.layout === 'showcase' && config.darkTilesSection.image ? (
            <FeatureShowcase
              image={config.darkTilesSection.image}
              imageAlt={config.darkTilesSection.imageAlt}
              tiles={config.darkTilesSection.tiles.map((t) => ({ title: t.title, body: t.body ?? '' }))}
            />
          ) : (
            <DarkFeatureTileGrid
              tiles={config.darkTilesSection.tiles}
              columns={config.darkTilesSection.columns}
            />
          )}
        </section>
      )}

      <CrossProductGrid
        eyebrow={config.crossGridEyebrow}
        subtitle={config.crossGridSubtitle}
        title={
          config.crossGridTitle ?? (
            <>
              Board view is just the <Highlight color={config.crossGridAccentColor ?? 'blue'}>beginning</Highlight>
            </>
          )
        }
      />

      {config.faqs && config.faqs.length > 0 && (
        <FAQAccordion
          title={config.faqTitle ?? 'Frequently Asked Questions'}
          items={config.faqs}
          toggle={config.faqToggle}
        />
      )}

      <FinalCTAMountain
        title={config.finalCTA?.title}
        subtitle={config.finalCTA?.subtitle}
        align={config.finalCTA?.align}
        secondaryLabel={config.finalCTA?.secondaryLabel}
      />

      <Footer />
    </>
  )
}
