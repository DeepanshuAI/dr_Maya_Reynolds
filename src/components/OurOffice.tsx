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

        {/* ── Staggered image composition ── */}
        <div className="relative">
          {/* Large image — left-aligned, ~72% width on desktop */}
          <div className="w-full lg:w-[72%] relative aspect-[4/3] overflow-hidden group">
            <Image
              src={officeContent.images.main}
              alt="Bright, sunlit interior of Dr. Maya Reynolds' Santa Monica therapy office — comfortable grey sofa, armchair, exposed brick walls, high ceilings, and sheer curtains filtering natural light"
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              sizes="(max-width: 1024px) 100vw, 72vw"
            />
          </div>

          {/* Small image — right-aligned, offset below, creating editorial stagger */}
          <div className="w-full mt-4 lg:w-[45%] lg:ml-auto lg:-mt-24 relative aspect-[4/3] overflow-hidden group z-10">
            <Image
              src={officeContent.images.secondary}
              alt="Another perspective of the therapy space — cozy seating with leather chair, grey sofa, curated bookshelves, indoor olive tree, and a calming ocean print"
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </div>
        </div>

        {/* ── Bottom row: location left, CTA right ── */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mt-12 lg:mt-16 gap-8">
          {/* Location details */}
          <div>
            <p className="font-body text-[11px] tracking-[2.5px] uppercase text-[var(--color-accent-warm)] mb-3">
              {officeContent.inPerson.label}
            </p>
            <p className="font-body text-[15px] leading-[1.6] text-[var(--color-text)] mb-1">
              {officeContent.inPerson.location}
            </p>
            <p className="font-body text-[13px] leading-[1.6] text-[var(--color-text-light)]">
              {officeContent.inPerson.address}
            </p>
            <p className="font-body text-[13px] leading-[1.6] text-[var(--color-text-light)]">
              {officeContent.inPerson.cityState}
            </p>
          </div>

          {/* CTA */}
          <Link href={officeContent.cta.href} className="link-underline">
            {officeContent.cta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
