import type { Metadata } from 'next'
import React from 'react'
import '../globals.css'
import { Navbar } from '@/components/marketing/Navbar'
import { InjectScripts } from '@/components/marketing/InjectScripts'

export const metadata: Metadata = {
  title: { default: 'clicsHQ — Manage productivity', template: '%s | clicsHQ' },
  description:
    'clicsHQ helps teams organize tasks, manage deadlines, track progress, and collaborate in one centralized workspace.',
}

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Analytics / tracking pixels from SiteSettings.headScripts */}
        <InjectScripts placement="head" />
      </head>
      <body className="bg-white text-ink antialiased" suppressHydrationWarning>
        <InjectScripts placement="bodyStart" />
        <Navbar />
        {children}
        <InjectScripts placement="bodyEnd" />
      </body>
    </html>
  )
}
