import Image from "next/image";
import Link from "next/link";
import { bottomCtaContent } from "@/data/pageContent";
import { images } from "@/data/images";

export default function BottomCTA() {
  return (
    <section
      className="section-padding border-editorial"
      aria-label="Schedule an Appointment"
    >
      {/* Eyebrow */}
      <p className="font-body text-[11px] tracking-[3px] uppercase text-[var(--color-text)] mb-12 lg:mb-16 text-center">
        {bottomCtaContent.eyebrow}
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Image */}
        <div className="hidden lg:block lg:col-span-3">
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image
              src={images.bottomCta.left}
              alt="Peaceful portrait in nature setting"
              fill
              className="object-cover"
              sizes="25vw"
            />
          </div>
        </div>

        {/* Center: Text Content */}
        <div className="lg:col-span-6 text-center px-4 lg:px-8">
          <h2 className="font-display text-[36px] md:text-[44px] lg:text-[52px] leading-[1.15] text-[var(--color-text)] mb-8">
            {bottomCtaContent.heading}{" "}
            <span className="text-script-accent text-[42px] md:text-[50px] lg:text-[58px]">
              {bottomCtaContent.headingAccent}
            </span>
          </h2>
          <p className="font-body text-[15px] leading-[1.8] text-[var(--color-text-light)] mb-6 max-w-[540px] mx-auto">
            {bottomCtaContent.body}
          </p>
          <p className="font-body text-[15px] leading-[1.8] text-[var(--color-text-light)] mb-10">
            {bottomCtaContent.subBody}
          </p>
          <Link href={bottomCtaContent.cta.href} className="btn-pill">
            {bottomCtaContent.cta.label}
          </Link>
        </div>

        {/* Right Image */}
        <div className="hidden lg:block lg:col-span-3">
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image
              src={images.bottomCta.right}
              alt="Thoughtful portrait in natural setting"
              fill
              className="object-cover"
              sizes="25vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
