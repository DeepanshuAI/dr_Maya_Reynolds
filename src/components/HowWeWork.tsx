import Image from "next/image";
import Link from "next/link";
import { howWeWorkContent } from "@/data/pageContent";
import { images } from "@/data/images";

export default function HowWeWork() {
  return (
    <section
      className="bg-[var(--color-surface)] border-editorial"
      aria-label="How We Work"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left: Text Content */}
        <div className="section-padding flex flex-col justify-center">
          {/* Eyebrow */}
          <p className="font-body text-[11px] tracking-[3px] uppercase text-[var(--color-text)] mb-5">
            {howWeWorkContent.eyebrow}
          </p>

          {/* Heading */}
          <h2 className="font-display text-[36px] md:text-[44px] lg:text-[52px] leading-[1.15] text-[var(--color-text)] mb-10">
            {howWeWorkContent.heading}
          </h2>

          {/* Two Column Text */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div>
              <p className="font-body text-[11px] tracking-[2.5px] uppercase leading-[1.8] text-[var(--color-text)] mb-5">
                {howWeWorkContent.col1Subheading}
              </p>
              <p className="font-body text-[14px] leading-[1.8] text-[var(--color-text-light)]">
                {howWeWorkContent.col1Body}
              </p>
            </div>
            <div>
              <p className="font-body text-[14px] leading-[1.8] text-[var(--color-text-light)]">
                {howWeWorkContent.col2Body}
              </p>
            </div>
          </div>

          {/* CTA */}
          <div>
            <Link
              href={howWeWorkContent.col1Cta.href}
              className="btn-pill"
            >
              {howWeWorkContent.col1Cta.label}
            </Link>
          </div>
        </div>

        {/* Right: Tall Image */}
        <div className="relative min-h-[400px] lg:min-h-full overflow-hidden">
          <Image
            src={images.howWeWork}
            alt="Mother and daughter walking hand-in-hand along the beach at sunset"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
