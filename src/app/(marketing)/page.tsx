import { Hero } from '@/components/marketing/Hero'
import { TrustAndTools } from '@/components/marketing/TrustAndTools'
import { ExploreTabs } from '@/components/marketing/ExploreTabs'
import { Solutions } from '@/components/marketing/Solutions'
import { HowItWorks } from '@/components/marketing/HowItWorks'
import { AISection } from '@/components/marketing/AISection'
import { WhyClicsHQ } from '@/components/marketing/WhyClicsHQ'
import { FinalCTA } from '@/components/marketing/FinalCTA'
import { Footer } from '@/components/marketing/Footer'

export default function HomePage() {
  return (
    <>
      <main>
        <Hero />
        <TrustAndTools />
        <ExploreTabs />
        <Solutions />
        <HowItWorks />
        <AISection />
        <WhyClicsHQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
