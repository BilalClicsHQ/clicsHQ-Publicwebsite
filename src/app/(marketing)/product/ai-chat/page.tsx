import type { Metadata } from 'next'
import { ProductPage, type ProductPageConfig } from '@/components/marketing/shared/ProductPage'
import { Highlight } from '@/components/marketing/shared/Highlight'

export const metadata: Metadata = { title: 'AI Chat' }

const config: ProductPageConfig = {
  hero: {
    eyebrow: 'AI Chat',
    eyebrowColor: 'text-fuchsia-600',
    title: (
      <>
        Chat with your <Highlight color="magenta">workspace</Highlight>
      </>
    ),
    subtitle: 'Ask anything about your projects, tasks, and docs. Get cited answers backed by real workspace context.',
    primaryLabel: 'Get Started',
    mockupSrc: '/images/dashboards/ClicshqPage.svg',
    background: 'soft-pink',
  },
  crossGridAccentColor: 'magenta',
  faqs: [
    { q: 'How is my data protected?', a: 'AI Chat never trains on your data and only sees what each user has permission to view.' },
    { q: 'Can I share chats with my team?', a: 'Yes — chats can be published to a workspace channel or referenced inline in docs.' },
  ],
}

export default function AIChatPage() {
  return <ProductPage config={config} />
}
