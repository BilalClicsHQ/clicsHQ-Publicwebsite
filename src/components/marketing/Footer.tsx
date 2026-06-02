import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'

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
    { label: 'Community',      href: '/resources/community' },
    { label: 'Knowledge Base', href: '/resources/help-center' },
    { label: 'Academy',        href: '/resources/guides' },
    { label: 'Support',        href: '/support' },
  ],
}

const SOCIALS = [
  { name: 'Facebook',  src: '/images/footer/social-facebook.svg',  href: 'https://facebook.com' },
  { name: 'Twitter',   src: '/images/footer/social-twitter.svg',   href: 'https://twitter.com' },
  { name: 'Instagram', src: '/images/footer/social-instagram.svg', href: 'https://instagram.com' },
  { name: 'LinkedIn',  src: '/images/footer/social-linkedin.svg',  href: 'https://linkedin.com' },
]

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="container-app py-14 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            {/* clicsHQ logo — inverted with CSS filter for dark footer bg */}
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
                    className="grid h-9 w-9 place-items-center rounded-full bg-white/[0.08] transition-colors hover:bg-white/[0.18]"
                  >
                    <Image
                      src={s.src}
                      alt=""
                      aria-hidden
                      width={18}
                      height={18}
                      className="h-[18px] w-[18px]"
                    />
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
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/60">
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
