import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'

/**
 * Full-width gradient banner — purple→teal wash, copy + pill CTA on the left,
 * a framed illustration card on the right (matches the Figma nonprofits "Keep
 * programs, people, and priorities connected" banner).
 */
export function SolutionGradientBanner({
  eyebrow,
  title,
  body,
  ctaLabel,
  ctaHref = '/signup',
  image,
  imageAlt = '',
}: {
  eyebrow?: string
  title: React.ReactNode
  body?: string
  ctaLabel?: string
  ctaHref?: string
  image?: string
  imageAlt?: string
}) {
  return (
    <section className="container-app py-12 sm:py-16">
      <div className="relative overflow-hidden rounded-3xl bg-[linear-gradient(108deg,#181527_0%,#4A2178_32%,#7C3AED_52%,#1F8A6E_82%,#10A37F_100%)] p-8 sm:p-12 lg:p-14">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          {/* Left — copy */}
          <div className="text-white">
            {eyebrow && <p className="text-[15px] font-normal text-white/70">{eyebrow}</p>}
            <h2 className="mt-3 text-balance text-[30px] font-medium leading-[1.12] tracking-normal sm:text-[38px] lg:text-[42px]">
              {title}
            </h2>
            {body && <p className="mt-5 max-w-md text-[15px] leading-relaxed text-white/65">{body}</p>}
            {ctaLabel && (
              <Link
                href={ctaHref}
                className="mt-7 inline-flex h-12 items-center rounded-full bg-white px-6 text-[15px] font-semibold text-ink transition-colors hover:bg-white/90"
              >
                {ctaLabel}
              </Link>
            )}
          </div>

          {/* Right — framed illustration */}
          {image && (
            <div className="rounded-2xl bg-white p-6 shadow-xl">
              <Image
                src={image}
                alt={imageAlt}
                width={520}
                height={300}
                className="mx-auto h-auto w-full max-w-sm"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
