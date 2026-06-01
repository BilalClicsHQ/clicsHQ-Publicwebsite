import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const FacebookIcon = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M13.5 21.5v-8h2.7l.4-3.2h-3.1V8.2c0-.9.3-1.6 1.7-1.6h1.5V3.7c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 3.9v2.7H7.9v3.2h2.6v8h3z"/>
  </svg>
)
const TwitterIcon = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M18.9 5h2.6l-5.7 6.5L22.5 20h-5.3l-4.1-5.4L8.3 20H5.7l6.1-7L5.1 5h5.4l3.7 4.9L18.9 5zm-.9 13.4h1.4L9.4 6.5H7.9l10.1 11.9z"/>
  </svg>
)
const InstagramIcon = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="3.8" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
  </svg>
)
const LinkedinIcon = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v15H0V8zm7.5 0H12v2.05h.07c.65-1.18 2.25-2.42 4.63-2.42 4.95 0 5.87 3.26 5.87 7.5V23h-5v-6.5c0-1.55-.03-3.55-2.16-3.55-2.17 0-2.5 1.7-2.5 3.45V23h-5V8z"/>
  </svg>
)

const LINKS = {
  company: [
    { label: 'About',   href: '/about' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Jobs',    href: '/jobs' },
    { label: 'Blog',    href: '/resources/blog' },
  ],
  product: [
    { label: 'Sales Software',     href: '/product/sales' },
    { label: 'Marketplace',        href: '/product/marketplace' },
    { label: 'Terms & Conditions', href: '/legal/terms' },
    { label: 'Privacy Policy',     href: '/legal/privacy' },
  ],
  help: [
    { label: 'Community',     href: '/resources/community' },
    { label: 'Knowledge Base', href: '/resources/help-center' },
    { label: 'Academy',       href: '/resources/guides' },
    { label: 'Support',       href: '/support' },
  ],
}

const SOCIALS = [
  { name: 'Facebook',  icon: FacebookIcon,  href: 'https://facebook.com' },
  { name: 'Twitter',   icon: TwitterIcon,   href: 'https://twitter.com' },
  { name: 'Instagram', icon: InstagramIcon, href: 'https://instagram.com' },
  { name: 'LinkedIn',  icon: LinkedinIcon,  href: 'https://linkedin.com' },
]

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="container-app py-14 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            {/* Inverted logo for dark background */}
            <Image
              src="/images/logo/ClicsHQ_logo.svg"
              alt="clicsHQ"
              width={140}
              height={48}
              className="h-10 w-auto brightness-0 invert"
            />
            <p className="mt-5 text-sm leading-relaxed text-white/70">
              Work Management Platform<br />
              For Result-Driven Teams
            </p>
            <ul className="mt-6 flex items-center gap-3">
              {SOCIALS.map((s) => (
                <li key={s.name}>
                  <a
                    href={s.href}
                    aria-label={s.name}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid h-9 w-9 place-items-center rounded-full bg-white/[0.08] text-white/80 transition-colors hover:bg-white/[0.15] hover:text-white"
                  >
                    <s.icon className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <FooterCol title="Company" items={LINKS.company} />
          {/* Product */}
          <FooterCol title="Product" items={LINKS.product} />
          {/* Help center */}
          <FooterCol title="Help Center" items={LINKS.help} />
        </div>

        {/* Divider + bottom row */}
        <div className="mt-12 border-t border-white/10 pt-6 flex flex-wrap items-center justify-between gap-4 text-xs text-white/60">
          <p>© Copyright {new Date().getFullYear()}, All Rights Reserved</p>
          <ul className="flex flex-wrap items-center gap-6">
            <li><Link href="/legal/privacy" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link href="/legal/terms" className="hover:text-white">Terms &amp; Conditions</Link></li>
            <li><Link href="/support" className="hover:text-white">Support</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

function FooterCol({ title, items }: { title: string; items: { label: string; href: string }[] }) {
  return (
    <div>
      <p className="text-sm font-semibold text-white">{title}</p>
      <ul className="mt-5 space-y-3">
        {items.map((it) => (
          <li key={it.href}>
            <Link href={it.href} className="text-sm text-white/70 transition-colors hover:text-white">
              {it.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
