import Image from "next/image";
import Link from "next/link";
import { officeContent } from "@/data/pageContent";

export default function OurOffice() {
  return (
    <section
      aria-labelledby="office-heading"
      className="bg-[var(--color-surface)] border-editorial"
    >
      <div className="section-padding">
        {/* ── Desktop: two-column editorial layout ── */}
        {/* ── Mobile: text → images → details → CTA ── */}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* ═══════════════════════════════════════════
              LEFT: Images (≈58% on desktop)
              On mobile: appears AFTER heading/copy
              ═══════════════════════════════════════════ */}
          <div className="lg:col-span-7 order-2 lg:order-1 space-y-4">
            {/* Main office image — wide landscape */}
            <div className="relative aspect-[4/3] overflow-hidden group">
              <Image
                src={officeContent.images.main}
                alt="Bright, sunlit interior of Dr. Maya Reynolds' Santa Monica therapy office with a comfortable grey sofa, armchair, exposed brick walls, high ceilings, and sheer curtains filtering natural light"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                sizes="(max-width: 768px) 100vw, 58vw"
              />
            </div>

            {/* Secondary office image — wider crop for variety */}
            <div className="relative aspect-[16/9] overflow-hidden group">
              <Image
                src={officeContent.images.secondary}
                alt="Another view of the therapy space showing a cozy seating arrangement with leather chair, grey sofa, bookshelves with curated reading, indoor olive tree, and a calming ocean print on the wall"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                sizes="(max-width: 768px) 100vw, 58vw"
              />
            </div>
          </div>

          {/* ═══════════════════════════════════════════
              RIGHT: Content (≈42% on desktop)
              On mobile: heading/copy appear FIRST
              ═══════════════════════════════════════════ */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex flex-col justify-center lg:pl-4">
            {/* Eyebrow */}
            <p className="font-body text-[11px] tracking-[3px] uppercase text-[var(--color-text-light)] mb-5">
              {officeContent.eyebrow}
            </p>

            {/* Heading */}
            <h2
              id="office-heading"
              className="font-display text-[36px] md:text-[44px] lg:text-[52px] leading-[1.1] text-[var(--color-text)] mb-8"
            >
              {officeContent.heading}{" "}
              <span className="text-script-accent text-[42px] md:text-[50px] lg:text-[58px]">
                {officeContent.headingAccent}
              </span>
            </h2>

            {/* Primary copy */}
            <p className="font-body text-[15px] leading-[1.8] text-[var(--color-text-light)] mb-5">
              {officeContent.description}
            </p>

            {/* Secondary copy */}
            <p className="font-body text-[15px] leading-[1.8] text-[var(--color-text-light)] mb-10">
              {officeContent.secondaryDescription}
            </p>

            {/* ── Desktop-only: location details + CTA ── */}
            <div className="hidden lg:block">
              <OfficeDetails />
            </div>
          </div>
        </div>

        {/* ── Mobile-only: location details + CTA (after images) ── */}
        <div className="lg:hidden mt-10">
          <OfficeDetails />
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Extracted sub-component for location details
   Rendered in two places (desktop / mobile)
   but only one is visible at a time via CSS
   ───────────────────────────────────────────── */
function OfficeDetails() {
  return (
    <>
      {/* Location detail block */}
      <div className="grid grid-cols-2 gap-8 mb-10 border-t border-[var(--color-border)] pt-8">
        {/* In-person */}
        <div>
          <p className="font-body text-[10px] tracking-[2.5px] uppercase text-[var(--color-accent-warm)] mb-3">
            {officeContent.inPerson.label}
          </p>
          <p className="font-body text-[14px] leading-[1.6] text-[var(--color-text)] mb-1">
            {officeContent.inPerson.location}
          </p>
          <p className="font-body text-[13px] leading-[1.6] text-[var(--color-text-light)]">
            {officeContent.inPerson.address}
          </p>
          <p className="font-body text-[13px] leading-[1.6] text-[var(--color-text-light)]">
            {officeContent.inPerson.cityState}
          </p>
        </div>

        {/* Telehealth */}
        <div>
          <p className="font-body text-[10px] tracking-[2.5px] uppercase text-[var(--color-accent-warm)] mb-3">
            {officeContent.telehealth.label}
          </p>
          <p className="font-body text-[14px] leading-[1.6] text-[var(--color-text)]">
            {officeContent.telehealth.detail}
          </p>
          <p className="font-body text-[13px] leading-[1.6] text-[var(--color-text-light)]">
            {officeContent.telehealth.availability}
          </p>
        </div>
      </div>

      {/* Subtle CTA */}
      <Link href={officeContent.cta.href} className="link-underline">
        {officeContent.cta.label}
      </Link>
    </>
  );
}
