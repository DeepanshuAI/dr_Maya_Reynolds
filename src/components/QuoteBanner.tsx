import Image from "next/image";
import { quoteBannerContent } from "@/data/pageContent";
import { images } from "@/data/images";

export default function QuoteBanner() {
  return (
    <section className="relative w-full min-h-[400px] md:min-h-[500px] lg:min-h-[600px] flex items-center justify-center overflow-hidden" aria-label="Inspirational Quote">
      {/* Background Image */}
      <Image
        src={images.quoteBanner}
        alt="Children running joyfully through ocean waves at the beach"
        fill
        className="object-cover"
        sizes="100vw"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-[var(--color-text)] opacity-45"></div>
      {/* Quote Text */}
      <div className="relative z-10 px-[8vw] md:px-[12vw] lg:px-[16vw] text-center">
        <blockquote>
          <p className="font-display text-[28px] md:text-[36px] lg:text-[46px] leading-[1.25] text-white italic">
            {quoteBannerContent.quote}
          </p>
        </blockquote>
      </div>
    </section>
  );
}
