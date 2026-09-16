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
        {/* ── Eyebrow ── */}
        <p className="font-body text-[11px] tracking-[3px] uppercase text-[var(--color-text-light)] mb-5">
          {officeContent.eyebrow}
        </p>

        {/* ── Heading ── */}
        <h2
          id="office-heading"
          className="font-display text-[36px] md:text-[44px] lg:text-[52px] leading-[1.1] text-[var(--color-text)] mb-6"
        >
          {officeContent.heading}{" "}
          <span className="text-script-accent text-[42px] md:text-[50px] lg:text-[58px]">
            {officeContent.headingAccent}
          </span>
        </h2>

        {/* ── Short poetic copy ── */}
        <p className="font-body text-[15px] md:text-[16px] leading-[1.8] text-[var(--color-text-light)] max-w-[420px] mb-12 lg:mb-16">
          Therapy is a place to slow down,
          <br />
          and the environment matters too.
        </p>

        {/* ═══════════════════════════════════════════════
            Diagonal stagger composition:
            Row 1 — Large image, top-left  (~62%)
            Row 2 — Small image + details, bottom-right (~42%)
            ═══════════════════════════════════════════════ */}

        {/* Large image + supporting copy — side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
          {/* Image — left */}
          <div className="lg:col-span-7 relative aspect-[4/3] overflow-hidden group">
            <Image
              src={officeContent.images.main}
              alt="Bright, sunlit interior of Dr. Maya Reynolds' Santa Monica therapy office — comfortable grey sofa, armchair, exposed brick walls, high ceilings, and sheer curtains filtering natural light"
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              sizes="(max-width: 1024px) 100vw, 58vw"
            />
          </div>

          {/* Copy — right, vertically centered */}
          <div className="lg:col-span-5 flex flex-col justify-end pb-2">
            <p className="font-body text-[15px] leading-[1.8] text-[var(--color-text-light)] mb-5">
              {officeContent.description}
            </p>
            <p className="font-body text-[14px] leading-[1.8] text-[var(--color-text-light)]">
              {officeContent.secondaryDescription}
            </p>
          </div>
        </div>

        {/* Small image + details block — right-aligned */}
        <div className="mt-4 lg:mt-8 lg:w-[42%] lg:ml-auto">
          {/* Secondary image */}
          <div className="relative aspect-[4/3] overflow-hidden group">
            <Image
              src={officeContent.images.secondary}
              alt="Another perspective of the therapy space — cozy seating with leather chair, grey sofa, curated bookshelves, indoor olive tree, and a calming ocean print"
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              sizes="(max-width: 1024px) 100vw, 42vw"
            />
          </div>

          {/* Location details — directly beneath small image */}
          <div className="mt-8">
            <p className="font-body text-[11px] tracking-[2.5px] uppercase text-[var(--color-accent-warm)] mb-3">
              {officeContent.inPerson.label}
            </p>
            <p className="font-body text-[15px] leading-[1.6] text-[var(--color-text)] mb-1">
              {officeContent.inPerson.location}
            </p>
            <p className="font-body text-[13px] leading-[1.6] text-[var(--color-text-light)]">
              {officeContent.inPerson.address}
            </p>
            <p className="font-body text-[13px] leading-[1.6] text-[var(--color-text-light)] mb-6">
              {officeContent.inPerson.cityState}
            </p>

            {/* CTA */}
            <Link href={officeContent.cta.href} className="link-underline">
              {officeContent.cta.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
