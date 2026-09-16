import Image from "next/image";
import { valuePropositionContent } from "@/data/pageContent";
import { images } from "@/data/images";

export default function ValueProposition() {
  return (
    <section
      className="border-editorial"
      aria-label="About Dr. Maya Reynolds"
    >
      {/* Heading Row */}
      <div className="section-padding pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div>
            <h2 className="font-display text-[36px] md:text-[44px] lg:text-[52px] leading-[1.15] text-[var(--color-text)]">
              {valuePropositionContent.heading}
            </h2>
          </div>
          <div className="flex items-end">
            {/* Decorative space */}
          </div>
        </div>
      </div>

      {/* Content Row */}
      <div className="section-padding pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left Column */}
          <div>
            <p className="font-body text-[11px] tracking-[2.5px] uppercase leading-[1.8] text-[var(--color-text)] mb-6">
              {valuePropositionContent.col1Subheading}
            </p>
            <p className="font-body text-[15px] leading-[1.8] text-[var(--color-text-light)]">
              {valuePropositionContent.col1Body}
            </p>
          </div>
          {/* Right Column */}
          <div>
            <p className="font-body text-[15px] leading-[1.8] text-[var(--color-text-light)]">
              {valuePropositionContent.col2Body}
            </p>
          </div>
        </div>
      </div>

      {/* Full-width Image */}
      <div className="px-[5vw] pb-[5vw]">
        <div className="relative w-full aspect-[16/7] overflow-hidden">
          <Image
            src={images.valueProposition}
            alt="Panoramic view of Santa Monica coastline at golden hour"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </div>
    </section>
  );
}
