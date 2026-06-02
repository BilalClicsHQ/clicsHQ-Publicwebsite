import type { Metadata } from 'next'
import { ProductPage, type ProductPageConfig } from '@/components/marketing/shared/ProductPage'
import { Highlight } from '@/components/marketing/shared/Highlight'

export const metadata: Metadata = { title: 'Calendar' }

const config: ProductPageConfig = {
  hero: {
    eyebrow: 'Calendar',
    eyebrowColor: 'text-sky-600',
    title: 'Every deadline, every meeting, one calendar',
    subtitle:
      'See your tasks, sprints, and events in one place. Sync with Google Calendar, Outlook, and Apple Calendar.',
    primaryLabel: 'Get Started',
    mockupSrc: '/images/dashboards/ClicshqPage.svg',
    background: 'light',
  },
  intro: {
    title: (
      <>
        Calendar that <Highlight color="sky">stays in sync</Highlight>
      </>
    ),
    subtitle: 'Two-way sync with the major calendar providers. No more double-booking.',
  },
  splitRows: [
    {
      eyebrow: 'Two-way sync',
      title: 'Google, Outlook, Apple — all connected',
      body: 'Every event is mirrored. Conflicts get flagged automatically. Cancel once, removes everywhere.',
      imageSrc: '/images/dashboards/ClicshqPage.svg',
    },
    {
      eyebrow: 'Team availability',
      title: 'See your team’s real availability',
      body: 'Free/busy across projects, time zones, and integrations. Schedule meetings without back-and-forth.',
      imageSrc: '/images/dashboards/ClicshqPage.svg',
      reverse: true,
    },
  ],
  crossGridAccentColor: 'sky',
  faqs: [
    { q: 'Can I overlay multiple calendars?', a: 'Yes — overlay team calendars, your personal Google, and any shared subscriptions.' },
    { q: 'Are time zones handled correctly?', a: 'Events always show in each viewer’s local time zone with the source time zone shown on hover.' },
  ],
}

export default function CalendarPage() {
  return <ProductPage config={config} />
}
