import Image from "next/image";
import Link from "next/link";

export default function OurOffice() {
  return (
    <section
      className="border-editorial"
      aria-label="Our Office in Santa Monica"
    >
      {/* Top Row: Heading + Copy */}
      <div className="section-padding pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left: Heading */}
          <div>
            <p className="font-body text-[11px] tracking-[3px] uppercase text-[var(--color-text-light)] mb-5">
              IN-PERSON &amp; TELEHEALTH
            </p>
            <h2 className="font-display text-[42px] md:text-[50px] lg:text-[60px] leading-[1.1] text-[var(--color-text)]">
              A calm space for{" "}
              <span className="text-script-accent text-[48px] md:text-[56px] lg:text-[66px]">
                healing
              </span>
            </h2>
          </div>

          {/* Right: Copy */}
          <div className="flex items-end pb-2">
            <p className="font-body text-[15px] leading-[1.8] text-[var(--color-text-light)] max-w-[480px]">
              My Santa Monica office is a quiet, private space designed to feel
              calm and grounding. With natural light, exposed brick, comfortable
              seating, and a warm aesthetic, it's a place where you can slow
              down, breathe, and focus on yourself. I also offer secure
              telehealth sessions for clients located anywhere in California—whatever
              works best for you.
            </p>
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="section-padding pt-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Large office image — seating area with sofa and armchair */}
          <div className="md:col-span-7 relative aspect-[4/3] overflow-hidden">
            <Image
              src="/dr_maya_reynolds/office1.jpeg"
              alt="Dr. Maya Reynolds' therapy office — a sunlit room with a comfortable grey sofa, armchair, exposed brick walls, high ceilings, and sheer curtains"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 58vw"
            />
          </div>

          {/* Right column: office view 2 + therapist portrait */}
          <div className="md:col-span-5 grid grid-rows-2 gap-4">
            {/* Second office view — sofa, bookshelf, ocean art */}
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/dr_maya_reynolds/office2.jpeg"
                alt="Alternative view of the therapy space — a cozy seating arrangement with bookshelves, indoor plant, and an ocean print on the wall"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 42vw"
              />
            </div>

            {/* Therapist portrait */}
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/dr_maya_reynolds/Dr. Maya Reynolds.png"
                alt="Dr. Maya Reynolds, PsyD — Licensed Clinical Psychologist in Santa Monica, California"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 42vw"
              />
            </div>
          </div>
        </div>

        {/* Detail Pills */}
        <div className="flex flex-wrap gap-4 mt-10">
          <span className="inline-flex items-center gap-2 px-5 py-3 border border-[var(--color-border)] rounded-full font-body text-[11px] tracking-[2px] uppercase text-[var(--color-text-light)]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            Santa Monica, CA
          </span>
          <span className="inline-flex items-center gap-2 px-5 py-3 border border-[var(--color-border)] rounded-full font-body text-[11px] tracking-[2px] uppercase text-[var(--color-text-light)]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
              <line x1="8" y1="21" x2="16" y2="21"></line>
              <line x1="12" y1="17" x2="12" y2="21"></line>
            </svg>
            Telehealth across California
          </span>
          <span className="inline-flex items-center gap-2 px-5 py-3 border border-[var(--color-border)] rounded-full font-body text-[11px] tracking-[2px] uppercase text-[var(--color-text-light)]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
            Private &amp; confidential
          </span>
          <span className="inline-flex items-center gap-2 px-5 py-3 border border-[var(--color-border)] rounded-full font-body text-[11px] tracking-[2px] uppercase text-[var(--color-text-light)]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            Flexible scheduling
          </span>
        </div>
      </div>
    </section>
  );
}
