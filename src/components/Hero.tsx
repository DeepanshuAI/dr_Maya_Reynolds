import Image from "next/image";
import Link from "next/link";
import { heroContent } from "@/data/pageContent";
import { images } from "@/data/images";

export default function Hero() {
  return (
    <section className="section-padding" aria-label="Hero">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Left: Image Collage */}
        <div className="grid grid-cols-2 gap-3">
          {/* Large left image spanning both rows */}
          <div className="row-span-2 relative aspect-[3/4] overflow-hidden">
            <Image
              src={images.hero.main}
              alt="Serene Santa Monica beach shoreline at golden hour"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 50vw, 25vw"
            />
          </div>
          {/* Top right image */}
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={images.hero.topRight}
              alt="Calm therapy office with natural light and comfortable seating"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 50vw, 25vw"
            />
          </div>
          {/* Bottom right image */}
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={images.hero.bottomRight}
              alt="Santa Monica coastal sunset with palm trees"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 50vw, 25vw"
            />
          </div>
        </div>

        {/* Right: Text Content */}
        <div className="flex flex-col justify-center lg:pl-8">
          <p className="font-body text-[11px] tracking-[3px] uppercase text-[var(--color-text-light)] mb-6">
            SANTA MONICA, CALIFORNIA & ONLINE
          </p>
          <h1 className="font-display text-[42px] md:text-[52px] lg:text-[62px] leading-[1.1] text-[var(--color-text)] mb-8">
            {heroContent.headline}{" "}
            <span className="text-script-accent text-[48px] md:text-[58px] lg:text-[68px]">
              {heroContent.headlineAccent}
            </span>
          </h1>
          <p className="font-body text-[15px] leading-[1.8] text-[var(--color-text-light)] mb-10 max-w-[480px]">
            {heroContent.subheadline}
          </p>
          <div>
            <Link href={heroContent.cta.href} className="btn-pill">
              {heroContent.cta.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
