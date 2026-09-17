import Image from "next/image";
import Link from "next/link";
import { howIWorkContent } from "@/data/pageContent";
import { images } from "@/data/images";

export default function HowWeWork() {
  return (
    <section
      className="bg-[var(--color-surface)] border-editorial"
      aria-label="My Approach"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left: Text Content */}
        <div className="section-padding flex flex-col justify-center">
          {/* Eyebrow */}
          <p className="font-body text-[11px] tracking-[3px] uppercase text-[var(--color-text)] mb-5">
            {howIWorkContent.eyebrow}
          </p>

          {/* Heading */}
          <h2 className="font-display text-[36px] md:text-[44px] lg:text-[52px] leading-[1.15] text-[var(--color-text)] mb-10">
            {howIWorkContent.heading}
          </h2>

          {/* Two Column Text */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div>
              <p className="font-body text-[11px] tracking-[2.5px] uppercase leading-[1.8] text-[var(--color-text)] mb-5">
                {howIWorkContent.col1Subheading}
              </p>
              <p className="font-body text-[14px] leading-[1.8] text-[var(--color-text-light)]">
                {howIWorkContent.col1Body}
              </p>
            </div>
            <div>
              <p className="font-body text-[14px] leading-[1.8] text-[var(--color-text-light)]">
                {howIWorkContent.col2Body}
              </p>
            </div>
          </div>

          {/* CTA */}
          <div>
            <Link
              href={howIWorkContent.col1Cta.href}
              className="btn-pill"
            >
              {howIWorkContent.col1Cta.label}
            </Link>
          </div>
        </div>

        {/* Right: Portrait Image */}
        <div className="relative min-h-[500px] lg:min-h-full overflow-hidden">
          <Image
            src={images.howIWork}
            alt="Dr. Maya Reynolds, PsyD, Licensed Clinical Psychologist"
            fill
            className="object-cover object-top"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          {/* Identity Overlay */}
          <div className="absolute bottom-0 left-0 bg-[var(--color-background)] p-6 lg:p-8 md:pr-12 border-t border-r border-[var(--color-border)]">
            <p className="font-display text-[22px] md:text-[26px] text-[var(--color-text)] mb-1">
              Dr. Maya Reynolds, PsyD
            </p>
            <p className="font-body text-[11px] tracking-[2px] uppercase text-[var(--color-text-light)]">
              Licensed Clinical Psychologist
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
