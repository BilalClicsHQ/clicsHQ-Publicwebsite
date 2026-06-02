import type { Metadata } from 'next'
import { ProductPage, type ProductPageConfig } from '@/components/marketing/shared/ProductPage'
import { Highlight } from '@/components/marketing/shared/Highlight'

export const metadata: Metadata = { title: 'Integrations' }

const config: ProductPageConfig = {
  hero: {
    eyebrow: 'Integrations',
    eyebrowColor: 'text-orange-600',
    title: 'Connect with 200+ tools you already use',
    subtitle:
      'Slack, Google Drive, GitHub, Jira, Figma, Outlook, and many more — bring every tool into one workspace.',
    primaryLabel: 'Explore integrations',
    mockupSrc: '/images/dashboards/ClicshqPage.svg',
    background: 'light',
  },
  intro: {
    title: (
      <>
        Your stack, <Highlight color="orange">connected</Highlight>
      </>
    ),
    subtitle:
      'clicsHQ syncs with the tools your team already loves, so context never gets lost between systems.',
  },
  splitRows: [
    {
      eyebrow: 'Sync',
      title: 'Two-way sync where it matters',
      body: 'Push updates from clicsHQ into Slack and Jira. Pull commits from GitHub into your sprint board. No more copy-paste.',
      bullets: ['Two-way sync for Slack, GitHub, Jira', 'Real-time event subscriptions', 'Granular per-integration permissions'],
      imageSrc: '/images/dashboards/ClicshqPage.svg',
    },
    {
      eyebrow: 'Authentication',
      title: 'Single sign-on across every tool',
      body: 'SSO with Google, Microsoft, Okta. SCIM provisioning available on enterprise plans.',
      imageSrc: '/images/dashboards/ClicshqPage.svg',
      reverse: true,
    },
    {
      eyebrow: 'Build your own',
      title: 'A REST + webhooks API for everything else',
      body: 'Build custom integrations with our REST API, webhooks, or use the no-code Workflows builder.',
      imageSrc: '/images/dashboards/ClicshqPage.svg',
    },
  ],
  crossGridAccentColor: 'orange',
  faqTitle: 'Integrations FAQs',
  faqs: [
    { q: 'Is my data sent through clicsHQ servers?',     a: 'Direct API connections are used wherever possible. We document the data flow for every integration.' },
    { q: 'Can I limit integrations per workspace?',       a: 'Yes — admins can enable/disable per integration, per team, or per user.' },
    { q: 'How long does it take to set up Slack/Jira?',   a: 'Most integrations are a 2-click OAuth setup. Slack and Jira typically take under 60 seconds.' },
  ],
}

export default function IntegrationsPage() {
  return <ProductPage config={config} />
}
