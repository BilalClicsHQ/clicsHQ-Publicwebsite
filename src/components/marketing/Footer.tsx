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
    <footer className="relative z-10 -mt-10 px-3 pb-4 sm:-mt-12 sm:px-4 sm:pb-6 lg:px-6 lg:pb-8">
      <div className="rounded-[2rem] bg-ink px-6 py-12 text-white sm:px-10 sm:py-14 lg:px-20 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            {/* clicsHQ logo — `invert` (not brightness-0) flips the monochrome
                artwork so the text reads white while the swirl keeps its gradient. */}
            <Image
              src="/images/logo/ClicsHQ_logo.svg"
              alt="clicsHQ"
              width={140}
              height={48}
              className="h-12 w-auto invert"
            />
            <p className="mt-5 text-[16px] leading-relaxed text-white/70">
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
                    className="grid h-11 w-11 place-items-center rounded-full bg-white/[0.08] transition-colors hover:bg-white/[0.18]"
                  >
                    <Image
                      src={s.src}
                      alt=""
                      aria-hidden
                      width={20}
                      height={20}
                      className="h-5 w-5"
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
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-white/60">
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
      <p className="text-[18px] font-bold text-white">{title}</p>
      <ul className="mt-5 space-y-3">
        {items.map((it) => (
          <li key={it.href}>
            <Link href={it.href} className="text-[16px] text-white/70 transition-colors hover:text-white">
              {it.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
