import type { Metadata } from 'next'
import React from 'react'
import '../globals.css'
import { Navbar } from '@/components/marketing/Navbar'

export const metadata: Metadata = {
  title: { default: 'clicsHQ — Manage productivity', template: '%s | clicsHQ' },
  description:
    'clicsHQ helps teams organize tasks, manage deadlines, track progress, and collaborate in one centralized workspace.',
}

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white text-ink antialiased" suppressHydrationWarning>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
